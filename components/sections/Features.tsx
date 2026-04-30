import { Languages, Shield, Layers, Wind } from "../ui/Icons";

const features = [
  {
    icon: Languages,
    title: "Spots sortiert, in Klartext",
    body: 'Pro Tag drei Empfehlungen mit „Warum" — Klartext statt CAPE und Lapse Rate.',
    color: "text-flyViolet",
  },
  {
    icon: Shield,
    title: "Sicherheit zuerst, dann Fliegbarkeit",
    body: "Erst Gefahrenlage (Föhn, Lee, Front), dann Fliegbarkeit insgesamt — Thermik, Wind und Basis als ein Bild.",
    color: "text-flyGreen",
  },
  {
    icon: Wind,
    title: "Schweizer Alpen-Phänomene",
    body: "Föhndurchbruch, Talwinde, Inversionen — eingepreist in die Bewertung jedes der 488 Startplätze.",
    color: "text-slate-900",
  },
  {
    icon: Layers,
    title: "Modell-Transparenz",
    body: "Du siehst pro Empfehlung, auf welchen Modellen sie basiert. Keine Black Box.",
    color: "text-sky-700",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24"
      aria-labelledby="features-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-reading text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            Für dich gemacht
          </p>
          <h2
            id="features-headline"
            className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl"
          >
            Vier Dinge, die dir den Spot-Check abnehmen.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="rounded-card border border-slate-200 bg-white p-6"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-sky-50 ${f.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-base leading-[1.6] text-slate-700">
                  {f.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
