"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

/**
 * Sprachumschalter — rendert je einen Link pro Locale, der den aktuellen Pfad
 * in der Zielsprache öffnet (next-intl setzt das Prefix automatisch). Als Links
 * gebaut, damit Crawler die Sprachvarianten finden (ergänzt hreflang).
 *
 * `available` grenzt ein, in welche Sprachen die **aktuelle Seite** übersetzt
 * ist. Ohne das bot der Umschalter auf jeder Seite alle drei Sprachen an — auf
 * /wetterkunde/staubteufel führte „IT" damit auf einen 404, weil es
 * staubteufel.it.md nicht gibt. Nicht vorhandene Sprachen bleiben sichtbar,
 * aber unklickbar: das Steuerelement springt nicht in der Breite, und der
 * Zustand ist erklärt statt versteckt. Seiten ohne Übersetzungslücken (alles
 * ausser den Wetterkunde-Artikeln) lassen `available` weg.
 */
export function LocaleSwitcher({
  available,
}: {
  available?: readonly string[];
}) {
  const active = useLocale();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher");

  return (
    <nav
      aria-label={t("label")}
      className="flex items-center gap-0.5 rounded-md border border-slate-200 p-0.5"
    >
      {routing.locales.map((locale) => {
        const isActive = locale === active;
        // Die gerade angezeigte Sprache ist immer erreichbar — auch wenn sie
        // noch Entwurf ist und deshalb nicht in `available` steht.
        const isAvailable =
          !available || isActive || available.includes(locale);

        if (!isAvailable) {
          return (
            <span
              key={locale}
              aria-disabled="true"
              title={`${t(locale)} — ${t("unavailable")}`}
              className="cursor-not-allowed rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300"
            >
              {locale}
            </span>
          );
        }

        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            hrefLang={locale}
            aria-current={isActive ? "true" : undefined}
            title={t(locale)}
            className={`focus-ring rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
              isActive
                ? "bg-sky-700 text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
