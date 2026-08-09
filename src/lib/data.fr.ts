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
 * French field overrides, keyed by slug. Non-text fields (slug/lat/lng/image/categories/
 * regionSlug/nights/days) are reused from the English data in data.ts and never overridden
 * here. Missing keys/fields silently fall back to the English value (safe during translation
 * rollout, never crashes a build), but every slug below MUST be fully translated before the
 * /fr pages ship, this is a checklist, not a permanent fallback.
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

export const regionTranslationsFr: Record<string, RegionTranslation> = {
  etosha: {
    description:
      "Une vaste cuvette de sel bordée de points d'eau où éléphants, lions et rhinocéros se rassemblent à la tombée du jour.",
    quickAnswer:
      "Etosha est la destination phare de la faune namibienne : un parc national de 22 000 km² construit autour d'une cuvette de sel si vaste qu'elle est visible depuis l'espace et qui couvre environ un quart de la superficie du parc. On y entre par trois portes principales : Von Lindequist à l'est, Anderson au sud près d'Okaukuejo, et King Nehale au nord. Le choix de la porte détermine tout votre itinéraire. Installez-vous dans un lodge sur une réserve privée en bordure du parc (Ongava, Onguma) pour les sorties nocturnes et le tracking hors piste, ou à l'intérieur du parc pour observer les points d'eau éclairés sans quitter votre camp.",
    bestFor: "Premier safari, photographie animalière",
    avoidIf: "Vous voulez ajouter une étape balnéaire ou côtière sur le même tronçon du voyage",
    recommendedStay: "3 à 4 nuits",
    driveFromWindhoek: "environ 4h30",
    alt: "Un éléphant sur les plaines sèches et poussiéreuses du parc national d'Etosha",
    pros: [
      "Une des observations animalières les plus fiables d'Afrique australe",
      "Des points d'eau éclairés qui attirent les animaux jusqu'à vous après la tombée de la nuit",
      "Des routes bien entretenues, praticables en 2x4 classique pendant la saison sèche",
    ],
    cons: [
      "Les portes et les limitations de vitesse sont strictement contrôlées à l'intérieur du parc national",
      "En saison sèche, l'affluence se concentre autour des points d'eau les plus fréquentés",
      "Les hébergements à l'intérieur du parc se réservent vite en haute saison",
    ],
    nearby: ["Damaraland (art rupestre et éléphants du désert)", "Plateau du Waterberg"],
    faqs: [
      {
        q: "Combien de nuits faut-il prévoir à Etosha ?",
        a: "Trois à quatre nuits permettent de couvrir les sections est et ouest sans devoir se précipiter d'un point d'eau à l'autre.",
      },
      {
        q: "Faut-il loger dans le parc ou sur une réserve privée ?",
        a: "Les réserves privées comme Ongava autorisent les sorties nocturnes et le tracking hors piste, interdits à l'intérieur du parc national lui-même, un vrai compromis face au séjour dans le parc pour l'expérience classique du camp devant un point d'eau éclairé.",
      },
      {
        q: "Y a-t-il une route fermée à Etosha en ce moment ?",
        a: "Oui, un chantier de rénovation routière a fermé l'itinéraire direct entre Okaukuejo et Halali, avec une déviation obligatoire en vigueur du 2 juin 2026 à juillet 2027. La circulation est déviée par le contournement de Gemsbokvlakte (jusqu'à environ le km 47) puis Rhino Drive pour rejoindre Halali, avec seulement les points d'eau de Gemsbokvlakte, Sueda et Salvadora accessibles sur ce tronçon. Prévoyez nettement plus de temps de route entre les deux camps que ne le suggèrent les guides plus anciens, et vérifiez le statut actuel auprès de la NWR avant de partir, ces dates pouvant évoluer selon l'avancement des travaux.",
      },
      {
        q: "Combien coûte l'entrée du parc d'Etosha ?",
        a: "Les tarifs ont fortement augmenté le 1er avril 2026 : les visiteurs internationaux paient désormais N$280 par personne et par jour (contre N$150 auparavant), plus des frais de véhicule de N$620 pour deux personnes, les ressortissants de la SADC et les Namibiens payant moins. C'est la première hausse depuis 2021, donc toute estimation de budget établie avant mi-2026 sous-estime désormais ce poste.",
      },
      {
        q: "Par quelle porte entrer dans Etosha ?",
        a: "Anderson Gate au sud, près d'Okaukuejo, est l'entrée standard pour qui arrive de Windhoek ou de Sossusvlei, et se trouve la plus proche des points d'eau les plus fiables du parc en saison sèche. Von Lindequist Gate à l'est est la sortie (ou l'entrée) naturelle si vous continuez vers le Waterberg ou la bande de Caprivi, au plus près de Fischer's Pan. King Nehale Gate au nord dessert surtout les voyageurs venant de l'Ovamboland. La plupart des circuits en voiture entrent par Anderson et sortent par Von Lindequist, pour traverser le parc en ligne droite plutôt que de revenir sur leurs pas.",
      },
      {
        q: "Quelle est la distance entre les points d'eau d'Etosha ?",
        a: "Les distances varient beaucoup et ne sont pas réparties de façon régulière. Les points d'eau autour d'Okaukuejo et de Namutoni sont proches les uns des autres, tandis que certains, dans la section ouest plus tranquille, peuvent être séparés d'une heure de piste ou plus. Prévoyez une boucle de trois ou quatre points d'eau par session plutôt que d'essayer de couvrir tout le parc en une journée. La route à elle seule dévore la lumière du jour, surtout en dehors de la déviation obligatoire Okaukuejo-Halali.",
      },
    ],
    knownFor: [
      "Points d'eau éclairés",
      "Observations de rhinocéros noirs",
      "Safari en voiture personnelle",
      "La vaste cuvette de sel blanche",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Suffisant pour la seule section est",
        text: "Deux nuits vous gardent côté est d'Etosha, autour des points d'eau de Namutoni et Halali. Vous aurez de vraies observations, mais vous manquerez les points d'eau de Dolomite et Okaukuejo à l'ouest, que la plupart des guides jugent les meilleurs du parc, une option à réserver seulement si Etosha n'est qu'une étape parmi d'autres.",
      },
      {
        nights: 4,
        verdict: "La bonne durée pour une vraie visite",
        text: "Quatre nuits permettent de partager son temps entre une réserve privée en bordure du parc (pour les sorties nocturnes et le tracking de rhinocéros hors piste, tous deux interdits dans le parc) et un camp à l'intérieur du parc pour l'expérience des points d'eau éclairés après la tombée de la nuit. Vous couvrez à la fois l'est et l'ouest sans vous presser entre les portes.",
      },
    ],
  },
  sossusvlei: {
    description:
      "Les dunes rouges gigantesques du Namib, des arbres à épines de chameau morts et certains des ciels nocturnes les plus sombres de la planète.",
    quickAnswer:
      "Sossusvlei, c'est la carte postale de la Namibie : des dunes rouges dépassant 300 mètres qui s'élèvent depuis une cuvette d'argile blanche dans le parc du Namib-Naukluft, au cœur d'un désert considéré comme l'un des plus anciens du monde. Dune 45, la plus escaladée et la plus photographiée, doit simplement son nom à sa position, à 45 km le long de la route depuis la porte de Sesriem ; les arbres à épines de chameau fossilisés de Deadvlei, debout depuis des siècles dans une cuvette trop sèche pour les décomposer, se trouvent à une courte marche de là. Logez sur une réserve privée en bordure du parc (comme Kulala Wilderness Reserve) pour bénéficier d'une porte privée qui devance la foule du lever du soleil à l'entrée publique.",
    bestFor: "Photographie, marches dans les dunes au lever du soleil",
    avoidIf: "Vous n'aimez pas les départs matinaux : la meilleure lumière est avant 8h",
    recommendedStay: "2 à 3 nuits",
    driveFromWindhoek: "environ 5h",
    alt: "Une dune de sable rouge géante dans le désert du Namib près de Sossusvlei",
    pros: [
      "L'un des paysages les plus photographiés d'Afrique, à juste titre",
      "Les lodges sur réserve privée disposent de leur propre porte, avant la file d'attente publique",
      "Certains des ciels nocturnes les plus sombres du monde pour observer les étoiles",
    ],
    cons: [
      "La chaleur de la journée est extrême d'octobre à mars",
      "Le dernier tronçon vers Sossusvlei nécessite un 4x4 ou la navette",
      "Deadvlei impose encore 20 à 45 minutes de marche depuis le parking 2x4",
    ],
    nearby: ["Canyon de Sesriem", "Réserve naturelle du NamibRand"],
    faqs: [
      {
        q: "Faut-il un 4x4 pour visiter Sossusvlei ?",
        a: "Non pour le trajet d'accès, oui pour le dernier tronçon. La route goudronnée puis en gravier jusqu'à Sesriem se fait très bien en voiture normale ; les derniers 5 km de sable meuble jusqu'à Sossusvlei lui-même nécessitent un 4x4 ou la navette du parc. Notre guide de conduite autonome détaille le choix du véhicule pour le reste du pays si vous prévoyez un circuit complet.",
      },
      {
        q: "À quelle heure faut-il arriver aux dunes ?",
        a: "Dès l'ouverture de la porte, c'est-à-dire au lever du soleil. Arriver à ce moment-là permet d'éviter à la fois la chaleur et la foule sur Dune 45 et à Deadvlei. Arrivez même 30 minutes en retard en haute saison et le parking de Sesriem est déjà plein.",
      },
      {
        q: "Peut-on encore conduire soi-même jusqu'à Deadvlei ?",
        a: "Non, depuis le 1er mai 2026, les véhicules privés, 4x4 compris, ne sont plus autorisés sur les derniers 5 km environ de piste sableuse entre le parking 2x4 et l'aire de stationnement 4x4 de Deadvlei/Big Daddy. Ce tronçon est désormais réservé à la navette officielle ou à un véhicule de lodge enregistré auprès du NTB, pour environ N$260 par adulte et N$130 par enfant de moins de 12 ans (tarifs sujets à changement, à confirmer avant de partir). C'est un changement récent destiné à protéger la mer de sable du Namib, et des temps d'attente de navette d'environ 30 minutes sont souvent signalés, à intégrer dans votre planning du matin.",
      },
      {
        q: "Quelle est la hauteur des dunes de Sossusvlei ?",
        a: "Big Daddy, à côté de Deadvlei, est la plus haute des environs immédiats avec environ 325 mètres, parmi les plus hautes dunes du monde. Dune 45, la plus escaladée, est plus basse mais bien plus accessible, se dressant juste au bord de la route à 45 km de la porte de Sesriem. 'Big Mama,' juste à côté de Deadvlei, offre une ascension plus courte et plus facile si la crête de Big Daddy semble trop exigeante avant le petit-déjeuner.",
      },
      {
        q: "Quelle est la profondeur du canyon de Sesriem ?",
        a: "Le canyon de Sesriem s'enfonce d'environ 30 mètres dans la plaine sur près d'un kilomètre, creusé par la rivière Tsauchab, assez peu profond pour s'y promener sans équipement technique, et une bonne option ombragée à la mi-journée une fois que les dunes deviennent trop chaudes à escalader.",
      },
    ],
    knownFor: [
      "Des dunes rouges de 300 mètres",
      "Les arbres à épines de chameau morts de Deadvlei",
      "Certains des ciels nocturnes les plus sombres de la planète",
      "Marches dans les dunes au lever du soleil",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Jouable, mais un seul lever de soleil aux dunes",
        text: "Deux nuits offrent une session complète au lever du soleil : Dune 45, puis Deadvlei via la navette, puis le canyon de Sesriem en fin d'après-midi quand il fait plus frais. C'est serré : vous obtenez la photo de carte postale, mais aucune marge si la lumière ou votre énergie ne sont pas au rendez-vous le premier matin.",
      },
      {
        nights: 3,
        verdict: "La bonne durée pour une vraie visite",
        text: "Trois nuits offrent deux sessions au lever du soleil aux dunes au lieu d'une, de la place pour ajouter une soirée d'observation des étoiles côté réserve naturelle du NamibRand, et un véritable après-midi de repos plutôt que de reprendre la route directement. C'est la durée que nous réserverions réellement.",
      },
    ],
  },
  swakopmund: {
    description:
      "Une ville balnéaire coloniale où les dunes rencontrent l'Atlantique, et où le rythme ralentit enfin.",
    quickAnswer:
      "Swakopmund est le bouton de pause côtier de la Namibie, une ville coloniale allemande agréable à parcourir à pied, fondée en 1892 comme principal port de l'Afrique du Sud-Ouest allemande, coincée entre les dunes du Namib et une houle atlantique froide. On y trouve vraiment de bons restaurants, tout un éventail d'activités à sensations (parachutisme, surf des sables, quad) juste à côté, et elle se trouve à moins d'une heure de la lagune de Walvis Bay, une zone humide classée Ramsar qui attire des milliers de flamants nains et roses.",
    bestFor: "Une pause dans la conduite, des activités d'aventure",
    avoidIf: "Vous manquez de jours et devez donner la priorité au temps passé avec la faune",
    recommendedStay: "2 nuits",
    driveFromWindhoek: "environ 4h",
    alt: "Le phare rouge et blanc de Swakopmund, en Namibie",
    pros: [
      "De loin la meilleure cuisine et le meilleur café d'un circuit autonome en Namibie",
      "Un vrai changement de rythme après des jours de route et de safaris",
      "Un large choix d'activités réservables directement via votre hôtel",
    ],
    cons: [
      "La brume côtière (la 'brume de la Côte des Squelettes') peut persister jusque tard en matinée",
      "L'Atlantique y est trop froid et agité pour la baignade",
      "La brise marine rend les soirées plus fraîches que dans l'intérieur désertique",
    ],
    nearby: ["Lagune de Walvis Bay (flamants)", "Cordon de dunes du désert du Namib"],
    faqs: [
      {
        q: "Deux nuits à Swakopmund, est-ce justifié ?",
        a: "Oui, si vous voulez caser une activité côtière comme le surf des sables ou une sortie en bateau à Walvis Bay sans vous presser ; une seule nuit suffit pour un dîner et une promenade en ville.",
      },
      {
        q: "L'Atlantique est-il froid à Swakopmund ?",
        a: "Assez froid pour que la baignade ne soit pas l'attrait principal. Le courant de Benguela remonte de l'eau froide depuis l'Atlantique sud, ce qui maintient la mer fraîche toute l'année, même quand l'air au-dessus des dunes, juste à l'intérieur des terres, est brûlant. C'est aussi ce courant qui génère la brume côtière pouvant persister jusque tard en matinée, parfois appelée la 'brume de la Côte des Squelettes,' le même effet qui façonne cette région plus au nord.",
      },
      {
        q: "Peut-on faire du parachutisme à Swakopmund ?",
        a: "Oui, les sauts en tandem au-dessus du cordon de dunes et du littoral sont l'une des activités phares de la ville, depuis un petit avion décollant de l'aérodrome local, sous réserve de météo et de brume. Le surf des sables et le quad sur les dunes juste à l'extérieur de la ville ne dépendent pas d'un ciel dégagé comme le parachutisme, ce qui en fait l'alternative la plus fiable si la brume du matin ne s'est pas levée.",
      },
    ],
    knownFor: [
      "Architecture coloniale allemande",
      "Parachutisme et surf des sables",
      "Flamants de Walvis Bay",
      "La meilleure cuisine de Namibie",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "Convient comme étape, pas comme véritable visite",
        text: "Une nuit suffit pour marcher sur la jetée, dîner correctement, et dormir pour une fois ailleurs que dans un lodge. Vous n'aurez pas le temps de réserver une activité. Considérez-la comme une pause, pas comme une destination.",
      },
      {
        nights: 2,
        verdict: "La bonne durée pour vraiment faire quelque chose",
        text: "Deux nuits laissent la place pour une vraie activité (surf des sables sur les dunes juste à l'extérieur de la ville, saut en parachute au-dessus de la côte, ou sortie en bateau vers la lagune de flamants de Walvis Bay), en plus du programme promenade-et-repas que permet une seule nuit.",
      },
    ],
  },
  damaraland: {
    description:
      "Des montagnes ocre, des éléphants adaptés au désert et parmi les plus beaux art rupestre de Namibie.",
    quickAnswer:
      "Le Damaraland est le cœur des conservancies communautaires namibiennes : un désert de montagne ouvert et ocre où des éléphants adaptés au désert se déplacent entre les lits de rivières asséchées, et où plusieurs lodges appartiennent réellement aux communautés, pas seulement associés à elles en apparence. Twyfelfontein, classé au patrimoine mondial de l'UNESCO depuis 2007, abrite l'une des plus grandes concentrations de gravures rupestres d'Afrique, certaines vieilles de plus de 2 000 ans. La région du Kunene environnante abrite aussi l'une des plus grandes populations de rhinocéros noirs en liberté au monde, en dehors d'un parc national clôturé.",
    bestFor: "Paysages reculés, faune adaptée au désert",
    avoidIf: "Vous avez besoin d'observations garanties de la faune tous les jours",
    recommendedStay: "2 à 3 nuits",
    driveFromWindhoek: "environ 5h30",
    alt: "Paysage désertique rocheux du Damaraland au coucher du soleil",
    pros: [
      "Plusieurs lodges appartiennent directement aux communautés, pas seulement à leur image",
      "Tracking d'éléphants et de rhinocéros adaptés au désert, à pied ou en véhicule",
      "Les gravures rupestres de Twyfelfontein sont un vrai site du patrimoine mondial de l'UNESCO",
    ],
    cons: [
      "La faune est sauvage et se déplace librement : les observations ne sont pas garanties",
      "Les distances entre les sites sont longues sur des pistes en gravier",
      "Moins d'options de restauration que sur la côte ou dans la capitale",
    ],
    nearby: ["Art rupestre de Twyfelfontein", "Côte des Squelettes", "Spitzkoppe"],
    faqs: [
      {
        q: "Peut-on voir des éléphants au Damaraland ?",
        a: "Il n'y a aucune garantie, mais un tracking guidé donne une vraie chance. Les éléphants adaptés au désert se déplacent le long des lits de rivières asséchées et les observations ne sont jamais garanties, mais un tracking guidé avec un lodge local offre la meilleure chance réaliste. Notre guide de la faune détaille ce qu'on peut attendre des espèces adaptées au désert dans tout le pays.",
      },
      {
        q: "Où voir des rhinocéros adaptés au désert, pas seulement des éléphants ?",
        a: "La concession de Palmwag, dans l'ouest du Damaraland, est l'un des seuls endroits d'Afrique proposant le tracking de rhinocéros noirs à pied, mené en partenariat avec les conservancies communautaires locales, le même modèle qui protège les éléphants adaptés au désert de la région. C'est généralement réservé comme activité dédiée via un lodge de la zone de Palmwag plutôt qu'un ajout de dernière minute, à prévoir donc à l'avance si cela vous tient à cœur.",
      },
      {
        q: "Twyfelfontein vaut-il le détour si l'art rupestre ne m'intéresse pas ?",
        a: "Oui, rien que pour le paysage. Le site se trouve au milieu des formations de grès ocre du Damaraland, dont les Organ Pipes et Burnt Mountain à proximité, qui valent tous deux le court détour même si les gravures elles-mêmes ne sont pas votre priorité.",
      },
    ],
    knownFor: [
      "Éléphants adaptés au désert",
      "Gravures rupestres de Twyfelfontein (UNESCO)",
      "Lodges appartenant aux communautés",
      "Paysages de montagnes ocre",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Couvre l'essentiel, une seule chance d'observer la faune",
        text: "Deux nuits couvrent les gravures rupestres de Twyfelfontein et une sortie guidée à la recherche d'éléphants adaptés au désert. Les observations ne sont garanties sur aucune sortie, c'est donc le minimum, pas l'idéal.",
      },
      {
        nights: 3,
        verdict: "La bonne durée vu que la faune n'est pas garantie",
        text: "Trois nuits offrent une seconde sortie faune si la première ne donne rien, plus le temps d'ajouter un tracking guidé de rhinocéros noirs à la concession de Palmwag, l'un des seuls endroits d'Afrique où cela se fait à pied, en partenariat avec les conservancies communautaires.",
      },
    ],
  },
  "skeleton-coast": {
    description:
      "Brume, épaves et colonies d'otaries le long de l'une des côtes les plus reculées d'Afrique.",
    quickAnswer:
      "La Côte des Squelettes est le paysage le plus reculé et le moins visité de Namibie, une bande enveloppée de brume où les dunes du Namib plongent directement dans un Atlantique froid, jonché d'épaves. Les premiers marins portugais l'appelaient 'les Portes de l'Enfer' : le même courant froid de Benguela qui génère la brume rend aussi le littoral dangereux, et des navires échoués reposent encore à moitié enfouis dans le sable. La plupart des voyageurs la découvrent lors d'un court détour depuis le Damaraland, ou s'y rendent en avion pour un vrai séjour de plusieurs nuits avec un opérateur spécialisé.",
    bestFor: "Aventure reculée, circuits en avion",
    avoidIf: "Votre programme de conduite autonome est serré avec peu de jours disponibles",
    recommendedStay: "2 nuits",
    driveFromWindhoek: "environ 7h (ou en avion)",
    alt: "Une épave échouée sur le sable de la Côte des Squelettes, en Namibie",
    pros: [
      "Un isolement réel : certains lodges ne voient aucun autre passage sur une centaine de kilomètres",
      "Colonies d'otaries, épaves et excursions à la découverte de la faune adaptée au désert",
      "Parmi les littoraux les plus spectaculaires et les moins photographiés d'Afrique",
    ],
    cons: [
      "S'y rendre correctement implique généralement de prendre l'avion, ce qui ajoute un coût réel",
      "La brume côtière persistante peut limiter la visibilité une bonne partie de la journée",
      "Très peu d'options d'hébergement : réservez bien à l'avance",
    ],
    nearby: ["Damaraland", "Kaokoveld / région du Kunene"],
    faqs: [
      {
        q: "Faut-il prendre l'avion pour la Côte des Squelettes ?",
        a: "Seulement pour l'extrême nord. Une courte section sud est accessible en voiture depuis le Damaraland, mais la partie nord de la Côte des Squelettes (où se trouvent les meilleurs lodges) n'est normalement accessible qu'en avion.",
      },
      {
        q: "Cape Cross fait-il partie de la Côte des Squelettes ?",
        a: "Oui, Cape Cross se trouve à l'extrémité sud de la Côte des Squelettes, accessible en voiture depuis Swakopmund ou le Damaraland, et abrite l'une des plus grandes colonies d'otaries à fourrure du Cap du continent, des dizaines de milliers d'animaux en saison. C'est la version accessible, en voiture, de l'expérience de la Côte des Squelettes ; les lodges accessibles en avion plus au nord couvrent la section vraiment reculée.",
      },
      {
        q: "Quel est le meilleur moment de la journée pour visiter la Côte des Squelettes ?",
        a: "L'après-midi, une fois la brume dissipée. La brume côtière est un effet du courant de Benguela présent toute l'année, qui se dissipe généralement en fin de matinée, si bien que la plupart des opérateurs programment leurs excursions l'après-midi plutôt que de lutter contre la visibilité plus tôt dans la journée.",
      },
    ],
    knownFor: [
      "Épaves",
      "Colonies d'otaries à fourrure du Cap",
      "Isolement total",
      "Littoral enveloppé de brume",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "La durée standard, et elle fonctionne",
        text: "Deux nuits, c'est ce que proposent la plupart des circuits en avion, et c'est suffisant : un après-midi pour une excursion vers une colonie d'otaries ou une épave, une journée complète pour une balade côtière avec votre guide, et du temps prévu pour laisser la brume se lever avant de vous engager sur un programme pour la journée.",
      },
    ],
  },
  windhoek: {
    description:
      "La capitale compacte de la Namibie, teintée d'influence allemande : la plupart des circuits y commencent et s'y terminent.",
    quickAnswer:
      "Windhoek est le point de départ et d'arrivée de presque tous les voyages en Namibie, grâce à l'aéroport international Hosea Kutako, lui-même situé à environ 45 minutes du centre-ville. La capitale se trouve à plus de 1 600 mètres d'altitude dans les hauts plateaux du Khomas, ce qui rend les soirées plus fraîches qu'on ne s'y attendrait aussi loin en Afrique australe, même en été. Elle est compacte, en partie praticable à pied, et mérite une nuit pour récupérer votre voiture de location, s'adapter au décalage horaire et bien manger avant de partir vers le désert.",
    bestFor: "Nuits d'arrivée et de départ",
    avoidIf: "Vous avez un vol de correspondance le jour même et n'avez pas besoin de dormir sur place",
    recommendedStay: "1 nuit",
    driveFromWindhoek: "sans objet",
    alt: "La Christuskirche, une église emblématique de Windhoek, en Namibie",
    pros: [
      "La meilleure scène de restaurants et de cafés en dehors de Swakopmund",
      "Un endroit facile et sans enjeu pour s'adapter avant ou après une longue route",
      "Central pour la prise en charge et la restitution de la voiture de location",
    ],
    cons: [
      "Pas une destination faune ou paysage en soi",
      "L'aéroport est à environ 45 minutes du centre-ville",
      "La sécurité du centre-ville après la tombée de la nuit demande la prudence urbaine habituelle",
    ],
    nearby: ["Réserve de gibier de Daan Viljoen", "Montagnes Auas"],
    faqs: [
      {
        q: "Une nuit à Windhoek suffit-elle ?",
        a: "Oui, pour la plupart des circuits, une nuit à chaque bout du voyage est la norme, davantage si vous atterrissez tard ou avez un départ matinal.",
      },
      {
        q: "Qu'est-ce que la Christuskirche ?",
        a: "C'est le monument le plus connu de Windhoek, une église luthérienne construite au début des années 1900 en grès local, sur un rond-point marquant du centre-ville. La plupart des circuits en voiture passent à sa vue en allant vers l'aéroport ou en en revenant, même sans prévoir de s'arrêter.",
      },
      {
        q: "Windhoek est-elle sûre pour se promener ?",
        a: "Le centre de Windhoek se parcourt bien à pied de jour, avec les précautions urbaines habituelles, mais comme la plupart des capitales, il demande plus de prudence après la tombée de la nuit, notamment autour de la gare et des rues secondaires plus calmes. Restez dans des zones bien éclairées et fréquentées, ou prenez un court trajet en taxi pour rentrer à l'hôtel le soir. Notre guide sécurité et santé donne une vue d'ensemble pour le reste du pays.",
      },
    ],
    knownFor: [
      "Le monument de la Christuskirche",
      "Cuisine germano-namibienne",
      "Point central pour la location de voiture",
      "Marchés d'artisanat et de curiosités",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "C'est vraiment tout ce dont Windhoek a besoin",
        text: "Une nuit à chaque bout du voyage est le schéma standard, assez de temps pour récupérer ou restituer la voiture de location, dîner une fois correctement, et s'adapter avant ou après les longues routes à venir. Ce n'est pas une étape paysage ou faune en soi.",
      },
    ],
  },
  "fish-river-canyon": {
    description:
      "Le deuxième plus grand canyon du monde, à voir de préférence à l'heure dorée depuis le bord.",
    quickAnswer:
      "Fish River Canyon, c'est le sud de la Namibie, et son site emblématique le plus négligé : une gorge longue de 160 km et profonde jusqu'à 550 m, souvent présentée comme le deuxième plus grand canyon du monde, qui rivalise avec le Grand Canyon en taille sans en avoir la foule. La plupart des visiteurs le découvrent depuis les points de vue du bord ; les randonneurs sérieux s'attaquent au sentier de plusieurs jours en contrebas, qui se termine à Ai-Ais, où des sources chaudes jaillissent du sol à environ 60°C.",
    bestFor: "Randonnée, points de vue spectaculaires",
    avoidIf: "Le sud ne s'intègre pas à votre itinéraire : c'est un détour par rapport au circuit principal",
    recommendedStay: "1 à 2 nuits",
    driveFromWindhoek: "environ 5h30",
    alt: "Une vue surélevée sur Fish River Canyon, dans le sud de la Namibie",
    pros: [
      "L'un des plus grands canyons du monde, avec une fraction des visiteurs",
      "Les points de vue du bord ne demandent aucune randonnée",
      "Le sentier de plusieurs jours de Fish River Canyon est une vraie randonnée à faire une fois dans sa vie",
    ],
    cons: [
      "C'est un vrai détour vers le sud : ajoute un temps de route important à une boucle classique",
      "Le sentier de plusieurs jours ne fonctionne que de mai à septembre et exige un certificat médical",
      "Très peu d'options d'hébergement à proximité",
    ],
    nearby: ["Sources chaudes d'Ai-Ais", "Région frontalière Namibie/Afrique du Sud"],
    faqs: [
      {
        q: "Peut-on voir le canyon sans randonner ?",
        a: "Oui, les principaux points de vue du bord près de Hobas se trouvent à courte distance à pied du parking et offrent la vue classique du canyon.",
      },
      {
        q: "Quelles sont les règles pour la randonnée de plusieurs jours de Fish River Canyon ?",
        a: "Le sentier fonctionne de façon saisonnière, environ du 1er mai au 15 septembre, avec des dates d'ouverture et de fermeture exactes fixées chaque année par Namibia Wildlife Resorts (NWR) selon le niveau de la rivière. Un certificat d'aptitude médicale et un groupe d'au moins 3 personnes sont exigés (la randonnée en solo n'est pas autorisée), avec des permis à réserver à l'avance directement auprès de NWR. Vérifiez les dates de la saison en cours avant de planifier, car elles évoluent d'une année à l'autre.",
      },
      {
        q: "Peut-on combiner Ai-Ais et les points de vue du bord sans faire tout le sentier ?",
        a: "Oui, le complexe thermal d'Ai-Ais est accessible par la route à l'extrémité sud du canyon sans avoir à parcourir le sentier de plusieurs jours au-dessus, si bien qu'une visite des points de vue près de Hobas et un bain à Ai-Ais peuvent se combiner dans le même court séjour. Les deux sont reliés par la route, pas seulement par le sentier de randonnée, ce qui surprend certains voyageurs.",
      },
      {
        q: "Comment Fish River Canyon se compare-t-il au Grand Canyon ?",
        a: "Il est plus petit, mais encore immense. Fish River Canyon s'étend sur environ 160 km avec une profondeur jusqu'à 550 m, contre environ 450 km de long et des profondeurs approchant 1 800 m pour le Grand Canyon, il reste donc dans la même catégorie en termes d'échelle, sans s'approcher du nombre de visiteurs ni des infrastructures du Grand Canyon.",
      },
    ],
    knownFor: [
      "Le deuxième plus grand canyon du monde",
      "Le sentier de randonnée de plusieurs jours de Fish River",
      "Sources chaudes d'Ai-Ais",
      "Vues du bord à l'heure dorée",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "Suffisant pour le bord, pas pour le sentier",
        text: "Une nuit couvre les principaux points de vue près de Hobas à l'heure dorée (aucune randonnée requise), ce que recherchent la plupart des voyageurs. Cela ne laisse pas de place pour le sentier de plusieurs jours en contrebas, qui nécessite son propre voyage dédié.",
      },
      {
        nights: 2,
        verdict: "La bonne durée pour les visiteurs du bord",
        text: "Deux nuits offrent à la fois une session au coucher et une au lever du soleil aux points de vue, ce qui change complètement la couleur du canyon, plus le temps de se baigner aux sources chaudes d'Ai-Ais en repartant plutôt que de passer devant sans s'arrêter.",
      },
    ],
  },
  caprivi: {
    description:
      "Le panhandle vert et riche en eau de la Namibie : rivières, plaines inondables et un rythme entièrement différent.",
    quickAnswer:
      "La bande de Caprivi (officiellement rebaptisée région du Zambèze en 2013) est une Namibie complètement différente, un panhandle étroit et riche en eau, fait de rivières et de plaines inondables, à la frontière du Botswana, de la Zambie et de l'Angola, mieux adapté à l'observation des oiseaux et à la faune fluviale qu'au circuit désertique plus au sud. La bande elle-même est un héritage du découpage colonial des cartes : l'Allemagne l'a acquise dans le traité Heligoland-Zanzibar de 1890, spécifiquement pour donner à l'Afrique du Sud-Ouest allemande un corridor vers le fleuve Zambèze, et l'ancien nom (d'après le chancelier allemand Leo von Caprivi) reste d'usage courant même si le nom officiel a changé.",
    bestFor: "Prolonger vers le Botswana ou la Zambie",
    avoidIf: "Vous ne faites que le circuit classique dunes et désert",
    recommendedStay: "2 nuits",
    driveFromWindhoek: "environ 12h (la plupart des voyageurs prennent l'avion jusqu'à Katima Mulilo)",
    alt: "Silhouettes d'arbres le long d'une rivière au coucher du soleil dans la bande de Caprivi",
    pros: [
      "Un paysage réellement différent du reste de la Namibie : des rivières, pas du désert",
      "Une observation des oiseaux et de la faune fluviale très riche",
      "Un pont naturel vers le delta de l'Okavango ou Chobe, au Botswana",
    ],
    cons: [
      "Loin du reste du pays : la plupart des voyageurs préfèrent l'avion à la route",
      "Les précautions antipaludiques sont pertinentes ici, contrairement à la majeure partie du reste de la Namibie",
      "Choix de lodges limité par rapport aux régions désertiques",
    ],
    nearby: ["Parc national de Chobe (Botswana)", "Parc national de Bwabwata"],
    faqs: [
      {
        q: "La bande de Caprivi vaut-elle la peine d'être ajoutée à un voyage en Namibie ?",
        a: "Mieux vaut la considérer comme un prolongement, pas comme une étape autonome. Elle convient bien aux voyageurs qui poursuivent vers le Botswana ou la Zambie, plutôt que comme étape sur une boucle namibienne classique de deux semaines.",
      },
      {
        q: "Le paludisme est-il un risque réel spécifiquement dans la bande de Caprivi ?",
        a: "Oui, contrairement à la majeure partie du reste de la Namibie, la région du Zambèze présente un risque de paludisme toute l'année en raison de ses rivières et zones humides, donc les précautions antipaludiques valent la peine d'être prises au sérieux ici, même si vous les avez laissées de côté pour le reste d'un itinéraire axé sur le désert. Notre guide sécurité et santé donne les recommandations actuelles avant de partir, car elles peuvent évoluer.",
      },
      {
        q: "Peut-on combiner la bande de Caprivi avec le delta de l'Okavango ou Chobe, au Botswana ?",
        a: "Oui, c'est la principale raison pour laquelle la plupart des voyageurs l'ajoutent. La région du Zambèze borde directement le Botswana, et le parc national de Bwabwata ainsi que le système fluvial Kwando-Linyanti se raccordent naturellement à Chobe ou au delta de l'Okavango de l'autre côté de la frontière, ce qui en fait un prolongement pratique plutôt qu'un voyage séparé.",
      },
    ],
    knownFor: [
      "Plaines inondables du fleuve Zambèze",
      "Observation des oiseaux",
      "Le pont vers l'Okavango/Chobe au Botswana",
      "Hippopotames et faune fluviale",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "La durée standard pour une étape de prolongement",
        text: "Deux nuits couvrent une croisière fluviale pour observer hippopotames et oiseaux, et un safari en véhicule dans le parc national de Bwabwata, assez pour ressentir le rythme différent de la région avant de continuer vers le Botswana ou la Zambie, ou de reprendre l'avion pour le circuit désertique.",
      },
    ],
  },
  spitzkoppe: {
    description:
      "Des pics de granit qui jaillissent des plaines, la réponse namibienne à la Table Mountain.",
    quickAnswer:
      "Spitzkoppe est un ensemble de pics de granit qui s'élèvent tout droit des plaines de gravier plates : le pic principal atteint environ 1 784 m et se dresse à environ 600 m au-dessus de la plaine environnante, avec un granit estimé à plus de 120 millions d'années, d'où son surnom parfois de 'Cervin de Namibie.' C'est un détour d'une nuit facile entre Swakopmund et le Damaraland, et l'un des meilleurs spots d'observation des étoiles de tout l'itinéraire, sans aucune pollution lumineuse sur une centaine de kilomètres.",
    bestFor: "Observation des étoiles, détours d'une nuit",
    avoidIf: "Vous voulez le confort complet d'un lodge : ici, c'est surtout du camping rustique",
    recommendedStay: "1 nuit",
    driveFromWindhoek: "environ 3h30",
    alt: "Les pics de granit de Spitzkoppe qui s'élèvent des plaines désertiques namibiennes",
    pros: [
      "Parmi les meilleurs spots d'observation des étoiles de tout un circuit autonome namibien",
      "Un détour facile et court qui ne coûte pas une journée entière de route",
      "Une lumière spectaculaire au coucher et au lever du soleil sur les dômes de granit",
    ],
    cons: [
      "La plupart des hébergements sur place sont des campings communautaires basiques, pas des lodges",
      "Installations très limitées : apportez vos provisions",
      "Un terrain découvert sans ombre pendant les heures chaudes de la journée",
    ],
    nearby: ["Swakopmund", "Montagnes de l'Erongo"],
    faqs: [
      {
        q: "Spitzkoppe vaut-il une nuit sur place ?",
        a: "Oui, rien que pour le coucher de soleil, le ciel étoilé et le lever du soleil, c'est l'une des nuits les plus photogéniques d'un itinéraire namibien.",
      },
      {
        q: "Où voir le meilleur art rupestre à Spitzkoppe ?",
        a: "Bushman's Paradise, un abri sous roche sur le versant est du massif accessible par une courte escalade, abrite certaines des peintures les plus connues du site, dont des représentations d'éléphants. On le visite généralement avec un guide communautaire local, à la fois pour la montée et parce que le guidage ici soutient directement la conservancy environnante.",
      },
      {
        q: "Peut-on gravir Spitzkoppe ?",
        a: "Le pic principal est une escalade technique, pas une randonnée. Il n'a été gravi pour la première fois qu'en 1946 et exige encore aujourd'hui cordes et expérience de l'escalade. La plupart des visiteurs empruntent plutôt les sentiers plus courts et non balisés autour de la base et vers des points de vue comme l'arche rocheuse naturelle, qui ne nécessitent aucun matériel d'escalade.",
      },
    ],
    knownFor: [
      "Inselbergs de granit",
      "Observation des étoiles",
      "Art rupestre bushman",
      "Photographie au coucher et au lever du soleil",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "C'est exactement l'intérêt de Spitzkoppe",
        text: "Une nuit est la durée standard et adaptée : arrivez à temps pour le coucher de soleil sur les dômes de granit, passez la nuit sous l'un des ciels les plus clairs de l'itinéraire, et attrapez le lever du soleil avant de repartir. C'est un détour, pas une destination en soi.",
      },
    ],
  },
};

type LodgeTranslation = Partial<Pick<Lodge, "description" | "highlights" | "bestFor" | "alt">>;

export const lodgeTranslationsFr: Record<string, LodgeTranslation> = {
  "ongava-lodge": {
    description:
      "Des chalets construits contre un éperon rocheux surplombant un point d'eau, sur une réserve privée jouxtant la porte Anderson d'Etosha.",
    highlights: ["Chambres face au point d'eau", "Sorties nocturnes sur réserve privée", "Tracking hors piste autorisé"],
    bestFor: "Couples en premier safari, photographes animaliers",
    alt: "Chalet en chaume construit contre un éperon rocheux à Ongava Lodge, Etosha",
  },
  "onguma-tented-camp": {
    description:
      "Un camp de tentes sur une réserve privée jouxtant directement le côté est d'Etosha, avec des chambres donnant sur un point d'eau.",
    highlights: ["Tentes face à un point d'eau", "Réserve privée, sorties nocturnes autorisées", "Camps sœurs à proximité"],
    bestFor: "Photographes, couples voulant plus de liberté que ce que permet le parc",
    alt: "Une suite sous tente au crépuscule sous un grand arbre à Onguma Tented Camp, Etosha",
  },
  "mushara-lodge": {
    description:
      "Un lodge de style chalet près de la porte est de Von Lindequist à Etosha, avec des espaces communs en chaume et bois, et une propriété sœur à proximité.",
    highlights: ["Proche de la porte est du parc", "Espaces communs en chaume et bois", "Propriété sœur à proximité"],
    bestFor: "Familles, voyageurs privilégiant la proximité à l'isolement",
    alt: "Salon et terrasse en chaume à Mushara Lodge, Etosha, éclairés au crépuscule",
  },
  "little-kulala": {
    description:
      "Le camp phare de Wilderness Safaris parmi les dunes, sur la réserve privée de Kulala Wilderness Reserve, à environ 45 minutes de Sossusvlei.",
    highlights: ["Nuits en plein air sur le toit", "Piscines privées", "Porte privée de la réserve donnant sur le parc"],
    bestFor: "Couples, jeunes mariés, passionnés d'étoiles",
    alt: "Une terrasse ombragée avec vue sur les plaines du Namib à Little Kulala, Sossusvlei",
  },
  "sossusvlei-desert-lodge": {
    description:
      "Un lodge design sur une réserve privée, désignée réserve internationale de ciel étoilé, connu pour ses chambres aux façades vitrées offrant une vue ininterrompue sur le désert.",
    highlights: ["Réserve internationale de ciel étoilé", "Chambres à façade vitrée", "Programme d'astronomie sur place"],
    bestFor: "Passionnés d'astronomie, voyageurs de luxe",
    alt: "Chambres à façade vitrée de Sossusvlei Desert Lodge éclairées en rouge la nuit sous un ciel étoilé",
  },
  "kulala-desert-lodge": {
    description:
      "Des chalets en chaume face aux dunes rouges, sur la même réserve privée que Little Kulala, à un tarif plus accessible.",
    highlights: ["Porte privée donnant sur le parc du Namib-Naukluft", "Même réserve que Little Kulala", "Chalets face aux dunes"],
    bestFor: "Familles, primo-voyageurs voulant l'accès aux dunes sans le tarif ultra-luxe",
    alt: "Chalets en chaume sur un terrain désertique rouge à Kulala Desert Lodge, Sossusvlei",
  },
  "damaraland-camp": {
    description:
      "L'une des premières coentreprises de conservancy communautaire de Namibie, dans la vallée de la rivière Huab, considérée comme un modèle pour le tourisme géré par les communautés dans le pays.",
    highlights: ["Modèle pionnier de conservancy communautaire", "Tracking d'éléphants adaptés au désert", "Géré avec la conservancy locale"],
    bestFor: "Voyageurs sensibles à la conservation, traqueurs de faune",
    alt: "Chalets en chaume au milieu de collines rocheuses rouges à Damaraland Camp",
  },
  "grootberg-lodge": {
    description:
      "Considéré comme le premier lodge namibien entièrement détenu par une communauté, construit avec la communauté ≠Khoadi //Hoas sur une crête offrant une vue sur la vallée depuis chaque chambre.",
    highlights: ["Entièrement détenu par la communauté", "Vue sur la vallée depuis chaque chambre", "Accès au tracking de rhinocéros"],
    bestFor: "Voyageurs privilégiant le tourisme communautaire, photographes",
    alt: "Vue sur la vallée depuis une chambre à Grootberg Lodge, Damaraland",
  },
  "doro-nawas-camp": {
    description:
      "Un camp sur une colline rocheuse surélevée dans la conservancy de Doro !Nawas, géré avec la communauté locale, avec un accès facile à l'art rupestre de Twyfelfontein.",
    highlights: ["Position surélevée sur une colline", "Partenariat avec la conservancy", "Proche de l'art rupestre de Twyfelfontein"],
    bestFor: "Couples combinant culture et paysage",
    alt: "Une véranda ombragée surplombant les plaines à Doro Nawas Camp, Damaraland",
  },
  "shipwreck-lodge": {
    description:
      "Le seul lodge réellement situé sur la Côte des Squelettes elle-même, avec des chalets en forme d'épave dispersés parmi les dunes, à deux heures au nord de Möwe Bay.",
    highlights: ["Réellement situé sur la côte", "Architecture inspirée des épaves", "Excursions reculées dans les dunes et sur le littoral"],
    bestFor: "Voyageurs en quête d'aventure isolée, amateurs de design",
    alt: "Les chalets en forme d'épave de Shipwreck Lodge parmi les dunes au crépuscule",
  },
  "hoanib-skeleton-coast-camp": {
    description:
      "Un camp accessible uniquement par avion, composé de sept tentes et d'une unité familiale, utilisé comme base pour observer les éléphants adaptés au désert, les lions et une faune rare.",
    highlights: ["Accès uniquement en avion", "Focus sur la faune adaptée au désert", "Excursion optionnelle vers le littoral et une colonie d'otaries"],
    bestFor: "Photographes animaliers sérieux, voyageurs en quête d'aventure isolée",
    alt: "Une suite sous tente éclairée au crépuscule à Hoanib Skeleton Coast Camp",
  },
  "the-delight-swakopmund": {
    description:
      "Un hôtel-boutique de 54 chambres dans le centre-ville de Swakopmund, au design contemporain et coloré, avec petit-déjeuner, eau, parking et Wi-Fi inclus.",
    highlights: ["Emplacement central en centre-ville", "Design contemporain", "Petit-déjeuner, eau, parking et Wi-Fi inclus"],
    bestFor: "Couples, voyageurs sensibles au design, étapes de citytrip",
    alt: "La façade contemporaine de The Delight Swakopmund en front de mer",
  },
  "hansa-hotel": {
    description:
      "Le plus ancien hôtel de Namibie, fondé en 1905 dans le centre historique de Swakopmund, avec 49 chambres et une architecture d'époque préservée.",
    highlights: ["Le plus ancien hôtel de Namibie (1905)", "Emplacement dans le centre historique", "Façade coloniale préservée"],
    bestFor: "Voyageurs passionnés d'histoire, fidèles des hôtels classiques",
    alt: "L'entrée historique du Hansa Hotel, Swakopmund, éclairée au crépuscule",
  },
  "the-olive-exclusive": {
    description:
      "Un hôtel-boutique de sept suites à Windhoek, chacune sur le thème d'une région namibienne différente, avec piscine privée et bar-restaurant complet.",
    highlights: ["Seulement sept suites", "Chaque suite sur le thème d'une région namibienne", "Piscine privée"],
    bestFor: "Couples, une étape de luxe avant ou après un circuit safari",
    alt: "Suites avec vue sur Windhoek au crépuscule depuis The Olive Exclusive",
  },
  "villa-violet": {
    description:
      "Une petite maison d'hôtes gérée par ses propriétaires, avec cinq chambres dans le quartier de Klein Windhoek, à cinq minutes du centre-ville.",
    highlights: ["Service personnalisé par les propriétaires", "Option de cuisine en self-catering", "Petite piscine et patio"],
    bestFor: "Voyageurs soucieux de leur budget, voyageurs solo recherchant une touche personnelle",
    alt: "La piscine et la terrasse du jardin à Villa Violet, Windhoek",
  },
  "canyon-lodge": {
    description:
      "Trente chalets rustiques construits parmi des blocs de granit rouge dans le Gondwana Canyon Park, près du canyon, et une base habituelle pour le sentier de plusieurs jours de Fish River.",
    highlights: ["Chalets construits parmi des blocs de granit", "Base pour le sentier de Fish River Canyon", "Situé dans le Gondwana Canyon Park"],
    bestFor: "Randonneurs, voyageurs cherchant un hébergement désertique rustique mais confortable",
    alt: "Une chambre construite parmi des blocs de granit à Canyon Lodge, Fish River Canyon",
  },
  "nkasa-lupala-tented-lodge": {
    description:
      "Un petit lodge de 10 tentes sur Lupala Island, dans le système fluvial Kwando-Linyanti, construit autour d'un tourisme durable et lié aux communautés dans le nord-est de la Namibie.",
    highlights: ["Seulement 10 tentes", "Situé sur un bras de rivière", "Lié aux communautés, axé sur la durabilité"],
    bestFor: "Ornithologues, voyageurs en quête du nord-est namibien, plus humide et riche en faune",
    alt: "Une terrasse-restaurant surplombant la plaine inondable à Nkasa Lupala Tented Lodge",
  },
  "spitzkoppen-lodge": {
    description:
      "Un lodge de 15 chalets sur le versant nord du massif de Spitzkoppe, reliés par des passerelles surélevées conçues pour minimiser les perturbations du sol en dessous.",
    highlights: ["Conception en passerelles surélevées", "Chalets privés avec terrasse panoramique", "Situé parmi les blocs de granit"],
    bestFor: "Voyageurs voulant du confort près de Spitzkoppe sans camper complètement",
    alt: "Des chalets surélevés parmi les dômes de granit de Spitzkoppen Lodge au crépuscule",
  },
  "thitaka-river-lodge": {
    description:
      "Un camp de tentes de luxe ouvrant en 2026 sur la rivière Kwando, dans le parc national de Bwabwata, première propriété namibienne de Newmark, situé près d'un corridor important pour les éléphants.",
    highlights: ["Safaris en véhicule et sorties fluviales deux fois par jour", "Situé sur un corridor à éléphants", "Villas et tentes avec piscines privées"],
    bestFor: "Voyageurs voulant la faune fluviale de la région du Zambèze avec un luxe tout compris",
    alt: "Une rivière serpentant à travers une forêt riveraine dense et verte, typique des zones humides de la région du Zambèze",
  },
  "luna-namib-collection": {
    description:
      "Un refuge ultra-luxueux de trois unités seulement, ouvrant en 2026, à 70 km au sud de Sesriem, avec des villas indépendantes, piscines privées et télescopes en chambre pour l'observation des étoiles.",
    highlights: ["Seulement trois unités indépendantes", "Piscines privées et télescopes", "Concierge dédié par unité"],
    bestFor: "Couples et petites familles en quête du plus haut niveau d'intimité dans le désert",
    alt: "Une terrasse privée avec piscine au lever du soleil à Luna Namib Collection, Sossusvlei",
  },
};

type RouteTranslation = Partial<
  Pick<RoutePlan, "title" | "description" | "vehicle" | "pace" | "bestFor" | "dayByDay" | "faqs">
>;

export const routeTranslationsFr: Record<string, RouteTranslation> = {
  "7-days": {
    title: "Une semaine",
    description: "Une boucle serrée pour une première découverte : les dunes, la côte, et une étape faune.",
    vehicle:
      "Un 2x4 standard de location couvre tout cet itinéraire. Le dernier tronçon de 5 km de sable vers Sossusvlei est de toute façon réservé à la navette, et les routes vers Sesriem et Swakopmund sont goudronnées ou en gravier bien entretenu sur tout le parcours.",
    pace: "Serré : une journée complète à chaque étape, la plupart du temps organisée autour de l'activité phare de cette étape.",
    bestFor: "Primo-voyageurs disposant d'une semaine ou moins, qui veulent une vraie découverte du désert et de la côte, et peuvent se passer d'une étape faune dédiée.",
    dayByDay: [
      {
        label: "Jour 1",
        text: "Atterrissez à Windhoek, récupérez votre voiture de location (un 2x4 suffit pour cet itinéraire) et passez la nuit dans la capitale. Un bon dîner et une nuit de sommeil valent mieux que de foncer tout de suite vers le désert avec le décalage horaire.",
        regionSlug: "windhoek",
      },
      {
        label: "Jours 2 à 3",
        text: "Route vers Sossusvlei (environ 5h via Rehoboth et Solitaire). Réservez une matinée pour la session au lever du soleil : Dune 45, puis Deadvlei via la navette depuis le parking 2x4 (obligatoire depuis mai 2026, prévoyez environ 30 minutes d'attente), et la fin d'après-midi plus fraîche pour le canyon de Sesriem.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Jours 4 à 5",
        text: "Route vers Swakopmund (environ 4 à 5h via Solitaire et le col de Kuiseb). Deux nuits sur la côte : choisissez une vraie activité (surf des sables sur les dunes juste à l'extérieur de la ville, ou sortie en bateau à Walvis Bay) et mangez bien. C'est la meilleure cuisine et le meilleur café de tout le voyage.",
        regionSlug: "swakopmund",
      },
      {
        label: "Jours 6 à 7",
        text: "Retour vers Windhoek (environ 4h) avec une journée complète devant vous avant votre vol, ou envolez-vous directement depuis Walvis Bay si votre programme permet de sauter le trajet retour.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "7 jours suffisent-ils pour la Namibie ?",
        a: "Assez pour une vraie découverte du désert et de la côte, pas assez pour ajouter une étape faune digne de ce nom. Etosha à lui seul mérite 3 à 4 nuits, pour lesquelles cet itinéraire n'a pas de place. Voyez-le comme la version courte, pas comme la version de compromis.",
      },
      {
        q: "Faut-il un 4x4 pour cet itinéraire ?",
        a: "Non. Tout ce circuit (Windhoek, Sossusvlei, Swakopmund) est accessible sur des routes goudronnées ou en gravier bien entretenu avec un 2x4 standard, et le dernier tronçon de sable meuble vers Sossusvlei est de toute façon réservé à la navette, quel que soit votre véhicule.",
      },
      {
        q: "Peut-on caser Etosha dans un voyage de 7 jours ?",
        a: "Seulement en réduisant Swakopmund à une seule nuit, et même ainsi c'est juste. Si la faune compte pour vous, l'itinéraire de 10 jours est la version plus courte qui lui laisse vraiment de la place.",
      },
      {
        q: "Combien de conduite au total pour l'itinéraire de 7 jours ?",
        a: "Environ 13 heures réparties sur trois étapes : environ 5h de Windhoek à Sossusvlei, 4 à 5h jusqu'à Swakopmund, et 4h de retour vers Windhoek (ou un vol depuis Walvis Bay à la place de cette dernière étape). C'est moins de route que les itinéraires plus longs, ce qui fait partie du compromis pour se passer d'une étape faune dédiée.",
      },
    ],
  },
  "10-days": {
    title: "Dix jours",
    description: "Le circuit namibien classique, sans précipitation, avec deux nuits dans chaque région clé.",
    vehicle:
      "Un 2x4 à haute garde au sol fonctionne, mais un 4x4 se justifie dès que vous êtes sur les pistes en gravier (routes D) du Damaraland, une mise à niveau qui vaut vraiment le coup pour cet itinéraire en particulier.",
    pace: "Deux nuits par étape : le rythme namibien standard et confortable, avec une journée de route intégrée à chaque transfert plutôt que compressée autour.",
    bestFor: "Un premier voyage complet en Namibie qui couvre bien le désert, la côte et la faune, sans les longs détours vers le sud ou le nord-est.",
    dayByDay: [
      {
        label: "Jour 1",
        text: "Atterrissez à l'aéroport international Hosea Kutako, à environ 45 minutes du centre-ville, récupérez votre voiture de location, et passez la nuit à Windhoek, l'étape standard d'une nuit avant que ne commencent les longues routes.",
        regionSlug: "windhoek",
      },
      {
        label: "Jours 2 à 3",
        text: "Route vers Sossusvlei (environ 5h via Rehoboth et Solitaire) pour une session au lever du soleil à Dune 45 et Deadvlei (navette depuis le parking 2x4, puisqu'elle est obligatoire pour ce dernier tronçon), et le canyon de Sesriem pendant la partie plus fraîche de la journée.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Jours 4 à 5",
        text: "Route vers Swakopmund (environ 4 à 5h via Solitaire et le col de Kuiseb) pour deux nuits sur la côte, une vraie activité (surf des sables ou sortie en bateau à Walvis Bay), et la meilleure cuisine de l'itinéraire.",
        regionSlug: "swakopmund",
      },
      {
        label: "Jours 6 à 7",
        text: "Damaraland (environ 3 à 4h depuis Swakopmund via Uis) : les gravures rupestres de Twyfelfontein, un vrai site du patrimoine mondial de l'UNESCO, le premier jour ; une sortie guidée à la recherche d'éléphants adaptés au désert le second (les observations ne sont pas garanties, mais c'est la meilleure chance réaliste dans le pays).",
        regionSlug: "damaraland",
      },
      {
        label: "Jours 8 à 9",
        text: "Etosha (environ 4h depuis le Damaraland via Kamanjab et Outjo) : partagé entre un lodge sur réserve privée pour les sorties nocturnes et le tracking hors piste, et l'observation des points d'eau, dans le parc ou depuis le camp.",
        regionSlug: "etosha",
      },
      {
        label: "Jour 10",
        text: "Retour vers Windhoek (environ 4h30) pour votre vol de départ.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "10 jours est-il la bonne durée pour un premier voyage en Namibie ?",
        a: "Pour la plupart des gens, oui : c'est l'itinéraire le plus court qui couvre désert, côte et une vraie étape faune sans transformer chaque jour en journée de route. C'est l'itinéraire que nous recommanderions par défaut.",
      },
      {
        q: "Faut-il louer un 4x4 pour cet itinéraire ?",
        a: "Oui, cela vaut la peine spécifiquement à cause des pistes en gravier (routes D) du Damaraland. Un 2x4 à haute garde au sol s'en sort, mais un 4x4 est le choix plus confortable et moins risqué pour cette étape. Etosha, Sossusvlei et Swakopmund à eux seuls ne l'exigeraient pas.",
      },
      {
        q: "Peut-on sauter le Damaraland pour éviter la mise à niveau en 4x4 ?",
        a: "Oui, revenez à la couverture de l'itinéraire de 7 jours et ajoutez une troisième nuit à Etosha à la place, ou échangez le Damaraland contre une deuxième journée d'activité à Swakopmund. Vous manquerez les éléphants adaptés au désert et Twyfelfontein, ce qui est un vrai compromis, pas un détail mineur.",
      },
      {
        q: "Combien de conduite au total pour l'itinéraire de 10 jours ?",
        a: "Environ 21 heures sur cinq étapes : environ 5h vers Sossusvlei, 4 à 5h jusqu'à Swakopmund, 3 à 4h vers le Damaraland, 4h vers Etosha, et 4h30 de retour vers Windhoek. Cela représente un peu plus de 2h par jour en moyenne réparties sur dix jours, puisque chaque étape de deux nuits laisse une journée complète sans conduite.",
      },
    ],
  },
  "14-days": {
    title: "Deux semaines",
    description: "De la place pour ajouter Fish River Canyon et Spitzkoppe sans précipiter les journées de route.",
    vehicle:
      "4x4 recommandé pour la boucle complète : cet itinéraire couvre les pistes en gravier (routes D) du Damaraland et le long détour sud vers Fish River Canyon, tous deux plus confortables avec une garde au sol plus élevée.",
    pace: "Confortable, avec une vraie marge : la plupart des étapes bénéficient de deux nuits ou plus, et il y a de la place pour s'ajuster si la météo, la fatigue ou un lever de soleil manqué l'exigent.",
    bestFor: "Voyageurs qui veulent le circuit classique plus le sud, sans les longs détours vers le Caprivi ou la Côte des Squelettes.",
    dayByDay: [
      {
        label: "Jour 1",
        text: "Atterrissez à Windhoek, récupérez votre 4x4 de location (cette boucle demande la garde au sol pour les routes D du Damaraland et, plus tard, le détour vers Fish River Canyon), et passez la nuit dans la capitale avant le début des longues routes vers le sud.",
        regionSlug: "windhoek",
      },
      {
        label: "Jours 2 à 3",
        text: "Fish River Canyon (environ 5h30 vers le sud) : les points de vue du bord près de Hobas à l'heure dorée, aucune randonnée requise pour une étape de cette durée. Le site emblématique le plus négligé de Namibie, et un vrai détour qui ajoute un temps de route significatif à la boucle.",
        regionSlug: "fish-river-canyon",
      },
      {
        label: "Jours 4 à 5",
        text: "Sossusvlei (retour vers le nord, environ 4 à 5h) : lever de soleil à Dune 45 et Deadvlei via la navette, canyon de Sesriem dans la chaleur de l'après-midi.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Jour 6",
        text: "Spitzkoppe : un court détour en route vers la côte. Une nuit pour le coucher de soleil, l'un des meilleurs spots d'observation des étoiles de l'itinéraire, et le lever du soleil sur les dômes de granit. Les installations ici sont des campings communautaires rustiques, pas le confort d'un lodge.",
        regionSlug: "spitzkoppe",
      },
      {
        label: "Jours 7 à 8",
        text: "Swakopmund : deux nuits sur la côte, une vraie activité (surf des sables sur les dunes juste à l'extérieur de la ville, ou sortie en bateau à Walvis Bay vers la lagune de flamants), et la meilleure cuisine du voyage.",
        regionSlug: "swakopmund",
      },
      {
        label: "Jours 9 à 10",
        text: "Damaraland (environ 3 à 4h depuis Swakopmund via Uis) : les gravures rupestres de Twyfelfontein, un vrai site du patrimoine mondial de l'UNESCO, le premier jour ; une sortie guidée à la recherche d'éléphants adaptés au désert le second (les observations ne sont pas garanties, mais c'est la meilleure chance réaliste dans le pays).",
        regionSlug: "damaraland",
      },
      {
        label: "Jours 11 à 13",
        text: "Etosha : trois nuits, partagées entre un lodge sur réserve privée pour les sorties nocturnes et le tracking hors piste (non autorisé dans le parc) et un camp du parc pour l'observation des points d'eau éclairés, avec assez de temps pour atteindre à la fois la section est et la section ouest plutôt que de choisir un seul côté.",
        regionSlug: "etosha",
      },
      {
        label: "Jour 14",
        text: "Retour vers Windhoek (environ 4h30) pour votre vol de départ.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Fish River Canyon vaut-il le détour sur un voyage de 14 jours ?",
        a: "Oui, si vous avez les jours : c'est l'un des plus grands canyons du monde, avec une fraction des visiteurs de sites comparables ailleurs. Le compromis honnête est le temps de route réel qu'il ajoute à la boucle, exactement pourquoi il n'apparaît pas dans les itinéraires de 7 ou 10 jours.",
      },
      {
        q: "Faut-il un 4x4 spécifiquement pour le détour vers Fish River Canyon ?",
        a: "Non, les principales routes goudronnées et en gravier vers le sud se font très bien en 2x4, et les points de vue du bord eux-mêmes ne demandent aucun 4x4. C'est la combinaison avec le Damaraland plus loin dans cette même boucle qui rend le 4x4 judicieux pour l'ensemble du voyage.",
      },
      {
        q: "Peut-on faire cet itinéraire sans Spitzkoppe ?",
        a: "Oui, c'est un détour d'une nuit, facile à supprimer si vous préférez ajouter une troisième nuit à Swakopmund ou à Sossusvlei. Vous manquerez l'un des meilleurs spots d'observation des étoiles de l'itinéraire, ce qui est le seul vrai coût.",
      },
      {
        q: "Peut-on faire cet itinéraire dans l'autre sens, en commençant par Etosha ?",
        a: "Oui, passer d'abord par Etosha et le Damaraland, puis Fish River Canyon en dernier, fonctionne tout aussi bien sur le plan logistique, aucune des deux étapes ne dépendant de l'autre. L'ordre proposé ici est pensé pour le rythme : commencer par le sud permet une mise en jambes avant la côte, puis garde la faune d'Etosha comme point fort vers la fin.",
      },
    ],
  },
  "21-days": {
    title: "Trois semaines",
    description: "Le pays dans son ensemble, avec la Côte des Squelettes, la bande de Caprivi et une fin riche en faune.",
    vehicle:
      "4x4 pour les étapes en conduite autonome : le Damaraland et le détour vers Fish River Canyon le demandent tous deux. Prévoyez aussi au moins un vol intérieur : les meilleurs lodges du nord de la Côte des Squelettes et la bande de Caprivi sont normalement atteints par avion à partir de ce point de la boucle, pas par la route.",
    pace: "Le pays dans son ensemble, sans précipitation : c'est l'itinéraire pour les voyageurs disposant de trois semaines qui veulent tout voir, pas seulement la boucle classique.",
    bestFor: "Visiteurs de retour, ou primo-voyageurs disposant du temps nécessaire pour découvrir la Namibie en profondeur, y compris son littoral le plus reculé et son nord-est riche en eau.",
    dayByDay: [
      {
        label: "Jour 1",
        text: "Atterrissez à Windhoek, récupérez votre 4x4 de location, et passez la nuit dans la capitale, l'étape standard avant trois semaines de route et, plus tard, au moins un vol intérieur.",
        regionSlug: "windhoek",
      },
      {
        label: "Jours 2 à 3",
        text: "Fish River Canyon (environ 5h30 vers le sud) : les points de vue du bord près de Hobas à l'heure dorée, aucune randonnée requise.",
        regionSlug: "fish-river-canyon",
      },
      {
        label: "Jours 4 à 5",
        text: "Sossusvlei (retour vers le nord, environ 4 à 5h) : lever de soleil à Dune 45 et Deadvlei via la navette, canyon de Sesriem.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Jour 6",
        text: "Spitzkoppe : un court détour en route vers la côte. Une nuit pour le coucher de soleil, l'un des meilleurs spots d'observation des étoiles de l'itinéraire, et le lever du soleil sur les dômes de granit. Les installations ici sont des campings communautaires rustiques, pas le confort d'un lodge.",
        regionSlug: "spitzkoppe",
      },
      {
        label: "Jours 7 à 8",
        text: "Swakopmund : deux nuits sur la côte, une vraie activité (surf des sables ou sortie en bateau à Walvis Bay vers la lagune de flamants), et la meilleure cuisine du voyage.",
        regionSlug: "swakopmund",
      },
      {
        label: "Jours 9 à 10",
        text: "Côte des Squelettes : deux nuits. Les meilleurs lodges du nord ne sont normalement accessibles qu'en avion depuis Swakopmund ; un court détour en voiture depuis le Damaraland n'atteint que la section sud, moins reculée. Colonies d'otaries, épaves et véritable isolement, dans les deux cas.",
        regionSlug: "skeleton-coast",
      },
      {
        label: "Jours 11 à 12",
        text: "Damaraland : les gravures rupestres de Twyfelfontein, un vrai site du patrimoine mondial de l'UNESCO, et une sortie guidée à la recherche d'éléphants adaptés au désert (les observations ne sont pas garanties, mais c'est la meilleure chance réaliste dans le pays).",
        regionSlug: "damaraland",
      },
      {
        label: "Jours 13 à 15",
        text: "Etosha : trois nuits, partagées entre un lodge sur réserve privée pour les sorties nocturnes et le tracking hors piste, et des camps près des points d'eau à l'intérieur du parc, avec assez de temps pour atteindre à la fois la section est et la section ouest plutôt que de choisir un seul côté.",
        regionSlug: "etosha",
      },
      {
        label: "Jours 16 à 18",
        text: "Prenez l'avion ou faites le long trajet (environ 12h) vers la bande de Caprivi : la plupart des voyageurs prennent l'avion jusqu'à Katima Mulilo à partir de ce point plutôt que de conduire. Trois nuits de croisières fluviales pour observer hippopotames et oiseaux, et un safari en véhicule dans le parc national de Bwabwata, une Namibie vraiment différente du circuit désertique laissé derrière vous.",
        regionSlug: "caprivi",
      },
      {
        label: "Jours 19 à 21",
        text: "Retour à Windhoek pour boucler le circuit : la plupart des voyageurs reprennent l'avion depuis Katima Mulilo plutôt que de refaire le trajet d'environ 12h, surtout avec un vol international à attraper au jour 21.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Faut-il prendre l'avion quelque part sur cet itinéraire de 21 jours ?",
        a: "Réalistement, oui, au moins une fois : les meilleurs lodges de la Côte des Squelettes et la bande de Caprivi sont normalement atteints en petit avion ou vol intérieur plutôt qu'en conduite autonome, vu les distances en jeu. Prévoyez-le dans le budget de cet itinéraire.",
      },
      {
        q: "Trois semaines, est-ce trop long pour la Namibie ?",
        a: "Pas vu les distances de conduite dans le pays : 3 semaines permettent d'ajouter les deux extrêmes (la Côte des Squelettes et le Caprivi) à la boucle classique sans transformer tout le voyage en journées de transit. La plupart des voyageurs optant pour cette durée sont des visiteurs de retour ou donnent spécifiquement la priorité à l'isolement.",
      },
      {
        q: "Peut-on faire cet itinéraire en 2x4 plutôt qu'en 4x4 ?",
        a: "Pas confortablement : les routes D du Damaraland et le détour vers Fish River Canyon sont les deux étapes où un 4x4 fait une vraie différence, et cet itinéraire inclut les deux. Pour rester en 2x4, l'itinéraire de 7 jours est celui conçu pour cela.",
      },
      {
        q: "Peut-on faire cet itinéraire dans le sens inverse ?",
        a: "Oui structurellement : commencer par Etosha et le nord, puis descendre vers Fish River Canyon en dernier, fonctionne tout aussi bien, aucune des étapes de la Côte des Squelettes ni du Caprivi ne dépendant du sens de déplacement. Le seul point fixe est Windhoek elle-même : les deux extrémités du voyage sont ancrées à son aéroport, donc quel que soit le sens choisi, vous atterrissez et décollez toujours de la même ville.",
      },
    ],
  },
};

export const regionsFr: Region[] = regions.map((r) => ({ ...r, ...(regionTranslationsFr[r.slug] ?? {}) }));
export const lodgesFr: Lodge[] = lodges.map((l) => ({ ...l, ...(lodgeTranslationsFr[l.slug] ?? {}) }));
export const selfDriveRoutesFr: RoutePlan[] = selfDriveRoutes.map((r) => ({
  ...r,
  ...(routeTranslationsFr[r.slug] ?? {}),
}));

export function getRegionFr(slug: string): Region | undefined {
  return regionsFr.find((r) => r.slug === slug);
}

export function getLodgeFr(slug: string): Lodge | undefined {
  return lodgesFr.find((l) => l.slug === slug);
}

export function getLodgesForRegionFr(regionSlug: string): Lodge[] {
  return lodgesFr.filter((l) => l.regionSlug === regionSlug);
}

export function getRouteFr(slug: string): RoutePlan | undefined {
  return selfDriveRoutesFr.find((r) => r.slug === slug);
}

export function getLodgesByCategoryFr(category: LodgeCategory): Lodge[] {
  return lodgesFr.filter((l) => l.categories.includes(category));
}

export const featuredLodgesFr: Lodge[] = [
  getLodgeFr("little-kulala")!,
  getLodgeFr("grootberg-lodge")!,
  getLodgeFr("ongava-lodge")!,
  getLodgeFr("canyon-lodge")!,
];
