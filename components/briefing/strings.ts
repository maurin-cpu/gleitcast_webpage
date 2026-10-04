// Oberflächentexte des öffentlichen Briefings, nur DE und EN. Bewusst nicht in
// messages/*.json: check-i18n verlangt jeden Key in allen vier Sprachen, das
// Briefing gibt es aber nur in den Sprachen, die flychat erzeugt (Validator
// kennt DE/EN). FR/IT folgen, sobald der Server sie liefert.
export const BRIEFING_LOCALES = ["de", "en"] as const;
export type BriefingLocale = (typeof BRIEFING_LOCALES)[number];

export function isBriefingLocale(locale: string): locale is BriefingLocale {
  return (BRIEFING_LOCALES as readonly string[]).includes(locale);
}

type Strings = {
  metaTitle: string;
  metaDescription: string;
  ogAlt: string;
  h1: string;
  intro: string;
  updated: string;
  updatedEveryMorning: string;
  today: string;
  tomorrow: string;
  dayAfter: string;
  kicker: string;
  readFull: string;
  base: string;
  climb: string;
  upperWind: string;
  pressure: string;
  days: string;
  unavailable: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  disclaimer: string;
  dateLocale: string;
};

export const STRINGS: Record<BriefingLocale, Strings> = {
  de: {
    metaTitle: "Flugwetter Schweiz heute: Thermik, Wind und Warnungen für Gleitschirm",
    metaDescription:
      "Das Wingcast-Briefing für die ganze Schweiz: Lage, Warnungen, Höhenwind und Thermik für heute und die nächsten zwei Tage. Jeden Morgen um 6 Uhr neu.",
    ogAlt: "Wingcast-Briefing für die Schweiz",
    h1: "Flugwetter Schweiz heute",
    intro: "Thermik, Wind und Warnungen für Gleitschirmpiloten. Jeden Morgen um 6 Uhr neu gerechnet.",
    updated: "Stand",
    updatedEveryMorning: "jeden Morgen neu",
    today: "Heute",
    tomorrow: "Morgen",
    dayAfter: "Übermorgen",
    kicker: "Thermikprognose Schweiz",
    readFull: "Ganzes Briefing lesen",
    base: "Basis",
    climb: "Steigen",
    upperWind: "Höhenwind",
    pressure: "Druck",
    days: "Tage",
    unavailable:
      "Das Briefing von heute ist gerade nicht verfügbar. In der App siehst du die Prognose für jeden Startplatz.",
    ctaTitle: "Welcher Startplatz passt heute?",
    ctaText: "Die App rechnet dieselbe Analyse für jeden Startplatz, mit Fenster, Wind und Basis.",
    ctaButton: "Startplätze ansehen",
    disclaimer:
      "Prognose, keine Flugfreigabe. Wingcast ist Entscheidungshilfe. Die Bedingungen prüfst du vor Ort, und du entscheidest.",
    dateLocale: "de-CH",
  },
  en: {
    metaTitle: "Flying weather Switzerland today: thermals, wind and warnings",
    metaDescription:
      "The Wingcast briefing for all of Switzerland: situation, warnings, upper wind and thermals for today and the next two days. Fresh every morning at 6.",
    ogAlt: "Wingcast briefing for Switzerland",
    h1: "Flying weather Switzerland today",
    intro: "Thermals, wind and warnings for paraglider pilots. Recalculated every morning at 6.",
    updated: "Updated",
    updatedEveryMorning: "fresh every morning",
    today: "Today",
    tomorrow: "Tomorrow",
    dayAfter: "Day after tomorrow",
    kicker: "Thermal forecast Switzerland",
    readFull: "Read the full briefing",
    base: "Base",
    climb: "Climb",
    upperWind: "Upper wind",
    pressure: "Pressure",
    days: "Days",
    unavailable:
      "Today's briefing is not available right now. The app shows the forecast for every launch site.",
    ctaTitle: "Which launch site fits today?",
    ctaText: "The app runs the same analysis for every launch site, with window, wind and cloud base.",
    ctaButton: "View launch sites",
    disclaimer:
      "A forecast, not a flight clearance. Wingcast is decision support. You check the conditions on site and you decide.",
    dateLocale: "en-GB",
  },
};
