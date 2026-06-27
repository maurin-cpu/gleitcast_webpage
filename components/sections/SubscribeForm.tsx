import { useTranslations } from "next-intl";
import { ArrowUpRight } from "../ui/Icons";

const APP_URL = "https://app.wingcast.ch";

export function SubscribeForm() {
  const t = useTranslations("Subscribe");
  const onboarding = t.raw("steps") as Array<{
    t: string;
    title: string;
    body: string;
  }>;

  return (
    <section
      id="subscribe"
      className="border-b border-slate-200 bg-sky-50 py-20 sm:py-28"
      aria-labelledby="subscribe-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto] md:gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                {t("kicker")}
              </p>
              <h2
                id="subscribe-headline"
                className="mt-3 text-balance text-3xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-[2.75rem]"
              >
                {t("headline")}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-[1.6] text-slate-700">
                {t.rich("intro", {
                  b: (chunks) => (
                    <span className="font-semibold text-slate-900">
                      {chunks}
                    </span>
                  ),
                })}
              </p>
            </div>

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener"
              className="focus-ring inline-flex h-14 shrink-0 items-center gap-2 self-start rounded-lg bg-slate-900 px-8 text-base font-semibold text-white transition-[transform,background-color] duration-150 ease-out hover:bg-slate-900/90 active:scale-[0.97] md:self-end"
            >
              {t("cta")}
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>

          <ol className="mt-12 grid gap-x-8 gap-y-6 border-t border-slate-200 pt-10 sm:grid-cols-3">
            {onboarding.map((step, i) => (
              <li key={step.t} className="relative">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold tabular-nums text-sky-700">
                    {step.t}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {t("stepLabel", { n: i + 1 })}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-[1.6] text-slate-700">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
