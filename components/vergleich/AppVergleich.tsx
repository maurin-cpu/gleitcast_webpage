// Grafischer Vergleich der Flugwetter-Apps (Artikel gleitschirm-wetter-apps).
// Bewusst ohne Tabelle: Karten und Farbpunkte brechen auf dem Handy in eine
// Spalte um, damit nie seitlich gescrollt werden muss. Jeder Status hat zusätzlich
// ein Wort (color-not-only). Quellen und Belege: 1-planung/analysen/2026-10-26_konkurrenz-flugwetter-apps.md

type Status = "ja" | "teils" | "nein" | "unbelegt";

type Merkmal = { label: string; status: Status; detail: string };

type App = {
  name: string;
  gebiet: string;
  /** 1 = Schweiz, 2 = Alpen, 3 = Europa, 4 = weltweit */
  reichweite: 1 | 2 | 3 | 4;
  fokus: string;
  eigene?: boolean;
  merkmale: Merkmal[];
};

const REICHWEITE = ["Schweiz", "Alpen", "Europa", "weltweit"];

const MERKMAL_LABELS = [
  "Prognose je Startplatz",
  "Einordnung nach Werten",
  "Text in Klartext",
  "Tägliche Mail",
  "Föhn",
  "Thermik und Höhe",
  "Live-Messwerte",
  "KI-Anbindung",
] as const;

const APPS: App[] = [
  {
    name: "Wingcast",
    gebiet: "Schweiz",
    reichweite: 1,
    fokus: "Lage für die eigenen Regionen",
    eigene: true,
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "ja", detail: "alle Schweizer Startplätze" },
      { label: MERKMAL_LABELS[1], status: "ja", detail: "je Startplatz und Tag" },
      { label: MERKMAL_LABELS[2], status: "ja", detail: "je Startplatz" },
      { label: MERKMAL_LABELS[3], status: "ja", detail: "06:00, Regionen wählbar" },
      { label: MERKMAL_LABELS[4], status: "ja", detail: "Talstationen und Druck" },
      { label: MERKMAL_LABELS[5], status: "ja", detail: "Basis, Höhenwind" },
      { label: MERKMAL_LABELS[6], status: "nein", detail: "nicht in der Anzeige" },
      { label: MERKMAL_LABELS[7], status: "ja", detail: "ChatGPT und Claude" },
    ],
  },
  {
    name: "Burnair",
    gebiet: "Europa",
    reichweite: 3,
    fokus: "Wind am Startplatz, Live-Werte",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "ja", detail: "4D-Startplatzprognose" },
      { label: MERKMAL_LABELS[1], status: "teils", detail: "nach Wind und Böen" },
      { label: MERKMAL_LABELS[2], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[3], status: "nein", detail: "Wind-Alarm stattdessen" },
      { label: MERKMAL_LABELS[4], status: "teils", detail: "Druckdifferenz, Alarm" },
      { label: MERKMAL_LABELS[5], status: "teils", detail: "Thermik-Ebene" },
      { label: MERKMAL_LABELS[6], status: "ja", detail: "über 15'000 Stationen" },
      { label: MERKMAL_LABELS[7], status: "unbelegt", detail: "" },
    ],
  },
  {
    name: "XC Therm",
    gebiet: "Europa",
    reichweite: 3,
    fokus: "Strecke und Thermik",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "nein", detail: "Regionen und Raster" },
      { label: MERKMAL_LABELS[1], status: "ja", detail: "mögliche Flugdistanz" },
      { label: MERKMAL_LABELS[2], status: "teils", detail: "Herkunft offen" },
      { label: MERKMAL_LABELS[3], status: "nein", detail: "keine Warnungen" },
      { label: MERKMAL_LABELS[4], status: "nein", detail: "kein Föhnprodukt" },
      { label: MERKMAL_LABELS[5], status: "ja", detail: "Steigen, Wolken, Wind" },
      { label: MERKMAL_LABELS[6], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[7], status: "unbelegt", detail: "" },
    ],
  },
  {
    name: "SoaringMeteo",
    gebiet: "Alpen, weltweit",
    reichweite: 4,
    fokus: "Thermik und Sounding",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "nein", detail: "beliebiger Kartenpunkt" },
      { label: MERKMAL_LABELS[1], status: "ja", detail: "Thermikqualität 0 bis 100" },
      { label: MERKMAL_LABELS[2], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[3], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[4], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[5], status: "ja", detail: "Emagramm, Steigen" },
      { label: MERKMAL_LABELS[6], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[7], status: "unbelegt", detail: "" },
    ],
  },
  {
    name: "Meteo-Parapente",
    gebiet: "Europa",
    reichweite: 3,
    fokus: "Modell und Höhenprofil",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "teils", detail: "Orte wählbar" },
      { label: MERKMAL_LABELS[1], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[2], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[3], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[4], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[5], status: "ja", detail: "Windgramm, Sounding" },
      { label: MERKMAL_LABELS[6], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[7], status: "unbelegt", detail: "" },
    ],
  },
  {
    name: "Paraglidable",
    gebiet: "Europa",
    reichweite: 3,
    fokus: "Flugwahrscheinlichkeit",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "nein", detail: "Raster, eigene Punkte" },
      { label: MERKMAL_LABELS[1], status: "ja", detail: "Wahrscheinlichkeit" },
      { label: MERKMAL_LABELS[2], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[3], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[4], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[5], status: "teils", detail: "für Strecke" },
      { label: MERKMAL_LABELS[6], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[7], status: "ja", detail: "neuronales Netz" },
    ],
  },
  {
    name: "Windy",
    gebiet: "weltweit",
    reichweite: 4,
    fokus: "Weltkarte mit vielen Modellen",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "teils", detail: "Kartenpunkte" },
      { label: MERKMAL_LABELS[1], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[2], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[3], status: "teils", detail: "Alarme für Favoriten" },
      { label: MERKMAL_LABELS[4], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[5], status: "ja", detail: "Thermik- und Wolkenbasis" },
      { label: MERKMAL_LABELS[6], status: "ja", detail: "Stationen, Webcams" },
      { label: MERKMAL_LABELS[7], status: "teils", detail: "KI-Modell für 15 Tage" },
    ],
  },
  {
    name: "Meteoblue",
    gebiet: "weltweit",
    reichweite: 4,
    fokus: "Modelle und Diagramme",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "teils", detail: "Ort oder Koordinate" },
      { label: MERKMAL_LABELS[1], status: "teils", detail: "Soaring-Index" },
      { label: MERKMAL_LABELS[2], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[3], status: "nein", detail: "nur allgemeine Warnungen" },
      { label: MERKMAL_LABELS[4], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[5], status: "ja", detail: "Meteogramm, Stüve" },
      { label: MERKMAL_LABELS[6], status: "ja", detail: "Stationen, Webcams" },
      { label: MERKMAL_LABELS[7], status: "teils", detail: "mLM-Verfahren" },
    ],
  },
  {
    name: "MeteoSchweiz",
    gebiet: "Schweiz",
    reichweite: 1,
    fokus: "Offizielle Modelle und Warnungen",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[1], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[2], status: "teils", detail: "nach Region" },
      { label: MERKMAL_LABELS[3], status: "nein", detail: "Warnungen als Push" },
      { label: MERKMAL_LABELS[4], status: "teils", detail: "Symbole im Flugwetter" },
      { label: MERKMAL_LABELS[5], status: "teils", detail: "nur mit Pilotenlizenz" },
      { label: MERKMAL_LABELS[6], status: "ja", detail: "Messwerte, Karte" },
      { label: MERKMAL_LABELS[7], status: "unbelegt", detail: "" },
    ],
  },
];

const WOFUER: Array<{ frage: string; apps: string[] }> = [
  { frage: "Was zeigen die Modelle für meine Region?", apps: ["Wingcast", "MeteoSchweiz"] },
  { frage: "Wie weit komme ich auf Strecke?", apps: ["XC Therm", "SoaringMeteo", "Paraglidable"] },
  { frage: "Was macht der Wind jetzt am Start?", apps: ["Burnair", "Windy", "MeteoSchweiz"] },
  { frage: "Wie sieht das Sounding aus?", apps: ["Meteoblue", "Meteo-Parapente", "SoaringMeteo"] },
  { frage: "Wie ist das Wetter im Ausland?", apps: ["Windy", "Meteoblue", "Meteo-Parapente"] },
];

/** Punkt je Status: Form und Füllung, dazu das Wort daneben. */
function Punkt({ status }: { status: Status }) {
  const cls = {
    ja: "bg-sky-600 border-sky-600",
    teils: "bg-sky-100 border-sky-600",
    nein: "bg-slate-200 border-slate-300",
    unbelegt: "bg-white border-dashed border-slate-400",
  }[status];
  return <span aria-hidden="true" className={`inline-block h-3.5 w-3.5 shrink-0 rounded-full border-2 ${cls}`} />;
}

const WORT: Record<Status, string> = {
  ja: "ja",
  teils: "teils",
  nein: "nein",
  unbelegt: "nicht belegt",
};

function Reichweite({ stufe }: { stufe: 1 | 2 | 3 | 4 }) {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {[1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={`h-2 w-6 rounded-full ${i <= stufe ? "bg-sky-500" : "bg-slate-200"}`}
        />
      ))}
    </div>
  );
}

function AppKarte({ app }: { app: App }) {
  return (
    <article
      className={`flex flex-col rounded-2xl border bg-white p-5 shadow-sm ${
        app.eigene ? "border-sky-500 ring-4 ring-sky-100" : "border-slate-200"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{app.name}</h3>
          <p className="mt-0.5 text-sm text-slate-600">{app.fokus}</p>
        </div>
        {app.eigene && (
          <span className="shrink-0 rounded-full bg-sky-600 px-2.5 py-1 text-xs font-semibold text-white">
            Unser Produkt
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2">
        <span className="text-sm text-slate-700">Gebiet: {app.gebiet}</span>
        <Reichweite stufe={app.reichweite} />
      </div>

      <ul className="mt-4 divide-y divide-slate-100">
        {app.merkmale.map((m) => (
          <li key={m.label} className="flex items-center gap-3 py-2">
            <Punkt status={m.status} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-slate-800">{m.label}</p>
              {m.detail && <p className="text-xs text-slate-500">{m.detail}</p>}
            </div>
            <span
              className={`shrink-0 text-xs font-semibold ${
                m.status === "ja" ? "text-sky-700" : m.status === "unbelegt" ? "text-slate-500" : "text-slate-600"
              }`}
            >
              {WORT[m.status]}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function AppVergleich() {
  return (
    <section aria-labelledby="vergleich-headline" className="my-12">
      <h2 id="vergleich-headline" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Die Apps auf einen Blick
      </h2>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-700">
        <span className="inline-flex items-center gap-2"><Punkt status="ja" />ja</span>
        <span className="inline-flex items-center gap-2"><Punkt status="teils" />teils</span>
        <span className="inline-flex items-center gap-2"><Punkt status="nein" />nein</span>
        <span className="inline-flex items-center gap-2"><Punkt status="unbelegt" />nicht belegt</span>
        <span className="inline-flex items-center gap-2 text-slate-500">
          Reichweite: {REICHWEITE.join(", ")}
        </span>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {APPS.map((app) => (
          <AppKarte key={app.name} app={app} />
        ))}
      </div>

      <h3 className="mt-14 text-xl font-bold tracking-tight text-slate-900">Welche App wofür?</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {WOFUER.map((w) => (
          <div key={w.frage} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">{w.frage}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {w.apps.map((a) => (
                <li
                  key={a}
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    a === "Wingcast" ? "bg-sky-600 text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
