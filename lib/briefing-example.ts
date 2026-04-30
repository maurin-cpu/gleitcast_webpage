export type Rating = "violet" | "green" | "amber" | "bronze" | "red";

export type Spot = {
  name: string;
  region: string;
  rating: Rating;
  ratingLabel: string;
  score: number;
  window: string;
  safety: string;
  flyability: string;
  confidence: number;
};

export type DayBriefing = {
  weekday: string;
  date: string;
  rating: Rating;
  ratingLabel: string;
  star?: boolean;
  headline: string;
  spots: Spot[];
};

export const BRIEFING_EXAMPLE: DayBriefing[] = [
  {
    weekday: "Mo",
    date: "Montag",
    rating: "red",
    ratingLabel: "Nicht fliegbar",
    headline: "Föhn aus Süd, Wind 50 km/h auf 3000 m",
    spots: [
      {
        name: "Niesen",
        region: "Berner Oberland",
        rating: "red",
        ratingLabel: "Nicht fliegbar",
        score: 2.1,
        window: "—",
        safety: "Föhnsturm. Lee-Turbulenz an Nordhängen.",
        flyability: "Wind weit über Schirmlimit.",
        confidence: 94,
      },
    ],
  },
  {
    weekday: "Di",
    date: "Dienstag",
    rating: "bronze",
    ratingLabel: "Nur Abgleiter",
    headline: "Inversion bis Mittag, danach schwach",
    spots: [
      {
        name: "Stockhorn",
        region: "Berner Oberland",
        rating: "bronze",
        ratingLabel: "Nur Abgleiter",
        score: 4.4,
        window: "13:00 – 15:30",
        safety: "Stabil, keine Gefahren.",
        flyability: "Kaum Thermik. Sinkrate ~1.8 m/s.",
        confidence: 81,
      },
    ],
  },
  {
    weekday: "Mi",
    date: "Mittwoch",
    rating: "violet",
    ratingLabel: "Legendär",
    star: true,
    headline: "Stabile Luftmasse, starke Thermik bis 3200 m",
    spots: [
      {
        name: "Niesen",
        region: "Berner Oberland",
        rating: "violet",
        ratingLabel: "Legendär",
        score: 9.2,
        window: "10:30 – 16:00",
        safety: "Keine Gefahren. Stabile Luftmasse.",
        flyability: "Starke Thermik bis 3200 m, Peak 2.1 m/s.",
        confidence: 92,
      },
      {
        name: "Fiesch",
        region: "Wallis",
        rating: "violet",
        ratingLabel: "Legendär",
        score: 8.9,
        window: "11:00 – 17:30",
        safety: "Klassischer XC-Tag. Talwind moderat.",
        flyability: "Basis 3500 m, lange Konvergenz westwärts.",
        confidence: 88,
      },
      {
        name: "Pilatus",
        region: "Zentralschweiz",
        rating: "green",
        ratingLabel: "Fliegbar",
        score: 7.6,
        window: "11:30 – 15:00",
        safety: "Leicht erhöhte NW-Komponente am Nachmittag.",
        flyability: "Solide Thermik, gut für lokales Soaring.",
        confidence: 85,
      },
    ],
  },
  {
    weekday: "Do",
    date: "Donnerstag",
    rating: "green",
    ratingLabel: "Fliegbar",
    headline: "Klassischer Hobby-Tag mit moderater Thermik",
    spots: [
      {
        name: "Beatenberg",
        region: "Berner Oberland",
        rating: "green",
        ratingLabel: "Fliegbar",
        score: 7.1,
        window: "11:00 – 16:00",
        safety: "Keine Warnungen. Sichtbedingungen sehr gut.",
        flyability: "Thermik bis 2800 m, ideal für B-Schirm.",
        confidence: 87,
      },
      {
        name: "Fronalpstock",
        region: "Zentralschweiz",
        rating: "green",
        ratingLabel: "Fliegbar",
        score: 6.8,
        window: "12:00 – 15:30",
        safety: "Talwind ab 16 Uhr — frühzeitig landen.",
        flyability: "Zuverlässige Thermik, gut für Anfänger.",
        confidence: 84,
      },
    ],
  },
  {
    weekday: "Fr",
    date: "Freitag",
    rating: "amber",
    ratingLabel: "Eingeschränkt",
    headline: "Aufziehende Front am Nachmittag",
    spots: [
      {
        name: "Niederhorn",
        region: "Berner Oberland",
        rating: "amber",
        ratingLabel: "Eingeschränkt",
        score: 5.5,
        window: "10:00 – 13:30",
        safety: "Front ab 14 Uhr. Vorsicht bei Wolkenentwicklung.",
        flyability: "Frühes Fenster ok, kurz halten.",
        confidence: 76,
      },
    ],
  },
];
