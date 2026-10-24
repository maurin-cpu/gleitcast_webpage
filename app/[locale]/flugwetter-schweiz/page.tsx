import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { DayLiteCard, NoticeBox, liteDay } from "@/components/briefing/BriefingDayCard";
import { AppCta } from "@/components/briefing/AppCta";
import { BRIEFING_LOCALES, STRINGS, isBriefingLocale } from "@/components/briefing/strings";
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
          <div className="mt-6">
            <NoticeBox locale={locale} />
          </div>

          {briefing ? (
            <>
              <p className="mt-4 text-sm font-medium tabular-nums text-slate-600">
                {t.updated} {stand}
              </p>
              {/* Abgeschwächt (24.10.): keine Einstufung, keine Warnungen, keine Kette. */}
              <div className="mt-8 space-y-8">
                {briefing.days.map((day, i) => (
                  <DayLiteCard
                    key={day.date}
                    day={liteDay(day)}
                    locale={locale}
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

          <div className="mt-14">
            <AppCta locale={locale} medium="briefing" placement="unten" />
          </div>

          <p className="mt-10 text-sm text-slate-500">{t.disclaimer}</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
