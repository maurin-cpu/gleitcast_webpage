import { useTranslations } from "next-intl";

export function Problem() {
  const t = useTranslations("Problem");
  const cards = t.raw("cards") as Array<{ topic: string; note: string }>;

  return (
    <section
      id="problem"
      className="border-b border-slate-200 bg-slate-900 py-16 text-white sm:py-24"
      aria-labelledby="problem-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
            {t("kicker")}
          </p>
          <h2
            id="problem-headline"
            className="text-balance text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
          >
            {t("headlineLine1")}
            <br />
            <span className="text-sky-300">{t("headlineLine2")}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-reading text-lg leading-[1.6] text-white/85">
            {t("intro")}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((p) => (
            <div
              key={p.topic}
              className="rounded-card border border-white/15 bg-white/5 p-4"
            >
              <div className="text-sm font-semibold uppercase tracking-wider text-sky-300">
                {t("cardLabel")}
              </div>
              <div className="mt-1 text-base font-semibold">{p.topic}</div>
              <div className="text-sm text-white/90">{p.note}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center text-base leading-[1.6] text-white/85">
          <p className="mb-4 text-lg font-semibold text-white">
            {t("conclusionLead")}
          </p>
          <p>{t("conclusionBody")}</p>
        </div>
      </div>
    </section>
  );
}
