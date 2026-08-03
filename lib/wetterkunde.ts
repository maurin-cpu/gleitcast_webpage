import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";

/**
 * Wetterkunde — Pillar-Artikel aus Markdown.
 *
 * Ablage: content/wetterkunde/<slug>.md (Deutsch). Ein Artikel geht live,
 * sobald die Datei dort liegt UND im Frontmatter `status: published` steht.
 * `status: draft` wird lokal gerendert (Vorschau unter /wetterkunde/<slug>),
 * erscheint aber weder im Hub noch in der Sitemap und ist auf noindex.
 *
 * Frontmatter-Konvention wie im Marketing-Repo (deutsche Schlüssel):
 *   titel, slug, ziel_keyword, typ, sprache, status, autor, stand,
 *   meta_title, meta_description, og_bild, schema[]
 *
 * Der Ordner ist bewusst NUR Deutsch: die Wetterkunde ist DE-only, bis eine
 * Übersetzung freigegeben ist (webseite/00-README.md im Marketing-Repo).
 */

const CONTENT_DIR = path.join(process.cwd(), "content", "wetterkunde");

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

function readFile(slug: string): string | null {
  const file = path.join(CONTENT_DIR, `${slug}.md`);
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
 * FAQ für das FAQPage-Schema. Konvention im Artikel:
 *
 *   ## Häufige Fragen
 *   **Frage?**
 *   Antwort in einer Zeile.
 */
function extractFaq(md: string): Array<{ q: string; a: string }> {
  const section = md.split(/^##\s+Häufige Fragen\s*$/m)[1];
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
    html: marked.parse(body, { async: false }) as string,
    faq: extractFaq(md),
  };
}

/** Alle Artikel im Ordner — auch Entwürfe. Neueste zuerst. */
export function getAllArticles(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    // .fr.md / .it.md sind Übersetzungen und bleiben liegen, bis FR/IT freigegeben ist.
    .filter((f) => f.endsWith(".md") && !/\.(fr|it)\.md$/.test(f) && f !== "README.md")
    .map((f) => f.replace(/\.md$/, ""))
    .map((slug) => {
      const raw = readFile(slug);
      return raw ? parse(slug, raw) : null;
    })
    .filter((a): a is Article => a !== null)
    .sort((a, b) => b.stand.localeCompare(a.stand));
}

/** Nur was freigegeben ist — Hub, Sitemap und llms.txt arbeiten damit. */
export function getPublishedArticles(): Article[] {
  return getAllArticles().filter((a) => a.status === "published");
}

export function getArticle(slug: string): Article | null {
  const raw = readFile(slug);
  return raw ? parse(slug, raw) : null;
}

/** Slugs für generateStaticParams — Entwürfe eingeschlossen, damit die Vorschau baut. */
export function getAllSlugs(): string[] {
  return getAllArticles().map((a) => a.slug);
}
