import { MapPin, Mail, Paraglider } from "../ui/Icons";

const steps = [
  {
    n: "01",
    icon: MapPin,
    title: "Wähle deine Regionen",
    body: "Berner Oberland, Wallis, Tessin — wir kennen alle 488 Schweizer Startplätze.",
  },
  {
    n: "02",
    icon: Mail,
    title: "Bekomm Montag 06:00 dein Briefing",
    body: "5 Tage Vorschau. Pro Tag eine Ampelfarbe. Beste Spots automatisch sortiert.",
  },
  {
    n: "03",
    icon: Paraglider,
    title: "Entscheide und flieg",
    body: "Eine Frage — eine Antwort. Für volle Details springst du direkt in die App.",
  },
];

export function Solution() {
  return (
    <section
      id="solution"
      className="bg-background py-24 sm:py-32"
      aria-labelledby="solution-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            So funktioniert's
          </p>
          <h2
            id="solution-headline"
            className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          >
            In drei Schritten zu deinem Flugwetter.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <div
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/8 to-accent/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-semibold tabular-nums text-muted-foreground/60">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="pointer-events-none absolute right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-border md:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
