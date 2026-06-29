import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
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

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// locale → BCP-47 html lang + OpenGraph locale (Schweizer Varianten).
const HTML_LANG: Record<Locale, string> = {
  de: "de-CH",
  fr: "fr-CH",
  it: "it-CH",
};
const OG_LOCALE: Record<Locale, string> = {
  de: "de_CH",
  fr: "fr_CH",
  it: "it_CH",
};

// OG-Image: temporär das App-Dashboard wiederverwendet (1200x630 dedicated TBD).
const OG_IMAGE = "https://wingcast.ch/screenshot_app_dashboard.png";

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
    metadataBase: new URL("https://wingcast.ch"),
    title: {
      default: t("title"),
      template: "%s · Wingcast",
    },
    description: t("description"),
    keywords: t("keywords")
      .split("|")
      .map((k) => k.trim())
      .filter(Boolean),
    authors: [{ name: "Maurin", url: "https://wingcast.ch" }],
    creator: "Maurin",
    publisher: "Wingcast",
    icons: {
      icon: [{ url: "/brand/logo.svg", type: "image/svg+xml" }],
      shortcut: "/brand/logo.svg",
      apple: "/brand/logo.svg",
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[locale as Locale] ?? "de_CH",
      url: "https://wingcast.ch",
      siteName: "Wingcast",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: OG_IMAGE,
          width: 2400,
          height: 1400,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [OG_IMAGE],
    },
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
    <html lang={HTML_LANG[locale]} className={jakarta.variable}>
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
