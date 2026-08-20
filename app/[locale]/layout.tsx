import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import "../globals.css";
import {
  organizationSchema,
  websiteSchema,
  jsonLdScript,
} from "@/lib/schema";
import { ConsentManager } from "@/components/consent/ConsentManager";
import { PostHogPageView } from "@/components/analytics/PostHogPageView";
import { AnalyticsEvents } from "@/components/analytics/AnalyticsEvents";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_URL, localeUrl, socialMetadata } from "@/lib/seo";
import { siteOgImage } from "@/lib/og";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Inter — bewusst NUR für das Logo/Wordmark (siehe components/ui/Logo.tsx).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});

// locale → BCP-47 html lang. og:locale und alle URLs kommen aus lib/seo.ts.
const HTML_LANG: Record<Locale, string> = {
  de: "de-CH",
  fr: "fr-CH",
  it: "it-CH",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: "%s · Wingcast",
    },
    description: t("description"),
    keywords: t("keywords")
      .split("|")
      .map((k) => k.trim())
      .filter(Boolean),
    authors: [{ name: "Maurin", url: SITE_URL }],
    creator: "Maurin",
    publisher: "Wingcast",
    icons: {
      icon: [{ url: "/brand/logo.svg", type: "image/svg+xml" }],
      shortcut: "/brand/logo.svg",
      apple: "/brand/logo.svg",
    },
    // Default für alle Seiten, die nichts eigenes setzen. Unterseiten
    // überschreiben og UND twitter gemeinsam via socialMetadata() — Next merged
    // pro Top-Level-Feld, ein einzeln überschriebenes openGraph würde diesen
    // twitter-Block sonst unverändert mitschleppen.
    ...socialMetadata({
      locale,
      title: t("title"),
      description: t("description"),
      url: localeUrl(locale),
      image: siteOgImage(t("ogImageAlt")),
    }),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0284C7",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Layout" });

  return (
    <html lang={HTML_LANG[locale]} className={`${jakarta.variable} ${inter.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        <NextIntlClientProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-sky-700 focus:px-4 focus:py-2 focus:text-white"
          >
            {t("skipToContent")}
          </a>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={jsonLdScript(organizationSchema(locale))}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={jsonLdScript(websiteSchema(locale))}
          />
          <ConsentManager />
          <PostHogPageView />
          <AnalyticsEvents />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
