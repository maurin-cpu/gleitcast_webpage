// Öffentliches Schweiz-Briefing: holt die Analyse-Kette aus der App und gibt
// nur die Textfelder weiter, die öffentlich stehen dürfen (Whitelist).
// Fällt die App aus oder ist der Stand zu alt, kommt `null` zurück, und die
// Seiten zeigen ihren festen Teil statt eines leeren Blocks.
//
// Prototyp: liest vorerst /api/briefing. Im Ausbau zeigt das auf den schmalen
// Endpunkt /api/public/briefing (Plan: flychat/docs/pläne/PLAN_briefing_webseite.md).

const API_URL = process.env.WINGCAST_API_URL ?? "https://app.wingcast.ch";
const MAX_AGE_HOURS = 18;
const PUBLIC_DAYS = 3;

export type BriefingFact = { k: string; v: string; level?: string };
export type BriefingZone = { name: string; a: string; b: string; c?: string };
export type BriefingStep = {
  key: string;
  label: string;
  text: string;
  status: string;       // ok | info | warn
  statusLabel: string;  // "data fit the pattern", "different than expected"
  facts: BriefingFact[];
  zones: { cols: string[]; rows: BriefingZone[] } | null;
  caveat: string;       // Gewitter-Hinweis, nur bei Stabilität
};

export type BriefingWarning = { label: string; text: string; severity: string };

export type BriefingDay = {
  date: string;
  status: string;
  tier: string;
  band: string;
  pressure: string;
  windArrow: string;
  windSector: string;
  windStrength: string;
  situation: string;
  dayHint: string;
  hazardsActive: string[];
  warnings: BriefingWarning[];
  noHazardText: string;
  steps: BriefingStep[];
  thermik: { base: string; climb: string; start: string } | null;
};

export type Briefing = {
  lang: string;
  generatedAt: string;
  source: string;
  warningsTitle: string;
  thunderCaveat: string;
  days: BriefingDay[];
};

type Raw = Record<string, any>;

const s = (v: unknown): string => (typeof v === "string" ? v.trim() : "");

// Reihenfolge wie im Mail: die Kette, wie Piloten Wetter lesen.
const STEP_ORDER: Array<{ key: string; label: string; src: string }> = [
  { key: "lage", label: "step_lage", src: "lage" },
  { key: "front", label: "step_front", src: "fronts" },
  { key: "foehn", label: "step_foehn", src: "foehn" },
  { key: "wind", label: "step_wind", src: "wind" },
  { key: "stab", label: "step_stab", src: "stability" },
  { key: "sonne", label: "step_sonne", src: "sonne" },
  { key: "thermik", label: "step_thermik", src: "thermik" },
  { key: "modelle", label: "step_modelle", src: "modelle" },
];

function toFacts(raw: unknown): BriefingFact[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((f): f is Raw => !!f && typeof f === "object")
    .map((f) => ({ k: s(f.k), v: s(f.v), level: s(f.level) || undefined }))
    .filter((f) => f.v && f.v !== "\u2014");
}

// Zonentabellen von Sonne (Sonne / Wolken tief / Wolken hoch) und Thermik
// (Basis / Steigen), Spaltentitel kommen aus der App.
function toZones(key: string, num: Raw | undefined) {
  const rows: Raw[] = Array.isArray(num?.zones) ? num.zones : [];
  if (rows.length === 0) return null;
  if (key === "sonne") {
    return {
      cols: [s(num?.lbl_sun), s(num?.lbl_low), s(num?.lbl_high)],
      rows: rows.map((z) => ({ name: s(z.name), a: s(z.sun), b: s(z.low), c: s(z.high) })),
    };
  }
  if (key === "thermik") {
    return {
      cols: [s(num?.lbl_base), s(num?.lbl_climb)],
      rows: rows.map((z) => ({ name: s(z.name), a: s(z.base), b: s(z.climb) })),
    };
  }
  return null;
}

function toStep(st: (typeof STEP_ORDER)[number], chain: Raw, labels: Raw): BriefingStep {
  const v: Raw = chain[st.src] ?? {};
  return {
    key: st.key,
    label: s(labels[st.label]),
    text: s(v.fazit),
    status: s(v.status),
    statusLabel: s(v.status_label),
    facts: toFacts(v.facts),
    zones: toZones(st.key, v.num),
    caveat: st.key === "stab" && v.labile ? s(labels.thunder_caveat) : "",
  };
}

function toDay(date: string, entry: Raw, labels: Raw): BriefingDay | null {
  const chain = entry?.chain;
  if (!chain) return null;
  const tile = entry.tile ?? {};
  const w = entry.warnings ?? {};
  const num = chain.thermik?.num;

  return {
    date,
    status: s(tile.status),
    tier: s(tile.tier),
    band: s(tile.band),
    pressure: s(tile.pressure_hpa),
    windArrow: s(tile.wind_arrow),
    windSector: s(tile.wind_sector),
    windStrength: s(tile.wind_strength),
    situation: s(chain.situation),
    dayHint: s(chain.day_hint),
    hazardsActive: (w.checks ?? [])
      .filter((c: Raw) => c.active)
      .map((c: Raw) => s(c.label)),
    warnings: (w.entries ?? []).map((e: Raw) => ({
      label: s(e.label),
      text: [s(e.ki_text), s(e.code_text)].filter(Boolean).join(" "),
      severity: s(e.severity),
    })),
    noHazardText: s(labels.hz_none),
    steps: STEP_ORDER.map((st) => toStep(st, chain, labels)).filter((st) => st.text),
    thermik: num ? { base: s(num.base), climb: s(num.climb), start: s(num.start) } : null,
  };
}

export async function getBriefing(): Promise<Briefing | null> {
  try {
    const res = await fetch(`${API_URL}/api/briefing`, {
      next: { revalidate: 3600, tags: ["briefing"] },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as Raw;
    const a = data?.analyse;
    if (!a?.by_date || !Array.isArray(a.dates)) return null;

    const generatedAt = s(a.generated_at);
    const ageHours = (Date.now() - new Date(generatedAt).getTime()) / 36e5;
    if (!generatedAt || !(ageHours < MAX_AGE_HOURS)) return null;

    const labels = a.labels ?? {};
    const days = (a.dates as string[])
      .slice(0, PUBLIC_DAYS)
      .map((d) => toDay(d, a.by_date[d], labels))
      .filter((d): d is BriefingDay => d !== null);
    if (days.length === 0) return null;

    return {
      lang: s(a.lang),
      generatedAt,
      source: s(a.source),
      warningsTitle: s(labels.warnings_ch),
      thunderCaveat: s(labels.thunder_caveat),
      days,
    };
  } catch {
    return null;
  }
}
