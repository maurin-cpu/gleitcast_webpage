import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Alle Pfade ausser API, PostHog-Proxy (/ingest), OG-Bilder (/og),
  // Next-Internals und Dateien mit Endung (Assets). /ingest muss raus, sonst
  // locale-routet next-intl die Tracking-Requests, bevor der Reverse-Proxy
  // greift. /og muss raus, weil die generierten OG-Bilder ihre Sprache als
  // Pfadsegment tragen (/og/wetterkunde/fr/<slug>) und bewusst keine
  // Datei-Endung haben — next-intl würde sie sonst auf /de/og/… umschreiben
  // und der Scraper bekäme einen 404 statt eines Bildes.
  matcher: ["/((?!api|ingest|og|_next|_vercel|.*\\..*).*)"],
};
