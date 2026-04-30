import { Check } from "../ui/Icons";

const points = [
  {
    title: "Echte Datenquellen",
    body: "MeteoSchweiz, ICON-CH1 (1 km), ICON-D2, ECMWF, Open-Meteo — keine generischen Globalmodelle.",
  },
  {
    title: "488 Schweizer Startplätze",
    body: "Manuell kuratiert. Lokale Eigenheiten wie Talwinde und Lee-Turbulenz fließen in die Bewertung ein.",
  },
  {
    title: "Confidence-Level pro Empfehlung",
    body: 'Jede Aussage trägt einen Vertrauenswert. Bei unsicheren Bedingungen sind wir bewusst konservativ.',
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
      className="bg-gradient-to-b from-background to-muted/40 py-24 sm:py-32"
      aria-labelledby="trust-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Ehrlich gesagt
            </p>
            <h2
              id="trust-headline"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            >
              Vertrauen entsteht durch{" "}
              <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                Transparenz
              </span>
              , nicht durch Versprechen.
            </h2>

            <div className="mt-8 rounded-3xl border border-accent/20 bg-accent/5 p-6">
              <p className="text-[0.95rem] leading-relaxed text-foreground/90">
                <span className="font-semibold">Was wir können:</span> Wind,
                Sicherheit, Föhn — zuverlässig.{" "}
                <span className="font-semibold">Was wir nicht können:</span>{" "}
                Bei XC-Thermik-Distanzen geben wir das ehrlich zu und nennen
                dir Meteo-Parapente als Ergänzung.
              </p>
            </div>
          </div>

          <ul className="space-y-4">
            {points.map((p) => (
              <li
                key={p.title}
                className="flex gap-4 rounded-2xl border border-border bg-white p-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-flyGreen/15 text-flyGreen">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
