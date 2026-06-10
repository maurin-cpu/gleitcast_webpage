import { FAQ_ITEMS } from "@/lib/faq";
import { ChevronDown } from "../ui/Icons";

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-b border-slate-200 bg-slate-50 py-20 sm:py-28"
      aria-labelledby="faq-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div className="lg:pt-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              FAQ
            </p>
            <h2
              id="faq-headline"
              className="mt-3 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-[2.5rem]"
            >
              Was Pilot:innen oft fragen.
            </h2>
            <p className="mt-5 max-w-md text-base leading-[1.65] text-slate-700">
              Steht deine Frage nicht dabei? Schreib an{" "}
              <a
                href="mailto:info@wingcast.ch"
                className="font-medium text-sky-700 underline-offset-2 hover:underline"
              >
                info@wingcast.ch
              </a>{" "}
              — Antwort kommt von Maurin.
            </p>
          </div>

          <div className="space-y-2.5">
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={item.q}
                className="group overflow-hidden rounded-card border border-slate-200 bg-white open:border-sky-700"
              >
                <summary className="focus-ring flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-semibold tabular-nums text-slate-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-semibold tracking-tight text-slate-900">
                      {item.q}
                    </span>
                  </span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180 group-open:text-sky-700"
                    aria-hidden="true"
                  />
                </summary>
                <div className="border-t border-slate-200 px-5 py-4 text-[15px] leading-[1.65] text-slate-700">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
