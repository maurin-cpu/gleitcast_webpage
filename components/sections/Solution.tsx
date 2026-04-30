import { Layers, Sparkles, MapPin, Mail } from "../ui/Icons";

const steps = [
  {
    n: "01",
    icon: Layers,
    title: "Wetterdaten werden eingelesen",
    body: "Modell-Aggregation via Open-Meteo (inkl. ICON-CH1 von MeteoSchweiz, ECMWF, ICON-D2) — die ganze Schweiz, mehrmals täglich aktualisiert und auf den Startplatz heruntergerechnet.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Sortierung nach Eignung",
    body: "Wind, Thermik, Sicherheit, Niederschlag — nach denselben Kriterien, die du selbst prüfen würdest. Sicherheit zuerst, dann Fliegbarkeit. Die KI macht die Vorauswahl, du entscheidest.",
  },
  {
    n: "03",
    icon: MapPin,
    title: "In der App aufgelistet",
    body: "Karte und Liste mit allen Spots der Woche — pro Tag sortiert, mit Score und Begründung in Klartext.",
  },
  {
    n: "04",
    icon: Mail,
    title: "Briefing per E-Mail",
    body: "Du wählst in der App, welche Regionen und welche Wochentage du willst — und bekommst die Einschätzungen zu deinen Spots morgens um 06:00 ins Postfach.",
  },
];

export function Solution() {
  return (
    <section
      id="solution"
      className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24"
      aria-labelledby="solution-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-reading text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            So funktioniert's
          </p>
          <h2
            id="solution-headline"
            className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl"
          >
            Von Wetterdaten zur Spot-Empfehlung.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-[1.6] text-slate-700">
            488 Schweizer Startplätze, jeden Tag automatisch sortiert nach
            Fliegbarkeit. Du siehst auf einen Blick, wo's heute geht.
          </p>
        </div>

        <figure className="mx-auto mt-12 max-w-4xl">
          <div className="overflow-hidden rounded-card border border-slate-200 bg-white">
            <img
              src="/screenshot_startplaetze.png"
              alt="Spots-Karte in der Gleitcast App: 488 Schweizer Startplätze, eingefärbt nach Fliegbarkeit für den gewählten Tag"
              className="block h-auto w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption className="mt-4 text-center text-sm text-slate-700">
            Spots-Karte live in der App — pro Tag automatisch eingefärbt nach
            Fliegbarkeit.
          </figcaption>
        </figure>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.n}
                className="rounded-card border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-sky-50 text-sky-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-base font-bold tabular-nums text-slate-500">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-base leading-[1.6] text-slate-700">
                  {s.body}
                </p>
              </li>
            );
          })}
        </ol>

        <aside className="mx-auto mt-10 max-w-3xl rounded-card border-l-4 border-sky-700 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            Beispiel — so liest sich eine Begründung
          </p>
          <p className="mt-3 text-base leading-[1.65] text-slate-700">
            <strong className="font-semibold text-slate-900">Niesen, heute gelb.</strong>{" "}
            Wind 18 km/h Süd passt zur Erfahrung — aber Lee-Risiko nach 14 Uhr
            wegen Südföhn-Tendenz. Sicherer Slot: 11–13:30 Uhr. Danach lieber
            abbauen.
          </p>
          <p className="mt-2 text-sm leading-[1.6] text-slate-500">
            Klartext statt CAPE und Lapse Rate — dieselbe Logik, die du selbst
            anwenden würdest, nur in 30 Sekunden statt 30 Minuten.
          </p>
        </aside>
      </div>
    </section>
  );
}
