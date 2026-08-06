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
 * German field overrides, keyed by slug. Non-text fields (slug/lat/lng/image/categories/
 * regionSlug/nights/days) are reused from the English data in data.ts and never overridden
 * here. Missing keys/fields silently fall back to the English value (safe during translation
 * rollout, never crashes a build), but every slug below MUST be fully translated before the
 * /de pages ship, this is a checklist, not a permanent fallback.
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

export const regionTranslationsDe: Record<string, RegionTranslation> = {
  etosha: {
    description:
      "Eine riesige Salzpfanne, gesäumt von Wasserlöchern, an denen sich Elefanten, Löwen und Nashörner in der Abenddämmerung versammeln.",
    quickAnswer:
      "Etosha ist Namibias Vorzeige-Wildreservat: ein 22.000 km² großer Nationalpark rund um eine Salzpfanne, die so riesig ist, dass man sie aus dem All erkennen kann, und die etwa ein Viertel der Parkfläche einnimmt. Der Zugang erfolgt über drei Haupttore: Von Lindequist im Osten, Anderson im Süden bei Okaukuejo und King Nehale im Norden. Welches Tor Sie wählen, bestimmt die gesamte Route. Wer in einer Lodge auf den privaten Grenzreservaten des Parks (Ongava, Onguma) übernachtet, kann an Nachtfahrten und Offroad-Tracking teilnehmen; wer im Park selbst wohnt, beobachtet beleuchtete Wasserlöcher, ohne das Camp zu verlassen.",
    bestFor: "Erstes Safari-Erlebnis, Tierfotografie",
    avoidIf: "Sie einen Strand- oder Küstenabstecher auf derselben Reiseetappe wollen",
    recommendedStay: "3–4 Nächte",
    driveFromWindhoek: "~4,5 Stunden",
    alt: "Ein Elefant steht auf der trockenen, staubigen Ebene des Etosha-Nationalparks",
    pros: [
      "Einige der zuverlässigsten Tierbeobachtungen im südlichen Afrika",
      "Beleuchtete Wasserlöcher bringen die Tiere nach Einbruch der Dunkelheit direkt zu Ihnen",
      "Gut ausgebaute Straßen, in der Trockenzeit auch mit einem normalen 2WD befahrbar",
    ],
    cons: [
      "Tore und Geschwindigkeitsbegrenzungen werden im Nationalpark streng kontrolliert",
      "In der Trockenzeit sammeln sich die Besuchermassen an den belebtesten Wasserlöchern",
      "Unterkünfte im Park sind in der Hochsaison schnell ausgebucht",
    ],
    nearby: ["Damaraland (Felskunst und Wüstenelefanten)", "Waterberg-Plateau"],
    faqs: [
      {
        q: "Wie viele Nächte sollte ich in Etosha verbringen?",
        a: "Drei bis vier Nächte reichen aus, um sowohl den östlichen als auch den westlichen Teil abzudecken, ohne zwischen den Wasserlöchern zu hetzen.",
      },
      {
        q: "Sollte ich im Park oder in einem privaten Reservat übernachten?",
        a: "Private Reservate wie Ongava erlauben Nachtfahrten und Offroad-Tracking, die im Nationalpark selbst nicht gestattet sind, ein echter Kompromiss gegenüber dem klassischen Camp-Erlebnis am beleuchteten Wasserloch im Park.",
      },
      {
        q: "Gibt es aktuell eine Straßensperrung in Etosha?",
        a: "Ja, ein Straßenausbau-Projekt hat die direkte Route zwischen Okaukuejo und Halali gesperrt, mit einer verpflichtenden Umleitung vom 2. Juni 2026 bis Juli 2027. Der Verkehr wird über die Gemsbokvlakte-Umgehung (bis etwa km 47) und den Rhino Drive nach Halali umgeleitet, wobei auf dieser Strecke nur die Wasserlöcher Gemsbokvlakte, Sueda und Salvadora erreichbar sind. Planen Sie deutlich mehr Fahrzeit zwischen den beiden Camps ein, als ältere Reiseführer annehmen, und bestätigen Sie den aktuellen Stand vor der Reise bei NWR, da sich diese Termine je nach Baufortschritt verschieben können.",
      },
      {
        q: "Wie hoch sind die Eintrittsgebühren für Etosha?",
        a: "Die Gebühren stiegen am 1. April 2026 deutlich: Internationale Besucher zahlen jetzt N$280 pro Person und Tag (zuvor N$150) zuzüglich einer Fahrzeuggebühr von N$620 für zwei Personen, SADC-Bürger und Namibier zahlen weniger. Es ist die erste Erhöhung seit 2021, sodass jede vor Mitte 2026 erstellte Reisekostenschätzung diesen Posten inzwischen unterschätzt.",
      },
      {
        q: "Durch welches Tor sollte ich Etosha betreten?",
        a: "Das Anderson Gate im Süden, nahe Okaukuejo, ist der Standardeingang für alle, die von Windhoek oder Sossusvlei anreisen, und liegt am nächsten zu den zuverlässigsten Wasserlöchern des Parks in der Trockenzeit. Das Von Lindequist Gate im Osten ist der natürliche Ausgang (oder Eingang), wenn es weiter Richtung Waterberg oder Caprivi-Streifen geht, und liegt am nächsten zu Fischer's Pan. Das King Nehale Gate im Norden dient hauptsächlich Reisenden aus dem Ovamboland. Die meisten Selbstfahrer-Routen fahren über Anderson ein und über Von Lindequist aus, was eine gerade Durchquerung des Parks statt einer Umkehr ermöglicht.",
      },
      {
        q: "Wie weit liegen Etoshas Wasserlöcher auseinander?",
        a: "Die Abstände variieren stark und sind nicht gleichmäßig verteilt. Wasserlöcher rund um Okaukuejo und Namutoni liegen nur eine kurze Pirschfahrt voneinander entfernt, während manche im ruhigeren Westteil auf Schotterstraßen eine Stunde oder mehr auseinanderliegen können. Planen Sie eine Runde mit drei bis vier Wasserlöchern pro Ausflug, statt zu versuchen, den ganzen Park an einem Tag abzudecken. Allein das Fahren frisst das Tageslicht auf, besonders außerhalb der verpflichtenden Umleitungsstrecke Okaukuejo–Halali.",
      },
    ],
    knownFor: [
      "Beleuchtete Wasserlöcher",
      "Sichtungen von Spitzmaulnashörnern",
      "Selbstfahrer-Tierbeobachtung",
      "Die riesige weiße Salzpfanne",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Reicht nur für den östlichen Teil",
        text: "Zwei Nächte halten Sie im östlichen Teil Etoshas und lassen Sie die Wasserlöcher rund um Namutoni und Halali erkunden. Sie bekommen echte Tierbeobachtungen, verpassen aber die westlichen Dolomite- und Okaukuejo-Wasserlöcher, die die meisten Reiseführer als die besten des Parks bewerten, nur lohnenswert, wenn Etosha einer von mehreren Stopps ist.",
      },
      {
        nights: 4,
        verdict: "Die richtige Länge für einen richtigen Besuch",
        text: "Vier Nächte erlauben es, die Zeit zwischen einem privaten Reservat am Parkrand (für Nachtfahrten und Offroad-Nashorn-Tracking, beides im Park selbst nicht erlaubt) und einem Camp im Park für das Erlebnis der beleuchteten Wasserlöcher nach Einbruch der Dunkelheit aufzuteilen. Sie decken sowohl die östliche als auch die westliche Hälfte ab, ohne zwischen den Toren zu hetzen.",
      },
    ],
  },
  sossusvlei: {
    description:
      "Die hoch aufragenden roten Dünen der Namib, abgestorbene Kameldornbäume und einige der dunkelsten Nachthimmel der Erde.",
    quickAnswer:
      "Sossusvlei ist das Postkartenmotiv Namibias: über 300 Meter hohe rote Dünen, die aus einer weißen Lehmpfanne im Namib-Naukluft-Park aufragen, Teil einer Wüste, die weithin als eine der ältesten der Welt gilt. Dune 45, die meistbestiegene und meistfotografierte Düne, verdankt ihren Namen schlicht ihrer Lage 45 km von Sesriem-Tor entfernt an der Straße; Deadvleis fossile Kameldornbäume, die seit Jahrhunderten in einer Pfanne stehen, die zu trocken ist, um sie verrotten zu lassen, liegen einen kurzen Fußweg weiter. Wer in einer Lodge auf einem privaten Reservat am Parkrand übernachtet (etwa im Kulala Wilderness Reserve), profitiert von einem eigenen Tor, das dem Sonnenaufgangs-Andrang am öffentlichen Eingang zuvorkommt.",
    bestFor: "Fotografie, Sonnenaufgangs-Dünenwanderungen",
    avoidIf: "Sie frühes Aufstehen nicht mögen: Das beste Licht gibt es vor 8 Uhr",
    recommendedStay: "2–3 Nächte",
    driveFromWindhoek: "~5 Stunden",
    alt: "Eine hoch aufragende rote Sanddüne in der Namib-Wüste bei Sossusvlei",
    pros: [
      "Eine der meistfotografierten Landschaften Afrikas, zu Recht",
      "Lodges auf privaten Reservaten haben ein eigenes Parktor, noch vor der öffentlichen Warteschlange",
      "Einige der dunkelsten Nachthimmel der Welt zum Sternenbeobachten",
    ],
    cons: [
      "Die Tageshitze ist von Oktober bis März extrem",
      "Für die letzte Etappe nach Sossusvlei braucht es einen 4x4 oder den Shuttle",
      "Von Deadvlei sind es vom 2x4-Parkplatz noch einmal 20 bis 45 Minuten zu Fuß",
    ],
    nearby: ["Sesriem-Canyon", "NamibRand Nature Reserve"],
    faqs: [
      {
        q: "Brauche ich einen 4x4, um Sossusvlei zu besuchen?",
        a: "Für die Anfahrt nein, für die letzte Etappe ja. Die Teer- und Schotterstraße nach Sesriem ist mit einem normalen Auto problemlos befahrbar; die letzten 5 km Sandpiste nach Sossusvlei selbst erfordern einen 4x4 oder den Shuttle-Service des Parks. Unser Selbstfahrer-Guide behandelt die Fahrzeugwahl für den Rest des Landes, falls Sie eine komplette Rundreise planen.",
      },
      {
        q: "Zu welcher Uhrzeit sollte ich an den Dünen ankommen?",
        a: "Direkt bei Toröffnung, also bei Sonnenaufgang. Wer dann kommt, entgeht sowohl der Hitze als auch den Menschenmassen an Dune 45 und in Deadvlei. Schon 30 Minuten später in der Hochsaison ist der Parkplatz in Sesriem bereits voll.",
      },
      {
        q: "Kann ich noch selbst zu Deadvlei fahren?",
        a: "Nein, seit dem 1. Mai 2026 sind private Fahrzeuge, auch 4x4s, auf der letzten rund 5 km langen Sandpiste vom 2x4-Parkplatz zum Deadvlei/Big-Daddy-4x4-Parkplatz nicht mehr zugelassen. Diese Strecke ist jetzt reine Shuttle-Zone, mit dem offiziellen Shuttle-Service oder einem bei der NTB registrierten Lodge-Tourfahrzeug, für etwa N$260 pro Erwachsenem und N$130 pro Kind unter 12 Jahren (Preise können sich ändern, aktuelle Tarife vor der Reise bestätigen). Es ist eine kürzlich eingeführte Änderung zum Schutz des Namib-Sandmeers, und Wartezeiten am Shuttle von rund 30 Minuten werden häufig berichtet, das sollten Sie bei der Morgenplanung einkalkulieren.",
      },
      {
        q: "Wie hoch sind die Dünen bei Sossusvlei?",
        a: "Big Daddy, neben Deadvlei, ist mit rund 325 Metern die höchste Düne der unmittelbaren Umgebung und zählt zu den höchsten Dünen der Erde. Dune 45, die meistbestiegene, ist niedriger, aber deutlich zugänglicher und erhebt sich direkt am Straßenrand, 45 km vom Sesriem-Tor entfernt. „Big Mama“, direkt neben Deadvlei, ist der kürzere, leichtere Aufstieg, falls der Grat von Big Daddy vor dem Frühstück zu viel erscheint.",
      },
      {
        q: "Wie tief ist der Sesriem-Canyon?",
        a: "Der Sesriem-Canyon schneidet sich auf etwa einem Kilometer Länge rund 30 Meter tief in die Ebene, geformt vom Tsauchab-Fluss, flach genug, um ihn ohne technische Ausrüstung zu begehen, und eine gute schattige Option für den Mittag, wenn es zum Dünenklettern zu heiß wird.",
      },
    ],
    knownFor: [
      "300 Meter hohe rote Dünen",
      "Deadvleis abgestorbene Kameldornbäume",
      "Einige der dunkelsten Nachthimmel der Erde",
      "Dünenwanderungen bei Sonnenaufgang",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Machbar, aber nur ein Sonnenaufgang an den Dünen",
        text: "Zwei Nächte geben Ihnen eine volle Sonnenaufgangs-Session: Dune 45, dann Deadvlei per Shuttle, dann am kühleren späten Nachmittag der Sesriem-Canyon. Es ist knapp: Sie bekommen das Postkartenfoto, aber keinen Puffer, falls Licht oder Energie am ersten Morgen nicht passen.",
      },
      {
        nights: 3,
        verdict: "Die richtige Länge für einen richtigen Besuch",
        text: "Drei Nächte geben Ihnen zwei Sonnenaufgangs-Sessions an den Dünen statt nur einer, Raum für eine Sternenbeobachtung auf der Seite des NamibRand Nature Reserve und einen echten freien Nachmittag, statt direkt weiterzufahren. Das ist die Aufenthaltsdauer, die wir tatsächlich buchen würden.",
      },
    ],
  },
  swakopmund: {
    description:
      "Eine koloniale Küstenstadt, in der die Dünen auf den Atlantik treffen und das Reisetempo endlich nachlässt.",
    quickAnswer:
      "Swakopmund ist Namibias Reset-Knopf an der Küste: eine begehbare deutsch-koloniale Stadt, 1892 als Haupthafen für Deutsch-Südwestafrika gegründet, eingeklemmt zwischen den Namib-Dünen und einer kühlen Atlantikdünung. Die Stadt hat wirklich gute Restaurants, ein volles Programm an Adrenalin-Aktivitäten (Fallschirmspringen, Sandboarding, Quad-Biking) direkt vor der Tür und liegt weniger als eine Stunde von der Walvis-Bay-Lagune entfernt, einem Ramsar-geschützten Feuchtgebiet, das Tausende Zwerg- und Rosaflamingos anzieht.",
    bestFor: "Eine Pause vom Selbstfahren, Abenteueraktivitäten",
    avoidIf: "Ihnen die Tage knapp sind und Sie der Tierbeobachtung Vorrang geben müssen",
    recommendedStay: "2 Nächte",
    driveFromWindhoek: "~4 Stunden",
    alt: "Der rot-weiße Leuchtturm von Swakopmund, Namibia",
    pros: [
      "Mit Abstand das beste Essen und der beste Kaffee auf einer namibischen Selbstfahrer-Route",
      "Ein echter Tempowechsel nach Tagen voller Fahrten und Pirschfahrten",
      "Breites Angebot an Aktivitäten, direkt über das Hotel buchbar",
    ],
    cons: [
      "Küstennebel (der „Skeleton-Coast-Dunst“) kann bis in den späten Vormittag anhalten",
      "Der Atlantik ist hier zu kalt und rau zum Schwimmen",
      "Die Meeresbrise macht die Abende kühler als im Wüsteninland",
    ],
    nearby: ["Walvis-Bay-Lagune (Flamingos)", "Dünengürtel der Namib-Wüste"],
    faqs: [
      {
        q: "Lohnen sich zwei Nächte in Swakopmund?",
        a: "Ja, wenn Sie eine Küstenaktivität wie Sandboarding oder einen Bootsausflug nach Walvis Bay einplanen wollen, ohne zu hetzen; eine Nacht reicht nur für ein Abendessen und einen Spaziergang durch die Stadt.",
      },
      {
        q: "Wie kalt ist der Atlantik in Swakopmund?",
        a: "Kalt genug, dass Schwimmen nicht der Grund für einen Besuch ist. Der Benguelastrom zieht kaltes Wasser aus dem Südatlantik heran und hält das Meer das ganze Jahr über kühl, selbst wenn die Luft über den Dünen kurz landeinwärts heiß ist. Er erzeugt auch den Küstennebel, der bis in den späten Vormittag anhalten kann, manchmal als „Skeleton-Coast-Dunst“ bezeichnet, derselbe Stromeffekt, der die Region weiter nördlich prägt.",
      },
      {
        q: "Kann ich in Swakopmund Fallschirmspringen?",
        a: "Ja, Tandemsprünge über dem Dünengürtel und der Küste gehören zu den Signatur-Aktivitäten der Stadt, mit Absprung aus einem kleinen Flugzeug vom örtlichen Flugplatz, je nach Wetter und Nebel. Sandboarding und Quad-Biking auf den Dünen direkt vor der Stadt hängen nicht wie das Fallschirmspringen von klarem Himmel ab und sind daher die zuverlässigere Alternative, wenn sich der Morgennebel nicht gelichtet hat.",
      },
    ],
    knownFor: [
      "Deutsch-koloniale Architektur",
      "Fallschirmspringen und Sandboarding",
      "Flamingos in Walvis Bay",
      "Das beste Essen Namibias",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "Fein als Zwischenstopp, kein richtiger Besuch",
        text: "Eine Nacht reicht, um über die Mole zu spazieren, gut zu essen und einmal woanders als in einer Lodge zu schlafen. Für eine Aktivität bleibt keine Zeit. Sehen Sie es als Verschnaufpause, nicht als Ziel.",
      },
      {
        nights: 2,
        verdict: "Die richtige Länge, um wirklich etwas zu unternehmen",
        text: "Zwei Nächte lassen Raum für eine echte Aktivität (Sandboarding auf den Dünen direkt vor der Stadt, ein Fallschirmsprung über der Küste oder ein Bootsausflug zur Flamingo-Lagune in Walvis Bay) zusätzlich zum Spaziergang-und-Essen-Programm einer einzelnen Nacht.",
      },
    ],
  },
  damaraland: {
    description:
      "Ockerfarbene Berge, wüstenangepasste Elefanten und einige der eindrucksvollsten Felsmalereien Namibias.",
    quickAnswer:
      "Damaraland ist das Herzstück der namibischen Gemeinschaftsschutzgebiete: eine offene, ockerfarbene Bergwüste, in der wüstenangepasste Elefanten zwischen trockenen Flussbetten umherziehen und mehrere Lodges wirklich im Besitz der lokalen Gemeinschaft sind, nicht nur in deren Nähe liegen. Twyfelfontein, seit 2007 UNESCO-Weltkulturerbe, beherbergt eine der größten Ansammlungen von Felsgravuren Afrikas, manche über 2.000 Jahre alt. Die umliegende Kunene-Region beheimatet zudem eine der größten frei lebenden Spitzmaulnashorn-Populationen weltweit außerhalb eines eingezäunten Nationalparks.",
    bestFor: "Abgelegene Landschaften, wüstenangepasste Tierwelt",
    avoidIf: "Sie garantierte tägliche Tierbeobachtungen brauchen",
    recommendedStay: "2–3 Nächte",
    driveFromWindhoek: "~5,5 Stunden",
    alt: "Felsige Wüstenlandschaft von Damaraland bei Sonnenuntergang",
    pros: [
      "Mehrere Lodges sind direkt im Besitz der Gemeinschaft, nicht nur mit ihrem Namen versehen",
      "Tracking wüstenangepasster Elefanten und Nashörner zu Fuß oder mit dem Fahrzeug",
      "Twyfelfonteins Felsgravuren sind ein echtes UNESCO-Weltkulturerbe",
    ],
    cons: [
      "Die Tierwelt ist wild und frei lebend: Sichtungen sind nicht garantiert",
      "Die Entfernungen zwischen den Sehenswürdigkeiten sind lang auf Schotterstraßen",
      "Weniger kulinarische Optionen als an der Küste oder in der Hauptstadt",
    ],
    nearby: ["Twyfelfontein-Felskunst", "Skeleton Coast", "Spitzkoppe"],
    faqs: [
      {
        q: "Kann ich in Damaraland Elefanten sehen?",
        a: "Eine Garantie gibt es nicht, aber geführtes Tracking gibt eine echte Chance. Wüstenangepasste Elefanten bewegen sich entlang trockener Flussbetten, und Sichtungen sind nie garantiert, aber geführtes Tracking mit einer lokalen Lodge bietet die realistisch beste Chance. Unser Tierwelt-Guide behandelt, was von wüstenangepassten Arten im ganzen Land sonst noch zu erwarten ist.",
      },
      {
        q: "Wo kann ich wüstenangepasste Nashörner sehen, nicht nur Elefanten?",
        a: "Die Palmwag Concession im westlichen Damaraland ist einer der wenigen Orte Afrikas, an denen Spitzmaulnashorn-Tracking zu Fuß angeboten wird, in Partnerschaft mit lokalen Gemeinschaftsschutzgebieten, demselben Modell, das auch die wüstenangepassten Elefanten der Region schützt. Es wird meist als eigene Aktivität über eine Lodge im Palmwag-Gebiet gebucht statt als spontane Ergänzung, planen Sie es also im Voraus ein, falls es Ihnen wichtig ist.",
      },
      {
        q: "Lohnt sich Twyfelfontein auch ohne Interesse an Felskunst?",
        a: "Ja, allein wegen der Landschaft. Der Ort liegt inmitten von Damaralands ockerfarbenen Sandsteinformationen, darunter die Organ Pipes und der Burnt Mountain in der Nähe, beide den kurzen Abstecher wert, selbst wenn die Gravuren selbst nicht Ihr Hauptinteresse sind.",
      },
    ],
    knownFor: [
      "Wüstenangepasste Elefanten",
      "Twyfelfontein-Felsgravuren (UNESCO)",
      "Lodges im Besitz der Gemeinschaft",
      "Ockerfarbene Berglandschaft",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Deckt die Highlights ab, eine Chance auf Tierbeobachtung",
        text: "Zwei Nächte decken Twyfelfonteins Felsgravuren und eine geführte Fahrt auf der Suche nach wüstenangepassten Elefanten ab. Sichtungen sind bei keinem einzelnen Ausflug garantiert, das ist also das Minimum, nicht das Ideal.",
      },
      {
        nights: 3,
        verdict: "Die richtige Länge, da Tierbeobachtungen nicht garantiert sind",
        text: "Drei Nächte verschaffen einen zweiten Tierbeobachtungs-Ausflug, falls der erste ergebnislos bleibt, plus Zeit für geführtes Spitzmaulnashorn-Tracking in der Palmwag Concession, einem der wenigen Orte Afrikas, an denen dies zu Fuß angeboten wird, in Partnerschaft mit Gemeinschaftsschutzgebieten.",
      },
    ],
  },
  "skeleton-coast": {
    description:
      "Nebel, Schiffswracks und Robbenkolonien entlang einer der abgelegensten Küsten Afrikas.",
    quickAnswer:
      "Die Skeleton Coast ist Namibias abgelegenste, am wenigsten besuchte Landschaft: ein nebelverhangener Küstenstreifen, an dem die Namib-Dünen direkt in einen kalten, wrackübersäten Atlantik übergehen. Frühe portugiesische Seefahrer nannten sie „Die Tore der Hölle“: derselbe kalte Benguelastrom, der den Nebel erzeugt, macht die Küste auch tückisch, und havarierte Schiffe liegen bis heute halb im Sand vergraben. Die meisten Reisenden sehen sie auf einem kurzen Abstecher von Damaraland aus oder fliegen für einen richtigen mehrnächtigen Aufenthalt mit einem spezialisierten Anbieter ein.",
    bestFor: "Abgelegene Abenteuer, Fly-in-Reisen",
    avoidIf: "Sie einen engen Selbstfahrer-Zeitplan mit wenigen Tagen haben",
    recommendedStay: "2 Nächte",
    driveFromWindhoek: "~7 Stunden (oder Einflug)",
    alt: "Ein an den Strand der Skeleton Coast gespültes Schiffswrack, Namibia",
    pros: [
      "Echte Abgeschiedenheit: manche Lodges sehen hundert Kilometer weit keinen anderen Verkehr",
      "Ausflüge zu Robbenkolonien, Schiffswracks und wüstenangepasster Tierwelt",
      "Eine der dramatischsten, am wenigsten fotografierten Küsten Afrikas",
    ],
    cons: [
      "Die richtige Anreise bedeutet meist Fliegen, was echte Zusatzkosten verursacht",
      "Anhaltender Küstennebel kann die Sicht an großen Teilen des Tages einschränken",
      "Sehr wenige Unterkunftsmöglichkeiten: früh buchen",
    ],
    nearby: ["Damaraland", "Kaokoveld / Kunene-Region"],
    faqs: [
      {
        q: "Muss ich zur Skeleton Coast fliegen?",
        a: "Nur für den hohen Norden. Ein kurzer südlicher Abschnitt ist per Selbstfahrer von Damaraland aus erreichbar, aber die nördliche Skeleton Coast (wo die herausragendsten Lodges liegen) ist normalerweise nur per Einflug zugänglich.",
      },
      {
        q: "Gehört Cape Cross zur Skeleton Coast?",
        a: "Ja, Cape Cross liegt am südlichen Ende der Skeleton Coast, per Selbstfahrer von Swakopmund oder Damaraland aus erreichbar, und beheimatet eine der größten Kolonien von Kap-Pelzrobben des Kontinents, Zehntausende Tiere zur Saison. Es ist die zugängliche Selbstfahrer-Variante des Skeleton-Coast-Erlebnisses; die Fly-in-Lodges weiter nördlich decken den wirklich abgelegenen Abschnitt ab.",
      },
      {
        q: "Was ist die beste Tageszeit für einen Besuch der Skeleton Coast?",
        a: "Der Nachmittag, sobald sich der Nebel gelichtet hat. Der Küstennebel ist ein ganzjähriger Effekt des Benguelastroms, der typischerweise bis zum späten Vormittag verschwindet, weshalb die meisten Anbieter Ausflüge für den Nachmittag ansetzen, statt früher am Tag gegen die Sicht anzukämpfen.",
      },
    ],
    knownFor: [
      "Schiffswracks",
      "Kap-Pelzrobben-Kolonien",
      "Absolute Abgeschiedenheit",
      "Nebelverhangene Küste",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Die Standardlänge, und sie funktioniert",
        text: "Zwei Nächte sind das, was die meisten Fly-in-Reisen bieten, und das reicht: ein Nachmittag für einen Ausflug zu einer Robbenkolonie oder einem Schiffswrack, ein voller Tag für eine Küstenfahrt mit dem Guide, und eingeplante Zeit, damit sich der Nebel lichtet, bevor der Tagesplan feststeht.",
      },
    ],
  },
  windhoek: {
    description:
      "Namibias kompakte, deutsch geprägte Hauptstadt: Die meisten Reiserouten beginnen und enden hier.",
    quickAnswer:
      "Windhoek ist der Ort, an dem fast jede Namibia-Reise beginnt und endet, dank des Hosea Kutako International Airport, der selbst rund 45 Minuten außerhalb des Stadtzentrums liegt. Die Hauptstadt liegt über 1.600 Meter hoch im Khomas-Hochland, was die Abende kühler hält, als man so weit im südlichen Afrika selbst im Sommer erwarten würde. Sie ist kompakt, teilweise zu Fuß erkundbar, und eine Nacht lohnt sich, um den Mietwagen abzuholen, sich an die Zeitzone zu gewöhnen und gut zu essen, bevor es in die Wüste geht.",
    bestFor: "An- und Abreisenächte",
    avoidIf: "Sie am selben Tag einen Anschlussflug haben und nicht übernachten müssen",
    recommendedStay: "1 Nacht",
    driveFromWindhoek: "Entfällt",
    alt: "Die Christuskirche, ein Wahrzeichen in Windhoek, Namibia",
    pros: [
      "Die beste Restaurant- und Kaffeeszene außerhalb von Swakopmund",
      "Ein einfacher, unkomplizierter Ort zur Eingewöhnung vor oder nach einer langen Fahrt",
      "Zentral gelegen für Abholung und Rückgabe des Mietwagens",
    ],
    cons: [
      "Kein eigenständiges Ziel für Tierbeobachtung oder Landschaft",
      "Der Flughafen liegt rund 45 Minuten außerhalb des Stadtzentrums",
      "Die Sicherheit im Stadtzentrum nach Einbruch der Dunkelheit erfordert normale Stadtvorsicht",
    ],
    nearby: ["Daan-Viljoen-Wildreservat", "Auas-Berge"],
    faqs: [
      {
        q: "Reicht eine Nacht in Windhoek?",
        a: "Ja, für die meisten Reiserouten ist eine Nacht am Anfang und Ende der Reise Standard, mehr, wenn Sie spät landen oder früh abfliegen.",
      },
      {
        q: "Was ist die Christuskirche?",
        a: "Es ist Windhoeks bekanntestes Wahrzeichen, eine lutherische Kirche, Anfang des 20. Jahrhunderts aus lokalem Sandstein an einem markanten Kreisverkehr im Stadtzentrum erbaut. Die meisten Selbstfahrer-Routen kommen auf dem Weg zum oder vom Flughafen in Sichtweite vorbei, auch ohne geplanten Halt.",
      },
      {
        q: "Ist Windhoek zu Fuß sicher?",
        a: "Das Zentrum von Windhoek ist tagsüber mit normaler Stadtvorsicht zu Fuß erkundbar, aber wie in den meisten Hauptstädten ist nach Einbruch der Dunkelheit mehr Vorsicht angebracht, besonders rund um den Bahnhof und ruhigere Seitenstraßen. Bleiben Sie in gut beleuchteten, belebten Bereichen oder nehmen Sie nachts eine kurze Taxifahrt zurück zum Hotel. Unser Sicherheits- und Gesundheits-Guide gibt das vollständige Bild für den Rest des Landes.",
      },
    ],
    knownFor: [
      "Das Wahrzeichen Christuskirche",
      "Deutsch-namibische Küche",
      "Zentrum für Mietwagenabholung",
      "Kunsthandwerks- und Souvenirmärkte",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "Das ist wirklich alles, was Windhoek braucht",
        text: "Eine Nacht am Anfang und Ende der Reise ist das Standardmuster, genug Zeit, um den Mietwagen abzuholen oder zurückzugeben, ein gutes Abendessen zu genießen und sich vor oder nach den langen Fahrten einzustellen. Es ist kein eigenständiges Landschafts- oder Tierbeobachtungsziel.",
      },
    ],
  },
  "fish-river-canyon": {
    description:
      "Der zweitgrößte Canyon der Erde, am schönsten zur goldenen Stunde vom Rand aus gesehen.",
    quickAnswer:
      "Der Fish River Canyon ist Namibias Süden, und seine am meisten übersehene Hauptattraktion: eine 160 km lange, bis zu 550 m tiefe Schlucht, oft als zweitgrößter Canyon der Erde bezeichnet, die dem Grand Canyon an Ausmaß Konkurrenz macht, allerdings ohne die Menschenmassen. Die meisten Besucher sehen ihn von den Aussichtspunkten am Rand; ambitionierte Wanderer nehmen den mehrtägigen Trail unten in Angriff, der bei Ai-Ais endet, wo heiße Quellen mit rund 60 °C aus dem Boden treten.",
    bestFor: "Wandern, dramatische Aussichtspunkte",
    avoidIf: "Der Süden nicht in Ihre Route passt: Es ist ein Abstecher von der Hauptroute",
    recommendedStay: "1–2 Nächte",
    driveFromWindhoek: "~5,5 Stunden",
    alt: "Ein erhöhter Blick über den Fish River Canyon im Süden Namibias",
    pros: [
      "Einer der größten Canyons der Erde, mit einem Bruchteil der Besucher",
      "Aussichtspunkte am Rand erfordern überhaupt kein Wandern",
      "Der mehrtägige Fish River Canyon Trail ist eine echte Bucket-List-Wanderung",
    ],
    cons: [
      "Es ist ein echter Abstecher in den Süden: fügt einer Standardroute erheblich mehr Fahrzeit hinzu",
      "Der mehrtägige Trail läuft nur von Mai bis September und erfordert ein ärztliches Attest",
      "Sehr wenige Unterkunftsmöglichkeiten in der Nähe",
    ],
    nearby: ["Ai-Ais-Thermalquellen", "Grenzregion Namibia/Südafrika"],
    faqs: [
      {
        q: "Kann ich den Canyon ohne Wandern sehen?",
        a: "Ja, die Hauptaussichtspunkte am Rand bei Hobas sind nur einen kurzen Fußweg vom Parkplatz entfernt und bieten den klassischen Blick auf den Canyon.",
      },
      {
        q: "Welche Regeln gelten für die mehrtägige Fish-River-Canyon-Wanderung?",
        a: "Der Trail ist saisonal geöffnet, ungefähr vom 1. Mai bis 15. September, wobei die genauen Öffnungs- und Schließtermine jedes Jahr von Namibia Wildlife Resorts (NWR) anhand des Flusspegels festgelegt werden. Sie benötigen ein ärztliches Attest und eine Mindestgruppengröße von 3 Personen (Alleinwandern ist nicht erlaubt), mit im Voraus direkt über NWR gebuchten Genehmigungen. Bestätigen Sie die aktuellen Termine der laufenden Saison, bevor Sie planen, da sie sich von Jahr zu Jahr verschieben.",
      },
      {
        q: "Kann ich Ai-Ais mit den Aussichtspunkten am Rand kombinieren, ohne den ganzen Trail zu wandern?",
        a: "Ja, das Ai-Ais Hot Springs Resort ist am südlichen Ende des Canyons per Straße erreichbar, ganz ohne den mehrtägigen Trail oberhalb zu wandern. Ein Besuch der Aussichtspunkte bei Hobas und ein Bad in Ai-Ais lassen sich also in derselben kurzen Reise kombinieren. Die beiden sind per Straße verbunden, nicht nur über den Wanderweg, was manche Reisende überrascht.",
      },
      {
        q: "Wie schneidet der Fish River Canyon im Vergleich zum Grand Canyon ab?",
        a: "Er ist kleiner, aber immer noch riesig. Der Fish River Canyon erstreckt sich über rund 160 km Länge und bis zu 550 m Tiefe, verglichen mit den rund 450 km Länge und Tiefen von bis zu 1.800 m des Grand Canyon. Er spielt also in derselben Größenordnung mit, ohne an die Besucherzahlen oder Infrastruktur des Grand Canyon heranzureichen.",
      },
    ],
    knownFor: [
      "Der zweitgrößte Canyon der Erde",
      "Der mehrtägige Fish-River-Wanderweg",
      "Ai-Ais-Thermalquellen",
      "Aussichten vom Rand zur goldenen Stunde",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "Reicht für den Rand, nicht für den Trail",
        text: "Eine Nacht deckt die Hauptaussichtspunkte bei Hobas zur goldenen Stunde ab (kein Wandern nötig), was die meisten Reisenden tatsächlich suchen. Für den mehrtägigen Trail unterhalb des Rands bleibt kein Raum, der braucht eine eigene, dedizierte Reise.",
      },
      {
        nights: 2,
        verdict: "Die richtige Länge für Rand-Besucher",
        text: "Zwei Nächte geben Ihnen sowohl eine Sonnenuntergangs- als auch eine Sonnenaufgangs-Session an den Aussichtspunkten, die die Farbe des Canyons völlig verändern, plus Zeit für ein Bad in den Ai-Ais-Thermalquellen auf dem Weg hinaus, statt einfach durchzufahren.",
      },
    ],
  },
  caprivi: {
    description:
      "Namibias grüner, wasserreicher Ausläufer: Flüsse, Überschwemmungsebenen und ein völlig anderer Rhythmus.",
    quickAnswer:
      "Der Caprivi-Streifen (2013 offiziell in Sambesi-Region umbenannt) ist ein völlig anderes Namibia: ein schmaler, wasserreicher Ausläufer aus Flüssen und Überschwemmungsebenen, der an Botswana, Sambia und Angola grenzt und sich besser für Vogelbeobachtung und flussgebundene Tierwelt eignet als die Wüstenroute weiter südlich. Der Streifen selbst ist ein Überbleibsel kolonialer Kartografie: Deutschland erwarb ihn 1890 im Helgoland-Sansibar-Vertrag, gezielt um Deutsch-Südwestafrika einen Korridor zum Sambesi zu verschaffen, und der alte Name (nach dem deutschen Reichskanzler Leo von Caprivi) hält sich im Alltagsgebrauch, obwohl sich der offizielle Name geändert hat.",
    bestFor: "Erweiterung nach Botswana oder Sambia",
    avoidIf: "Sie ausschließlich die klassische Dünen-und-Wüsten-Route fahren",
    recommendedStay: "2 Nächte",
    driveFromWindhoek: "~12 Stunden (die meisten fliegen nach Katima Mulilo)",
    alt: "Silhouettenhafte Bäume entlang eines Flusses bei Sonnenuntergang im Caprivi-Streifen",
    pros: [
      "Eine wirklich andere Landschaft als der Rest Namibias: Flüsse statt Wüste",
      "Starke Vogelbeobachtung und flussgebundene Tierbeobachtung",
      "Eine natürliche Brücke zu Botswanas Okavango-Delta oder Chobe",
    ],
    cons: [
      "Weit vom Rest des Landes entfernt: Die meisten fliegen statt zu fahren",
      "Malaria-Vorsichtsmaßnahmen sind hier relevant, anders als im Rest Namibias",
      "Begrenzte Lodge-Auswahl im Vergleich zu den Wüstenregionen",
    ],
    nearby: ["Chobe-Nationalpark (Botswana)", "Bwabwata-Nationalpark"],
    faqs: [
      {
        q: "Lohnt es sich, den Caprivi-Streifen in eine Namibia-Reise einzubauen?",
        a: "Am besten als Erweiterung behandeln, nicht als eigenständigen Stopp. Er eignet sich gut für Reisende, die weiter nach Botswana oder Sambia reisen, weniger als Stopp auf einer klassischen zweiwöchigen Namibia-Rundreise.",
      },
      {
        q: "Ist Malaria im Caprivi-Streifen konkret ein Risiko?",
        a: "Ja, anders als im Rest Namibias besteht in der Sambesi-Region wegen ihrer Flüsse und Feuchtgebiete ein ganzjähriges Malariarisiko, weshalb Malariaprophylaxe hier ernst zu nehmen ist, selbst wenn Sie sie für den Rest einer wüstenfokussierten Reise ausgelassen haben. Unser Sicherheits- und Gesundheits-Guide enthält aktuelle Empfehlungen vor der Reise, da sich diese ändern können.",
      },
      {
        q: "Kann ich den Caprivi-Streifen mit Botswanas Okavango-Delta oder Chobe kombinieren?",
        a: "Ja, das ist der Hauptgrund, warum ihn die meisten Reisenden ergänzen. Die Sambesi-Region grenzt direkt an Botswana, und der Bwabwata-Nationalpark sowie das Kwando-Linyanti-Flusssystem hier schließen natürlich an den Chobe-Nationalpark oder das Okavango-Delta auf der anderen Seite der Grenze an, was es zu einer praktischen Erweiterung statt einer separaten Reise macht.",
      },
    ],
    knownFor: [
      "Überschwemmungsebenen des Sambesi",
      "Vogelbeobachtung",
      "Die Brücke zu Botswanas Okavango/Chobe",
      "Flusspferde und Flusswildtiere",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Die Standardlänge für einen Erweiterungsstopp",
        text: "Zwei Nächte decken eine Flusskreuzfahrt für Flusspferde und Vogelwelt sowie eine Pirschfahrt im Bwabwata-Nationalpark ab, genug, um den anderen Rhythmus der Region zu spüren, bevor es weiter nach Botswana oder Sambia geht oder zurück zur Wüstenroute geflogen wird.",
      },
    ],
  },
  spitzkoppe: {
    description:
      "Steil aus der Ebene aufragende Granitgipfel, Namibias Antwort auf den Tafelberg.",
    quickAnswer:
      "Spitzkoppe ist eine Gruppe von Granitgipfeln, die direkt aus flachen Schotterebenen aufragt: Der Hauptgipfel erreicht rund 1.784 m und steht etwa 600 m über der umgebenden Ebene, mit einem Granit, der auf über 120 Millionen Jahre geschätzt wird, weshalb er manchmal „das Matterhorn Namibias“ genannt wird. Es ist ein einfacher Ein-Nacht-Abstecher zwischen Swakopmund und Damaraland und einer der besten Orte zur Sternenbeobachtung entlang der gesamten Route, ohne Lichtverschmutzung im Umkreis von hundert Kilometern.",
    bestFor: "Sternenbeobachtung, Ein-Nacht-Abstecher",
    avoidIf: "Sie vollen Lodge-Komfort wollen: Hier ist es größtenteils einfaches Camping",
    recommendedStay: "1 Nacht",
    driveFromWindhoek: "~3,5 Stunden",
    alt: "Granitgipfel von Spitzkoppe ragen aus den namibischen Wüstenebenen auf",
    pros: [
      "Zu den besten Sternenbeobachtungsplätzen auf einer namibischen Selbstfahrer-Route",
      "Einfacher, kurzer Abstecher, der keinen vollen Fahrtag kostet",
      "Dramatisches Sonnenuntergangs- und Sonnenaufgangslicht auf den Granitkuppeln",
    ],
    cons: [
      "Die meisten Unterkünfte vor Ort sind einfache Gemeinschaftscampingplätze, keine Lodges",
      "Sehr begrenzte Einrichtungen: Vorräte selbst mitbringen",
      "Offenes Gelände bedeutet keinen Schatten während der Tageshitze",
    ],
    nearby: ["Swakopmund", "Erongo-Gebirge"],
    faqs: [
      {
        q: "Lohnt sich in Spitzkoppe eine Übernachtung?",
        a: "Ja, schon allein wegen Sonnenuntergang, Sternenhimmel und Sonnenaufgang, es ist eine der fotogensten einzelnen Nächte auf einer namibischen Route.",
      },
      {
        q: "Wo findet man die beste Felskunst in Spitzkoppe?",
        a: "Bushman's Paradise, ein Felsunterstand auf der Ostseite des Massivs, erreichbar über eine kurze Kletterpartie, beherbergt einige der bekanntesten Malereien des Ortes, darunter Darstellungen von Elefanten. Der Ort wird meist mit einem lokalen Gemeinschaftsguide besucht, sowohl wegen des Aufstiegs als auch weil das Guiding hier direkt das umliegende Schutzgebiet unterstützt.",
      },
      {
        q: "Kann ich Spitzkoppe besteigen?",
        a: "Der Hauptgipfel ist eine technische Kletterei, keine Wanderung. Er wurde erst 1946 erstbestiegen und erfordert bis heute Seile und Klettererfahrung. Die meisten Besucher gehen stattdessen die kürzeren, unmarkierten Pfade rund um den Fuß und zu Aussichtspunkten wie dem natürlichen Felsbogen, für die keinerlei Kletterausrüstung nötig ist.",
      },
    ],
    knownFor: [
      "Granit-Inselberge",
      "Sternenbeobachtung",
      "Buschmann-Felskunst",
      "Sonnenuntergangs- und Sonnenaufgangsfotografie",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "Das ist der ganze Sinn von Spitzkoppe",
        text: "Eine Nacht ist die Standard- und richtige Länge: rechtzeitig für den Sonnenuntergang auf den Granitkuppeln ankommen, die Nacht unter einem der klarsten Himmel der Route verbringen und den Sonnenaufgang erleben, bevor es weitergeht. Es ist ein Abstecher, kein Ziel für sich.",
      },
    ],
  },
};

type LodgeTranslation = Partial<Pick<Lodge, "description" | "highlights" | "bestFor" | "alt">>;

export const lodgeTranslationsDe: Record<string, LodgeTranslation> = {
  "ongava-lodge": {
    description:
      "Chalets, die in einen Felsvorsprung mit Blick auf ein Wasserloch gebaut sind, auf einem privaten Reservat direkt am Anderson Gate von Etosha.",
    highlights: ["Zimmer mit Blick auf das Wasserloch", "Nachtfahrten im privaten Reservat", "Offroad-Tracking erlaubt"],
    bestFor: "Safari-Paare auf erster Reise, Wildlife-Fotografen",
    alt: "Reetgedecktes Chalet, gebaut in einen Felsvorsprung, Ongava Lodge, Etosha",
  },
  "onguma-tented-camp": {
    description:
      "Ein Zeltcamp auf einem privaten Reservat direkt an der Ostgrenze von Etosha, mit Zimmern mit Blick auf ein Wasserloch.",
    highlights: ["Zelte mit Blick auf ein Wasserloch", "Privates Reservat, Nachtfahrten erlaubt", "Schwestercamps in der Nähe"],
    bestFor: "Fotografen, Paare, die mehr Flexibilität als im Park wünschen",
    alt: "Eine Zeltsuite in der Abenddämmerung unter einem großen Baum, Onguma Tented Camp, Etosha",
  },
  "mushara-lodge": {
    description:
      "Eine Lodge im Chalet-Stil nahe dem östlichen Von Lindequist Gate von Etosha, mit reetgedeckten Gemeinschaftsbereichen aus Holz und einer Schwesterunterkunft in der Nähe.",
    highlights: ["Nahe dem östlichen Parktor", "Reetgedeckte Gemeinschaftsbereiche aus Holz", "Schwesterunterkunft in der Nähe"],
    bestFor: "Familien, Reisende, die Nähe der Abgeschiedenheit vorziehen",
    alt: "Reetgedeckte Lounge und Terrasse in der Abenddämmerung, Mushara Lodge, Etosha",
  },
  "little-kulala": {
    description:
      "Das Flaggschiff-Dünencamp von Wilderness Safaris im privaten Kulala Wilderness Reserve, rund 45 Minuten von Sossusvlei selbst entfernt.",
    highlights: ["Sternenbetten auf dem Dach", "Private Plunge Pools", "Eigenes Reservatstor in den Park"],
    bestFor: "Paare, Flitterwöchner, Sternengucker",
    alt: "Eine schattige Terrasse mit Blick auf die Namib-Ebene, Little Kulala, Sossusvlei",
  },
  "sossusvlei-desert-lodge": {
    description:
      "Eine Design-Lodge auf einem privaten Reservat, ausgewiesen als International Dark Sky Reserve, bekannt für Zimmer mit Glasfront und uneingeschränktem Blick in die Wüste.",
    highlights: ["International Dark Sky Reserve", "Zimmer mit Glasfront", "Hauseigenes Astronomieprogramm"],
    bestFor: "Astronomie-Enthusiasten, Luxusreisende",
    alt: "Zimmer mit Glasfront der Sossusvlei Desert Lodge, nachts rot beleuchtet unter einem Sternenhimmel",
  },
  "kulala-desert-lodge": {
    description:
      "Reetgedeckte Chalets mit Blick auf die roten Dünen im selben privaten Reservat wie Little Kulala, in einer zugänglicheren Preisklasse.",
    highlights: ["Eigenes Tor in den Namib-Naukluft-Park", "Gleiches Reservat wie Little Kulala", "Chalets mit Blick auf die Dünen"],
    bestFor: "Familien, Erstbesucher, die Dünenzugang ohne Ultra-Luxuspreise wünschen",
    alt: "Reetgedeckte Chalets auf rotem Wüstenboden, Kulala Desert Lodge, Sossusvlei",
  },
  "damaraland-camp": {
    description:
      "Eines der frühesten Gemeinschafts-Conservancy-Joint-Ventures Namibias, im Huab River Valley, gilt als Vorbild für gemeinschaftlich geführten Tourismus im Land.",
    highlights: ["Wegweisendes Gemeinschafts-Conservancy-Modell", "Tracking wüstenangepasster Elefanten", "Geführt gemeinsam mit der örtlichen Conservancy"],
    bestFor: "Naturschutzbewusste Reisende, Wildlife-Tracker",
    alt: "Reetgedeckte Chalets zwischen roten Felshügeln, Damaraland Camp",
  },
  "grootberg-lodge": {
    description:
      "Gilt als Namibias erste vollständig gemeinschaftseigene Lodge, gebaut mit der ≠Khoadi //Hoas-Gemeinschaft auf einem Grat mit Talblick aus jedem Zimmer.",
    highlights: ["Vollständig im Besitz der Gemeinschaft", "Talblick von jedem Zimmer", "Zugang zum Nashorn-Tracking"],
    bestFor: "Reisende mit Fokus auf Gemeinschaftstourismus, Fotografen",
    alt: "Blick ins Tal von einem Zimmer der Grootberg Lodge, Damaraland",
  },
  "doro-nawas-camp": {
    description:
      "Ein Camp auf einem erhöhten Felshügel in der Doro !Nawas Conservancy, gemeinsam mit der örtlichen Gemeinschaft geführt, mit kurzem Weg zu den Felsgravuren von Twyfelfontein.",
    highlights: ["Erhöhte Lage auf dem Hügel", "Partnerschaft mit der Conservancy", "Nahe den Felsgravuren von Twyfelfontein"],
    bestFor: "Paare, die Kultur und Landschaft verbinden möchten",
    alt: "Eine schattige Veranda mit Blick auf die Ebene, Doro Nawas Camp, Damaraland",
  },
  "shipwreck-lodge": {
    description:
      "Die einzige Lodge, die tatsächlich direkt an der Skeleton Coast liegt, mit schiffswrackförmigen Chalets, verstreut zwischen den Dünen, zwei Stunden nördlich von Möwe Bay.",
    highlights: ["Wirklich direkt an der Küste", "Von Schiffswracks inspirierte Architektur", "Ausflüge in abgelegene Dünen- und Küstengebiete"],
    bestFor: "Abenteuerlustige Reisende in abgelegener Lage, designaffine Gäste",
    alt: "Die schiffswrackförmigen Chalets der Shipwreck Lodge in den Dünen bei Abenddämmerung",
  },
  "hoanib-skeleton-coast-camp": {
    description:
      "Ein nur per Kleinflugzeug erreichbares Camp mit sieben Zelten und einer Familieneinheit, das als Basis für die Beobachtung wüstenangepasster Elefanten, Löwen und seltener Tierarten dient.",
    highlights: ["Nur per Kleinflugzeug erreichbar", "Fokus auf wüstenangepasste Tierwelt", "Optionaler Ausflug an die Küste zur Robbenkolonie"],
    bestFor: "Ambitionierte Wildlife-Fotografen, Abenteuerreisende in abgelegener Lage",
    alt: "Eine Zeltsuite bei Abenddämmerung, Hoanib Skeleton Coast Camp",
  },
  "the-delight-swakopmund": {
    description:
      "Ein Boutique-Hotel mit 54 Zimmern im Zentrum von Swakopmund, mit farbenfrohem, zeitgenössischem Design, inklusive Frühstück, Wasser, Parkplatz und WLAN.",
    highlights: ["Zentrale Innenstadtlage", "Zeitgenössisches Design", "Frühstück, Wasser, Parkplatz und WLAN inklusive"],
    bestFor: "Paare, designbewusste Reisende, Zwischenstopps für Städtereisen",
    alt: "Die zeitgenössische Fassade von The Delight Swakopmund an der Strandpromenade",
  },
  "hansa-hotel": {
    description:
      "Namibias ältestes Hotel, 1905 gegründet, im historischen Zentrum von Swakopmund, mit 49 Zimmern und erhaltener Architektur aus der Kolonialzeit.",
    highlights: ["Namibias ältestes Hotel (1905)", "Lage im historischen Zentrum", "Erhaltene Fassade aus der Kolonialzeit"],
    bestFor: "Geschichtsinteressierte Reisende, Liebhaber klassischer Hotels",
    alt: "Der historische Eingang des Hansa Hotel, Swakopmund, bei Abenddämmerung beleuchtet",
  },
  "the-olive-exclusive": {
    description:
      "Ein Boutique-Hotel mit sieben Suiten in Windhoek, jede Suite im Thema einer anderen Namibia-Region gestaltet, mit privatem Plunge Pool sowie eigener Bar und Restaurant.",
    highlights: ["Nur sieben Suiten", "Jede Suite im Thema einer Namibia-Region", "Privater Plunge Pool"],
    bestFor: "Paare, ein luxuriöser Auftakt oder Abschluss einer Safari-Rundreise",
    alt: "Suiten mit Blick über Windhoek bei Abenddämmerung, The Olive Exclusive",
  },
  "villa-violet": {
    description:
      "Ein kleines, inhabergeführtes Gästehaus mit fünf Schlafzimmern im Vorort Klein Windhoek, fünf Minuten vom Stadtzentrum entfernt.",
    highlights: ["Inhabergeführt, persönlicher Service", "Option auf Selbstverpflegung mit Küche", "Kleiner Pool und Terrasse"],
    bestFor: "Budgetbewusste Reisende, Alleinreisende, die persönliche Atmosphäre schätzen",
    alt: "Der Pool und die Gartenterrasse der Villa Violet, Windhoek",
  },
  "canyon-lodge": {
    description:
      "Dreißig rustikale Chalets zwischen roten Granitfelsen im Gondwana Canyon Park, nahe dem Canyon, und häufiger Ausgangspunkt für den mehrtägigen Fish River Trail.",
    highlights: ["Chalets zwischen Granitfelsen erbaut", "Ausgangspunkt für den Fish River Canyon Trail", "Lage im Gondwana Canyon Park"],
    bestFor: "Wanderer, Reisende, die rustikale, aber komfortable Wüstenunterkunft suchen",
    alt: "Ein Gästezimmer zwischen Granitfelsen erbaut, Canyon Lodge, Fish River Canyon",
  },
  "nkasa-lupala-tented-lodge": {
    description:
      "Eine kleine Lodge mit 10 Zelten auf Lupala Island im Kwando-Linyanti-Flusssystem, ausgerichtet auf nachhaltigen, gemeinschaftsverbundenen Tourismus im namibischen Nordosten.",
    highlights: ["Nur 10 Zelte", "Lage an einem Flussarm", "Gemeinschaftsverbunden, mit Fokus auf Nachhaltigkeit"],
    bestFor: "Vogelbeobachter, Reisende, die Namibias feuchteren, wildreichen Nordosten erleben möchten",
    alt: "Ein Essbereich mit Blick über die Flussebene, Nkasa Lupala Tented Lodge",
  },
  "spitzkoppen-lodge": {
    description:
      "Eine Lodge mit 15 Chalets am Nordrand des Spitzkoppe-Massivs, verbunden durch erhöhte Stege, die den Boden darunter möglichst wenig beeinträchtigen sollen.",
    highlights: ["Erhöhte Steganlage", "Private Chalets mit Aussichtsdeck", "Lage zwischen Granitfelsen"],
    bestFor: "Reisende, die Komfort nahe Spitzkoppe ohne komplettes Camping wünschen",
    alt: "Erhöhte Chalets zwischen den Granitkuppen der Spitzkoppen Lodge bei Abenddämmerung",
  },
  "thitaka-river-lodge": {
    description:
      "Ein 2026 eröffnendes Luxus-Zeltcamp am Kwando River im Bwabwata-Nationalpark, Newmarks erste Unterkunft in Namibia, nahe einem wichtigen Elefantenkorridor gelegen.",
    highlights: ["Zweimal täglich Pirschfahrten und Bootsausflüge auf dem Fluss", "Lage am Elefantenkorridor", "Villen und Zelte mit privatem Pool"],
    bestFor: "Reisende, die die Flusstierwelt der Zambezi-Region mit Vollpension-Luxus erleben möchten",
    alt: "Ein Fluss schlängelt sich durch dichten grünen Auwald, typisch für die Feuchtgebiete der Zambezi-Region",
  },
  "luna-namib-collection": {
    description:
      "Ein 2026 eröffnendes Ultra-Luxus-Refugium mit nur drei Einheiten, 70 km südlich von Sesriem, mit freistehenden Villen, privaten Plunge Pools und Teleskopen im Zimmer zur Sternenbeobachtung.",
    highlights: ["Nur drei freistehende Einheiten", "Private Plunge Pools und Teleskope", "Eigener Concierge pro Einheit"],
    bestFor: "Paare und kleine Familien, die höchste Privatsphäre in der Wüste suchen",
    alt: "Eine private Terrasse mit Plunge Pool bei Sonnenaufgang, Luna Namib Collection, Sossusvlei",
  },
};

type RouteTranslation = Partial<
  Pick<RoutePlan, "title" | "description" | "vehicle" | "pace" | "bestFor" | "dayByDay" | "faqs">
>;

export const routeTranslationsDe: Record<string, RouteTranslation> = {
  "7-days": {
    title: "Eine Woche",
    description: "Eine knackige Rundreise für einen ersten Eindruck: die Dünen, die Küste und ein Stopp für Tierbeobachtung.",
    vehicle:
      "Ein normaler 2x4-Mietwagen reicht für die gesamte Route. Die letzten 5 km Sandpiste zum Sossusvlei sind ohnehin nur per Shuttle befahrbar, und die Straßen nach Sesriem und Swakopmund sind durchgehend geteert oder gut gegradete Schotterstraßen.",
    pace: "Straff: ein voller Tag pro Station, meist rund um die eine Hauptaktivität dieser Station aufgebaut.",
    bestFor:
      "Erstbesucher mit einer Woche oder weniger, die einen echten Eindruck von Wüste und Küste wollen und auf einen eigenen Wildtier-Stopp verzichten können.",
    dayByDay: [
      {
        label: "Tag 1",
        text: "Landung in Windhoek, Abholung des Mietwagens (ein 2x4 reicht für diese Route völlig aus) und Übernachtung in der Hauptstadt. Ein gutes Abendessen und eine frühe Nacht sind besser, als mit Jetlag direkt in die Wüste weiterzufahren.",
        regionSlug: "windhoek",
      },
      {
        label: "Tag 2–3",
        text: "Fahrt zum Sossusvlei (ca. 5 Stunden über Rehoboth und Solitaire). Nutzen Sie einen Morgen für die Sonnenaufgangs-Session: Dune 45, dann Deadvlei per Shuttle ab dem 2x4-Parkplatz (seit Mai 2026 verpflichtend, rechnen Sie mit ca. 30 Minuten Wartezeit), und den kühleren späten Nachmittag für die Sesriem-Schlucht.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Tag 4–5",
        text: "Fahrt nach Swakopmund (ca. 4–5 Stunden über Solitaire und den Kuiseb-Pass). Zwei Nächte an der Küste: Entscheiden Sie sich für eine echte Aktivität (Sandboarding auf den Dünen direkt vor der Stadt oder eine Bootstour ab Walvis Bay zur Flamingo-Lagune) und essen Sie gut. Hier gibt es das beste Essen und den besten Kaffee der ganzen Reise.",
        regionSlug: "swakopmund",
      },
      {
        label: "Tag 6–7",
        text: "Rückfahrt nach Windhoek (ca. 4 Stunden) mit einem vollen Tag Puffer vor dem Rückflug, oder direkter Abflug ab Walvis Bay, falls Ihr Anschlussplan die Rückfahrt überflüssig macht.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Reichen 7 Tage für Namibia?",
        a: "Genug für einen echten Eindruck von Wüste und Küste, aber nicht genug für einen richtigen Wildtier-Stopp. Allein der Etosha verdient 3–4 Nächte, für die in dieser Route kein Platz ist. Verstehen Sie das als Kurzversion, nicht als Kompromissversion.",
      },
      {
        q: "Brauche ich für diese Route einen 4x4?",
        a: "Nein. Alle Stationen dieser Rundreise (Windhoek, Sossusvlei, Swakopmund) sind mit einem normalen 2x4 über geteerte oder gut gegradete Schotterstraßen erreichbar, und das letzte Stück Sossusvlei mit weichem Sand ist ohnehin nur per Shuttle befahrbar, unabhängig vom Fahrzeug.",
      },
      {
        q: "Passt der Etosha in eine 7-tägige Reise?",
        a: "Nur, wenn Sie Swakopmund auf eine Nacht kürzen, und selbst dann wird es knapp. Wenn Tierbeobachtung wichtig ist, ist die 10-tägige Route die kürzeste, die dafür wirklich Platz bietet.",
      },
      {
        q: "Wie viel Fahrzeit umfasst die 7-tägige Route insgesamt?",
        a: "Rund 13 Stunden verteilt auf drei Etappen: etwa 5 Stunden von Windhoek zum Sossusvlei, 4–5 Stunden weiter nach Swakopmund und 4 Stunden zurück nach Windhoek (oder ein Flug ab Walvis Bay statt dieser letzten Etappe). Das ist weniger Fahrzeit als bei den längeren Routen, ein Teil des Kompromisses dafür, dass ein eigener Wildtier-Stopp entfällt.",
      },
    ],
  },
  "10-days": {
    title: "Zehn Tage",
    description: "Die klassische Namibia-Rundreise, entspannt, mit zwei Nächten in jeder Schlüsselregion.",
    vehicle:
      "Ein 2x4 mit hoher Bodenfreiheit ist machbar, aber ein 4x4 macht sich auf Damaralands Schotter-D-Straßen bezahlt, für diese Route lohnt sich das Upgrade besonders.",
    pace: "Zwei Nächte pro Station: der übliche, komfortable Namibia-Rhythmus, mit einem Fahrtag fest in jeden Transfer eingebaut statt drumherum gequetscht.",
    bestFor:
      "Eine erste vollständige Namibia-Reise, die Wüste, Küste und Tierbeobachtung richtig abdeckt, ohne die langen Abstecher in den Süden oder Nordosten.",
    dayByDay: [
      {
        label: "Tag 1",
        text: "Landung am Hosea Kutako International Airport, etwa 45 Minuten vom Stadtzentrum entfernt, Abholung des Mietwagens und Übernachtung in Windhoek, der übliche Auftakt mit einer Nacht, bevor die langen Fahrten beginnen.",
        regionSlug: "windhoek",
      },
      {
        label: "Tag 2–3",
        text: "Fahrt zum Sossusvlei (ca. 5 Stunden über Rehoboth und Solitaire) für eine Sonnenaufgangs-Session bei Dune 45 und Deadvlei (Shuttle ab dem 2x4-Parkplatz, da für dieses letzte Stück verpflichtend) sowie die Sesriem-Schlucht im kühleren Teil des Tages.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Tag 4–5",
        text: "Fahrt nach Swakopmund (ca. 4–5 Stunden über Solitaire und den Kuiseb-Pass) für zwei Nächte an der Küste, eine echte Aktivität (Sandboarding oder eine Bootstour ab Walvis Bay) und das beste Essen der Route.",
        regionSlug: "swakopmund",
      },
      {
        label: "Tag 6–7",
        text: "Damaraland (ca. 3–4 Stunden von Swakopmund über Uis): am ersten Tag die Felsgravuren von Twyfelfontein, eine echte UNESCO-Welterbestätte; am zweiten Tag eine geführte Fahrt zur Spurensuche wüstenangepasster Elefanten (Sichtungen sind nicht garantiert, aber dies ist die realistisch beste Chance im ganzen Land).",
        regionSlug: "damaraland",
      },
      {
        label: "Tag 8–9",
        text: "Etosha (ca. 4 Stunden von Damaraland über Kamanjab und Outjo): aufgeteilt zwischen einer Lodge in einem privaten Reservat für Nachtfahrten und Offroad-Spurensuche sowie Wasserloch-Beobachtung entweder im Park oder vom Camp aus.",
        regionSlug: "etosha",
      },
      {
        label: "Tag 10",
        text: "Rückfahrt nach Windhoek (ca. 4,5 Stunden) für Ihren Rückflug.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Sind 10 Tage die richtige Länge für eine erste Namibia-Reise?",
        a: "Für die meisten ja: Das ist die kürzeste Route, die Wüste, Küste und einen richtigen Wildtier-Stopp abdeckt, ohne dass jeder Tag zum Fahrtag wird. Diese Route würden wir standardmäßig empfehlen.",
      },
      {
        q: "Sollte ich für diese Route einen 4x4 mieten?",
        a: "Ja, das lohnt sich vor allem wegen Damaralands Schotter-D-Straßen. Ein 2x4 mit hoher Bodenfreiheit schafft es zwar, aber ein 4x4 ist für diese Etappe die komfortablere, risikoärmere Wahl. Etosha, Sossusvlei und Swakopmund allein würden ihn nicht erfordern.",
      },
      {
        q: "Kann ich Damaraland auslassen, um mir das 4x4-Upgrade zu sparen?",
        a: "Ja, dann fallen Sie auf den Umfang der 7-Tage-Route zurück und fügen stattdessen eine dritte Etosha-Nacht hinzu, oder tauschen Damaraland gegen einen zweiten Aktivitätstag in Swakopmund. Sie verlieren dabei die wüstenangepassten Elefanten und Twyfelfontein, ein echter Kompromiss, kein kleiner.",
      },
      {
        q: "Wie viel Fahrzeit umfasst die 10-tägige Route insgesamt?",
        a: "Rund 21 Stunden auf fünf Etappen: etwa 5 Stunden bis zum Sossusvlei, 4–5 Stunden weiter nach Swakopmund, 3–4 Stunden nach Damaraland, 4 Stunden nach Etosha und 4,5 Stunden zurück nach Windhoek. Auf zehn Tage verteilt sind das im Schnitt gut 2 Stunden pro Tag, da jede Zwei-Nächte-Station einen ganzen fahrtfreien Tag lässt.",
      },
    ],
  },
  "14-days": {
    title: "Zwei Wochen",
    description: "Genug Raum für Fish River Canyon und Spitzkoppe, ohne die Fahrtage zu hetzen.",
    vehicle:
      "4x4 für die gesamte Rundreise empfohlen: Diese Route umfasst Damaralands Schotter-D-Straßen und den langen südlichen Abstecher zum Fish River Canyon, beides mit höherer Bodenfreiheit komfortabler.",
    pace: "Komfortabel, mit echtem Spielraum: Die meisten Stationen bekommen zwei oder mehr Nächte, und es bleibt Raum für Anpassungen, falls Wetter, Müdigkeit oder ein verpasster Sonnenaufgang das erfordern.",
    bestFor:
      "Reisende, die die klassische Rundreise plus den Süden wollen, ohne die langen Abstecher nach Caprivi oder zur Skeleton Coast.",
    dayByDay: [
      {
        label: "Tag 1",
        text: "Landung in Windhoek, Abholung des 4x4-Mietwagens (diese Rundreise braucht die Bodenfreiheit für Damaralands D-Straßen und später den Abstecher zum Fish River Canyon) und Übernachtung in der Hauptstadt, bevor die langen Fahrten Richtung Süden beginnen.",
        regionSlug: "windhoek",
      },
      {
        label: "Tag 2–3",
        text: "Fish River Canyon (ca. 5,5 Stunden südlich): die Aussichtspunkte am Rand bei Hobas zur goldenen Stunde, für einen Stopp dieser Länge ist keine Wanderung nötig. Namibias meist übersehene Hauptattraktion, und ein echter Abstecher, der die Rundreise um spürbare Fahrzeit verlängert.",
        regionSlug: "fish-river-canyon",
      },
      {
        label: "Tag 4–5",
        text: "Sossusvlei (Rückfahrt nach Norden, ca. 4–5 Stunden): Sonnenaufgang bei Dune 45 und Deadvlei per Shuttle, die Sesriem-Schlucht in der Nachmittagshitze.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Tag 6",
        text: "Spitzkoppe: ein kurzer Abstecher auf dem Weg zur Küste. Eine Nacht für den Sonnenuntergang, einige der besten Sternenbeobachtungen der Route und Sonnenaufgang an den Granitkuppeln. Die Unterkünfte hier sind einfache Community-Campsites, kein Lodge-Komfort.",
        regionSlug: "spitzkoppe",
      },
      {
        label: "Tag 7–8",
        text: "Swakopmund: zwei Nächte an der Küste, eine echte Aktivität (Sandboarding auf den Dünen direkt vor der Stadt oder eine Bootstour ab Walvis Bay zur Flamingo-Lagune) und das beste Essen der Reise.",
        regionSlug: "swakopmund",
      },
      {
        label: "Tag 9–10",
        text: "Damaraland (ca. 3–4 Stunden von Swakopmund über Uis): am ersten Tag die Felsgravuren von Twyfelfontein, eine echte UNESCO-Welterbestätte; am zweiten Tag eine geführte Fahrt zur Spurensuche wüstenangepasster Elefanten (Sichtungen sind nicht garantiert, aber dies ist die realistisch beste Chance im ganzen Land).",
        regionSlug: "damaraland",
      },
      {
        label: "Tag 11–13",
        text: "Etosha: drei Nächte, aufgeteilt zwischen einer Lodge in einem privaten Reservat für Nachtfahrten und Offroad-Spurensuche (im Park selbst nicht erlaubt) und einem Park-Camp für die Beobachtung beleuchteter Wasserlöcher, mit genug Zeit, um sowohl den östlichen als auch den westlichen Teil zu erreichen, statt sich für eine Seite zu entscheiden.",
        regionSlug: "etosha",
      },
      {
        label: "Tag 14",
        text: "Rückfahrt nach Windhoek (ca. 4,5 Stunden) für Ihren Rückflug.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Lohnt sich der Abstecher zum Fish River Canyon bei einer 14-tägigen Reise?",
        a: "Ja, wenn die Tage reichen: Es ist einer der größten Canyons der Erde, mit nur einem Bruchteil der Besucher vergleichbarer Sehenswürdigkeiten anderswo. Der ehrliche Kompromiss ist echte, zusätzliche Fahrzeit in der Rundreise, genau deshalb taucht er in der 7- oder 10-Tage-Route nicht auf.",
      },
      {
        q: "Brauche ich speziell für den Abstecher zum Fish River Canyon einen 4x4?",
        a: "Nein, die Haupt-Teer- und Schotterstraßen nach Süden sind mit einem 2x4 problemlos machbar, und die Aussichtspunkte am Canyonrand selbst brauchen überhaupt keinen 4x4. Erst die Kombination mit Damaraland später in derselben Rundreise macht den 4x4 zur sinnvollen Wahl für die gesamte Reise.",
      },
      {
        q: "Geht diese Route auch ohne Spitzkoppe?",
        a: "Ja, das ist ein Ein-Nacht-Abstecher, leicht zu streichen, wenn Sie stattdessen lieber eine dritte Nacht in Swakopmund oder am Sossusvlei einplanen. Sie verlieren dabei einen der besten Orte für Sternenbeobachtung der Route, das ist der einzige echte Preis dafür.",
      },
      {
        q: "Kann ich diese Route umgekehrt fahren, beginnend mit dem Etosha?",
        a: "Ja, zuerst Etosha und Damaraland und den Fish River Canyon ans Ende zu setzen, funktioniert logistisch genauso gut, da keine der Etappen von der anderen abhängt. Die hier gewählte Reihenfolge ist auf den Rhythmus ausgelegt: Der Start im Süden führt sanft in die Reise vor der Küste ein und hebt sich die Tierbeobachtung im Etosha als Höhepunkt gegen Ende auf.",
      },
    ],
  },
  "21-days": {
    title: "Drei Wochen",
    description: "Das ganze Land, inklusive Skeleton Coast, Caprivi-Streifen und einem tierreichen Abschluss.",
    vehicle:
      "4x4 für die Selbstfahrer-Etappen: Sowohl Damaraland als auch der Abstecher zum Fish River Canyon erfordern ihn. Planen Sie außerdem mindestens einen Inlandsflug ein: Die herausragenden nördlichen Lodges der Skeleton Coast und der Caprivi-Streifen werden ab diesem Punkt der Rundreise normalerweise per Flugzeug erreicht, nicht auf der Straße.",
    pace: "Das ganze Land, ohne Hetze: Das ist die Route für Reisende mit drei Wochen, die alles sehen wollen, nicht nur die klassische Rundreise.",
    bestFor:
      "Wiederholungsbesucher oder Erstbesucher mit genug Zeit, um Namibia richtig zu erleben, einschließlich seiner abgelegensten Küste und seines wasserreichen Nordostens.",
    dayByDay: [
      {
        label: "Tag 1",
        text: "Landung in Windhoek, Abholung des 4x4-Mietwagens und Übernachtung in der Hauptstadt, der übliche Auftakt vor drei Wochen Fahrt und später mindestens einem Inlandsflug.",
        regionSlug: "windhoek",
      },
      {
        label: "Tag 2–3",
        text: "Fish River Canyon (ca. 5,5 Stunden südlich): die Aussichtspunkte am Rand bei Hobas zur goldenen Stunde, keine Wanderung nötig.",
        regionSlug: "fish-river-canyon",
      },
      {
        label: "Tag 4–5",
        text: "Sossusvlei (Rückfahrt nach Norden, ca. 4–5 Stunden): Sonnenaufgang bei Dune 45 und Deadvlei per Shuttle, die Sesriem-Schlucht.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Tag 6",
        text: "Spitzkoppe: ein kurzer Abstecher auf dem Weg zur Küste. Eine Nacht für den Sonnenuntergang, einige der besten Sternenbeobachtungen der Route und Sonnenaufgang an den Granitkuppeln. Die Unterkünfte hier sind einfache Community-Campsites, kein Lodge-Komfort.",
        regionSlug: "spitzkoppe",
      },
      {
        label: "Tag 7–8",
        text: "Swakopmund: zwei Nächte an der Küste, eine echte Aktivität (Sandboarding oder eine Bootstour ab Walvis Bay zur Flamingo-Lagune) und das beste Essen der Reise.",
        regionSlug: "swakopmund",
      },
      {
        label: "Tag 9–10",
        text: "Skeleton Coast: zwei Nächte. Die herausragenden nördlichen Lodges sind ab Swakopmund normalerweise nur per Flug erreichbar; ein kurzer Selbstfahrer-Abstecher von Damaraland aus erreicht nur den weniger abgelegenen südlichen Abschnitt. So oder so: Seelöwenkolonien, Schiffswracks und echte Abgeschiedenheit.",
        regionSlug: "skeleton-coast",
      },
      {
        label: "Tag 11–12",
        text: "Damaraland: die Felsgravuren von Twyfelfontein, eine echte UNESCO-Welterbestätte, und eine geführte Fahrt zur Spurensuche wüstenangepasster Elefanten (Sichtungen sind nicht garantiert, aber dies ist die realistisch beste Chance im ganzen Land).",
        regionSlug: "damaraland",
      },
      {
        label: "Tag 13–15",
        text: "Etosha: drei Nächte, aufgeteilt zwischen einer Lodge in einem privaten Reservat für Nachtfahrten und Offroad-Spurensuche und Camps an Wasserlöchern im Park, mit genug Zeit, um sowohl den östlichen als auch den westlichen Teil zu erreichen, statt sich für eine Seite zu entscheiden.",
        regionSlug: "etosha",
      },
      {
        label: "Tag 16–18",
        text: "Flug oder die lange Fahrt (ca. 12 Stunden) zum Caprivi-Streifen: Die meisten fliegen ab diesem Punkt nach Katima Mulilo, statt zu fahren. Drei Nächte mit Flusskreuzfahrten für Flusspferde und Vogelbeobachtung sowie eine Pirschfahrt im Bwabwata-Nationalpark, ein wirklich anderes Namibia als die Wüstenrundreise davor.",
        regionSlug: "caprivi",
      },
      {
        label: "Tag 19–21",
        text: "Rückkehr nach Windhoek, um die Rundreise zu schließen: Die meisten Reisenden fliegen von Katima Mulilo zurück, statt die ca. 12-stündige Fahrt zu wiederholen, besonders da an Tag 21 der internationale Rückflug ansteht.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Muss ich bei dieser 21-tägigen Route irgendwo fliegen?",
        a: "Realistisch gesehen ja, mindestens einmal: Die besten Lodges der Skeleton Coast und der Caprivi-Streifen werden angesichts der Entfernungen normalerweise per Kleinflugzeug oder Inlandsflug erreicht, nicht per Selbstfahrer. Planen Sie das bei der Kostenkalkulation dieser Route mit ein.",
      },
      {
        q: "Sind 3 Wochen zu lang für Namibia?",
        a: "Angesichts der Fahrdistanzen des Landes nicht: 3 Wochen sind genau das, was es erlaubt, beide Extreme (Skeleton Coast und Caprivi) zur klassischen Rundreise hinzuzufügen, ohne die ganze Reise zu einer Aneinanderreihung von Transittagen zu machen. Die meisten Reisenden mit dieser Reiselänge sind Wiederholungsbesucher oder legen gezielt Wert auf Abgeschiedenheit.",
      },
      {
        q: "Könnte ich diese Route mit einem 2x4 statt einem 4x4 fahren?",
        a: "Nicht bequem: Damaralands D-Straßen und der Abstecher zum Fish River Canyon sind die beiden Etappen, bei denen ein 4x4 einen echten Unterschied macht, und diese Route enthält beide. Wenn Sie bei einem 2x4 bleiben möchten, ist die 7-Tage-Route dafür gemacht.",
      },
      {
        q: "Könnte ich diese Route in umgekehrter Richtung fahren?",
        a: "Strukturell ja: mit Etosha und dem Norden zu beginnen und den Fish River Canyon ans Ende zu setzen, funktioniert genauso gut, da weder die Skeleton-Coast- noch die Caprivi-Etappen von der Reiserichtung abhängen. Der einzige feste Punkt ist Windhoek selbst: Beide Enden der Reise sind an seinem Flughafen verankert, egal für welche Richtung Sie sich entscheiden, Sie fliegen immer über dieselbe Stadt ein und aus.",
      },
    ],
  },
};

export const regionsDe: Region[] = regions.map((r) => ({ ...r, ...(regionTranslationsDe[r.slug] ?? {}) }));
export const lodgesDe: Lodge[] = lodges.map((l) => ({ ...l, ...(lodgeTranslationsDe[l.slug] ?? {}) }));
export const selfDriveRoutesDe: RoutePlan[] = selfDriveRoutes.map((r) => ({
  ...r,
  ...(routeTranslationsDe[r.slug] ?? {}),
}));

export function getRegionDe(slug: string): Region | undefined {
  return regionsDe.find((r) => r.slug === slug);
}

export function getLodgeDe(slug: string): Lodge | undefined {
  return lodgesDe.find((l) => l.slug === slug);
}

export function getLodgesForRegionDe(regionSlug: string): Lodge[] {
  return lodgesDe.filter((l) => l.regionSlug === regionSlug);
}

export function getRouteDe(slug: string): RoutePlan | undefined {
  return selfDriveRoutesDe.find((r) => r.slug === slug);
}

export function getLodgesByCategoryDe(category: LodgeCategory): Lodge[] {
  return lodgesDe.filter((l) => l.categories.includes(category));
}

export const featuredLodgesDe: Lodge[] = [
  getLodgeDe("little-kulala")!,
  getLodgeDe("grootberg-lodge")!,
  getLodgeDe("ongava-lodge")!,
  getLodgeDe("canyon-lodge")!,
];
