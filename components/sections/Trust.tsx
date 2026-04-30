import { Check } from "../ui/Icons";

const points = [
  {
    title: "Echte Datenquellen",
    body: (
      <>
        Modell-Aggregation via{" "}
        <a
          href="https://open-meteo.com"
          target="_blank"
          rel="noopener"
          className="font-medium text-sky-700 underline-offset-2 hover:underline"
        >
          Open-Meteo
        </a>{" "}
        — inklusive ICON-CH1 (1 km) von{" "}
        <a
          href="https://www.meteoschweiz.admin.ch"
          target="_blank"
          rel="noopener"
          className="font-medium text-sky-700 underline-offset-2 hover:underline"
        >
          MeteoSchweiz
        </a>
        , ICON-D2 und{" "}
        <a
          href="https://www.ecmwf.int"
          target="_blank"
          rel="noopener"
          className="font-medium text-sky-700 underline-offset-2 hover:underline"
        >
          ECMWF
        </a>
        . Keine generischen Globalmodelle.
      </>
    ),
  },
  {
    title: "Decision Support, nicht Decision Maker",
    body: "Die finale Entscheidung am Startplatz triffst du. Wir geben dir den besten Startpunkt für dein Urteil.",
  },
];

export function Trust() {
  return (
    <section
      id="trust"
      className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24"
      aria-labelledby="trust-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-reading text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            Ehrlich gesagt
          </p>
          <h2
            id="trust-headline"
            className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl"
          >
            Vertrauen entsteht durch Transparenz, nicht durch Versprechen.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-[1.6] text-slate-700">
            Gleitcast ist nicht perfekt. Die App filtert die
            fliegbaren Spots heraus und liefert eine fundierte Empfehlung — die
            Feinabstimmung machst du wie immer mit deinen vertrauten Quellen.
            Was wir nicht ersetzen: deinen Blick auf den Windsack am
            Startplatz.
          </p>
        </div>
        <article className="mx-auto mt-12 grid max-w-4xl gap-6 rounded-card border border-slate-200 bg-white p-6 sm:p-8 md:grid-cols-[auto_1fr] md:gap-8">
          {/* TODO: Foto-Platzhalter durch /founder.jpg ersetzen, sobald vorhanden */}
          <div
            className="mx-auto flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-sky-100 text-5xl font-bold text-slate-900 sm:h-32 sm:w-32 sm:text-6xl md:mx-0"
            aria-label="Foto-Platzhalter — Maurin"
          >
            M
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              Wer baut das?
            </p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
              Maurin · Pilot · Zürich
            </h3>
            <p className="mt-3 text-base leading-[1.6] text-slate-700">
              Beim Briefing am Morgen fand ich oft den Wald vor lauter Daten
              nicht — Windgramme, Modelle, Webcams, Talwinde, Inversionen.
              Zu viele Quellen, zu wenig klare Antwort.
            </p>
            <p className="mt-3 text-base leading-[1.6] text-slate-700">
              Gleitcast ist mein <strong className="font-semibold text-slate-900">Experiment</strong>:
              Kann KI diese Datenmengen so aufbereiten, dass am Ende eine
              klare Entscheidungsgrundlage auf dem Tisch liegt? Genau das
              prüfe ich gerade — gemeinsam mit der Beta-Community.
            </p>
          </div>
        </article>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <li
              key={p.title}
              className="flex gap-4 rounded-card border border-slate-200 bg-white p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-flyGreen/40 bg-flyGreen/10 text-flyGreen">
                <Check className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-base leading-[1.6] text-slate-700">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
