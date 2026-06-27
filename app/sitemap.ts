import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL = "https://wingcast.ch";

// Default-Locale ohne Prefix, fr/it mit Prefix (passend zu localePrefix: "as-needed").
function localized(path: string, locale: string): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path}`;
}

// hreflang-Alternates pro Eintrag (de-CH / fr-CH / it-CH).
function languages(path: string): Record<string, string> {
  return {
    "de-CH": localized(path, "de"),
    "fr-CH": localized(path, "fr"),
    "it-CH": localized(path, "it"),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

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

  return pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: localized(page.path === "" ? "/" : page.path, locale),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: { languages: languages(page.path === "" ? "/" : page.path) },
    })),
  );
}
