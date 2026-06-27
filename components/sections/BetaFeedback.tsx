import { useTranslations } from "next-intl";
import { LinkButton } from "../ui/Button";
import { Mail } from "../ui/Icons";

const FEEDBACK_MAIL =
  "mailto:info@wingcast.ch?subject=Wingcast%20Beta%20%E2%80%94%20Feedback";

export function BetaFeedback() {
  const t = useTranslations("Feedback");
  const items = t.raw("items") as Array<{ tag: string; body: string }>;

  return (
    <section
      id="feedback"
      className="border-b border-slate-200 bg-white py-20 sm:py-24"
      aria-labelledby="feedback-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-card border border-slate-200 bg-slate-50 p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            {t("kicker")}
          </p>
          <h2
            id="feedback-headline"
            className="mt-3 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl"
          >
            {t("headline")}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.65] text-slate-700">
            {t("intro")}
          </p>

          <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-3">
            {items.map((it) => (
              <li key={it.tag} className="border-l-2 border-sky-700 pl-3">
                <p className="text-sm font-semibold text-slate-900">{it.tag}</p>
                <p className="mt-0.5 text-sm leading-[1.55] text-slate-700">
                  {it.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-start gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <LinkButton href={FEEDBACK_MAIL} variant="primary" size="md">
              <Mail className="h-4 w-4" />
              info@wingcast.ch
            </LinkButton>
            <p className="text-sm italic text-slate-500">{t("note")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
