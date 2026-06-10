export type FAQItem = {
  q: string;
  a: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "Was ist Wingcast?",
    a: "Wingcast ist eine gratis KI-Flugwetter-App für Schweizer Gleitschirmpiloten. Sie aggregiert fünf Wettermodelle via Open-Meteo (ICON-CH1 mit 1 km Auflösung und ICON-CH2 mit 2 km von MeteoSchweiz, dazu ICON-D2, ICON-EU und GFS), rechnet daraus klassische Atmosphären-Physik (Thermikbasis, Inversionen, Föhn-Detektion, Gust-Decay) deterministisch im Code aus, und lässt erst dann die KI Sicherheit und Eignung pro Spot analysieren und bewerten. 488 Schweizer Startplätze werden pro Tag automatisch nach Fliegbarkeit sortiert, dazu kommt eine Begründung in Klartext — Wind, Thermik, Föhn-Lage, Lee-Risiken. Statt 45 Minuten durch Wettermodelle zu wühlen, siehst du in 30 Sekunden, wo es heute oder diese Woche fliegt — und warum. Anmeldung mit E-Mail und Magic-Link, keine Kreditkarte, kein Trial-Counter. Optional kommt ein E-Mail-Cast an frei wählbaren Wochentagen um 06:00 Uhr. Wingcast ist Decision Support für Pilot:innen, kein Decision Maker — die finale Entscheidung am Startplatz triffst du.",
  },
  {
    q: "Was kostet die Anmeldung?",
    a: "Aktuell nichts. Forecast für Regionen, Spot-Bewertung für jeden der 488 Startplätze und das Wochen-Briefing sind ohne Kreditkarte und ohne Trial-Counter zugänglich — du musst dich nur anmelden. Wenn sich am Modell etwas ändert, kommunizieren wir's offen, bevor wir umstellen.",
  },
  {
    q: "Was funktioniert in der Beta noch nicht?",
    a: "Ehrliche Antwort: einiges. Wingcast ist Beta — einzelne Startplätze fehlen noch im Datensatz, der hinterlegte Start-Winkel kann an manchen Spots nicht ganz stimmen, und vereinzelt gibt's Funktions-Bugs oder Aussetzer. Wir arbeiten laufend daran und priorisieren nach dem, was uns die Beta-Community meldet. Fehlt dir ein Spot, stimmt ein Winkel nicht, hakt eine Funktion? Schreib uns an info@wingcast.ch — kurzer Hinweis reicht, jede Meldung hilft.",
  },
  {
    q: "Was ist der Vorteil gegenüber meinen aktuellen Quellen?",
    a: "Wingcast ersetzt sie nicht — es macht dir die Vorauswahl. Statt 30 bis 45 Minuten Modelle und Webcams zu vergleichen, bekommst du in 30 Sekunden eine sortierte Liste der besten Spots für die kommenden 5 Tage. Die Feinabstimmung machst du wie gewohnt mit deinen vertrauten Tools.",
  },
  {
    q: "Was ist Föhn — und warum ist er für Gleitschirmflieger gefährlich?",
    a: "Föhn ist ein warmer, trockener Fallwind, der entsteht, wenn Luft über einen Gebirgskamm gezwungen wird, auf der Luvseite abregnet und auf der Leeseite aufgewärmt herabsinkt. Für Pilot:innen bedeutet Föhn: hohe Windgeschwindigkeiten in der Höhe, starke Turbulenz im Lee der Berge, schnelle Wetterwechsel. Wingcast erkennt Föhn-Lagen über den Druckgradient zwischen Zürich und Lugano, kombiniert mit Höhenwind bei 700 hPa und der Feuchte-Signatur — die gleichen Indikatoren, die MeteoSchweiz für ihre Föhn-Warnungen nutzt. Bei aktivem Föhn werden betroffene Spots automatisch zurückgestuft, mit Hinweis im Klartext. Mehr Hintergrund: meteoschweiz.admin.ch/wetter/wetterphaenomene/foehn.",
  },
  {
    q: "Lerne ich beim Gebrauch dazu?",
    a: "Ja. Jede Bewertung kommt mit Begründung in Klartext — zum Beispiel: Niesen heute Bedingt, weil Föhn-Tendenz ab 14 Uhr → Lee-Risiko, sicheres Slot 11–13:30 Uhr. Über die Wochen erkennst du die Muster selbst — wann Föhn kommt, wie Inversionen die Thermik bremsen, wo Lee zu erwarten ist. Wir wollen dein Wetter-Verständnis nicht ersetzen, sondern beschleunigen.",
  },
  {
    q: "Wie genau ist der Forecast — und was macht die KI eigentlich?",
    a: "Wir aggregieren via Open-Meteo fünf Wettermodelle: ICON-CH1 (1 km) und ICON-CH2 (2 km) von MeteoSchweiz für die Schweizer Topographie, dazu ICON-D2, ICON-EU und GFS für grossräumige Lagen und längere Horizonte. Auf diesen Daten laufen klassische Atmosphären-Berechnungen deterministisch im Code: Thermikbasis via Parcel-Methode mit Inversions-Erkennung und terrain-kalibrierten Zonen, Föhn-Detektion über Druckgradient Nord–Süd plus Höhenwind und Feuchte-Signatur, Gust-Decay übers Terrain, Cloud-Holes über Referenzpunkte. Erst auf dieser Datenlage analysiert und bewertet die KI Sicherheit und Eignung pro Spot — sie evaluiert die gerechnete Physik und schreibt die Begründung. Keine Magie, kein Hokuspokus. Bei unsicheren Bedingungen sind wir bewusst konservativ. Perfektion versprechen wir nicht.",
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
    q: "Wer steckt hinter Wingcast?",
    a: "Maurin, Pilot aus Zürich. Beim eigenen Spot-Check fand ich oft den Wald vor lauter Daten nicht — Windgramme, Modelle, Webcams, Talwinde. Wingcast ist mein Experiment: Kann KI helfen, diese Datenmengen so aufzubereiten, dass am Ende eine klare Entscheidungsgrundlage auf dem Tisch liegt? Genau das prüfe ich gerade — gemeinsam mit der Beta-Community.",
  },
  {
    q: "Was passiert mit meinen Daten?",
    a: "Wir speichern nur deine E-Mail und die gewählten Regionen. Kein Tracking, keine Drittanbieter-Cookies, keine Weitergabe. Abmeldung jederzeit mit einem Klick.",
  },
];
