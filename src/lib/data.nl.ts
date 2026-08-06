import {
  lodges,
  regions,
  selfDriveRoutes,
  type Lodge,
  type LodgeCategory,
  type Region,
  type RoutePlan,
} from "./data";

/**
 * Dutch field overrides, keyed by slug. Non-text fields (slug/lat/lng/image/categories/
 * regionSlug/nights/days) are reused from the English data in data.ts and never overridden
 * here. Missing keys/fields silently fall back to the English value (safe during translation
 * rollout, never crashes a build), but every slug below MUST be fully translated before the
 * /nl pages ship, this is a checklist, not a permanent fallback.
 */

type RegionTranslation = Partial<
  Pick<
    Region,
    | "description"
    | "quickAnswer"
    | "bestFor"
    | "avoidIf"
    | "recommendedStay"
    | "driveFromWindhoek"
    | "alt"
    | "pros"
    | "cons"
    | "nearby"
    | "faqs"
    | "knownFor"
    | "dayPlans"
  >
>;

export const regionTranslationsNl: Record<string, RegionTranslation> = {
  etosha: {
    description:
      "Een enorme zoutpan omzoomd met waterputten waar olifanten, leeuwen en neushoorns bij zonsondergang samenkomen.",
    quickAnswer:
      "Etosha is Namibiës absolute topbestemming voor wildlife: een nationaal park van 22.000 km², gebouwd rond een zoutpan die zo groot is dat je hem vanuit de ruimte kunt zien en die ongeveer een kwart van het parkoppervlak beslaat. Toegang is via drie hoofdpoorten: Von Lindequist in het oosten, Anderson in het zuiden bij Okaukuejo, en King Nehale in het noorden. Welke poort u kiest, bepaalt uw hele route. Overnacht in een lodge op een van de particuliere grensreservaten van het park (Ongava, Onguma) voor nachtelijke ritten en offroad tracking, of binnen het park zelf voor uitzicht op verlichte waterputten zonder uw kamp te verlaten.",
    bestFor: "Eerste safari-ervaring, dierenfotografie",
    avoidIf: "U een strand- of kustuitstap wilt inplannen op dezelfde reisetappe",
    recommendedStay: "3–4 nachten",
    driveFromWindhoek: "~4,5 uur",
    alt: "Een olifant op de droge, stoffige vlaktes van Etosha National Park",
    pros: [
      "Een van de meest betrouwbare plekken voor wildlife-observatie in zuidelijk Afrika",
      "Verlichte waterputten zorgen dat de dieren na zonsondergang naar u toe komen",
      "Goed onderhouden wegen, in het droge seizoen ook begaanbaar met een gewone 2WD",
    ],
    cons: [
      "Poorten en snelheidslimieten worden strikt gehandhaafd binnen het nationale park",
      "In het droge seizoen verzamelt de drukte zich rond de populairste waterputten",
      "Accommodatie binnen het park zit in het hoogseizoen snel vol",
    ],
    nearby: ["Damaraland (rotskunst en woestijnolifanten)", "Waterberg Plateau"],
    faqs: [
      {
        q: "Hoeveel nachten moet ik in Etosha doorbrengen?",
        a: "Drie tot vier nachten is genoeg om zowel het oostelijke als het westelijke deel te bezoeken zonder van waterput naar waterput te moeten haasten.",
      },
      {
        q: "Moet ik binnen het park overnachten of op een particulier reservaat?",
        a: "Particuliere reservaten zoals Ongava staan nachtelijke ritten en offroad tracking toe die binnen het nationale park zelf niet zijn toegestaan, een echte afweging tegenover overnachten in het park voor de klassieke ervaring van een kamp bij een verlichte waterput.",
      },
      {
        q: "Is er momenteel een wegafsluiting in Etosha?",
        a: "Ja, een wegverbeteringsproject heeft de directe route tussen Okaukuejo en Halali afgesloten, met een verplichte omleiding van kracht van 2 juni 2026 tot juli 2027. Verkeer wordt omgeleid via de Gemsbokvlakte-omleiding (tot ongeveer km 47) en Rhino Drive naar Halali, waarbij op dat traject alleen de waterputten Gemsbokvlakte, Sueda en Salvadora bereikbaar zijn. Reken op flink meer rijtijd tussen de twee kampen dan oudere reisgidsen aangeven, en bevestig de actuele status bij NWR voordat u vertrekt, aangezien deze data kunnen verschuiven met de voortgang van de bouw.",
      },
      {
        q: "Hoeveel bedragen de toegangsprijzen voor Etosha?",
        a: "De tarieven stegen fors op 1 april 2026: internationale bezoekers betalen nu N$280 per persoon per dag (voorheen N$150), plus een voertuigtoeslag van N$620 voor twee personen, waarbij SADC-burgers en Namibiërs minder betalen. Het is de eerste verhoging sinds 2021, dus elke reisbegroting die vóór medio 2026 is opgesteld, onderschat inmiddels deze kostenpost.",
      },
      {
        q: "Via welke poort moet ik Etosha binnenkomen?",
        a: "Anderson Gate in het zuiden, bij Okaukuejo, is de standaardingang voor iedereen die vanuit Windhoek of Sossusvlei komt, en ligt het dichtst bij de meest betrouwbare waterputten van het park in het droge seizoen. Von Lindequist Gate in het oosten is de logische uitgang (of ingang) als u doorreist naar Waterberg of de Caprivi Strip, en ligt het dichtst bij Fischer's Pan. King Nehale Gate in het noorden bedient vooral reizigers die uit Ovamboland komen. De meeste zelfrij-routes gaan naar binnen via Anderson en naar buiten via Von Lindequist, wat een rechte doorsteek door het park oplevert in plaats van terug te moeten rijden.",
      },
      {
        q: "Hoe ver liggen de waterputten van Etosha uit elkaar?",
        a: "De afstanden variëren sterk en zijn niet gelijkmatig verdeeld. Waterputten rond Okaukuejo en Namutoni liggen op een korte rijafstand van elkaar, terwijl sommige in het rustigere westelijke deel op grindwegen wel een uur of meer uit elkaar kunnen liggen. Plan een route langs drie of vier waterputten per rit, in plaats van te proberen het hele park op één dag te doen. Het rijden alleen al kost veel daglicht, zeker buiten de verplichte omleidingsroute Okaukuejo-Halali.",
      },
    ],
    knownFor: [
      "Verlichte waterputten",
      "Waarnemingen van zwarte neushoorns",
      "Wildlife spotten met eigen auto",
      "De enorme witte zoutpan",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Genoeg voor alleen het oostelijke deel",
        text: "Twee nachten houdt u aan de oostkant van Etosha, waar u de waterputten rond Namutoni en Halali kunt afwerken. U krijgt echte wildlife-observatie, maar mist de westelijke Dolomite- en Okaukuejo-waterputten die de meeste reisgidsen als de beste van het park beoordelen, alleen de moeite waard als Etosha een van meerdere stops is.",
      },
      {
        nights: 4,
        verdict: "De juiste lengte voor een goed bezoek",
        text: "Vier nachten geven u de ruimte om uw tijd te verdelen tussen een particulier reservaat aan de grens (voor nachtelijke ritten en offroad neushoorn-tracking, geen van beide toegestaan binnen het park) en een kamp binnen het park zelf voor de ervaring van verlichte waterputten na zonsondergang. U bezoekt zowel de oostelijke als de westelijke helft zonder tussen de poorten te hoeven haasten.",
      },
    ],
  },
  sossusvlei: {
    description:
      "De torenhoge rode duinen van de Namib, dode kameeldoornbomen en enkele van de donkerste nachthemels op aarde.",
    quickAnswer:
      "Sossusvlei is het ansichtkaartbeeld van Namibië: rode duinen van meer dan 300 meter hoog die oprijzen uit een witte kleipan in het Namib-Naukluft Park, onderdeel van een woestijn die algemeen wordt beschouwd als een van de oudste ter wereld. Dune 45, de meest beklommen en meest gefotografeerde duin, dankt zijn naam simpelweg aan de ligging op 45 km langs de weg vanaf Sesriem-poort; de gefossiliseerde kameeldoornbomen van Deadvlei, die al eeuwenlang overeind staan in een pan die te droog is om ze te laten vergaan, liggen een korte wandeling verderop. Overnacht op een particulier reservaat grenzend aan het park (zoals Kulala Wilderness Reserve) voor een eigen poort die de drukte bij zonsopgang aan de publieke ingang voor is.",
    bestFor: "Fotografie, duinwandelingen bij zonsopgang",
    avoidIf: "U vroeg opstaan niet leuk vindt: het beste licht is er vóór 8 uur 's ochtends",
    recommendedStay: "2–3 nachten",
    driveFromWindhoek: "~5 uur",
    alt: "Een torenhoge rode zandduin in de Namibwoestijn bij Sossusvlei",
    pros: [
      "Een van de meest gefotografeerde landschappen van Afrika, en dat is terecht",
      "Lodges op particuliere reservaten hebben een eigen parkpoort, vóór de publieke wachtrij",
      "Enkele van de donkerste nachthemels ter wereld om te sterrenkijken",
    ],
    cons: [
      "Overdag is de hitte extreem van oktober tot maart",
      "Voor het laatste stuk naar Sossusvlei zelf is een 4x4 of de shuttle nodig",
      "Vanaf de 2x4-parkeerplaats is het nog eens 20 tot 45 minuten lopen naar Deadvlei",
    ],
    nearby: ["Sesriem Canyon", "NamibRand Nature Reserve"],
    faqs: [
      {
        q: "Heb ik een 4x4 nodig om Sossusvlei te bezoeken?",
        a: "Voor de heenrit niet, voor het laatste stuk wel. De geasfalteerde en grindweg naar Sesriem is prima te doen met een gewone auto; de laatste 5 km door los zand naar Sossusvlei zelf vereist een 4x4 of de shuttleservice van het park. Onze zelfrijgids behandelt de voertuigkeuze voor de rest van het land, mocht u een volledige rondreis plannen.",
      },
      {
        q: "Hoe laat moet ik bij de duinen aankomen?",
        a: "Precies bij het openen van de poort, dat is bij zonsopgang. Wie er dan is, ontloopt zowel de hitte als de drukte bij Dune 45 en in Deadvlei. Kom in het hoogseizoen al 30 minuten later aan en de parkeerplaats bij Sesriem zit al vol.",
      },
      {
        q: "Kan ik nog zelf naar Deadvlei rijden?",
        a: "Nee, sinds 1 mei 2026 zijn particuliere voertuigen, inclusief 4x4's, niet meer toegestaan op het laatste zandtraject van ongeveer 5 km vanaf de 2x4-parkeerplaats naar het Deadvlei/Big Daddy 4x4-parkeerterrein. Dat traject is nu uitsluitend per shuttle, met de officiële shuttleservice of een bij NTB geregistreerd lodge-tourvoertuig, voor ongeveer N$260 per volwassene en N$130 per kind onder de 12 jaar (prijzen kunnen wijzigen, bevestig actuele tarieven vóór vertrek). Het is een recente maatregel ter bescherming van de Namib Sand Sea, en wachttijden bij de shuttle van rond de 30 minuten worden vaak gemeld, houd daar rekening mee bij uw ochtendplanning.",
      },
      {
        q: "Hoe hoog zijn de duinen bij Sossusvlei?",
        a: "Big Daddy, naast Deadvlei, is met ruim 325 meter de hoogste duin in de directe omgeving, en behoort tot de hoogste duinen ter wereld. Dune 45, de meest beklommen duin, is lager maar veel toegankelijker en rijst direct aan de weg op 45 km van Sesriem-poort. 'Big Mama,' vlak naast Deadvlei, is de kortere, gemakkelijkere beklimming als de kamlijn van Big Daddy vóór het ontbijt te veel lijkt.",
      },
      {
        q: "Hoe diep is Sesriem Canyon?",
        a: "Sesriem Canyon snijdt over een lengte van ongeveer een kilometer zo'n 30 meter diep in de vlakte, uitgesleten door de Tsauchab-rivier, ondiep genoeg om zonder technische uitrusting in te lopen, en een goede schaduwrijke optie rond het middaguur als de duinen zelf te heet worden om te beklimmen.",
      },
    ],
    knownFor: [
      "300 meter hoge rode duinen",
      "De dode kameeldoornbomen van Deadvlei",
      "Enkele van de donkerste nachthemels op aarde",
      "Duinwandelingen bij zonsopgang",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Prima, maar slechts één zonsopgang bij de duinen",
        text: "Twee nachten geeft u één volledige zonsopgangsessie: Dune 45, dan Deadvlei via de shuttle, dan Sesriem Canyon tijdens de koelere late namiddag. Het is krap: u krijgt de ansichtkaartfoto, maar geen buffer als het licht of uw energie de eerste ochtend niet meezit.",
      },
      {
        nights: 3,
        verdict: "De juiste lengte voor een goed bezoek",
        text: "Drie nachten geven u twee zonsopgangsessies bij de duinen in plaats van één, ruimte om een sterrenkijksessie aan de kant van NamibRand Nature Reserve toe te voegen, en een echte rustmiddag in plaats van meteen door te rijden. Dit is de verblijfsduur die wij daadwerkelijk zouden boeken.",
      },
    ],
  },
  swakopmund: {
    description:
      "Een koloniaal kustplaatsje waar de duinen de Atlantische Oceaan raken, en het tempo eindelijk daalt.",
    quickAnswer:
      "Swakopmund is Namibiës reset-knop aan de kust, een goed te voet te verkennen Duits-koloniaal stadje, gesticht in 1892 als de belangrijkste haven van Duits-Zuidwest-Afrika, ingeklemd tussen de Namib-duinen en een koude Atlantische deining. Het heeft oprecht goede restaurants, een volledig menu aan adrenaline-activiteiten (parachutespringen, sandboarden, quadrijden) voor de deur, en ligt op minder dan een uur van de Walvis Bay-lagune, een als Ramsar-wetland erkend waterrijk gebied dat duizenden kleine en grote flamingo's aantrekt.",
    bestFor: "Een pauze van het zelf rijden, avontuurlijke activiteiten",
    avoidIf: "U weinig dagen heeft en wildlife-tijd moet prioriteren",
    recommendedStay: "2 nachten",
    driveFromWindhoek: "~4 uur",
    alt: "De rode en witte vuurtoren van Swakopmund, Namibië",
    pros: [
      "Veruit het beste eten en de beste koffie op een Namibische zelfrijroute",
      "Een echte verandering van tempo na dagen van rijden en gamedrives",
      "Een breed aanbod aan activiteiten, direct te boeken via uw hotel",
    ],
    cons: [
      "Kustmist (de 'Skeleton Coast-nevel') kan tot laat in de ochtend aanhouden",
      "De Atlantische Oceaan is hier te koud en ruw om in te zwemmen",
      "De zeewind maakt avonden koeler dan in het binnenland van de woestijn",
    ],
    nearby: ["Walvis Bay-lagune (flamingo's)", "Duinengordel van de Namibwoestijn"],
    faqs: [
      {
        q: "Is Swakopmund twee nachten waard?",
        a: "Ja, als u een kustactiviteit zoals sandboarden of een boottocht naar Walvis Bay wilt inplannen zonder te haasten; één nacht is genoeg voor alleen een etentje en een wandeling door het stadje.",
      },
      {
        q: "Hoe koud is de Atlantische Oceaan bij Swakopmund?",
        a: "Koud genoeg dat zwemmen niet de attractie is. De Benguelastroom trekt koud water op vanuit de zuidelijke Atlantische Oceaan, waardoor de zee het hele jaar door koud blijft, zelfs wanneer de lucht boven de duinen net landinwaarts heet is. Dit is ook wat de kustmist veroorzaakt die tot laat in de ochtend kan aanhouden, soms de 'Skeleton Coast-nevel' genoemd, hetzelfde stroomeffect dat dat gebied verder naar het noorden vormt.",
      },
      {
        q: "Kan ik parachutespringen in Swakopmund?",
        a: "Ja, tandem-parachutesprongen boven de duinengordel en de kustlijn zijn een van de kenmerkende activiteiten van het stadje, gesprongen vanuit een klein vliegtuig vanaf het lokale vliegveld, weer en mist toelatend. Sandboarden en quadrijden op de duinen net buiten het stadje zijn niet afhankelijk van heldere luchten zoals parachutespringen dat wel is, dus die vormen het betrouwbaardere alternatief als de ochtendmist niet is opgetrokken.",
      },
    ],
    knownFor: [
      "Duits-koloniale architectuur",
      "Parachutespringen en sandboarden",
      "Flamingo's bij Walvis Bay",
      "Het beste eten van Namibië",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "Prima als tussenstop, geen echt bezoek",
        text: "Eén nacht is genoeg om over de pier te wandelen, goed te eten, en voor de verandering ergens te slapen dat geen lodge is. U heeft geen tijd om een activiteit te boeken. Beschouw het als een reset, niet als een bestemming.",
      },
      {
        nights: 2,
        verdict: "De juiste lengte om echt iets te doen",
        text: "Twee nachten laten ruimte voor één echte activiteit (sandboarden op de duinen net buiten het stadje, een parachutesprong boven de kust, of een boottocht naar de flamingolagune van Walvis Bay) bovenop het wandel-en-eet-programma dat één nacht u geeft.",
      },
    ],
  },
  damaraland: {
    description:
      "Okerkleurige bergen, aan de woestijn aangepaste olifanten en enkele van de meest opvallende rotstekeningen van Namibië.",
    quickAnswer:
      "Damaraland is het hart van Namibiës gemeenschapsreservaten: een open, okerkleurige bergwoestijn waar aan de woestijn aangepaste olifanten tussen droge rivierbeddingen trekken, en waar verschillende lodges oprecht in gemeenschapsbezit zijn, niet slechts gemeenschapsgerelateerd. Twyfelfontein, sinds 2007 UNESCO Werelderfgoed, herbergt een van de grootste concentraties rotsgravures in Afrika, sommige meer dan 2.000 jaar oud. De omliggende Kuneneregio herbergt bovendien een van de grootste vrij rondtrekkende populaties zwarte neushoorns die nog ergens ter wereld bestaan, buiten een omheind nationaal park.",
    bestFor: "Afgelegen landschappen, aan de woestijn aangepaste dieren",
    avoidIf: "U gegarandeerde dagelijkse wildlife-waarnemingen nodig heeft",
    recommendedStay: "2–3 nachten",
    driveFromWindhoek: "~5,5 uur",
    alt: "Rotsachtig woestijnlandschap van Damaraland bij zonsondergang",
    pros: [
      "Verschillende lodges zijn rechtstreeks in gemeenschapsbezit, niet alleen gemeenschapsgebrand",
      "Tracking van aan de woestijn aangepaste olifanten en neushoorns, te voet of per voertuig",
      "De rotsgravures van Twyfelfontein zijn een échte UNESCO Werelderfgoedlocatie",
    ],
    cons: [
      "De dieren leven wild en vrij: waarnemingen zijn niet gegarandeerd",
      "Afstanden tussen bezienswaardigheden zijn lang op grindwegen",
      "Minder eetgelegenheden dan aan de kust of in de hoofdstad",
    ],
    nearby: ["Twyfelfontein-rotstekeningen", "Skeleton Coast", "Spitzkoppe"],
    faqs: [
      {
        q: "Kan ik olifanten zien in Damaraland?",
        a: "Er is geen garantie, maar begeleide tracking geeft u een reële kans. Aan de woestijn aangepaste olifanten trekken langs droge rivierbeddingen en waarnemingen zijn nooit gegarandeerd, maar begeleide tracking met een lokale lodge geeft u de beste realistische kans. Onze wildlifegids behandelt wat u verder kunt verwachten van aan de woestijn aangepaste diersoorten in het hele land.",
      },
      {
        q: "Waar kan ik aan de woestijn aangepaste neushoorns zien, niet alleen olifanten?",
        a: "De Palmwag Concession, in het westen van Damaraland, is een van de weinige plekken in Afrika waar tracking van zwarte neushoorns te voet wordt aangeboden, uitgevoerd in samenwerking met lokale gemeenschapsreservaten, hetzelfde model dat de aan de woestijn aangepaste olifanten van de regio beschermt. Het wordt meestal geboekt als een aparte activiteit via een lodge in het Palmwag-gebied, niet als spontane toevoeging, dus plan het vooraf in als het u belangrijk is.",
      },
      {
        q: "Is Twyfelfontein de moeite waard als ik niet in rotskunst geïnteresseerd ben?",
        a: "Ja, alleen al om het landschap. De locatie ligt te midden van Damaralands okerkleurige zandsteenformaties, waaronder de Organ Pipes en Burnt Mountain in de buurt, beide de korte omweg waard, zelfs als de gravures zelf niet uw hoofdinteresse zijn.",
      },
    ],
    knownFor: [
      "Aan de woestijn aangepaste olifanten",
      "Rotsgravures van Twyfelfontein (UNESCO)",
      "Lodges in gemeenschapsbezit",
      "Okerkleurig berglandschap",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Dekt de hoogtepunten, één kans op wildlife",
        text: "Twee nachten dekken de rotsgravures van Twyfelfontein en één begeleide rit op zoek naar aan de woestijn aangepaste olifanten. Waarnemingen zijn bij geen enkele rit gegarandeerd, dus dit is het minimum, niet het ideaal.",
      },
      {
        nights: 3,
        verdict: "De juiste lengte, gezien wildlife niet gegarandeerd is",
        text: "Drie nachten geven u een tweede wildlife-uitstap als de eerste niets oplevert, plus tijd om begeleide tracking van zwarte neushoorns toe te voegen bij de Palmwag concessie, een van de weinige plekken in Afrika waar dit te voet wordt aangeboden, in samenwerking met gemeenschapsreservaten.",
      },
    ],
  },
  "skeleton-coast": {
    description:
      "Mist, scheepswrakken en zeehondenkolonies langs een van de meest afgelegen kustlijnen van Afrika.",
    quickAnswer:
      "De Skeleton Coast is Namibiës meest afgelegen, minst bezochte landschap, een in mist gehulde strook waar de Namib-duinen recht overgaan in een koude, met wrakken bezaaide Atlantische Oceaan. Vroege Portugese zeevaarders noemden het 'De Poorten van de Hel': dezelfde koude Benguelastroom die de mist veroorzaakt, maakt de kustlijn ook gevaarlijk, en gestrande schepen liggen nog altijd half begraven in het zand. De meeste reizigers zien het via een korte omweg vanuit Damaraland, of vliegen in voor een echt meerdaags verblijf bij een gespecialiseerde operator.",
    bestFor: "Afgelegen avontuur, fly-in reizen",
    avoidIf: "U een krap zelfrijschema heeft met beperkte dagen",
    recommendedStay: "2 nachten",
    driveFromWindhoek: "~7 uur (of per vliegtuig)",
    alt: "Een aangespoeld scheepswrak op het zand van de Skeleton Coast, Namibië",
    pros: [
      "Echte afgelegenheid: sommige lodges zien geen ander verkeer binnen honderd kilometer",
      "Zeehondenkolonies, scheepswrakken en excursies naar aan de woestijn aangepaste dieren",
      "Een van de meest dramatische, minst gefotografeerde kustlijnen van Afrika",
    ],
    cons: [
      "Er goed komen betekent meestal vliegen, wat echte extra kosten met zich meebrengt",
      "Aanhoudende kustmist kan het zicht een groot deel van de dag beperken",
      "Zeer weinig accommodatiemogelijkheden: boek ruim van tevoren",
    ],
    nearby: ["Damaraland", "Kaokoveld / Kuneneregio"],
    faqs: [
      {
        q: "Moet ik naar de Skeleton Coast vliegen?",
        a: "Alleen voor het verre noorden. Een kort zuidelijk gedeelte is per auto bereikbaar vanuit Damaraland, maar de noordelijke Skeleton Coast (waar de toplodges liggen) is normaal gesproken alleen per vliegtuig bereikbaar.",
      },
      {
        q: "Hoort Cape Cross bij de Skeleton Coast?",
        a: "Ja, Cape Cross ligt aan het zuidelijke uiteinde van de Skeleton Coast, per auto bereikbaar vanuit Swakopmund of Damaraland, en is de thuisbasis van een van de grootste kolonies Kaapse pelsrobben op het continent, tienduizenden dieren in het seizoen. Het is de toegankelijke, per auto bereikbare versie van de Skeleton Coast-ervaring; de fly-in lodges verder noordwaarts bestrijken het echt afgelegen deel.",
      },
      {
        q: "Wat is het beste moment van de dag om de Skeleton Coast te bezoeken?",
        a: "De middag, zodra de mist is opgetrokken. De kustmist is een jaarrond effect van de Benguelastroom dat doorgaans tegen het einde van de ochtend optrekt, dus de meeste operators plannen excursies in de middag in plaats van eerder op de dag tegen het beperkte zicht te vechten.",
      },
    ],
    knownFor: [
      "Scheepswrakken",
      "Kolonies Kaapse pelsrobben",
      "Volledige afgelegenheid",
      "Een door mist omgeven kustlijn",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "De standaardlengte, en die werkt",
        text: "Twee nachten is wat de meeste fly-in reizen bieden, en dat is genoeg: één middag voor een excursie naar een zeehondenkolonie of scheepswrak, één volle dag voor een kusttocht met uw gids, en ingebouwde tijd om de mist te laten optrekken voordat u zich vastlegt op een plan voor de dag.",
      },
    ],
  },
  windhoek: {
    description:
      "Namibiës compacte, door Duitsland beïnvloede hoofdstad: de meeste reizen beginnen en eindigen hier.",
    quickAnswer:
      "Windhoek is waar bijna elke Namibische reis begint en eindigt, dankzij Hosea Kutako International Airport, dat zelf zo'n 45 minuten buiten het stadscentrum ligt. De hoofdstad ligt op ruim 1.600 meter hoogte in het Khomas Hoogland, waardoor de avonden koeler blijven dan u misschien zou verwachten zo diep in zuidelijk Afrika, zelfs in de zomer. De stad is compact, gedeeltelijk goed te voet te verkennen, en één nacht waard om uw huurauto op te halen, te wennen aan de tijdzone en goed te eten voordat u de woestijn intrekt.",
    bestFor: "Aankomst- en vertreknachten",
    avoidIf: "U dezelfde dag een aansluitende vlucht heeft en niet hoeft te overnachten",
    recommendedStay: "1 nacht",
    driveFromWindhoek: "N.v.t.",
    alt: "De Christuskirche, een herkenningspunt in Windhoek, Namibië",
    pros: [
      "De beste restaurant- en koffiescene buiten Swakopmund",
      "Een makkelijke, laagdrempelige plek om te acclimatiseren voor of na een lange rit",
      "Centraal gelegen voor het ophalen en inleveren van de huurauto",
    ],
    cons: [
      "Op zichzelf geen bestemming voor wildlife of landschap",
      "Het vliegveld ligt zo'n 45 minuten buiten het stadscentrum",
      "Veiligheid in het stadscentrum na het donker vraagt om de normale stedelijke voorzichtigheid",
    ],
    nearby: ["Daan Viljoen Game Reserve", "Auasbergen"],
    faqs: [
      {
        q: "Is één nacht in Windhoek genoeg?",
        a: "Ja, voor de meeste reizen is één nacht aan het begin en einde van de reis standaard, meer als u laat landt of vroeg vertrekt.",
      },
      {
        q: "Wat is de Christuskirche?",
        a: "Het is het bekendste herkenningspunt van Windhoek, een lutherse kerk gebouwd in het begin van de jaren 1900 uit lokale zandsteen, aan een prominente rotonde in het stadscentrum. De meeste zelfrij-routes komen er onderweg van of naar het vliegveld binnen zicht van, ook zonder van plan te zijn te stoppen.",
      },
      {
        q: "Is Windhoek veilig om rond te wandelen?",
        a: "Het centrum van Windhoek is overdag goed te voet te verkennen met de normale stedelijke voorzichtigheid, maar zoals de meeste hoofdsteden vraagt het na het donker om meer oplettendheid, vooral rond het treinstation en rustigere zijstraten. Blijf in goed verlichte, drukke gebieden of neem 's avonds een korte taxirit terug naar uw hotel. Onze veiligheid- en gezondheidsgids geeft het volledige beeld voor de rest van het land.",
      },
    ],
    knownFor: [
      "Het herkenningspunt de Christuskirche",
      "Duits-Namibische keuken",
      "Centrale plek voor het ophalen van de huurauto",
      "Ambachts- en curiomarkten",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "Dit is eigenlijk alles wat Windhoek nodig heeft",
        text: "Eén nacht aan het begin en einde van de reis is het standaardpatroon, genoeg tijd om uw huurauto op te halen of in te leveren, één keer goed te eten, en te acclimatiseren voor of na de lange ritten die voor u liggen. Het is op zichzelf geen bestemming voor landschap of wildlife.",
      },
    ],
  },
  "fish-river-canyon": {
    description:
      "De op één na grootste canyon ter wereld, het mooist te zien tijdens het gouden uur vanaf de rand.",
    quickAnswer:
      "Fish River Canyon is Namibiës zuiden, en de meest over het hoofd geziene publiekstrekker: een 160 km lange, tot 550 m diepe kloof, vaak omschreven als de op één na grootste canyon ter wereld, die qua schaal wedijvert met de Grand Canyon, maar dan zonder de drukte. De meeste bezoekers zien hem vanaf de uitkijkpunten op de rand; serieuze wandelaars nemen het meerdaagse pad onderin, dat eindigt bij Ai-Ais, waar warmwaterbronnen met een temperatuur van ongeveer 60°C uit de grond komen.",
    bestFor: "Wandelen, spectaculaire uitkijkpunten",
    avoidIf: "Het zuiden niet in uw route past: het is een omweg van de hoofdroute",
    recommendedStay: "1–2 nachten",
    driveFromWindhoek: "~5,5 uur",
    alt: "Een verhoogd uitzicht over Fish River Canyon in het zuiden van Namibië",
    pros: [
      "Een van de grootste canyons ter wereld, met een fractie van de bezoekers",
      "De uitkijkpunten op de rand vereisen helemaal geen wandelen",
      "De meerdaagse Fish River Canyon Trail is een echte bucketlist-wandeling",
    ],
    cons: [
      "Het is een echte omweg naar het zuiden: voegt aanzienlijke rijtijd toe aan een standaardroute",
      "De meerdaagse trail loopt alleen van mei tot september en vereist een medische verklaring",
      "Zeer weinig accommodatie in de buurt",
    ],
    nearby: ["Ai-Ais warmwaterbronnen", "Grensregio Namibië/Zuid-Afrika"],
    faqs: [
      {
        q: "Kan ik de canyon zien zonder te wandelen?",
        a: "Ja, de belangrijkste uitkijkpunten op de rand bij Hobas liggen op korte loopafstand van de parkeerplaats en geven u het klassieke uitzicht op de canyon.",
      },
      {
        q: "Wat zijn de regels voor de meerdaagse Fish River Canyon-wandeltocht?",
        a: "De trail loopt seizoensgebonden, ruwweg van 1 mei tot 15 september, met exacte openings- en sluitingsdata die elk jaar worden vastgesteld door Namibia Wildlife Resorts (NWR) op basis van de waterstand van de rivier. U heeft een medische geschiktheidsverklaring nodig en een minimale groepsgrootte van 3 (solo wandelen is niet toegestaan), met vergunningen die vooraf rechtstreeks via NWR moeten worden geboekt. Bevestig de actuele data voor het lopende seizoen voordat u plant, aangezien deze van jaar tot jaar kunnen verschuiven.",
      },
      {
        q: "Kan ik Ai-Ais combineren met de uitkijkpunten zonder de volledige trail te lopen?",
        a: "Ja, Ai-Ais Hot Springs Resort is per auto bereikbaar aan het zuidelijke uiteinde van de canyon, zonder dat u iets van de meerdaagse trail erboven hoeft te lopen, dus een bezoek aan de uitkijkpunten bij Hobas en een bad in Ai-Ais kunnen prima worden gecombineerd in dezelfde korte trip. De twee zijn met elkaar verbonden via de weg, niet alleen via het wandelpad, wat sommige reizigers verrast.",
      },
      {
        q: "Hoe verhoudt Fish River Canyon zich tot de Grand Canyon?",
        a: "Hij is kleiner, maar nog altijd enorm. Fish River Canyon is ongeveer 160 km lang en tot 550 m diep, tegenover de Grand Canyon die ongeveer 450 km lang is met dieptes tot bijna 1.800 m, dus qua schaal speelt hij zeker mee, zonder ook maar in de buurt te komen van de bezoekersaantallen of infrastructuur van de Grand Canyon.",
      },
    ],
    knownFor: [
      "De op één na grootste canyon ter wereld",
      "De meerdaagse Fish River-wandeltrail",
      "Warmwaterbronnen van Ai-Ais",
      "Uitzicht op de rand tijdens het gouden uur",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "Genoeg voor de rand, niet voor de trail",
        text: "Eén nacht dekt de belangrijkste uitkijkpunten bij Hobas tijdens het gouden uur (geen wandelen nodig), en dat is waar de meeste reizigers eigenlijk voor komen. Het laat geen ruimte voor de meerdaagse trail onder de rand, die een eigen, aparte trip vergt.",
      },
      {
        nights: 2,
        verdict: "De juiste lengte voor randbezoekers",
        text: "Twee nachten geven u zowel een zonsondergang- als een zonsopgangsessie bij de uitkijkpunten, die de kleur van de canyon compleet veranderen, plus tijd om bij de warmwaterbronnen van Ai-Ais te baden onderweg naar buiten in plaats van er zo doorheen te rijden.",
      },
    ],
  },
  caprivi: {
    description:
      "Namibiës groene, waterrijke uitloper: rivieren, overstromingsvlaktes en een compleet ander ritme.",
    quickAnswer:
      "De Caprivi Strip (officieel omgedoopt tot de Zambeziregio in 2013) is een compleet andere kant van Namibië, een smalle, waterrijke uitloper van rivieren en overstromingsvlaktes grenzend aan Botswana, Zambia en Angola, meer geschikt voor vogels spotten en wildlife bij het water dan de woestijnroute verder naar het zuiden. De strook zelf is een overblijfsel van koloniale kaartentekenkunst: Duitsland verwierf het gebied in het Heligoland-Zanzibar-verdrag van 1890, specifiek om Duits-Zuidwest-Afrika een corridor naar de Zambezi-rivier te geven, en de oude naam (naar de Duitse rijkskanselier Leo von Caprivi) blijft in het dagelijks gebruik voortleven, ook al is de officiële naam veranderd.",
    bestFor: "Uitbreiden naar Botswana of Zambia",
    avoidIf: "U alleen de klassieke duinen-en-woestijnroute doet",
    recommendedStay: "2 nachten",
    driveFromWindhoek: "~12 uur (de meeste reizigers vliegen naar Katima Mulilo)",
    alt: "Silhouetten van bomen langs een rivier bij zonsondergang in de Caprivi Strip",
    pros: [
      "Oprecht ander landschap dan de rest van Namibië: rivieren in plaats van woestijn",
      "Sterk vogels spotten en wildlife-observatie bij het water",
      "Een natuurlijke brug naar de Okavango Delta of Chobe in Botswana",
    ],
    cons: [
      "Ver van de rest van het land: de meeste mensen vliegen liever dan te rijden",
      "Malariavoorzorgsmaatregelen zijn hier relevant, anders dan in het grootste deel van de rest van Namibië",
      "Beperkte lodgekeuze vergeleken met de woestijnregio's",
    ],
    nearby: ["Chobe National Park (Botswana)", "Bwabwata National Park"],
    faqs: [
      {
        q: "Is de Caprivi Strip het toevoegen waard aan een Namibiëreis?",
        a: "Het beste te beschouwen als een uitbreiding, niet als een op zichzelf staande stop. Het werkt goed voor reizigers die doorreizen naar Botswana of Zambia, eerder dan als stop op een standaard rondreis van twee weken door Namibië.",
      },
      {
        q: "Is malaria specifiek een reëel risico in de Caprivi Strip?",
        a: "Ja, anders dan in het grootste deel van de rest van Namibië loopt de Zambeziregio het hele jaar door malariarisico vanwege de rivieren en waterrijke gebieden, dus antimalariamaatregelen zijn hier zeker de moeite waard, ook als u ze voor de rest van een op woestijn gerichte reis heeft overgeslagen. Onze veiligheid- en gezondheidsgids geeft actueel advies voordat u vertrekt, aangezien aanbevelingen kunnen veranderen.",
      },
      {
        q: "Kan ik de Caprivi Strip combineren met de Okavango Delta of Chobe in Botswana?",
        a: "Ja, dat is de belangrijkste reden waarom de meeste reizigers het toevoegen. De Zambeziregio grenst rechtstreeks aan Botswana, en Bwabwata National Park en het Kwando-Linyanti-riviersysteem hier sluiten van nature aan op Chobe National Park of de Okavango Delta aan de andere kant van de grens, wat het een praktische uitbreiding maakt in plaats van een aparte reis.",
      },
    ],
    knownFor: [
      "Overstromingsvlaktes van de Zambezi-rivier",
      "Vogels spotten",
      "De brug naar de Okavango Delta/Chobe in Botswana",
      "Nijlpaarden en wildlife bij het water",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "De standaardlengte voor een uitbreidingsstop",
        text: "Twee nachten dekken een riviercruise voor nijlpaarden en vogels, en één gamedrive in Bwabwata National Park, genoeg om het andere ritme van de regio te voelen voordat u verder reist naar Botswana of Zambia, of terugvliegt naar de woestijnroute.",
      },
    ],
  },
  spitzkoppe: {
    description:
      "Granieten pieken die loodrecht uit de vlaktes oprijzen, Namibiës antwoord op Tafelberg.",
    quickAnswer:
      "Spitzkoppe is een cluster granieten pieken die recht uit de vlakke grindvlaktes oprijzen: de hoofdpiek bereikt ongeveer 1.784 m en steekt zo'n 600 m boven de omliggende vlakte uit, met graniet dat wordt geschat op meer dan 120 miljoen jaar oud, vandaar de bijnaam de 'Matterhorn van Namibië.' Het is een makkelijke tussenstop van één nacht tussen Swakopmund en Damaraland, en een van de beste plekken om te sterrenkijken op de hele route, zonder lichtvervuiling binnen een straal van honderd kilometer.",
    bestFor: "Sterrenkijken, tussenstops van één nacht",
    avoidIf: "U volledig comfort van een lodge wilt: dit is grotendeels rustiek kamperen",
    recommendedStay: "1 nacht",
    driveFromWindhoek: "~3,5 uur",
    alt: "Granieten pieken van Spitzkoppe die oprijzen uit de Namibische woestijnvlaktes",
    pros: [
      "Een van de beste plekken om te sterrenkijken op een Namibische zelfrijroute",
      "Een makkelijke, korte omweg die geen volledige rijdag kost",
      "Spectaculair licht bij zonsondergang en zonsopgang op de granieten koepels",
    ],
    cons: [
      "De meeste verblijven ter plaatse zijn eenvoudige gemeenschapscampings, geen lodges",
      "Zeer beperkte voorzieningen: neem zelf voorraden mee",
      "Open terrein betekent geen schaduw tijdens de hitte van de dag",
    ],
    nearby: ["Swakopmund", "Erongo Mountains"],
    faqs: [
      {
        q: "Is Spitzkoppe een overnachting waard?",
        a: "Ja, alleen al voor de zonsondergang, de sterrenhemel en de zonsopgang is het een van de meest fotogenieke enkele nachten op een Namibische route.",
      },
      {
        q: "Waar vind ik de beste rotskunst bij Spitzkoppe?",
        a: "Bushman's Paradise, een rotsschuilplaats aan de oostkant van het massief, bereikbaar via een korte klim, herbergt enkele van de bekendste schilderingen van de locatie, waaronder afbeeldingen van olifanten. Het wordt meestal bezocht met een lokale gemeenschapsgids, zowel vanwege de klim als omdat gidsen hier rechtstreeks het omliggende reservaat ondersteunt.",
      },
      {
        q: "Kan ik Spitzkoppe beklimmen?",
        a: "De hoofdpiek is een technische rotsklim, geen wandeling. Hij werd pas in 1946 voor het eerst beklommen en vereist ook vandaag nog touwen en klimervaring. De meeste bezoekers wandelen in plaats daarvan de kortere, ongegradeerde paden rond de voet en naar uitkijkpunten zoals de natuurlijke rotsboog, waarvoor helemaal geen klimuitrusting nodig is.",
      },
    ],
    knownFor: [
      "Granieten inselbergs",
      "Sterrenkijken",
      "Bosjesman-rotskunst",
      "Fotografie bij zonsondergang en zonsopgang",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "Dit is precies waar Spitzkoppe om draait",
        text: "Eén nacht is de standaard en juiste lengte: kom aan met tijd voor zonsondergang op de granieten koepels, breng de nacht door onder enkele van de helderste luchten op de route, en vang de zonsopgang voordat u verder reist. Het is een tussenstop, geen bestemming op zich.",
      },
    ],
  },
};

type LodgeTranslation = Partial<Pick<Lodge, "description" | "highlights" | "bestFor" | "alt">>;

export const lodgeTranslationsNl: Record<string, LodgeTranslation> = {
  "ongava-lodge": {
    description:
      "Chalets gebouwd tegen een rotsuitloper met uitzicht op een drinkplaats, op een privéreservaat dat grenst aan Etosha's Anderson Gate.",
    highlights: ["Kamers met uitzicht op de drinkplaats", "Nachtsafari's op het privéreservaat", "Offroad tracking toegestaan"],
    bestFor: "Stellen op hun eerste safari, wildlifefotografen",
    alt: "Rieten chalet gebouwd tegen een rotsuitloper bij Ongava Lodge, Etosha",
  },
  "onguma-tented-camp": {
    description:
      "Een tentenkamp op een privéreservaat direct grenzend aan de oostkant van Etosha, met kamers die uitkijken op een drinkplaats.",
    highlights: ["Tenten met uitzicht op een drinkplaats", "Privéreservaat, nachtsafari's toegestaan", "Zusterkampen in de buurt"],
    bestFor: "Fotografen, stellen die meer vrijheid willen dan het park toestaat",
    alt: "Een tentsuite bij schemering onder een grote boom bij Onguma Tented Camp, Etosha",
  },
  "mushara-lodge": {
    description:
      "Een lodge met chalets nabij Etosha's oostelijke Von Lindequist Gate, met gemeenschappelijke ruimtes van riet en hout en een zusterlodge in de buurt.",
    highlights: ["Dicht bij de oostelijke parkpoort", "Gemeenschappelijke ruimtes van riet en hout", "Zusterlodge in de buurt"],
    bestFor: "Gezinnen, reizigers die nabijheid boven afgelegenheid verkiezen",
    alt: "Rieten lounge en terras bij Mushara Lodge, Etosha, verlicht bij schemering",
  },
  "little-kulala": {
    description:
      "Het vlaggenschipkamp van Wilderness Safaris in de duinen, op het privéreservaat Kulala Wilderness Reserve, zo'n 45 minuten van Sossusvlei zelf.",
    highlights: ["Overnachten op het dak onder de sterren", "Privézwembaden", "Eigen reservaatspoort naar het park"],
    bestFor: "Stellen, wittebroodswekers, sterrenkijkers",
    alt: "Een overdekt terras met uitzicht op de vlaktes van de Namib bij Little Kulala, Sossusvlei",
  },
  "sossusvlei-desert-lodge": {
    description:
      "Een designlodge op een privéreservaat, aangewezen als International Dark Sky Reserve, bekend om kamers met glazen gevels en ononderbroken uitzicht op de woestijn.",
    highlights: ["International Dark Sky Reserve", "Kamers met glazen gevel", "Eigen sterrenkundeprogramma"],
    bestFor: "Sterrenkundeliefhebbers, luxereizigers",
    alt: "Rood verlichte kamers met glazen gevel van Sossusvlei Desert Lodge onder een sterrenhemel bij nacht",
  },
  "kulala-desert-lodge": {
    description:
      "Rieten chalets met uitzicht op de rode duinen, op hetzelfde privéreservaat als Little Kulala, maar in een toegankelijker prijssegment.",
    highlights: ["Eigen poort naar Namib-Naukluft Park", "Zelfde reservaat als Little Kulala", "Chalets met uitzicht op de duinen"],
    bestFor: "Gezinnen, reizigers die duintoegang willen zonder ultraluxe prijskaartje",
    alt: "Rieten chalets op rood woestijnterrein bij Kulala Desert Lodge, Sossusvlei",
  },
  "damaraland-camp": {
    description:
      "Een van Namibië's vroegste joint ventures tussen gemeenschap en natuurreservaat, in de Huab-riviervallei, gezien als voorbeeld voor gemeenschapsgerund toerisme in het land.",
    highlights: ["Baanbrekend model van gemeenschapsbeheer", "Tracking van woestijnolifanten", "Gerund samen met de lokale gemeenschap"],
    bestFor: "Natuurbewuste reizigers, wildlifetrackers",
    alt: "Rieten chalets tussen rode rotsheuvels bij Damaraland Camp",
  },
  "grootberg-lodge": {
    description:
      "Wordt beschouwd als Namibië's eerste volledig door de gemeenschap geëigende lodge, gebouwd samen met de ≠Khoadi //Hoas-gemeenschap op een bergrug met valleiuitzicht vanuit elke kamer.",
    highlights: ["Volledig eigendom van de gemeenschap", "Uitzicht op de vallei vanuit elke kamer", "Toegang tot neushoorntracking"],
    bestFor: "Reizigers die gemeenschapstoerisme belangrijk vinden, fotografen",
    alt: "Uitzicht over de vallei vanuit een kamer bij Grootberg Lodge, Damaraland",
  },
  "doro-nawas-camp": {
    description:
      "Een kamp op een verhoogde rotsheuvel in de Doro !Nawas-conservancy, gerund samen met de lokale gemeenschap, met gemakkelijke toegang tot de rotstekeningen van Twyfelfontein.",
    highlights: ["Verhoogde positie op een heuveltop", "Samenwerking met de conservancy", "Dicht bij de rotstekeningen van Twyfelfontein"],
    bestFor: "Stellen die cultuur en landschap willen combineren",
    alt: "Een overdekte veranda met uitzicht op de vlaktes bij Doro Nawas Camp, Damaraland",
  },
  "shipwreck-lodge": {
    description:
      "De enige lodge die daadwerkelijk aan de Skeleton Coast zelf ligt, met scheepswrak-vormige chalets verspreid tussen de duinen, twee uur ten noorden van Möwe Bay.",
    highlights: ["Ligt daadwerkelijk aan de kust", "Architectuur geïnspireerd op scheepswrakken", "Excursies naar afgelegen duinen en kust"],
    bestFor: "Reizigers op zoek naar afgelegen avontuur, designliefhebbers",
    alt: "De scheepswrak-vormige chalets van Shipwreck Lodge op de duinen bij schemering",
  },
  "hoanib-skeleton-coast-camp": {
    description:
      "Een kamp met zeven tenten en één familie-unit, alleen per lichte vliegtuig bereikbaar, dat dient als uitvalsbasis voor woestijnolifanten, leeuwen en zeldzame wildlife.",
    highlights: ["Alleen per vliegtuig bereikbaar", "Focus op aan de woestijn aangepaste wildlife", "Optionele excursie naar kust en zeehondenkolonie"],
    bestFor: "Serieuze wildlifefotografen, reizigers op zoek naar afgelegen avontuur",
    alt: "Een tentsuite verlicht bij schemering bij Hoanib Skeleton Coast Camp",
  },
  "the-delight-swakopmund": {
    description:
      "Een boetiekhotel met 54 kamers in het centrum van Swakopmund, met kleurrijk, eigentijds design, en ontbijt, water, parkeren en wifi inbegrepen.",
    highlights: ["Centrale locatie in het centrum", "Eigentijds design", "Ontbijt, water, parkeren en wifi inbegrepen"],
    bestFor: "Stellen, designbewuste reizigers, tussenstop tijdens een stadstrip",
    alt: "De eigentijdse gevel van The Delight Swakopmund aan de boulevard",
  },
  "hansa-hotel": {
    description:
      "Namibië's oudste hotel, geopend in 1905 in het historische centrum van Swakopmund, met 49 kamers en behouden koloniale architectuur.",
    highlights: ["Namibië's oudste hotel (1905)", "Ligging in het historische centrum", "Behouden koloniale gevel"],
    bestFor: "Reizigers met interesse in geschiedenis, liefhebbers van klassieke hotels",
    alt: "De historische entree van het Hansa Hotel, Swakopmund, verlicht bij schemering",
  },
  "the-olive-exclusive": {
    description:
      "Een boetiekhotel met slechts zeven suites in Windhoek, elk in de stijl van een andere Namibische regio, met eigen privézwembad en volledige bar en restaurant.",
    highlights: ["Slechts zeven suites", "Elke suite geïnspireerd op een Namibische regio", "Privézwembad"],
    bestFor: "Stellen, een luxueuze start of afsluiting voor of na een safariroute",
    alt: "Suites met uitzicht op Windhoek bij schemering vanuit The Olive Exclusive",
  },
  "villa-violet": {
    description:
      "Een kleine, door de eigenaar gerunde guesthouse met vijf kamers in de wijk Klein Windhoek, vijf minuten van het centrum.",
    highlights: ["Persoonlijke service door de eigenaar", "Optionele zelfkookkeuken", "Klein zwembad en terras"],
    bestFor: "Budgetbewuste reizigers, alleenreizigers die persoonlijke aandacht op prijs stellen",
    alt: "Het zwembad en de tuinterras bij Villa Violet, Windhoek",
  },
  "canyon-lodge": {
    description:
      "Dertig rustieke chalets gebouwd tussen rode granietrotsen in Gondwana Canyon Park, nabij de kloof, en een populaire uitvalsbasis voor de meerdaagse Fish River Trail.",
    highlights: ["Chalets gebouwd tussen granietrotsen", "Uitvalsbasis voor de Fish River Canyon Trail", "Ligging in Gondwana Canyon Park"],
    bestFor: "Wandelaars, reizigers die rustiek maar comfortabel woestijnverblijf zoeken",
    alt: "Een kamer gebouwd tussen granietrotsen bij Canyon Lodge, Fish River Canyon",
  },
  "nkasa-lupala-tented-lodge": {
    description:
      "Een kleine lodge met 10 tenten op Lupala Island in het Kwando-Linyanti-riviersysteem, gebouwd rond duurzaam, gemeenschapsgebonden toerisme in het noordoosten van Namibië.",
    highlights: ["Slechts 10 tenten", "Ligging aan een rivierarm", "Gemeenschapsgebonden, gericht op duurzaamheid"],
    bestFor: "Vogelaars, reizigers op zoek naar het nattere, wildliferijke noordoosten van Namibië",
    alt: "Een eetterras met uitzicht op de overstromingsvlakte bij Nkasa Lupala Tented Lodge",
  },
  "spitzkoppen-lodge": {
    description:
      "Een lodge met 15 chalets aan de noordrand van het Spitzkoppe-massief, verbonden door verhoogde loopbruggen die ontworpen zijn om de bodem eronder zo min mogelijk te verstoren.",
    highlights: ["Ontworpen met verhoogde loopbruggen", "Privéchalets met uitkijkterras", "Ligging tussen granietrotsen"],
    bestFor: "Reizigers die comfort willen bij Spitzkoppe zonder volledig te kamperen",
    alt: "Verhoogde chalets tussen de granietkoepels van Spitzkoppen Lodge bij schemering",
  },
  "thitaka-river-lodge": {
    description:
      "Een luxe tentenkamp aan de Kwando-rivier in Bwabwata National Park dat in 2026 opent, Newmark's eerste Namibische eigendom, gelegen nabij een belangrijke olifantencorridor.",
    highlights: ["Tweemaal daags game drives en riviertochten", "Ligging bij een olifantencorridor", "Villa's en tenten met privézwembad"],
    bestFor: "Reizigers die de rivierwildlife van de Zambezi-regio willen combineren met volledige luxe",
    alt: "Een rivier die door dicht groen oeverbos slingert, kenmerkend voor de wetlands van de Zambezi-regio",
  },
  "luna-namib-collection": {
    description:
      "Een ultraluxe retraite met slechts drie units die in 2026 opent, 70 km ten zuiden van Sesriem, met vrijstaande villa's, privézwembaden en telescopen op de kamer voor sterrenkijken.",
    highlights: ["Slechts drie vrijstaande units", "Privézwembaden en telescopen", "Eigen conciërge per unit"],
    bestFor: "Stellen en kleine gezinnen die het hoogste niveau van privacy in de woestijn zoeken",
    alt: "Een privéterras met zwembad bij zonsopgang bij Luna Namib Collection, Sossusvlei",
  },
};

type RouteTranslation = Partial<
  Pick<RoutePlan, "title" | "description" | "vehicle" | "pace" | "bestFor" | "dayByDay" | "faqs">
>;

export const routeTranslationsNl: Record<string, RouteTranslation> = {
  "7-days": {
    title: "Eén week",
    description: "Een compacte rondrit voor een eerste kennismaking: de duinen, de kust en één stop voor wildlife.",
    vehicle:
      "Een standaard 2x4 huurauto is voldoende voor deze hele route. Het laatste stuk van 5 km zandpad naar Sossusvlei is sowieso alleen met een shuttle te bereizen, en de wegen naar Sesriem en Swakopmund zijn overal geasfalteerd of goed onderhouden grind.",
    pace: "Strak: één volle dag per stop, grotendeels opgebouwd rond de belangrijkste activiteit van die stop.",
    bestFor: "Bezoekers die voor het eerst komen, met een week of minder, en een echte kennismaking met woestijn en kust willen zonder aparte wildlife-stop.",
    dayByDay: [
      {
        label: "Dag 1",
        text: "Land in Windhoek, haal je huurauto op (een 2x4 volstaat voor deze route) en overnacht in de hoofdstad. Eén goed diner en vroeg naar bed is beter dan meteen doorrijden naar de woestijn met jetlag.",
        regionSlug: "windhoek",
      },
      {
        label: "Dag 2–3",
        text: "Rijd naar Sossusvlei (~5 uur via Rehoboth en Solitaire). Gebruik één ochtend voor de zonsopkomst: Dune 45, daarna Deadvlei met de shuttle vanaf de 2x4-parkeerplaats (verplicht sinds mei 2026, reken op ~30 minuten wachttijd), en de koelere late middag voor Sesriem Canyon.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Dag 4–5",
        text: "Rijd naar Swakopmund (~4–5 uur via Solitaire en de Kuiseb Pass). Twee nachten aan de kust: kies één echte activiteit (sandboarden op de duinen net buiten de stad, of een boottocht vanuit Walvis Bay naar de flamingolagune) en eet goed. Dit is het beste eten en de beste koffie van de hele reis.",
        regionSlug: "swakopmund",
      },
      {
        label: "Dag 6–7",
        text: "Rijd terug naar Windhoek (~4 uur) met een volledige dag over voor je vlucht, of vlieg direct vanaf Walvis Bay als je reisschema het toelaat de terugrit over te slaan.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Is 7 dagen genoeg voor Namibië?",
        a: "Genoeg voor een echte kennismaking met woestijn en kust, niet genoeg om er een volwaardige wildlife-stop bij te doen. Etosha alleen al verdient 3–4 nachten, waar deze route geen ruimte voor heeft. Zie dit als de korte versie, niet als de compromisversie.",
      },
      {
        q: "Heb ik een 4x4 nodig voor deze route?",
        a: "Nee. Alles op deze rondrit (Windhoek, Sossusvlei, Swakopmund) is bereikbaar via geasfalteerde of goed onderhouden grindwegen met een standaard 2x4, en het laatste stuk mul zand naar Sossusvlei gaat sowieso alleen met de shuttle, ongeacht wat je rijdt.",
      },
      {
        q: "Kan ik Etosha inpassen in een reis van 7 dagen?",
        a: "Alleen door Swakopmund tot één nacht te beperken, en zelfs dan is het krap. Als wildlife voor jou belangrijk is, is de route van 10 dagen de kortere optie die er echt goed ruimte voor heeft.",
      },
      {
        q: "Hoeveel rijtijd omvat de route van 7 dagen in totaal?",
        a: "Ongeveer 13 uur, verdeeld over drie etappes: circa 5 uur van Windhoek naar Sossusvlei, 4–5 uur verder naar Swakopmund, en 4 uur terug naar Windhoek (of een vlucht vanaf Walvis Bay in plaats van die laatste etappe). Dat is minder rijden dan bij de langere routes, wat deel uitmaakt van de afweging voor het overslaan van een aparte wildlife-stop.",
      },
    ],
  },
  "10-days": {
    title: "Tien dagen",
    description: "Het klassieke Namibische rondreisparcours, rustig aan, met twee nachten in elke belangrijke regio.",
    vehicle:
      "Een 2x4 met hoge bodemvrijheid is werkbaar, maar een 4x4 bewijst zijn nut zodra je op de grindwegen (D-wegen) van Damaraland rijdt, de upgrade is voor deze route specifiek de moeite waard.",
    pace: "Twee nachten per stop: het standaard, comfortabele Namibische ritme, met een rijdag ingebouwd in elke overstap in plaats van eromheen geperst.",
    bestFor: "Een eerste volledige Namibië-reis die woestijn, kust en wildlife goed dekt, zonder de lange omwegen naar het zuiden of noordoosten.",
    dayByDay: [
      {
        label: "Dag 1",
        text: "Land op Hosea Kutako International Airport, zo'n 45 minuten van het centrum, haal je huurauto op en overnacht in Windhoek, de gebruikelijke overnachting van één nacht voordat de lange ritten beginnen.",
        regionSlug: "windhoek",
      },
      {
        label: "Dag 2–3",
        text: "Rijd naar Sossusvlei (~5 uur via Rehoboth en Solitaire) voor één zonsopkomst bij Dune 45 en Deadvlei (shuttle vanaf de 2x4-parkeerplaats, want die is verplicht voor dat laatste stuk), en Sesriem Canyon tijdens het koelere deel van de dag.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Dag 4–5",
        text: "Rijd naar Swakopmund (~4–5 uur via Solitaire en de Kuiseb Pass) voor twee nachten aan de kust, één echte activiteit (sandboarden of een boottocht vanuit Walvis Bay), en het beste eten van de route.",
        regionSlug: "swakopmund",
      },
      {
        label: "Dag 6–7",
        text: "Damaraland (~3–4 uur vanaf Swakopmund via Uis): de rotstekeningen van Twyfelfontein, een echte UNESCO-werelderfgoedlocatie, op de eerste dag; een begeleide rit op zoek naar woestijnolifanten op de tweede dag (waarnemingen zijn niet gegarandeerd, maar dit is de beste realistische kans in het land).",
        regionSlug: "damaraland",
      },
      {
        label: "Dag 8–9",
        text: "Etosha (~4 uur vanaf Damaraland via Kamanjab en Outjo): verdeeld tussen een lodge in een privéreservaat voor nachtelijke ritten en off-road tracking, en het observeren van waterpoelen, in het park of vanaf de camp.",
        regionSlug: "etosha",
      },
      {
        label: "Dag 10",
        text: "Rijd terug naar Windhoek (~4,5 uur) voor je vertrekvlucht.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Is 10 dagen de juiste lengte voor een eerste Namibië-reis?",
        a: "Voor de meeste mensen wel, het is de kortste route die woestijn, kust en een volwaardige wildlife-stop combineert zonder van elke dag een rijdag te maken. Dit is de route die we standaard zouden aanraden.",
      },
      {
        q: "Moet ik een 4x4 huren voor deze route?",
        a: "Ja, met name de moeite waard vanwege de grindwegen (D-wegen) van Damaraland. Een 2x4 met hoge bodemvrijheid redt het wel, maar een 4x4 is de comfortabelere, minder risicovolle keuze voor die etappe. Etosha, Sossusvlei en Swakopmund op zich zouden het niet vereisen.",
      },
      {
        q: "Kan ik Damaraland overslaan om de 4x4-upgrade te vermijden?",
        a: "Ja, val terug op de dekking van de route van 7 dagen en voeg in plaats daarvan een derde nacht in Etosha toe, of ruil Damaraland in voor een tweede activiteitendag in Swakopmund. Je mist dan de woestijnolifanten en Twyfelfontein, wat een echte afweging is, geen kleine.",
      },
      {
        q: "Hoeveel rijtijd omvat de route van 10 dagen in totaal?",
        a: "Ongeveer 21 uur over vijf etappes: circa 5 uur naar Sossusvlei, 4–5 uur verder naar Swakopmund, 3–4 uur naar Damaraland, 4 uur naar Etosha, en 4,5 uur terug naar Windhoek. Dat is gemiddeld iets meer dan 2 uur per dag verspreid over tien dagen, aangezien elke stop van twee nachten een volledige dag zonder rijden overlaat.",
      },
    ],
  },
  "14-days": {
    title: "Twee weken",
    description: "Ruimte om Fish River Canyon en Spitzkoppe toe te voegen zonder de rijdagen te overhaasten.",
    vehicle:
      "4x4 aanbevolen voor de volledige rondrit: deze route omvat de grindwegen (D-wegen) van Damaraland en de lange omweg naar het zuiden richting Fish River Canyon, beide comfortabeler met meer bodemvrijheid.",
    pace: "Comfortabel, met echte speling: de meeste stops krijgen twee of meer nachten en er is ruimte om bij te sturen als weer, vermoeidheid of een gemiste zonsopkomst daarom vraagt.",
    bestFor: "Reizigers die het klassieke parcours plus het zuiden willen, zonder de verre omwegen naar Caprivi of de Skeleton Coast.",
    dayByDay: [
      {
        label: "Dag 1",
        text: "Land in Windhoek, haal je 4x4-huurauto op (deze rondrit vraagt om de bodemvrijheid voor de D-wegen van Damaraland en later de omweg naar Fish River Canyon), en overnacht in de hoofdstad voordat de lange ritten naar het zuiden beginnen.",
        regionSlug: "windhoek",
      },
      {
        label: "Dag 2–3",
        text: "Fish River Canyon (~5,5 uur naar het zuiden): de uitzichtpunten aan de rand bij Hobas tijdens het gouden uur, geen wandeling nodig voor een stop van deze lengte. Namibië's meest onderschatte topattractie, en een echte omweg die aanzienlijke extra rijtijd aan de rondrit toevoegt.",
        regionSlug: "fish-river-canyon",
      },
      {
        label: "Dag 4–5",
        text: "Sossusvlei (rijd terug naar het noorden, ~4–5 uur): zonsopkomst bij Dune 45 en Deadvlei met de shuttle, Sesriem Canyon in de middaghitte.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Dag 6",
        text: "Spitzkoppe: een korte omweg op weg naar de kust. Eén nacht voor de zonsondergang, enkele van de beste plekken om te sterrenkijken op de route, en zonsopkomst bij de granieten koepels. De faciliteiten hier zijn rustieke gemeenschapskampeerplaatsen, geen lodgecomfort.",
        regionSlug: "spitzkoppe",
      },
      {
        label: "Dag 7–8",
        text: "Swakopmund: twee nachten aan de kust, één echte activiteit (sandboarden op de duinen net buiten de stad, of een boottocht vanuit Walvis Bay naar de flamingolagune), en het beste eten van de reis.",
        regionSlug: "swakopmund",
      },
      {
        label: "Dag 9–10",
        text: "Damaraland (~3–4 uur vanaf Swakopmund via Uis): de rotstekeningen van Twyfelfontein, een echte UNESCO-werelderfgoedlocatie, op de eerste dag; een begeleide rit op zoek naar woestijnolifanten op de tweede dag (waarnemingen zijn niet gegarandeerd, maar dit is de beste realistische kans in het land).",
        regionSlug: "damaraland",
      },
      {
        label: "Dag 11–13",
        text: "Etosha: drie nachten, verdeeld tussen een lodge in een privéreservaat voor nachtelijke ritten en off-road tracking (niet toegestaan binnen het park) en een camp in het park voor het observeren van verlichte waterpoelen, met genoeg tijd om zowel het oostelijke als het westelijke deel te bezoeken in plaats van voor één kant te kiezen.",
        regionSlug: "etosha",
      },
      {
        label: "Dag 14",
        text: "Rijd terug naar Windhoek (~4,5 uur) voor je vertrekvlucht.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Is Fish River Canyon de omweg waard op een reis van 14 dagen?",
        a: "Ja, als je de dagen hebt: het is een van de grootste kloven ter wereld, met een fractie van de bezoekers van vergelijkbare bezienswaardigheden elders. De eerlijke afweging is de extra rijtijd die het aan de rondrit toevoegt, precies waarom het niet voorkomt in de routes van 7 of 10 dagen.",
      },
      {
        q: "Heb ik specifiek een 4x4 nodig voor de omweg naar Fish River Canyon?",
        a: "Nee, de belangrijkste asfalt- en grindwegen naar het zuiden zijn prima met een 2x4, en de uitzichtpunten aan de rand zelf vereisen helemaal geen 4x4. Het is de combinatie met Damaraland later in dezelfde rondrit die een 4x4 de verstandige keuze maakt voor de hele reis.",
      },
      {
        q: "Kan ik deze route zonder Spitzkoppe doen?",
        a: "Ja, het is een omweg van één nacht, makkelijk te schrappen als je liever een derde nacht in Swakopmund of Sossusvlei toevoegt. Je mist dan een van de beste plekken om te sterrenkijken op de route, wat de enige echte kost is.",
      },
      {
        q: "Kan ik deze route in omgekeerde volgorde afleggen, beginnend met Etosha?",
        a: "Ja, eerst Etosha en Damaraland en dan Fish River Canyon als laatste werkt logistiek net zo goed, omdat geen van beide etappes van de andere afhangt. De volgorde hier is opgebouwd voor het tempo: beginnen in het zuiden brengt je rustig op gang voor de kust, waarna de wildlife van Etosha als hoogtepunt tegen het einde bewaard blijft.",
      },
    ],
  },
  "21-days": {
    title: "Drie weken",
    description: "Het hele land, inclusief de Skeleton Coast, de Caprivi Strip en een wildlife-rijke afsluiting.",
    vehicle:
      "4x4 voor de zelf te rijden etappes: zowel Damaraland als de omweg naar Fish River Canyon vraagt erom. Reken ook op minstens één binnenlandse vlucht: de opvallende noordelijke lodges van de Skeleton Coast en de Caprivi Strip worden vanaf dit punt in de rondrit normaal gesproken per vliegtuig bereikt, niet over de weg.",
    pace: "Het hele land, zonder haast: dit is de route voor reizigers met drie weken die alles willen zien, niet alleen het klassieke parcours.",
    bestFor: "Terugkerende bezoekers, of mensen die voor het eerst komen maar de tijd hebben om Namibië goed te doen, inclusief de meest afgelegen kustlijn en het waterrijke noordoosten.",
    dayByDay: [
      {
        label: "Dag 1",
        text: "Land in Windhoek, haal je 4x4-huurauto op en overnacht in de hoofdstad, het gebruikelijke begin voor drie weken rijden en later minstens één binnenlandse vlucht.",
        regionSlug: "windhoek",
      },
      {
        label: "Dag 2–3",
        text: "Fish River Canyon (~5,5 uur naar het zuiden): de uitzichtpunten aan de rand bij Hobas tijdens het gouden uur, geen wandeling nodig.",
        regionSlug: "fish-river-canyon",
      },
      {
        label: "Dag 4–5",
        text: "Sossusvlei (rijd terug naar het noorden, ~4–5 uur): zonsopkomst bij Dune 45 en Deadvlei met de shuttle, Sesriem Canyon.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Dag 6",
        text: "Spitzkoppe: een korte omweg op weg naar de kust. Eén nacht voor de zonsondergang, enkele van de beste plekken om te sterrenkijken op de route, en zonsopkomst bij de granieten koepels. De faciliteiten hier zijn rustieke gemeenschapskampeerplaatsen, geen lodgecomfort.",
        regionSlug: "spitzkoppe",
      },
      {
        label: "Dag 7–8",
        text: "Swakopmund: twee nachten aan de kust, één echte activiteit (sandboarden of een boottocht vanuit Walvis Bay naar de flamingolagune), en het beste eten van de reis.",
        regionSlug: "swakopmund",
      },
      {
        label: "Dag 9–10",
        text: "Skeleton Coast: twee nachten. De opvallende noordelijke lodges zijn normaal gesproken alleen per vliegtuig vanuit Swakopmund bereikbaar; een korte omweg met de auto vanuit Damaraland bereikt alleen het minder afgelegen zuidelijke deel. Zeehondenkolonies, scheepswrakken en echte afgelegenheid, hoe dan ook.",
        regionSlug: "skeleton-coast",
      },
      {
        label: "Dag 11–12",
        text: "Damaraland: de rotstekeningen van Twyfelfontein, een echte UNESCO-werelderfgoedlocatie, en een begeleide rit op zoek naar woestijnolifanten (waarnemingen zijn niet gegarandeerd, maar dit is de beste realistische kans in het land).",
        regionSlug: "damaraland",
      },
      {
        label: "Dag 13–15",
        text: "Etosha: drie nachten, verdeeld tussen een lodge in een privéreservaat voor nachtelijke ritten en off-road tracking, en camps bij waterpoelen binnen het park, met genoeg tijd om zowel het oostelijke als het westelijke deel te bezoeken in plaats van voor één kant te kiezen.",
        regionSlug: "etosha",
      },
      {
        label: "Dag 16–18",
        text: "Vlieg of maak de lange rit (~12 uur) naar de Caprivi Strip: de meeste mensen vliegen vanaf dit punt naar Katima Mulilo in plaats van te rijden. Drie nachten met riviercruises voor nijlpaarden en vogels, en een game drive in Bwabwata National Park, een echt ander Namibië dan het woestijnparcours achter je.",
        regionSlug: "caprivi",
      },
      {
        label: "Dag 19–21",
        text: "Keer terug naar Windhoek om de rondrit af te sluiten: de meeste reizigers vliegen terug vanaf Katima Mulilo in plaats van de rit van ~12 uur te herhalen, zeker met een internationale vertrekvlucht op dag 21.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Moet ik ergens vliegen tijdens deze route van 21 dagen?",
        a: "Realistisch gezien wel, minstens één keer: de beste lodges van de Skeleton Coast en de Caprivi Strip worden, gezien de afstanden, normaal gesproken per klein vliegtuig of binnenlandse vlucht bereikt in plaats van met de auto. Houd hier rekening mee bij het begroten van deze route.",
      },
      {
        q: "Zijn 3 weken te lang voor Namibië?",
        a: "Niet gezien de rijafstanden in het land: met 3 weken kun je beide uitersten (de Skeleton Coast en Caprivi) toevoegen aan het klassieke parcours zonder dat de hele reis uit reisdagen bestaat. De meeste reizigers die deze lengte kiezen, zijn terugkerende bezoekers of geven specifiek prioriteit aan afgelegenheid.",
      },
      {
        q: "Kan ik deze route met een 2x4 doen in plaats van een 4x4?",
        a: "Niet comfortabel: de D-wegen van Damaraland en de omweg naar Fish River Canyon zijn de twee etappes waar een 4x4 echt verschil maakt, en deze route bevat ze allebei. Wil je bij een 2x4 blijven, dan is de route van 7 dagen daarvoor gebouwd.",
      },
      {
        q: "Kan ik deze route in omgekeerde richting afleggen?",
        a: "Structureel gezien wel: beginnen met Etosha en het noorden, en pas als laatste zuidwaarts naar Fish River Canyon, werkt net zo goed, omdat noch de Skeleton Coast noch de Caprivi-etappes afhangen van de reisrichting. Het enige vaste punt is Windhoek zelf: beide uiteinden van de reis zijn verankerd aan de luchthaven daar, dus welke richting je ook kiest, je vliegt nog steeds in en uit dezelfde stad.",
      },
    ],
  },
};

export const regionsNl: Region[] = regions.map((r) => ({ ...r, ...(regionTranslationsNl[r.slug] ?? {}) }));
export const lodgesNl: Lodge[] = lodges.map((l) => ({ ...l, ...(lodgeTranslationsNl[l.slug] ?? {}) }));
export const selfDriveRoutesNl: RoutePlan[] = selfDriveRoutes.map((r) => ({
  ...r,
  ...(routeTranslationsNl[r.slug] ?? {}),
}));

export function getRegionNl(slug: string): Region | undefined {
  return regionsNl.find((r) => r.slug === slug);
}

export function getLodgeNl(slug: string): Lodge | undefined {
  return lodgesNl.find((l) => l.slug === slug);
}

export function getLodgesForRegionNl(regionSlug: string): Lodge[] {
  return lodgesNl.filter((l) => l.regionSlug === regionSlug);
}

export function getRouteNl(slug: string): RoutePlan | undefined {
  return selfDriveRoutesNl.find((r) => r.slug === slug);
}

export function getLodgesByCategoryNl(category: LodgeCategory): Lodge[] {
  return lodgesNl.filter((l) => l.categories.includes(category));
}

export const featuredLodgesNl: Lodge[] = [
  getLodgeNl("little-kulala")!,
  getLodgeNl("grootberg-lodge")!,
  getLodgeNl("ongava-lodge")!,
  getLodgeNl("canyon-lodge")!,
];
