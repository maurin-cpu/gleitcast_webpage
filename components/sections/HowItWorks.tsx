import {
  TierLegendaryIcon,
  TierFlyableIcon,
  TierGlideIcon,
  TierConditionalIcon,
  TierUnflyableIcon,
} from "../ui/Icons";
import type { ComponentType, SVGProps } from "react";

const steps = [
  {
    n: "1",
    label: "Daten",
    title: "Wettermodelle einlesen",
    body: "ICON-CH1 (1 km) und ICON-CH2 (2 km) von MeteoSchweiz, ICON-D2, ICON-EU und GFS — einmal morgens aggregiert via Open-Meteo, für den ganzen Tag.",
  },
  {
    n: "2",
    label: "Physik",
    title: "Atmosphäre durchrechnen",
    body: "Thermikbasis (Parcel-Methode mit Inversions-Erkennung), Föhn-Detektion (Druckgradient Nord–Süd, Höhenwind, Feuchte-Signatur), Gust-Decay übers Terrain, Cloud-Holes — deterministisch im Code, ohne KI.",
  },
  {
    n: "3",
    label: "KI",
    title: "Analysieren und bewerten",
    body: "Auf Basis der berechneten Physik analysiert und bewertet die KI Sicherheit und Eignung pro Spot. Die Begründung kommt in Klartext — Wind, Thermik, Zeitfenster.",
  },
];

type Tier = "violet" | "green" | "bronze" | "amber" | "red";

const tier: Record<
  Tier,
  {
    label: string;
    text: string;
    bg: string;
    border: string;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
  }
> = {
  violet: { label: "Legendär",       text: "text-flyViolet", bg: "bg-flyViolet/10", border: "border-flyViolet/30", Icon: TierLegendaryIcon },
  green:  { label: "Fliegbar",       text: "text-flyGreen",  bg: "bg-flyGreen/10",  border: "border-flyGreen/30",  Icon: TierFlyableIcon },
  bronze: { label: "Abgleiter",      text: "text-flyBronze", bg: "bg-flyBronze/10", border: "border-flyBronze/30", Icon: TierGlideIcon },
  amber:  { label: "Bedingt",        text: "text-flyAmber",  bg: "bg-flyAmber/10",  border: "border-flyAmber/30",  Icon: TierConditionalIcon },
  red:    { label: "Nicht fliegbar", text: "text-flyRed",    bg: "bg-flyRed/10",    border: "border-flyRed/30",    Icon: TierUnflyableIcon },
};

const days: Array<{ wd: string; date: string; score: number; tier: Tier; active?: boolean }> = [
  { wd: "Mo", date: "18.5", score: 1, tier: "red" },
  { wd: "Di", date: "19.5", score: 3, tier: "amber" },
  { wd: "Mi", date: "20.5", score: 6, tier: "violet", active: true },
  { wd: "Do", date: "21.5", score: 5, tier: "green" },
  { wd: "Fr", date: "22.5", score: 2, tier: "bronze" },
];

const regions: Array<{
  name: string;
  score: number;
  spots: Array<{ name: string; tier: Tier; tags: string[]; wind: string; score: number }>;
}> = [
  {
    name: "Berner Oberland",
    score: 6,
    spots: [
      { name: "Niesen",       tier: "violet", tags: ["Top der Woche"], wind: "8 km/h S",  score: 6 },
      { name: "Niederhorn",   tier: "violet", tags: ["Thermik stark"], wind: "10 km/h SO", score: 6 },
      { name: "Beatenberg",   tier: "green",  tags: [],                wind: "12 km/h SO", score: 5 },
    ],
  },
  {
    name: "Zentralschweiz",
    score: 4,
    spots: [
      { name: "Stanserhorn",  tier: "green",  tags: [],                wind: "14 km/h S",  score: 4 },
      { name: "Klewenalp",    tier: "amber",  tags: ["Föhn-Tendenz"], wind: "18 km/h S",  score: 3 },
    ],
  },
];

export function HowItWorks() {
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
              Vom Wetter zum Cast
            </p>
            <h2
              id="howitworks-headline"
              className="mt-3 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-[2.5rem]"
            >
              Drei Schritte, keine Magie.
            </h2>
            <p className="mt-5 max-w-md text-base leading-[1.65] text-slate-700">
              Validierte Wettermodelle, klassische Atmosphären-Physik,
              KI obenauf zur Bewertung. Keine Black Box, kein Hokuspokus.
            </p>

            <ol className="mt-10 space-y-7">
              {steps.map((s) => (
                <li key={s.n} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-900 bg-white text-sm font-bold tabular-nums text-slate-900">
                    {s.n}
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
                  Flugwetter
                </p>
                <p className="font-mono text-[11px] tabular-nums text-slate-500">
                  Stand 05:42
                </p>
              </header>

              {/* Day-Tabs Reihe */}
              <div
                className="flex gap-1.5 border-b border-slate-200 px-3 py-3 sm:gap-2 sm:px-4"
                role="tablist"
                aria-label="Wochentage"
              >
                {days.map((d) => {
                  const t = tier[d.tier];
                  return (
                    <div
                      key={d.wd}
                      role="tab"
                      aria-selected={d.active}
                      className={`flex flex-1 flex-col items-center gap-0.5 rounded-lg border px-1 py-2 ${
                        d.active
                          ? "border-sky-700 bg-sky-700 text-white"
                          : "border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      <span className={`text-[10px] font-semibold uppercase tracking-wide ${d.active ? "text-sky-100" : "text-slate-500"}`}>
                        {d.wd}
                      </span>
                      <span className={`text-[11px] tabular-nums ${d.active ? "text-sky-100" : "text-slate-500"}`}>
                        {d.date}
                      </span>
                      <span
                        className={`mt-0.5 text-base font-bold tabular-nums ${
                          d.active ? "text-white" : t.text
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
                  Mittwoch, 20. Mai
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-semibold ${tier.violet.bg} ${tier.violet.border} ${tier.violet.text}`}
                >
                  <TierLegendaryIcon className="h-3.5 w-3.5" />
                  Legendär
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                  308 Spots
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
                  const rt = tier[rTier];
                  return (
                    <div key={r.name}>
                      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-2">
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">
                          {r.name}
                        </p>
                        <span className={`font-mono text-sm font-bold tabular-nums ${rt.text}`}>
                          {r.score}
                        </span>
                      </div>

                      <ul className="divide-y divide-slate-100">
                        {r.spots.map((s) => {
                          const st = tier[s.tier];
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
                                    {st.label}
                                  </span>
                                  {s.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600"
                                    >
                                      {tag}
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
                <span className="font-semibold text-slate-900">Niesen, 11–14 Uhr</span>{" "}
                — Wind 8 km/h Süd, Thermikbasis ~2400 m. Ab 14:30 Süd-Föhn-Tendenz → Lee.
                Konfidenz hoch (3/3 Modelle einig).
              </figcaption>
            </figure>

            <p className="mt-4 text-center text-xs text-slate-500 sm:text-left">
              Beispieldaten — echte Werte in der App auf{" "}
              <a
                href="https://app.wingcast.ch"
                target="_blank"
                rel="noopener"
                className="font-medium text-sky-700 underline-offset-2 hover:underline"
              >
                app.wingcast.ch
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
