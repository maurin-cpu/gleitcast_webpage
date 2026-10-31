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
  teils: "teilweise",
  nein: "nein",
  unbelegt: "nicht belegt",
};

function Reichweite({ stufe }: { stufe: 1 | 2 | 3 | 4 }) {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {[1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={`h-2 w-4 rounded-full sm:w-6 ${i <= stufe ? "bg-sky-500" : "bg-slate-200"}`}
        />
      ))}
    </div>
  );
}

// Kurze Erklärung je Merkmal, in derselben Reihenfolge wie MERKMAL_LABELS.
const MERKMAL_TEXT = [
  "Vorhersage für einen bestimmten Startplatz, nicht nur ein Kartenraster.",
  "Die App sortiert oder färbt Tage oder Orte automatisch.",
  "Ein Text, der beschreibt, was die Werte zeigen.",
  "Die Lage kommt jeden Morgen von selbst, ohne dass du nachschaust.",
  "Eigene Angaben zum Föhn.",
  "Thermik, Wolkenbasis, Höhenwind oder Sounding.",
  "Gemessene Werte von Stationen, nicht nur Prognose.",
  "Ein KI-Modell in der Prognose oder eine Anbindung an Chat-Assistenten.",
];

/** Kompakte Kachel je App: Name, Schwerpunkt, Gebiet. */
function AppKachel({ app }: { app: App }) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        app.eigene ? "border-sky-500 bg-sky-50" : "border-slate-200 bg-white"
      }`}
    >
      <p className={`font-bold ${app.eigene ? "text-sky-800" : "text-slate-900"}`}>{app.name}</p>
      <p className="mt-0.5 text-sm leading-snug text-slate-600">{app.fokus}</p>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-slate-500">{app.gebiet}</span>
        <Reichweite stufe={app.reichweite} />
      </div>
    </div>
  );
}

/** Karte je Merkmal: wer es hat (ja), wer teilweise, wer nicht oder unbelegt. */
function MerkmalKarte({ index }: { index: number }) {
  const label = MERKMAL_LABELS[index];
  const mit = (st: Status) =>
    APPS.map((a) => ({ app: a, m: a.merkmale[index] })).filter((x) => x.m.status === st);
  const ja = mit("ja");
  const teils = mit("teils");
  const rest = [...mit("nein"), ...mit("unbelegt")].map((x) => x.app.name);

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5">
      <h4 className="text-base font-bold text-slate-900">{label}</h4>
      <p className="mt-1 text-sm leading-snug text-slate-600">{MERKMAL_TEXT[index]}</p>
      <ul className="mt-4 space-y-2">
        {[...ja, ...teils].map(({ app, m }) => (
          <li key={app.name} className="flex items-start gap-2.5">
            <span className="mt-1"><Punkt status={m.status} /></span>
            <span className="text-sm leading-snug">
              <span className={`font-semibold ${app.eigene ? "text-sky-700" : "text-slate-900"}`}>
                {app.name}
              </span>
              <span className="text-slate-500">
                {" "}
                {WORT[m.status]}
                {m.detail ? `, ${m.detail}` : ""}
              </span>
            </span>
          </li>
        ))}
      </ul>
      {rest.length > 0 && (
        <p className="mt-auto border-t border-slate-100 pt-3 text-xs leading-snug text-slate-500">
          <span className="mr-1.5 inline-block align-middle"><Punkt status="unbelegt" /></span>
          Nein oder nicht belegt: {rest.join(", ")}
        </p>
      )}
    </div>
  );
}

export function AppVergleich() {
  return (
    <section aria-labelledby="vergleich-headline" className="my-12">
      <h2 id="vergleich-headline" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Die Apps auf einen Blick
      </h2>
      <p className="mt-2 text-base text-slate-600">
        Schwerpunkt und Gebiet. Der Balken zeigt die Reichweite: {REICHWEITE.join(", ")}.
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {APPS.map((app) => (
          <AppKachel key={app.name} app={app} />
        ))}
      </div>

      <h3 className="mt-14 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Wer kann was?</h3>
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-700">
        <span className="inline-flex items-center gap-2"><Punkt status="ja" />ja</span>
        <span className="inline-flex items-center gap-2"><Punkt status="teils" />teilweise</span>
        <span className="inline-flex items-center gap-2"><Punkt status="unbelegt" />nein oder nicht belegt</span>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {MERKMAL_LABELS.map((_, i) => (
          <MerkmalKarte key={i} index={i} />
        ))}
      </div>

      <h3 className="mt-14 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Welche App wofür?</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
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
