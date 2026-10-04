import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BriefingDayCard, DayStrip } from "@/components/briefing/BriefingDayCard";
import { BRIEFING_LOCALES, STRINGS, isBriefingLocale } from "@/components/briefing/strings";
import { LinkButton } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";
import { getBriefing } from "@/lib/briefing";
import { absoluteUrl, defaultOgImage, hreflangOf, localePath, socialMetadata } from "@/lib/seo";

// Öffentliches Schweiz-Briefing in den Sprachen, die flychat erzeugt (DE, EN;
// der Validator kennt nur diese beiden). FR/IT sind bewusst 404, keine
// Mischung aus französischen Überschriften und deutschem Text.
// Plan: flychat/docs/pläne/PLAN_briefing_webseite.md
const SLUG = "/flugwetter-schweiz";

// ISR: die Seite wird höchstens stündlich neu gebaut. Der Lauf in flychat ist
// um 06:00, die Seite ist damit spätestens um 07:00 aktuell.
export const revalidate = 3600;

export function generateStaticParams() {
  return BRIEFING_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isBriefingLocale(locale)) return {};
  const t = STRINGS[locale];
  const path = localePath(locale, SLUG);
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: path,
      languages: Object.fromEntries(
        BRIEFING_LOCALES.map((l) => [hreflangOf(l), localePath(l, SLUG)]),
      ),
    },
    ...socialMetadata({
      locale,
      title: t.metaTitle,
      description: t.metaDescription,
      url: absoluteUrl(path),
      image: defaultOgImage(t.ogAlt),
    }),
  };
}

export default async function FlugwetterSchweiz({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isBriefingLocale(locale)) notFound();
  setRequestLocale(locale);
  const t = STRINGS[locale];
  const briefing = await getBriefing(locale);

  const stand = briefing
    ? new Date(briefing.generatedAt).toLocaleString(t.dateLocale, {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;
  const kickers = [t.today, t.tomorrow, t.dayAfter];

  return (
    <>
      <Navbar availableLocales={[...BRIEFING_LOCALES]} />
      <main id="main" className="bg-sky-50">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
            {t.h1}
          </h1>
          <p className="mt-4 text-lg text-slate-600">{t.intro}</p>

          {briefing ? (
            <>
              <p className="mt-4 text-sm font-medium tabular-nums text-slate-600">
                {t.updated} {stand}
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
                    kicker={kickers[i] ?? ""}
                  />
                ))}
              </div>
              <p className="mt-12 text-sm text-slate-600">{briefing.source}</p>
            </>
          ) : (
            <p className="mt-10 rounded-card border border-slate-200 bg-white p-5 text-slate-700">
              {t.unavailable}
            </p>
          )}

          <div className="mt-14 rounded-card border border-slate-200 bg-white p-6">
            <p className="font-semibold text-slate-900">{t.ctaTitle}</p>
            <p className="mt-1 text-slate-700">{t.ctaText}</p>
            <LinkButton
              href="https://app.wingcast.ch/?utm_source=website&utm_medium=briefing&utm_campaign=flugwetter-schweiz"
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

          <p className="mt-10 text-sm text-slate-500">{t.disclaimer}</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
