export type FAQItem = {
  q: string;
  a: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "Was ist Gleitcast?",
    a: "Gleitcast ist eine gratis KI-Flugwetter-App für Schweizer Gleitschirmpiloten. Sie aggregiert mehrere Wettermodelle (ICON-CH1 mit 1 km Auflösung von MeteoSchweiz, ICON-D2, ECMWF) via Open-Meteo, sortiert 488 Schweizer Startplätze pro Tag automatisch nach Fliegbarkeit und liefert eine Begründung in Klartext — Wind, Thermik, Föhn-Lage, Lee-Risiken. Der Thermik-Forecast ist enthalten, ohne Aufpreis. Anmeldung mit E-Mail und Magic-Link, keine Kreditkarte, kein Trial-Counter. Optional kommt ein E-Mail-Briefing an frei wählbaren Wochentagen um 06:00 Uhr. Gleitcast ist Decision Support für Pilot:innen, kein Decision Maker — die finale Entscheidung am Startplatz triffst du.",
  },
  {
    q: "Was kostet die Anmeldung?",
    a: "Aktuell nichts. Forecast für Regionen, Spot-Bewertung für jeden der 488 Startplätze und das Wochen-Briefing sind ohne Kreditkarte und ohne Trial-Counter zugänglich — du musst dich nur anmelden. Wenn sich am Modell etwas ändert, kommunizieren wir's offen, bevor wir umstellen.",
  },
  {
    q: "Was funktioniert in der Beta noch nicht?",
    a: "Ehrliche Antwort: einiges. Gleitcast ist Beta — einzelne Startplätze fehlen noch im Datensatz, der hinterlegte Start-Winkel kann an manchen Spots nicht ganz stimmen, und vereinzelt gibt's Funktions-Bugs oder Aussetzer. Wir arbeiten laufend daran und priorisieren nach dem, was uns die Beta-Community meldet. Fehlt dir ein Spot, stimmt ein Winkel nicht, hakt eine Funktion? Schreib uns an info@gleitcast.ch — kurzer Hinweis reicht, jede Meldung hilft.",
  },
  {
    q: "Was ist der Vorteil gegenüber meinen aktuellen Quellen?",
    a: "Gleitcast ersetzt sie nicht — es macht dir die Vorauswahl. Statt 30 bis 45 Minuten Modelle und Webcams zu vergleichen, bekommst du in 30 Sekunden eine sortierte Liste der besten Spots für die kommenden 5 Tage. Die Feinabstimmung machst du wie gewohnt mit deinen vertrauten Tools.",
  },
  {
    q: "Wie genau ist der Forecast?",
    a: "Wir aggregieren via Open-Meteo mehrere Modelle — darunter ICON-CH1 (1 km Auflösung) von MeteoSchweiz, ICON-D2 und ECMWF. Du siehst pro Empfehlung, auf welchen Modellen sie basiert; bei unsicheren Bedingungen sind wir bewusst konservativ. Perfektion versprechen wir nicht.",
  },
  {
    q: "Was passiert nach der Anmeldung?",
    a: "Du wählst deine Regionen in der App, bestätigst die E-Mail und hast sofort Zugang zu Forecast und Karte. Wenn du das Briefing willst, legst du in der App fest, an welchen Wochentagen es kommen soll — die erste E-Mail folgt dann am nächsten gewählten Tag um 06:00.",
  },
  {
    q: "Funktioniert das auf meinem iPhone?",
    a: "Ja. Die App läuft direkt im Browser, das Briefing ist mit allen Mail-Clients kompatibel. Apple Mail und Gmail unterstützen die interaktiven Wochentag-Tabs vollständig.",
  },
  {
    q: "Wer steckt hinter Gleitcast?",
    a: "Maurin, Pilot aus Zürich. Beim eigenen Spot-Check fand ich oft den Wald vor lauter Daten nicht — Windgramme, Modelle, Webcams, Talwinde. Gleitcast ist mein Experiment: Kann KI helfen, diese Datenmengen so aufzubereiten, dass am Ende eine klare Entscheidungsgrundlage auf dem Tisch liegt? Genau das prüfe ich gerade — gemeinsam mit der Beta-Community.",
  },
  {
    q: "Was passiert mit meinen Daten?",
    a: "Wir speichern nur deine E-Mail und die gewählten Regionen. Kein Tracking, keine Drittanbieter-Cookies, keine Weitergabe. Abmeldung jederzeit mit einem Klick.",
  },
];
