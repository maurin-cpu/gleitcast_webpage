import { LinkButton } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";
import { STRINGS, isBriefingLocale } from "@/components/briefing/strings";

// Hinweis auf die App unter dem abgeschwächten Briefing (24.10.): die öffentliche
// Seite zeigt nur Lage und Schweizer Werte, die Details je Startplatz gibt es in
// der App. `placement` landet in utm_content, damit sich die Stellen
// (Briefing-Seite unten, Startseite) in PostHog trennen lassen.
export function AppCta({
  locale,
  medium,
  placement,
}: {
  locale: string;
  medium: "briefing" | "briefing-start";
  placement: string;
}) {
  const t = STRINGS[isBriefingLocale(locale) ? locale : "en"];
  const href =
    `https://app.wingcast.ch/?utm_source=website&utm_medium=${medium}` +
    `&utm_campaign=flugwetter-schweiz&utm_content=${placement}`;
  return (
    <div className="rounded-card border-2 border-sky-200 bg-white p-6">
      <p className="text-lg font-semibold text-slate-900">{t.ctaTitle}</p>
      <p className="mt-1 max-w-reading text-base leading-relaxed text-slate-700">{t.ctaText}</p>
      <LinkButton
        href={href}
        target="_blank"
        rel="noopener"
        variant="primary"
        size="lg"
        className="mt-4"
      >
        {t.ctaButton}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </LinkButton>
    </div>
  );
}
