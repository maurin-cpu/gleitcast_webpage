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
  // Navbar- und Footer-Link auf diese Seite (nur DE/EN, darum nicht in messages/*.json).
  navLabel: string;
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
  // Abgeschwächte Fassung (24.10.): Hinweis oben, Überschrift über den Zahlen.
  noticeTitle: string;
  notice: string;
  modelValues: string;
  dateLocale: string;
};

export const STRINGS: Record<BriefingLocale, Strings> = {
  de: {
    navLabel: "Flugwetter heute",
    metaTitle: "Flugwetter Schweiz heute: Thermik und Wind aus den Wettermodellen",
    metaDescription:
      "Was die Wettermodelle für die Schweiz rechnen: Wetterlage, Wolkenbasis, Steigen und Höhenwind für drei Tage. Automatisch erzeugt, jeden Morgen um 6 Uhr neu.",
    ogAlt: "Wingcast-Briefing für die Schweiz",
    h1: "Flugwetter Schweiz heute",
    intro: "Was die Wettermodelle heute und in den nächsten zwei Tagen für die Schweiz rechnen. Automatisch erzeugt, jeden Morgen um 6 Uhr neu.",
    updated: "Stand",
    updatedEveryMorning: "jeden Morgen neu",
    today: "Heute",
    tomorrow: "Morgen",
    dayAfter: "Übermorgen",
    kicker: "Thermikprognose Schweiz",
    readFull: "Modellwerte für drei Tage",
    base: "Basis",
    climb: "Steigen",
    upperWind: "Höhenwind",
    pressure: "Druck",
    days: "Tage",
    unavailable:
      "Das Briefing von heute ist gerade nicht verfügbar. In der App siehst du die Prognose für jeden Startplatz.",
    ctaTitle: "Mehr Details für deinen Startplatz",
    ctaText: "Hier siehst du die Werte für die ganze Schweiz. In der App bekommst du sie für jeden Startplatz einzeln, Stunde für Stunde: Wind am Start und in der Höhe, Thermik und Wolkenbasis. Gratis, ohne Kreditkarte.",
    ctaButton: "Details in der App ansehen",
    disclaimer:
      "Automatisch erzeugte Prognose aus Wettermodellen, ohne Gewähr. Keine Flugwetterberatung, keine Warnung, keine Flugempfehlung. Ob und wo du fliegst, entscheidest du allein.",
    noticeTitle: "Keine Flugwetterberatung",
    notice:
      "Diese Seite zeigt automatisch erzeugte Modellwerte für die ganze Schweiz. Sie bewertet keine Startplätze, warnt nicht und empfiehlt keinen Flug. Modelle liegen oft daneben, besonders bei Wind und Föhn. Für deine Entscheidung zählen die Prognosen von MeteoSchweiz, die aktuellen Messwerte und deine Beurteilung vor Ort.",
    modelValues: "Modellwerte Schweiz",
    dateLocale: "de-CH",
  },
  en: {
    navLabel: "Flying weather today",
    metaTitle: "Flying weather Switzerland today: thermals and wind from the weather models",
    metaDescription:
      "What the weather models compute for Switzerland: weather situation, cloud base, climb and upper wind for three days. Generated automatically, fresh every morning at 6.",
    ogAlt: "Wingcast briefing for Switzerland",
    h1: "Flying weather Switzerland today",
    intro: "What the weather models compute for Switzerland today and the next two days. Generated automatically, fresh every morning at 6.",
    updated: "Updated",
    updatedEveryMorning: "fresh every morning",
    today: "Today",
    tomorrow: "Tomorrow",
    dayAfter: "Day after tomorrow",
    kicker: "Thermal forecast Switzerland",
    readFull: "Model values for three days",
    base: "Base",
    climb: "Climb",
    upperWind: "Upper wind",
    pressure: "Pressure",
    days: "Days",
    unavailable:
      "Today's briefing is not available right now. The app shows the forecast for every launch site.",
    ctaTitle: "More detail for your launch site",
    ctaText: "This page shows the values for all of Switzerland. The app gives them for each launch site, hour by hour: wind at launch and aloft, thermals and cloud base. Free, no credit card.",
    ctaButton: "See the details in the app",
    disclaimer:
      "Forecast generated automatically from weather models, without guarantee. Not a flight weather briefing, not a warning, not a recommendation to fly. Whether and where you fly is your decision alone.",
    noticeTitle: "Not a flight weather briefing",
    notice:
      "This page shows model values generated automatically for all of Switzerland. It does not rate launch sites, does not warn and does not recommend flying. Models are often wrong, especially for wind and foehn. For your decision, rely on the MeteoSwiss forecasts, current measurements and your own assessment on site.",
    modelValues: "Model values Switzerland",
    dateLocale: "en-GB",
  },
};
