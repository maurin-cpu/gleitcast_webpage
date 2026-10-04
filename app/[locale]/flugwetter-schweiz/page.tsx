import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BriefingDayCard, DayStrip } from "@/components/briefing/BriefingDayCard";
import { LinkButton } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";
import { getBriefing } from "@/lib/briefing";
import { absoluteUrl, defaultOgImage, socialMetadata } from "@/lib/seo";

// Öffentliches Schweiz-Briefing. Vorerst nur Englisch, weil der Server das
// Briefing in genau einer Sprache erzeugt (flychat `config.LANG`, heute EN)
// und der Validator nur DE/EN kennt. DE/FR/IT sind bewusst 404, keine
// Mischung aus deutschen Überschriften und englischem Text.
// Plan: flychat/docs/pläne/PLAN_briefing_webseite.md
const LOCALES = ["en"] as const;
const PATH = "/en/flugwetter-schweiz";

// ISR: die Seite wird höchstens stündlich neu gebaut. Der Lauf in flychat ist
// um 06:00, die Seite ist damit spätestens um 07:00 aktuell.
export const revalidate = 3600;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const title = "Flying weather Switzerland today: thermals, wind and warnings";
  const description =
    "The Wingcast briefing for all of Switzerland: situation, warnings, upper wind and thermals for today and the next two days. Fresh every morning at 6.";
  const url = absoluteUrl(PATH);
  return {
    title,
    description,
    alternates: { canonical: PATH },
    ...socialMetadata({
      locale: "en",
      title,
      description,
      url,
      image: defaultOgImage("Wingcast briefing for Switzerland"),
    }),
  };
}

export default async function FlugwetterSchweiz({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(LOCALES as readonly string[]).includes(locale)) notFound();
  setRequestLocale(locale);
  const briefing = await getBriefing();

  const stand = briefing
    ? new Date(briefing.generatedAt).toLocaleString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return (
    <>
      <Navbar />
      <main id="main" className="bg-sky-50">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
            Flying weather Switzerland today
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Thermals, wind and warnings for paraglider pilots. Recalculated every
            morning at 6.
          </p>

          {briefing ? (
            <>
              <p className="mt-4 text-sm font-medium tabular-nums text-slate-600">
                Updated {stand}
              </p>
              <div className="mt-8">
                <DayStrip days={briefing.days} locale={locale} />
              </div>
              <div className="mt-12 space-y-12">
                {briefing.days.map((day, i) => (
                  <BriefingDayCard
                    key={day.date}
                    day={day}
                    locale={locale}
                    warningsTitle={briefing.warningsTitle}
                    kicker={i === 0 ? "Today" : i === 1 ? "Tomorrow" : "Day after tomorrow"}
                  />
                ))}
              </div>
              <p className="mt-12 text-sm text-slate-600">{briefing.source}</p>
            </>
          ) : (
            <p className="mt-10 rounded-card border border-slate-200 bg-white p-5 text-slate-700">
              Today&apos;s briefing is not available right now. The app shows the
              forecast for every launch site.
            </p>
          )}

          <div className="mt-14 rounded-card border border-slate-200 bg-white p-6">
            <p className="font-semibold text-slate-900">Which launch site fits today?</p>
            <p className="mt-1 text-slate-700">
              The app runs the same analysis for every launch site, with window,
              wind and cloud base.
            </p>
            <LinkButton
              href="https://app.wingcast.ch/?utm_source=website&utm_medium=briefing&utm_campaign=flugwetter-schweiz"
              target="_blank"
              rel="noopener"
              variant="primary"
              size="lg"
              className="mt-4"
            >
              View launch sites
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </LinkButton>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            A forecast, not a flight clearance. Wingcast is decision support. You
            check the conditions on site and you decide.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
