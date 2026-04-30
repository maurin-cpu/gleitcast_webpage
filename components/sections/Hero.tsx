import { LinkButton } from "../ui/Button";
import { ArrowRight, ArrowUpRight, Sparkles } from "../ui/Icons";
import { BriefingMockup } from "./BriefingMockup";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.gleitcast.ch";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Aurora mesh background */}
      <div className="aurora-bg absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(2,132,199,0.22),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-content px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8 lg:pb-32 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-3 py-1 text-xs font-medium text-primary backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Beta · Wir bauen das gerade · Dein Feedback prägt das Produkt
            </div>

            <h1
              id="hero-headline"
              className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Verpasse keinen guten{" "}
              <span className="bg-gradient-to-br from-primary via-primary to-accent bg-clip-text text-transparent">
                Flugtag
              </span>{" "}
              mehr.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Jeden Montag eine E-Mail mit deinem Flugwetter für die Woche.
              KI-analysiert, in Klartext erklärt — auch wenn du erst seit kurzem
              fliegst.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <LinkButton
                href="#subscribe"
                variant="primary"
                size="lg"
                className="group w-full sm:w-auto"
              >
                Briefing kostenlos abonnieren
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </LinkButton>
              <LinkButton
                href={APP_URL}
                target="_blank"
                rel="noopener"
                variant="secondary"
                size="lg"
                className="group w-full sm:w-auto"
              >
                App jetzt öffnen
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </LinkButton>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-flyGreen"
                  aria-hidden="true"
                />
                MeteoSchweiz · ICON-CH1 · ECMWF
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                488 Schweizer Startplätze
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
                Kostenlos · keine Kreditkarte
              </span>
            </div>
          </div>

          <div className="relative animate-fade-in-up [animation-delay:120ms]">
            <BriefingMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
