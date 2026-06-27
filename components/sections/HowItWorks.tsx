import { useTranslations } from "next-intl";
import {
  TierLegendaryIcon,
  TierFlyableIcon,
  TierGlideIcon,
  TierConditionalIcon,
  TierUnflyableIcon,
} from "../ui/Icons";
import type { ComponentType, SVGProps } from "react";

type Tier = "violet" | "green" | "bronze" | "amber" | "red";

// Nur Styling + Icon pro Stufe — die Labels kommen lokalisiert aus den Messages.
const tierStyle: Record<
  Tier,
  {
    text: string;
    bg: string;
    border: string;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
  }
> = {
  violet: { text: "text-flyViolet", bg: "bg-flyViolet/10", border: "border-flyViolet/30", Icon: TierLegendaryIcon },
  green:  { text: "text-flyGreen",  bg: "bg-flyGreen/10",  border: "border-flyGreen/30",  Icon: TierFlyableIcon },
  bronze: { text: "text-flyBronze", bg: "bg-flyBronze/10", border: "border-flyBronze/30", Icon: TierGlideIcon },
  amber:  { text: "text-flyAmber",  bg: "bg-flyAmber/10",  border: "border-flyAmber/30",  Icon: TierConditionalIcon },
  red:    { text: "text-flyRed",    bg: "bg-flyRed/10",    border: "border-flyRed/30",    Icon: TierUnflyableIcon },
};

// Strukturelle Demo-Daten (Scores, Winde, Daten) — sprachneutral. Labels/Namen
// werden über die `tiers`/`regions`/`tags`-Keys lokalisiert aufgelöst.
const days: Array<{ date: string; score: number; tier: Tier; active?: boolean }> = [
  { date: "18.5", score: 1, tier: "red" },
  { date: "19.5", score: 3, tier: "amber" },
  { date: "20.5", score: 6, tier: "violet", active: true },
  { date: "21.5", score: 5, tier: "green" },
  { date: "22.5", score: 2, tier: "bronze" },
];

const regions: Array<{
  key: string;
  score: number;
  spots: Array<{ name: string; tier: Tier; tags: string[]; wind: string; score: number }>;
}> = [
  {
    key: "berner-oberland",
    score: 6,
    spots: [
      { name: "Niesen",      tier: "violet", tags: ["top-week"],        wind: "8 km/h S",   score: 6 },
      { name: "Niederhorn",  tier: "violet", tags: ["thermik-strong"], wind: "10 km/h SO", score: 6 },
      { name: "Beatenberg",  tier: "green",  tags: [],                 wind: "12 km/h SO", score: 5 },
    ],
  },
  {
    key: "zentralschweiz",
    score: 4,
    spots: [
      { name: "Stanserhorn", tier: "green",  tags: [],                 wind: "14 km/h S",  score: 4 },
      { name: "Klewenalp",   tier: "amber",  tags: ["foehn-tendency"], wind: "18 km/h S",  score: 3 },
    ],
  },
];

export function HowItWorks() {
  const t = useTranslations("HowItWorks");
  const steps = t.raw("steps") as Array<{
    label: string;
    title: string;
    body: string;
  }>;
  const weekdays = t.raw("weekdays") as string[];

  return (
    <section
      id="solution"
      className="border-b border-slate-200 bg-slate-100 py-20 sm:py-28"
      aria-labelledby="howitworks-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* Left: editorial steps */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              {t("kicker")}
            </p>
            <h2
              id="howitworks-headline"
              className="mt-3 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-[2.5rem]"
            >
              {t("headline")}
            </h2>
            <p className="mt-5 max-w-md text-base leading-[1.65] text-slate-700">
              {t("intro")}
            </p>

            <ol className="mt-10 space-y-7">
              {steps.map((s, i) => (
                <li key={s.label} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-900 bg-white text-sm font-bold tabular-nums text-slate-900">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                      {s.label}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-[15px] leading-[1.6] text-slate-700">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: cast preview — angelehnt an die echte App */}
          <div id="preview" className="scroll-mt-24">
            <figure className="overflow-hidden rounded-card border border-slate-200 bg-white">
              {/* App-Header-Leiste */}
              <header className="flex items-baseline justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3">
                <p className="text-sm font-semibold tracking-tight text-slate-900">
                  {t("previewTitle")}
                </p>
                <p className="font-mono text-[11px] tabular-nums text-slate-500">
                  {t("previewStand")}
                </p>
              </header>

              {/* Day-Tabs Reihe */}
              <div
                className="flex gap-1.5 border-b border-slate-200 px-3 py-3 sm:gap-2 sm:px-4"
                role="tablist"
                aria-label={t("previewWeekdaysAria")}
              >
                {days.map((d, i) => {
                  const ts = tierStyle[d.tier];
                  return (
                    <div
                      key={d.date}
                      role="tab"
                      aria-selected={d.active}
                      className={`flex flex-1 flex-col items-center gap-0.5 rounded-lg border px-1 py-2 ${
                        d.active
                          ? "border-sky-700 bg-sky-700 text-white"
                          : "border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      <span className={`text-[10px] font-semibold uppercase tracking-wide ${d.active ? "text-sky-100" : "text-slate-500"}`}>
                        {weekdays[i]}
                      </span>
                      <span className={`text-[11px] tabular-nums ${d.active ? "text-sky-100" : "text-slate-500"}`}>
                        {d.date}
                      </span>
                      <span
                        className={`mt-0.5 text-base font-bold tabular-nums ${
                          d.active ? "text-white" : ts.text
                        }`}
                      >
                        {d.score}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Detail-Header für aktiven Tag */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-slate-200 px-5 py-3">
                <p className="text-base font-bold tracking-tight text-slate-900">
                  {t("previewActiveDay")}
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-semibold ${tierStyle.violet.bg} ${tierStyle.violet.border} ${tierStyle.violet.text}`}
                >
                  <TierLegendaryIcon className="h-3.5 w-3.5" />
                  {t("tiers.violet")}
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                  {t("previewSpotCount")}
                </span>
              </div>

              {/* Regions-Sektionen mit Spot-Zeilen */}
              <div>
                {regions.map((r) => {
                  const rTier: Tier =
                    r.score >= 6 ? "violet" :
                    r.score >= 4 ? "green" :
                    r.score >= 3 ? "amber" :
                    r.score >= 2 ? "bronze" : "red";
                  const rt = tierStyle[rTier];
                  return (
                    <div key={r.key}>
                      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-2">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">
                          {t(`regions.${r.key}`)}
                        </p>
                        <span className={`font-mono text-sm font-bold tabular-nums ${rt.text}`}>
                          {r.score}
                        </span>
                      </div>

                      <ul className="divide-y divide-slate-100">
                        {r.spots.map((s) => {
                          const st = tierStyle[s.tier];
                          const STIcon = st.Icon;
                          return (
                            <li
                              key={s.name}
                              className="flex items-center justify-between gap-3 px-5 py-3"
                            >
                              <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                  <span className="text-sm font-semibold text-slate-900">
                                    {s.name}
                                  </span>
                                  <span
                                    className={`inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5 text-[10px] font-semibold ${st.bg} ${st.border} ${st.text}`}
                                  >
                                    <STIcon className="h-3 w-3" />
                                    {t(`tiers.${s.tier}`)}
                                  </span>
                                  {s.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600"
                                    >
                                      {t(`tags.${tag}`)}
                                    </span>
                                  ))}
                                </div>
                                <p className="mt-1 font-mono text-[11px] tabular-nums text-slate-500">
                                  {s.wind}
                                </p>
                              </div>
                              <span className={`shrink-0 font-mono text-base font-bold tabular-nums ${st.text}`}>
                                {s.score}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <figcaption className="border-t border-slate-200 bg-slate-50 px-5 py-3 text-[12px] leading-[1.55] text-slate-600">
                {t.rich("figcaption", {
                  b: (chunks) => (
                    <span className="font-semibold text-slate-900">
                      {chunks}
                    </span>
                  ),
                })}
              </figcaption>
            </figure>

            <p className="mt-4 text-center text-xs text-slate-500 sm:text-left">
              {t.rich("exampleNote", {
                link: (chunks) => (
                  <a
                    href="https://app.wingcast.ch"
                    target="_blank"
                    rel="noopener"
                    className="font-medium text-sky-700 underline-offset-2 hover:underline"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
