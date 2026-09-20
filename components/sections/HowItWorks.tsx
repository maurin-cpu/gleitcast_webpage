import { useTranslations } from "next-intl";

/**
 * Rechte Spalte = Mockup der App-Seite `/briefing` (Stand 19.09.2026):
 * Wochenstreifen (Einstufung, Bodendruck, Höhenwind, fliegbare Spots) und
 * darunter die Analyse-Kette — acht Blöcke plus Warnungen, je Block eine
 * Status-Pille. Ein Block ist aufgeklappt und zeigt das Prinzip
 * Erwartung → Daten → Urteil. Referenz: flychat/docs/BRIEFING.md §3/§4/§8.
 */

type Verdict = "safe" | "caution" | "unsafe";
type Status = "ok" | "info" | "warn";

// Einstufung im Wochenstreifen (Safe / Caution / Not safe).
const verdictStyle: Record<Verdict, string> = {
  safe:    "border-flyGreen/30 bg-flyGreen/10 text-flyGreen",
  caution: "border-flyAmber/30 bg-flyAmber/10 text-flyAmber",
  unsafe:  "border-flyRed/30   bg-flyRed/10   text-flyRed",
};

// Status-Pillen der Kette: grün = passt, blau = Hinweis, orange = Abweichung.
// Die Farbe trägt nie allein die Bedeutung — jede Pille hat ihr Wort.
const statusStyle: Record<Status, { pill: string; dot: string }> = {
  ok:   { pill: "border-flyGreen/30 bg-flyGreen/10 text-flyGreen", dot: "bg-flyGreen" },
  info: { pill: "border-sky-200 bg-sky-50 text-sky-700",           dot: "bg-sky-600" },
  warn: { pill: "border-flyAmber/30 bg-flyAmber/10 text-flyAmber", dot: "bg-flyAmber" },
};

// Strukturelle Demo-Daten (Druck, Wind, Zählungen) — sprachneutral.
// Labels und Pillen-Wörter kommen lokalisiert aus den Messages.
const days: Array<{
  date: string;
  verdict: Verdict;
  pressure: number;
  windDeg: number;     // meteorologisch: woher der Wind kommt
  windSector: string;
  windKmh: number;
  flyable: number;
  active?: boolean;
}> = [
  { date: "22.9", verdict: "safe",    pressure: 1016, windDeg: 225, windSector: "SW", windKmh: 25, flyable: 148 },
  { date: "23.9", verdict: "caution", pressure: 1024, windDeg: 315, windSector: "NW", windKmh: 15, flyable: 212, active: true },
  { date: "24.9", verdict: "unsafe",  pressure: 1009, windDeg: 180, windSector: "S",  windKmh: 45, flyable: 31 },
];

// Block 1 (Lage) trägt statt Pille „Druck · Regime · Tendenz".
const chain: Array<{ key: string; status?: Status; pill?: string; expanded?: boolean }> = [
  { key: "lage" },
  { key: "front",   status: "ok",   pill: "front_none" },
  { key: "foehn",   status: "ok",   pill: "foehn_off" },
  { key: "wind",    status: "ok",   pill: "wind_match" },
  { key: "stab",    status: "info", pill: "stab_labile" },
  { key: "thermik", status: "ok",   pill: "th_good", expanded: true },
  { key: "sonne",   status: "ok",   pill: "sun_match" },
  { key: "modelle", status: "info", pill: "md_partial" },
];

function WindArrow({ deg, className }: { deg: number; className?: string }) {
  // Pfeil zeigt, wohin der Wind weht; Grundform zeigt nach Norden.
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className}
      style={{ transform: `rotate(${(deg + 180) % 360}deg)` }}
    >
      <path
        d="M8 2.5v11M8 2.5 4.8 5.7M8 2.5l3.2 3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatusPill({ status, children }: { status: Status; children: React.ReactNode }) {
  const s = statusStyle[status];
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-semibold leading-tight sm:text-[11px] ${s.pill}`}
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${s.dot}`} />
      {children}
    </span>
  );
}

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

          {/* Right: Briefing-Vorschau — angelehnt an die App-Seite /briefing */}
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

              {/* Wochenstreifen: Tages-Tabs mit Einstufung, Druck, Höhenwind, fliegbare Spots */}
              <div
                className="flex gap-1.5 border-b border-slate-200 px-3 py-3 sm:gap-2 sm:px-4"
                role="tablist"
                aria-label={t("previewWeekdaysAria")}
              >
                {days.map((d, i) => (
                  <div
                    key={d.date}
                    role="tab"
                    aria-selected={d.active}
                    className={`flex flex-1 flex-col items-center gap-1 rounded-lg border px-1 py-2 ${
                      d.active
                        ? "border-sky-700 bg-sky-50 ring-1 ring-sky-700"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                      {weekdays[i]}{" "}
                      <span className="font-normal normal-case tabular-nums">{d.date}</span>
                    </span>
                    <span
                      className={`rounded-full border px-1.5 py-0.5 text-[10px] font-semibold leading-tight ${verdictStyle[d.verdict]}`}
                    >
                      {t(`verdicts.${d.verdict}`)}
                    </span>
                    <span className="font-mono text-[11px] tabular-nums text-slate-700">
                      {d.pressure} hPa
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] tabular-nums text-slate-700">
                      <WindArrow deg={d.windDeg} className="h-3.5 w-3.5 text-sky-700" />
                      {d.windSector} {d.windKmh}
                    </span>
                    <span className="text-[10px] tabular-nums text-slate-500">
                      {d.flyable} {t("flyable")}
                    </span>
                  </div>
                ))}
              </div>

              {/* Analyse-Kette: eine Zeile je Block, Status-Pille rechts, ein Block aufgeklappt */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700">
                  {t("chainTitle")}
                </p>
              </div>

              <ul className="divide-y divide-slate-100">
                {chain.map((row, i) => (
                  <li key={row.key} className="px-5">
                    <div className="flex items-center justify-between gap-3 py-2.5">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold tabular-nums text-slate-700">
                          {i + 1}
                        </span>
                        <span className="truncate text-sm font-semibold text-slate-900">
                          {t(`blocks.${row.key}`)}
                        </span>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        {row.status && row.pill ? (
                          <StatusPill status={row.status}>{t(`pills.${row.pill}`)}</StatusPill>
                        ) : (
                          <span className="font-mono text-[11px] tabular-nums text-slate-600">
                            1024 hPa · {t("lageRegime")}
                          </span>
                        )}
                        <Chevron open={row.expanded} />
                      </div>
                    </div>

                    {row.expanded && (
                      <div className="mb-3 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3">
                        <dl className="space-y-2 text-[12px] leading-[1.5]">
                          <div className="grid grid-cols-[auto_1fr] gap-x-3">
                            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                              {t("labelExpectation")}
                            </dt>
                            <dd className="text-slate-700">{t("expectationText")}</dd>
                          </div>
                          <div className="grid grid-cols-[auto_1fr] gap-x-3">
                            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                              {t("labelData")}
                            </dt>
                            <dd className="flex flex-wrap gap-1.5">
                              {(["base", "climb", "sun"] as const).map((c) => (
                                <span
                                  key={c}
                                  className="rounded-full border border-slate-200 bg-white px-2 py-0.5 font-mono text-[11px] tabular-nums text-slate-700"
                                >
                                  {t(`chips.${c}`)}
                                </span>
                              ))}
                            </dd>
                          </div>
                          <div className="grid grid-cols-[auto_1fr] gap-x-3">
                            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                              {t("labelVerdict")}
                            </dt>
                            <dd className="text-slate-700">
                              {t.rich("verdictText", {
                                b: (chunks) => (
                                  <span className="font-semibold text-slate-900">{chunks}</span>
                                ),
                              })}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    )}
                  </li>
                ))}

                {/* Warnungen Schweiz — eigene Zeile unter der Kette */}
                <li className="flex items-center justify-between gap-3 px-5 py-2.5">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flyAmber/10 text-[10px] font-bold text-flyAmber">
                      !
                    </span>
                    <span className="truncate text-sm font-semibold text-slate-900">
                      {t("warningsTitle")}
                    </span>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <StatusPill status="warn">{t("warningPill")}</StatusPill>
                    <Chevron />
                  </div>
                </li>
              </ul>

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
