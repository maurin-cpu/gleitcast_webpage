import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  organizationSchema,
  websiteSchema,
  jsonLdScript,
} from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const TITLE_DEFAULT =
  "Gleitcast — Gratis KI-Flugwetter & Thermik-Forecast für die Schweiz";
const DESCRIPTION =
  "Gratis Gleitschirm-Wetter-App für die Schweiz: KI-bewerteter 5-Tage-Fliegbarkeits- und Thermik-Forecast für 488 Startplätze. Spots automatisch sortiert, Begründung in Klartext — ohne Meteorologie-Studium und ohne Kreditkarte. Decision Support für Pilot:innen, kein Decision Maker.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gleitcast.ch"),
  title: {
    default: TITLE_DEFAULT,
    template: "%s · Gleitcast",
  },
  description: DESCRIPTION,
  keywords: [
    "Gleitschirm Wetter App",
    "Gleitschirm Wetter App gratis",
    "kostenlose Gleitschirm App",
    "gratis Thermik Forecast",
    "Thermik Forecast Schweiz",
    "Thermik Vorhersage gratis",
    "Flugwetter Schweiz",
    "Flugwetter App",
    "Paragliding Forecast",
    "Paragliding Wetter kostenlos",
    "free paragliding weather Switzerland",
    "Burnair Alternative",
    "Burnair gratis Alternative",
    "Paraglidable iOS",
    "Föhn Warnung Gleitschirm",
    "KI Flugwetter",
    "KI Wetter Gleitschirm",
    "Startplatz Wetter Schweiz",
    "Fliegbarkeit Schweiz",
    "ICON-CH1 Gleitschirm",
  ],
  authors: [{ name: "Maurin", url: "https://gleitcast.ch" }],
  creator: "Maurin",
  publisher: "Gleitcast",
  alternates: {
    canonical: "https://gleitcast.ch/",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://gleitcast.ch",
    siteName: "Gleitcast",
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
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
      </body>
    </html>
  );
}
