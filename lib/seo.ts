import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";

/**
 * Eine Quelle der Wahrheit für Host, Social-Tags und OG-Bilder.
 *
 * KANONISCHER HOST: www.wingcast.ch
 * Der Apex (wingcast.ch) antwortet in Produktion mit 308 auf www — nachgemessen
 * 20.08.2026. Damit ist www der Host, der tatsächlich ausliefert; Canonical,
 * og:url, hreflang, Sitemap, robots.txt und alle Bild-URLs verwenden ihn
 * einheitlich. Nie den Apex hart verdrahten: Facebooks Scraper folgt bei
 * og:image zwar dem Redirect, protokolliert das aber als Warnung, und jeder
 * Redirect kostet einen Roundtrip beim Crawlen.
 *
 * Dieses Modul ist bewusst frei von Node-Imports (kein `fs`), damit es auch aus
 * Client-Komponenten importiert werden kann. Alles, was das Dateisystem
 * braucht, steht in `lib/og.ts`.
 */
export const SITE_URL = "https://www.wingcast.ch";
export const SITE_NAME = "Wingcast";

export const HREFLANG: Record<Locale, string> = {
  de: "de-CH",
  fr: "fr-CH",
  it: "it-CH",
};

export const OG_LOCALE: Record<Locale, string> = {
  de: "de_CH",
  fr: "fr_CH",
  it: "it_CH",
};

export function hreflangOf(locale: string): string {
  return HREFLANG[locale as Locale] ?? HREFLANG[routing.defaultLocale];
}

export function ogLocaleOf(locale: string): string {
  return OG_LOCALE[locale as Locale] ?? OG_LOCALE[routing.defaultLocale];
}

/** Default-Locale ohne Prefix, fr/it mit Prefix (localePrefix: "as-needed"). */
export function localePath(locale: string, path = ""): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${prefix}${path}` || "/";
}

/** Absolute URL auf dem kanonischen Host. */
export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

/** Absolute, lokalisierte Seiten-URL — für canonical, og:url und hreflang. */
export function localeUrl(locale: string, path = ""): string {
  return absoluteUrl(localePath(locale, path));
}

// ── OG-Bilder ─────────────────────────────────────────────────────────────

export interface OgImage {
  /** Absolute URL — Facebook und X akzeptieren keine relativen Pfade. */
  url: string;
  width: number;
  height: number;
  alt: string;
}

/** Zielformat für alle eigens gebauten OG-Bilder (Facebook/X: 1.91:1). */
export const OG_SIZE = { width: 1200, height: 630 } as const;

/**
 * Standardbild der Site — das App-Dashboard, auf OG-Format gebracht. Greift
 * überall dort, wo eine Seite kein eigenes Motiv hat.
 *
 * Nicht `/screenshot_app_dashboard.png` direkt: das Original ist 2554×1232 und
 * 4.2 MB gross, war im Layout aber als 2400×1400 deklariert. Beides falsch —
 * die Masse in og:image:width/height nimmt Facebook wörtlich, und 4 MB machen
 * jeden Scrape zäh. `/og/default.jpg` ist derselbe Screenshot, auf 1200×630
 * eingepasst (aus dem Original erzeugt, siehe content/wetterkunde/README.md).
 * `scripts/check-og-images.mjs` vergleicht diese Masse mit der echten Datei.
 */
export const DEFAULT_OG_IMAGE_PATH = "/og/default.jpg";
export const DEFAULT_OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;

export function defaultOgImage(alt: string): OgImage {
  return {
    url: absoluteUrl(DEFAULT_OG_IMAGE_PATH),
    ...DEFAULT_OG_IMAGE_SIZE,
    alt,
  };
}

/**
 * URL des generierten OG-Bilds eines Wetterkunde-Artikels.
 *
 * Bedient von `app/og/wetterkunde/[locale]/[slug]/route.tsx` (next/og), beim
 * Build statisch vorgerendert. Bewusst ohne Datei-Endung — der Route-Handler
 * setzt `Content-Type: image/png`, und darauf gehen die Scraper. Der Pfad ist
 * im Middleware-Matcher ausgenommen, sonst würde next-intl ihn locale-routen.
 *
 * `version` ist Pflicht, sobald das Bild irgendwo geteilt wird. Vercel liefert
 * die Route mit `Cache-Control: public, immutable, max-age=31536000` aus — ein
 * Jahr unveränderlich. Ändert sich das Motiv, ohne dass sich die URL ändert,
 * behalten Facebook, WhatsApp, LinkedIn und jedes CDN die alten Bytes; genau
 * daran blieb nach dem Corporate-Design-Umbau die alte dunkle Fassung stehen.
 * Der Token kommt aus lib/og.ts und deckt Artikelinhalt UND Bildvorlage ab.
 * Query-Parameter beeinflussen das Routing nicht — ausgeliefert wird weiterhin
 * die beim Build vorgerenderte Datei.
 */
export function articleOgImageUrl(
  locale: string,
  slug: string,
  version?: string,
): string {
  const url = `${SITE_URL}/og/wetterkunde/${locale}/${slug}`;
  return version ? `${url}?v=${version}` : url;
}

// ── Social-Tags ───────────────────────────────────────────────────────────

export interface SocialMetadataInput {
  locale: string;
  title: string;
  description: string;
  /** Absolute URL der Seite (identisch mit dem Canonical). */
  url: string;
  image: OgImage;
  type?: "website" | "article";
  article?: {
    publishedTime: string;
    modifiedTime: string;
    authors: string[];
  };
}

/**
 * openGraph + twitter im Doppel — immer zusammen setzen.
 *
 * Warum ein Helper: Next merged Metadata pro Top-Level-Feld, nicht pro
 * Einzeltag. Eine Seite, die nur `openGraph` überschreibt, erbt weiterhin den
 * kompletten `twitter`-Block des Layouts — dann steht auf X der Titel der
 * Startseite über dem Artikel (genau der Fehler, den /wetterkunde/boeenfront
 * hatte). Wer diesen Helper benutzt, kann das nicht mehr falsch machen.
 */
export function socialMetadata(input: SocialMetadataInput): Metadata {
  const { locale, title, description, url, image, type = "website" } = input;

  return {
    openGraph: {
      type,
      locale: ogLocaleOf(locale),
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [image],
      ...(type === "article" && input.article
        ? {
            publishedTime: input.article.publishedTime,
            modifiedTime: input.article.modifiedTime,
            authors: input.article.authors,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}
