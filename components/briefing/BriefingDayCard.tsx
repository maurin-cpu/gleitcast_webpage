import type { ComponentType, SVGProps } from "react";
import {
  TriangleAlert,
  CircleCheck,
  Info,
  Globe,
  Layers,
  Wind,
  Navigation,
  Thermometer,
  Sun,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import type { BriefingDay, BriefingStep } from "@/lib/briefing";
import {
  TierFlyableIcon,
  TierConditionalIcon,
  TierUnflyableIcon,
} from "@/components/ui/Icons";
import { STRINGS, isBriefingLocale } from "@/components/briefing/strings";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

// Einstufung des Tages: immer Farbe + Icon + Text (MASTER §2.2, color-not-only).
// Die Bänder kommen aus flychat `_tier_band` (green / amber / red / no_data).
// `dark` sind die Varianten auf der Ink-Karte (Kontrast auf slate-900).
// `border` = ganzer Rahmen (Badge), `top` = nur Oberkante (Karte, Streifen),
// damit die Seitenkanten slate bleiben und keine zwei Rahmenfarben konkurrieren.
const BAND: Record<string, { Icon: Icon; text: string; border: string; top: string }> = {
  green: { Icon: TierFlyableIcon, text: "text-flyGreen", border: "border-flyGreen", top: "border-t-flyGreen" },
  amber: { Icon: TierConditionalIcon, text: "text-flyAmber", border: "border-flyAmber", top: "border-t-flyAmber" },
  red: { Icon: TierUnflyableIcon, text: "text-flyRed", border: "border-flyRed", top: "border-t-flyRed" },
};

const STEP_ICON: Record<string, Icon> = {
  lage: Globe,
  front: Layers,
  foehn: Wind,
  wind: Navigation,
  stab: Thermometer,
  sonne: Sun,
  thermik: TrendingUp,
  modelle: BarChart3,
};

function tx(locale: string) {
  return STRINGS[isBriefingLocale(locale) ? locale : "en"];
}

export function formatDay(date: string, locale: string, short = false) {
  return new Date(`${date}T12:00:00`).toLocaleDateString(
    tx(locale).dateLocale,
    short
      ? { weekday: "short", day: "numeric", month: "short" }
      : { weekday: "long", day: "numeric", month: "long" },
  );
}

export function TierBadge({ day }: { day: BriefingDay }) {
  const b = BAND[day.band];
  if (!b || !day.status) return null;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg border-2 bg-white px-3 py-1.5 text-base font-semibold ${b.text} ${b.border}`}
    >
      <b.Icon className="h-5 w-5" aria-hidden="true" />
      {day.status}
    </span>
  );
}

// Tagesstreifen (MASTER §6.4) als Sprungmarken statt Tabs: alle Tage bleiben
// im HTML, damit Google und KI-Chats den ganzen Text lesen. Farbige Oberkante
// je Band, damit die Woche auf einen Blick lesbar ist.
export function DayStrip({ days, locale }: { days: BriefingDay[]; locale: string }) {
  const t = tx(locale);
  return (
    <nav aria-label={t.days} className="grid grid-cols-3 gap-3">
      {days.map((d, i) => {
        const b = BAND[d.band];
        return (
          <a
            key={d.date}
            href={`#tag-${d.date}`}
            className={`focus-ring flex min-h-[48px] flex-col items-center gap-1 rounded-card border border-slate-200 border-t-4 bg-white px-2 py-3 text-center transition-colors hover:bg-sky-50 ${
              b?.top ?? "border-t-slate-300"
            }`}
          >
            {b && <b.Icon className={`h-7 w-7 ${b.text}`} aria-hidden="true" />}
            <span className="text-base font-semibold text-slate-900">
              {i === 0 ? t.today : formatDay(d.date, locale, true)}
            </span>
            <span className={`text-sm font-semibold ${b?.text ?? "text-slate-700"}`}>
              {d.status}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

function facts(day: BriefingDay, locale: string) {
  const t = tx(locale);
  return [
    day.thermik?.base && { k: t.base, v: day.thermik.base },
    day.thermik?.climb && { k: t.climb, v: day.thermik.climb },
    day.windSector && {
      k: t.upperWind,
      v: `${day.windArrow} ${day.windSector} ${day.windStrength}`.trim(),
    },
    day.pressure && { k: t.pressure, v: day.pressure },
  ].filter(Boolean) as Array<{ k: string; v: string }>;
}

export function KeyFacts({ day, locale }: { day: BriefingDay; locale: string }) {
  const f = facts(day, locale);
  if (f.length === 0) return null;
  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {f.map((x) => (
        <div key={x.k} className="rounded-card border border-slate-200 bg-sky-50 px-4 py-3">
          <dt className="text-sm font-semibold uppercase tracking-wider text-sky-700">
            {x.k}
          </dt>
          <dd className="mt-1 text-xl font-bold leading-tight tabular-nums text-slate-900">
            {x.v}
          </dd>
        </div>
      ))}
    </dl>
  );
}

// Kopfkarte für den Tag: weiss, 1-px-Rahmen, Oberkante in der Bandfarbe
// (Farbe als Border ist ein erlaubter Träger, MASTER §2.2). Kein Schatten,
// kein dunkler Grund, kein Blur (MASTER §0, Light-First).
export function DayHeroCard({
  day,
  locale,
  kicker,
  title,
}: {
  day: BriefingDay;
  locale: string;
  kicker: string;
  title?: string;
}) {
  const b = BAND[day.band];
  return (
    <div
      className={`rounded-card border border-slate-200 border-t-4 bg-white p-6 sm:p-8 ${
        b?.top ?? "border-t-slate-300"
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
        {kicker}
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title ?? formatDay(day.date, locale)}
        </h2>
        <TierBadge day={day} />
      </div>
      {day.situation && (
        <p className="mt-4 max-w-reading text-lg leading-[1.6] text-slate-700">
          {day.situation}
        </p>
      )}
      <div className="mt-6">
        <KeyFacts day={day} locale={locale} />
      </div>
    </div>
  );
}

export function WarningsBlock({ day, title }: { day: BriefingDay; title: string }) {
  return (
    <div className="rounded-card border border-slate-200 bg-white p-5">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      {day.warnings.length === 0 ? (
        <p className="mt-3 flex items-start gap-2 text-base text-slate-700">
          <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-flyGreen" aria-hidden="true" />
          {day.noHazardText}
        </p>
      ) : (
        <ul className="mt-3 space-y-3">
          {day.warnings.map((w) => {
            const stop = w.severity === "stop";
            return (
              <li
                key={w.label}
                className={`border-l-4 pl-4 ${stop ? "border-flyRed" : "border-flyAmber"}`}
              >
                <p
                  className={`flex items-center gap-1.5 text-base font-bold ${
                    stop ? "text-flyRed" : "text-flyAmber"
                  }`}
                >
                  <TriangleAlert className="h-5 w-5" aria-hidden="true" />
                  {w.label}
                </p>
                <p className="mt-1 text-base leading-relaxed text-slate-700">{w.text}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

const STATUS: Record<string, { Icon: Icon; cls: string }> = {
  ok: { Icon: CircleCheck, cls: "text-flyGreen" },
  info: { Icon: Info, cls: "text-sky-700" },
  warn: { Icon: TriangleAlert, cls: "text-flyAmber" },
};

// Status je Schritt wie in der Mail: Farbe + Icon + Text (color-not-only).
function StatusLabel({ step }: { step: BriefingStep }) {
  const st = STATUS[step.status];
  if (!st || !step.statusLabel) return null;
  return (
    <span className={`inline-flex items-center gap-1 text-sm font-semibold ${st.cls}`}>
      <st.Icon className="h-4 w-4" aria-hidden="true" />
      {step.statusLabel}
    </span>
  );
}

// Zahlen unter dem Fazit: Schlüssel klein, Wert tabular.
function Facts({ facts }: { facts: BriefingStep["facts"] }) {
  if (facts.length === 0) return null;
  return (
    <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
      {facts.map((f, i) => (
        <div key={`${f.k}-${i}`} className="flex items-baseline gap-1.5">
          {f.k && <dt className="text-sm font-medium text-slate-600">{f.k}</dt>}
          <dd
            className={`text-base font-semibold tabular-nums ${
              f.level === "info" ? "text-sky-700" : "text-slate-900"
            }`}
          >
            {f.v}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Zones({ zones }: { zones: BriefingStep["zones"] }) {
  if (!zones) return null;
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full text-base">
        <thead>
          <tr className="text-sm font-medium text-slate-600">
            <th scope="col" className="py-1 pr-3 text-left font-medium"></th>
            {zones.cols.map((c) => (
              <th key={c} scope="col" className="py-1 pl-3 text-right font-medium">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {zones.rows.map((r) => (
            <tr key={r.name} className="border-t border-slate-200">
              <th scope="row" className="py-1.5 text-left font-medium text-slate-900">
                {r.name}
              </th>
              <td className="whitespace-nowrap py-1.5 pl-3 text-right tabular-nums text-slate-900">{r.a}</td>
              <td className="whitespace-nowrap py-1.5 pl-3 text-right tabular-nums text-slate-900">{r.b}</td>
              {r.c !== undefined && (
                <td className="whitespace-nowrap py-1.5 pl-3 text-right tabular-nums text-slate-900">{r.c}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BriefingDayCard({
  day,
  locale,
  warningsTitle,
  kicker,
}: {
  day: BriefingDay;
  locale: string;
  warningsTitle: string;
  kicker: string;
}) {
  return (
    <section
      id={`tag-${day.date}`}
      className="scroll-mt-24"
      aria-labelledby={`h-${day.date}`}
    >
      <div id={`h-${day.date}`}>
        <DayHeroCard day={day} locale={locale} kicker={kicker} />
      </div>

      <div className="mt-4">
        <WarningsBlock day={day} title={warningsTitle} />
      </div>

      <ol className="mt-4 overflow-hidden rounded-card border border-slate-200 bg-white">
        {day.steps.map((st, i) => {
          const I = STEP_ICON[st.key];
          return (
            <li
              key={st.key}
              className="border-t border-slate-200 p-5 first:border-t-0"
            >
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  {I ? <I className="h-5 w-5" aria-hidden="true" /> : <span>{i + 1}</span>}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold text-slate-900">{st.label}</h3>
                    <StatusLabel step={st} />
                  </div>
                  <p className="mt-1 text-base leading-relaxed text-slate-700">{st.text}</p>
                  <Facts facts={st.facts} />
                  {st.caveat && (
                    <p className="mt-3 flex items-start gap-1.5 text-sm font-medium text-flyAmber">
                      <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      {st.caveat}
                    </p>
                  )}
                </div>
              </div>
              {/* Zonentabelle auf voller Breite, sonst wird sie auf dem Handy
                  neben dem Icon abgeschnitten. */}
              <Zones zones={st.zones} />
            </li>
          );
        })}
      </ol>
    </section>
  );
}
