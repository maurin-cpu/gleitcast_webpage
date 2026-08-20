---
titel: "Dust devil in parapendio: come riconoscere una giornata a dusty"
slug: staubteufel
ziel_url: /it/wetterkunde/staubteufel
ziel_keyword: "dust devil parapendio"
neben_keywords:
  - "turbine di polvere parapendio"
  - "dust devil svizzera"
  - "vortice termico decollo"
  - "piccola tromba d'aria"
  - "pericolo dust devil"
  - "vortice al decollo parapendio"
typ: pillar
hub: /wetterkunde
sprache: it-CH
status: published
veroeffentlicht: 2026-08-20
autor: "Maurin (Founder & Pilot, Wingcast)"
stand: 2026-08-20
meta_title: "Dust devil in parapendio – riconoscere le giornate a rischio"
meta_description: "Nessuna previsione mostra un dust devil. Ma si può calcolare se oggi è una giornata a rischio: 490 decolli svizzeri, 74 stazioni di misura, un'estate."
schema:
  - Article
  - FAQPage
  - BreadcrumbList
# kein og_bild: nutzt das generierte OG-Bild der Route /og/wetterkunde/it/staubteufel
# (Konvention wie boeenfront.fr/it — «kein Handbild, nutzt das generierte»)
video: /wetterkunde/staubteufel-entstehung.it.mp4   # video Remotion (fig. 1), reso con lang:it
uebersetzung_von: "staubteufel.md (2026-08-20)"
daten:
  - 2-ausfuehrung/wetterkunde/belege/2026_sommer_staubteufel_bedingungen.csv
  - 2-ausfuehrung/wetterkunde/belege/2026-05-28_2026-08-04_smn_bodengradient.json
  - 2-ausfuehrung/wetterkunde/belege/2026-05-28_2026-08-04_paarvergleich_gradient.json
skripte:
  - 2-ausfuehrung/wetterkunde/belege/staubteufel_fetch.py
  - 2-ausfuehrung/wetterkunde/belege/staubteufel_auswertung.py
  - 2-ausfuehrung/wetterkunde/belege/staubteufel_messkontrolle.py
  - 2-ausfuehrung/wetterkunde/belege/staubteufel_paarvergleich.py
  - 2-ausfuehrung/wetterkunde/belege/staubteufel_nachrechnung.py
  - 2-ausfuehrung/wetterkunde/belege/staubteufel_grafiken.py
---

# Dust devil in parapendio: come riconoscere una giornata a dusty

> **TL;DR** — Un dust devil — in italiano turbine di polvere, in tedesco Staubteufel — è un vortice in rotazione di origine puramente termica, **largo da 10 a 100 m**, che in Europa centrale vive per lo più **meno di un minuto** [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf). È pericoloso perché un lato della tua vela riceve vento in coda mentre l'altro riceve contemporaneamente vento contrario — in un calcolo di modello idealizzato circa **69 km/h di differenza su 10 m di apertura**. E in Svizzera manca per lo più la polvere che lo renderebbe visibile — al Schwyberg FR, nel 2025, un vortice invisibile ha strappato in aria un pilota su un decollo erboso. **Nessuna previsione vede il singolo vortice.** Ciò che si può calcolare è il gradino precedente: se oggi è una giornata a dusty, dove, e a che ora. L'abbiamo calcolato per **490 decolli svizzeri su 69 giorni d'estate** e verificato a **74 stazioni di misura**: zone basse e secche, picco **verso le 13**, il Vallese in testa — e, nei nostri dati, la regola empirica del decollo descrive la Svizzera meglio del criterio della letteratura scientifica.

Sui dust devil, ogni manuale contiene lo stesso paragrafo: suolo rovente, aria che sale, impulso di rotazione, fine. Ciò che manca sono i numeri per la Svizzera.

Il tema è di un'attualità rara: la **FSVL** ne ha fatto la copertina del numero di luglio/agosto 2026 dello *Swiss Glider* — con il racconto di un pilota gravemente infortunato [[12]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/) e una meteorologia di Roger Oechslin, il responsabile meteo della federazione [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). Si aggiungono due testi del DHV [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf) [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf) e uno di Lucian Haas [[10]](https://lu-glidz.blogspot.com/2018/09/meteowissen-dust-devil.html). Tutti nominano gli ingredienti, e tutti li nominano correttamente — ma nessuno ha calcolato **quanto spesso** si riuniscono in Svizzera, **dove** e **a che ora**. È esattamente ciò che fa questo articolo. Non contraddice la FSVL da nessuna parte; la quantifica.

*Questione di lingua: il vortice si chiama in italiano turbine di polvere, in meteorologia piccola tromba d'aria. Al decollo, tutti dicono comunque **dust devil** o **dusty** — e così lo chiamiamo anche noi qui.*

---

## Che cos'è un dust devil

Il servizio meteorologico tedesco (DWD) lo descrive come un « piccolo turbine di vento nettamente delimitato », che nasce « per lo più in estate per l'ascesa improvvisa di una bolla d'aria rovente, riscaldata al suolo » [[3]](https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv2=102248&lv3=102604).

**Un dust devil non è un tornado.** La differenza non è la dimensione, ma il motore: un tornado è appeso a una nube temporalesca e si estende senza interruzione fino alla base della nube; un dust devil non ha **alcun collegamento con una nube** ed è alimentato unicamente dal suolo surriscaldato [[4]](https://www.sturmarchiv.ch/index.php/Tornados). Per questo si forma anche con cielo senza nubi — la termica blu è addirittura il suo tempo preferito.

Due cose contano per te più della definizione. **Il senso di rotazione è casuale:** a questa scala la rotazione terrestre non gioca alcun ruolo, la rotazione nasce dall'afflusso d'aria casuale [[3]](https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv2=102248&lv3=102604) — il che liquida di passaggio il mito delle « colonne termiche che girano per lo più a sinistra » [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf). E **la polvere non è il vortice**, lo rende soltanto visibile. Sopra erba, roccia o suolo umido, lo stesso vortice continua a girare invisibile; la polvere agisce, come la formula Lucian Haas, « come un amplificatore » [[10]](https://lu-glidz.blogspot.com/2018/09/meteowissen-dust-devil.html).

### E in Svizzera? Il più delle volte non lo vedi

È il punto che distingue la Svizzera dalle immagini del Marocco e dell'Arizona — e non figura quasi in nessun manuale. **La polvere deve prima fornirla il suolo.** I decolli e i prati di atterraggio svizzeri sono prati, alpeggi, bosco o roccia; lì non giace quasi materiale sciolto. Il vortice si forma lo stesso — semplicemente non si mostra.

> ⚠️ **Schwyberg FR, 2 luglio 2025, ore 13.** Un pilota con 45 anni di pratica sta al decollo a **1'600 m**, agganciato, i comandi non ancora in mano. Il terreno: erboso, nessuna roccia scoscesa, familiare da decenni. Settimane senza pioggia, caldo, senza vento, stratificazione stabile. Il vortice arriva **da dietro e invisibile**, lo strappa a 25–30 m di altezza — lo strumento di volo registra 5 m/s di salita e 60 km/h — e lo lascia gravemente ferito sottovento. La sua frase al riguardo: « I dust devil non erano previsti nel mio modello mentale » [[12]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/).

Da noi un vortice diventa visibile praticamente solo dove giace materiale sciolto: sui campi mietuti, sulla ghiaia, nei cantieri e sulle piazze di sabbia — il caso svizzero meglio documentato ha attraversato per minuti, nel 2012, la piazza di sabbia nel centro del paese di Schüpfheim LU [[9]](https://www.sturmarchiv.ch/index.php/20120530_01_Staubteufel_Sch%C3%BCpfheim) —, sui detriti e sulle piste da sci senza neve, e in generale in Vallese.

Ne derivano due cose. **« Qui non ne ho mai visto uno » non è un argomento** — dice qualcosa sul terreno, non sui vortici. Il DHV annota per le Alpi: « Specialmente nelle Dolomiti si sono già moltiplicate situazioni pericolose dovute a dust devil invisibili o appena visibili » [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf). E **le segnalazioni di avvistamenti non valgono come statistica**, perché si segnala ciò che si vede. Per questo, più sotto, calcoliamo con le condizioni invece che con gli avvistamenti.

### Come si forma

In Europa centrale un dust devil nasce per lo più da un distacco termico vigoroso — spesso con termica blu — sopra una superficie aperta e surriscaldata [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf) — semplificato in cinque passi:

1. **Il suolo si surriscalda.** Appena sopra la superficie sta uno strato d'aria sottile e rovente. Vuole salire, ma non riesce a liberarsi.
2. **La bolla si stacca.** Non appena l'aria surriscaldata si libera, sale come bolla.
3. **Sotto si forma una depressione locale.** Dove l'aria calda si trovava un attimo fa, al suolo manca: lì resta una **bassa pressione**. Tutto intorno l'aria è a pressione più alta — e l'aria scorre sempre dalla pressione più alta a quella più bassa. Affluisce quindi da tutti i lati verso questo buco.
4. **L'afflusso è disuguale, e ne nasce una rotazione.** Un pendio, una siepe, una leggera componente di vento in coda bastano. L'aria non corre in linea retta verso il buco, ma **gli passa accanto**, e comincia a girare.
5. **Il vortice viene allungato e diventa così veloce.** La termica tira in lunghezza il tubo in rotazione, la sua sezione si restringe — e la rotazione accelera enormemente, lo stesso effetto di una pattinatrice che porta le braccia al corpo.

Il vortice può allora autoalimentarsi per un certo tempo: la rotazione veloce crea nel nucleo una **bassa pressione ancora più marcata**, che aspira altra aria. È proprio questa pressione del nucleo a determinare tra poco la velocità del vento. E finisce quando l'alimentazione si interrompe — per esempio perché aria più fresca entra nel suo piede, perché passa su un suolo più umido o perché una raffica lo taglia [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). Per questo da noi vive per lo più meno di un minuto. Ma non ci si può fare affidamento: dove se n'è formato uno, si forma il prossimo.

<figure class="fig-wide">
  <p class="fig-kicker">Formazione</p>
  <p class="fig-titel">Dal suolo surriscaldato al vortice in rotazione</p>
  <video src="/wetterkunde/staubteufel-entstehung.it.mp4" autoplay muted loop playsinline preload="metadata" width="1920" height="1080" aria-label="Sequenza animata come un film in un unico luogo, con scheda di testo in basso a sinistra: il sole surriscalda un suolo secco, una bolla d'aria calda si stacca e sale, sotto resta una depressione, l'aria affluisce in modo disuguale dai due lati, e il vortice cresce in un dust devil allungato che gira sempre più veloce."></video>
  <figcaption>Una sequenza come al cinema, tutto nello stesso luogo; la scheda di testo in basso a sinistra spiega ogni scena, i numeri corrispondono ai cinque passi qui sopra. Schematico, non in scala.</figcaption>
</figure>

Tre cose lo distinguono da una termica normale. Anche lì l'aria lascia il suolo e altra aria affluisce, ma la rotazione concentra la stessa energia su un decimo della superficie. La transizione è uno **spigolo** invece di una salita morbida — in pochi metri la direzione del vento ribalta di 180 gradi. E lui **resta al suolo e si sposta**, di traverso sul decollo se le cose vanno male. Un fenomeno di suolo, non di quota. Sui decolli in pendio si aggiunge che l'impulso alla rotazione proviene spesso da un leggero sottovento — insieme all'alimentazione di aria calda di un versante sud, un terreno di coltura ideale [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf).

### Perché un piccolo vortice chiude la tua vela

Immagina il vortice davanti a te e la tua vela di traverso. L'aria corre allora in un senso sul lato **sinistro** della tua ala, nell'altro sul lato **destro**: una metà della vela riceve **vento in coda**, l'altra contemporaneamente **vento contrario** — sui 10 metri della tua apertura. **La tua vela non misura la forza del vento, misura la differenza tra le sue due estremità** — e sta interamente dentro il vortice.

Quanto grande possa diventare questa differenza lo mostra un calcolo di modello idealizzato: un calo di pressione del nucleo di 2 ettopascal — le simulazioni mostrano vortici con « pressure drops of hundreds of pascals » [[6]](https://doi.org/10.1007/s10546-023-00792-3) — dà circa 34 km/h per lato, quindi **circa 69 km/h di differenza sull'apertura**. È un ordine di grandezza, non un valore di carico: ciò che arriva davvero alla vela dipende in più da raggio, posizione nel vortice, taglio e durata. La conseguenza la conferma il DHV: a bassa quota nasce spesso una turbolenza « così forte che il parapendio si chiude massicciamente » [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

<figure class="fig-wide">
  <p class="fig-kicker">Il meccanismo di chiusura</p>
  <p class="fig-titel">Non la forza del vento — la differenza sull'apertura</p>
  <img src="/wetterkunde/staubteufel-spannweite.it.svg" alt="Un parapendio di 10 metri di apertura sta di traverso su un nucleo di vortice. Sul lato sinistro l'aria corre a 34 chilometri all'ora in un senso, sul destro a 34 nell'altro — 69 chilometri all'ora di differenza sull'apertura." width="780" height="680" loading="lazy" decoding="async">
  <figcaption>Calcolo di modello idealizzato per un calo di pressione del nucleo di 2 hPa. Schematico, non in scala.</figcaption>
</figure>

*Per ricalcolare: v = √(Δp / 2ρ) con ρ = 1,10 kg/m³, dall'equilibrio tra gradiente di pressione e forza centrifuga al bordo del nucleo — derivazione in Jackson [[7]](https://arxiv.org/abs/1910.14135) secondo Rennó et al.; idealizza fortemente. Sulla dimensione: in Europa centrale un dust devil vive per lo più meno di un minuto e supera raramente i 100 m di altezza, nei deserti fino a mezz'ora [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf).*

---

## Oggi è una giornata a dusty?

Se oggi è una giornata a dusty si decide al tempo — molto sole, suolo secco, aria secca e vento debole senza direzione chiara, così la regola dei piloti del DHV [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf) — e a uno strato al suolo fortemente surriscaldato [[5]](https://doi.org/10.1002/2015GL063078). Per il vento calcoliamo con il limite superiore documentato: sopra circa 25 km/h non si formano quasi più dust devil [[5]](https://doi.org/10.1002/2015GL063078). Le altre soglie numeriche sono la nostra scelta di calcolo, il DHV non ne nomina alcuna (vedi Limiti). Nella nostra analisi (modello meteo via Open-Meteo) per 490 decolli svizzeri su 69 giorni d'estate 2026, queste condizioni si sono riunite più spesso nelle zone basse e secche: sotto gli 800 m in circa il 20 % delle ore diurne, sopra i 1'600 m in circa il 2 %, nel modo più marcato nella valle del Rodano. Il periodo critico va dalle 12 alle 16 con il picco alle 13 — misurato a 74 stazioni SwissMetNet [[8]](https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/), lo strato al suolo era a quell'ora più ripido di 4 kelvin al metro nel 37,6 % delle ore.

Tre sotto-domande, tre risposte dai nostri dati: se la giornata offre le condizioni, quando si concentrano di più, e dove.

### Il tempo è adatto?

Perché un dust devil possa formarsi, secondo il DHV cinque condizioni devono essere soddisfatte contemporaneamente — le chiamiamo qui la **regola dei piloti** [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf). Quattro di esse escono da qualsiasi modello meteo; si possono ricalcolare per ogni giorno e ogni decollo:

- **Molto sole, poche nubi** (radiazione globale da 700 W/m²) — il motore.
- **Suolo secco** (sotto 0,10 m³/m³) — un suolo umido evapora invece di scaldarsi, e non fornisce nemmeno polvere.
- **Aria secca** (umidità relativa sotto il 40 %) — tipica della termica blu.
- **Poco vento** (sotto 7 m/s = 25 km/h) o nessuna direzione di vento chiara al suolo.

I numeri tra parentesi sono le **nostre** soglie di calcolo, non quelle del DHV — lui non ne nomina alcuna. Solo il limite di vento è un valore documentato della letteratura [[5]](https://doi.org/10.1002/2015GL063078) (vedi Limiti).

La quinta condizione non si è potuta calcolare: l'aria deve raffreddarsi rapidamente verso l'alto, di oltre **0,7 °C per 100 m** — la stratificazione instabile che ogni pilota di termica conosce. Per la maggior parte dei 69 giorni ci mancano i dati in quota (vedi Limiti). Tutti i numeri sulla regola dei piloti in questo articolo si basano quindi su **quattro condizioni su cinque** e risultano piuttosto troppo alti che troppo bassi.

Fin qui la regola dei piloti — la regola empirica del decollo che il DHV dà ai piloti. Ma alla stessa domanda esiste una seconda risposta, e viene dalla scienza [[5]](https://doi.org/10.1002/2015GL063078). Questo **criterio di ricerca** non guarda affatto sole, secchezza e vento. Dipende da una sola grandezza: **quanto velocemente la temperatura cala nei due metri più bassi sopra il suolo** — nello strato al suolo. Più sotto facciamo gareggiare le due liste l'una contro l'altra; fino ad allora si tratta di questo unico numero.

Si confonde facilmente con il punto del DHV di poco fa, perché entrambe le volte si intende un gradiente di temperatura. La differenza è lo spessore dello strato: gli 0,7 °C per 100 m descrivono centinaia di metri di atmosfera, il criterio di ricerca i **due** metri più bassi — lì il gradiente è circa **1'200 volte più ripido**, per questo si calcola in kelvin al metro invece che in gradi per 100 metri. E questo strato al suolo è l'unica grandezza di tutta la storia che in Svizzera si può **misurare invece di stimare**. Per questo ci torniamo continuamente.

Chiamiamo ripido questo strato a partire da **4 kelvin al metro**, il che significa **8 gradi di differenza tra la superficie del suolo e l'aria a 2 m di altezza** — per esempio suolo a 36 °C, aria a 28 °C. La soglia non viene da noi: lo studio globale verifica tre valori, 4, 8,5 e 10 K/m [[5]](https://doi.org/10.1002/2015GL063078) — i 4 K/m da osservazioni generali sopra terra (Oke 2007, secondo Ryan 1972), gli 8,5 e 10 K/m da misure desertiche della campagna SAMUM 2009 nel sud del Marocco (Ansmann et al.).

Calcoliamo quindi tutto con entrambe le soglie. Lo studio stesso ritiene 8,5 K/m la sua stima migliore, perché gradienti più ripidi si accordano meglio alle osservazioni a scala globale; in Svizzera però gli 8,5 K/m vengono raggiunti **perfino nella misura solo nello 0,2 % delle ore**, i 4 K/m invece nel 26 %. Chi qui calcola solo con il valore desertico ottiene quasi sempre uno zero — e uno zero non è un risultato, ma forse un artefatto.

Una soglia non è un interruttore. Sopra i 4 K/m non appare improvvisamente un vortice; lo strato al suolo è allora semplicemente abbastanza ripido perché uno possa formarsi, purché le altre condizioni si aggiungano e qualcosa gli dia la spinta. Una soglia a partire dalla quale in Europa centrale compaia in modo affidabile un dust devil non ci è nota da alcuna serie di misure.

Resta il vento, e lì la cosa è meno semplice di quanto sembri. Verso l'alto la letteratura nomina un limite chiaro: sopra **circa 7 m/s, cioè 25 km/h**, non si osservano quasi più dust devil [[5]](https://doi.org/10.1002/2015GL063078). Il vortice viene allora tagliato più in fretta di quanto riesca a costruirsi. Ma la calma di vento non è lo stato più sicuro, perché la rotazione iniziale deve pur venire da qualche parte, e a fornirla è tipicamente proprio una raffica o una situazione di sottovento. Pericoloso non è quindi molto o poco vento, ma un **vento debole senza direzione chiara**.

### A che ora del giorno?

Il momento più critico è quello in cui il suolo ha accumulato di più e la termica sfonda pienamente per la prima volta. Nei nostri dati di misura di 74 stazioni, il picco si situa nettamente alle **13, ora locale**: a quell'ora lo strato al suolo è più ripido dei 4 K/m appena spiegati nel **37,6 %** delle ore misurate. Critico è grossomodo **dalle 12 alle 16**; alle 18 ne resta il 6 %, poi è praticamente quiete.

<figure class="fig-wide">
  <p class="fig-kicker">Ciclo diurno · 74 stazioni · estate 2026</p>
  <p class="fig-titel">Il picco si situa alle 13</p>
  <img src="/wetterkunde/staubteufel-tagesgang.it.svg" alt="Diagramma a barre: la quota delle ore misurate con un gradiente al suolo superiore a 4 kelvin al metro sale dal 25,5 per cento alle 11 al 37,6 per cento alle 13 e ricade al 6 per cento alle 18." width="820" height="360" loading="lazy" decoding="async">
  <figcaption>Quota delle ore misurate con oltre 4 K/m nei 2 metri più bassi, per ora locale.</figcaption>
</figure>

Tre conferme indipendenti: lo studio globale sul tema ha trovato il suo picco tra le 12 e le 13 [[5]](https://doi.org/10.1002/2015GL063078), il DHV nomina le « ore da tarda mattinata a primo pomeriggio, quando l'inversione è stata scaldata via » [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf), e la FSVL raccomanda attenzione accresciuta **dalle 11 alle 16**, con stagione da giugno a settembre [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). L'incidente al Schwyberg è avvenuto alle 13.

### Dove?

A grande scala i nostri numeri puntano verso il basso e verso il secco. La quota delle ore con condizioni soddisfatte cade da circa il **20 % sotto gli 800 m** a **circa il 2 % sopra i 1'600 m**. Tra le stazioni di misura spicca **Sion nella valle del Rodano**: lì lo strato al suolo è in media più del doppio più ripido che altrove, e nove delle dodici ore singole più forti dell'estate provengono da questa sola stazione.

Sul terreno stesso il nostro calcolo si ferma, perché una cella di modello di 1 km non conosce né margini di bosco né dossi. Queste caratteristiche deve portarle il pilota; la FSVL ne nomina quattro [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/): **superfici secche e povere di vegetazione** (campi, prati falciati corti, superfici di pendio sopra il limite degli alberi), **zone riparate dal vento**, in cui l'aria può scaldarsi indisturbata, **zone sottovento dietro margini di bosco o edifici**, dove vortici locali agiscono da donatori di impulso di rotazione, e **topografia aperta e omogenea con dossi**, dove né la brezza di pendio né quella di valle impongono la direzione. Il Schwyberg porta esattamente questa firma: dorso piatto, terreno aperto, alpeggi secchi e bruni, nessun vento chiaro.

Ciò che i numeri **non** ti dicono è tutto quello che conta quando sei già sul pendio: se il vortice sta correndo verso di te in questo momento, come gira, quanto è grande. I dati dicono *oggi occhi aperti* — il resto lo vedi solo tu.

---

## Regola dei piloti contro ricerca

Entrambe rispondono alla stessa domanda: oggi è tempo da dust devil? Se entrambe hanno ragione, devono scattare alle stesse ore. È esattamente ciò che abbiamo ricalcolato — e il risultato ci ha sorpreso.

Calcolato per **490 decolli** su **69 giorni d'estate** (28 maggio – 4 agosto 2026), ogni ora dalle 11 alle 18. Ne risultano **270'480 ore-decollo**: un luogo a una determinata ora. Per ciascuna abbiamo chiesto se tutte le condizioni erano soddisfatte contemporaneamente. Le percentuali più sotto dicono per quante di queste ore era il caso. **Non dicono quante volte si è davvero formato un vortice — contiamo occasioni, non eventi.**

« Tutte le condizioni » significa qualcosa di diverso a seconda della lista — le due non verificano **le stesse grandezze**:

| | **Lista A · regola dei piloti** [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf) | **Lista B · ricerca** [[5]](https://doi.org/10.1002/2015GL063078) |
|---|---|---|
| Radiazione | ≥ 700 W/m² | — |
| Umidità del suolo | ≤ 0,10 m³/m³ | — |
| Umidità relativa dell'aria | ≤ 40 % | — |
| Vento | ≤ 7 m/s [[5]](https://doi.org/10.1002/2015GL063078) | — |
| Strato al suolo (0–2 m) | — | **> 4 risp. 8,5 K/m** |
| Spinta contro attrito | — | **w\*/u\* > 5,0** |

La regola dei piloti interroga quindi lo **stato del paesaggio** — sole, secchezza, calma. Il criterio di ricerca interroga la **fisica dei due metri più bassi**: quanto è ripido lo strato al suolo, e se la spinta termica domina l'attrito (questo è w\*/u\* — grossomodo: « con quanta forza la termica rimescola dal basso » diviso « con quanta forza il suolo frena »). Entrambe le liste pretendono di descrivere lo stesso tempo. Se è vero, è la domanda di questo capitolo.

### Quanto rovente deve essere il suolo per questo

8,5 kelvin al metro suona come un errore di battitura. Calcolato su 2 metri significa: **17 gradi di differenza tra la superficie del suolo e l'aria all'altezza del ginocchio**.

Il punto decisivo: **non è l'aria a essere fredda — è il suolo a essere rovente.** Si intende la temperatura della superficie stessa, non dell'aria appena sopra. Terra secca e scura, roccia o ghiaia in pieno sole raggiungono **45–60 °C**, mentre l'aria a 2 m di altezza sta a piacevoli 28 °C. Lo conoscono tutti a piedi nudi su un sentiero di ghiaia: il suolo ti brucia i piedi, l'aria intorno a te è solo estivamente calda. È esattamente questo salto il carburante — la ragione per cui l'aria vicino al suolo vuole salire con tanta urgenza. Un esempio calcolato sopra roccia d'alta montagna soleggiata: **Zermatt-Oberrothorn, 3'400 m**, 24 giugno, ore 14 — aria 13,9 °C, superficie 34,9 °C, fanno 21 gradi su 2 metri = **10,5 K/m**.

### Cosa ne esce

Ci si sarebbe aspettati che le due liste marcassero le stesse ore, solo in un'altra lingua. **È vero il contrario.** Di 100 ore che la regola dei piloti marca come critiche, solo **10** soddisfano anche il criterio di ricerca; di tutte le ore che *almeno una* delle liste marca, solo il **5,7 %** è marcato da entrambe. Con la soglia severa di 8,5 K/m, la lista B non scatta praticamente mai.

La contraddizione non è nemmeno rumore, ma **sistematica con la quota**: la regola dei piloti scatta sotto gli 800 m nel **20,26 %** delle ore e sopra i 2'500 m solo nel 2,42 % — il criterio di ricerca all'inverso nello 0,12 % in basso e nel **13,43 %** in alto.

<figure class="fig-wide">
  <p class="fig-kicker">490 decolli · 69 giorni d'estate · 270'480 ore-decollo</p>
  <p class="fig-titel">Regola dei piloti e criterio di ricerca — opposti con la quota</p>
  <img src="/wetterkunde/staubteufel-hoehenbaender.it.svg" alt="Diagramma a barre per fascia altimetrica: la regola dei piloti del DHV cade dal 20,26 per cento delle ore sotto gli 800 metri al 2,42 per cento sopra i 2500 metri. Il criterio di ricerca sale all'inverso dallo 0,12 al 13,43 per cento." width="900" height="500" loading="lazy" decoding="async">
  <figcaption>Quota delle ore diurne analizzate (11–18, ora locale) in cui la rispettiva lista era soddisfatta — condizioni soddisfatte, non dust devil provati. Calcolato da <code>2026_sommer_staubteufel_bedingungen.csv</code>.</figcaption>
</figure>

Che la regola dei piloti scatti così tanto più spesso in basso dipende dal fatto che le sue condizioni si riuniscono più facilmente in pianura e nelle valli: in basso l'aria è più calda e quindi relativamente più secca, i suoli pure — terre coltivate, campi mietuti, la valle del Rodano. In alto il suolo resta umido più a lungo, l'alpeggio è verde, l'aria più fresca e il vento in media più forte. **Solo una condizione si capovolge:** sopra roccia soleggiata la superficie diventa estremamente calda mentre l'aria sopra resta fresca — i buoni 10 K/m dell'esempio più su. Ed è esattamente questa che verifica il criterio di ricerca. Da qui l'andamento opposto. Solo che: **lassù manca lo strato di suolo secco e sciolto che alimenta il vortice** — e la polvere che lo mostrerebbe. È esattamente ciò che la regola dei piloti verifica tramite l'umidità del suolo; questa condizione manca al criterio di ricerca, perché è stato sviluppato per i deserti.

Si aggiunge che una delle due condizioni B è quasi sempre soddisfatta: **w\*/u\* > 5 vale nel 71,9 % di tutte le ore diurne dell'estate** ed è così quasi senza valore come criterio distintivo. Ciò concorda con la fonte stessa, che annota che questo criterio non deve essere usato da solo [[5]](https://doi.org/10.1002/2015GL063078).

> **Prudenza con il numero 20,26 %.** La fascia più bassa si compone di **sei** decolli, e sono tutt'altro che concordi: Bogiàn 29,3 %, Oberrieden 27,2 % — ma Kerenzerberg solo 0,4 %. La quota non decide nulla, sposta solo la probabilità. Robusta è la **direzione**, non il decimale.

### Il modello concorda con la misura?

Verifichiamo ora se **il modello meteo arriva allo stesso risultato delle stazioni di misura**. Il motivo: tutti i numeri sullo strato al suolo finora vengono dal modello — anche il criterio di ricerca calcola con un valore di modello. Se questo valore è giusto si può controllare direttamente in Svizzera, perché SwissMetNet misura a molte stazioni, ogni ora, la temperatura dell'aria a **5 cm e a 2 m di altezza** [[8]](https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/). Lo studio globale non aveva questo a disposizione: ha dovuto derivare il gradiente da una temperatura di superficie di modello, una risoluzione verticale più fine essendo « not possible using ECMWF data » [[5]](https://doi.org/10.1002/2015GL063078). Se modello e misura divergono, ciò decide di passaggio a quale delle due risposte ci si può fidare.

Il confronto ovvio sarebbe opporre i 490 decolli alle stazioni. **Sarebbe senza valore**, perché le stazioni sono basse e i decolli alti — si misurerebbe soprattutto la differenza di quota. Abbiamo quindi recuperato i **dati di modello alle coordinate delle stazioni** e li abbiamo opposti ora per ora alla misura della stessa stazione: **74 stazioni, 40'711 ore appaiate**, stesso luogo, stessa ora.

| confronto appaiato | mediana | p90 | massimo |
|---|---|---|---|
| **misurato** (5 cm → 2 m) | **2,92** | 5,18 | 9,95 |
| **modello** (superficie → 2 m) | **1,00** | 2,65 | 6,25 |

**Il modello sta sotto la misura nell'86,5 % delle ore appaiate** (intervallo al 95 % secondo Wilson: 86,2–86,8 %), la correlazione è solo r = 0,42. Negli stessi luoghi, i valori misurati superano la soglia di 4 K/m nel **26,13 %** delle ore, il modello solo nell'**1,85 %**.

<figure class="fig-wide">
  <p class="fig-kicker">74 stazioni · 40'711 ore appaiate · stesso luogo, stessa ora</p>
  <p class="fig-titel">Quasi ogni stazione misura più di quanto calcoli il modello</p>
  <img src="/wetterkunde/staubteufel-modell-messung.it.svg" alt="Grafico a dispersione: per ciascuna delle 74 stazioni SwissMetNet il gradiente al suolo misurato è riportato contro il valore del modello. 71 dei 74 punti stanno sopra la bisettrice, la misura è quindi più alta del modello. Sion, con 6,44 contro 1,40 K/m, se ne discosta di più." width="820" height="700" loading="lazy" decoding="async">
  <figcaption>Un punto è una stazione; gli assi mostrano la mediana di tutte le ore appaiate. Se il modello avesse ragione, i punti si disperderebbero intorno alla linea tratteggiata.</figcaption>
</figure>

Non è un artefatto di definizione. Il modello calcola dalla superficie a 2 m, la misura solo da 5 cm — la parte più ripida sta proprio in basso, il modello la include, la misura no. La differenza dovrebbe quindi rendere il valore del modello **più grande**, non più piccolo. Abbiamo trovato il contrario, il risultato è quindi piuttosto conservativo. La ragione plausibile, non provata da noi: la temperatura di superficie di una cella di 1 km è una media su bosco, prato, roccia e abitato, il sensore a 5 cm sta sopra una superficie concreta a erba rasa.

L'errore non dipende dalla quota — in tutte e quattro le fasce di stazioni tra 0 e 2'500 m il modello sottostima di 1,5–2,3 K/m. Ma **non è uno scostamento uniforme**: a Sion la stazione misura in mediana 6,44 K/m, il modello vede 1,40; a Zurigo/Affoltern, Ginevra e Lucerna i due praticamente concordano. L'errore compare quindi esattamente dove diventa interessante — nei luoghi secchi e fortemente irraggiati. **Il criterio della letteratura desertica si appoggia così, in Svizzera, a una grandezza di modello che è troppo bassa proprio nei luoghi rilevanti.**

### Quanto è robusto questo risultato?

La contraddizione di quota potrebbe anche essere un effetto di regione: i decolli bassi stanno sull'Altopiano, in Ticino, in Vallese e nel Giura, quelli alti nello spazio intralpino. Abbiamo quindi posto la domanda ancora una volta **all'interno** di ogni regione che ha decolli sotto i 1'500 m *e* sopra i 2'000 m. Nove la soddisfano, e in **9 su 9 la regola dei piloti cade con la quota**, mentre il criterio di ricerca sale in 7 su 9. Lo schema regge quando si tiene costante la geografia.

**E la scelta dei parametri stessa?** Abbiamo ricontrollato l'analisi con parametri variati. Per il vento la regola dei piloti calcola con il limite superiore documentato di 7 m/s [[5]](https://doi.org/10.1002/2015GL063078); con una variante più severa a 5 m/s l'andamento in quota non cambia praticamente. E se si restituisce al criterio di ricerca la condizione che nel deserto era ovvia — suolo secco —, la sua salita in quota crolla di un fattore cinque nella fascia più alta: dal 13,4 al 2,6 % delle ore. La contraddizione tra le due liste non dipende quindi da una soglia mal posta, ma in massima parte esattamente dall'ingrediente di suolo che manca al criterio di ricerca.

Due cose vanno ancora dichiarate. **Quattro decolli sono esclusi**, perché la griglia del modello li localizza erroneamente di oltre 200 m (uno stava a 514 m invece di 1'700 m) — analizzati sono 490 su 494. E **il valore assoluto del criterio B è incerto**: dipende da una grandezza stimata e varia secondo la rugosità del terreno di quasi un **fattore 3**; direzione e contraddizione di quota restano in tutte le varianti, e i valori misurati non dipendono affatto da questa ipotesi.

---

## Cosa fai al decollo

Questo non viene da noi, ma dalle federazioni: dalla « Dust Devil Info » del DHV [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf) e dalla meteorologia dello *Swiss Glider* [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/).

### Prima del decollo

Non aspettare agganciato — appena la vela è sistemata, i **comandi vanno in mano**. Al Schwyberg è mancato esattamente questo gesto. Nelle giornate calde e a vento debole, tra le 11 e le 16, scrutare continuamente i dintorni, non solo la manica a vento. E parlare: le segnalazioni di altri piloti del giorno prima o della regione vicina sono un segnale da prendere sul serio.

### I segni, prima che tu lo veda

Particolarmente importante qui, dove la polvere per lo più manca:

- La velocità del vento diventa **irregolare**; raffiche inattese laterali o in coda
- **Fruscio chiaro negli alberi**, un sibilo dovuto all'attrito al suolo; cespugli e alberi vengono letteralmente « scossi »
- **Spirali d'erba al suolo** e cose nell'aria che non ci appartengono: erba, foglie, sacche
- **« Tremolio » dell'aria** sopra le superfici secche — il segno dello strato al suolo surriscaldato
- Piloti vicino al suolo entrano in una salita fortissima o vengono girati di lato senza fare nulla
- **Se oggi ne è già stato avvistato uno, con alta probabilità ne seguiranno altri**

### Quando ne arriva uno

Il più delle volte è più sicuro **non sganciarsi**, ma gettarsi subito sulla vela, raccogliere il bordo d'attacco e coprirlo con il corpo — che la vela si danneggi, in quel momento non importa. **Mai raccogliere la vela a « tulipano » per i cavi**: se il vortice la afferra, vieni trascinato. Come aiutante, gridare subito (« Dusty! da sinistra / destra / dietro ») e dare una mano, ma non afferrare i cavi. E **mai voler riprendere una vela vuota dall'aria** — sono noti due casi in cui piloti hanno trattenuto la vela per gli elevatori, sono stati strappati in alto e sono precipitati mortalmente [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

### In volo e all'atterraggio

Nettamente più distanza dal pendio, aggirare alla larga i vortici visibili — « possono fare scarti come una lepre, una direzione di spostamento chiara spesso non c'è ». E: **« Se vedi un dusty sul tuo atterraggio previsto, quello non è più il tuo atterraggio. »** Cercare un atterraggio alternativo, anche uno nettamente peggiore. Dopo l'atterraggio sganciarsi subito — il pericolo viene dal suolo [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

---

## Conclusione: cosa porti a casa come pilota

Tutto quanto segue si appoggia su **un'estate**: 490 decolli, 69 giorni, più 74 stazioni di misura. Non sono affermazioni sui dust devil in generale, ma ciò che da questi dati si può dedurre per le condizioni svizzere.

- **La mappa ribalta verso il basso, non verso l'alto.** Calcolato su 490 decolli, sotto gli 800 m circa il **20 %** delle ore diurne soddisfaceva tutte le condizioni, sopra i 1'600 m circa il **2 %**. Il luogo in cui devi aspettartelo è il prato di atterraggio in fondovalle e il campo mietuto — non la cresta che sembra un deserto.
- **Il volo serale è un altro giorno rispetto al volo di mezzogiorno.** Misurato a 74 stazioni, la quota degli strati al suolo ripidi è del **37,6 %** alle 13, del **15,0 %** alle 17, del **6,0 %** alle 18. Tra le 13 e le 17 l'occasione cade quindi a meno della metà, fino alle 18 a un sesto — e questo senza che tu debba rinunciare a nulla. Chi può scegliere la finestra oraria ha in mano la leva più grande in assoluto.
- **Il vero segno premonitore è il suolo secco, non il sole.** Delle quattro condizioni della regola dei piloti, il vento debole era soddisfatto nel **98 %** di tutte le ore diurne e la forte radiazione nel **46 %** — il suolo secco solo nel **13 %**. Sole e calma li hai quasi in ogni giornata di bel tempo; ciò che fa la giornata a dusty sono le settimane senza pioggia precedenti.
- **In Vallese è peggio di quanto mostri qualsiasi previsione.** Nel confronto appaiato il modello calcolava lo strato al suolo troppo piatto nell'**86,5 %** delle ore, a Sion di un fattore **4,6**. Esattamente dove è secco e fortemente irraggiato, il numero del modello è troppo innocuo — in quelle regioni fidati di ciò che vedi, non di un valore dell'app.
- **La polvere assente non è un via libera.** I nostri valori misurati mostrano lo strato al suolo sopra la soglia di 4 K/m nel **26 %** delle ore; da noi non se ne vede quasi nulla — sopra l'erba lo stesso vortice gira invisibile. Al Schwyberg è arrivato da dietro sopra un alpeggio verde.

**E cosa tutto questo non significa.** La quota non è un lasciapassare: sopra i 2'000 m non c'è alcuna stazione con sensore a 5 cm, lassù semplicemente non abbiamo potuto verificare nulla — l'affermazione « in alto è più innocuo » vale per la regola dei piloti, non per la realtà. Lo studio globale annota perfino che i massimi di dust devil si trovano spesso nelle regioni di montagna [[5]](https://doi.org/10.1002/2015GL063078). Un'estate non è una climatologia. E non abbiamo **provato un solo dust devil**; abbiamo contato quante volte gli ingredienti erano riuniti.

### E perché la regola dei piloti e non il criterio di ricerca?

Perché l'analisi ha fatto gareggiare i due — e il criterio di ricerca, in questa trasposizione diretta alla Svizzera, è stato bocciato. Il criterio di ricerca dipende da una sola grandezza, il salto di temperatura sopra il suolo. Questa grandezza l'abbiamo confrontata con 40'711 ore misurate — e il modello da cui proviene è troppo basso nell'86,5 % delle ore. Raccoglie così i suoi risultati quasi esclusivamente dove non abbiamo potuto contro-misurare (roccia sopra i 2'000 m), e tace nelle valli, dove la misura suona l'allarme. La regola dei piloti fa a meno di questa grandezza e verifica in più se c'è del suolo secco e sciolto — la condizione che manca del tutto al criterio di ricerca e che in Svizzera fa la differenza.

Che lo studio sia per questo cattivo, non ne consegue: è costruito per i deserti, le sue soglie vengono dal sud del Marocco, e lì un suolo secco e sciolto è ovvio. Solo che da noi no.

**Estate secca, cielo blu, quasi niente vento, mezzogiorno? Comandi presto in mano.**

---

## Limiti di questa analisi

1. **La misura non può verificare il risultato d'alta montagna.** Delle 74 stazioni con sensore a 5 cm, **nessuna sta sopra i 2'000 m**. Se il modello lassù abbia ragione resta aperto — non l'abbiamo confutato, non abbiamo potuto testarlo.
2. **La regola dei piloti è calcolata in modo incompleto.** Delle sue cinque condizioni, **quattro** stanno nella nostra analisi; la quinta — raffreddamento di oltre 0,7 °C/100 m — richiede dati su più superfici di pressione, disponibili per solo circa 12 dei 69 giorni. Tutti i valori A di questo articolo sono quindi piuttosto troppo alti che troppo bassi.
3. **Le soglie numeriche della regola dei piloti sono la nostra scelta.** Il DHV non nomina, salvo per il gradiente di temperatura, alcun numero [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf); 700 W/m², 0,10 m³/m³ e 40 % li abbiamo fissati dai percentili dei nostri dati; il limite di vento di 7 m/s (25 km/h) riprende il limite superiore documentato della letteratura [[5]](https://doi.org/10.1002/2015GL063078). Altre soglie darebbero altre percentuali — robusto è il confronto delle due liste e la direzione, non il decimale.
4. **Le stazioni di misura non sono decolli.** SwissMetNet sta su aerodromi e in fondovalle; la trasposizione dell'errore del modello ai decolli è un'ipotesi.
5. **L'errore del modello è descritto, non spiegato.** La media su 1 km come causa è plausibile e non provata.
6. **Le medie orarie lisciano tutto, e un'estate non è una climatologia.** Un vortice vive meno di un minuto — **non abbiamo provato un solo dust devil**, contiamo condizioni favorevoli. E 69 giorni dell'anno 2026 non sono una statistica; un'estate umida avrebbe un altro aspetto.
7. **Sulla tendenza non diciamo nulla.** La FSVL ritiene che i dust devil diventino più frequenti con il cambiamento climatico [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). Plausibile — **verificarlo con una sola estate è impossibile.** Servirebbe lo stesso calcolo su vent'anni.

## Domande frequenti

**Che cos'è un dust devil?**
Un vortice d'aria vicino al suolo, in rapida rotazione attorno a un asse verticale, alimentato unicamente da un suolo fortemente surriscaldato. In italiano turbine di polvere, in meteorologia piccola tromba d'aria. In Europa centrale vive per lo più meno di un minuto e supera raramente i 100 m di altezza [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf).

**Da cosa riconosco una giornata a dusty?**
Da cinque grandezze che devono riunirsi: molto sole, suolo secco, aria secca, vento debole e uno strato al suolo fortemente surriscaldato. Il più critico è dalle 12 alle 16 con un massimo verso le 13, più probabilmente nelle zone basse e secche.

**A partire da quale forza di vento non si formano più dust devil?**
La letteratura nomina circa **7 m/s (25 km/h)** di vento ambientale come limite superiore pratico [[5]](https://doi.org/10.1002/2015GL063078); al di sopra il vortice viene per lo più tagliato prima di costruirsi. All'inverso, la calma di vento non è lo stato più sicuro: la rotazione iniziale viene spesso da una raffica o da un leggero sottovento. Critico è un vento debole **senza direzione chiara**.

**Esistono dust devil in Svizzera?**
Sì — e feriscono persone. Il 2 luglio 2025 un pilota esperto è stato afferrato al Schwyberg (FR), su un decollo erboso, da un dust devil invisibile e gravemente ferito [[12]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). La nostra analisi delle misure mostra: nel 26 % delle ore analizzate lo strato al suolo era più ripido di 4 K/m, nel modo più marcato nella valle del Rodano e in pianura. Ma un vortice diventa visibile solo sopra sabbia, ghiaia o un campo mietuto.

**I dust devil stanno aumentando in Svizzera?**
La FSVL lo ipotizza: periodi di caldo più lunghi e suoli più secchi li favoriscono [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). La nostra analisi non può né confermarlo né confutarlo — copre una sola estate.

**Perché un dust devil è pericoloso per chi vola in parapendio?**
Perché gira. Da un lato della tua vela l'aria corre con te, dall'altro contro di te — in un calcolo di modello idealizzato circa 69 km/h di differenza su 10 metri di apertura. La conseguenza è spesso una chiusura massiccia vicino al suolo [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

**Cosa faccio se uno arriva sul decollo?**
Non sganciarsi, ma gettarsi subito sulla vela, raccogliere il bordo d'attacco e coprirlo con il corpo. Mai raccogliere la vela per i cavi e mai trattenere una vela vuota per gli elevatori [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

## Fonti e riproducibilità

- **[1]** DHV — Sicherheit und Technik: *Dust Devil Info*, luglio 2020, di Volker Schwanitz, Karl Slezak e Lucian Haas. [PDF, dhv.de](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf)
- **[2]** DHV-info 186 (2014), Volker Schwanitz: *Dust-Devils*, p. 68–69. [PDF, dhv.de](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf)
- **[3]** Deutscher Wetterdienst, Wetterlexikon: *Staubteufel*. [dwd.de](https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv2=102248&lv3=102604)
- **[4]** Schweizer Sturmarchiv: *Tornados* — delimitazione rispetto alle piccole trombe. [sturmarchiv.ch](https://www.sturmarchiv.ch/index.php/Tornados)
- **[5]** Jemmett-Smith, B. C., Marsham, J. H., Knippertz, P. & Gilkeson, C. A. (2015): *Quantifying global dust devil occurrence from meteorological analyses.* Geophysical Research Letters **42**(4), 1275–1282. [doi.org/10.1002/2015GL063078](https://doi.org/10.1002/2015GL063078) — le soglie lì verificate vengono da Oke et al. (2007) / Ryan (1972) per i 4 K/m e il limite di vento di 7 m/s, nonché da Ansmann et al. (2009, campagna SAMUM, sud del Marocco) per 8,5 e 10 K/m. Lo studio calcola un *potenziale* globale (ore favorevoli), non eventi singoli osservati
- **[6]** Giersch, S. & Raasch, S. (2023): *How Do Dust Devil-Like Vortices Depend on Model Resolution?* Boundary-Layer Meteorology **187**, 703–742. [doi.org/10.1007/s10546-023-00792-3](https://doi.org/10.1007/s10546-023-00792-3)
- **[7]** Jackson, B. (2019): *On the Relationship between Dust Devil Radii and Heights.* [arXiv:1910.14135](https://arxiv.org/abs/1910.14135) — contiene la derivazione secondo Rennó, Burkett & Larkin (1998)
- **[8]** MeteoSvizzera, Open Government Data: valori orari SwissMetNet. [data.geo.admin.ch](https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/)
- **[9]** Schweizer Sturmarchiv: *Staubteufel Schüpfheim, 30.05.2012* — avvistamento su una piazza di sabbia, con foto e video. [sturmarchiv.ch](https://www.sturmarchiv.ch/index.php/20120530_01_Staubteufel_Sch%C3%BCpfheim)
- **[10]** Lucian Haas, lu-glidz (2018): *Meteowissen: Dust Devil.* [lu-glidz.blogspot.com](https://lu-glidz.blogspot.com/2018/09/meteowissen-dust-devil.html)
- **[11]** Roger Oechslin, responsabile meteo FSVL: *Tückische Teufel — „Dust Devils" erkennen und einschätzen.* Swiss Glider n. 4, luglio/agosto 2026, p. 22–27. Online per i membri FSVL: [shv-fsvl.ch](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/)
- **[12]** Gruppo di lavoro Human Factors della FSVL: *My Air Lesson — Plötzlich im Strudel.* Intervista a Beat Zahno sull'incidente al Schwyberg del 2 luglio 2025. Swiss Glider n. 4, luglio/agosto 2026, p. 18–21: [shv-fsvl.ch](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/)

**Ricalcolare:** tutti i numeri provengono da quattro script che riproducono interamente il recupero dei dati e l'analisi — recupero del modello per i 494 decolli, analisi della regola dei piloti e del criterio di ricerca con calcolo di sensibilità e filtro di quota, analisi dei gradienti al suolo misurati alle stazioni SwissMetNet e confronto appaiato modello contro misura. Gli intervalli di confidenza sono intervalli di Wilson al livello 95 %, calcolati a livello orario — la dipendenza temporale delle ore vicine non vi è considerata, gli intervalli sono quindi piuttosto troppo stretti. Forniamo script e dati aggregati su richiesta. Una versione precedente confrontava direttamente il tasso di rilevamento del modello ai decolli con il tasso misurato alle stazioni — inammissibile, perché i due campioni non stanno alla stessa quota. Il confronto appaiato lo sostituisce; il risultato ne esce perfino più netto. Il set di dati di modello archiviato proviene dal recupero del 17.08.2026 via l'API Historical Forecast (intervallo di date fisso 28.05–04.08); il limite di vento della regola dei piloti vi è stato allineato al valore documentato della letteratura di 7 m/s. Un quinto script ricalcola l'analisi con parametri variati: direzione e ordini di grandezza di tutti i risultati si riproducono, le percentuali assolute si spostano leggermente, perché lo stato d'archivio del modello dell'API di recupero non è stabile al bit.

## Come Wingcast ti aiuta

Onestamente: **Wingcast non può prevederti un dust devil.** Nessuno può. Un vortice di 20 m di diametro e 40 secondi di vita sta ordini di grandezza sotto ciò che un modello di previsione risolve.

Ciò che un prodotto meteo può fare è il gradino precedente: **calcolare se oggi è una giornata così.** Forte radiazione, suolo secco, aria secca, vento debole, strato al suolo ripido — sono grandezze che stanno nei dati, e Wingcast le analizza ogni giorno per ogni decollo svizzero.

Ma l'analisi mostra anche quanta prudenza ci vuole. Un criterio consolidato della letteratura scientifica punta, in Svizzera, verso **roccia d'alta montagna soleggiata, dove non c'è nulla da sollevare**. La regola empirica che i piloti usano al decollo coglie meglio — e i valori misurati lo confermano. Un numero non è giusto perché esce da un modello.

Per questo restiamo a ciò che diciamo ovunque: **la fisica calcola, tu decidi.** I dati ti dicono se oggi devi essere particolarmente attento. Se il vortice sta correndo verso il tuo decollo lo vedi dal fruscio negli alberi, dalla manica a vento, dall'erba nell'aria — e da nient'altro.

→ [Come appare un fronte di raffiche misurato — e cosa ne diceva il modello](/it/wetterkunde/boeenfront)
→ [Tutti i temi di meteorologia](/it/wetterkunde)
→ [Apri Wingcast gratuitamente e controlla il tuo spot](https://app.wingcast.ch/?utm_source=blog&utm_medium=wetterkunde&utm_campaign=staubteufel)

*Stato: 20 agosto 2026 · Autore: Maurin, Founder & Pilot di Wingcast. Questo testo è meteorologia, non un'autorizzazione al volo. Le condizioni le verifichi e decidi tu.*

<!-- Traduzione italiana della versione tedesca (2026-08-20). La versione
     tedesca è quella di riferimento; le citazioni DHV/DWD/FSVL sono
     tradotte da noi, gli originali tedeschi restano la fonte. -->
