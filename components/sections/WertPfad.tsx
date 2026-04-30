import { Eye, Mail, Bell } from "../ui/Icons";

const steps = [
  {
    n: "1",
    icon: Eye,
    label: "Heute schauen",
    body: 'Klick auf „Spots ansehen" und die Bewertungen für heute sind sofort sichtbar. Kein Login, keine E-Mail.',
  },
  {
    n: "2",
    icon: Mail,
    label: "Woche freischalten",
    body: "E-Mail eintragen, Magic-Link bestätigen — und du siehst alle 5 Tage. Kein Passwort, kein Trial-Counter.",
  },
  {
    n: "3",
    icon: Bell,
    label: "Briefing aktivieren",
    body: "In der App wählst du Regionen und Wochentage. Das Briefing landet 06:00 Uhr im Postfach — pausierbar jederzeit.",
  },
];

export function WertPfad() {
  return (
    <section
      id="wertpfad"
      className="border-b border-slate-200 bg-white py-16 sm:py-24"
      aria-labelledby="wertpfad-headline"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-reading text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            So legst du los
          </p>
          <h2
            id="wertpfad-headline"
            className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl"
          >
            Drei Schritte. Du entscheidest, wann du wechselst.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-[1.6] text-slate-700">
            Beim ersten Klick siehst du sofort etwas Nützliches. Mehr gibt's,
            sobald du es willst — nicht vorher.
          </p>
        </div>

        <ol className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.n}
                className="rounded-card border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white text-sky-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-base font-bold tabular-nums text-slate-500">
                    0{s.n}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                  {s.label}
                </h3>
                <p className="mt-2 text-base leading-[1.6] text-slate-700">
                  {s.body}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
