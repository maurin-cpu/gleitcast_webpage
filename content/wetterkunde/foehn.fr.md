---
titel: "Foehn en parapente : pourquoi 4 hPa ne suffisent pas et ce que mesurent 20 vallées à foehn"
slug: foehn
ziel_url: /fr/wetterkunde/foehn
ziel_keyword: "foehn parapente"
neben_keywords:
  - "reconnaître le foehn parapente"
  - "foehn danger parapente"
  - "différence de pression foehn"
  - "règle des 4 hPa foehn"
  - "vallées à foehn suisse"
  - "qu'est-ce que le foehn"
typ: pillar
hub: /wetterkunde
sprache: fr-CH
status: published
veroeffentlicht: 2026-10-11
autor: "Wingcast"
stand: 2026-10-11
meta_title: "Reconnaître le foehn en parapente : 20 vallées mesurées"
meta_description: "4 hPa suffisent-ils pour le foehn ? L'indice de foehn de 20 vallées suisses analysé sur six ans, et ICON-CH1/CH2 confrontés à la mesure."
schema:
  - Article
  - FAQPage
  - BreadcrumbList
  - VideoObject
video: /wetterkunde/foehn-querschnitt.fr.mp4
uebersetzung_von: "foehn.md (2026-10-11)"
daten:
  - 2-ausfuehrung/wetterkunde/belege/foehn/2026-10-09_foehn_taeler.json
  - 2-ausfuehrung/wetterkunde/belege/foehn/2026-08-27_foehn_vorschau-daten.json
skripte:
  - 2-ausfuehrung/wetterkunde/belege/foehn/foehn_taeler.py
  - 2-ausfuehrung/wetterkunde/belege/foehn/foehn_auswertung.py
---

# Foehn en parapente : pourquoi 4 hPa ne suffisent pas et ce que mesurent 20 vallées à foehn

> **En bref :** Le foehn est un vent descendant chaud et sec, sous le vent des Alpes. Pour les pilotes, il est dangereux parce qu'il souffle souvent déjà au-dessus de la vallée alors que tout est encore calme au décollage. Si un lac d'air froid occupe la vallée, le foehn passe par-dessus et peut percer jusqu'au sol sans prévenir. Nous avons analysé l'indice de foehn de MétéoSuisse dans 20 vallées à foehn de 2020 à 2025. La règle empirique « foehn dès 4 hPa de différence de pression » ne tient pas. Avec 4 à 6 hPa entre Lugano et Zürich, le foehn n'a soufflé au fond de la vallée à Altdorf que **10 pour cent** du temps. La différence de pression montre donc qu'une situation de foehn est possible, mais pas si le foehn arrive dans ta vallée. Les modèles ICON-CH1 et ICON-CH2 ne le montrent pas non plus de façon fiable. Lors de l'épisode de foehn d'août 2026, ils ont presque toujours trouvé la bonne direction du vent, mais leurs rafales étaient en médiane presque 8 km/h trop faibles. Dans la prévision, regarde donc s'il y a du vent de la direction du foehn et de l'air sec, même si le vent paraît faible.

---

## Ce qu'est le foehn

Le foehn est un **vent descendant chaud et surtout sec**, du côté d'une chaîne de montagnes opposé au courant. Il naît partout où des vents forts franchissent une chaîne de montagnes, et il atteint souvent la force d'une tempête [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html). Sur le versant nord des Alpes, on l'appelle d'après son origine **foehn du sud**, sur le versant sud **foehn du nord**. Par foehn du sud, la pression est plus élevée au sud des Alpes qu'au nord, et l'air traverse les Alpes vers le nord. Par foehn du nord, c'est l'inverse. La position des anticyclones et des dépressions varie d'une situation à l'autre [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html).

### Comment naît le foehn : le trajet de l'air par-dessus la crête

Le plus simple est de raconter le foehn comme le voyage d'une masse d'air, ici avec l'exemple du foehn du sud :

1. **Côté au vent :** L'air est soulevé contre le versant sud des Alpes. S'il est humide, des nuages se forment et il pleut. Depuis le nord, on voit ce mur de nuages accroché à la crête : c'est le **mur de foehn** [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html).
2. **Crête :** Le courant est poussé par-dessus les cols et à travers eux. La **théorie hydraulique du foehn** en donne une image parlante : comme l'eau par-dessus un barrage, l'air de foehn proche du sol jaillit par-dessus la crête et peut, sous le vent, freiner d'un coup dans un ressaut [[2]](https://www.meteoschweiz.admin.ch/dam/jcr:d5bead26-9bd3-4b8b-a88c-6f08e4de8e3a/Steinacker_Foehn_Promet_32_1-2_de.pdf).
3. **Sous le vent :** L'air descend et se réchauffe. Les nuages se dissipent, c'est la **fenêtre de foehn**, avec un air très limpide [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html).
4. **Ondes :** Derrière la crête, le courant oscille vers le haut et vers le bas. Sur les crêtes des ondes se forment souvent des nuages en forme de lentille, les **lenticulaires** ou « poissons de foehn » [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html).
5. **Rotors :** Près du sol, sous les ondes, l'air s'enroule en rouleaux. Le DWD décrit ces **rotors** comme un compagnon fréquent des ondes sous le vent. Leurs ascendances et leurs descendances peuvent provoquer de fortes turbulences pour un parapente [[3]](https://www.dwd.de/DE/fachnutzer/luftfahrt/download/produkte/runwaymap/04_gefahren_im_gebirge.pdf?__blob=publicationFile&v=4).

<figure class="fig-wide">
  <p class="fig-kicker">Vidéo</p>
  <p class="fig-titel">Le voyage de l'air de foehn et ce qu'il signifie pour ton vol</p>
  <video src="/wetterkunde/foehn-querschnitt.fr.mp4" poster="/wetterkunde/foehn-querschnitt-poster.fr.jpg" autoplay muted loop playsinline preload="metadata" width="1280" height="720" aria-label="Coupe animée à travers les Alpes par foehn du sud. Première partie : l'air est soulevé contre le versant sud des Alpes et se vide de sa pluie, les nuages restent accrochés à la crête en mur de foehn, une couche stable comprime le courant, sous le vent l'air descend et se réchauffe, oscille en ondes avec des poissons de foehn et s'enroule en dessous en rotors jusqu'au sol. Deuxième partie : un lac d'air froid occupe la vallée, et le foehn passe par-dessus. Un parapente décolle au calme dans le lac d'air froid, est pris par le cisaillement à sa limite supérieure, puis le foehn perce jusqu'au sol."></video>
  <figcaption>Le foehn du sud en coupe, étape par étape : d'abord le trajet de l'air du côté au vent jusqu'aux rotors, puis le lac d'air froid, le cisaillement et la percée du point de vue d'un pilote. Schématique, sans échelle. Le cas montré est le cas classique, avec précipitations côté au vent.</figcaption>
</figure>

### Pourquoi le foehn n'arrive pas dans chaque vallée

La recherche sur le foehn s'est toujours posé une question centrale : pourquoi l'air chaud et léger descend-il dans la vallée pour y chasser l'air froid et lourd [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html) ? Souvent, il ne le fait pas. Si un **lac d'air froid** occupe la vallée, le foehn passe d'abord par-dessus. La FSVL l'écrit ainsi : les lacs d'air froid sont d'abord survolés par le foehn, et le foehn peut percer par surprise [[7]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Entscheidungsstrategie_Meteo_V10.pdf).

S'il perce, et à quelle fréquence, cela dépend du terrain. Pour les stations de foehn intra-alpines, MétéoSuisse a trouvé une corrélation de **moins 0,96** entre la fréquence du foehn et la différence d'altitude avec le col déterminant : plus une station se trouve bas sous le col, plus rarement le foehn l'atteint [[8]](https://www.meteoswiss.admin.ch/dam/jcr:698b5cdf-92cf-491a-8d88-c844113aa8d6/Foehnklimatologie_Altdorf_die_lange_Reihe_1864-2008_und_ihre_Weiterfuehrung_Vergleich_mit_anderen_Stationen_de.pdf). En avril et en mai, les mois les plus riches en foehn, Altdorf présente un minimum de foehn en matinée et un maximum le soir [[8]](https://www.meteoswiss.admin.ch/dam/jcr:698b5cdf-92cf-491a-8d88-c844113aa8d6/Foehnklimatologie_Altdorf_die_lange_Reihe_1864-2008_und_ihre_Weiterfuehrung_Vergleich_mit_anderen_Stationen_de.pdf).

### Comment MétéoSuisse mesure le foehn

L'**indice de foehn** est calculé toutes les dix minutes et connaît trois niveaux : 0 = pas de foehn, 1 = air de foehn mélangé, 2 = foehn. Pour le foehn du sud, la condition de base est un vent du sud sur la crête principale des Alpes, au Gütsch au-dessus d'Andermatt. S'y ajoutent, à la station de vallée, le vent, les rafales, la direction, l'humidité et la température potentielle comparée à celle du Gütsch [[9]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehnindex.html), [[10]](https://www.meteoswiss.admin.ch/dam/jcr:3ed2aec8-0901-417a-acc3-8be11cce440a/Foehnindex_Arbeitsbericht_223_Automatisiertes_Verfahren_zur_Bestimmung_von_Foehn_in_Alpentaelern_de.pdf). Pour le foehn du nord, les critères ne sont pas publiés. **La méthode publiée ne fait intervenir aucune pression atmosphérique.** L'indice permet donc de vérifier proprement dans quelle mesure la différence de pression prédit le foehn.

---

## Pourquoi le foehn est dangereux en parapente

En vol, ce qui compte avec le foehn, c'est l'écoulement de l'air. Quatre choses le rendent dangereux, et aucune ne se voit de façon fiable depuis le décollage.

**Le vent est fort.** Dans les vallées à foehn, les tempêtes de foehn ne sont pas rares. À Altdorf, les pointes de vent les plus violentes atteignent chaque année 100 à 140 km/h [[1]](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html). C'est bien au-delà de la vitesse à laquelle vole un parapente.

**Sous le vent, c'est turbulent.** Les ondes sous le vent et les rotors créent de fortes ascendances et descendances [[3]](https://www.dwd.de/DE/fachnutzer/luftfahrt/download/produkte/runwaymap/04_gefahren_im_gebirge.pdf?__blob=publicationFile&v=4). Les rotors descendent jusqu'au sol, donc exactement là où tu décolles et où tu atterris.

**À la limite de l'air froid, ça cisaille.** Quand le foehn souffle au-dessus d'un lac d'air froid, deux masses d'air de direction et de vitesse différentes se superposent. Le DWD décrit un fort cisaillement pour ces îlots d'air froid sous le vent [[3]](https://www.dwd.de/DE/fachnutzer/luftfahrt/download/produkte/runwaymap/04_gefahren_im_gebirge.pdf?__blob=publicationFile&v=4). Au décollage, dans le lac d'air froid, c'est calme. Au-dessus, ça ne l'est pas.

**La percée arrive sans prévenir.** Quand le foehn perce jusqu'au sol, la tempête s'installe en peu de temps. La FSVL décrit une journée d'examen à la Büelen (NW) : moins de 4 hPa de surpression côté sud dans la prévision, pas un mot sur le foehn dans les bulletins, et pourtant au décollage un « vent de sud/sud-est obstiné, légèrement rafaleux ». La même année, des signes semblables ont précédé des accidents [[11]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Schwer_erkennbare_Foehnlagen.pdf).

Ce que tu ressens au décollage ne décrit donc souvent pas l'air dans lequel tu vas voler.

---

## Le cas : du 26 au 28 août 2026

Fin août 2026, une situation de foehn du sud s'est installée sur la Suisse. La différence de pression mesurée entre Lugano et Zürich a dépassé 7 hPa le soir du 27 et a atteint son maximum dans la nuit du 27 au 28, avec **9,1 hPa à 01:00**. Au Gütsch, des rafales jusqu'à **96 km/h** ont été mesurées la même nuit. L'après-midi du 28, la situation a tourné. Le 29, la surpression se trouvait côté nord.

<figure class="fig-wide">
  <p class="fig-kicker">Cas</p>
  <p class="fig-titel">Température, vent et différence de pression</p>
  <img src="/wetterkunde/foehn-temperatur-druck.png" alt="Trois graphiques linéaires du 26 au 29 août 2026 : pendant les heures de foehn, Altdorf est jusqu'à 7 degrés plus chaud que Lugano. Dans le panneau du vent, des rafales de 50 à 64 km/h soufflent déjà le 26 au Gütsch. À Altdorf, elles bondissent le 27 à 2 heures du matin de 14 à 50 km/h, avec une pointe à 84 km/h l'après-midi, et jusqu'à 96 km/h au Gütsch. Des flèches montrent un vent de sud-est pendant le foehn. En bas, la différence de pression Lugano moins Zürich, avec un pic à 9,1 hPa." width="1344" height="1216" loading="lazy" decoding="async">
  <figcaption>Source : MétéoSuisse OGD SwissMetNet, Altdorf, Lugano, Zürich-Fluntern, Gütsch · valeurs horaires du 26 au 29.08.2026, rafale = rafale d'une seconde la plus forte de l'heure. Graphique en allemand.</figcaption>
</figure>

Au Gütsch, sur la crête des Alpes, des rafales de 45 à 64 km/h soufflaient dès l'après-midi du 26 août, alors qu'à Altdorf elles restaient sous 20 km/h. À 2 heures du matin, le foehn est arrivé en bas : en une heure, les rafales sont passées à Altdorf de 14 à 50 km/h, et le vent a tourné au sud-est. L'après-midi du 27, elles ont atteint 84 km/h, au Gütsch même 96 km/h dans la nuit du 27 au 28. Après le foehn, l'après-midi du 28, le vent a tourné au nord-ouest à Altdorf, avec une rafale isolée de 88 km/h.

### Il est arrivé sec

Sur le versant sud des Alpes, dix stations de mesure, de Lugano à San Bernardino, n'ont reçu pratiquement **aucune pluie** jusqu'à minuit dans la nuit du 27 au 28 août (au plus 0,2 mm). Ce n'est qu'ensuite que sont tombés 10 à 32 mm. Les deux premiers jours de foehn étaient donc du foehn sec. Le 28 août à 04:00, Altdorf affichait **29,5 °C pour 36 pour cent d'humidité**, Lugano au même moment 22,1 °C pour 89 pour cent.

### Quand le foehn est arrivé, et où

Pour l'analyse, nous utilisons **20 points de vallée à foehn** : un par vallée à foehn, placé sur une station dotée d'un indice de foehn officiel, répartis entre le versant nord, le Valais et le versant sud des Alpes. Le tableau montre les 14 vallées du versant nord et du Valais. Aux six stations de vallée du versant sud, il n'y a pas eu de foehn, comme on s'y attend par foehn du sud.

| Vallée (station, altitude) | Heures de foehn 26.–29.08. | premier signal de foehn | rafale la plus forte pendant le foehn |
|---|---|---|---|
| Vallée de la Reuss (Altdorf, 438 m) | 26,8 h | 27.08. 01:50 | 84 km/h |
| Haut pays glaronais (Elm, 958 m) | 26,3 h | 26.08. 23:50 | 63 km/h |
| Vallée du Rhin saint-galloise (Vaduz, 457 m) | 24,7 h | 27.08. 12:00 | 82 km/h |
| Haut-Valais (Visp, 639 m) | 21,8 h | 26.08. 17:10 | 72 km/h |
| Sarganserland (Bad Ragaz, 497 m) | 20,2 h | 27.08. 01:40 | 73 km/h |
| Davos (1'594 m) | 17,5 h | 27.08. 10:50 | 50 km/h |
| Bas pays glaronais (Glarus, 517 m) | 16,5 h | 27.08. 14:30 | 55 km/h |
| Domleschg/Schams (Andeer, 987 m) | 13,7 h | 26.08. 13:30 | 60 km/h |
| Vallée du Rhin grisonne (Chur, 556 m) | 12,3 h + 10,7 h d'air mélangé | 27.08. 11:40 | 62 km/h |
| Bas-Valais (Evionnaz, 482 m) | 11,7 h | 26.08. 22:50 | 57 km/h |
| Haslital (Meiringen, 589 m) | 8,5 h, de nuit seulement | 27.08. 19:20 | 86 km/h |
| Vallée du Rhin inférieure (Altenrhein, 398 m) | 2,7 h, de nuit seulement | 27.08. 23:30 | 75 km/h |
| Valais central (Sion, 482 m) | 0,7 h | 27.08. 18:30 | 35 km/h |
| Chablais (Aigle, 381 m) | pas de foehn |  |  |

<figure class="fig-wide">
  <p class="fig-kicker">Cas</p>
  <p class="fig-titel">Quand le foehn a soufflé, et où</p>
  <img src="/wetterkunde/foehn-zeitleiste.png" alt="Chronologie des phases de foehn à 14 stations de vallée : Andeer et Visp dès l'après-midi et le soir du 26 août, les autres vallées dès le 27, Aigle sans foehn." width="1344" height="844" loading="lazy" decoding="async">
  <figcaption>Source : MétéoSuisse OGD, indice de foehn wcc006s0 (niveau 2), 14 stations de vallée · du 26 au 28.08.2026, heure locale. Graphique en allemand.</figcaption>
</figure>

**Le foehn est d'abord arrivé à l'intérieur des Alpes**, à Andeer l'après-midi du 26 et à Visp en début de soirée, avec au plus 3,0 hPa de différence de pression pendant la fenêtre de vol. **Des vallées voisines avaient une demi-journée d'écart** : Bad Ragaz a eu du foehn dès 01:40 dans la nuit du 26 au 27, Chur, à peine vingt kilomètres plus loin, dès 11:40. **En descendant la vallée, il faiblissait**, avec 24,7 heures à Vaduz et 2,7 à Altenrhein, au bord du lac de Constance. Elm, à 958 m, a eu dix heures de foehn de plus que Glarus, à 517 m.

### En haut la tempête, en bas le calme

Le graphique montre la rafale la plus forte dans la nuit du 27 au 28 août, entre 01:00 et 02:00, chaque fois au fond d'une vallée et au sommet le plus proche :

<figure class="fig-wide">
  <p class="fig-kicker">Cas</p>
  <p class="fig-titel">Vallée contre sommet</p>
  <img src="/wetterkunde/foehn-tal-gipfel.png" alt="Graphique en haltères de la rafale la plus forte entre 1 et 2 heures le 28 août : Interlaken 16 contre Jungfraujoch 72, Luzern 16 contre Pilatus 49, Davos 12 contre Weissfluhjoch 61, Engelberg 45 contre Titlis 98, Altdorf 58 contre Gütsch 93 km/h." width="1344" height="720" loading="lazy" decoding="async">
  <figcaption>Source : MétéoSuisse OGD SwissMetNet, pointe de rafale fkl010z1 · 28.08.2026, de 01:00 à 02:00. Graphique en allemand.</figcaption>
</figure>

À Interlaken et à Luzern, il n'y avait presque pas de vent au sol, au Pilatus près de 50 km/h. Entre les deux, à l'altitude des décollages, il n'y a pas de station. Ce qui s'y passait, on ne peut que l'encadrer.

---

## Quelle différence de pression faut-il pour le foehn ?

**Il n'y a pas de seuil fixe.** Avec 4 à 6 hPa de différence de pression à travers les Alpes, aucune des 20 vallées à foehn n'a eu, de 2020 à 2025, du foehn au fond de la vallée plus d'un quart du temps. Altdorf en a eu 10 pour cent du temps, Vaduz 6 et Glarus 1 pour cent. Même à partir de 10 hPa, le foehn n'est pas certain. Bad Ragaz et Altdorf ont eu du foehn dans environ neuf mesures sur dix, Andeer et Davos dans la moitié seulement. À l'inverse, à Andeer, 39 pour cent de toutes les heures de foehn sont tombées dans des périodes à moins de 4 hPa, à Davos 33 et à Visp 30 pour cent. La différence de pression montre qu'une situation de foehn est possible. Elle ne montre pas si le foehn atteint le sol dans ta vallée.

Un cas reste une anecdote. Nous avons donc analysé, pour les 20 points de vallée, les valeurs à dix minutes de **2020 à 2025** et attribué chaque mesure à une classe de pression. La référence est la différence de pression mesurée Lugano moins Zürich, inversée pour les vallées à foehn du nord. Le tableau montre pendant quel pourcentage du temps le foehn soufflait au fond de la vallée (indice 2), et quelle part de toutes les heures de foehn est survenue avec moins de 4 hPa.

<figure class="fig-wide">
  <p class="fig-kicker">Statistique</p>
  <p class="fig-titel">Le foehn par classe de pression</p>
  <img src="/wetterkunde/foehn-druckklassen.png" alt="Graphique linéaire 2020 à 2025 : part du temps avec du foehn au fond de la vallée, par classe de pression. À 4 à 6 hPa, Altdorf 9,9 pour cent. À partir de 10 hPa, Bad Ragaz 92,7, Altdorf 87,9, Glarus 53,4, Andeer 49,5, Altenrhein 29,1 pour cent." width="1344" height="774" loading="lazy" decoding="async">
  <figcaption>Source : MétéoSuisse OGD, indice de foehn et pression QFF Lugano, Zürich-Fluntern · valeurs à dix minutes 2020 à 2025. Graphique en allemand.</figcaption>
</figure>

| Vallée (station) | Versant | Heures de foehn par an | Foehn à 4–6 hPa | Foehn dès 10 hPa | Heures de foehn sous 4 hPa |
|---|---|---|---|---|---|
| Vallée de la Reuss (Altdorf) | Nord, foehn du sud | 350 | 10 % | 88 % | 4 % |
| Sarganserland (Bad Ragaz) | Nord, foehn du sud | 478 | 19 % | 93 % | 8 % |
| Vallée du Rhin grisonne (Chur) | Nord, foehn du sud | 341 | 14 % | 64 % | 17 % |
| Vallée du Rhin saint-galloise (Vaduz) | Nord, foehn du sud | 282 | 6 % | 84 % | 4 % |
| Vallée du Rhin inférieure (Altenrhein) | Nord, foehn du sud | 61 | 0,4 % | 29 % | 3 % |
| Haut pays glaronais (Elm) | Nord, foehn du sud | 360 | 16 % | 70 % | 10 % |
| Bas pays glaronais (Glarus) | Nord, foehn du sud | 122 | 1 % | 53 % | 1 % |
| Haslital (Meiringen) | Nord, foehn du sud | 184 | 4 % | 65 % | 4 % |
| Domleschg/Schams (Andeer) | Nord, foehn du sud | 472 | 21 % | 50 % | 39 % |
| Davos | Nord, foehn du sud | 350 | 15 % | 49 % | 33 % |
| Haut-Valais (Visp) | Valais | 477 | 23 % | 55 % | 30 % |
| Valais central (Sion) | Valais | 61 | 2 % | 21 % | 9 % |
| Bas-Valais (Evionnaz) | Valais | 252 | 8 % | 71 % | 11 % |
| Chablais (Aigle) | Valais | 71 | 0,1 % | 40 % | 2 % |
| Léventine (Piotta) | Sud, foehn du nord | 827 | 21 % | 48 % | 21 % |
| Val Blenio (Acquarossa) | Sud, foehn du nord | 619 | 9 % | 73 % | 4 % |
| Vallemaggia (Cevio) | Sud, foehn du nord | 393 | 5 % | 54 % | 2 % |
| Plaine de Magadino (Magadino) | Sud, foehn du nord | 355 | 4 % | 54 % | 1 % |
| Basse Mesolcina (Grono) | Sud, foehn du nord | 228 | 3 % | 36 % | 2 % |
| Haute Mesolcina (San Bernardino) | Sud, foehn du nord | 382 | 9 % | 13 % | 39 % |

### Ce que dit le tableau

**À 4 à 6 hPa, le foehn au fond de la vallée est l'exception.** Dans aucune des 20 vallées, le foehn n'a soufflé plus d'un quart du temps dans cette classe. À Altdorf, c'était 10 pour cent, à Vaduz 6, à Glarus 1.

**Même à 10 hPa et plus, le foehn n'est pas certain.** Avec de si grandes différences, Bad Ragaz et Altdorf ont eu du foehn dans environ neuf mesures sur dix, Andeer et Davos dans la moitié seulement, Altenrhein dans moins d'un tiers.

**À l'intérieur des Alpes, le foehn arrive aussi sans 4 hPa.** À Andeer, 39 pour cent de toutes les heures de foehn sont tombées dans des périodes à moins de 4 hPa, à Davos 33, à Visp 30. Pour le Valais, l'axe Lugano et Zürich n'est de toute façon pas le bon : là, le foehn souffle du sud-est.

**L'écart entre vallées voisines est énorme.** Bad Ragaz a huit fois plus de foehn qu'Altenrhein, Elm trois fois plus que Glarus, Visp huit fois plus que Sion.

La mesure confirme ainsi ce que les formateurs écrivent depuis des années. Le DHV cite trois à quatre hectopascals comme règle empirique courante, et décrit dans le même article un jour de foehn avec à peine plus de deux hectopascals [[12]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/F%C3%B6hn/1_2023_240_Misstraut_den_Foehndiagrammen.pdf). Un autre article du DHV met en garde contre les « valeurs limites locales faites maison » [[13]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/F%C3%B6hn/4_2017_204_foehn_ist_nicht_gleich_foehn.pdf), et la FSVL cite des régions comme Marbach (LU), où l'on vole avec bien plus de 4 hPa sans que le foehn perce [[11]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Schwer_erkennbare_Foehnlagen.pdf). Aucune des pages de MétéoSuisse que nous avons vérifiées ne mentionne un seuil de 4 hPa.

Le chiffre n'est pas sans valeur pour autant. À partir de 4 hPa, une situation de foehn devient possible. À partir de 8 hPa, le foehn est fréquent dans les grandes vallées à foehn. Mais il ne dit pas **si le foehn atteint le sol dans ta vallée, ni quand**.

---

## Et qu'ont montré les modèles de prévision ?

**Les modèles montrent la direction du vent de façon fiable, mais un vent trop faible.** Lors de l'épisode de foehn du 26 au 28 août 2026, ICON-CH1 et ICON-CH2 ont montré, à 13 stations de vallée, un vent de la bonne direction dans 92 à 96 pour cent des heures de foehn. Leurs rafales étaient en médiane presque 8 km/h sous la mesure, l'air environ 8 points de pourcentage trop humide et presque 1,5 degré trop frais. Si l'on exige à la fois la direction du foehn, un vent fort et un air sec, ICON-CH1 a reconnu 69 heures de foehn sur 100 et ICON-CH2 65, les valeurs mesurées de la station 90. Si l'on ne lit que la direction et l'air sec, on reconnaît 84 à 85 heures de foehn sur 100. En contrepartie, dans presque une heure sur deux ainsi marquée, le foehn n'est pas descendu jusqu'au fond de la vallée.

Les modèles ne connaissent pas d'indice de foehn. Ils livrent des valeurs météo ordinaires : direction du vent, vent moyen, rafales, humidité et température. Nous avons récupéré ces valeurs d'**ICON-CH1** (maille de 1 km) et d'**ICON-CH2** (2,1 km) de MétéoSuisse, heure par heure, à l'emplacement des 13 stations de vallée où le foehn a soufflé. Puis nous les avons placées à côté des mêmes grandeurs mesurées par la station. C'est l'indice de foehn qui décide si le foehn a réellement soufflé.

### Dans quelle mesure les valeurs concordent-elles ?

Médiane sur les 213 heures de foehn mesurées :

| Grandeur | mesuré | ICON-CH1 | ICON-CH2 |
|---|---|---|---|
| Vent de la direction de foehn de la vallée | 97 % des heures | 92 % | 96 % |
| Vent moyen | 24 km/h | 21 km/h | 18 km/h |
| Rafale (la plus forte de l'heure) | 51 km/h | 41 km/h | 39 km/h |
| Humidité relative | 38 % | 47 % | 48 % |
| Température | 28,0 °C | 26,3 °C | 26,1 °C |

**La direction du vent est presque toujours juste.** Les deux modèles ont montré un vent de la bonne direction dans 92 à 96 pour cent des heures de foehn. **Le vent est trop faible.** Heure par heure, les rafales du modèle étaient en médiane presque 8 km/h sous la mesure, le vent moyen 3 à 4 km/h. **L'air est trop humide et trop frais.** Les modèles le montraient environ 8 points de pourcentage plus humide et presque 1,5 degré plus froid que la mesure.

### Quel signe trahit le foehn dans les données de prévision ?

Le foehn au fond de la vallée laisse une signature : du vent de la direction du foehn, fort et sec. Nous avons testé chaque signe séparément, d'abord sur les valeurs mesurées de la station, puis sur les valeurs des modèles. Les seuils (vent moyen dès 20 km/h ou rafales dès 30 km/h, humidité de 60 pour cent au plus) sont notre propre choix.

<figure class="fig-wide">
  <p class="fig-kicker">Prévision</p>
  <p class="fig-titel">Quel signe trahit le foehn ?</p>
  <img src="/wetterkunde/foehn-merkmale.png" alt="Deux graphiques en barres par signe, pour les valeurs mesurées de la station, ICON-CH1 et ICON-CH2. Le gris n'est pas l'indice de foehn, mais la même règle appliquée aux valeurs mesurées de la station. Détections, sur 100 heures de foehn selon l'indice de foehn, avec le signe : direction du vent 97, 92, 96 ; vent fort 95, 72, 69 ; air sec 97, 91, 87 ; les trois ensemble 90, 69, 65. Fausses alertes, sur 100 heures avec le signe, sans foehn : direction du vent 67, 69, 68 ; vent fort 47, 43, 51 ; air sec 53, 55, 56 ; les trois ensemble 27, 25, 29." width="1344" height="1138" loading="lazy" decoding="async">
  <figcaption>Source : mesure MétéoSuisse OGD, 13 stations de vallée, l'indice de foehn décide s'il y a eu du foehn · modèles ICON-CH1 et ICON-CH2 via Open-Meteo Historical Forecast · du 26 au 28.08.2026. Graphique en allemand.</figcaption>
</figure>

**Pris isolément, aucun signe ne suffit.** Le vent de la direction du foehn était présent dans presque toutes les heures de foehn, mais sur 100 heures avec cette direction, environ 68 étaient sans foehn. **Ensemble, ils fonctionnent.** Dans les valeurs mesurées de la station, la combinaison détecte 90 heures de foehn sur 100, et seules 27 heures sur 100 avec les trois signes sont de fausses alertes. Dans les valeurs des modèles, on obtient 69 détections pour ICON-CH1 et 65 pour ICON-CH2. La perte vient presque entièrement du vent : les modèles montrent le foehn de la bonne direction et le plus souvent assez sec, mais trop faible.

### Heure par heure, vallée par vallée

<figure class="fig-wide">
  <p class="fig-kicker">Prévision</p>
  <p class="fig-titel">Mesure contre ICON-CH1 et ICON-CH2</p>
  <img src="/wetterkunde/foehn-modelle-taeler.png" alt="Pour chaque vallée, trois barres temporelles : les heures de foehn mesurées et les heures de foehn dans ICON-CH1 et dans ICON-CH2. ICON-CH1 a montré 148 des 213 heures de foehn mesurées, ICON-CH2 139." width="1344" height="1286" loading="lazy" decoding="async">
  <figcaption>Source pour la mesure : indice de foehn MétéoSuisse, heure = foehn dans au moins 3 des 6 valeurs à dix minutes · modèles : ICON-CH1 et ICON-CH2 (MétéoSuisse) via Open-Meteo Historical Forecast · du 26 au 28.08.2026. Graphique en allemand.</figcaption>
</figure>

Le graphique montre les trois signes ensemble. ICON-CH1 les a montrés dans 148 des 213 heures de foehn mesurées, ICON-CH2 dans 139. À Vaduz, ICON-CH1 a trouvé 24 heures de foehn et ICON-CH2 les 25, à Davos ICON-CH1 13 et ICON-CH2 14 sur 17.

À Altdorf, le matin du 27 août (de 02 à 10 heures), aucun des deux modèles n'a montré une seule heure de foehn. À Visp aussi, le soir du 26 août (de 17 à 24 heures), le foehn manquait dans les deux modèles. À Elm, dans la nuit du 26 au 27, seul ICON-CH2 a montré une heure. Sur les 9 heures de foehn à Meiringen, ICON-CH1 en a montré 4, ICON-CH2 une seule.

À l'inverse, ICON-CH2 montrait du foehn à Chur dès 23 heures le 26 août. La mesure ne l'a vu souffler qu'à partir de la fin de matinée du 27, soit 17 heures de trop. Les deux modèles ont montré du foehn à Bad Ragaz dans la nuit et le matin du 28, et ICON-CH1 à Evionnaz le matin du 27. Au total, il y a eu 49 heures de modèle chez ICON-CH1 et 57 chez ICON-CH2 sans foehn mesuré.

<figure class="fig-wide">
  <p class="fig-kicker">Prévision</p>
  <p class="fig-titel">Altdorf : mesure contre les deux modèles</p>
  <img src="/wetterkunde/foehn-altdorf-modelle.png" alt="Graphique linéaire d'Altdorf du 26 au 28 août : rafales et humidité mesurées contre ICON-CH1 et ICON-CH2. Le matin du 27, 52 à 60 km/h mesurés, dans les modèles au plus 21 et 27 km/h." width="1344" height="950" loading="lazy" decoding="async">
  <figcaption>Source pour la mesure : MétéoSuisse OGD, Altdorf (rafale d'une seconde la plus forte de l'heure, humidité à l'heure pleine) · modèles : ICON-CH1 et ICON-CH2 via Open-Meteo Historical Forecast · du 26 au 28.08.2026. Graphique en allemand.</figcaption>
</figure>

C'est à Altdorf que cela se voit le plus nettement. Pendant la phase de foehn du matin du 27 août, on a mesuré des rafales de 52 à 60 km/h pour environ 40 pour cent d'humidité. ICON-CH1 montrait au plus 21 km/h, ICON-CH2 au plus 27 km/h, les deux avec 50 à 78 pour cent d'humidité. À partir de midi, les deux se rapprochaient de la mesure : 84 km/h mesurés entre 14 et 15 heures, 74 km/h pour ICON-CH2, 63 km/h pour ICON-CH1.

Pendant le foehn du 27 à midi au 28 au matin aussi, les deux modèles montraient l'air d'Altdorf plus humide qu'il ne l'était : 33 à 38 pour cent mesurés, 42 à 52 pour ICON-CH1, 40 à 68 pour cent pour ICON-CH2. Qui cherche l'air sec du foehn dans les données de prévision le trouve donc moins souvent qu'il ne souffle réellement.

Les modèles montrent donc la situation de foehn, mais trop faible et souvent à la mauvaise heure. Quand ils manquaient le foehn, ils montraient malgré tout, dans environ la moitié des cas, du vent du sud et de l'air sec. Seul le vent était trop faible (ICON-CH1 34 des 65 heures manquées, ICON-CH2 39 sur 74).

---

## Ce que tu en retiens pour planifier tes vols

La prévision montre de façon fiable si une situation de foehn arrive. Si le foehn atteint le sol dans ta vallée, et quand, elle ne le montre qu'approximativement. Utilise-la donc pour décider quels jours tu dois regarder de près. Ce qui se passe vraiment le jour du vol, ce sont les valeurs mesurées et ta propre appréciation sur place qui te le montrent.

### 1. La veille : est-ce une situation de foehn ?

- **Différence de pression Lugano moins Zürich, inversée par foehn du nord.** À partir de 4 hPa, le foehn est possible, à partir de 8 hPa il est fréquent dans les grandes vallées à foehn. À l'intérieur des Alpes, il arrive aussi sous 4 hPa.
- **Vent à l'altitude des cols, vers 2'000 m.** Par foehn du sud, la FSVL conseille de vérifier si le vent y souffle du sud et si l'air est plus frais côté sud [[11]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Schwer_erkennbare_Foehnlagen.pdf), avec un signal d'alarme dès 1 à 2 degrés [[7]](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Entscheidungsstrategie_Meteo_V10.pdf). Par foehn du nord, c'est la même chose avec du vent du nord et de l'air plus frais côté nord.

### 2. Pour ta vallée : lis la prévision comme un avertissement

- **Du vent de la direction du foehn et de l'air sec suffisent comme avertissement.** Si la prévision montre dans ta vallée du vent de la direction du foehn et une humidité sous 60 pour cent, compte avec du foehn, même si le vent du modèle est faible. Dans notre cas, cette lecture aurait reconnu 84 à 85 heures de foehn sur 100. En contrepartie, dans presque une heure sur deux ainsi marquée, le foehn n'est pas descendu jusqu'au fond de la vallée.
- **Les rafales du modèle sont une limite inférieure.** En médiane, elles étaient presque 8 km/h sous la mesure, le matin du 27 août à Altdorf de 29 à 57 km/h.
- **L'heure est incertaine.** Planifie pour être au sol avant la percée la plus précoce possible, pas avant la plus probable.
- **La prévision avertit, elle ne décide pas.** Même avec cette lecture, 15 à 16 heures de foehn sur 100 sont restées sans avertissement. Pas d'avertissement ne veut donc pas dire pas de foehn. Si tu peux voler, tu le décides sur place, au décollage et avec les valeurs mesurées du moment.

### 3. Le jour du vol : regarde les valeurs mesurées

- **L'arrivée du foehn se voit.** Quand le foehn arrive dans la vallée, les rafales bondissent, le vent tourne dans la direction du foehn et l'humidité chute. À Altdorf, le 27 août, les rafales sont passées en une heure de 14 à 50 km/h, à Glarus de 8 à 39 km/h, et l'humidité y est tombée de 62 à 36 pour cent.
- **Compare vallée et sommet.** Un vent calme dans la vallée et un vent fort de la direction du foehn au sommet, cela signifie souvent « foehn au-dessus du lac d'air froid ». Au Gütsch, il soufflait déjà 45 à 64 km/h le 26 août, alors qu'Altdorf était encore calme.
- **Regarde les vallées voisines.** Les vallées qui reçoivent le foehn plus tôt servent d'alerte précoce. Dans ce cas, c'étaient Andeer et Visp, une demi-journée avant Altdorf.
- **Abrité du foehn ne veut pas dire sans foehn.** Un décollage à l'abri du vent peut être calme pendant que le foehn passe au-dessus.

---

## Limites de cette analyse

- **Le fond de vallée n'est pas le décollage.** L'indice de foehn vaut à la station, entre 203 et 1'639 m. Le foehn au-dessus d'un lac d'air froid y compte comme « pas de foehn », mais il peut souffler à l'altitude du décollage.
- **Une seule paire de pression pour toutes les vallées.** Nous avons utilisé partout Lugano moins Zürich. Pour le Valais et pour les vallées intra-alpines, un autre axe conviendrait mieux.
- **Toutes les heures, indice 2 seulement.** La statistique contient le jour et la nuit. L'air de foehn mélangé (indice 1) n'est pas compté, ce qui sous-estime la durée du foehn à Chur et à Sion.
- **Les critères du foehn du nord ne sont pas publiés.** La méthode documentée est celle du foehn du sud [[10]](https://www.meteoswiss.admin.ch/dam/jcr:3ed2aec8-0901-417a-acc3-8be11cce440a/Foehnindex_Arbeitsbericht_223_Automatisiertes_Verfahren_zur_Bestimmung_von_Foehn_in_Alpentaelern_de.pdf).
- **Les valeurs des modèles ont été récupérées après coup.** L'archive d'Open-Meteo enchaîne les runs les plus récents d'ICON-CH1 et d'ICON-CH2. L'échéance est donc plus courte que pour une prévision de la veille. Une vraie prévision ferait probablement plutôt moins bien. Les signes de foehn dans le modèle, nous les avons fixés nous-mêmes. Avec d'autres seuils, les pourcentages seraient différents.
- **Un cas n'est pas un climat.** La comparaison avec les modèles repose sur une seule situation de foehn du sud, celle du 26 au 28 août 2026.
- **Nous n'avons pas mesuré la turbulence.** Les stations mesurent le vent au sol. Sur les rotors et le cisaillement en air libre, elles ne disent rien.

---

## Questions fréquentes

**À partir de combien de hPa y a-t-il du foehn ?**
Il n'y a pas de seuil fixe. À Altdorf, à 4 à 6 hPa, le foehn n'a soufflé au fond de la vallée que 10 pour cent du temps, à partir de 10 hPa 88 pour cent du temps. À Andeer, Davos ou Visp, environ un tiers de toutes les heures de foehn sont survenues avec moins de 4 hPa.

**Pourquoi le foehn est-il dangereux pour les parapentistes ?**
Parce qu'il est fort et turbulent, et qu'on ne le sent souvent pas au décollage. Sous le vent se forment des ondes et des rotors jusqu'au sol. À la limite du lac d'air froid, le vent cisaille. Et quand le foehn perce, la tempête arrive vite.

**Comment reconnaître le foehn sans mur de foehn ?**
À l'air et aux valeurs mesurées. L'air de foehn est chaud et très sec. Plusieurs indices le trahissent : un vent fort de la direction du foehn aux stations de sommet alors que la vallée est calme, de l'air plus frais côté au vent à l'altitude des cols, et du foehn dans les vallées à foehn connues. Par foehn du sud, par exemple à Altdorf ou à Vaduz, par foehn du nord, par exemple en Léventine.

**Le foehn a-t-il besoin de pluie côté au vent ?**
Non. Lors du foehn du sud des 26 et 27 août 2026, il n'est pratiquement pas tombé de pluie à dix stations du versant sud, et Altdorf avait pourtant 29,5 °C à quatre heures du matin.

**Quelle est la différence entre foehn du sud et foehn du nord ?**
Le foehn du sud souffle sur le versant nord des Alpes, avec un courant venant du sud. Le foehn du nord souffle sur le versant sud des Alpes, avec un courant venant du nord.

**Une prévision météo peut-elle prédire le foehn dans la vallée ?**
En partie. Les modèles n'ont pas d'indice de foehn, mais ils ont la direction du vent, le vent et l'humidité. En lisant les trois ensemble, ICON-CH1 a montré 69 pour cent et ICON-CH2 65 pour cent des heures de foehn mesurées. La direction était presque toujours juste, mais le vent du modèle était trop faible.

---

## Sources et données

- **[1]** MétéoSuisse, [Wetter und Klima von A bis Z: Föhn](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehn.html)
- **[2]** Steinacker, R. (2006) : [Alpiner Föhn, eine neue Strophe zu einem alten Lied](https://www.meteoschweiz.admin.ch/dam/jcr:d5bead26-9bd3-4b8b-a88c-6f08e4de8e3a/Steinacker_Foehn_Promet_32_1-2_de.pdf). promet 32 (1/2), 3–10, DWD
- **[3]** Deutscher Wetterdienst, aviation : [Wetterabhängige Gefahren im Bereich von Gebirgen](https://www.dwd.de/DE/fachnutzer/luftfahrt/download/produkte/runwaymap/04_gefahren_im_gebirge.pdf?__blob=publicationFile&v=4)
- **[4]** Würsch, M., Sprenger, M. (2015) : [Swiss and Austrian foehn revisited: A Lagrangian-based analysis](https://doi.org/10.1127/metz/2015/0647). Meteorologische Zeitschrift 24 (3), 225–242
- **[5]** Jansing, L. et al. (2022) : [Classification of Alpine south foehn based on 5 years of kilometre-scale analysis data](https://wcd.copernicus.org/articles/3/1113/2022/). Weather and Climate Dynamics 3, 1113–1138
- **[6]** Deutscher Wetterdienst, [Wetterlexikon: Föhn](https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv3=100882&lv2=100784)
- **[7]** FSVL, [Entscheidungsstrategie Meteo V10](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Entscheidungsstrategie_Meteo_V10.pdf)
- **[8]** Gutermann, T. et al. (2012) : [Föhnklimatologie Altdorf: die lange Reihe (1864–2008)](https://www.meteoswiss.admin.ch/dam/jcr:698b5cdf-92cf-491a-8d88-c844113aa8d6/Foehnklimatologie_Altdorf_die_lange_Reihe_1864-2008_und_ihre_Weiterfuehrung_Vergleich_mit_anderen_Stationen_de.pdf). Rapport technique MétéoSuisse 241
- **[9]** MétéoSuisse, [Wetter und Klima von A bis Z: Föhnindex](https://www.meteoschweiz.admin.ch/wetter/wetter-und-klima-von-a-bis-z/foehnindex.html)
- **[10]** Dürr, B. (2008) : [Automatisiertes Verfahren zur Bestimmung von Föhn in Alpentälern](https://www.meteoswiss.admin.ch/dam/jcr:3ed2aec8-0901-417a-acc3-8be11cce440a/Foehnindex_Arbeitsbericht_223_Automatisiertes_Verfahren_zur_Bestimmung_von_Foehn_in_Alpentaelern_de.pdf). Rapport de travail MétéoSuisse 223
- **[11]** Oechslin, R., Stocker, B. : [Schwer erkennbare Föhnlagen](https://www.shv-fsvl.ch/fileadmin/files/redakteure/Allgemein/Sicherheit/Sicherheit/Schwer_erkennbare_Foehnlagen.pdf). Swiss Glider 03/04 2025, FSVL
- **[12]** Haas, L. : [Misstraut den Föhndiagrammen](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/F%C3%B6hn/1_2023_240_Misstraut_den_Foehndiagrammen.pdf). DHV-Magazin 240 (2023)
- **[13]** Schwanitz, V. : [Föhn ist nicht gleich Föhn](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/F%C3%B6hn/4_2017_204_foehn_ist_nicht_gleich_foehn.pdf). DHV-Magazin 204 (2017)

**Valeurs mesurées :** MétéoSuisse Open Government Data, SwissMetNet, valeurs à dix minutes (indice de foehn, rafales, vent, température, humidité, précipitations, pression atmosphérique). Cas du 26 au 29 août 2026 à 34 stations, statistique 2020 à 2025 à 20 stations de vallée ainsi qu'à Lugano et Zürich-Fluntern ([documentation](https://opendatadocs.meteoswiss.ch/a-data-groundbased/a1-automatic-weather-stations)).

**Prévision :** ICON-CH1 et ICON-CH2 (MétéoSuisse) via l'[API Historical Forecast d'Open-Meteo](https://open-meteo.com/en/docs/historical-forecast-api), valeurs horaires à 14 stations de vallée, dont 13 avec du foehn, du 26 au 28 août 2026. Les données brutes et le script de calcul se trouvent dans le dépôt marketing, sous `2-ausfuehrung/wetterkunde/belege/foehn/`.

---

## Comment Wingcast s'en sert

Wingcast lit chaque matin les modèles météo pour les décollages suisses et décrit en clair ce qu'ils signifient pour ton décollage. Pour le foehn, cela veut dire que nous ne regardons pas seulement la différence de pression dans les données des modèles, mais aussi le vent, la direction et l'humidité dans les vallées à foehn elles-mêmes. Cette analyse montre jusqu'où on peut se fier à ces données. Wingcast est un **outil d'aide à la décision** : nous livrons les données et une appréciation, la décision t'appartient.

→ [À quoi ressemble un front de rafales mesuré, et ce qu'en disait le modèle](/fr/wetterkunde/boeenfront)
→ [Dust devils : comment reconnaître un jour à dusties](/fr/wetterkunde/staubteufel)
→ [Tous les sujets de météorologie](/fr/wetterkunde)
→ [Ouvrir Wingcast gratuitement et vérifier ton spot](https://app.wingcast.ch/?utm_source=blog&utm_medium=wetterkunde&utm_campaign=foehn)

---

<!-- Traduction française de la version allemande (2026-10-11). La version allemande fait foi. -->
