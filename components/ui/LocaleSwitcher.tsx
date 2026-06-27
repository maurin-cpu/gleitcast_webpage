"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

/**
 * Sprachumschalter — rendert je einen Link pro Locale, der den aktuellen Pfad
 * in der Zielsprache öffnet (next-intl setzt das Prefix automatisch). Als Links
 * gebaut, damit Crawler die Sprachvarianten finden (ergänzt hreflang).
 */
export function LocaleSwitcher() {
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
