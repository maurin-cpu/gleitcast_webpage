import { getTranslations } from "next-intl/server";

/**
 * Hinweis auf den nicht-deutschen Rechtsseiten: der Rechtstext liegt aktuell
 * nur auf Deutsch vor. Rendert nichts für die deutsche Fassung.
 */
export async function LegalNotice({ locale }: { locale: string }) {
  if (locale === "de") return null;
  const t = await getTranslations({ locale, namespace: "Legal" });
  return (
    <div className="mt-6 rounded-card border border-amber-300 bg-amber-50 px-4 py-3 text-sm leading-[1.55] text-amber-900">
      {t("onlyGermanNotice")}
    </div>
  );
}
