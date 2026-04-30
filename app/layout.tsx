import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gleitcast.ch"),
  title: {
    default: "Gleitcast — Dein KI-Flugwetter für die Schweiz",
    template: "%s · Gleitcast",
  },
  description:
    "Verpasse keinen guten Flugtag mehr. Jeden Montag eine E-Mail mit deinem KI-analysierten Flugwetter für 488 Schweizer Startplätze.",
  keywords: [
    "Gleitschirm Wetter",
    "Flugwetter Schweiz",
    "Paragliding Forecast",
    "Burnair Alternative",
    "Föhn Warnung",
    "KI Flugwetter",
  ],
  authors: [{ name: "Gleitcast" }],
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://gleitcast.ch",
    siteName: "Gleitcast",
    title: "Gleitcast — Dein KI-Flugwetter für die Schweiz",
    description:
      "Jeden Montag eine E-Mail. 5 Tage Flugwetter, KI-analysiert, in 60 Sekunden gelesen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gleitcast — Dein KI-Flugwetter für die Schweiz",
    description:
      "Jeden Montag eine E-Mail. 5 Tage Flugwetter, KI-analysiert, in 60 Sekunden gelesen.",
  },
  robots: {
    index: true,
    follow: true,
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
    <html lang="de" className={inter.variable}>
      <body className="min-h-dvh font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Zum Hauptinhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
