import { FAQ_ITEMS } from "./faq";

const SITE_URL = "https://gleitcast.ch";
const APP_URL = "https://app.gleitcast.ch";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Gleitcast",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  description:
    "KI-Flugwetter-Briefing für Schweizer Gleitschirmpiloten — 5-Tage-Fliegbarkeits-Forecast für 488 Startplätze, automatisch sortiert mit Begründung in Klartext.",
  email: "hi@gleitcast.ch",
  founder: {
    "@type": "Person",
    name: "Maurin",
    jobTitle: "Founder & Pilot",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
  },
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
  name: "Gleitcast",
  description:
    "KI-Flugwetter-Briefing für Schweizer Gleitschirmpiloten.",
  inLanguage: "de-CH",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#app`,
  name: "Gleitcast",
  applicationCategory: "WeatherApplication",
  operatingSystem: "Web",
  url: APP_URL,
  description:
    "KI-bewertetes 5-Tage-Flugwetter für 488 Schweizer Startplätze. Automatische Sortierung nach Fliegbarkeit, Begründung in Klartext, optional E-Mail-Briefing an frei wählbaren Wochentagen.",
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
    "Multi-Modell-Aggregation (ICON-CH1, ICON-D2, ECMWF via Open-Meteo)",
    "Automatische Spot-Sortierung pro Tag",
    "Begründung in Klartext",
    "Föhn-Lage-Erkennung",
    "Talwinde, Lee-Effekte und Inversionen eingepreist",
    "488 Schweizer Startplätze",
    "Optionales E-Mail-Briefing an frei wählbaren Wochentagen",
  ],
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  inLanguage: "de-CH",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export function jsonLdScript(data: object) {
  return {
    __html: JSON.stringify(data),
  };
}
