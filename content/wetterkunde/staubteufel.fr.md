---
titel: "Dust devils en parapente : comment reconnaître un jour à dusties"
slug: staubteufel
ziel_url: /fr/wetterkunde/staubteufel
ziel_keyword: "dust devil parapente"
neben_keywords:
  - "tourbillon de poussière parapente"
  - "dust devil suisse"
  - "tourbillon thermique décollage"
  - "petite trombe"
  - "danger dust devil"
  - "tourbillon au décollage parapente"
typ: pillar
hub: /wetterkunde
sprache: fr-CH
status: published
veroeffentlicht: 2026-08-20
autor: "Maurin (Founder & Pilot, Wingcast)"
stand: 2026-08-20
meta_title: "Dust devils en parapente – reconnaître les jours à risque"
meta_description: "Aucune prévision ne montre un dust devil. Mais on peut calculer si c'est un jour à risque : 490 sites suisses, 74 stations de mesure, un été."
schema:
  - Article
  - FAQPage
  - BreadcrumbList
og_bild: /og/wetterkunde-staubteufel.fr.png
video: /wetterkunde/staubteufel-entstehung.fr.mp4   # vidéo Remotion (fig. 1), rendue avec lang:fr
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

# Dust devils en parapente : comment reconnaître un jour à dusties

> **TL;DR** — Un dust devil — en français tourbillon de poussière, en allemand Staubteufel — est un tourbillon en rotation d'origine purement thermique, **de 10 à 100 m de large**, qui vit en Europe centrale le plus souvent **moins d'une minute** [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf). Il est dangereux parce qu'un côté de ton aile reçoit du vent arrière pendant que l'autre reçoit du vent de face — dans un calcul de modèle idéalisé, environ **69 km/h de différence sur 10 m d'envergure**. Et en Suisse, la poussière qui le rendrait visible manque le plus souvent — au Schwyberg FR, en 2025, un tourbillon invisible a arraché un pilote au décollage, sur un terrain herbeux. **Aucune prévision ne voit le tourbillon individuel.** Ce qui se calcule, c'est l'étape d'avant : est-ce qu'aujourd'hui est un jour à dusties, où, et à quelle heure. Nous l'avons calculé pour **490 sites de décollage suisses sur 69 jours d'été** et vérifié à **74 stations de mesure** : zones basses et sèches, pic **vers 13 heures**, le Valais en tête — et, dans nos données, la règle empirique du décollage décrit mieux la Suisse que le critère de la littérature scientifique.

Sur les dust devils, chaque manuel contient le même paragraphe : sol brûlant, air ascendant, impulsion de rotation, terminé. Ce qui manque, ce sont des chiffres pour la Suisse.

Le sujet est d'une actualité rare : la **FSVL** en a fait la couverture du numéro de juillet/août 2026 du *Swiss Glider* — avec le récit d'un pilote gravement accidenté [[12]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/) et une météorologie de Roger Oechslin, le responsable météo de la fédération [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). S'y ajoutent deux textes du DHV [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf) [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf) et un de Lucian Haas [[10]](https://lu-glidz.blogspot.com/2018/09/meteowissen-dust-devil.html). Tous nomment les ingrédients, et tous les nomment correctement — mais personne n'a calculé **à quelle fréquence** ils se réunissent en Suisse, **où** et **à quelle heure**. C'est exactement ce que fait cet article. Il ne contredit la FSVL nulle part ; il la chiffre.

*Question de langue : le tourbillon s'appelle en français tourbillon de poussière, en météorologie petite trombe (Kleintrombe). Au décollage, tout le monde dit pourtant **dust devil** ou **dusty** — et c'est ainsi que nous l'appelons ici aussi.*

---

## Ce qu'est un dust devil

Le service météorologique allemand (DWD) le décrit comme un « petit tourbillon de vent étroitement délimité », qui naît « le plus souvent en été par l'ascension soudaine d'une bulle d'air brûlant, chauffée au niveau du sol » [[3]](https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv2=102248&lv3=102604).

**Un dust devil n'est pas une tornade.** La différence n'est pas la taille, mais le moteur : une tornade est accrochée à un nuage d'orage et s'étend en continu jusqu'à la base du nuage ; un dust devil n'a **aucune connexion avec un nuage** et est entraîné uniquement par le sol surchauffé [[4]](https://www.sturmarchiv.ch/index.php/Tornados). Il se forme donc aussi par ciel sans nuages — le thermique bleu est même sa météo préférée.

Deux choses comptent plus pour toi que la définition. **Le sens de rotation est aléatoire :** à cette échelle, la rotation terrestre ne joue aucun rôle, la rotation naît de l'afflux d'air aléatoire [[3]](https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv2=102248&lv3=102604) — ce qui règle au passage le mythe des « colonnes thermiques tournant surtout à gauche » [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf). Et **la poussière n'est pas le tourbillon**, elle ne fait que le rendre visible. Au-dessus de l'herbe, du rocher ou d'un sol humide, le même tourbillon continue de tourner, invisible ; la poussière agit, comme le formule Lucian Haas, « comme un amplificateur » [[10]](https://lu-glidz.blogspot.com/2018/09/meteowissen-dust-devil.html).

### Et en Suisse ? La plupart du temps, tu ne le vois pas

C'est le point qui distingue la Suisse des images du Maroc et de l'Arizona — et il ne figure dans presque aucun manuel. **C'est le sol qui doit d'abord fournir la poussière.** Les sites de décollage et les prairies d'atterrissage suisses sont des prairies, des alpages, de la forêt ou du rocher ; il n'y traîne presque pas de matériau meuble. Le tourbillon se forme quand même — il ne se montre simplement pas.

> ⚠️ **Schwyberg FR, 2 juillet 2025, 13 heures.** Un pilote avec 45 ans de pratique se tient au décollage à **1'600 m**, accroché, les commandes pas encore en main. Le terrain : herbeux, pas de rochers abrupts, connu depuis des décennies. Des semaines sans pluie, chaud, sans vent, stratification stable. Le tourbillon arrive **par-derrière et invisible**, l'arrache à 25–30 m de hauteur — l'instrument de vol enregistre 5 m/s de montée et 60 km/h — et le laisse gravement blessé sous le vent. Sa phrase à ce sujet : « Les dust devils n'étaient pas prévus dans mon modèle mental » [[12]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/).

Chez nous, un tourbillon ne devient visible pratiquement que là où traîne du matériau meuble : sur les champs moissonnés, le gravier, les chantiers et les places de sable — le cas suisse le mieux documenté a traversé pendant plusieurs minutes, en 2012, la place de sable au centre du village de Schüpfheim LU [[9]](https://www.sturmarchiv.ch/index.php/20120530_01_Staubteufel_Sch%C3%BCpfheim) —, sur les éboulis et les pistes de ski déneigées, et de manière générale en Valais.

Il en découle deux choses. **« Je n'en ai jamais vu ici » n'est pas un argument** — cela dit quelque chose du terrain, pas des tourbillons. Le DHV note pour les Alpes : « Dans les Dolomites en particulier, des situations dangereuses dues à des dust devils invisibles ou à peine visibles se sont déjà multipliées » [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf). Et **les signalements d'observations ne valent pas comme statistique**, parce qu'on signale ce qu'on voit. C'est pourquoi, plus bas, nous calculons avec des conditions plutôt qu'avec des observations.

### Comment il se forme

En Europe centrale, un dust devil naît le plus souvent d'un décollement thermique vigoureux — souvent par thermique bleu — au-dessus d'une surface dégagée et surchauffée [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf) — simplifié en cinq étapes :

1. **Le sol surchauffe.** Juste au-dessus de la surface se trouve une couche d'air mince et brûlante. Elle veut monter, mais elle n'arrive pas à se libérer.
2. **La bulle se détache.** Dès que l'air surchauffé se libère, il monte sous forme de bulle.
3. **En dessous se forme une dépression locale.** Là où l'air chaud se trouvait encore à l'instant, il manque au sol : il y reste une **basse pression**. Tout autour, l'air est à une pression plus élevée — et l'air s'écoule toujours de la haute vers la basse pression. Il afflue donc de tous les côtés vers ce trou.
4. **L'afflux est inégal, et il en naît une rotation.** Une pente, une haie, une légère composante de vent arrière suffisent. L'air ne court pas en ligne droite vers le trou, mais **passe à côté**, et se met à tourner.
5. **Le tourbillon est étiré et devient ainsi rapide.** Le thermique tire le tube en rotation en longueur, sa section rétrécit — et la rotation accélère énormément, le même effet que chez une patineuse qui ramène les bras au corps.

Le tourbillon peut alors s'auto-entretenir un certain temps : la rotation rapide crée dans le noyau une **basse pression encore plus marquée**, qui aspire encore plus d'air. C'est précisément cette pression du noyau qui détermine tout à l'heure la vitesse du vent. Et il s'éteint quand l'alimentation se coupe — par exemple parce que de l'air plus frais entre dans son pied, parce qu'il passe sur un sol plus humide ou parce qu'une rafale le cisaille [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). C'est pourquoi il vit chez nous le plus souvent moins d'une minute. On ne peut pas s'y fier : là où l'un s'est formé, le suivant se forme.

<figure class="fig-wide">
  <p class="fig-kicker">Formation</p>
  <p class="fig-titel">Du sol surchauffé au tourbillon en rotation</p>
  <video src="/wetterkunde/staubteufel-entstehung.fr.mp4" autoplay muted loop playsinline preload="metadata" width="1920" height="1080" aria-label="Déroulement animé comme un film en un seul lieu, avec carte de texte en bas à gauche : le soleil chauffe un sol sec, une bulle d'air chaud se détache et monte, en dessous reste une dépression, l'air afflue inégalement des deux côtés, et le tourbillon grandit en dust devil étiré tournant de plus en plus vite."></video>
  <figcaption>Un déroulement comme au cinéma, tout au même endroit ; la carte de texte en bas à gauche explique chaque scène, les numéros correspondent aux cinq étapes ci-dessus. Schématique, sans échelle.</figcaption>
</figure>

Trois choses le distinguent d'un thermique normal. Là aussi, l'air quitte le sol et de l'air afflue derrière, mais la rotation concentre la même énergie sur un dixième de la surface. La transition est une **arête** au lieu d'une montée douce — en quelques mètres, la direction du vent bascule de 180 degrés. Et il **reste au sol et se déplace**, en travers du décollage si les choses tournent mal. Un phénomène de sol, pas un phénomène d'altitude. Sur les décollages en pente s'ajoute le fait que l'impulsion de rotation vient souvent d'une légère zone sous le vent — combinée à l'alimentation en air chaud d'un versant sud, un terreau idéal [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf).

### Pourquoi un petit tourbillon ferme ton aile

Imagine le tourbillon devant toi, ton aile en travers. L'air court alors dans un sens sur ton côté **gauche** de l'aile, dans l'autre sens sur le côté **droit** : une moitié de la voile reçoit du **vent arrière**, l'autre en même temps du **vent de face** — sur les 10 mètres de ton envergure. **Ton aile ne mesure pas la force du vent, elle mesure la différence entre ses deux extrémités** — et elle tient entièrement dans le tourbillon.

L'ampleur que peut prendre cette différence, un calcul de modèle idéalisé la montre : une chute de pression du noyau de 2 hectopascals — les simulations montrent des tourbillons avec des « pressure drops of hundreds of pascals » [[6]](https://doi.org/10.1007/s10546-023-00792-3) — donne environ 34 km/h de chaque côté, donc **environ 69 km/h de différence sur l'envergure**. C'est un ordre de grandeur, pas une valeur de charge : ce qui arrive réellement à l'aile dépend en plus du rayon, de la position dans le tourbillon, du cisaillement et de la durée. La conséquence, le DHV la confirme : à faible hauteur naît souvent une turbulence « si forte que le parapente se ferme massivement » [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

<figure class="fig-wide">
  <p class="fig-kicker">Le mécanisme de fermeture</p>
  <p class="fig-titel">Pas la force du vent — la différence sur l'envergure</p>
  <img src="/wetterkunde/staubteufel-spannweite.fr.svg" alt="Un parapente de 10 mètres d'envergure se trouve en travers d'un noyau de tourbillon. Sur le côté gauche, l'air court à 34 kilomètres par heure dans un sens, sur le côté droit à 34 dans l'autre — 69 kilomètres par heure de différence sur l'envergure." width="780" height="680" loading="lazy" decoding="async">
  <figcaption>Calcul de modèle idéalisé pour une chute de pression du noyau de 2 hPa. Schématique, sans échelle.</figcaption>
</figure>

*Pour recalculer : v = √(Δp / 2ρ) avec ρ = 1,10 kg/m³, à partir de l'équilibre entre gradient de pression et force centrifuge au bord du noyau — dérivation chez Jackson [[7]](https://arxiv.org/abs/1910.14135) d'après Rennó et al. ; elle idéalise fortement. Sur la taille : en Europe centrale, un dust devil vit le plus souvent moins d'une minute et dépasse rarement 100 m de hauteur, dans les déserts jusqu'à une demi-heure [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf).*

---

## Est-ce qu'aujourd'hui est un jour à dusties ?

Si aujourd'hui est un jour à dusties se décide à la météo — beaucoup de soleil, sol sec, air sec et vent faible sans direction claire, selon la règle des pilotes du DHV [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf) — et à une couche de surface fortement surchauffée [[5]](https://doi.org/10.1002/2015GL063078). Pour le vent, nous calculons avec la limite supérieure documentée : au-dessus d'environ 25 km/h, il ne se forme presque plus de dust devils [[5]](https://doi.org/10.1002/2015GL063078). Les autres seuils chiffrés sont notre choix de calcul, le DHV n'en nomme aucun (voir Limites). Dans notre analyse (modèle météo via Open-Meteo) pour 490 sites de décollage suisses sur 69 jours d'été 2026, ces conditions se sont réunies le plus souvent dans les zones basses et sèches : au-dessous de 800 m à environ 20 % des heures de jour, au-dessus de 1'600 m à environ 2 %, le plus nettement dans la vallée du Rhône. La période critique va de 12 à 16 heures avec un pic à 13 heures — mesuré à 74 stations SwissMetNet [[8]](https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/), la couche de surface était à cette heure plus raide que 4 kelvins par mètre à 37,6 % des heures.

Trois sous-questions, trois réponses tirées de nos données : est-ce que la journée offre seulement les conditions, quand se concentrent-elles le plus, et où.

### La météo s'y prête-t-elle ?

Pour qu'un dust devil puisse seulement se former, cinq conditions doivent selon le DHV être remplies en même temps — nous les appelons ici la **règle des pilotes** [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf). Quatre d'entre elles sortent de n'importe quel modèle météo ; on peut les recalculer pour chaque jour et chaque site de décollage :

- **Beaucoup de soleil, peu de nuages** (rayonnement global dès 700 W/m²) — le moteur.
- **Sol sec** (au-dessous de 0,10 m³/m³) — un sol humide évapore au lieu de chauffer, et ne fournit pas de poussière non plus.
- **Air sec** (humidité relative au-dessous de 40 %) — typique du thermique bleu.
- **Peu de vent** (au-dessous de 7 m/s = 25 km/h) ou pas de direction de vent claire au sol.

Les chiffres entre parenthèses sont **nos** seuils de calcul, pas ceux du DHV — il n'en nomme aucun. Seule la limite de vent est une valeur documentée de la littérature [[5]](https://doi.org/10.1002/2015GL063078) (voir Limites).

La cinquième condition n'a pas pu être calculée : l'air doit se refroidir rapidement vers le haut, de plus de **0,7 °C par 100 m** — la stratification instable que connaît tout pilote de thermique. Pour la plupart des 69 jours, les données d'altitude nous manquent (voir Limites). Tous les chiffres de la règle des pilotes dans cet article reposent donc sur **quatre conditions sur cinq** et sont plutôt trop élevés que trop bas.

Voilà pour la règle des pilotes — la règle empirique du décollage que le DHV donne aux pilotes. Mais à la même question, il existe une deuxième réponse, et elle vient de la science [[5]](https://doi.org/10.1002/2015GL063078). Ce **critère de recherche** ne regarde ni le soleil, ni la sécheresse, ni le vent. Il tient à une seule grandeur : **à quelle vitesse la température chute dans les deux mètres les plus bas au-dessus du sol** — dans la couche de surface. Plus bas, nous faisons concourir les deux listes l'une contre l'autre ; d'ici là, il s'agit de ce seul chiffre.

On la confond facilement avec le point du DHV de tout à l'heure, parce que les deux fois il s'agit d'un gradient de température. La différence est l'épaisseur de la couche : les 0,7 °C par 100 m décrivent des centaines de mètres d'atmosphère, le critère de recherche les **deux** mètres les plus bas — là, le gradient est environ **1'200 fois plus raide**, c'est pourquoi on calcule en kelvins par mètre au lieu de degrés par 100 mètres. Et cette couche de surface est la seule grandeur de toute l'histoire qui, en Suisse, peut se **mesurer au lieu de s'estimer**. C'est pourquoi nous y revenons sans cesse.

Nous appelons cette couche raide à partir de **4 kelvins par mètre**, ce qui signifie **8 degrés de différence entre la surface du sol et l'air à 2 m de hauteur** — par exemple sol à 36 °C, air à 28 °C. Le seuil ne vient pas de nous : l'étude globale teste trois valeurs, 4, 8,5 et 10 K/m [[5]](https://doi.org/10.1002/2015GL063078) — les 4 K/m d'observations générales au-dessus des terres (Oke 2007, d'après Ryan 1972), les 8,5 et 10 K/m de mesures désertiques de la campagne SAMUM 2009 dans le sud du Maroc (Ansmann et al.).

Nous calculons donc tout avec les deux seuils. L'étude elle-même tient 8,5 K/m pour sa meilleure estimation, parce que des gradients plus raides collent mieux aux observations à l'échelle globale ; en Suisse toutefois, les 8,5 K/m ne sont atteints **même en mesure qu'à 0,2 % des heures**, les 4 K/m en revanche à 26 %. Qui calcule ici uniquement avec la valeur désertique obtient presque toujours un zéro — et un zéro n'est pas un résultat, mais peut-être un artefact.

Un seuil n'est pas un interrupteur. Au-dessus de 4 K/m, un tourbillon n'apparaît pas soudainement ; la couche de surface est alors simplement assez raide pour qu'un tourbillon puisse se former, pour autant que les autres conditions s'y ajoutent et que quelque chose lui donne l'impulsion. Un seuil à partir duquel un dust devil apparaît de manière fiable en Europe centrale ne nous est connu d'aucune série de mesures.

Reste le vent, et là, la chose est moins simple qu'elle n'en a l'air. Vers le haut, la littérature nomme une limite claire : au-dessus d'**environ 7 m/s, soit 25 km/h**, on n'observe presque plus de dust devils [[5]](https://doi.org/10.1002/2015GL063078). Le tourbillon est alors cisaillé plus vite qu'il ne peut se construire. Mais le calme plat n'est pas l'état le plus sûr, car la rotation initiale doit bien venir de quelque part, et c'est typiquement une rafale ou une situation sous le vent qui la fournit. Ce qui est dangereux, ce n'est donc ni beaucoup ni peu de vent, mais un **vent faible sans direction claire**.

### À quelle heure de la journée ?

Le moment le plus critique est celui où le sol a le plus accumulé et où le thermique perce pleinement pour la première fois. Dans nos données de mesure de 74 stations, le pic se situe nettement à **13 heures, heure locale** : à cette heure, la couche de surface est plus raide que les 4 K/m expliqués à l'instant à **37,6 %** des heures mesurées. La période critique va grossièrement de **12 à 16 heures** ; à 18 heures, il en reste 6 %, ensuite c'est pratiquement le calme.

<figure class="fig-wide">
  <p class="fig-kicker">Cycle diurne · 74 stations · été 2026</p>
  <p class="fig-titel">Le pic se situe à 13 heures</p>
  <img src="/wetterkunde/staubteufel-tagesgang.fr.svg" alt="Diagramme en barres : la part des heures mesurées avec un gradient au sol supérieur à 4 kelvins par mètre monte de 25,5 pour cent à 11 heures à 37,6 pour cent à 13 heures et retombe à 6 pour cent à 18 heures." width="820" height="360" loading="lazy" decoding="async">
  <figcaption>Part des heures mesurées avec plus de 4 K/m dans les 2 mètres les plus bas, par heure locale.</figcaption>
</figure>

Trois confirmations indépendantes : l'étude globale sur le sujet a trouvé son pic entre 12 et 13 heures [[5]](https://doi.org/10.1002/2015GL063078), le DHV nomme les « heures de fin de matinée à début d'après-midi, quand l'inversion a été chauffée » [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf), et la FSVL recommande une vigilance accrue de **11 à 16 heures**, avec une saison de juin à septembre [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). L'accident du Schwyberg s'est produit à 13 heures.

### Où ?

À grande échelle, nos chiffres pointent vers le bas et vers le sec. La part des heures avec conditions remplies tombe d'environ **20 % au-dessous de 800 m** à **environ 2 % au-dessus de 1'600 m**. Parmi les stations de mesure, **Sion dans la vallée du Rhône** se détache : la couche de surface y est en moyenne plus de deux fois plus raide qu'ailleurs, et neuf des douze heures individuelles les plus fortes de l'été viennent de cette seule station.

Sur le terrain lui-même, notre calcul s'arrête, car une cellule de modèle de 1 km ne connaît ni lisières ni croupes. Ces caractéristiques, le pilote doit les apporter ; la FSVL en nomme quatre [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/) : **surfaces sèches et pauvres en végétation** (champs, prairies fauchées ras, surfaces de pente au-dessus de la limite des arbres), **zones abritées du vent**, où l'air peut chauffer sans être dérangé, **zones sous le vent derrière des lisières ou des bâtiments**, où des tourbillons locaux agissent comme donneurs d'impulsion de rotation, et **topographie ouverte et homogène avec des croupes**, où ni la brise de pente ni la brise de vallée n'imposent la direction. Le Schwyberg porte exactement cette signature : croupe plate, terrain ouvert, alpages bruns et secs, pas de vent clair.

Ce que les chiffres ne te disent **pas**, c'est tout ce qui compte quand tu es déjà en pente : si le tourbillon court vers toi en ce moment, comment il tourne, quelle est sa taille. Les données disent *aujourd'hui, ouvre l'œil* — le reste, toi seul le vois.

---

## Règle des pilotes contre recherche

Les deux répondent à la même question : est-ce qu'aujourd'hui est une météo à dust devils ? Si les deux ont raison, elles doivent se déclencher aux mêmes heures. C'est exactement ce que nous avons recalculé — et le résultat nous a surpris.

Calculé pour **490 sites de décollage** sur **69 jours d'été** (28 mai au 4 août 2026), chaque heure de 11 à 18 heures. Cela donne **270'480 heures-site** : un lieu à une heure donnée. Pour chacune, nous avons demandé si toutes les conditions étaient remplies en même temps. Les pourcentages plus bas disent pour combien de ces heures c'était le cas. **Ils ne disent pas combien de fois un tourbillon s'est réellement formé — nous comptons des occasions, pas des événements.**

« Toutes les conditions » signifie autre chose selon la liste — les deux ne vérifient **pas les mêmes grandeurs** :

| | **Liste A · règle des pilotes** [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf) | **Liste B · recherche** [[5]](https://doi.org/10.1002/2015GL063078) |
|---|---|---|
| Rayonnement | ≥ 700 W/m² | — |
| Humidité du sol | ≤ 0,10 m³/m³ | — |
| Humidité relative de l'air | ≤ 40 % | — |
| Vent | ≤ 7 m/s [[5]](https://doi.org/10.1002/2015GL063078) | — |
| Couche de surface (0–2 m) | — | **> 4 resp. 8,5 K/m** |
| Poussée contre friction | — | **w\*/u\* > 5,0** |

La règle des pilotes interroge donc l'**état du paysage** — soleil, sécheresse, calme. Le critère de recherche interroge la **physique des deux mètres les plus bas** : la raideur de la couche de surface, et si la poussée thermique domine la friction (c'est w\*/u\* — grossièrement : « avec quelle vigueur le thermique brasse depuis le bas » divisé par « avec quelle force le sol freine »). Les deux listes prétendent décrire la même météo. Si c'est vrai, c'est la question de ce chapitre.

### À quel point le sol doit être brûlant pour cela

8,5 kelvins par mètre sonne comme une faute de frappe. Calculé sur 2 mètres, cela signifie : **17 degrés de différence entre la surface du sol et l'air à hauteur de genou**.

Le point décisif : **ce n'est pas l'air qui est froid — c'est le sol qui est brûlant.** Il s'agit de la température de la surface elle-même, pas de l'air juste au-dessus. La terre sèche et sombre, le rocher ou le gravier en plein soleil atteignent **45 à 60 °C**, pendant que l'air à 2 m de hauteur reste à d'agréables 28 °C. Tout le monde connaît cela pieds nus sur un chemin de gravier : le sol te brûle les pieds, l'air autour de toi n'est qu'estivalement chaud. C'est exactement ce saut qui est le carburant — la raison pour laquelle l'air près du sol veut monter avec une telle urgence. Un exemple calculé au-dessus de rocher de haute montagne ensoleillé : **Zermatt-Oberrothorn, 3'400 m**, 24 juin, 14 heures — air 13,9 °C, surface 34,9 °C, soit 21 degrés sur 2 mètres = **10,5 K/m**.

### Ce qui en ressort

On aurait attendu que les deux listes marquent les mêmes heures, simplement dans une autre langue. **C'est le contraire qui est vrai.** Sur 100 heures que la règle des pilotes marque comme critiques, seules **10** remplissent aussi le critère de recherche ; de toutes les heures qu'*au moins une* des listes marque, seules **5,7 %** sont marquées par les deux. Avec le seuil strict de 8,5 K/m, la liste B ne se déclenche pratiquement jamais.

La contradiction n'est pas non plus du bruit, mais **systématique selon l'altitude** : la règle des pilotes se déclenche au-dessous de 800 m à **20,26 %** des heures et au-dessus de 2'500 m plus qu'à 2,42 % — le critère de recherche à l'inverse à 0,12 % en bas et **13,43 %** en haut.

<figure class="fig-wide">
  <p class="fig-kicker">490 sites · 69 jours d'été · 270'480 heures-site</p>
  <p class="fig-titel">Règle des pilotes et critère de recherche — opposés selon l'altitude</p>
  <img src="/wetterkunde/staubteufel-hoehenbaender.fr.svg" alt="Diagramme en barres par tranche d'altitude : la règle des pilotes du DHV tombe de 20,26 pour cent des heures au-dessous de 800 mètres à 2,42 pour cent au-dessus de 2500 mètres. Le critère de recherche monte à l'inverse de 0,12 à 13,43 pour cent." width="900" height="500" loading="lazy" decoding="async">
  <figcaption>Part des heures de jour analysées (11–18 heures, heure locale) où la liste respective était remplie — conditions remplies, pas de dust devils prouvés. Calculé à partir de <code>2026_sommer_staubteufel_bedingungen.csv</code>.</figcaption>
</figure>

Que la règle des pilotes se déclenche tellement plus souvent en bas tient au fait que ses conditions se réunissent plus facilement en plaine et dans les vallées : en bas, l'air est plus chaud et donc relativement plus sec, les sols aussi — terres cultivées, champs moissonnés, la vallée du Rhône. En haut, le sol reste humide plus longtemps, l'alpage est vert, l'air plus frais et le vent en moyenne plus fort. **Une seule condition s'inverse :** au-dessus de rocher ensoleillé, la surface devient extrêmement chaude pendant que l'air au-dessus reste frais — les bons 10 K/m de l'exemple plus haut. Et c'est exactement celle-là que vérifie le critère de recherche. D'où l'évolution opposée. Seulement : **là-haut manque la couche de sol sèche et meuble qui alimente le tourbillon** — et la poussière qui le montrerait. C'est exactement ce que la règle des pilotes vérifie via l'humidité du sol ; cette condition manque au critère de recherche, parce qu'il a été développé pour les déserts.

S'y ajoute qu'une des deux conditions B est presque toujours remplie : **w\*/u\* > 5 est vrai à 71,9 % de toutes les heures de jour de l'été** et est ainsi presque sans valeur comme critère distinctif. Cela concorde avec la source elle-même, qui note que ce critère ne doit pas être utilisé seul [[5]](https://doi.org/10.1002/2015GL063078).

> **Prudence avec le chiffre de 20,26 %.** La tranche la plus basse se compose de **six** sites de décollage, et ils sont tout sauf d'accord : Bogiàn 29,3 %, Oberrieden 27,2 % — mais Kerenzerberg seulement 0,4 %. L'altitude ne décide de rien, elle ne fait que déplacer la probabilité. Ce qui est robuste, c'est la **direction**, pas la décimale.

### Le modèle concorde-t-il avec la mesure ?

Nous vérifions maintenant si **le modèle météo arrive au même résultat que les stations de mesure**. La raison : tous les chiffres sur la couche de surface jusqu'ici viennent du modèle — le critère de recherche aussi calcule avec une valeur de modèle. Si cette valeur est juste, cela se contrôle directement en Suisse, car SwissMetNet mesure à de nombreuses stations, toutes les heures, la température de l'air à **5 cm et à 2 m de hauteur** [[8]](https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/). L'étude globale n'avait pas cela à disposition : elle a dû dériver le gradient d'une température de surface de modèle, une résolution verticale plus fine n'étant « not possible using ECMWF data » [[5]](https://doi.org/10.1002/2015GL063078). Si modèle et mesure divergent, cela décide au passage à laquelle des deux réponses on peut se fier.

La comparaison évidente serait d'opposer les 490 sites de décollage aux stations. **Elle serait sans valeur**, parce que les stations sont basses et les sites de décollage hauts — on mesurerait surtout la différence d'altitude. Nous avons donc récupéré les **données de modèle aux coordonnées des stations** et les avons opposées heure par heure à la mesure de la même station : **74 stations, 40'711 heures appariées**, même lieu, même heure.

| comparaison appariée | médiane | p90 | maximum |
|---|---|---|---|
| **mesuré** (5 cm → 2 m) | **2,92** | 5,18 | 9,95 |
| **modèle** (surface → 2 m) | **1,00** | 2,65 | 6,25 |

**Le modèle est au-dessous de la mesure dans 86,5 % des heures appariées** (intervalle à 95 % selon Wilson : 86,2 à 86,8 %), la corrélation n'est que de r = 0,42. Aux mêmes endroits, les valeurs mesurées dépassent le seuil de 4 K/m à **26,13 %** des heures, le modèle seulement à **1,85 %**.

<figure class="fig-wide">
  <p class="fig-kicker">74 stations · 40'711 heures appariées · même lieu, même heure</p>
  <p class="fig-titel">Presque chaque station mesure plus que ce que le modèle calcule</p>
  <img src="/wetterkunde/staubteufel-modell-messung.fr.svg" alt="Nuage de points : pour chacune des 74 stations SwissMetNet, le gradient au sol mesuré est reporté contre la valeur du modèle. 71 des 74 points se situent au-dessus de la bissectrice, la mesure est donc plus élevée que le modèle. Sion, avec 6,44 contre 1,40 K/m, en est le plus éloigné." width="820" height="700" loading="lazy" decoding="async">
  <figcaption>Un point est une station ; les axes montrent la médiane de toutes les heures appariées. Si le modèle avait raison, les points se disperseraient autour de la ligne pointillée.</figcaption>
</figure>

Ce n'est pas un artefact de définition. Le modèle calcule de la surface à 2 m, la mesure seulement à partir de 5 cm — la partie la plus raide se trouve tout en bas, le modèle l'inclut, la mesure non. La différence devrait donc rendre la valeur du modèle **plus grande**, pas plus petite. Nous avons trouvé le contraire, le résultat est donc plutôt conservateur. La raison plausible, non prouvée par nous : la température de surface d'une cellule de 1 km est une moyenne sur forêt, prairie, rocher et zone bâtie, le capteur à 5 cm se trouve au-dessus d'une surface concrète à herbe rase.

L'erreur ne dépend pas de l'altitude — dans les quatre tranches de stations entre 0 et 2'500 m, le modèle sous-estime de 1,5 à 2,3 K/m. Mais ce n'est **pas un décalage uniforme** : à Sion, la station mesure en médiane 6,44 K/m, le modèle voit 1,40 ; à Zurich/Affoltern, Genève et Lucerne, les deux concordent pratiquement. L'erreur apparaît donc exactement là où cela devient intéressant — aux endroits secs et fortement ensoleillés. **Le critère de la littérature désertique s'appuie ainsi, en Suisse, sur une grandeur de modèle qui est trop basse précisément aux endroits pertinents.**

### Quelle est la robustesse de ce résultat ?

La contradiction d'altitude pourrait aussi être un effet de région : les sites bas se trouvent sur le Plateau, au Tessin, en Valais et dans le Jura, les hauts dans l'espace intra-alpin. Nous avons donc posé la question encore une fois **à l'intérieur** de chaque région qui a des sites au-dessous de 1'500 m *et* au-dessus de 2'000 m. Neuf la remplissent, et dans **9 sur 9, la règle des pilotes tombe avec l'altitude**, pendant que le critère de recherche monte dans 7 sur 9. Le schéma tient quand on garde la géographie constante.

**Et le choix des paramètres lui-même ?** Nous avons recalculé l'analyse avec des paramètres variés. Pour le vent, la règle des pilotes calcule avec la limite supérieure documentée de 7 m/s [[5]](https://doi.org/10.1002/2015GL063078) ; avec une variante plus stricte à 5 m/s, l'évolution en altitude ne change pratiquement pas. Et si on rend au critère de recherche la condition qui allait de soi dans le désert — un sol sec —, sa montée en altitude s'effondre d'un facteur cinq dans la tranche la plus haute : de 13,4 à 2,6 % des heures. La contradiction entre les deux listes ne tient donc pas à un seuil mal placé, mais pour l'essentiel exactement à l'ingrédient de sol qui manque au critère de recherche.

Deux choses doivent encore être divulguées. **Quatre sites de décollage sont exclus**, parce que la grille du modèle les localise faussement de plus de 200 m (l'un se trouvait à 514 m au lieu de 1'700 m) — 490 des 494 sont analysés. Et **la valeur absolue du critère B est incertaine** : elle tient à une grandeur estimée et varie selon la rugosité du terrain de presque un **facteur 3** ; la direction et la contradiction d'altitude subsistent dans toutes les variantes, et les valeurs mesurées ne dépendent pas du tout de cette hypothèse.

---

## Ce que tu fais au décollage

Ceci ne vient pas de nous, mais des fédérations : de la « Dust Devil Info » du DHV [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf) et de la météorologie du *Swiss Glider* [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/).

### Avant le décollage

Ne pas attendre accroché — dès que l'aile est triée, les **commandes vont dans les mains**. Au Schwyberg, c'est exactement ce geste qui a manqué. Par journées chaudes et à vent faible, entre 11 et 16 heures, scruter les environs en permanence, pas seulement la manche à air. Et parler : les signalements d'autres pilotes de la veille ou de la région voisine sont un signal à prendre au sérieux.

### Les signes, avant que tu le voies

Particulièrement important ici, où la poussière manque le plus souvent :

- La vitesse du vent devient **irrégulière** ; rafales inattendues de côté ou de dos
- **Bruissement clair dans les arbres**, un sifflement dû à la friction au sol ; buissons et arbres sont littéralement « secoués »
- **Spirales d'herbe au sol** et des choses dans l'air qui n'y ont pas leur place : herbe, feuilles, sacs de portage
- **« Scintillement » de l'air** au-dessus des surfaces sèches — le signe de la couche de surface surchauffée
- Des pilotes près du sol entrent dans une très forte montée ou sont tournés de côté sans action de leur part
- **Si un tourbillon a déjà été vu aujourd'hui, d'autres suivront avec une forte probabilité**

### Quand il arrive

Le plus souvent, il est plus sûr de **ne pas se décrocher**, mais de se jeter immédiatement sur l'aile, de rassembler le bord d'attaque et de le couvrir avec le corps — que l'aile soit endommagée n'a aucune importance à cet instant. **Ne jamais rassembler l'aile en « tulipe » par les suspentes** : si le tourbillon la saisit, tu es emporté. Comme aide, crier immédiatement (« Dusty ! de gauche / droite / derrière ») et prêter main-forte, mais ne pas saisir les suspentes. Et **ne jamais vouloir rattraper une aile vide depuis les airs** — deux cas sont connus où des pilotes ont retenu l'aile par les élévateurs, ont été arrachés en hauteur et ont fait une chute mortelle [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

### En vol et à l'atterrissage

Nettement plus de distance au relief, contourner largement les tourbillons visibles — « ils peuvent faire des crochets comme un lièvre, une direction de déplacement claire n'existe souvent pas ». Et : **« Si tu vois un dusty sur ton terrain d'atterrissage prévu, ce n'est plus ton terrain d'atterrissage. »** Chercher un terrain de rechange, même nettement moins bon. Après l'atterrissage, se décrocher immédiatement — le danger vient du sol [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

---

## Conclusion : ce que tu retiens comme pilote

Tout ce qui suit s'appuie sur **un été** : 490 sites de décollage, 69 jours, plus 74 stations de mesure. Ce ne sont pas des affirmations sur les dust devils en général, mais ce qui peut se déduire de ces données pour les conditions suisses.

- **La carte bascule vers le bas, pas vers le haut.** Calculé sur 490 sites de décollage, au-dessous de 800 m environ **20 %** des heures de jour remplissaient toutes les conditions, au-dessus de 1'600 m environ **2 %**. L'endroit où tu dois t'y attendre, c'est la prairie d'atterrissage en fond de vallée et le champ moissonné — pas la crête qui ressemble à un désert.
- **Le vol du soir est un autre jour que le vol de midi.** Mesuré à 74 stations, la part des couches de surface raides est de **37,6 %** à 13 heures, de **15,0 %** à 17 heures, de **6,0 %** à 18 heures. Entre 13 et 17 heures, l'occasion tombe donc à moins de la moitié, jusqu'à 18 heures à un sixième — et cela sans que tu doives renoncer à quoi que ce soit. Qui peut choisir sa fenêtre horaire tient là le plus grand levier qui soit.
- **Le vrai signe avant-coureur est le sol sec, pas le soleil.** Des quatre conditions de la règle des pilotes, le vent faible était rempli à **98 %** de toutes les heures de jour et le fort rayonnement à **46 %** — le sol sec seulement à **13 %**. Soleil et calme, tu les as presque chaque jour de beau temps ; ce qui fait le jour à dusties, ce sont les semaines sans pluie d'avant.
- **En Valais, c'est pire que ce que montre n'importe quelle prévision.** Dans la comparaison appariée, le modèle calculait la couche de surface trop plate dans **86,5 %** des heures, à Sion d'un facteur **4,6**. Exactement là où c'est sec et fortement ensoleillé, le chiffre du modèle est trop inoffensif — dans ces régions, fie-toi à ce que tu vois, pas à une valeur de l'app.
- **L'absence de poussière n'est pas un feu vert.** Nos valeurs mesurées montrent la couche de surface au-dessus du seuil de 4 K/m à **26 %** des heures ; on n'en voit presque rien chez nous — au-dessus de l'herbe, le même tourbillon tourne invisible. Au Schwyberg, il est arrivé par-derrière au-dessus d'un alpage vert.

**Et ce que tout cela ne veut pas dire.** L'altitude n'est pas un blanc-seing : au-dessus de 2'000 m, aucune station n'a de capteur à 5 cm, nous n'avons tout simplement rien pu vérifier là-haut — l'affirmation « c'est plus inoffensif en haut » vaut pour la règle des pilotes, pas pour la réalité. L'étude globale note même que les maxima de dust devils se trouvent souvent dans les régions de montagne [[5]](https://doi.org/10.1002/2015GL063078). Un été n'est pas une climatologie. Et nous n'avons **prouvé aucun dust devil** ; nous avons compté combien de fois les ingrédients étaient réunis.

### Et pourquoi la règle des pilotes et pas le critère de recherche ?

Parce que l'analyse a fait concourir les deux — et que le critère de recherche, dans cette transposition directe à la Suisse, a échoué. Le critère de recherche tient à une seule grandeur, le saut de température au-dessus du sol. Cette grandeur, nous l'avons confrontée à 40'711 heures mesurées — et le modèle dont elle provient est trop bas à 86,5 % des heures. Il collecte ainsi ses résultats presque exclusivement là où nous ne pouvions pas contre-mesurer (rocher au-dessus de 2'000 m), et se tait dans les vallées, où la mesure sonne l'alarme. La règle des pilotes se passe de cette grandeur et vérifie en plus s'il y a seulement un sol sec et meuble — la condition qui manque entièrement au critère de recherche et qui, en Suisse, fait la différence.

Que l'étude soit mauvaise pour autant, cela n'en découle pas : elle est construite pour les déserts, ses seuils viennent du sud du Maroc, et là-bas, un sol sec et meuble va de soi. Simplement pas chez nous.

**Été sec, ciel bleu, presque pas de vent, midi ? Les commandes tôt dans les mains.**

---

## Limites de cette analyse

1. **La mesure ne peut pas vérifier le résultat de haute montagne.** Des 74 stations avec capteur à 5 cm, **aucune ne se trouve au-dessus de 2'000 m**. Si le modèle a raison là-haut reste ouvert — nous ne l'avons pas réfuté, nous n'avons pas pu le tester.
2. **La règle des pilotes est calculée de manière incomplète.** De ses cinq conditions, **quatre** sont dans notre analyse ; la cinquième — refroidissement de plus de 0,7 °C/100 m — demande des données sur plusieurs surfaces de pression, disponibles pour seulement environ 12 des 69 jours. Toutes les valeurs A de cet article sont donc plutôt trop élevées que trop basses.
3. **Les seuils chiffrés de la règle des pilotes sont notre choix.** Le DHV ne nomme, hormis pour le gradient de température, aucun chiffre [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf) ; 700 W/m², 0,10 m³/m³ et 40 %, nous les avons fixés à partir des percentiles de nos données ; la limite de vent de 7 m/s (25 km/h) reprend la limite supérieure documentée de la littérature [[5]](https://doi.org/10.1002/2015GL063078). D'autres seuils donneraient d'autres pourcentages — ce qui est robuste, c'est la comparaison des deux listes et la direction, pas la décimale.
4. **Les stations de mesure ne sont pas des sites de décollage.** SwissMetNet se trouve sur des aérodromes et en fond de vallée ; la transposition de l'erreur du modèle aux sites de décollage est une hypothèse.
5. **L'erreur du modèle est décrite, pas expliquée.** Le moyennage sur 1 km comme cause est plausible et non prouvé.
6. **Les moyennes horaires lissent tout, et un été n'est pas une climatologie.** Un tourbillon vit moins d'une minute — **nous n'avons prouvé aucun dust devil**, nous comptons des conditions favorables. Et 69 jours de l'année 2026 ne sont pas une statistique ; un été humide aurait une autre allure.
7. **Sur la tendance, nous ne disons rien.** La FSVL retient que les dust devils deviennent plus fréquents avec le changement climatique [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). Plausible — **vérifier cela avec un seul été est impossible.** Il faudrait le même calcul sur vingt ans.

## Questions fréquentes

**Qu'est-ce qu'un dust devil ?**
Un tourbillon d'air proche du sol, en rotation rapide autour d'un axe vertical, entraîné uniquement par un sol fortement surchauffé. En français tourbillon de poussière, en météorologie petite trombe. En Europe centrale, il vit le plus souvent moins d'une minute et dépasse rarement 100 m de hauteur [[2]](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf).

**À quoi reconnaît-on un jour à dusties ?**
À cinq grandeurs qui doivent se réunir : beaucoup de soleil, sol sec, air sec, vent faible et une couche de surface fortement surchauffée. Le plus critique est de 12 à 16 heures avec un maximum vers 13 heures, le plus probablement dans les zones basses et sèches.

**À partir de quelle force de vent les dust devils ne se forment-ils plus ?**
La littérature nomme environ **7 m/s (25 km/h)** de vent ambiant comme limite supérieure pratique [[5]](https://doi.org/10.1002/2015GL063078) ; au-dessus, le tourbillon est le plus souvent cisaillé avant de se construire. À l'inverse, le calme plat n'est pas l'état le plus sûr : la rotation initiale vient souvent d'une rafale ou d'une légère zone sous le vent. Ce qui est critique, c'est un vent faible **sans direction claire**.

**Y a-t-il seulement des dust devils en Suisse ?**
Oui — et ils blessent des gens. Le 2 juillet 2025, un pilote expérimenté a été saisi au Schwyberg (FR), sur un décollage herbeux, par un dust devil invisible et gravement blessé [[12]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). Notre analyse des mesures montre : à 26 % des heures analysées, la couche de surface était plus raide que 4 K/m, le plus nettement dans la vallée du Rhône et en plaine. Mais un tourbillon ne devient visible qu'au-dessus du sable, du gravier ou d'un champ moissonné.

**Les dust devils augmentent-ils en Suisse ?**
La FSVL en fait l'hypothèse : des périodes de chaleur plus longues et des sols plus secs les favorisent [[11]](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/). Notre analyse ne peut ni le confirmer ni le réfuter — elle couvre un seul été.

**Pourquoi un dust devil est-il dangereux pour les parapentistes ?**
Parce qu'il tourne. D'un côté de ton aile, l'air court avec toi, de l'autre contre toi — dans un calcul de modèle idéalisé, environ 69 km/h de différence sur 10 mètres d'envergure. La conséquence est souvent une fermeture massive près du sol [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

**Que faire quand un dusty arrive sur le décollage ?**
Ne pas se décrocher, mais se jeter immédiatement sur l'aile, rassembler le bord d'attaque et le couvrir avec le corps. Ne jamais rassembler l'aile par les suspentes et ne jamais retenir une aile vide par les élévateurs [[1]](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf).

## Sources et reproductibilité

- **[1]** DHV — Sicherheit und Technik : *Dust Devil Info*, juillet 2020, par Volker Schwanitz, Karl Slezak et Lucian Haas. [PDF, dhv.de](https://www.dhv.de/media/seiten/07_wetter/Wetterwissen/DustDevils/Dust_Devil_Info_7_2020.pdf)
- **[2]** DHV-info 186 (2014), Volker Schwanitz : *Dust-Devils*, p. 68–69. [PDF, dhv.de](https://www.dhv.de/media/jahre/2024/07_wetter/Wetterwissen/DHVmagazin_Artikel/Thermik/19_2014_186_dust_devils.pdf)
- **[3]** Deutscher Wetterdienst, Wetterlexikon : *Staubteufel*. [dwd.de](https://www.dwd.de/DE/service/lexikon/Functions/glossar.html?lv2=102248&lv3=102604)
- **[4]** Schweizer Sturmarchiv : *Tornados* — délimitation par rapport aux petites trombes. [sturmarchiv.ch](https://www.sturmarchiv.ch/index.php/Tornados)
- **[5]** Jemmett-Smith, B. C., Marsham, J. H., Knippertz, P. & Gilkeson, C. A. (2015) : *Quantifying global dust devil occurrence from meteorological analyses.* Geophysical Research Letters **42**(4), 1275–1282. [doi.org/10.1002/2015GL063078](https://doi.org/10.1002/2015GL063078) — les seuils qui y sont testés viennent d'Oke et al. (2007) / Ryan (1972) pour 4 K/m et la limite de vent de 7 m/s, ainsi que d'Ansmann et al. (2009, campagne SAMUM, sud du Maroc) pour 8,5 et 10 K/m. L'étude calcule un *potentiel* global (heures favorables), pas des événements individuels observés
- **[6]** Giersch, S. & Raasch, S. (2023) : *How Do Dust Devil-Like Vortices Depend on Model Resolution?* Boundary-Layer Meteorology **187**, 703–742. [doi.org/10.1007/s10546-023-00792-3](https://doi.org/10.1007/s10546-023-00792-3)
- **[7]** Jackson, B. (2019) : *On the Relationship between Dust Devil Radii and Heights.* [arXiv:1910.14135](https://arxiv.org/abs/1910.14135) — contient la dérivation d'après Rennó, Burkett & Larkin (1998)
- **[8]** MétéoSuisse, Open Government Data : valeurs horaires SwissMetNet. [data.geo.admin.ch](https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/)
- **[9]** Schweizer Sturmarchiv : *Staubteufel Schüpfheim, 30.05.2012* — observation sur une place de sable, avec photos et vidéo. [sturmarchiv.ch](https://www.sturmarchiv.ch/index.php/20120530_01_Staubteufel_Sch%C3%BCpfheim)
- **[10]** Lucian Haas, lu-glidz (2018) : *Meteowissen: Dust Devil.* [lu-glidz.blogspot.com](https://lu-glidz.blogspot.com/2018/09/meteowissen-dust-devil.html)
- **[11]** Roger Oechslin, responsable météo FSVL : *Tückische Teufel — „Dust Devils" erkennen und einschätzen.* Swiss Glider n° 4, juillet/août 2026, p. 22–27. En ligne pour les membres FSVL : [shv-fsvl.ch](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/)
- **[12]** Groupe de travail Human Factors de la FSVL : *My Air Lesson — Plötzlich im Strudel.* Interview de Beat Zahno sur l'accident du Schwyberg du 2 juillet 2025. Swiss Glider n° 4, juillet/août 2026, p. 18–21 : [shv-fsvl.ch](https://www.shv-fsvl.ch/mitgliederservice/swiss-glider/)

**Recalculer :** tous les chiffres proviennent de quatre scripts qui reproduisent entièrement la récupération des données et l'analyse — récupération du modèle pour les 494 sites de décollage, analyse de la règle des pilotes et du critère de recherche avec calcul de sensibilité et filtre d'altitude, analyse des gradients au sol mesurés aux stations SwissMetNet et comparaison appariée modèle contre mesure. Les intervalles de confiance sont des intervalles de Wilson au niveau 95 %, calculés au niveau horaire — la dépendance temporelle des heures voisines n'y est pas prise en compte, les intervalles sont donc plutôt trop étroits. Nous fournissons les scripts et les données agrégées sur demande. Une version antérieure comparait directement le taux de détection du modèle aux sites de décollage avec le taux de détection mesuré aux stations — inadmissible, parce que les deux échantillons ne se trouvent pas à la même altitude. La comparaison appariée le remplace ; le résultat en ressort même plus net. Le jeu de données de modèle archivé provient de la récupération du 17.08.2026 via l'API Historical Forecast (plage de dates fixe 28.05–04.08) ; la limite de vent de la règle des pilotes y a été alignée sur la valeur documentée de la littérature de 7 m/s. Un cinquième script recalcule l'analyse avec des paramètres variés : la direction et les ordres de grandeur de tous les résultats se reproduisent, les pourcentages absolus se déplacent légèrement, parce que l'état d'archive du modèle de l'API de récupération n'est pas stable au bit près.

## Comment Wingcast t'y aide

Honnêtement : **Wingcast ne peut pas te prédire un dust devil.** Personne ne le peut. Un tourbillon de 20 m de diamètre et de 40 secondes de durée de vie se situe à des ordres de grandeur au-dessous de ce qu'un modèle de prévision résout.

Ce qu'un produit météo peut fournir, c'est l'étape d'avant : **calculer si aujourd'hui est un tel jour.** Fort rayonnement, sol sec, air sec, vent faible, couche de surface raide — ce sont des grandeurs qui figurent dans les données, et Wingcast les analyse chaque jour pour chaque site de décollage suisse.

Mais l'analyse montre aussi à quel point il faut être prudent avec cela. Un critère établi de la littérature scientifique pointe, en Suisse, vers **du rocher de haute montagne ensoleillé, où il n'y a rien à soulever**. La règle empirique que les pilotes utilisent au décollage vise plus juste — et les valeurs mesurées le confirment. Un chiffre n'est pas juste parce qu'il sort d'un modèle.

C'est pourquoi nous en restons à ce que nous disons partout : **la physique calcule, tu décides.** Les données te disent si tu dois être particulièrement attentif aujourd'hui. Si le tourbillon court en ce moment vers ton décollage, tu le vois au bruissement dans les arbres, à la manche à air, à l'herbe dans l'air — et à rien d'autre.

→ [À quoi ressemble un front de rafales mesuré — et ce qu'en disait le modèle](/fr/wetterkunde/boeenfront)
→ [Tous les sujets de météorologie](/fr/wetterkunde)
→ [Ouvrir Wingcast gratuitement et vérifier ton spot](https://app.wingcast.ch/?utm_source=blog&utm_medium=wetterkunde&utm_campaign=staubteufel)

*État : 20 août 2026 · Auteur : Maurin, Founder & Pilot chez Wingcast. Ce texte est de la météorologie, pas une autorisation de vol. Les conditions, tu les vérifies et tu décides toi-même.*

<!-- Traduction française de la version allemande (2026-08-20). La version
     allemande est la version de référence ; les citations DHV/DWD/FSVL sont
     traduites par nos soins, les originaux allemands restent la source. -->
