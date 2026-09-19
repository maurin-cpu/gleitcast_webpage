import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import {
  getArticleLocales,
  getPublishedArticles,
  type WkLocale,
} from "@/lib/wetterkunde";

import { SITE_URL, hreflangOf } from "@/lib/seo";
import { PAGE_LAST_UPDATED } from "@/lib/schema";

// Default-Locale ohne Prefix, die uebrigen mit Prefix (passend zu localePrefix: "as-needed").
function localized(path: string, locale: string): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path}`;
}

// hreflang-Alternates pro Eintrag (de-CH / fr-CH / it-CH / en). Bewusst aus
// routing.locales abgeleitet statt aufgezaehlt: beim Ergaenzen von Englisch
// stand hier eine feste Liste, die die neue Sprache stillschweigend aus der
// Sitemap gelassen haette.
function languages(path: string): Record<string, string> {
  return Object.fromEntries(
    routing.locales.map((locale) => [hreflangOf(locale), localized(path, locale)]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Bewusst NICHT `new Date()`: mit der Build-Zeit meldete jeder Deploy alle
  // Seiten als geaendert, obwohl sich am Inhalt nichts getan hatte. Google
  // stuft ein lastmod, das bei jedem Crawl neu ist, als unzuverlaessig ein und
  // ignoriert es dann ganz — genau das kostet Crawl-Prioritaet. Die statischen
  // Seiten haengen deshalb am gepflegten PAGE_LAST_UPDATED, die Artikel am
  // `stand` aus ihrem Frontmatter.
  const lastModified = new Date(PAGE_LAST_UPDATED);

  const pages: Array<{
    path: string;
    changeFrequency: "weekly" | "yearly";
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/datenschutz", changeFrequency: "yearly", priority: 0.3 },
    { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
    { path: "/nutzungsbedingungen", changeFrequency: "yearly", priority: 0.3 },
  ];

  const localized3 = pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: localized(page.path === "" ? "/" : page.path, locale),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages: languages(page.path === "" ? "/" : page.path) },
    })),
  );

  // Wetterkunde pro Sprache: Hub in allen Locales, Artikel nur dort, wo eine
  // publizierte Fassung existiert — hreflang entsprechend. Entwürfe
  // (status != published) bleiben draussen — sie sind zusätzlich auf noindex.
  const wetterkunde: MetadataRoute.Sitemap = [];
  for (const locale of routing.locales) {
    const articles = getPublishedArticles(locale as WkLocale);
    if (articles.length === 0) continue;
    // Der Hub aendert sich, wenn ein Artikel dazukommt oder aktualisiert wird —
    // also das juengste `stand` der gelisteten Artikel, nicht die Build-Zeit.
    const hubLastModified = new Date(
      Math.max(...articles.map((a) => new Date(a.stand).getTime())),
    );
    wetterkunde.push({
      url: localized("/wetterkunde", locale),
      lastModified: hubLastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
      alternates: { languages: languages("/wetterkunde") },
    });
    for (const a of articles) {
      const locs = getArticleLocales(a.slug);
      wetterkunde.push({
        url: localized(`/wetterkunde/${a.slug}`, locale),
        lastModified: new Date(a.stand),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        ...(locs.length > 1
          ? {
              alternates: {
                languages: Object.fromEntries(
                  locs.map((l) => [
                    hreflangOf(l),
                    localized(`/wetterkunde/${a.slug}`, l),
                  ]),
                ),
              },
            }
          : {}),
      });
    }
  }

  return [...localized3, ...wetterkunde];
}
