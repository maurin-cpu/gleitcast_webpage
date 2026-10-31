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
  plattform: string;
  sprachen: string;
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
  "Streckenplanung",
  "Live-Messwerte",
  "KI",
] as const;

const APPS: App[] = [
  {
    name: "Wingcast",
    gebiet: "Schweiz",
    reichweite: 1,
    fokus: "Karte: wo es heute passt, plus Morgenmail",
    plattform: "Web-App, Mail",
    sprachen: "DE, EN",
    eigene: true,
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "ja", detail: "Karte aller Schweizer Startplätze, 3 Tage" },
      { label: MERKMAL_LABELS[1], status: "ja", detail: "Warnhinweise und Flugqualität 1 bis 5 getrennt" },
      { label: MERKMAL_LABELS[2], status: "ja", detail: "Begründung je Startplatz" },
      { label: MERKMAL_LABELS[3], status: "ja", detail: "06:00, Regionen wählbar" },
      { label: MERKMAL_LABELS[4], status: "ja", detail: "Talstationen und Druck" },
      { label: MERKMAL_LABELS[5], status: "ja", detail: "Basis, Höhenwind" },
      { label: MERKMAL_LABELS[6], status: "teils", detail: "Streckenflug-Rating je Startplatz" },
      { label: MERKMAL_LABELS[7], status: "nein", detail: "nicht in der Anzeige" },
      { label: MERKMAL_LABELS[8], status: "ja", detail: "Texte; ChatGPT und Claude" },
    ],
  },
  {
    name: "Burnair",
    gebiet: "Europa",
    reichweite: 3,
    fokus: "Startplatz, Thermik, Strecke, Live",
    plattform: "Web, iOS, Android, Skytraxx",
    sprachen: "8 Sprachen",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "ja", detail: "über 5'000 Plätze, 5 Tage" },
      { label: MERKMAL_LABELS[1], status: "ja", detail: "Regionen nach Thermik, Startplätze nach Wind" },
      { label: MERKMAL_LABELS[2], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[3], status: "nein", detail: "Alarme bei Schwellenwerten" },
      { label: MERKMAL_LABELS[4], status: "ja", detail: "Druckdifferenz live und Prognose, Alarm" },
      { label: MERKMAL_LABELS[5], status: "ja", detail: "Steigen, Basis, Emagramm" },
      { label: MERKMAL_LABELS[6], status: "ja", detail: "Flugdistanz, XC-Planer" },
      { label: MERKMAL_LABELS[7], status: "ja", detail: "über 15'000 Stationen, Webcams" },
      { label: MERKMAL_LABELS[8], status: "unbelegt", detail: "" },
    ],
  },
  {
    name: "XC Therm",
    gebiet: "Europa",
    reichweite: 3,
    fokus: "Strecke und Thermik",
    plattform: "Web",
    sprachen: "DE, EN, FR, IT",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "nein", detail: "Regionen und Raster" },
      { label: MERKMAL_LABELS[1], status: "ja", detail: "mögliche Flugdistanz" },
      { label: MERKMAL_LABELS[2], status: "teils", detail: "Textansicht je Region" },
      { label: MERKMAL_LABELS[3], status: "nein", detail: "Gewitterhinweise in der Prognose" },
      { label: MERKMAL_LABELS[4], status: "teils", detail: "in den Windkarten erkennbar" },
      { label: MERKMAL_LABELS[5], status: "ja", detail: "Steigen, Wolken, Wind auf 14 Höhen" },
      { label: MERKMAL_LABELS[6], status: "ja", detail: "Flugdistanz, Flugplaner" },
      { label: MERKMAL_LABELS[7], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[8], status: "unbelegt", detail: "" },
    ],
  },
  {
    name: "SoaringMeteo",
    gebiet: "Alpen, weltweit",
    reichweite: 4,
    fokus: "Thermik und Sounding",
    plattform: "Web",
    sprachen: "8 Sprachen",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "nein", detail: "beliebiger Kartenpunkt" },
      { label: MERKMAL_LABELS[1], status: "ja", detail: "Thermikqualität 0 bis 100" },
      { label: MERKMAL_LABELS[2], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[3], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[4], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[5], status: "ja", detail: "Emagramm, Steigen" },
      { label: MERKMAL_LABELS[6], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[7], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[8], status: "unbelegt", detail: "" },
    ],
  },
  {
    name: "Meteo-Parapente",
    gebiet: "Europa",
    reichweite: 3,
    fokus: "Eigenes Modell, Höhenprofil",
    plattform: "Web, iOS, Android",
    sprachen: "17 Sprachen (App)",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "teils", detail: "Orte von ParaglidingEarth" },
      { label: MERKMAL_LABELS[1], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[2], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[3], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[4], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[5], status: "ja", detail: "Windgramm, Sounding" },
      { label: MERKMAL_LABELS[6], status: "ja", detail: "XC-Planer" },
      { label: MERKMAL_LABELS[7], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[8], status: "teils", detail: "KI im Modell" },
    ],
  },
  {
    name: "Paraglidable",
    gebiet: "Europa",
    reichweite: 3,
    fokus: "Flugwahrscheinlichkeit, 10 Tage",
    plattform: "Web, Android",
    sprachen: "EN",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "ja", detail: "benannte Startplätze" },
      { label: MERKMAL_LABELS[1], status: "ja", detail: "Wahrscheinlichkeit" },
      { label: MERKMAL_LABELS[2], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[3], status: "nein", detail: "" },
      { label: MERKMAL_LABELS[4], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[5], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[6], status: "teils", detail: "Wahrscheinlichkeit für Strecke" },
      { label: MERKMAL_LABELS[7], status: "nein", detail: "" },
      { label: MERKMAL_LABELS[8], status: "ja", detail: "neuronales Netz" },
    ],
  },
];

const WOFUER: Array<{ frage: string; apps: string[] }> = [
  { frage: "Wo passt es heute in der Schweiz, auf einen Blick?", apps: ["Wingcast", "Paraglidable"] },
  { frage: "Wie ist die Lage heute in meinen Regionen?", apps: ["Wingcast"] },
  { frage: "Was macht der Wind am Start?", apps: ["Burnair"] },
  { frage: "Wie weit komme ich auf Strecke?", apps: ["Burnair", "XC Therm", "Meteo-Parapente", "Paraglidable"] },
  { frage: "Wie sieht das Höhenprofil aus?", apps: ["Meteo-Parapente", "SoaringMeteo", "Burnair"] },
  { frage: "Wie ist es im Ausland?", apps: ["Burnair", "XC Therm", "Meteo-Parapente", "Paraglidable"] },
  { frage: "Wie sieht es in zehn Tagen aus?", apps: ["Paraglidable"] },
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
  "Die App sortiert oder färbt Tage, Regionen oder Startplätze automatisch.",
  "Ein Text, der beschreibt, was die Werte zeigen.",
  "Die Lage kommt jeden Morgen von selbst, ohne dass du nachschaust.",
  "Eigene Angaben zum Föhn.",
  "Thermik, Wolkenbasis, Höhenwind oder Sounding.",
  "Distanz schätzen oder eine Route planen.",
  "Gemessene Werte von Stationen, nicht nur Prognose.",
  "Ein KI-Modell in der Prognose, KI-Texte oder eine Anbindung an Chat-Assistenten.",
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
      <p className="mt-2 text-xs leading-snug text-slate-500">
        {app.plattform} · {app.sprachen}
      </p>
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
