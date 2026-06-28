import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Alle Pfade ausser API, PostHog-Proxy (/ingest), Next-Internals und Dateien
  // mit Endung (Assets). /ingest muss raus, sonst locale-routet next-intl die
  // Tracking-Requests, bevor der Reverse-Proxy greift.
  matcher: ["/((?!api|ingest|_next|_vercel|.*\\..*).*)"],
};
