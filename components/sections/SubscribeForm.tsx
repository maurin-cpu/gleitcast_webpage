import { ArrowUpRight, Check } from "../ui/Icons";

const APP_URL = "https://app.gleitcast.ch";

export function SubscribeForm() {
  return (
    <section
      id="subscribe"
      className="border-b border-slate-200 bg-sky-50 py-16 sm:py-24"
      aria-labelledby="subscribe-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-reading text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            Loslegen
          </p>
          <h2
            id="subscribe-headline"
            className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl"
          >
            Loslegen — direkt in der App.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-[1.6] text-slate-700">
            Du wählst deine Regionen, bestätigst die E-Mail — und hast sofort
            Zugang zu Forecast und Briefing. Dauert keine Minute.
          </p>

          <ul className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-700">
            <li className="inline-flex items-center gap-2">
              <Check
                className="h-4 w-4 text-flyGreen"
                aria-hidden="true"
                strokeWidth={3}
              />
              Keine Kreditkarte
            </li>
            <li className="inline-flex items-center gap-2">
              <Check
                className="h-4 w-4 text-flyGreen"
                aria-hidden="true"
                strokeWidth={3}
              />
              Sofort einsetzbar
            </li>
            <li className="inline-flex items-center gap-2">
              <Check
                className="h-4 w-4 text-flyGreen"
                aria-hidden="true"
                strokeWidth={3}
              />
              Jederzeit kündbar
            </li>
          </ul>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener"
              className="focus-ring inline-flex h-14 items-center gap-2 rounded-lg bg-slate-900 px-8 text-base font-semibold text-white transition-colors hover:bg-slate-900/90"
            >
              Account erstellen
              <ArrowUpRight className="h-5 w-5" />
            </a>
            <a
              href="#preview"
              className="focus-ring inline-flex h-14 items-center gap-2 rounded-lg border-2 border-sky-700 bg-white px-6 text-base font-semibold text-sky-700 transition-colors hover:bg-sky-50"
            >
              Erst Briefing ansehen
            </a>
          </div>

          <p className="mt-6 text-center text-sm text-slate-700">
            Anmeldung läuft auf <span className="font-semibold">app.gleitcast.ch</span>.
            Wir speichern nur deine E-Mail und gewählte Regionen.
          </p>
        </div>
      </div>
    </section>
  );
}
