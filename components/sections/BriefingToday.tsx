import { Link } from "@/i18n/navigation";
import { getBriefing } from "@/lib/briefing";
import { DayHeroCard, DayStrip, WarningsBlock, formatDay } from "@/components/briefing/BriefingDayCard";
import { ArrowRight } from "@/components/ui/Icons";

// Startseiten-Block "Thermal forecast today": Kopfkarte mit Einstufung und
// Zahlen, Warnungen, Tagesstreifen. Nur auf /en, solange das Briefing nur
// englisch erzeugt wird. Ohne Daten wird nichts gezeigt, die Startseite
// bleibt wie bisher.
export async function BriefingToday({ locale }: { locale: string }) {
  if (locale !== "en") return null;
  const briefing = await getBriefing();
  const today = briefing?.days[0];
  if (!briefing || !today) return null;

  return (
    <section
      id="briefing"
      className="border-b border-slate-200 bg-sky-50 py-16 sm:py-24"
      aria-labelledby="briefing-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 id="briefing-headline" className="sr-only">
            Thermal forecast Switzerland, {formatDay(today.date, locale)}
          </h2>
          <DayHeroCard
            day={today}
            locale={locale}
            kicker="Thermal forecast Switzerland"
            title={`Today, ${formatDay(today.date, locale)}`}
          />

          <div className="mt-4">
            <WarningsBlock day={today} title={briefing.warningsTitle} />
          </div>

          <div className="mt-4">
            <DayStrip days={briefing.days} locale={locale} />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/flugwetter-schweiz"
              className="focus-ring inline-flex min-h-[48px] items-center gap-1.5 text-base font-semibold text-sky-700 underline underline-offset-4 hover:text-sky-900"
            >
              Read the full briefing
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="text-sm font-medium tabular-nums text-slate-600">
              Updated{" "}
              {new Date(briefing.generatedAt).toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              , fresh every morning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
