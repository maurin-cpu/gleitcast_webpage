import { FAQ_ITEMS } from "@/lib/faq";
import { ChevronDown } from "../ui/Icons";

export function FAQ() {
  return (
    <section
      id="faq"
      className="bg-background py-24 sm:py-32"
      aria-labelledby="faq-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            FAQ
          </p>
          <h2
            id="faq-headline"
            className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          >
            Antworten auf die häufigsten Fragen.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <details
              key={item.q}
              className="group overflow-hidden rounded-2xl border border-border bg-white transition-all open:border-primary/30 open:shadow-md hover:border-primary/30"
            >
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left">
                <span className="flex items-baseline gap-3">
                  <span className="text-xs font-semibold tabular-nums text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium tracking-tight">{item.q}</span>
                </span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180 group-open:text-primary"
                  aria-hidden="true"
                />
              </summary>
              <div className="border-t border-border/50 bg-muted/20 px-5 py-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
