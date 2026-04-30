import { FAQ_ITEMS } from "@/lib/faq";
import { ChevronDown } from "../ui/Icons";

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-b border-slate-200 bg-slate-50 py-16 sm:py-24"
      aria-labelledby="faq-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-reading text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            FAQ
          </p>
          <h2
            id="faq-headline"
            className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl"
          >
            Antworten auf die häufigsten Fragen.
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <details
              key={item.q}
              className="group overflow-hidden rounded-card border border-slate-200 bg-white open:border-sky-700"
            >
              <summary className="focus-ring flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left">
                <span className="flex items-baseline gap-3">
                  <span className="text-sm font-bold tabular-nums text-slate-500">
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
              <div className="border-t border-slate-200 bg-sky-50 px-5 py-4 text-base leading-[1.6] text-slate-700">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
