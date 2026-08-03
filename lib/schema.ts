const SITE_URL = "https://wingcast.ch";
const APP_URL = "https://app.wingcast.ch";

// Letztes inhaltliches Update der Landing — manuell pflegen bei Content-Refreshes.
// Wird auch im Footer als sichtbares „Stand"-Datum verwendet.
export const PAGE_LAST_UPDATED = "2026-05-13";

type Locale = "de" | "fr" | "it";

const IN_LANGUAGE: Record<Locale, string> = {
  de: "de-CH",
  fr: "fr-CH",
  it: "it-CH",
};

function inLanguage(locale: string): string {
  return IN_LANGUAGE[locale as Locale] ?? "de-CH";
}

// Locale-spezifische URL der Landing (Default-Locale ohne Prefix).
function localizedUrl(locale: string): string {
  return locale === "de" ? SITE_URL : `${SITE_URL}/${locale}`;
}

export function personSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#maurin`,
    name: "Maurin",
    jobTitle: "Founder & Pilot",
    description:
      "Schweizer Gleitschirmpilot aus Zürich. Baut Wingcast als KI-Experiment, um den morgendlichen Wetter-Check auf 30 Sekunden zu kürzen.",
    knowsAbout: [
      "Paragliding",
      "Atmospheric science",
      "Weather forecasting",
      "Swiss Alps flying",
      "Föhn detection",
      "Thermal forecasting",
      "Multi-model weather aggregation",
    ],
    email: "info@wingcast.ch",
    image: `${SITE_URL}/founder.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
    worksFor: { "@id": `${SITE_URL}/#organization` },
    inLanguage: inLanguage(locale),
  };
}

export function organizationSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Wingcast",
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    description:
      "KI-Flugwetter-Cast für Schweizer Gleitschirmpiloten — 5-Tage-Fliegbarkeits-Forecast für 494 Startplätze, automatisch sortiert mit Begründung in Klartext.",
    email: "info@wingcast.ch",
    founder: { "@id": `${SITE_URL}/#maurin` },
    areaServed: {
      "@type": "Country",
      name: "Switzerland",
    },
    inLanguage: inLanguage(locale),
  };
}

export function websiteSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Wingcast",
    description:
      "KI-Flugwetter-Cast (Briefing) für Schweizer Gleitschirmpiloten.",
    inLanguage: inLanguage(locale),
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function softwareApplicationSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#app`,
    name: "Wingcast",
    applicationCategory: "WeatherApplication",
    operatingSystem: "Web",
    url: APP_URL,
    description:
      "KI-bewertetes 5-Tage-Flugwetter für 494 Schweizer Startplätze. Automatische Sortierung nach Fliegbarkeit, Begründung in Klartext, optional E-Mail-Cast (Briefing) an frei wählbaren Wochentagen.",
    inLanguage: inLanguage(locale),
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CHF",
      availability: "https://schema.org/InStock",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Paragliding pilots in Switzerland",
      geographicArea: { "@type": "Country", name: "Switzerland" },
    },
    featureList: [
      "5-Tage-Fliegbarkeits-Forecast",
      "Multi-Modell-Aggregation via Open-Meteo (ICON-CH1, ICON-CH2, ICON-D2, ICON-EU, GFS)",
      "Deterministische Atmosphären-Physik (Parcel-Methode, Inversions-Erkennung, Gust-Decay)",
      "Föhn-Detektion über Druckgradient Nord–Süd plus Höhenwind und Feuchte-Signatur",
      "KI analysiert und bewertet auf Basis der gerechneten Physik",
      "Automatische Spot-Sortierung pro Tag und Region",
      "Begründung in Klartext",
      "494 Schweizer Startplätze",
      "Optionaler E-Mail-Cast (Briefing) an frei wählbaren Wochentagen",
    ],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

// FAQ-Items kommen lokalisiert aus den Messages und werden hier in JSON-LD gegossen.
export function faqPageSchema(
  locale: string,
  items: ReadonlyArray<{ q: string; a: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    inLanguage: inLanguage(locale),
    dateModified: PAGE_LAST_UPDATED,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

// WebPage — bündelt mainEntity-Verknüpfung + dateModified als Freshness-Signal
// für AI-Crawler (Google AI Overviews, ChatGPT, Perplexity weighten Recency).
export function webPageSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${localizedUrl(locale)}/#webpage`,
    url: localizedUrl(locale),
    name: "Wingcast — Gratis KI-Flugwetter & Thermik-Forecast für die Schweiz",
    description:
      "Gratis KI-Flugwetter für 494 Schweizer Startplätze. 5-Tage-Forecast sortiert pro Tag, in Klartext erklärt. Ohne Kreditkarte. Decision Support, du entscheidest.",
    inLanguage: inLanguage(locale),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#app` },
    primaryImageOfPage: `${SITE_URL}/screenshot_app_dashboard.png`,
    datePublished: "2026-04-27",
    dateModified: PAGE_LAST_UPDATED,
    author: { "@id": `${SITE_URL}/#maurin` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

// ── Wetterkunde-Hub und Pillar-Artikel ────────────────────────────────────
// DE ohne Prefix (wingcast.ch/wetterkunde), FR/IT mit Prefix — passend zu
// localePrefix: "as-needed" im Routing.

function wetterkundeUrl(locale: string): string {
  return locale === "de"
    ? `${SITE_URL}/wetterkunde`
    : `${SITE_URL}/${locale}/wetterkunde`;
}

export function wetterkundeHubSchema(
  description: string,
  name: string,
  locale = "de",
) {
  const url = wetterkundeUrl(locale);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}/#webpage`,
    url,
    name,
    description,
    inLanguage: inLanguage(locale),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

interface ArticleSchemaInput {
  slug: string;
  titel: string;
  metaDescription: string;
  /** Erstveröffentlichung, ISO-Datum. */
  veroeffentlicht: string;
  /** Letzter inhaltlicher Stand, ISO-Datum. */
  stand: string;
  bild: string | null;
}

// Article — ohne das ist ein Pillar für AI-Systeme nur ein Textblock
// (GEO-ANALYSIS-2026-08-02_wetterkunde.md §6).
export function articleSchema(a: ArticleSchemaInput, locale = "de") {
  const hub = wetterkundeUrl(locale);
  const url = `${hub}/${a.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}/#article`,
    headline: a.titel,
    description: a.metaDescription,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${url}/#webpage` },
    inLanguage: inLanguage(locale),
    datePublished: a.veroeffentlicht,
    dateModified: a.stand,
    author: { "@id": `${SITE_URL}/#maurin` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${hub}/#webpage` },
    ...(a.bild ? { image: `${SITE_URL}${a.bild}` } : {}),
  };
}

export function breadcrumbSchema(
  trail: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

// FAQ eines Artikels — eigene @id je Artikel, damit sie nicht mit der
// Landing-FAQ (#faq) kollidiert.
export function articleFaqSchema(
  slug: string,
  items: ReadonlyArray<{ q: string; a: string }>,
  dateModified: string,
  locale = "de",
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${wetterkundeUrl(locale)}/${slug}/#faq`,
    inLanguage: inLanguage(locale),
    dateModified,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function jsonLdScript(data: object) {
  return {
    __html: JSON.stringify(data),
  };
}
