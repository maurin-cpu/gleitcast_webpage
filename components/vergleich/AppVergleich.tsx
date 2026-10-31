import { Fragment } from "react";

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

const MERKMAL_LABELS = [
  "Prognose je Startplatz",
  "Thermik und Steigwerte",
  "Sounding oder Emagramm",
  "Höhenwind",
  "Föhn",
  "Streckenplanung",
  "Live-Wind und Webcams",
  "Live-Tracking",
  "Lufträume",
  "Flugqualität und Gefahren je Startplatz",
  "Morgenbriefing mit Erklärung",
] as const;

// Gruppen der Matrix (Indizes in MERKMAL_LABELS), in der Reihenfolge des Ablaufs:
// erst Voranalyse, dann Planung, dann Flugtag (User 31.10.). Ehrlich gewichtet: Planung und
// Flugtag zeigen, wo andere Apps mehr bieten; die Voranalyse ist der eine Punkt,
// den Wingcast anders macht (User 31.10.).
const GRUPPEN: Array<{ titel: string; indizes: number[] }> = [
  { titel: "Voranalyse", indizes: [9, 10] },
  { titel: "Planung", indizes: [0, 1, 2, 3, 4, 5] },
  { titel: "Am Flugtag", indizes: [6, 7, 8] },
];

const APPS: App[] = [
  {
    name: "Burnair",
    gebiet: "Europa",
    reichweite: 3,
    fokus: "Startplatz, Thermik, Strecke, Live",
    plattform: "Web, iOS, Android, Skytraxx",
    sprachen: "8 Sprachen",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "ja", detail: "über 5'000 Plätze, 5 Tage" },
      { label: MERKMAL_LABELS[1], status: "ja", detail: "654 Thermikregionen, Steigwerte, Basis" },
      { label: MERKMAL_LABELS[2], status: "ja", detail: "Emagramm an jedem Punkt" },
      { label: MERKMAL_LABELS[3], status: "ja", detail: "10 m bis 4000 m" },
      { label: MERKMAL_LABELS[4], status: "ja", detail: "Druckdifferenz live und Prognose, Alarm" },
      { label: MERKMAL_LABELS[5], status: "ja", detail: "Flugdistanz, XC-Planer, Streckenprognose" },
      { label: MERKMAL_LABELS[6], status: "ja", detail: "über 15'000 Stationen, Webcams" },
      { label: MERKMAL_LABELS[7], status: "ja", detail: "App, Skytraxx, Flymaster und weitere" },
      { label: MERKMAL_LABELS[8], status: "ja", detail: "Lufträume mit NOTAM und DABS" },
      { label: MERKMAL_LABELS[9], status: "teils", detail: "Startplätze nach Wind, Thermik je Region" },
      { label: MERKMAL_LABELS[10], status: "nein", detail: "Alarme bei Schwellenwerten" },
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
      { label: MERKMAL_LABELS[1], status: "ja", detail: "Steigen, Wolken je Region" },
      { label: MERKMAL_LABELS[2], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[3], status: "ja", detail: "Windkarten auf 14 Höhen" },
      { label: MERKMAL_LABELS[4], status: "teils", detail: "in den Windkarten erkennbar" },
      { label: MERKMAL_LABELS[5], status: "ja", detail: "Flugdistanz, Flugplaner" },
      { label: MERKMAL_LABELS[6], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[7], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[8], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[9], status: "teils", detail: "Flugdistanz je Region" },
      { label: MERKMAL_LABELS[10], status: "nein", detail: "Textansicht je Region, keine Mail" },
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
      { label: MERKMAL_LABELS[1], status: "ja", detail: "Steigen, Thermikqualität" },
      { label: MERKMAL_LABELS[2], status: "ja", detail: "Sounding an jedem Punkt" },
      { label: MERKMAL_LABELS[3], status: "ja", detail: "bis 4000 m" },
      { label: MERKMAL_LABELS[4], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[5], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[6], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[7], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[8], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[9], status: "teils", detail: "Thermikqualität auf der Karte" },
      { label: MERKMAL_LABELS[10], status: "unbelegt", detail: "" },
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
      { label: MERKMAL_LABELS[1], status: "ja", detail: "Thermikstärke, Grenzschicht" },
      { label: MERKMAL_LABELS[2], status: "ja", detail: "Sounding, Windgramm" },
      { label: MERKMAL_LABELS[3], status: "ja", detail: "250-m-Stufen" },
      { label: MERKMAL_LABELS[4], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[5], status: "ja", detail: "XC-Planer" },
      { label: MERKMAL_LABELS[6], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[7], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[8], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[9], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[10], status: "unbelegt", detail: "" },
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
      { label: MERKMAL_LABELS[1], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[2], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[3], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[4], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[5], status: "teils", detail: "Wahrscheinlichkeit für Strecke" },
      { label: MERKMAL_LABELS[6], status: "nein", detail: "" },
      { label: MERKMAL_LABELS[7], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[8], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[9], status: "teils", detail: "eine Flugwahrscheinlichkeit, Gefahren nicht getrennt" },
      { label: MERKMAL_LABELS[10], status: "nein", detail: "" },
    ],
  },
  {
    name: "Wingcast",
    gebiet: "Schweiz",
    reichweite: 1,
    fokus: "Voranalyse: Flugqualität und Gefahren",
    plattform: "Web-App, Mail",
    sprachen: "DE, EN",
    eigene: true,
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "ja", detail: "alle Schweizer Startplätze, 3 Tage" },
      { label: MERKMAL_LABELS[1], status: "ja", detail: "Steigen, Basis" },
      { label: MERKMAL_LABELS[2], status: "nein", detail: "" },
      { label: MERKMAL_LABELS[3], status: "ja", detail: "Start bis 3000 m darüber" },
      { label: MERKMAL_LABELS[4], status: "ja", detail: "Talstationen und Druck" },
      { label: MERKMAL_LABELS[5], status: "teils", detail: "Streckenflug-Rating, keine Route" },
      { label: MERKMAL_LABELS[6], status: "nein", detail: "" },
      { label: MERKMAL_LABELS[7], status: "nein", detail: "" },
      { label: MERKMAL_LABELS[8], status: "nein", detail: "" },
      { label: MERKMAL_LABELS[9], status: "ja", detail: "Flugqualität 1 bis 5 und Gefahren aus 8 Aspekten" },
      { label: MERKMAL_LABELS[10], status: "ja", detail: "06:00, Regionen wählbar" },
    ],
  },
];

const WOFUER: Array<{ frage: string; apps: string[] }> = [
  { frage: "Wie gut und wie riskant ist der Tag an meinen Startplätzen? (Voranalyse)", apps: ["Wingcast"] },
  { frage: "Wo bin ich im Luftraum, wer fliegt gerade?", apps: ["Burnair"] },
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


// Kurze Erklärung je Merkmal, in derselben Reihenfolge wie MERKMAL_LABELS.
const MERKMAL_TEXT = [
  "Vorhersage für einen bestimmten Startplatz, nicht nur ein Kartenraster.",
  "Steigwerte, Wolkenbasis oder Thermikkarten.",
  "Vertikales Profil der Atmosphäre über einem Ort.",
  "Wind in mehreren Höhen.",
  "Eigene Angaben zum Föhn.",
  "Distanz schätzen oder eine Route planen.",
  "Gemessener Wind von Stationen und Bilder von Webcams.",
  "Andere Piloten live auf der Karte.",
  "Lufträume und Sperrgebiete auf der Karte.",
  "Für jeden Startplatz eine Einschätzung, wie gut sich der Tag eignet und welche Gefahren die Daten zeigen.",
  "Jeden Morgen eine Mail, die die Lage in Worten erklärt.",
];

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
              <span className={`font-semibold text-slate-900`}>
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

// Kopfzeilen der Matrix: Gebiet und Tage voraus.
// Belege: 1-planung/analysen/2026-10-26_konkurrenz-flugwetter-apps.md
const KOPF: Record<string, { gebiet: string; tage: string }> = {
  Wingcast: { gebiet: "CH", tage: "3" },
  Burnair: { gebiet: "EU", tage: "5" },
  "XC Therm": { gebiet: "EU", tage: "5" },
  SoaringMeteo: { gebiet: "Welt", tage: "7" },
  "Meteo-Parapente": { gebiet: "EU", tage: "5" },
  Paraglidable: { gebiet: "EU", tage: "10" },
};

function Zelle({ app, children }: { app: App; children: React.ReactNode }) {
  return (
    <td className={`border-t border-slate-100 px-0.5 py-2.5 text-center `}>
      {children}
    </td>
  );
}

function PunktZelle({ app, status, detail }: { app: App; status: Status; detail: string }) {
  const text = `${app.name}: ${WORT[status]}${detail ? `, ${detail}` : ""}`;
  return (
    <Zelle app={app}>
      <span title={text} className="inline-flex justify-center">
        <Punkt status={status} />
      </span>
      <span className="sr-only">{text}</span>
    </Zelle>
  );
}

function ZeilenKopf({ children }: { children: React.ReactNode }) {
  return (
    <th
      scope="row"
      lang="de"
      className="hyphens-auto border-t border-slate-100 py-2.5 pr-2 text-left text-[13px] font-medium leading-tight text-slate-800 sm:text-sm"
    >
      {children}
    </th>
  );
}

export function AppVergleich() {
  return (
    <section aria-labelledby="vergleich-headline" className="my-12">
      <h2 id="vergleich-headline" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Der Vergleich auf einen Blick
      </h2>
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-700">
        <span className="inline-flex items-center gap-2"><Punkt status="ja" />ja</span>
        <span className="inline-flex items-center gap-2"><Punkt status="teils" />teilweise</span>
        <span className="inline-flex items-center gap-2"><Punkt status="nein" />nein</span>
        <span className="inline-flex items-center gap-2"><Punkt status="unbelegt" />nicht belegt</span>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-3 pb-2 sm:px-5">
        <table className="w-full table-fixed border-separate border-spacing-0">
          <caption className="sr-only">
            Vergleich der Gleitschirm-Wetter-Apps nach Gebiet, Prognosetagen und Funktionen
          </caption>
          <colgroup>
            <col className="w-[38%] sm:w-[34%]" />
            {APPS.map((a) => (
              <col key={a.name} />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th scope="col" className="sr-only">Merkmal</th>
              {APPS.map((a) => (
                <th
                  key={a.name}
                  scope="col"
                  className={`h-32 px-0.5 pb-2 align-bottom `}
                >
                  <span
                    className={`mx-auto block rotate-180 whitespace-nowrap text-xs font-bold [writing-mode:vertical-rl] sm:text-sm text-slate-800`}
                  >
                    {a.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <ZeilenKopf>Gebiet</ZeilenKopf>
              {APPS.map((a) => (
                <Zelle key={a.name} app={a}>
                  <span className="text-xs font-semibold text-slate-700">{KOPF[a.name].gebiet}</span>
                </Zelle>
              ))}
            </tr>
            <tr>
              <ZeilenKopf>Tage voraus</ZeilenKopf>
              {APPS.map((a) => (
                <Zelle key={a.name} app={a}>
                  <span className="text-xs font-semibold tabular-nums text-slate-700">{KOPF[a.name].tage}</span>
                </Zelle>
              ))}
            </tr>
            {GRUPPEN.map((g) => (
              <Fragment key={g.titel}>
                <tr>
                  <th
                    colSpan={APPS.length + 1}
                    scope="colgroup"
                    className="pb-1 pt-6 text-left text-xs font-semibold uppercase tracking-wider text-sky-700"
                  >
                    {g.titel}
                  </th>
                </tr>
                {g.indizes.map((i) => (
                  <tr key={MERKMAL_LABELS[i]}>
                    <ZeilenKopf>{MERKMAL_LABELS[i]}</ZeilenKopf>
                    {APPS.map((a) => (
                      <PunktZelle key={a.name} app={a} status={a.merkmale[i].status} detail={a.merkmale[i].detail} />
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Gebiet: CH = Schweiz, EU = Europa, Welt = weltweit. „Nicht belegt" heisst: auf den offiziellen Seiten
        nicht zu finden.
      </p>

      <details className="group mt-6 rounded-2xl border border-slate-200 bg-white">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
          Was genau steckt hinter jedem Punkt?
          <span aria-hidden="true" className="text-sky-700 transition-transform group-open:rotate-45">+</span>
        </summary>
        <div className="grid gap-4 border-t border-slate-100 p-4 sm:grid-cols-2 sm:p-5">
          {GRUPPEN.flatMap((g) => g.indizes).map((i) => (
            <MerkmalKarte key={i} index={i} />
          ))}
        </div>
      </details>

      <h3 className="mt-14 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Welche App wofür?</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {WOFUER.map((w) => (
          <div key={w.frage} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">{w.frage}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {w.apps.map((x) => (
                <li
                  key={x}
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    "bg-slate-100 text-slate-700"
                  }`}
                >
                  {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
