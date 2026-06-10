import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  organizationSchema,
  websiteSchema,
  jsonLdScript,
} from "@/lib/schema";
import { ConsentManager } from "@/components/consent/ConsentManager";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const TITLE_DEFAULT =
  "Wingcast — Gratis KI-Flugwetter & Thermik-Forecast für die Schweiz";
const DESCRIPTION =
  "Gratis KI-Flugwetter für 488 Schweizer Startplätze. 5-Tage-Forecast sortiert pro Tag, in Klartext erklärt. Ohne Kreditkarte. Decision Support, du entscheidest.";

// OG-Image: temporär das App-Dashboard wiederverwendet (1200x630 dedicated TBD).
const OG_IMAGE = "https://wingcast.ch/screenshot_app_dashboard.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://wingcast.ch"),
  title: {
    default: TITLE_DEFAULT,
    template: "%s · Wingcast",
  },
  description: DESCRIPTION,
  keywords: [
    // Core: Personas-Suchen
    "Gleitschirm Wetter App",
    "Gleitschirm Wetter App gratis",
    "kostenlose Gleitschirm App",
    "Paragliding Wetter kostenlos",
    // High-Intent regional (siehe strategie/keywords.md §4 P1)
    "Flugwetter Schweiz",
    "Thermik Forecast Schweiz",
    "Thermikprognose Schweiz",
    "Windprognose Schweiz",
    // KI-Differenziator
    "KI Flugwetter",
    "KI Wetter Gleitschirm",
    // Gratis-Differenziator
    "gratis Thermik Forecast",
    "Thermik Vorhersage gratis",
    // Spot-Cluster
    "Startplatz Wetter Schweiz",
    "Gleitschirm Startplätze",
    "Fliegbarkeit Schweiz",
    // Engine-Details (Marco-relevant)
    "Föhn Warnung Gleitschirm",
    "ICON-CH1 Gleitschirm",
    // English long-tail
    "free paragliding weather Switzerland",
    "Paragliding Forecast Switzerland",
  ],
  authors: [{ name: "Maurin", url: "https://wingcast.ch" }],
  creator: "Maurin",
  publisher: "Wingcast",
  alternates: {
    canonical: "https://wingcast.ch/",
  },
  icons: {
    icon: [
      { url: "/brand/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/brand/logo.svg",
    apple: "/brand/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://wingcast.ch",
    siteName: "Wingcast",
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 2400,
        height: 1400,
        alt: "Wingcast App-Dashboard: Karte mit allen 488 Schweizer Startplätzen, gefärbt nach KI-Bewertung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
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

export const viewport: Viewport = {
  themeColor: "#0284C7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-CH" className={inter.variable}>
      <body className="min-h-dvh font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-sky-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Zum Hauptinhalt springen
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationSchema)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteSchema)}
        />
        <ConsentManager />
      </body>
    </html>
  );
}
