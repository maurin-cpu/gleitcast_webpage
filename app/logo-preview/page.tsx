import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo-Auswahl · Wingcast (intern)",
  robots: { index: false, follow: false },
};

type Variant = {
  id: string;
  name: string;
  note: string;
  svg: React.ReactNode;
};

const v2Variants: Variant[] = [
  {
    id: "v2-1-aufwind",
    name: "V2 · Aufwind — Thermik-Spirale",
    note: "270°-Bogen mit Exit-Punkt. Direktes Paragliding-Symbol (Thermik kreisen), keinerlei Wetter-Klischee.",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M 16 25 A 9 9 0 1 0 25 16"
          stroke="#0F172A"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="25" cy="16" r="2.6" fill="#0369A1" />
      </svg>
    ),
  },
  {
    id: "v2-2-niesen",
    name: "V2 · Niesen — Alpiner Marker",
    note: "Bergsilhouette + Sonne. Schweiz-Bezug, ehrliche Outdoor-DNA, sehr robust auf jeder Grösse.",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="21" cy="12" r="5.5" fill="#0369A1" />
        <path d="M2 28 L 12 11 L 18 22 L 23 14 L 30 28 Z" fill="#0F172A" />
        <path d="M 9.5 16 L 12 11 L 14.5 16 Z" fill="white" />
      </svg>
    ),
  },
  {
    id: "v2-3-sonne",
    name: "V2 · Sonne — Sunburst",
    note: "4-Strahlen-Sonne. Confidence/Optimismus, neutral genug für App-Icon, klar lesbar bei 16 px.",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="6" fill="#0369A1" />
        <g stroke="#0F172A" strokeWidth="3" strokeLinecap="round">
          <line x1="16" y1="2" x2="16" y2="6.5" />
          <line x1="16" y1="25.5" x2="16" y2="30" />
          <line x1="2" y1="16" x2="6.5" y2="16" />
          <line x1="25.5" y1="16" x2="30" y2="16" />
        </g>
      </svg>
    ),
  },
  {
    id: "v2-4-funk",
    name: "V2 · Funk — Tower-Stempel",
    note: "Kompass-/Charts-Badge. Trifft direkt die „Tower-Funkspruch”-Tonalität aus der CD.",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="11" stroke="#0F172A" strokeWidth="2.5" fill="none" />
        <circle cx="16" cy="16" r="3" fill="#0369A1" />
        <g stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round">
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="16" y1="26" x2="16" y2="30" />
          <line x1="2" y1="16" x2="6" y2="16" />
          <line x1="26" y1="16" x2="30" y2="16" />
        </g>
      </svg>
    ),
  },
  {
    id: "v2-5-briefing",
    name: "V2 · Briefing — 5-Tage-Sparkline",
    note: "Wochenkurve mit hervorgehobenem Bestem-Tag. Produkt-direkt: das Logo IST das Briefing.",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M 4 22 L 10 18 L 16 7 L 22 14 L 28 20"
          stroke="#0F172A"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="4" cy="22" r="2" fill="#0F172A" />
        <circle cx="10" cy="18" r="2" fill="#0F172A" />
        <circle cx="16" cy="7" r="3.5" fill="#0369A1" />
        <circle cx="22" cy="14" r="2" fill="#0F172A" />
        <circle cx="28" cy="20" r="2" fill="#0F172A" />
      </svg>
    ),
  },
  {
    id: "v2-6-lee",
    name: "V2 · Lee — Wind-Streifen",
    note: "3 Föhn-/Wind-Striche. Minimal, abstrakt, lesbar bis Favicon. Hauch von Topo-Karte.",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M 4 23 Q 14 20 24 22" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 4 15 Q 16 11 28 14" stroke="#0369A1" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 4 8 Q 12 5 20 7" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
];

const variants: Variant[] = [
  {
    id: "current",
    name: "Aktuell",
    note: "Geschwungene Kappe als Fläche, Pilot-Punkt.",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="g-current" x1="0" y1="0" x2="32" y2="32">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>
        <path d="M4 18c4-10 20-10 24 0-4-2-8 0-12 4-4-4-8-6-12-4z" fill="url(#g-current)" />
        <circle cx="16" cy="22" r="2" fill="#0F172A" />
      </svg>
    ),
  },
  {
    id: "opt1",
    name: "Option 1 — Refined Canopy",
    note: "Klare Schirm-Silhouette mit Leinen + Pilot. Erkennbarer als aktuell.",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="g-opt1" x1="0" y1="0" x2="32" y2="32">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>
        <path d="M3 14 Q16 4 29 14 L27 16 Q16 8 5 16 Z" fill="url(#g-opt1)" />
        <path
          d="M6 16 L16 25 M26 16 L16 25 M16 9 L16 25"
          stroke="#0F172A"
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="16" cy="26" r="2.2" fill="#0F172A" />
      </svg>
    ),
  },
  {
    id: "opt2",
    name: "Option 2 — Geometric Cells",
    note: "Schirm-Zellen angedeutet, technisch / präzise. Passt zu Daten-DNA.",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="g-opt2" x1="0" y1="0" x2="32" y2="32">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>
        <path d="M3 15 L16 6 L29 15 L26 17 L21 14 L16 17 L11 14 L6 17 Z" fill="url(#g-opt2)" />
        <path
          d="M10 11 L11 14 M16 9 L16 17 M22 11 L21 14"
          stroke="#0F172A"
          strokeWidth="0.4"
          opacity="0.4"
        />
        <path
          d="M6 17 L16 26 M26 17 L16 26"
          stroke="#0F172A"
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="16" cy="26" r="2" fill="#0F172A" />
      </svg>
    ),
  },
  {
    id: "opt3",
    name: "Option 3 — G-Monogramm",
    note: "Stilisiertes G aus einem einzigen Bogen. Minimal, sehr skalierbar (Favicon-tauglich).",
    svg: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="g-opt3" x1="0" y1="0" x2="32" y2="32">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>
        <path
          d="M27 12 A11 11 0 1 0 16 27 L16 19 L23 19"
          stroke="url(#g-opt3)"
          strokeWidth="3.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const sizes = [
  { px: 16, label: "16 px · Favicon" },
  { px: 24, label: "24 px · Navbar (sm)" },
  { px: 32, label: "32 px · Navbar" },
  { px: 64, label: "64 px · Hero" },
];

function filenameFor(id: string): string {
  if (id === "current") return "/brand/logo-current.svg";
  if (id.startsWith("v2-")) return `/brand/logo-${id}.svg`;
  return `/brand/logo-${id.replace("opt", "option-")}.svg`;
}

function VariantCard({ v }: { v: Variant }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">{v.name}</h2>
          <p className="mt-1 text-sm text-slate-600">{v.note}</p>
        </div>
        <code className="hidden text-xs text-slate-400 sm:block">
          {filenameFor(v.id)}
        </code>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
            Auf weiss · Grössen-Skala
          </p>
          <div className="flex items-end gap-6">
            {sizes.map((s) => (
              <div key={s.px} className="flex flex-col items-center gap-2">
                <div
                  style={{ width: s.px, height: s.px }}
                  className="flex items-center justify-center"
                >
                  {v.svg}
                </div>
                <span className="text-[10px] text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 p-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-400">
            Auf dunkel · Lesbarkeitstest
          </p>
          <div className="flex items-end gap-6">
            {sizes.map((s) => (
              <div key={s.px} className="flex flex-col items-center gap-2">
                <div
                  style={{ width: s.px, height: s.px }}
                  className="flex items-center justify-center"
                >
                  {v.svg}
                </div>
                <span className="text-[10px] text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">
          Lockup · so wie in der Navbar
        </p>
        <span className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center">
            {v.svg}
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Wingcast
          </span>
        </span>
      </div>
    </section>
  );
}

export default function LogoPreviewPage() {
  return (
    <main className="bg-white py-12">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-sm font-medium uppercase tracking-wider text-sky-700">
            Intern · nicht veröffentlicht
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Logo-Auswahl
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            V2 sind 6 komplett verschiedene Richtungen, V1 zum Vergleich. Alle
            nutzen ausschliesslich CD-Tokens Ink-900 (#0F172A) + Sky-700
            (#0369A1) — kein Orange, keine Shadows. Jede Variante in 4 Grössen
            (Favicon → Hero), hell + dunkel, und im Navbar-Lockup.
          </p>
        </header>

        <section className="mb-16">
          <div className="mb-6 flex items-baseline gap-3">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              V2 · Komplett neue Richtungen
            </h2>
            <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-700">
              6 Konzepte
            </span>
          </div>
          <p className="mb-8 max-w-3xl text-sm text-slate-600">
            Weg vom Schirm-Motiv — andere Symbole, die Wingcast trotzdem
            erzählen: Thermik, Berg, Sonne, Tower-Funkspruch, das Briefing
            selbst, Wind. Jede Variante hält die CD-Constraints ein.
          </p>
          <div className="space-y-10">
            {v2Variants.map((v) => (
              <VariantCard key={v.id} v={v} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-baseline gap-3">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              V1 · Schirm-Varianten
            </h2>
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
              zum Vergleich
            </span>
          </div>
          <div className="space-y-10">
            {variants.map((v) => (
              <VariantCard key={v.id} v={v} />
            ))}
          </div>
        </section>

        <footer className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-base font-semibold text-slate-900">
            Wenn entschieden
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Sag mir die Nummer (z. B. „V2 · Aufwind" oder „Option 2") — ich
            tausche das SVG in{" "}
            <code className="rounded bg-white px-1.5 py-0.5 text-xs text-slate-700">
              components/ui/Logo.tsx
            </code>{" "}
            aus und entferne diese Preview-Route.
          </p>
        </footer>
      </div>
    </main>
  );
}
