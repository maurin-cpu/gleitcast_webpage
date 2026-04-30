export type FAQItem = {
  q: string;
  a: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "Was kostet das Briefing?",
    a: "Nichts. Aktuell ist Gleitcast komplett gratis — wir wollen erst herausfinden, ob das Produkt wirklich hilft. Falls später ein Bezahltarif kommt, behalten alle Early Subscribers Sonderkonditionen.",
  },
  {
    q: "Kann ich der KI vertrauen?",
    a: "Wir zeigen zu jeder Empfehlung einen Confidence-Score und nennen die Datenquellen (MeteoSchweiz, ICON-CH1, ECMWF). Die finale Entscheidung am Startplatz triffst immer du — Gleitcast ist Decision Support, nicht Decision Maker.",
  },
  {
    q: "Wie unterscheidet ihr euch von Burnair oder Windy?",
    a: "Burnair und Windy zeigen dir die Daten — du musst sie selbst interpretieren. Gleitcast gibt dir eine konkrete Empfehlung pro Spot, in Klartext, mit Begründung. Aus 5 Apps wird eine E-Mail.",
  },
  {
    q: "Funktioniert das auf meinem iPhone?",
    a: "Ja. Die E-Mail ist mit allen Mail-Clients kompatibel. Apple Mail und Gmail unterstützen die interaktiven Wochentag-Tabs vollständig. Outlook Desktop zeigt alle Tage gestapelt — funktioniert auch.",
  },
  {
    q: "Wie aktuell sind die Daten?",
    a: "Wetterdaten werden 4× täglich aktualisiert. Die KI-Analyse läuft Sonntagnacht für die kommende Woche. Wenn du jederzeit live nachschauen willst, kannst du direkt in die App springen.",
  },
  {
    q: "Wer steckt hinter Gleitcast?",
    a: "Ein Schweizer Pilot, der sich über 45 Minuten Wetter-Check jeden Samstag genug geärgert hat. Gleitcast ist aktuell ein Side-Projekt mit dem Ziel, das beste Flugwetter-Tool der Alpen zu bauen — gemeinsam mit der Community.",
  },
  {
    q: "Was passiert mit meinen Daten?",
    a: "Wir speichern nur deine E-Mail und die gewählten Regionen. Kein Tracking, keine Drittanbieter-Cookies, keine Weitergabe. Abmeldung jederzeit mit einem Klick.",
  },
];
