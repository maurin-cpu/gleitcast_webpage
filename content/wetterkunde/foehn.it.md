---
titel: "Favonio in parapendio: perché 4 hPa non bastano e cosa misurano 20 valli di favonio"
slug: foehn
ziel_url: /it/wetterkunde/foehn
ziel_keyword: "favonio parapendio"
neben_keywords:
  - "föhn parapendio"
  - "riconoscere il favonio"
  - "favonio pericolo parapendio"
  - "differenza di pressione favonio"
  - "regola dei 4 hpa favonio"
  - "cos'è il favonio"
typ: pillar
hub: /wetterkunde
sprache: it-CH
status: published
veroeffentlicht: 2026-10-11
autor: "Wingcast"
stand: 2026-10-11
meta_title: "Riconoscere il favonio in parapendio: 20 valli misurate"
meta_description: "Bastano 4 hPa per il favonio? Abbiamo analizzato l'indice del favonio in 20 valli svizzere su sei anni e verificato ICON-CH1/CH2 contro la misura."
schema:
  - Article
  - FAQPage
  - BreadcrumbList
  - VideoObject
video: /wetterkunde/foehn-querschnitt.it.mp4
uebersetzung_von: "foehn.md (2026-10-11)"
daten:
  - 2-ausfuehrung/wetterkunde/belege/foehn/2026-10-09_foehn_taeler.json
  - 2-ausfuehrung/wetterkunde/belege/foehn/2026-08-27_foehn_vorschau-daten.json
skripte:
  - 2-ausfuehrung/wetterkunde/belege/foehn/foehn_taeler.py
  - 2-ausfuehrung/wetterkunde/belege/foehn/foehn_auswertung.py
---

# Favonio in parapendio: perché 4 hPa non bastano e cosa misurano 20 valli di favonio

> **In breve:** Il favonio (föhn) è un vento di caduta caldo e secco sottovento alle Alpi. Per chi vola è pericoloso perché spesso soffia già sopra la valle mentre al decollo è ancora tutto calmo. Se in valle c'è un lago d'aria fredda, il favonio gli scorre sopra e può sfondare fino al suolo senza preavviso. Abbiamo analizzato l'indice del favonio di MeteoSvizzera in 20 valli di favonio dal 2020 al 2025. La regola empirica «da 4 hPa di differenza di pressione c'è favonio» non regge. Con una differenza da 4 a 6 hPa tra Lugano e Zurigo, ad Altdorf il favonio ha soffiato sul fondovalle solo nel **10 per cento** del tempo. La differenza di pressione dice quindi che una situazione di favonio è possibile, ma non se il favonio arriva nella tua valle. Nemmeno i modelli ICON-CH1 e ICON-CH2 lo mostrano in modo affidabile. Nel caso di favonio dell'agosto 2026 hanno azzeccato quasi sempre la direzione del vento, ma le raffiche erano in mediana quasi 8 km/h troppo basse. Nella previsione guarda quindi al vento dalla direzione del favonio e all'aria secca, anche se il vento sembra debole.

---

## Cos'è il favonio

Il favonio è un vento di caduta **caldo e soprattutto secco** sul versante sottovento di una catena montuosa. Nasce ovunque venti forti scavalcano una catena di montagne e raggiunge spesso la forza di tempesta [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html). Sul versante nord delle Alpi prende il nome dalla sua provenienza e si chiama **favonio da sud**. Sul versante sud si chiama **favonio da nord**. Con il favonio da sud la pressione a sud delle Alpi è più alta che a nord, e l'aria attraversa le Alpi verso nord. Con il favonio da nord è il contrario. Dove si trovano anticicloni e depressioni cambia da una situazione all'altra [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html).

### Come nasce il favonio: il viaggio dell'aria sopra la cresta

Il favonio si racconta meglio come il viaggio di una massa d'aria. Qui prendiamo l'esempio del favonio da sud:

1. **Sopravento:** l'aria viene sollevata sul versante sud delle Alpi. Se è umida, si formano nubi e piove. Da nord questa parete di nubi sulla cresta si vede come **muro del favonio** [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html).
2. **Cresta:** la corrente viene spinta sopra e attraverso i passi. Un'immagine efficace è la **teoria idraulica del favonio**: come l'acqua sopra una traversa, l'aria di favonio vicina al suolo scavalca la cresta e sottovento può frenare di nuovo con un salto idraulico [[2]](https://www.meteoschweiz.admin.ch/dam/jcr:d5bead26-9bd3-4b8b-a88c-6f08e4de8e3a/Steinacker_Foehn_Promet_32_1-2_de.pdf).
3. **Sottovento:** l'aria scende e intanto si riscalda. Le nubi si dissolvono e si apre la **finestra del favonio**, con aria molto limpida [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html).
4. **Onde:** dietro la cresta la corrente oscilla su e giù. Sulle creste delle onde si formano spesso nubi a forma di lente, le **nubi lenticolari** o «pesci del favonio» [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html).
5. **Rotori:** vicino al suolo, sotto le onde, l'aria si avvolge in rulli. Il servizio meteorologico tedesco (DWD) definisce questi **rotori** un fenomeno frequente delle onde sottovento. Le loro ascendenze e discendenze possono causare forti turbolenze ai parapendii [[3]](https://www.dwd.de/DE/fachnutzer/luftfahrt/download/produkte/runwaymap/04_gefahren_im_gebirge.pdf?__blob=publicationFile&v=4).

<figure class="fig-wide">
  <p class="fig-kicker">Video</p>
  <p class="fig-titel">Il viaggio dell'aria di favonio e cosa significa per il volo</p>
  <video src="/wetterkunde/foehn-querschnitt.it.mp4" poster="/wetterkunde/foehn-querschnitt-poster.it.jpg" autoplay muted loop playsinline preload="metadata" width="1280" height="720" aria-label="Sezione animata delle Alpi con favonio da sud. Prima parte: l'aria viene sollevata sul versante sud delle Alpi e scarica la pioggia, le nubi restano appese alla cresta come muro del favonio, uno strato stabile comprime la corrente, sottovento l'aria scende e si riscalda, oscilla in onde con pesci del favonio e sotto si avvolge in rotori fino vicino al suolo. Seconda parte: in valle c'è un lago d'aria fredda, sopra il quale scorre il favonio. Un parapendio decolla nella calma del lago d'aria fredda, al limite superiore viene preso dal wind shear, poi il favonio sfonda fino al suolo."></video>
  <figcaption>Il favonio da sud in sezione, passo per passo: prima il viaggio dell'aria dal sopravento fino ai rotori, poi lago d'aria fredda, wind shear e sfondamento visti da un pilota. Schematico, non in scala. È mostrato il caso classico con precipitazioni sopravento.</figcaption>
</figure>

### Perché il favonio non arriva in ogni valle

Una domanda centrale della ricerca sul favonio è sempre stata perché l'aria calda e leggera scenda in valle e lì scacci l'aria fredda e pesante [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html). Spesso non lo fa. Se in valle c'è un **lago d'aria fredda**, il favonio dapprima gli scorre sopra. La FSVL scrive: il favonio scorre dapprima sopra i laghi d'aria fredda e può sfondare all'improvviso [[7]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Entscheidungsstrategie_Meteo_V10.pdf).

Se e quanto spesso sfonda dipende dal terreno. Per le stazioni di favonio intralpine MeteoSvizzera ha trovato una correlazione di **meno 0,96** tra la frequenza del favonio e il dislivello rispetto al passo determinante. Più una stazione sta in basso rispetto al passo, più raramente il favonio la raggiunge [[8]](https://www.meteoswiss.admin.ch/dam/jcr:698b5cdf-92cf-491a-8d88-c844113aa8d6/Foehnklimatologie_Altdorf_die_lange_Reihe_1864-2008_und_ihre_Weiterfuehrung_Vergleich_mit_anderen_Stationen_de.pdf). Nei mesi con più favonio, aprile e maggio, Altdorf mostra un minimo di favonio al mattino e un massimo la sera [[8]](https://www.meteoswiss.admin.ch/dam/jcr:698b5cdf-92cf-491a-8d88-c844113aa8d6/Foehnklimatologie_Altdorf_die_lange_Reihe_1864-2008_und_ihre_Weiterfuehrung_Vergleich_mit_anderen_Stationen_de.pdf).

### Come MeteoSvizzera misura il favonio

L'**indice del favonio** viene calcolato ogni dieci minuti e ha tre livelli: 0 = nessun favonio, 1 = aria mista di favonio, 2 = favonio. Per il favonio da sud la condizione di base è il vento da sud sulla cresta principale delle Alpi, al Gütsch sopra Andermatt. Alla stazione di valle si aggiungono vento, raffiche, direzione, umidità e la temperatura potenziale confrontata con quella del Gütsch [[9]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehnindex.html), [[10]](https://www.meteoswiss.admin.ch/dam/jcr:3ed2aec8-0901-417a-acc3-8be11cce440a/Foehnindex_Arbeitsbericht_223_Automatisiertes_Verfahren_zur_Bestimmung_von_Foehn_in_Alpentaelern_de.pdf). Per il favonio da nord i criteri non sono pubblicati. **Nel metodo pubblicato la pressione atmosferica non compare.** Per questo con l'indice si può verificare in modo pulito quanto bene la differenza di pressione prevede il favonio.

---

## Perché il favonio è pericoloso per il parapendio

Per il volo, del favonio conta la corrente. Quattro cose lo rendono pericoloso, e nessuna si vede in modo affidabile dal decollo.

**Il vento è forte.** Nelle valli di favonio le tempeste di favonio non sono una rarità. Ad Altdorf le raffiche più violente raggiungono ogni anno da 100 a 140 km/h [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html). È molto più della velocità a cui vola un parapendio.

**Sottovento è turbolento.** Onde sottovento e rotori generano forti ascendenze e discendenze [[3]](https://www.dwd.de/DE/fachnutzer/luftfahrt/download/produkte/runwaymap/04_gefahren_im_gebirge.pdf?__blob=publicationFile&v=4). I rotori arrivano fin vicino al suolo, cioè proprio dove decolli e atterri.

**Al limite con l'aria fredda c'è wind shear.** Quando il favonio soffia sopra un lago d'aria fredda, due masse d'aria con direzione e velocità diverse stanno una sopra l'altra. Per queste isole d'aria fredda sottovento il DWD descrive un forte cesoiamento del vento (wind shear) [[3]](https://www.dwd.de/DE/fachnutzer/luftfahrt/download/produkte/runwaymap/04_gefahren_im_gebirge.pdf?__blob=publicationFile&v=4). Al decollo, dentro il lago d'aria fredda, è calmo. Sopra no.

**Lo sfondamento arriva senza preavviso.** Quando il favonio sfonda fino al suolo, in poco tempo il vento diventa tempestoso. La FSVL descrive una giornata d'esame alla Büelen (NW): meno di 4 hPa di sovrappressione da sud nella previsione, nessuna parola sul favonio nei bollettini testuali, eppure al decollo un «vento da sud/sud-est ostinato, leggermente a raffiche». Con segnali simili, nello stesso anno ci sono stati incidenti [[11]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Schwer_erkennbare_Foehnlagen.pdf).

Quello che senti al decollo, quindi, spesso non descrive l'aria in cui voli.

---

## Il caso: dal 26 al 28 agosto 2026

A fine agosto 2026 una situazione di favonio da sud interessava la Svizzera. La differenza di pressione misurata tra Lugano e Zurigo ha superato i 7 hPa la sera del 27 e ha raggiunto il massimo nella notte sul 28, con **9,1 hPa alle 01:00**. Al Gütsch, nella stessa notte, sono state misurate raffiche fino a **96 km/h**. Il pomeriggio del 28 la situazione si è girata, il 29 la sovrappressione stava sul versante nord.

<figure class="fig-wide">
  <p class="fig-kicker">Caso</p>
  <p class="fig-titel">Temperatura, vento e differenza di pressione</p>
  <img src="/wetterkunde/foehn-temperatur-druck.png" alt="Tre grafici a linee dal 26 al 29 agosto 2026: nelle ore di favonio Altdorf è fino a 7 gradi più caldo di Lugano. Nel pannello del vento, al Gütsch soffiano già il 26 raffiche da 50 a 64 km/h circa, ad Altdorf alle 2 di notte del 27 passano da 14 a 50 km/h, con un picco di 84 km/h nel pomeriggio, al Gütsch fino a 96 km/h. Le frecce indicano vento da sud-est durante il favonio. In basso la differenza di pressione Lugano meno Zurigo con un picco di 9,1 hPa." width="1344" height="1216" loading="lazy" decoding="async">
  <figcaption>Fonte: MeteoSvizzera OGD SwissMetNet, Altdorf, Lugano, Zurigo-Fluntern, Gütsch · valori orari dal 26 al 29.08.2026, raffica = raffica al secondo più forte dell'ora. Grafico in tedesco.</figcaption>
</figure>

Al Gütsch, sulla cresta alpina, già il pomeriggio del 26 agosto soffiavano raffiche da 45 a 64 km/h. Ad Altdorf restavano sotto i 20 km/h. Alle 2 di notte il favonio è arrivato giù: in un'ora le raffiche ad Altdorf sono passate da 14 a 50 km/h e il vento ha girato da sud-est. Il pomeriggio del 27 hanno raggiunto 84 km/h, al Gütsch nella notte sul 28 addirittura 96 km/h. Dopo il favonio, il pomeriggio del 28, il vento ad Altdorf ha girato da nord-ovest, con una singola raffica di 88 km/h.

### È arrivato secco

Sul versante sud delle Alpi, in dieci stazioni di misura da Lugano a San Bernardino, fino alla mezzanotte tra il 27 e il 28 agosto non è caduta praticamente **nessuna pioggia** (al massimo 0,2 mm). Solo dopo sono arrivati da 10 a 32 mm. I primi due giorni sono stati quindi di favonio secco. Il 28 agosto alle 04:00 ad Altdorf c'erano **29,5 °C con il 36 per cento di umidità**, a Lugano alla stessa ora 22,1 °C con l'89 per cento.

### Quando e dove è arrivato il favonio

Per l'analisi usiamo **20 punti di valle del favonio**: uno per ogni valle di favonio, posato su una stazione con indice del favonio ufficiale. Sono distribuiti tra versante nord, Vallese e versante sud delle Alpi. La tabella mostra le 14 valli del versante nord e del Vallese. Nelle sei stazioni di valle del versante sud non c'è stato favonio, come ci si aspetta con il favonio da sud.

| Valle (stazione, quota) | Ore di favonio 26.–29.08. | prima segnalazione di favonio | raffica più forte nel favonio |
|---|---|---|---|
| Reusstal (Altdorf, 438 m) | 26,8 h | 27.08. 01:50 | 84 km/h |
| Glarnerland oben (Elm, 958 m) | 26,3 h | 26.08. 23:50 | 63 km/h |
| St. Galler Rheintal (Vaduz, 457 m) | 24,7 h | 27.08. 12:00 | 82 km/h |
| Oberwallis (Visp, 639 m) | 21,8 h | 26.08. 17:10 | 72 km/h |
| Sarganserland (Bad Ragaz, 497 m) | 20,2 h | 27.08. 01:40 | 73 km/h |
| Davos (1'594 m) | 17,5 h | 27.08. 10:50 | 50 km/h |
| Glarnerland unten (Glarus, 517 m) | 16,5 h | 27.08. 14:30 | 55 km/h |
| Domleschg/Schams (Andeer, 987 m) | 13,7 h | 26.08. 13:30 | 60 km/h |
| Churer Rheintal (Chur, 556 m) | 12,3 h + 10,7 h aria mista | 27.08. 11:40 | 62 km/h |
| Unterwallis (Evionnaz, 482 m) | 11,7 h | 26.08. 22:50 | 57 km/h |
| Haslital (Meiringen, 589 m) | 8,5 h, solo di notte | 27.08. 19:20 | 86 km/h |
| Rheintal unten (Altenrhein, 398 m) | 2,7 h, solo di notte | 27.08. 23:30 | 75 km/h |
| Mittelwallis (Sion, 482 m) | 0,7 h | 27.08. 18:30 | 35 km/h |
| Chablais (Aigle, 381 m) | nessun favonio |  |  |

<figure class="fig-wide">
  <p class="fig-kicker">Caso</p>
  <p class="fig-titel">Quando e dove ha soffiato il favonio</p>
  <img src="/wetterkunde/foehn-zeitleiste.png" alt="Linea del tempo delle fasi di favonio in 14 stazioni di valle: Andeer e Visp dal pomeriggio e dalla sera del 26 agosto, le altre valli dal 27, Aigle senza favonio." width="1344" height="844" loading="lazy" decoding="async">
  <figcaption>Fonte: MeteoSvizzera OGD, indice del favonio wcc006s0 (livello 2), 14 stazioni di valle · dal 26 al 28.08.2026, ora locale. Grafico in tedesco.</figcaption>
</figure>

**Il favonio è arrivato prima nelle valli intralpine**: ad Andeer il pomeriggio del 26 e a Visp in prima serata, con al massimo 3,0 hPa di differenza di pressione nella finestra di volo. **Tra valli vicine c'era mezza giornata di scarto**: Bad Ragaz ha avuto favonio dalle 01:40 nella notte sul 27, Chur, a poco meno di venti chilometri, solo dalle 11:40. **Scendendo lungo la valle si indeboliva**: 24,7 ore a Vaduz e 2,7 ad Altenrhein sul lago di Costanza. Elm a 958 m ha avuto dieci ore di favonio in più di Glarus a 517 m.

### In alto tempesta, in basso calma

Il grafico mostra la raffica più forte nella notte sul 28 agosto tra le 01:00 e le 02:00, ogni volta su un fondovalle e sulla vetta più vicina:

<figure class="fig-wide">
  <p class="fig-kicker">Caso</p>
  <p class="fig-titel">Valle contro vetta</p>
  <img src="/wetterkunde/foehn-tal-gipfel.png" alt="Grafico a manubrio della raffica più forte tra l'1 e le 2 del 28 agosto: Interlaken 16 contro Jungfraujoch 72, Lucerna 16 contro Pilatus 49, Davos 12 contro Weissfluhjoch 61, Engelberg 45 contro Titlis 98, Altdorf 58 contro Gütsch 93 km/h." width="1344" height="720" loading="lazy" decoding="async">
  <figcaption>Fonte: MeteoSvizzera OGD SwissMetNet, picco di raffica fkl010z1 · 28.08.2026, dalle 01:00 alle 02:00. Grafico in tedesco.</figcaption>
</figure>

A Interlaken e a Lucerna al suolo non c'era quasi vento, sul Pilatus quasi 50 km/h. Alla quota dei decolli, a metà strada, non c'è nessuna stazione. Com'era lassù si può solo circoscrivere.

---

## Quanta differenza di pressione serve al favonio?

**Una soglia fissa non esiste.** Con una differenza di pressione da 4 a 6 hPa attraverso le Alpi, dal 2020 al 2025 in nessuna delle 20 valli di favonio il favonio ha soffiato sul fondovalle per più di un quarto del tempo. Ad Altdorf è successo nel 10 per cento del tempo, a Vaduz nel 6 e a Glarus nell'1 per cento. Anche da 10 hPa in su il favonio non è sicuro. Bad Ragaz e Altdorf hanno avuto favonio in circa nove misure su dieci, Andeer e Davos solo nella metà. Al contrario, ad Andeer il 39 per cento di tutte le ore di favonio è caduto in momenti con meno di 4 hPa, a Davos il 33 e a Visp il 30 per cento. La differenza di pressione mostra che una situazione di favonio è possibile. Se il favonio raggiunge il suolo nella tua valle, non lo mostra.

Un caso è un aneddoto. Per questo, per tutti i 20 punti di valle, abbiamo analizzato i valori ogni dieci minuti dal **2020 al 2025** e assegnato ogni misura a una classe di pressione. Fa stato la differenza di pressione misurata Lugano meno Zurigo, per le valli del favonio da nord il contrario. La tabella mostra in quale percentuale del tempo il favonio ha soffiato sul fondovalle (indice 2) e quale quota di tutte le ore di favonio si è verificata con meno di 4 hPa.

<figure class="fig-wide">
  <p class="fig-kicker">Statistica</p>
  <p class="fig-titel">Favonio per classe di pressione</p>
  <img src="/wetterkunde/foehn-druckklassen.png" alt="Grafico a linee dal 2020 al 2025: quota del tempo con favonio sul fondovalle per classe di pressione. Da 4 a 6 hPa Altdorf 9,9 per cento, da 10 hPa Bad Ragaz 92,7, Altdorf 87,9, Glarus 53,4, Andeer 49,5, Altenrhein 29,1 per cento." width="1344" height="774" loading="lazy" decoding="async">
  <figcaption>Fonte: MeteoSvizzera OGD, indice del favonio e pressione QFF Lugano, Zurigo-Fluntern · valori ogni dieci minuti dal 2020 al 2025. Grafico in tedesco.</figcaption>
</figure>

| Valle (stazione) | Versante | Ore di favonio all'anno | Favonio con 4–6 hPa | Favonio da 10 hPa | Ore di favonio sotto 4 hPa |
|---|---|---|---|---|---|
| Reusstal (Altdorf) | Nord, favonio da sud | 350 | 10 % | 88 % | 4 % |
| Sarganserland (Bad Ragaz) | Nord, favonio da sud | 478 | 19 % | 93 % | 8 % |
| Churer Rheintal (Chur) | Nord, favonio da sud | 341 | 14 % | 64 % | 17 % |
| St. Galler Rheintal (Vaduz) | Nord, favonio da sud | 282 | 6 % | 84 % | 4 % |
| Rheintal unten (Altenrhein) | Nord, favonio da sud | 61 | 0,4 % | 29 % | 3 % |
| Glarnerland oben (Elm) | Nord, favonio da sud | 360 | 16 % | 70 % | 10 % |
| Glarnerland unten (Glarus) | Nord, favonio da sud | 122 | 1 % | 53 % | 1 % |
| Haslital (Meiringen) | Nord, favonio da sud | 184 | 4 % | 65 % | 4 % |
| Domleschg/Schams (Andeer) | Nord, favonio da sud | 472 | 21 % | 50 % | 39 % |
| Davos | Nord, favonio da sud | 350 | 15 % | 49 % | 33 % |
| Oberwallis (Visp) | Vallese | 477 | 23 % | 55 % | 30 % |
| Mittelwallis (Sion) | Vallese | 61 | 2 % | 21 % | 9 % |
| Unterwallis (Evionnaz) | Vallese | 252 | 8 % | 71 % | 11 % |
| Chablais (Aigle) | Vallese | 71 | 0,1 % | 40 % | 2 % |
| Leventina (Piotta) | Sud, favonio da nord | 827 | 21 % | 48 % | 21 % |
| Valle di Blenio (Acquarossa) | Sud, favonio da nord | 619 | 9 % | 73 % | 4 % |
| Valle Maggia (Cevio) | Sud, favonio da nord | 393 | 5 % | 54 % | 2 % |
| Piano di Magadino (Magadino) | Sud, favonio da nord | 355 | 4 % | 54 % | 1 % |
| Bassa Mesolcina (Grono) | Sud, favonio da nord | 228 | 3 % | 36 % | 2 % |
| Alta Mesolcina (San Bernardino) | Sud, favonio da nord | 382 | 9 % | 13 % | 39 % |

### Cosa dice la tabella

**Tra 4 e 6 hPa il favonio sul fondovalle è l'eccezione.** In nessuna delle 20 valli il favonio ha soffiato in questa classe per più di un quarto del tempo. Ad Altdorf era il 10 per cento, a Vaduz il 6, a Glarus l'1.

**Anche con 10 hPa e più il favonio non è sicuro.** Con differenze così grandi Bad Ragaz e Altdorf hanno avuto favonio in circa nove misure su dieci, Andeer e Davos solo nella metà, Altenrhein in meno di un terzo.

**Nelle valli intralpine il favonio arriva anche senza 4 hPa.** Ad Andeer il 39 per cento di tutte le ore di favonio è caduto in momenti con meno di 4 hPa, a Davos il 33, a Visp il 30. Per il Vallese l'asse Lugano e Zurigo è comunque quello sbagliato: lì il favonio soffia da sud-est.

**Tra valli vicine la differenza è enorme.** Bad Ragaz ha otto volte il favonio di Altenrhein, Elm tre volte quello di Glarus, Visp otto volte quello di Sion.

La misura conferma così quello che gli istruttori scrivono da anni. Il DHV indica da tre a quattro ettopascal come regola empirica abituale e nello stesso articolo descrive una giornata di favonio con poco più di due ettopascal [[12]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/F%C3%B6hn/1_2023_240_Misstraut_den_Foehndiagrammen.pdf). Un altro articolo del DHV mette in guardia dai «valori limite locali fatti in casa» [[13]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/F%C3%B6hn/4_2017_204_foehn_ist_nicht_gleich_foehn.pdf). La FSVL cita zone come Marbach (LU), dove si vola con ben più di 4 hPa senza che il favonio sfondi [[11]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Schwer_erkennbare_Foehnlagen.pdf). In nessuna delle pagine di MeteoSvizzera che abbiamo verificato compare una soglia di 4 hPa.

Il numero però non è inutile. Da 4 hPa una situazione di favonio diventa possibile, da 8 hPa il favonio è frequente nelle grandi valli di favonio. Ma non dice **se il favonio raggiunge il suolo nella tua valle, e quando**.

---

## E cosa mostravano i modelli di previsione?

**I modelli mostrano bene la direzione del vento, ma il vento troppo debole.** Nel caso di favonio dal 26 al 28 agosto 2026, ICON-CH1 e ICON-CH2 hanno mostrato in 13 stazioni di valle vento dalla direzione giusta nel 92-96 per cento delle ore di favonio. Le raffiche erano in mediana quasi 8 km/h sotto la misura. L'aria era circa 8 punti percentuali troppo umida e quasi 1,5 gradi troppo fresca. Se si chiedono insieme direzione del favonio, vento forte e aria secca, ICON-CH1 ha riconosciuto 69 ore di favonio su 100 e ICON-CH2 65, i valori misurati della stazione 90. Se si leggono solo direzione e aria secca, si riconoscono da 84 a 85 ore di favonio su 100. In cambio, in quasi un'ora su due segnalata così il favonio non è arrivato fino al fondovalle.

I modelli non conoscono l'indice del favonio. Forniscono normali valori meteo: direzione del vento, vento medio, raffiche, umidità dell'aria e temperatura. Abbiamo scaricato questi valori di **ICON-CH1** (maglia di 1 km) e **ICON-CH2** (2,1 km) di MeteoSvizzera ora per ora nel punto delle 13 stazioni di valle in cui ha soffiato il favonio. Poi li abbiamo messi accanto alle stesse grandezze misurate dalla stazione. Se il favonio ha soffiato davvero lo decide l'indice del favonio.

### Quanto concordano i singoli valori?

Mediana sulle 213 ore di favonio misurate:

| Grandezza | misurato | ICON-CH1 | ICON-CH2 |
|---|---|---|---|
| Vento dalla direzione di favonio della valle | 97 % delle ore | 92 % | 96 % |
| Vento medio | 24 km/h | 21 km/h | 18 km/h |
| Raffica (la più forte dell'ora) | 51 km/h | 41 km/h | 39 km/h |
| Umidità relativa | 38 % | 47 % | 48 % |
| Temperatura | 28,0 °C | 26,3 °C | 26,1 °C |

**La direzione del vento è quasi sempre giusta.** Entrambi i modelli hanno mostrato vento dalla direzione giusta nel 92-96 per cento delle ore di favonio. **Il vento è troppo debole.** Ora per ora le raffiche del modello erano in mediana quasi 8 km/h sotto la misura, il vento medio da 3 a 4 km/h. **L'aria è troppo umida e troppo fresca.** I modelli la mostravano circa 8 punti percentuali più umida e quasi 1,5 gradi più fredda di quanto misurato.

### Quale indizio tradisce il favonio nei dati di previsione?

Il favonio sul fondovalle lascia un'impronta: vento dalla direzione del favonio, forte e secco. Abbiamo verificato ogni indizio da solo, prima sui valori misurati della stazione, poi sui valori del modello. Le soglie le abbiamo scelte noi: vento medio da 20 km/h o raffiche da 30 km/h, umidità al massimo 60 per cento.

<figure class="fig-wide">
  <p class="fig-kicker">Previsione</p>
  <p class="fig-titel">Quale indizio tradisce il favonio?</p>
  <img src="/wetterkunde/foehn-merkmale.png" alt="Due grafici a barre per ogni indizio, per i valori misurati della stazione, ICON-CH1 e ICON-CH2. Il grigio non è l'indice del favonio, ma la stessa regola applicata ai valori misurati della stazione. Riconoscimenti, cioè su 100 ore di favonio secondo l'indice quelle con l'indizio: direzione del vento 97, 92, 96; vento forte 95, 72, 69; aria secca 97, 91, 87; tutti e tre insieme 90, 69, 65. Falsi allarmi, cioè su 100 ore con l'indizio quelle senza favonio: direzione del vento 67, 69, 68; vento forte 47, 43, 51; aria secca 53, 55, 56; tutti e tre insieme 27, 25, 29." width="1344" height="1138" loading="lazy" decoding="async">
  <figcaption>Fonte: misura MeteoSvizzera OGD, 13 stazioni di valle, se c'era favonio lo decide l'indice del favonio · modelli ICON-CH1 e ICON-CH2 tramite Open-Meteo Historical Forecast · dal 26 al 28.08.2026. Grafico in tedesco.</figcaption>
</figure>

**Da solo, nessun indizio basta.** Il vento dalla direzione del favonio c'era in quasi tutte le ore di favonio. Ma su 100 ore con questa direzione, circa 68 erano senza favonio. **Insieme funzionano.** Nei valori misurati della stazione la combinazione coglie 90 ore di favonio su 100, e solo 27 ore su 100 con tutti e tre gli indizi sono falsi allarmi. Nei valori del modello i riconoscimenti sono 69 con ICON-CH1 e 65 con ICON-CH2. La perdita viene quasi tutta dal vento. I modelli mostrano il favonio dalla direzione giusta e per lo più abbastanza secco, ma troppo debole.

### Ora per ora, valle per valle

<figure class="fig-wide">
  <p class="fig-kicker">Previsione</p>
  <p class="fig-titel">Misura contro ICON-CH1 e ICON-CH2</p>
  <img src="/wetterkunde/foehn-modelle-taeler.png" alt="Per ogni valle tre barre temporali: le ore di favonio misurate e le ore di favonio in ICON-CH1 e in ICON-CH2. ICON-CH1 ha mostrato 148 delle 213 ore di favonio misurate, ICON-CH2 139." width="1344" height="1286" loading="lazy" decoding="async">
  <figcaption>Fonte: misura: indice del favonio MeteoSvizzera, ora = favonio in almeno 3 dei 6 valori ogni dieci minuti · modelli: ICON-CH1 e ICON-CH2 (MeteoSvizzera) tramite Open-Meteo Historical Forecast · dal 26 al 28.08.2026. Grafico in tedesco.</figcaption>
</figure>

Il grafico mostra tutti e tre gli indizi insieme. ICON-CH1 li ha mostrati in 148 delle 213 ore di favonio misurate, ICON-CH2 in 139. A Vaduz ICON-CH1 ha colto 24 ore di favonio e ICON-CH2 tutte e 25, a Davos ICON-CH1 13 e ICON-CH2 14 su 17.

Ad Altdorf, il mattino del 27 agosto (dalle 02 alle 10), nessuno dei due modelli ha mostrato una sola ora di favonio. Anche a Visp, la sera del 26 agosto (dalle 17 alle 24), il favonio mancava in entrambi i modelli. A Elm, nella notte sul 27, solo ICON-CH2 ha mostrato un'ora. Delle 9 ore di favonio a Meiringen, ICON-CH1 ne ha mostrate 4, ICON-CH2 una.

Al contrario, ICON-CH2 a Chur ha mostrato favonio dalle 23 del 26 agosto. Misurato, lì ha soffiato solo dalla tarda mattinata del 27: 17 ore di troppo. Entrambi i modelli hanno mostrato favonio a Bad Ragaz nella notte e al mattino del 28, ICON-CH1 a Evionnaz il mattino del 27. In tutto sono state 49 ore di modello con ICON-CH1 e 57 con ICON-CH2 senza favonio misurato.

<figure class="fig-wide">
  <p class="fig-kicker">Previsione</p>
  <p class="fig-titel">Altdorf: misura contro i due modelli</p>
  <img src="/wetterkunde/foehn-altdorf-modelle.png" alt="Grafico a linee per Altdorf dal 26 al 28 agosto: raffiche e umidità misurate contro ICON-CH1 e ICON-CH2. Il mattino del 27 misurati da 52 a 60 km/h, nei modelli al massimo 21 e 27 km/h." width="1344" height="950" loading="lazy" decoding="async">
  <figcaption>Fonte: misura: MeteoSvizzera OGD, Altdorf (raffica al secondo più forte dell'ora, umidità all'ora piena) · modelli: ICON-CH1 e ICON-CH2 tramite Open-Meteo Historical Forecast · dal 26 al 28.08.2026. Grafico in tedesco.</figcaption>
</figure>

Altdorf lo mostra nel modo più chiaro. Nella fase di favonio del mattino del 27 agosto sono state misurate raffiche da 52 a 60 km/h con circa il 40 per cento di umidità. ICON-CH1 mostrava al massimo 21 km/h, ICON-CH2 al massimo 27 km/h, entrambi con un'umidità dal 50 al 78 per cento. Da mezzogiorno entrambi erano più vicini alla misura: misurati 84 km/h tra le 14 e le 15, ICON-CH2 74 km/h, ICON-CH1 63 km/h.

Anche durante il favonio, da mezzogiorno del 27 al mattino del 28, entrambi i modelli mostravano l'aria di Altdorf più umida di quanto fosse: misurato dal 33 al 38 per cento, ICON-CH1 dal 42 al 52, ICON-CH2 dal 40 al 68 per cento. Chi cerca aria di favonio secca nei dati di previsione la trova quindi più di rado di quanto soffi davvero.

I modelli mostrano quindi la situazione di favonio, ma troppo debole e spesso all'ora sbagliata. Quando hanno mancato il favonio, in circa la metà dei casi mostravano comunque vento da sud e aria secca, solo il vento era troppo debole (ICON-CH1 34 delle 65 ore mancate, ICON-CH2 39 delle 74).

---

## Cosa ne ricavi per pianificare il volo

La previsione mostra in modo affidabile se arriva una situazione di favonio. Se e quando il favonio raggiunge il suolo nella tua valle, lo mostra solo a grandi linee. Usala quindi per decidere in quali giorni devi guardare da vicino. Quello che succede davvero, il giorno del volo, te lo dicono i valori misurati e la tua valutazione sul posto.

### 1. Il giorno prima: è una situazione di favonio?

- **Differenza di pressione Lugano meno Zurigo, con favonio da nord il contrario.** Da 4 hPa il favonio è possibile, da 8 hPa è frequente nelle grandi valli di favonio. Nelle valli intralpine arriva anche sotto i 4 hPa.
- **Vento all'altezza dei passi, circa 2'000 m.** Con favonio da sud la FSVL consiglia di verificare se lassù soffia vento da sud e se l'aria sul versante sud è più fresca [[11]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Schwer_erkennbare_Foehnlagen.pdf). Il segnale d'allarme scatta da 1 a 2 gradi [[7]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Entscheidungsstrategie_Meteo_V10.pdf). Con favonio da nord vale lo stesso, con vento da nord e aria più fresca sul versante nord.

### 2. Per la tua valle: leggi la previsione come un avvertimento

- **Vento dalla direzione del favonio e aria secca bastano come avvertimento.** Se la previsione nella tua valle mostra vento dalla direzione del favonio e un'umidità sotto il 60 per cento, conta sul favonio, anche se nel modello il vento è debole. Nel nostro caso questa lettura avrebbe riconosciuto da 84 a 85 ore di favonio su 100. In cambio, in quasi un'ora su due segnalata così il favonio non è arrivato fino al fondovalle.
- **Le raffiche del modello sono un limite inferiore.** In mediana erano quasi 8 km/h sotto la misura, il mattino del 27 agosto ad Altdorf da 29 a 57 km/h.
- **L'ora è incerta.** Organizzati per essere a terra prima del primo sfondamento possibile, non prima di quello più probabile.
- **La previsione avverte, non decide.** Anche con questa lettura da 15 a 16 ore di favonio su 100 sono rimaste senza avvertimento. Nessun avvertimento non significa quindi che il favonio non arrivi. Se puoi volare lo decidi tu sul posto, al decollo e con i valori misurati del momento.

### 3. Il giorno del volo: guarda i valori misurati

- **L'arrivo si vede.** Quando il favonio arriva in valle, le raffiche saltano, il vento gira nella direzione del favonio e l'umidità cala. Ad Altdorf il 27 agosto le raffiche sono salite in un'ora da 14 a 50 km/h, a Glarus da 8 a 39 km/h, e lì l'umidità è scesa dal 62 al 36 per cento.
- **Confronta valle e vetta.** Vento calmo in valle e vento forte dalla direzione del favonio in vetta spesso significa «favonio sopra il lago d'aria fredda». Al Gütsch il 26 agosto soffiavano già da 45 a 64 km/h, quando ad Altdorf era ancora calmo.
- **Guarda nelle valli vicine.** Le valli che ricevono il favonio prima fanno da allarme precoce. In questo caso erano Andeer e Visp, mezza giornata prima di Altdorf.
- **Riparato dal favonio non vuol dire senza favonio.** Un decollo al riparo dal vento può essere calmo mentre il favonio passa sopra.

---

## Limiti di questa analisi

- **Il fondovalle non è il decollo.** L'indice del favonio vale alla stazione, tra 203 e 1'639 m. Lì il favonio sopra un lago d'aria fredda conta come «nessun favonio», ma alla quota del decollo può soffiare.
- **Una sola coppia di stazioni di pressione per tutte le valli.** Abbiamo usato ovunque Lugano meno Zurigo. Per il Vallese e per le valli intralpine sarebbe più adatto un altro asse.
- **Tutte le ore, solo indice 2.** La statistica comprende giorno e notte. L'aria mista di favonio (indice 1) non è contata, e questo sottostima il tempo di favonio a Chur e a Sion.
- **I criteri per il favonio da nord non sono pubblicati.** Il metodo è documentato per il favonio da sud [[10]](https://www.meteoswiss.admin.ch/dam/jcr:3ed2aec8-0901-417a-acc3-8be11cce440a/Foehnindex_Arbeitsbericht_223_Automatisiertes_Verfahren_zur_Bestimmung_von_Foehn_in_Alpentaelern_de.pdf).
- **I valori del modello sono stati scaricati a posteriori.** L'archivio di Open-Meteo mette in fila le corse più recenti di ICON-CH1 e ICON-CH2, quindi l'anticipo è più breve che in una previsione del giorno prima. Una vera previsione farebbe probabilmente peggio. Gli indizi di favonio nel modello li abbiamo fissati noi. Con altre soglie le percentuali sarebbero diverse.
- **Un caso non è una climatologia.** Il confronto con i modelli si basa su una sola situazione di favonio da sud, dal 26 al 28 agosto 2026.
- **La turbolenza non l'abbiamo misurata.** Le stazioni misurano il vento al suolo. Su rotori e wind shear nell'aria libera non dicono nulla.

---

## Domande frequenti

**Da quanti hPa c'è favonio?**
Una soglia fissa non esiste. Ad Altdorf, con una differenza da 4 a 6 hPa, il favonio ha soffiato sul fondovalle solo nel 10 per cento del tempo, da 10 hPa nell'88 per cento. Ad Andeer, Davos o Visp circa un terzo di tutte le ore di favonio si è verificato con meno di 4 hPa.

**Perché il favonio è pericoloso per chi vola in parapendio?**
Perché è forte e turbolento e al decollo spesso non lo senti. Sottovento si formano onde e rotori fin vicino al suolo, al limite con il lago d'aria fredda c'è wind shear, e quando il favonio sfonda il vento diventa in fretta tempestoso.

**Come riconosco il favonio senza muro del favonio?**
Dall'aria e dai valori misurati. L'aria di favonio è calda e molto secca. Sono indizi il vento forte dalla direzione del favonio alle stazioni in vetta con la valle calma, l'aria più fresca sul lato sopravento all'altezza dei passi e il favonio nelle valli di favonio note: con favonio da sud per esempio ad Altdorf o a Vaduz, con favonio da nord per esempio in Leventina.

**Il favonio ha bisogno di pioggia sopravento?**
No. Con il favonio da sud del 26 e 27 agosto 2026, in dieci stazioni del versante sud non è caduta praticamente pioggia. Eppure Altdorf alle quattro del mattino aveva 29,5 °C.

**Qual è la differenza tra favonio da sud e favonio da nord?**
Il favonio da sud soffia sul versante nord delle Alpi con corrente da sud, il favonio da nord sul versante sud delle Alpi con corrente da nord.

**Una previsione meteo può prevedere il favonio in valle?**
In parte. I modelli non hanno un indice del favonio, ma hanno direzione del vento, vento e umidità. Leggendo i tre valori insieme, ICON-CH1 ha mostrato il 69 per cento e ICON-CH2 il 65 per cento delle ore di favonio misurate. La direzione era quasi sempre giusta, il vento nel modello era troppo debole.

---

## Fonti e dati

- **[1]** MeteoSvizzera, [Wetter und Klima von A bis Z: Föhn](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html)
- **[2]** Steinacker, R. (2006): [Alpiner Föhn, eine neue Strophe zu einem alten Lied](https://www.meteoschweiz.admin.ch/dam/jcr:d5bead26-9bd3-4b8b-a88c-6f08e4de8e3a/Steinacker_Foehn_Promet_32_1-2_de.pdf). promet 32 (1/2), 3–10, DWD
- **[3]** Deutscher Wetterdienst, aviazione: [Wetterabhängige Gefahren im Bereich von Gebirgen](https://www.dwd.de/DE/fachnutzer/luftfahrt/download/produkte/runwaymap/04_gefahren_im_gebirge.pdf?__blob=publicationFile&v=4)
- **[4]** Würsch, M., Sprenger, M. (2015): [Swiss and Austrian foehn revisited: A Lagrangian-based analysis](https://doi.org/10.1127/metz/2015/0647). Meteorologische Zeitschrift 24 (3), 225–242
- **[5]** Jansing, L. et al. (2022): [Classification of Alpine south foehn based on 5 years of kilometre-scale analysis data](https://wcd.copernicus.org/articles/3/1113/2022/). Weather and Climate Dynamics 3, 1113–1138
- **[6]** Deutscher Wetterdienst, [Wetterlexikon: Föhn](https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv3=100882&lv2=100784)
- **[7]** FSVL, [Entscheidungsstrategie Meteo V10](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Entscheidungsstrategie_Meteo_V10.pdf)
- **[8]** Gutermann, T. et al. (2012): [Föhnklimatologie Altdorf: die lange Reihe (1864–2008)](https://www.meteoswiss.admin.ch/dam/jcr:698b5cdf-92cf-491a-8d88-c844113aa8d6/Foehnklimatologie_Altdorf_die_lange_Reihe_1864-2008_und_ihre_Weiterfuehrung_Vergleich_mit_anderen_Stationen_de.pdf). Rapporto tecnico MeteoSvizzera 241
- **[9]** MeteoSvizzera, [Wetter und Klima von A bis Z: Föhnindex](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehnindex.html)
- **[10]** Dürr, B. (2008): [Automatisiertes Verfahren zur Bestimmung von Föhn in Alpentälern](https://www.meteoswiss.admin.ch/dam/jcr:3ed2aec8-0901-417a-acc3-8be11cce440a/Foehnindex_Arbeitsbericht_223_Automatisiertes_Verfahren_zur_Bestimmung_von_Foehn_in_Alpentaelern_de.pdf). Rapporto di lavoro MeteoSvizzera 223
- **[11]** Oechslin, R., Stocker, B.: [Schwer erkennbare Föhnlagen](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Schwer_erkennbare_Foehnlagen.pdf). Swiss Glider 03/04 2025, FSVL
- **[12]** Haas, L.: [Misstraut den Föhndiagrammen](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/F%C3%B6hn/1_2023_240_Misstraut_den_Foehndiagrammen.pdf). DHV-Magazin 240 (2023)
- **[13]** Schwanitz, V.: [Föhn ist nicht gleich Föhn](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/F%C3%B6hn/4_2017_204_foehn_ist_nicht_gleich_foehn.pdf). DHV-Magazin 204 (2017)

**Valori misurati:** MeteoSvizzera Open Government Data, SwissMetNet, valori ogni dieci minuti (indice del favonio, raffiche, vento, temperatura, umidità, precipitazioni, pressione atmosferica). Caso dal 26 al 29 agosto 2026 in 34 stazioni, statistica dal 2020 al 2025 in 20 stazioni di valle più Lugano e Zurigo-Fluntern ([documentazione](https://opendatadocs.meteoswiss.ch/a-data-groundbased/a1-automatic-weather-stations)).

**Previsione:** ICON-CH1 e ICON-CH2 (MeteoSvizzera) tramite la [Historical Forecast API di Open-Meteo](https://open-meteo.com/en/docs/historical-forecast-api), valori orari in 14 stazioni di valle, in 13 delle quali soffiava il favonio, dal 26 al 28 agosto 2026. Dati grezzi e script di calcolo si trovano nel repository marketing sotto `2-ausfuehrung/wetterkunde/belege/foehn/`.

---

## Come Wingcast tratta il favonio

Ogni mattina Wingcast legge i modelli meteo per i decolli svizzeri e descrive in parole semplici cosa significano per il tuo decollo. Con il favonio vuol dire che nei dati del modello non guardiamo solo la differenza di pressione, ma anche vento, direzione e umidità nelle valli di favonio stesse. Questa analisi mostra fino a che punto ci si può fidare di questi dati. Wingcast è **Decision Support**: noi forniamo dati e valutazione, la decisione la prendi tu.

→ [Come appare un fronte di raffiche misurato, e cosa ne diceva il modello](/it/wetterkunde/boeenfront)
→ [Dust devil: come riconoscere una giornata a dusty](/it/wetterkunde/staubteufel)
→ [Tutti i temi di meteorologia](/it/wetterkunde)
→ [Apri Wingcast gratuitamente e controlla il tuo spot](https://app.wingcast.ch/?utm_source=blog&utm_medium=wetterkunde&utm_campaign=foehn)

---

<!-- Traduzione italiana della versione tedesca (2026-10-11). Fa fede la versione tedesca. -->
