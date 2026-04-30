export function Problem() {
  return (
    <section
      id="problem"
      className="border-b border-slate-200 bg-slate-900 py-16 text-white sm:py-24"
      aria-labelledby="problem-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
            Kennst du das?
          </p>
          <h2
            id="problem-headline"
            className="text-balance text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
          >
            Samstag, 6:30 Uhr.
            <br />
            <span className="text-sky-300">
              Wo soll's heute hingehen?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-reading text-lg leading-[1.6] text-white/85">
            Du checkst Windgramme, schaust dir Wetter-Modelle an, vergleichst
            Webcams. 45 Minuten später hast du viele Daten — aber noch keine
            klare Antwort, welcher Spot diese Woche der richtige ist.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { topic: "Wind", note: "Hangwind, Talwind, Höhenwind" },
            { topic: "Thermik", note: "Auslöse, Stärke, Basis" },
            { topic: "Sicherheit", note: "Föhn, Front, Lee" },
            { topic: "Spot-Wahl", note: "488 Startplätze, ein Tag" },
          ].map((p) => (
            <div
              key={p.topic}
              className="rounded-card border border-white/15 bg-white/5 p-4"
            >
              <div className="text-sm font-semibold uppercase tracking-wider text-sky-300">
                Zu prüfen
              </div>
              <div className="mt-1 text-base font-semibold">{p.topic}</div>
              <div className="text-sm text-white/90">{p.note}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center text-base leading-[1.6] text-white/85">
          Gleitcast filtert die Spots, die diese Woche überhaupt fliegbar sind
          — bewertet pro Tag und Startplatz, mit Begründung. Du nimmst die
          Empfehlung als Startpunkt, gleichst sie mit deinen Quellen ab und
          entscheidest selbst.
        </div>
      </div>
    </section>
  );
}
