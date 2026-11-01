import { Fragment } from "react";
import { VI18N, type Lang } from "./i18n";

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
  "Ampel und Flugqualität je Startplatz",
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
      { label: MERKMAL_LABELS[9], status: "teils", detail: "Farbe nach Windstärke je Startplatz, Thermik je Region" },
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
      { label: MERKMAL_LABELS[9], status: "nein", detail: "nur Regionen, keine Startplätze" },
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
      { label: MERKMAL_LABELS[9], status: "teils", detail: "Thermikqualität je Kartenpunkt" },
      { label: MERKMAL_LABELS[10], status: "unbelegt", detail: "" },
    ],
  },
  {
    name: "Meteo-Parapente",
    gebiet: "Europa",
    reichweite: 3,
    fokus: "Eigenes Modell, Höhenprofil",
    plattform: "Web, iOS, Android",
    sprachen: "Web 6 Sprachen, iOS Englisch",
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "teils", detail: "Startorte von ParaglidingEarth, Prognose je Punkt" },
      { label: MERKMAL_LABELS[1], status: "ja", detail: "Thermik und Instabilität, Thermikkarten" },
      { label: MERKMAL_LABELS[2], status: "ja", detail: "Sounding und Windgramm" },
      { label: MERKMAL_LABELS[3], status: "ja", detail: "Windgramm bis 10 000 m, Schritte 250 m" },
      { label: MERKMAL_LABELS[4], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[5], status: "teils", detail: "Thermikkarten für Strecke, keine Routenplanung" },
      { label: MERKMAL_LABELS[6], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[7], status: "unbelegt", detail: "" },
      { label: MERKMAL_LABELS[8], status: "ja", detail: "Luftraumkarte (openAIP)" },
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
      { label: MERKMAL_LABELS[9], status: "teils", detail: "Flugwahrscheinlichkeit, Gefahren nicht dokumentiert" },
      { label: MERKMAL_LABELS[10], status: "nein", detail: "" },
    ],
  },
  {
    name: "Wingcast",
    gebiet: "Schweiz",
    reichweite: 1,
    fokus: "Voranalyse: Ampel und Flugqualität je Startplatz",
    plattform: "Web-App, Mail",
    sprachen: "DE, EN",
    eigene: true,
    merkmale: [
      { label: MERKMAL_LABELS[0], status: "ja", detail: "Schweizer Startplätze, 3 Tage" },
      { label: MERKMAL_LABELS[1], status: "ja", detail: "Steigen, Basis" },
      { label: MERKMAL_LABELS[2], status: "nein", detail: "" },
      { label: MERKMAL_LABELS[3], status: "ja", detail: "Start bis 3000 m darüber" },
      { label: MERKMAL_LABELS[4], status: "ja", detail: "Föhntäler und Druckdifferenz" },
      { label: MERKMAL_LABELS[5], status: "nein", detail: "" },
      { label: MERKMAL_LABELS[6], status: "nein", detail: "" },
      { label: MERKMAL_LABELS[7], status: "nein", detail: "" },
      { label: MERKMAL_LABELS[8], status: "nein", detail: "" },
      { label: MERKMAL_LABELS[9], status: "ja", detail: "Ampel aus 8 Aspekten, Flugqualität 1 bis 5" },
      { label: MERKMAL_LABELS[10], status: "ja", detail: "06:00, Regionen wählbar" },
    ],
  },
];

const WOFUER: Array<{ frage: string; apps: string[] }> = [
  { frage: "Wo lohnt sich heute ein genauerer Blick?", apps: ["Wingcast"] },
  { frage: "Wie weit komme ich auf Strecke?", apps: ["Burnair", "XC Therm", "Paraglidable"] },
  { frage: "Wie sieht das Höhenprofil aus?", apps: ["Meteo-Parapente", "SoaringMeteo", "Burnair"] },
  { frage: "Was ist am Start los: Wind, Luftraum, wer fliegt?", apps: ["Burnair"] },
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
// Deutsche Texte für die Oberfläche; FR, IT, EN kommen aus i18n.ts.
const DE_UI = {
  headline: "Der Vergleich auf einen Blick",
  gebiet: "Gebiet",
  tage: "Tage voraus",
  fussnote: "Gebiet: CH = Schweiz, EU = Europa, Welt = weltweit. „Nicht belegt“ heisst: auf den offiziellen Seiten nicht zu finden.",
  aufklappen: "Was genau steckt hinter jedem Punkt?",
  caption: "Vergleich der Gleitschirm-Wetter-Apps nach Gebiet, Prognosetagen und Funktionen",
  merkmal: "Merkmal",
  wofuer: "Welche App passt zu welcher Frage?",
  nichtBelegt: "Nein oder nicht belegt:",
};
const ui = (lang: Lang) => (lang === "de" ? DE_UI : VI18N[lang].ui);
const labelOf = (lang: Lang, i: number) => (lang === "de" ? MERKMAL_LABELS[i] : VI18N[lang].labels[i]);
const textOf = (lang: Lang, i: number) => (lang === "de" ? MERKMAL_TEXT[i] : VI18N[lang].texts[i]);
const wortOf = (lang: Lang, st: Status) => (lang === "de" ? WORT[st] : VI18N[lang].status[st]);
const detailOf = (app: App, i: number, lang: Lang) =>
  lang === "de" ? app.merkmale[i].detail : VI18N[lang].details[app.name]?.[i] ?? "";
const groupOf = (lang: Lang, titel: string) => (lang === "de" ? titel : VI18N[lang].groups[titel]);
const gebietOf = (lang: Lang, code: string) => (lang === "de" ? code : VI18N[lang].gebiet[code]);

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
  "Eine Bewertung je Startplatz, die mehrere Faktoren aufnimmt: Warnampel und Flugqualität.",
  "Jeden Morgen eine Mail, die die Lage in Worten erklärt.",
];

/** Karte je Merkmal: wer es hat (ja), wer teilweise, wer nicht oder unbelegt. */
function MerkmalKarte({ index, lang }: { index: number; lang: Lang }) {
  const label = labelOf(lang, index);
  const mit = (st: Status) =>
    APPS.map((a) => ({ app: a, m: a.merkmale[index] })).filter((x) => x.m.status === st);
  const ja = mit("ja");
  const teils = mit("teils");
  const rest = [...mit("nein"), ...mit("unbelegt")].map((x) => x.app.name);

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5">
      <h4 className="text-base font-bold text-slate-900">{label}</h4>
      <p className="mt-1 text-sm leading-snug text-slate-600">{textOf(lang, index)}</p>
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
                {wortOf(lang, m.status)}
                {detailOf(app, index, lang) ? `, ${detailOf(app, index, lang)}` : ""}
              </span>
            </span>
          </li>
        ))}
      </ul>
      {rest.length > 0 && (
        <p className="mt-4 border-t border-slate-100 pt-3 text-xs leading-snug text-slate-500">
          <span className="mr-1.5 inline-block align-middle"><Punkt status="unbelegt" /></span>
          {ui(lang).nichtBelegt} {rest.join(", ")}
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

function PunktZelle({ app, status, detail, lang }: { app: App; status: Status; detail: string; lang: Lang }) {
  const text = `${app.name}: ${wortOf(lang, status)}${detail ? `, ${detail}` : ""}`;
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

export function AppVergleich({ lang = "de" }: { lang?: Lang }) {
  return (
    <section aria-labelledby="vergleich-headline" className="my-12">
      <h2 id="vergleich-headline" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {ui(lang).headline}
      </h2>
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-700">
        <span className="inline-flex items-center gap-2"><Punkt status="ja" />{wortOf(lang, "ja")}</span>
        <span className="inline-flex items-center gap-2"><Punkt status="teils" />{wortOf(lang, "teils")}</span>
        <span className="inline-flex items-center gap-2"><Punkt status="nein" />{wortOf(lang, "nein")}</span>
        <span className="inline-flex items-center gap-2"><Punkt status="unbelegt" />{wortOf(lang, "unbelegt")}</span>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-3 pb-2 sm:px-5">
        <table className="w-full table-fixed border-separate border-spacing-0">
          <caption className="sr-only">{ui(lang).caption}</caption>
          <colgroup>
            <col className="w-[38%] sm:w-[34%]" />
            {APPS.map((a) => (
              <col key={a.name} />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th scope="col" className="sr-only">{ui(lang).merkmal}</th>
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
              <ZeilenKopf>{ui(lang).gebiet}</ZeilenKopf>
              {APPS.map((a) => (
                <Zelle key={a.name} app={a}>
                  <span className="text-xs font-semibold text-slate-700">{gebietOf(lang, KOPF[a.name].gebiet)}</span>
                </Zelle>
              ))}
            </tr>
            <tr>
              <ZeilenKopf>{ui(lang).tage}</ZeilenKopf>
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
                    {groupOf(lang, g.titel)}
                  </th>
                </tr>
                {g.indizes.map((i) => (
                  <tr key={labelOf(lang, i)}>
                    <ZeilenKopf>{labelOf(lang, i)}</ZeilenKopf>
                    {APPS.map((a) => (
                      <PunktZelle key={a.name} app={a} status={a.merkmale[i].status} detail={detailOf(a, i, lang)} lang={lang} />
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        {ui(lang).fussnote}
      </p>

      <details className="group mt-6 rounded-2xl border border-slate-200 bg-white">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
          {ui(lang).aufklappen}
          <span aria-hidden="true" className="text-sky-700 transition-transform group-open:rotate-45">+</span>
        </summary>
        <div className="grid items-start gap-4 border-t border-slate-100 p-4 sm:grid-cols-2 sm:p-5">
          {GRUPPEN.flatMap((g) => g.indizes).map((i) => (
            <MerkmalKarte key={i} index={i} lang={lang} />
          ))}
        </div>
      </details>

    </section>
  );
}

/** „Welche App wofür?" als eigener Block, eingesetzt vor den häufigen Fragen. */
export function AppWofuer({ lang = "de" }: { lang?: Lang }) {
  return (
    <section aria-labelledby="wofuer-headline" className="my-12">
      <h2 id="wofuer-headline" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {ui(lang).wofuer}
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {WOFUER.map((w, wi) => (
          <div key={w.frage} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">{lang === "de" ? w.frage : VI18N[lang].wofuer[wi]}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {w.apps.map((x) => (
                <li key={x} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
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
