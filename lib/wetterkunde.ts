import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";

/**
 * Wetterkunde — Pillar-Artikel aus Markdown.
 *
 * Ablage: content/wetterkunde/<slug>.md (Deutsch, führende Fassung) plus
 * <slug>.fr.md / <slug>.it.md für die Übersetzungen. Ein Artikel geht live,
 * sobald die Datei dort liegt UND im Frontmatter `status: published` steht.
 * `status: draft` wird lokal gerendert (Vorschau unter /wetterkunde/<slug>),
 * erscheint aber weder im Hub noch in der Sitemap und ist auf noindex.
 *
 * Frontmatter-Konvention wie im Marketing-Repo (deutsche Schlüssel):
 *   titel, slug, ziel_keyword, typ, sprache, status, autor, stand,
 *   meta_title, meta_description, og_bild, schema[]
 */

const CONTENT_DIR = path.join(process.cwd(), "content", "wetterkunde");
const PUBLIC_DIR = path.join(process.cwd(), "public");

export type WkLocale = "de" | "fr" | "it";
export const WK_LOCALES: readonly WkLocale[] = ["de", "fr", "it"] as const;

function fileNameFor(slug: string, locale: WkLocale): string {
  return locale === "de" ? `${slug}.md` : `${slug}.${locale}.md`;
}

export type ArticleStatus = "draft" | "published";

export interface ArticleMeta {
  slug: string;
  titel: string;
  metaTitle: string;
  metaDescription: string;
  status: ArticleStatus;
  autor: string;
  /** ISO-Datum des letzten inhaltlichen Stands (Frontmatter `stand`). */
  stand: string;
  /** Erstveröffentlichung; fällt auf `stand` zurück, solange nicht gesetzt. */
  veroeffentlicht: string;
  zielKeyword: string;
  ogBild: string | null;
  /** Erster Absatz nach dem TL;DR — Teaser für den Hub. */
  teaser: string;
  lesezeitMinuten: number;
}

export interface Article extends ArticleMeta {
  html: string;
  faq: ReadonlyArray<{ q: string; a: string }>;
}

/** Eigene marked-Instanz — GFM-Tabellen an, Smartypants aus (Typografie steht im Text). */
const marked = new Marked({ gfm: true, breaks: false });

function readFile(slug: string, locale: WkLocale): string | null {
  const file = path.join(CONTENT_DIR, fileNameFor(slug, locale));
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, "utf8");
}

/** Redaktionelle HTML-Kommentare (`<!-- NOTIZEN … -->`) gehören nie auf die Seite. */
function stripComments(md: string): string {
  return md.replace(/<!--[\s\S]*?-->/g, "");
}

/**
 * Die H1 steht im Markdown und wird von der Seite separat gerendert —
 * hier raus, sonst steht sie doppelt auf der Seite.
 */
function stripH1(md: string): string {
  return md.replace(/^#\s+.+$/m, "");
}

function toStatus(value: unknown): ArticleStatus {
  return value === "published" ? "published" : "draft";
}

function toIsoDate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value.slice(0, 10);
  }
  return new Date().toISOString().slice(0, 10);
}

/** Grobe Lesezeit: 200 Wörter pro Minute, auf ganze Minuten aufgerundet. */
function readingTime(md: string): number {
  const words = md.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Ablaufgrafiken mit eigener Zeitleiste als `<object>` einbinden statt als `<img>`.
 *
 * Chrome hält die Animationsuhr eines per `<img>` eingebundenen SVG bei t=0 an.
 * Unsere Ablaufgrafiken arbeiten mit `animation-fill-mode: both`, also steht dann
 * jede Spur auf ihrer 0-%-Stufe — die Grafik bleibt **leer**, sie bleibt nicht etwa
 * beim Endbild stehen (im Browser nachgemessen 19.08.2026: `<img>` zeigte nur Himmel
 * und Boden, `<object>` und Inline liefen). Als `<object>` lädt der Browser das SVG
 * als eigenes Dokument: die Animation läuft, die SVG-eigenen Klassennamen und
 * `@keyframes` bleiben von der Seite isoliert, und die `@media`-Abfragen im SVG
 * beziehen sich weiter auf die Darstellungsgrösse der Grafik — genau wie beim `<img>`,
 * wofür sie gebaut sind.
 *
 * Nur SVG mit eigener Zeitleiste werden umgestellt; alle anderen bleiben `<img>`
 * (Lazy-Loading, weniger Markup). Der ursprüngliche `<img>` bleibt als Fallback im
 * `<object>` stehen, falls die Datei fehlt.
 */
const SVG_IMG = /<img\b[^>]*\ssrc="(\/[^"]+\.svg)"[^>]*>/g;

function attrOf(tag: string, name: string): string | null {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`));
  return m ? m[1] : null;
}

/** Hat das SVG eine eigene Zeitleiste (CSS-Keyframes oder SMIL)? */
function isAnimatedSvg(src: string): boolean {
  const file = path.join(PUBLIC_DIR, src.replace(/^\/+/, ""));
  if (!fs.existsSync(file)) return false;
  return /@keyframes|<animate/.test(fs.readFileSync(file, "utf8"));
}

function embedAnimatedSvgs(html: string): string {
  return html.replace(SVG_IMG, (tag, src: string) => {
    if (!isAnimatedSvg(src)) return tag;
    const alt = (attrOf(tag, "alt") ?? "").replace(/"/g, "&quot;");
    const w = attrOf(tag, "width") ?? "1600";
    const h = attrOf(tag, "height") ?? "900";
    return (
      `<div class="fig-anim">` +
      `<object type="image/svg+xml" data="${src}" aria-label="${alt}"` +
      ` style="aspect-ratio:${w}/${h}">${tag}</object>` +
      `</div>`
    );
  });
}

/**
 * FAQ für das FAQPage-Schema. Konvention im Artikel:
 *
 *   ## Häufige Fragen   (fr: Questions fréquentes · it: Domande frequenti)
 *   **Frage?**
 *   Antwort in einer Zeile.
 */
function extractFaq(md: string): Array<{ q: string; a: string }> {
  const section = md.split(
    /^##\s+(?:Häufige Fragen|Questions fréquentes|Domande frequenti)\s*$/m,
  )[1];
  if (!section) return [];
  const body = section.split(/^##\s+/m)[0];
  const items: Array<{ q: string; a: string }> = [];
  const re = /^\*\*(.+?)\*\*\s*\n([^\n]+)/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(body)) !== null) {
    items.push({ q: m[1].trim(), a: stripInlineMarkdown(m[2].trim()) });
  }
  return items;
}

/** Schema.org will Klartext, kein Markdown. */
function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

/** Teaser für die Hub-Karte: erster echter Absatz nach dem TL;DR-Blockquote. */
function extractTeaser(md: string): string {
  const paragraphs = md
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(
      (p) =>
        p.length > 0 &&
        !p.startsWith("#") &&
        !p.startsWith(">") &&
        !p.startsWith("---") &&
        !p.startsWith("|"),
    );
  const first = paragraphs[0] ?? "";
  return stripInlineMarkdown(first);
}

function parse(slug: string, raw: string): Article {
  const { data, content } = matter(raw);
  const md = stripComments(content);
  const body = stripH1(md);
  const titel = String(data.titel ?? slug);
  const stand = toIsoDate(data.stand);

  return {
    slug,
    titel,
    metaTitle: String(data.meta_title ?? titel),
    metaDescription: String(data.meta_description ?? ""),
    status: toStatus(data.status),
    autor: String(data.autor ?? "Maurin (Founder & Pilot, Wingcast)"),
    stand,
    veroeffentlicht: toIsoDate(data.veroeffentlicht ?? data.stand),
    zielKeyword: String(data.ziel_keyword ?? ""),
    ogBild: data.og_bild ? String(data.og_bild).split(/\s+#/)[0].trim() : null,
    teaser: extractTeaser(body),
    lesezeitMinuten: readingTime(body),
    html: embedAnimatedSvgs(marked.parse(body, { async: false }) as string),
    faq: extractFaq(md),
  };
}

/** Alle Artikel einer Sprache — auch Entwürfe. Neueste zuerst. */
export function getAllArticles(locale: WkLocale = "de"): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const suffix = locale === "de" ? /\.md$/ : new RegExp(`\\.${locale}\\.md$`);
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => {
      if (f === "README.md") return false;
      if (locale === "de") return f.endsWith(".md") && !/\.(fr|it)\.md$/.test(f);
      return f.endsWith(`.${locale}.md`);
    })
    .map((f) => f.replace(suffix, ""))
    .map((slug) => {
      const raw = readFile(slug, locale);
      return raw ? parse(slug, raw) : null;
    })
    .filter((a): a is Article => a !== null)
    .sort((a, b) => b.stand.localeCompare(a.stand));
}

/** Nur was freigegeben ist — Hub, Sitemap und llms.txt arbeiten damit. */
export function getPublishedArticles(locale: WkLocale = "de"): Article[] {
  return getAllArticles(locale).filter((a) => a.status === "published");
}

export function getArticle(slug: string, locale: WkLocale = "de"): Article | null {
  const raw = readFile(slug, locale);
  return raw ? parse(slug, raw) : null;
}

/** Slugs für generateStaticParams — Entwürfe eingeschlossen, damit die Vorschau baut. */
export function getAllSlugs(locale: WkLocale = "de"): string[] {
  return getAllArticles(locale).map((a) => a.slug);
}

/** In welchen Sprachen ist dieser Artikel PUBLIZIERT? Für hreflang und Sitemap. */
export function getArticleLocales(slug: string): WkLocale[] {
  return WK_LOCALES.filter((locale) => {
    const raw = readFile(slug, locale);
    if (!raw) return false;
    return parse(slug, raw).status === "published";
  });
}
