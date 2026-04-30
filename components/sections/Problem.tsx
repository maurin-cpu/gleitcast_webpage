export function Problem() {
  return (
    <section
      id="problem"
      className="relative bg-foreground py-24 text-background sm:py-32"
      aria-labelledby="problem-headline"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(2,132,199,0.18),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Kennst du das?
          </p>
          <h2
            id="problem-headline"
            className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Samstag, 6:30 Uhr.
            <br />
            45 Minuten später bist du{" "}
            <span className="text-accent">unsicherer als vorher</span>.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-background/70">
            Du checkst Windy. Dann MeteoBlue. Dann Burnair. Dann zwei Webcams.
            Die Modelle widersprechen sich. Du fährst trotzdem zum Startplatz —
            und der Wind ist zu stark.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { app: "Windy", note: "Wind & Modelle" },
            { app: "MeteoBlue", note: "Thermik-Index" },
            { app: "Burnair", note: "Startplätze" },
            { app: "Webcams", note: "Sicht vor Ort" },
          ].map((tool) => (
            <div
              key={tool.app}
              className="rounded-2xl border border-background/10 bg-background/5 p-4 backdrop-blur"
            >
              <div className="text-xs font-medium uppercase tracking-wider text-accent/80">
                Tool
              </div>
              <div className="mt-1 text-base font-semibold">{tool.app}</div>
              <div className="text-xs text-background/60">{tool.note}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-background/60">
          <span className="h-px w-12 bg-background/20" aria-hidden="true" />
          <span>Aus 5 Apps wird eine E-Mail.</span>
          <span className="h-px w-12 bg-background/20" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
