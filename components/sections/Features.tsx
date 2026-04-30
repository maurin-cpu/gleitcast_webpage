import { Languages, Shield, Layers, Wind } from "../ui/Icons";

const features = [
  {
    icon: Languages,
    title: "Klartext statt Wetter-Jargon",
    body: '„Föhn aus Süd, 50 km/h auf 3000 m" — verständlich, auch ohne Meteo-Studium.',
    color: "text-flyViolet",
    bg: "bg-flyViolet/10",
  },
  {
    icon: Shield,
    title: "Sicherheit zuerst, dann Fliegbarkeit",
    body: "Wir trennen klar: erst Gefahrenlage prüfen, dann Thermik-Qualität bewerten.",
    color: "text-flyGreen",
    bg: "bg-flyGreen/10",
  },
  {
    icon: Wind,
    title: "Föhn & Talwinde automatisch",
    body: "Alpine Phänomene, die Standard-Wetter-Apps nicht abdecken — speziell für die Schweiz.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Layers,
    title: "Confidence + Datenquellen",
    body: "Pro Empfehlung siehst du, wie sicher die KI ist und auf welchen Modellen sie basiert.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="bg-background py-24 sm:py-32"
      aria-labelledby="features-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Für dich gemacht
          </p>
          <h2
            id="features-headline"
            className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          >
            Vier Dinge, die wir anders machen.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${f.bg} ${f.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
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
