import fs from "node:fs";
import path from "node:path";
import {
  OG_SIZE,
  absoluteUrl,
  articleOgImageUrl,
  defaultOgImage,
  type OgImage,
} from "./seo";

/**
 * Auflösung des OG-Bilds — serverseitig, weil dafür ins Dateisystem geschaut
 * werden muss. Nur aus `generateMetadata` / Server-Komponenten importieren.
 */

const PUBLIC_DIR = path.join(process.cwd(), "public");

/** Liegt der Pfad (ab Root, z. B. `/og/foo.jpg`) wirklich in `public/`? */
export function publicFileExists(urlPath: string): boolean {
  if (!urlPath.startsWith("/")) return false;
  const file = path.join(PUBLIC_DIR, urlPath.replace(/^\/+/, ""));
  // Kein Ausbruch aus public/ über ../ im Frontmatter.
  if (!file.startsWith(PUBLIC_DIR)) return false;
  return fs.existsSync(file) && fs.statSync(file).isFile();
}

interface ArticleOgInput {
  slug: string;
  titel: string;
  autor: string;
  /** Letzter inhaltlicher Stand, ISO-Datum — steht im Bild. */
  stand: string;
  /** Frontmatter `og_bild` — Pfad ab Root oder null. */
  ogBild: string | null;
}

/** FNV-1a, 32 Bit. Reicht für Cache-Busting — hier wird nichts abgesichert. */
function hash(input: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
}

/**
 * Quelltext der Bildvorlage, als Teil des Versions-Tokens.
 *
 * Damit ändert sich die Bild-URL automatisch, sobald jemand am Motiv schraubt —
 * niemand muss daran denken, eine Revisionsnummer hochzuzählen. Genau dieses
 * Vergessen hätte hier gereicht, damit Facebook dauerhaft die alte Fassung
 * zeigt. Wird nur beim Build gelesen (alle Artikelseiten sind statisch
 * vorgerendert); schlägt das fehl, bleibt das Token auf dem Artikelinhalt
 * stehen, statt den Build zu kippen.
 */
const OG_TEMPLATE_REV = (() => {
  try {
    return hash(
      fs.readFileSync(
        path.join(process.cwd(), "app", "og", "wetterkunde", "[locale]", "[slug]", "route.tsx"),
        "utf8",
      ),
    );
  } catch {
    return "0";
  }
})();

/**
 * OG-Bild eines Wetterkunde-Artikels, in dieser Reihenfolge:
 *
 *  1. `og_bild` aus dem Frontmatter — **nur wenn die Datei existiert**. So kann
 *     ein Artikel ein handgebautes Bild bekommen, ohne dass jemand Code anfasst.
 *  2. Sonst das generierte Bild aus `next/og` (Titel auf Marken-Hintergrund).
 *     Das ist der Normalfall: jeder neue Artikel hat damit automatisch ein Bild.
 *
 * Punkt 1 fällt bewusst auf 2 zurück, statt eine tote URL auszuliefern — genau
 * daran ist /wetterkunde/boeenfront gescheitert (`og_bild` zeigte auf ein nie
 * angelegtes /og/wetterkunde-boeenfront.jpg → 404 → graue Fläche auf Facebook).
 * `npm run check:og` bricht in diesem Fall zusätzlich den Build ab, damit der
 * Fallback nicht unbemerkt zur Dauerlösung wird.
 */
export function resolveArticleOgImage(
  article: ArticleOgInput,
  locale: string,
  /**
   * Bereichsbezeichnung in der Sprache der Seite (`Wetterkunde.eyebrow`:
   * „Wetterkunde" / „Météo" / „Meteorologia"). Muss übergeben werden, weil der
   * alt-Text sonst auf der französischen Seite deutsch wäre — Screenreader und
   * Suchmaschinen lesen ihn in der Sprache des Dokuments.
   */
  sectionLabel: string,
): OgImage {
  const alt = `Wingcast ${sectionLabel} — ${article.titel}`;

  if (article.ogBild && publicFileExists(article.ogBild)) {
    // Konvention für Handbilder in public/og/: exakt 1200×630.
    // Wird von scripts/check-og-images.mjs erzwungen.
    return { url: absoluteUrl(article.ogBild), ...OG_SIZE, alt };
  }

  // Versions-Token: Bildvorlage + alles, was im Bild steht. Ändert sich eins
  // davon, ändert sich die URL — sonst hält Facebook das alte Motiv fest
  // (die Route wird mit `immutable, max-age=31536000` ausgeliefert).
  const version = hash(
    `${OG_TEMPLATE_REV}|${article.titel}|${article.autor}|${article.stand}|${sectionLabel}`,
  );

  return {
    url: articleOgImageUrl(locale, article.slug, version),
    ...OG_SIZE,
    alt,
  };
}

/**
 * OG-Bild für alle Seiten ohne eigenes Motiv (Startseite, Hub, Rechtliches):
 * das Standardbild der Site. Dass die Datei existiert und die angegebenen Masse
 * hat, prüft `scripts/check-og-images.mjs` vor jedem Build.
 */
export function siteOgImage(alt: string): OgImage {
  return defaultOgImage(alt);
}
