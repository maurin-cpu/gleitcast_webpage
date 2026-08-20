/**
 * Bild-Check für Metadaten und Inhalte.
 *
 * Anlass: /wetterkunde/boeenfront trug monatelang
 * `og:image = https://wingcast.ch/og/wetterkunde-boeenfront.jpg` im DOM — eine
 * Datei, die nie angelegt wurde. Auf Facebook kam eine graue Fläche statt einer
 * Vorschau, und gemerkt hat es niemand, weil nichts es geprüft hat. Genau das
 * macht dieses Skript.
 *
 * Zwei Betriebsarten:
 *
 *   node scripts/check-og-images.mjs
 *       Offline, läuft vor jedem `next build` (siehe package.json). Prüft gegen
 *       das Dateisystem: existiert jede referenzierte lokale Datei, stimmen die
 *       Masse der OG-Bilder, gibt es für jeden Artikel ohne Handbild die
 *       generierende Route. Kein Netz, keine laufende Seite nötig.
 *
 *   node scripts/check-og-images.mjs --base https://www.wingcast.ch
 *       Über HTTP gegen eine laufende Instanz (lokal nach `next start` oder das
 *       Deployment). Verlangt für jede Bild-URL 200 + Content-Type image/*.
 *       Das ist die Fassung für nach dem Deploy — sie sieht auch Fehler, die
 *       erst beim Ausliefern entstehen (Middleware-Redirects, CDN-Regeln).
 *
 * Exit 1 bei jedem Fehler, damit CI und Build daran scheitern.
 */
import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve, sep } from "node:path";
import matter from "gray-matter";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_DIR = join(ROOT, "public");
const CONTENT_DIR = join(ROOT, "content", "wetterkunde");

// Muss mit lib/seo.ts übereinstimmen — hier bewusst dupliziert, weil ein
// .mjs-Skript kein TypeScript importieren kann. Der Check unten hält beides
// zusammen: weicht lib/seo.ts ab, schlägt er an.
const SITE_URL = "https://www.wingcast.ch";
const LOCALES = ["de", "fr", "it"];
const DEFAULT_LOCALE = "de";
const DEFAULT_OG_IMAGE = "/og/default.jpg";
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
/** Facebook verweigert Bilder über 8 MB; ab 1 MB wird das Scrapen spürbar zäh. */
const WARN_BYTES = 1024 * 1024;
const FAIL_BYTES = 8 * 1024 * 1024;

const args = process.argv.slice(2);
const baseIndex = args.indexOf("--base");
const BASE = baseIndex >= 0 ? args[baseIndex + 1]?.replace(/\/$/, "") : null;

const errors = [];
const warnings = [];
const ok = [];

const fail = (where, message) => errors.push(`${where}: ${message}`);
const warn = (where, message) => warnings.push(`${where}: ${message}`);
const pass = (where, message) => ok.push(`${where}: ${message}`);

// ── Bildmasse aus dem Dateikopf ───────────────────────────────────────────
// Reicht für PNG und JPEG; SVG hat keine Pixelmasse und wird übersprungen.

function pngSize(buf) {
  if (buf.length < 24 || buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function jpegSize(buf) {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i < buf.length - 9) {
    if (buf[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = buf[i + 1];
    // SOF0..SOF15 ohne DHT/JPG/DAC (0xC4, 0xC8, 0xCC) tragen die Masse.
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}

function imageSize(buf) {
  return pngSize(buf) ?? jpegSize(buf);
}

const EXT_TYPE = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
  svg: "image/svg+xml",
  gif: "image/gif",
  avif: "image/avif",
};

function extOf(p) {
  const m = p.toLowerCase().match(/\.([a-z0-9]+)$/);
  return m ? m[1] : null;
}

// ── Artikel einlesen ──────────────────────────────────────────────────────
// Nur das Frontmatter — bewusst schlank statt lib/wetterkunde.ts nachzubauen.

function articles() {
  if (!existsSync(CONTENT_DIR)) return [];
  return readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map((file) => {
      const m = file.match(/^(.+?)(?:\.(fr|it))?\.md$/);
      const slug = m[1];
      const locale = m[2] ?? "de";
      const { data } = matter(readFileSync(join(CONTENT_DIR, file), "utf8"));
      return {
        file,
        slug,
        locale,
        status: data.status === "published" ? "published" : "draft",
        ogBild: data.og_bild
          ? String(data.og_bild).split(/\s+#/)[0].trim()
          : null,
      };
    });
}

// ── Prüfziele sammeln ─────────────────────────────────────────────────────

function localePath(locale, path = "") {
  return `${locale === DEFAULT_LOCALE ? "" : `/${locale}`}${path}` || "/";
}

/**
 * Jede Seite mit ihrem OG-Bild — gespiegelt zur Auflösung in lib/og.ts.
 * `kind: "file"` = statische Datei in public/, `kind: "route"` = von next/og
 * beim Build erzeugtes Bild.
 */
function targets() {
  const out = [];

  for (const locale of LOCALES) {
    for (const path of [
      "",
      "/wetterkunde",
      "/impressum",
      "/datenschutz",
      "/nutzungsbedingungen",
    ]) {
      out.push({
        page: localePath(locale, path),
        image: DEFAULT_OG_IMAGE,
        kind: "file",
        role: "Standardbild",
      });
    }
  }

  for (const a of articles()) {
    const page = localePath(a.locale, `/wetterkunde/${a.slug}`);
    if (a.ogBild) {
      // Handbild aus dem Frontmatter. Fehlt die Datei, fällt lib/og.ts zur
      // Laufzeit auf das generierte Bild zurück — hier ist es trotzdem ein
      // Fehler, sonst wird der Fallback klammheimlich zur Dauerlösung.
      out.push({
        page,
        image: a.ogBild,
        kind: "file",
        role: `og_bild aus ${a.file}`,
        strictOgSize: true,
        fallback: `/og/wetterkunde/${a.locale}/${a.slug}`,
      });
    } else {
      out.push({
        page,
        image: `/og/wetterkunde/${a.locale}/${a.slug}`,
        kind: "route",
        role: `generiert (next/og), ${a.file}`,
      });
    }
  }

  return out;
}

// ── Offline-Prüfung ───────────────────────────────────────────────────────

function publicPathOf(urlPath) {
  const file = resolve(PUBLIC_DIR, urlPath.replace(/^\/+/, ""));
  // Kein Ausbruch aus public/ über ../ im Frontmatter.
  return file.startsWith(PUBLIC_DIR + sep) ? file : null;
}

function checkLocalFile(urlPath, where, { strictOgSize = false } = {}) {
  const file = publicPathOf(urlPath);
  if (!file) {
    fail(where, `Pfad zeigt aus public/ heraus: ${urlPath}`);
    return false;
  }
  if (!existsSync(file) || !statSync(file).isFile()) {
    fail(where, `Datei fehlt: public${urlPath}`);
    return false;
  }

  const ext = extOf(urlPath);
  if (!ext || !EXT_TYPE[ext]) {
    fail(where, `keine erkennbare Bild-Endung: ${urlPath}`);
    return false;
  }

  const bytes = statSync(file).size;
  if (bytes > FAIL_BYTES) {
    fail(where, `${urlPath} ist ${(bytes / 1e6).toFixed(1)} MB — Facebook lehnt über 8 MB ab`);
    return false;
  }
  if (bytes > WARN_BYTES) {
    warn(where, `${urlPath} ist ${(bytes / 1e6).toFixed(1)} MB — unter 1 MB halten`);
  }

  if (ext === "svg") {
    pass(where, `${urlPath} (SVG, keine Pixelmasse)`);
    return true;
  }

  const size = imageSize(readFileSync(file));
  if (!size) {
    warn(where, `${urlPath}: Masse nicht lesbar (${ext})`);
    return true;
  }
  if (strictOgSize && (size.width !== OG_WIDTH || size.height !== OG_HEIGHT)) {
    fail(
      where,
      `${urlPath} ist ${size.width}×${size.height} — OG-Bilder in public/og/ müssen ${OG_WIDTH}×${OG_HEIGHT} sein`,
    );
    return false;
  }
  if (size.width < 600 || size.height < 315) {
    fail(where, `${urlPath} ist ${size.width}×${size.height} — Facebook braucht mindestens 600×315`);
    return false;
  }
  pass(where, `${urlPath} (${size.width}×${size.height}, ${Math.round(bytes / 1024)} KB)`);
  return true;
}

const OG_ROUTE_FILE = join(
  ROOT,
  "app",
  "og",
  "wetterkunde",
  "[locale]",
  "[slug]",
  "route.tsx",
);

function checkGeneratedRoute(urlPath, where) {
  if (!existsSync(OG_ROUTE_FILE)) {
    fail(where, `${urlPath} soll generiert werden, aber app/og/wetterkunde/[locale]/[slug]/route.tsx fehlt`);
    return false;
  }
  pass(where, `${urlPath} (wird beim Build von next/og erzeugt)`);
  return true;
}

// ── HTTP-Prüfung ──────────────────────────────────────────────────────────

async function checkOverHttp(urlPath, where) {
  const url = `${BASE}${urlPath}`;
  let res;
  try {
    // HEAD zuerst; manche Handler beantworten nur GET.
    res = await fetch(url, { method: "HEAD", redirect: "follow" });
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, { method: "GET", redirect: "follow" });
    }
  } catch (e) {
    fail(where, `${url} nicht erreichbar: ${e.message}`);
    return false;
  }

  if (res.status !== 200) {
    fail(where, `${url} antwortet ${res.status}`);
    return false;
  }
  const type = res.headers.get("content-type") ?? "";
  if (!type.startsWith("image/")) {
    fail(where, `${url} liefert Content-Type "${type}" statt image/*`);
    return false;
  }
  if (res.redirected && res.url !== url) {
    warn(where, `${url} wird auf ${res.url} umgeleitet — Metadaten sollten direkt auf das Ziel zeigen`);
  }
  pass(where, `${url} → 200 ${type}`);
  return true;
}

// ── Zusatz: lokale Bildpfade im Code und in den Artikeln ──────────────────
// Fängt tote <img src="/…">, Schema-Bilder und Frontmatter-Assets ab, die nicht
// in der OG-Auflösung stecken (z. B. das frühere /og-image.png im Organization-
// Schema oder eine SVG-Abbildung, die es nie ins Repo geschafft hat).

const SCAN_DIRS = ["app", "lib", "components", "content"];
const EXT = "png|jpe?g|webp|svg|gif|avif|mp4";

/**
 * Bewusst nur echte Referenzstellen, nicht jeder Pfad-artige String: In
 * app/[locale]/logo-preview/page.tsx steht `/brand/logo-current.svg` als reines
 * Anzeige-Label in einem <code>-Tag, die Logos selbst sind inline-SVG. Ein
 * Scan über alle Stringliterale meldet so etwas als Fehler und der Check wird
 * zum Rauschen, das man wegklickt.
 */
const IMG_REFS = [
  // src="/…", data="/…", poster="/…" — JSX, HTML in Markdown, <object>
  new RegExp(`(?:src|data|poster)=["'](/[^"']+\\.(?:${EXT}))["']`, "g"),
  // Markdown-Bild und -Link: ![alt](/…) bzw. [text](/…)
  new RegExp(`\\]\\((/[^)\\s]+\\.(?:${EXT}))\\)`, "g"),
  // Absolute URLs im Code: `${SITE_URL}/…` und absoluteUrl("/…")
  new RegExp(`\\$\\{SITE_URL\\}(/[^"'\`\\s)]+\\.(?:${EXT}))`, "g"),
  new RegExp(`absoluteUrl\\(\\s*["'](/[^"']+\\.(?:${EXT}))["']`, "g"),
  // Metadaten- und Frontmatter-Schlüssel, die ein Bild bezeichnen
  new RegExp(
    `(?:url|logo|image|icon|shortcut|apple|primaryImageOfPage|og_bild|video|bild)\\s*:\\s*["'\`]?(/[^"'\`,\\s)]+\\.(?:${EXT}))`,
    "g",
  ),
];

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (/\.(tsx?|mjs|md)$/.test(entry.name)) out.push(p);
  }
  return out;
}

function checkReferencedAssets() {
  const seen = new Map();
  for (const file of SCAN_DIRS.flatMap((d) => walk(join(ROOT, d)))) {
    const text = readFileSync(file, "utf8");
    for (const re of IMG_REFS) {
      for (const m of text.matchAll(re)) {
        const p = m[1];
        if (p.startsWith("/_next/") || p.startsWith("/api/")) continue;
        if (!seen.has(p)) seen.set(p, new Set());
        seen.get(p).add(file.slice(ROOT.length + 1).split(sep).join("/"));
      }
    }
  }

  for (const [urlPath, files] of [...seen].sort()) {
    const where = `Asset ${[...files][0]}`;
    const file = publicPathOf(urlPath);
    if (file && existsSync(file)) {
      pass(where, `${urlPath} vorhanden`);
    } else {
      fail(where, `verweist auf public${urlPath} — Datei fehlt (${[...files].join(", ")})`);
    }
  }
}

// ── Artikel und Handbilder gegeneinander ──────────────────────────────────

/**
 * Namenskonvention für Handbilder (nicht vom Code erzwungen, sondern hier):
 *
 *   content/wetterkunde/<slug>.md        ↔  public/og/wetterkunde-<slug>.png
 *   content/wetterkunde/<slug>.fr.md     ↔  public/og/wetterkunde-<slug>.fr.png
 *
 * Der Loader liest den Pfad aus `og_bild`, der Dateiname ist ihm egal. Damit
 * ein danebengelegtes Bild trotzdem auffällt, prüft dieser Abschnitt beide
 * Richtungen: Bild ohne Artikel und Artikel, dessen Bild bereitliegt, aber
 * nicht eingetragen ist.
 */
const OG_FILE = /^wetterkunde-(.+?)(?:\.(fr|it))?\.(png|jpe?g|webp)$/;
const OG_DIR = join(PUBLIC_DIR, "og");

function checkArticleImagePairing() {
  const all = articles();
  const key = (slug, locale) => `${locale}/${slug}`;
  const byKey = new Map(all.map((a) => [key(a.slug, a.locale), a]));

  // Richtung 1: Bild → Artikel
  const files = existsSync(OG_DIR) ? readdirSync(OG_DIR) : [];
  for (const file of files.sort()) {
    const m = file.match(OG_FILE);
    // default.jpg und alles ohne wetterkunde-Präfix ist kein Artikelbild.
    if (!m) continue;
    const [, slug, locale = "de"] = m;
    const where = `Paarung public/og/${file}`;
    const article = byKey.get(key(slug, locale));

    if (!article) {
      // Kein Fehler: die Datei bricht nichts, sie liegt nur ungenutzt herum.
      // Typischer Zwischenstand — Bild zuerst abgelegt, Übersetzung folgt.
      warn(
        where,
        `kein Artikel content/wetterkunde/${slug}${locale === "de" ? "" : `.${locale}`}.md — Bild wird nirgends ausgeliefert`,
      );
      continue;
    }
    if (article.ogBild !== `/og/${file}`) {
      warn(
        where,
        `${article.file} verweist nicht darauf (og_bild: ${article.ogBild ?? "fehlt"}) — ausgeliefert wird das generierte Bild`,
      );
      continue;
    }
    pass(where, `↔ ${article.file}`);
  }

  // Richtung 2: Artikel → Bild
  for (const a of all) {
    const where = `Paarung ${a.file}`;
    if (a.ogBild) continue; // Richtung 1 und der Datei-Check haben das erledigt.
    const expected = files.find((f) => {
      const m = f.match(OG_FILE);
      return m && m[1] === a.slug && (m[2] ?? "de") === a.locale;
    });
    // Liegt ein Bild nach Konvention bereit, hat Richtung 1 es bereits gemeldet
    // — hier nicht zweimal dasselbe sagen.
    if (!expected) {
      pass(where, "kein Handbild, nutzt das generierte (so vorgesehen)");
    }
  }
}

// ── Konsistenz: Host und Masse gegen lib/seo.ts ───────────────────────────

function checkSeoConstants() {
  const where = "lib/seo.ts";
  const seo = join(ROOT, "lib", "seo.ts");
  if (!existsSync(seo)) {
    fail(where, "fehlt — die Konstanten dieses Skripts hängen daran");
    return;
  }
  const text = readFileSync(seo, "utf8");
  if (!text.includes(`export const SITE_URL = "${SITE_URL}"`)) {
    fail(where, `SITE_URL weicht von diesem Skript ab (erwartet ${SITE_URL}) — beide angleichen`);
  }
  if (!text.includes(`width: ${OG_WIDTH}, height: ${OG_HEIGHT}`)) {
    fail(where, `OG_SIZE weicht von ${OG_WIDTH}×${OG_HEIGHT} ab — beide angleichen`);
  }
  // Auf die Zuweisung prüfen, nicht auf ein Vorkommen irgendwo im Text —
  // sonst genügt eine Erwähnung im Kommentar.
  if (!new RegExp(`DEFAULT_OG_IMAGE_PATH\\s*=\\s*["']${DEFAULT_OG_IMAGE}["']`).test(text)) {
    fail(where, `DEFAULT_OG_IMAGE_PATH weicht von ${DEFAULT_OG_IMAGE} ab — beide angleichen`);
  }

  // Deklarierte Masse gegen die echte Datei. Genau hier lag ein stiller Fehler:
  // das Layout gab 2400×1400 an, die Datei war 2554×1232. Facebook nimmt
  // og:image:width/height wörtlich und schneidet danach zu.
  const declared = text.match(
    /DEFAULT_OG_IMAGE_SIZE\s*=\s*\{\s*width:\s*(\d+),\s*height:\s*(\d+)/,
  );
  const file = publicPathOf(DEFAULT_OG_IMAGE);
  if (declared && file && existsSync(file)) {
    const real = imageSize(readFileSync(file));
    const [w, h] = [Number(declared[1]), Number(declared[2])];
    if (real && (real.width !== w || real.height !== h)) {
      fail(
        where,
        `DEFAULT_OG_IMAGE_SIZE sagt ${w}×${h}, public${DEFAULT_OG_IMAGE} ist ${real.width}×${real.height}`,
      );
    }
  }

  // Der Apex-Host darf nirgends mehr hart verdrahtet sein: er antwortet mit 308
  // auf www, und ein Redirect in og:image kostet die Vorschau im Zweifel ganz.
  for (const file of SCAN_DIRS.flatMap((d) => walk(join(ROOT, d)))) {
    const rel = file.slice(ROOT.length + 1).split(sep).join("/");
    if (rel.endsWith(".md")) continue; // Fliesstext und Redaktionsnotizen
    const text = readFileSync(file, "utf8");
    if (/https:\/\/wingcast\.ch/.test(text)) {
      fail(rel, "verdrahtet https://wingcast.ch — kanonisch ist https://www.wingcast.ch (SITE_URL aus lib/seo.ts)");
    }
  }

  // Die generierten OG-Bilder haben keine Datei-Endung; ohne Ausnahme im
  // Middleware-Matcher schreibt next-intl sie auf /de/og/… um → 404.
  const mw = join(ROOT, "middleware.ts");
  if (existsSync(mw) && !/\(\?!.*\bog\b.*\)/.test(readFileSync(mw, "utf8"))) {
    fail("middleware.ts", "matcher nimmt /og nicht aus — next-intl würde die OG-Bilder locale-routen");
  }
}

// ── Lauf ──────────────────────────────────────────────────────────────────

const list = targets();
console.log(
  BASE
    ? `Bild-Check über HTTP gegen ${BASE} — ${list.length} Seiten\n`
    : `Bild-Check offline gegen public/ — ${list.length} Seiten\n`,
);

for (const t of list) {
  const where = `${t.page} [${t.role}]`;
  if (BASE) {
    // eslint-disable-next-line no-await-in-loop -- Reihenfolge macht die Ausgabe lesbar
    await checkOverHttp(t.image, where);
  } else if (t.kind === "file") {
    // Alles unter /og/ ist als Social-Bild angelegt und muss exakt 1200×630 sein.
    checkLocalFile(t.image, where, { strictOgSize: t.image.startsWith("/og/") });
  } else {
    checkGeneratedRoute(t.image, where);
  }
}

if (!BASE) {
  checkReferencedAssets();
  checkArticleImagePairing();
  checkSeoConstants();
}

for (const line of ok) console.log(`  ✓ ${line}`);
for (const line of warnings) console.log(`  ! ${line}`);
for (const line of errors) console.error(`  ✗ ${line}`);

console.log(
  `\n${ok.length} ok · ${warnings.length} Hinweis(e) · ${errors.length} Fehler`,
);

if (errors.length) {
  console.error(
    "\n✗ Mindestens eine referenzierte Bild-URL ist tot oder falsch dimensioniert.",
  );
  process.exit(1);
}
console.log("✓ Alle referenzierten Bilder sind vorhanden.");
