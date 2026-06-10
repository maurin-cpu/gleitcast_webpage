import { FAQ_ITEMS } from "./faq";

const SITE_URL = "https://wingcast.ch";
const APP_URL = "https://app.wingcast.ch";

// Letztes inhaltliches Update der Landing — manuell pflegen bei Content-Refreshes.
// Wird auch im Footer als sichtbares „Stand"-Datum verwendet.
export const PAGE_LAST_UPDATED = "2026-05-13";

export const personSchema = {
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
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Wingcast",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  description:
    "KI-Flugwetter-Cast für Schweizer Gleitschirmpiloten — 5-Tage-Fliegbarkeits-Forecast für 488 Startplätze, automatisch sortiert mit Begründung in Klartext.",
  email: "info@wingcast.ch",
  founder: { "@id": `${SITE_URL}/#maurin` },
  areaServed: {
    "@type": "Country",
    name: "Switzerland",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Wingcast",
  description:
    "KI-Flugwetter-Cast (Briefing) für Schweizer Gleitschirmpiloten.",
  inLanguage: "de-CH",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#app`,
  name: "Wingcast",
  applicationCategory: "WeatherApplication",
  operatingSystem: "Web",
  url: APP_URL,
  description:
    "KI-bewertetes 5-Tage-Flugwetter für 488 Schweizer Startplätze. Automatische Sortierung nach Fliegbarkeit, Begründung in Klartext, optional E-Mail-Cast (Briefing) an frei wählbaren Wochentagen.",
  inLanguage: "de-CH",
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
    "488 Schweizer Startplätze",
    "Optionaler E-Mail-Cast (Briefing) an frei wählbaren Wochentagen",
  ],
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  inLanguage: "de-CH",
  dateModified: PAGE_LAST_UPDATED,
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

// WebPage — bündelt mainEntity-Verknüpfung + dateModified als Freshness-Signal
// für AI-Crawler (Google AI Overviews, ChatGPT, Perplexity weighten Recency).
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "Wingcast — Gratis KI-Flugwetter & Thermik-Forecast für die Schweiz",
  description:
    "Gratis KI-Flugwetter für 488 Schweizer Startplätze. 5-Tage-Forecast sortiert pro Tag, in Klartext erklärt. Ohne Kreditkarte. Decision Support, du entscheidest.",
  inLanguage: "de-CH",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#app` },
  primaryImageOfPage: `${SITE_URL}/screenshot_app_dashboard.png`,
  datePublished: "2026-04-27",
  dateModified: PAGE_LAST_UPDATED,
  author: { "@id": `${SITE_URL}/#maurin` },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function jsonLdScript(data: object) {
  return {
    __html: JSON.stringify(data),
  };
}
