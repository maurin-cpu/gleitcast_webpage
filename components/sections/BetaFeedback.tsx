import { LinkButton } from "../ui/Button";
import { Mail } from "../ui/Icons";

const FEEDBACK_MAIL =
  "mailto:info@gleitcast.ch?subject=Gleitcast%20Beta%20%E2%80%94%20Feedback";

export function BetaFeedback() {
  return (
    <section
      id="feedback"
      className="border-b border-slate-200 bg-white py-16 sm:py-24"
      aria-labelledby="feedback-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-card border border-sky-100 bg-sky-50 p-6 sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            Beta — bau mit uns weiter
          </p>
          <h2
            id="feedback-headline"
            className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl"
          >
            Dein Feedback formt das nächste Update.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-[1.6] text-slate-700">
            Gleitcast ist Beta und wird laufend weiterentwickelt. Manche
            Startplätze fehlen noch, der hinterlegte Start-Winkel kann
            stellenweise nicht stimmen, und vereinzelt gibt's Funktions-Bugs.
            Was du meldest, wird direkt umgesetzt.
          </p>
          <ul className="mt-5 space-y-2 text-base leading-[1.6] text-slate-700">
            <li>
              <strong className="font-semibold text-slate-900">Spot fehlt?</strong>{" "}
              Sag uns Name und Region.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Winkel stimmt nicht?</strong>{" "}
              Kurzer Hinweis reicht — wir korrigieren.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">
                Funktion hakt?
              </strong>{" "}
              Beschreib, was passiert ist — Screenshots helfen.
            </li>
          </ul>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <LinkButton href={FEEDBACK_MAIL} variant="primary" size="lg">
              <Mail className="h-4 w-4" />
              Feedback an info@gleitcast.ch
            </LinkButton>
            <span className="text-sm text-slate-700">
              Maurin liest jede Mail persönlich.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
