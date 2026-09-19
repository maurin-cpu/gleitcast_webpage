import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Schweizer Landessprachen der Landing: Deutsch (default), Französisch,
  // Italienisch — dazu Englisch für internationale Piloten, die in der Schweiz
  // fliegen. Englisch ist keine Landessprache und daher bewusst zuletzt.
  locales: ["de", "fr", "it", "en"],
  defaultLocale: "de",
  // Default-Locale ohne Prefix (wingcast.ch/), die uebrigen mit Prefix
  // (wingcast.ch/fr, /it, /en).
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
