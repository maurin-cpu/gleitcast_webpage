import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Schweizer Landessprachen der Landing: Deutsch (default), Französisch, Italienisch.
  locales: ["de", "fr", "it"],
  defaultLocale: "de",
  // Default-Locale ohne Prefix (wingcast.ch/), fr/it mit Prefix (wingcast.ch/fr, /it).
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
