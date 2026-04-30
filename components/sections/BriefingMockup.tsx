import { Star } from "../ui/Icons";

const ratingDot: Record<string, string> = {
  violet: "bg-flyViolet",
  green: "bg-flyGreen",
  amber: "bg-flyAmber",
  bronze: "bg-flyBronze",
  red: "bg-flyRed",
};

const days = [
  { weekday: "Mo", rating: "red" },
  { weekday: "Di", rating: "bronze" },
  { weekday: "Mi", rating: "violet", star: true },
  { weekday: "Do", rating: "green" },
  { weekday: "Fr", rating: "amber" },
] as const;

export function BriefingMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-accent/15 to-primary/20 blur-2xl"
        aria-hidden="true"
      />

      <div className="glass-card overflow-hidden rounded-3xl shadow-2xl shadow-primary/10">
        <div className="border-b border-border/60 bg-gradient-to-b from-white/60 to-white/30 px-6 py-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>gleitcast.ch · Wochen-Briefing</span>
            <span>KW 18</span>
          </div>
          <h3 className="mt-2 text-base font-semibold text-foreground">
            Deine Woche im Überblick
          </h3>
        </div>

        <div className="grid grid-cols-5 gap-1 bg-white/40 p-2">
          {days.map((d) => (
            <div
              key={d.weekday}
              className={`relative flex flex-col items-center gap-1 rounded-2xl py-3 text-xs font-medium ${
                d.rating === "violet"
                  ? "bg-flyViolet/10 text-flyViolet"
                  : "text-foreground/80"
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${ratingDot[d.rating]}`}
                aria-hidden="true"
              />
              {d.weekday}
              {"star" in d && d.star && (
                <Star
                  className="absolute right-1.5 top-1.5 h-2.5 w-2.5 text-flyViolet"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        <div className="space-y-3 bg-white/60 px-5 py-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-flyViolet">
              Mittwoch · Legendär
            </span>
            <span className="text-xs text-muted-foreground">Top des Wochens</span>
          </div>

          <div className="space-y-2.5">
            <SpotRow name="Niesen" rating="violet" score="9.2" window="10:30 – 16:00" />
            <SpotRow name="Fiesch" rating="violet" score="8.9" window="11:00 – 17:30" />
            <SpotRow name="Pilatus" rating="green" score="7.6" window="11:30 – 15:00" />
          </div>

          <div className="rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground">
            Stabile Luftmasse, starke Thermik bis 3200 m. Confidence 92%.
          </div>
        </div>
      </div>
    </div>
  );
}

function SpotRow({
  name,
  rating,
  score,
  window: w,
}: {
  name: string;
  rating: keyof typeof ratingDot;
  score: string;
  window: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border/60 bg-white/80 px-3 py-2.5 transition-colors hover:border-primary/30">
      <div className="flex items-center gap-3">
        <span
          className={`h-2 w-2 rounded-full ${ratingDot[rating]}`}
          aria-hidden="true"
        />
        <span className="text-sm font-medium text-foreground">{name}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs tabular-nums text-muted-foreground">{w}</span>
        <span className="rounded-full bg-foreground/5 px-2 py-0.5 text-xs font-semibold tabular-nums text-foreground">
          {score}
        </span>
      </div>
    </div>
  );
}
