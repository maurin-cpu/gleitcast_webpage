export function WhyFree() {
  return (
    <section
      id="warum-gleitcast"
      className="border-b border-slate-200 bg-white py-16 sm:py-24"
      aria-labelledby="whyfree-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-reading">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            Persönlich
          </p>
          <h2
            id="whyfree-headline"
            className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl"
          >
            Warum es Gleitcast gibt.
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-[1.6] text-slate-700">
            <p>
              Es ist ein Experiment. Ich teste, ob KI das morgendliche
              Spot-Briefing wirklich so vereinfachen kann, wie es sich für
              mich anfühlt — und dafür brauche ich echte Pilot:innen, die
              mitfliegen und ehrliches Feedback geben.
            </p>
            <p>
              Keine Investoren, kein Wachstumsdruck, keine Werbung, keine
              Daten-Weitergabe. Wetterdaten kommen via Open-Meteo (inkl.
              ICON-CH1 von MeteoSchweiz), der Rest ist gut investierte Zeit.
            </p>
            <p>
              Wie es weitergeht, hängt davon ab, ob das Experiment trägt —
              und ob Server- und Modellkosten finanzierbar bleiben. Was
              Gleitcast in einem Jahr ist, kann ich heute nicht versprechen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
