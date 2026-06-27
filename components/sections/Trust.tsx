import Image from "next/image";

export function Trust() {
  return (
    <section
      id="trust"
      className="border-b border-slate-200 bg-white py-20 sm:py-28"
      aria-labelledby="trust-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[260px_1fr] md:gap-14">
          <Image
            src="/founder.png"
            alt="Maurin, Gründer von Wingcast"
            width={520}
            height={520}
            sizes="260px"
            className="mx-auto aspect-square w-full max-w-[260px] rounded-2xl border border-slate-200 object-cover md:mx-0"
          />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              Wer das baut
            </p>
            <h2
              id="trust-headline"
              className="mt-3 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-[2.5rem]"
            >
              Ein Pilot. Ein Daten-Problem. Ein Experiment.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-[1.7] text-slate-700">
              <p>
                Ich flieg selber. Und beim Spot-Check am Morgen hatte ich am
                Schluss oft mehr Daten als Antworten — Windgramme, Modelle,
                Webcams, Talwinde, Inversionen. Alles da, nur keine klare Ansage.
              </p>
              <p>
                Wingcast ist mein Versuch, das mit KI zu lösen. Kein
                Heilsversprechen, einfach ein Werkzeug, das hilft. Egal ob 15
                oder 400 Flüge: die KI macht dir aus den Rohdaten Klartext, statt
                dass du mit hPa-Werten allein dastehst.{" "}
                <span className="font-semibold text-slate-900">
                  Decision Support, kein Decision Maker.
                </span>{" "}
                Die Entscheidung am Startplatz triffst du.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-2 border-t border-slate-200 pt-6">
              <span className="font-serif text-[22px] italic text-slate-900">
                — Maurin
              </span>
              <a
                href="mailto:info@wingcast.ch"
                className="focus-ring inline-flex items-center gap-1.5 rounded text-sm text-sky-700 underline-offset-2 hover:underline"
              >
                info@wingcast.ch
              </a>
              <span className="text-sm text-slate-500">
                — schreib mir direkt, jede Mail wird gelesen.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
