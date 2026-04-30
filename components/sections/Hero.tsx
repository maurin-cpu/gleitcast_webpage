import { LinkButton } from "../ui/Button";
import { ArrowRight, ArrowUpRight, Sparkles } from "../ui/Icons";

const APP_URL = "https://app.gleitcast.ch";

export function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-slate-200 bg-sky-50"
      aria-labelledby="hero-headline"
    >
      <div className="mx-auto max-w-content px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pb-32 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-3 py-1 text-sm font-medium text-sky-700">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Beta · KI-Experiment für Schweizer Piloten
          </div>

          <h1
            id="hero-headline"
            className="text-balance text-[2.75rem] font-extrabold leading-[1.05] tracking-[-0.025em] text-slate-900 sm:text-6xl lg:text-7xl"
          >
            Welcher Spot fliegt diese Woche?
            <br />
            <span className="text-sky-700">Du siehst es auf einen Blick.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-reading text-pretty text-lg leading-[1.6] text-slate-700 sm:text-xl">
            5-Tage-Fliegbarkeits-Forecast für 488 Schweizer Startplätze — von
            ersten Flügen bis XC. Gratis, keine Kreditkarte, kein Abo.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <LinkButton
              href={APP_URL}
              target="_blank"
              rel="noopener"
              variant="primary"
              size="lg"
            >
              Spots ansehen
              <ArrowUpRight className="h-4 w-4" />
            </LinkButton>
            <a
              href="#preview"
              className="focus-ring inline-flex h-12 items-center gap-1.5 rounded-lg px-3 text-base font-semibold text-sky-700 transition-colors hover:text-sky-700/75"
            >
              Briefing ansehen
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mx-auto mt-8 max-w-2xl">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              So funktioniert's
            </p>
            <ol className="flex flex-col gap-2 text-sm sm:flex-row sm:items-stretch sm:justify-center">
              <li className="flex items-baseline gap-2 rounded-md bg-sky-100/70 px-3 py-2 text-left sm:flex-1">
                <span className="font-bold text-sky-700">1.</span>
                <span className="text-slate-700">
                  <strong className="font-semibold text-slate-900">
                    Heute kostenlos sehen
                  </strong>{" "}
                  — kein Login
                </span>
              </li>
              <li className="flex items-baseline gap-2 rounded-md bg-white px-3 py-2 text-left sm:flex-1">
                <span className="font-bold text-slate-500">2.</span>
                <span className="text-slate-700">
                  <strong className="font-semibold text-slate-900">
                    5 Tage mit E-Mail
                  </strong>{" "}
                  — 1 Klick Magic-Link
                </span>
              </li>
              <li className="flex items-baseline gap-2 rounded-md bg-white px-3 py-2 text-left sm:flex-1">
                <span className="font-bold text-slate-500">3.</span>
                <span className="text-slate-700">
                  <strong className="font-semibold text-slate-900">
                    Briefing wenn's passt
                  </strong>{" "}
                  — Wochentage frei wählbar
                </span>
              </li>
            </ol>
          </div>
        </div>

        <figure className="mx-auto mt-20 max-w-5xl sm:mt-24 lg:mt-28">
          <div className="overflow-hidden rounded-card border border-slate-200 bg-white">
            <img
              src="/screenshot_app_dashboard.png"
              alt="Gleitcast App-Dashboard: Chat-Berater links, Karte mit allen 488 Schweizer Startplätzen rechts, gefärbt nach Bewertung"
              className="block h-auto w-full"
              width={2400}
              height={1400}
              loading="eager"
              decoding="async"
            />
          </div>
          <figcaption className="mt-4 text-center text-sm text-slate-700">
            Live in der App — 488 Startplätze, gefärbt nach Bewertung.
            <span className="mt-1 block text-xs text-slate-500">
              Beta — wird laufend mit{" "}
              <a
                href="#feedback"
                className="font-medium text-sky-700 underline-offset-2 hover:underline"
              >
                Pilot-Feedback
              </a>{" "}
              weiterentwickelt.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
