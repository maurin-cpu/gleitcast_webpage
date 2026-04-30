import { ArrowUpRight } from "../ui/Icons";

const APP_URL = "https://app.gleitcast.ch";

export function BriefingPreview() {
  return (
    <section
      id="preview"
      className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24"
      aria-labelledby="preview-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-reading text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            Das Briefing
          </p>
          <h2
            id="preview-headline"
            className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl"
          >
            5 Tage. Ein Blick. Klar geordnet.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-[1.6] text-slate-700">
            Wochen-Briefing in der App: Tag-Tabs, Top-Spots pro Tag, mit
            Score und Begründung — verständlich auch ohne Meteorologie-Studium.
            So sieht's heute schon aus.
          </p>
        </div>

        <figure className="mx-auto mt-12 max-w-xl">
          <div className="overflow-hidden rounded-card border border-slate-200 bg-white">
            <img
              src="/screenshot_briefing.png"
              alt="Wochen-Briefing in der App: Tag-Tabs für die kommenden 5 Tage und sortierte Top-Spots mit Bewertung"
              className="block h-auto w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption className="mt-4 text-center text-sm text-slate-700">
            Wochen-Briefing live in der App — sortiert, mit Score und
            Begründung pro Spot.
          </figcaption>
        </figure>

        <div className="mt-10 flex justify-center">
          <a
            href={`${APP_URL}/briefing`}
            target="_blank"
            rel="noopener"
            className="focus-ring inline-flex h-12 items-center gap-2 rounded-lg border-2 border-sky-700 bg-white px-5 text-base font-semibold text-sky-700 transition-colors hover:bg-sky-50"
          >
            Mein Briefing für diese Woche
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
