import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Pourquoi visiter la Namibie en 2027";
const DESCRIPTION =
  "Un argumentaire honnête pour un voyage en Namibie en 2027 : ce qui change vraiment cette année-là, une analyse saison par saison du bon moment pour partir, et une section lune de miel résolument originale.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/why-visit-namibia-2027",
    languages: {
      en: "/why-visit-namibia-2027",
      de: "/de/why-visit-namibia-2027",
      nl: "/nl/why-visit-namibia-2027",
      fr: "/fr/why-visit-namibia-2027",
      it: "/it/why-visit-namibia-2027",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const REASONS_2027 = [
  {
    title: "Les prix viennent de se stabiliser, pas sur le point de repartir à la hausse",
    text: "Les frais d'entrée dans les parcs nationaux namibiens ont fortement augmenté le 1er avril 2026, une hausse de 86 %, la première depuis 2021. C'est exactement le genre de changement qui prend au dépourvu les voyageurs ayant planifié leur budget sur un guide plus ancien. Un voyage en 2027 se budgète dès le départ sur la nouvelle norme tarifaire : vous partez sur la grille actuelle, pas sur une grille dépassée, et l'historique suggère qu'une hausse de cette ampleur ne devrait pas se reproduire avant plusieurs années.",
  },
  {
    title: "La grande déviation d'Etosha devrait enfin se dégager",
    text: "Un chantier de réfection routière a fermé la route directe entre Okaukuejo et Halali, avec une déviation obligatoire en vigueur du 2 juin 2026 à juillet 2027. Voyagez en tout début d'année 2027 et vous emprunterez encore le contournement par Gemsbokvlakte et Rhino Drive ; voyagez dans la seconde moitié de l'année et il y a une vraie chance que la route directe ait rouvert. Dans les deux cas, vérifiez le statut actuel auprès de NWR avant de partir, car les calendriers de travaux évoluent, mais 2027 est l'année où ce problème précis est censé se terminer.",
  },
  {
    title: "La reconnaissance est toute fraîche, mais l'affluence n'a pas encore suivi",
    text: "La Namibie a été citée parmi les meilleures destinations du Best in Travel 2026 de Lonely Planet, pour ses éléphants adaptés au désert et son tourisme axé sur la conservation, et Shipwreck Lodge a reçu une Michelin Key lors de la toute première sélection mondiale du guide en 2025. Ce sont deux marques de reconnaissance récentes et bien réelles d'un pays qui entre dans une catégorie supérieure d'attention internationale. Ce type de reconnaissance met généralement quelques années à se traduire par des camps plus remplis et des tarifs plus élevés. 2027 se situe tôt dans cette fenêtre, après la reconnaissance mais avant ses effets les plus larges.",
  },
  {
    title: "Le système de visa s'est stabilisé",
    text: "Depuis le 1er avril 2025, le visa à l'arrivée namibien exige une pré-demande obligatoire en ligne plutôt qu'un paiement à l'aéroport, et la liste des nationalités éligibles s'est encore élargie en octobre 2025 avec 36 pays supplémentaires. D'ici 2027, cette transition n'aura plus rien de nouveau : le système en ligne aura eu environ deux ans pour éliminer ses débuts difficiles, et la plupart des nationalités qui prévoient de voyager savent déjà si elles doivent faire une demande et combien cela coûte. Vérifiez le statut de votre propre nationalité sur le portail officiel avant de réserver, car la liste peut encore évoluer.",
  },
  {
    title: "Une année plus calme avant la ruée vers l'éclipse de 2030",
    text: "La prochaine éclipse solaire totale en Namibie n'aura lieu que le 25 novembre 2030, quand la bande de totalité doit balayer la Namibie, le Botswana, l'Afrique du Sud, le Lesotho et l'Australie. C'est encore loin, mais les opérateurs d'astrotourisme et les lodges dédiés à l'observation du ciel planifient ce genre d'événement des années à l'avance, et le statut de réserve internationale de ciel étoilé de catégorie Or de la NamibRand Nature Reserve, détenu depuis 2012, en fait déjà un point de départ naturel pour le tourisme lié à l'éclipse à mesure que 2030 se rapproche. 2027 vous offre les mêmes ciels réellement sombres, aux prix et à la disponibilité d'une année ordinaire, bien avant toute demande liée à l'éclipse.",
  },
  {
    title: "Les nouveaux lodges auront enfin trouvé leur rythme de croisière",
    text: "Le secteur touristique namibien a continué de se développer tout au long de 2026, avec de nouvelles ouvertures de lodges rapportées dans le nord, notamment de nouveaux établissements dans la région du Zambèze. Un lodge qui vient d'ouvrir passe généralement sa première année à trouver ses marques : personnel, circuits guidés et logistique demandent du temps pour se roder. D'ici 2027, tout ce qui a ouvert en 2026 aura vécu une saison complète pour mûrir, ce qui se traduit en général par une expérience plus régulière qu'un séjour en année d'ouverture.",
  },
];

const SEASONS_2027 = [
  {
    name: "Saison sèche",
    months: "Mai - octobre 2027",
    text: "La fenêtre safari classique de la Namibie. Les pluies s'arrêtent, la végétation s'éclaircit, et les animaux se concentrent autour des points d'eau permanents d'Etosha, surtout d'août à octobre à mesure que la saison sèche resserre son emprise. Juillet est généralement le mois le plus sec jamais enregistré, et les nuits de juin-juillet dans l'intérieur désertique descendent régulièrement à 5°C ou moins, prévoyez donc une vraie doudoune. C'est aussi la haute saison des réservations : les camps du parc national d'Etosha valent la peine d'être réservés 6 à 9 mois à l'avance pour un voyage en saison sèche 2027, ce qui veut dire commencer à planifier dès la mi-2026.",
  },
  {
    name: "Saison verte",
    months: "Novembre 2027 - avril 2028",
    text: "Des orages épars en novembre montent en puissance jusqu'à un pic entre janvier et mars, quand le désert reverdit presque du jour au lendemain et que les oiseaux migrateurs paléarctiques rejoignent les espèces résidentes pour la meilleure période ornithologique de l'année. La faune se disperse loin des points d'eau à mesure que l'eau devient abondante partout, donc les observations à Etosha demandent davantage de déplacements en voiture. C'est aussi la saison des naissances, qui amène de nouveaux impalas et springboks sur les plaines, et celle où la photographie de ciels et de lumière spectaculaires prend tout son sens.",
  },
  {
    name: "Ailes de saison",
    months: "Avril-mai & septembre-octobre 2027",
    text: "Le meilleur compromis conditions/affluence du calendrier. Avril-mai 2027 offre des paysages verts en train de sécher, avec des tarifs inférieurs au pic de la saison sèche ; septembre-octobre 2027 offre une observation de la faune en saison sèche à son plus concentré, juste avant la remise à zéro des tarifs de janvier, avec des camps nettement moins remplis qu'en août. La chaleur d'octobre, elle, est bien réelle : les régions désertiques dépassent régulièrement les 35-38°C en milieu d'après-midi, prévoyez donc les sorties safari tôt le matin et en fin d'après-midi.",
  },
];

const HONEYMOON_IDEAS = [
  {
    title: "Un renouvellement de vœux ou une cérémonie sous les étoiles à NamibRand",
    text: (
      <>
        La NamibRand Nature Reserve détient le statut de réserve internationale de ciel étoilé de
        catégorie Or depuis 2012, l&apos;une des rares réserves Or au monde, avec des mesures de
        qualité du ciel qui dépassent régulièrement 21 magnitudes par seconde d&apos;arc carrée,
        proches des ciels les plus sombres mesurables sur Terre. Plusieurs lodges en bordure de la
        réserve organisent des séances d&apos;astronomie guidées avec de vrais télescopes, pas juste
        une couverture posée sur le sable, et un nombre croissant de couples choisissent de faire
        coïncider un dîner privé ou un renouvellement de vœux informel avec une nuit sans lune
        là-bas. Calez la date autour de la nouvelle lune et lisez notre guide complet de{" "}
        <Link
          href="/fr/namibia-stargazing-photography"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          l&apos;observation des étoiles et de l&apos;astrophotographie
        </Link>{" "}
        avant de réserver.
      </>
    ),
  },
  {
    title: "L'intimité des camps troglodytes du Damaraland",
    text: (
      <>
        Laissez de côté, l&apos;espace d&apos;une nuit, la carte postale classique des dunes pour
        quelque chose d&apos;étrange et de beau :{" "}
        <Link href="/fr/lodges/doro-nawas-camp" className="font-semibold text-rust hover:text-rust-dark">
          Camp Kipwe
        </Link>{" "}
        construit ses bungalows en pierre en forme d&apos;igloo à même les failles entre les blocs
        de granit empilés près de Twyfelfontein, tandis que{" "}
        <Link href="/fr/lodges/damaraland-camp" className="font-semibold text-rust hover:text-rust-dark">
          Mowani Mountain Camp
        </Link>{" "}
        installe ses chambres sur plateforme surélevée un peu plus au nord, dans le même paysage
        de granit rouge. Les deux vous placent à portée de sorties guidées à la rencontre des
        éléphants adaptés au désert la journée, et d&apos;un apéritif au coucher du soleil sur un
        surplomb rocheux le soir. C&apos;est un décor de lune de miel réellement différent des dunes
        vers lesquelles s&apos;orientent la plupart des itinéraires, et peu d&apos;autres voyageurs
        trouvent leur chemin jusqu&apos;ici. Consultez notre{" "}
        <Link href="/fr/where-to-stay/damaraland" className="font-semibold text-rust hover:text-rust-dark">
          guide des lodges du Damaraland
        </Link>{" "}
        pour la liste complète.
      </>
    ),
  },
  {
    title: "Tracez votre propre route : une lune de miel en autotour, à deux",
    text: (
      <>
        La plupart des conseils sur la lune de miel poussent vers un voyage entièrement guidé et
        planifié à l&apos;avance, et ce confort a de vrais arguments pour lui. Mais le réseau de
        routes goudronnées et empierrées de la Namibie, les fameuses routes C, reste vraiment
        accessible aux conducteurs à l&apos;aise, et une lune de miel en autotour a son propre
        romantisme : pas d&apos;horaire fixe, personne d&apos;autre pour décider quand on quitte un
        coucher de soleil, juste vous deux dans la voiture pendant de longs trajets, avec la radio
        et la route pour seule compagnie. Cela convient aux couples qui préfèrent construire leur
        voyage plutôt que d&apos;en suivre un tout fait. Lisez notre{" "}
        <Link
          href="/fr/self-drive-vs-guided-namibia"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          comparatif autotour ou safari accompagné
        </Link>{" "}
        pour voir si ce compromis vous correspond.
      </>
    ),
  },
  {
    title: "Un détour par la Skeleton Coast depuis Swakopmund",
    text: (
      <>
        La plupart des itinéraires de lune de miel s&apos;arrêtent aux dunes et au littoral de
        Swakopmund avant de rebrousser chemin. Un détour vers le nord jusqu&apos;à Cape Cross,
        accessible en autotour depuis Swakopmund ou le Damaraland, vous place devant l&apos;une des
        plus grandes colonies d&apos;otaries à fourrure du Cap du continent, des dizaines de
        milliers d&apos;animaux en saison, sur ce même littoral noyé dans le brouillard et jonché
        d&apos;épaves qui a donné son nom à la Skeleton Coast. C&apos;est austère plutôt que joli, et
        ce contraste avec le reste d&apos;une lune de miel en Namibie (dunes, blocs de granit,
        points d&apos;eau) est justement tout l&apos;intérêt : une journée qui ne ressemble vraiment
        à aucune autre du voyage.
      </>
    ),
  },
  {
    title: "Un temps guidé et respectueux avec une communauté himba",
    text: (
      <>
        Une lune de miel n&apos;a pas besoin de se résumer à l&apos;intimité. Une visite guidée et
        respectueuse d&apos;une communauté himba au Kaokoland, organisée avec un guide entretenant
        une vraie relation suivie sur place, comme le Kaoko Information Centre à Opuwo, offre au
        couple une expérience de fond plutôt que décorative : acheter des provisions ensemble au
        préalable, demander le consentement avant toute photo, et suivre les limites posées par la
        communauté elle-même plutôt que celles d&apos;un itinéraire. C&apos;est généralement organisé
        en extension depuis le Damaraland, ce qui ajoute au moins une journée de route dans chaque
        sens. Notre{" "}
        <Link href="/fr/himba-culture-namibia" className="font-semibold text-rust hover:text-rust-dark">
          guide de la culture himba
        </Link>{" "}
        explique comment faire cela correctement.
      </>
    ),
  },
  {
    title: "Le romantisme façon château au Le Mirage",
    text: (
      <>
        Pour les couples qui veulent le décor des dunes sans renoncer au confort d&apos;un resort,{" "}
        <Link href="/fr/lodges/little-kulala" className="font-semibold text-rust hover:text-rust-dark">
          Le Mirage Resort &amp; Spa
        </Link>{" "}
        fait figure d&apos;exception sur la carte des lodges namibiens : une propriété façon
        château sur la route D826 près de la porte de Sesriem, avec des chambres en tour à ciel
        ouvert conçues spécifiquement pour dormir à la belle étoile, et un spa complet sur place
        (le Mystique Spa) dans un pays où la plupart des cartes de soins des lodges restent encore
        modestes. Demandez la nuit aux meilleures prévisions météo de votre séjour pour la
        chambre-tour, car les ciels purs et sans pollution lumineuse du Namib-Naukluft méritent
        qu&apos;on planifie autour.
      </>
    ),
  },
  {
    title: "Traquer la faune ensemble, à pied",
    text: (
      <>
        Une expérience partagée et physique marque généralement un couple plus durablement qu&apos;un
        simple point de vue partagé. La concession de Palmwag, dans l&apos;ouest du Damaraland, est
        l&apos;un des seuls endroits d&apos;Afrique à proposer le tracking du rhinocéros noir à pied,
        mené avec les conservancies communautaires locales, et c&apos;est généralement réservé comme
        activité à part entière plutôt qu&apos;en simple complément. Ce n&apos;est pas un après-midi
        au spa, c&apos;est une véritable aventure que vous vivez à deux, guidés par quelqu&apos;un
        qui lit les traces pour gagner sa vie. Prévoyez du temps de planification supplémentaire :
        notre{" "}
        <Link href="/fr/luxury-namibia" className="font-semibold text-rust hover:text-rust-dark">
          guide de la Namibie de luxe
        </Link>{" "}
        explique comment fonctionne généralement l&apos;accès en petit avion à des concessions
        comme celle-ci.
      </>
    ),
  },
  {
    title: "Une étape boutique à Windhoek, pas juste une escale",
    text: (
      <>
        La plupart des itinéraires traitent Windhoek comme une simple nuit de transit à chaque bout
        du voyage.{" "}
        <Link
          href="/fr/lodges/the-olive-exclusive"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          The Olive Exclusive
        </Link>
        , un boutique-hôtel de sept suites dont chacune est pensée autour d&apos;une région
        namibienne différente avec sa propre piscine privée, mérite d&apos;être traité comme une
        vraie étape à part entière : une véritable première ou dernière nuit, pas seulement un
        endroit où dormir le décalage horaire avant que le vrai voyage ne commence.
      </>
    ),
  },
];

const PLANNING_LINKS = [
  {
    title: "Conditions de visa",
    stat: "90 $US",
    text: "La plupart des nationalités font désormais leur demande en ligne à l'avance pour le visa à l'arrivée, plutôt qu'à l'aéroport, depuis le 1er avril 2025. Vérifiez le statut de votre nationalité avant de réserver vos vols.",
    href: "/fr/namibia-visa-requirements",
    cta: "Vérifier les conditions de visa",
  },
  {
    title: "Combien de temps partir",
    stat: "7-21 jours",
    text: "Les distances à parcourir en Namibie font que la durée du voyage détermine l'itinéraire, plus que l'inverse. Comparez les options à 7, 10, 14 et 21 jours.",
    href: "/fr/itineraries",
    cta: "Construire votre itinéraire",
  },
  {
    title: "Le budget",
    stat: "225-700 €+/jour",
    text: "De l'autotour économique au tout-inclus luxe guidé : les fourchettes par personne et par jour pour les trois niveaux, et ce qui fait vraiment varier le prix.",
    href: "/fr/namibia-trip-cost",
    cta: "Voir le détail complet du budget",
  },
  {
    title: "Autotour ou accompagné",
    stat: "À vous de voir",
    text: "Coût, liberté, risque et confort : les compromis honnêtes entre conduire soi-même et réserver un guide, sans parti pris pour l'un ou l'autre.",
    href: "/fr/self-drive-vs-guided-namibia",
    cta: "Comparer autotour et accompagné",
  },
];

const FAQS = [
  {
    q: "Y a-t-il un événement astronomique particulier en Namibie en 2027 ?",
    a: "Aucune éclipse solaire totale ne touche la Namibie en 2027. Une éclipse solaire partielle est visible depuis Windhoek le 6 février 2027, et une autre le 2 août 2027, mais les bandes de totalité/annularité des deux tombent ailleurs en Afrique. La prochaine éclipse solaire totale de la Namibie aura lieu le 25 novembre 2030, quand la bande de totalité doit balayer la Namibie, le Botswana, l'Afrique du Sud, le Lesotho et l'Australie. Si les ciels sombres sont votre priorité, le statut de réserve de ciel étoilé catégorie Or de NamibRand rend presque toutes les nuits claires et sans lune de 2027 intéressantes, sans qu'il soit besoin de planifier autour d'un événement rare.",
  },
  {
    q: "2027 est-elle vraiment une meilleure année pour visiter que 2026 ou 2028 ?",
    a: "Il n'y a pas une seule raison spectaculaire qui place 2027 au-dessus des années voisines, et nous préférons être honnêtes là-dessus plutôt que d'en inventer une. Ce qui joue réellement en faveur de 2027, c'est une combinaison de facteurs plus modestes mais bien réels : les frais d'entrée des parcs nationaux, ajustés en avril 2026, se sont désormais installés dans leur nouvelle norme plutôt que de constituer un choc récent, la déviation routière d'Etosha entre Okaukuejo et Halali doit se lever d'ici juillet 2027, le système de visa en ligne aura eu deux ans pour mûrir depuis son lancement en avril 2025, et la reconnaissance récente de la Namibie par Lonely Planet et le guide Michelin est encore assez fraîche pour que ses effets sur l'affluence et les tarifs n'aient pas pleinement joué.",
  },
  {
    q: "Quand réserver un voyage en Namibie pour 2027 ?",
    a: "Pour un voyage en saison sèche (mai-octobre 2027), commencez à planifier 6 à 9 mois à l'avance, surtout si les camps du parc national d'Etosha font partie de votre itinéraire, car ce sont eux qui se remplissent en premier. Pour la saison verte (novembre 2027-avril 2028), vous pouvez généralement planifier avec moins d'avance, même si les vols et les lodges haut de gamme profitent quand même d'une réservation plus précoce.",
  },
  {
    q: "Faut-il un 4x4 pour un voyage en Namibie en 2027 ?",
    a: "Cela dépend de votre itinéraire, pas de l'année. La boucle classique Windhoek-Sossusvlei-Swakopmund se gère très bien en 2x4 standard. Ce sont les pistes en gravier du Damaraland et toute extension vers le Kaokoland qui justifient réellement un 4x4. Consultez notre comparatif autotour ou accompagné et nos guides d'itinéraires pour des conseils propres à chaque route.",
  },
  {
    q: "La Namibie est-elle une bonne destination de lune de miel en 2027 ?",
    a: "Oui, et c'est sans doute une fenêtre particulièrement favorable : la reconnaissance internationale récente (Best in Travel 2026 de Lonely Planet, Michelin Key 2025 du Shipwreck Lodge) n'a pas encore entraîné le type d'affluence qui suit généralement quelques années plus tard, donc les vrais atouts du pays pour une lune de miel, intimité, ciels étoilés, paysages spectaculaires avec très peu d'autres voyageurs, restent pleinement intacts. Voir les idées de lune de miel originales ci-dessus, ou notre guide dédié à la lune de miel pour la sélection des lodges les plus romantiques.",
  },
  {
    q: "Qu'est-ce qui a le plus changé récemment pour la planification d'un voyage en 2027 ?",
    a: "Trois choses à connaître avant de réserver : le visa à l'arrivée namibien exige désormais une pré-demande obligatoire en ligne plutôt qu'un paiement à l'aéroport, en vigueur depuis le 1er avril 2025, avec 36 nationalités supplémentaires éligibles ajoutées en octobre 2025. Les frais d'entrée des parcs nationaux ont augmenté de 86 % le 1er avril 2026, la première hausse depuis 2021. Et une déviation routière obligatoire entre les camps d'Okaukuejo et de Halali à Etosha est en vigueur depuis le 2 juin 2026, avec une levée prévue d'ici juillet 2027, même si les calendriers de travaux peuvent évoluer.",
  },
  {
    q: "La Namibie sera-t-elle plus fréquentée en 2027 à cause de sa reconnaissance récente ?",
    a: "Pas de façon spectaculaire, si l'on se fie à la manière dont ce type de reconnaissance se traduit habituellement. Être cité dans le Best in Travel 2026 de Lonely Planet et l'obtention d'une Michelin Key en 2025 pour Shipwreck Lodge sont deux signaux réels d'une attention internationale grandissante envers la Namibie, mais cette attention met généralement quelques années à se traduire par des camps nettement plus complets et des tarifs plus élevés. 2027 se situe assez tôt dans cette fenêtre pour que l'atout principal de la Namibie, un vrai isolement et une densité de visiteurs très faible comparée aux autres pays de safari d'Afrique australe, tienne encore bon.",
  },
];

const POPULAR_GUIDES_NL = [
  { title: "Meilleurs lodges en Namibie", href: "/fr/best-lodges-in-namibia" },
  { title: "Séjourner à Etosha", href: "/fr/where-to-stay/etosha" },
  { title: "Séjourner à Sossusvlei", href: "/fr/where-to-stay/sossusvlei" },
  { title: "Guide de l'autotour en Namibie", href: "/fr/namibia-self-drive-guide" },
  { title: "Meilleure période pour visiter la Namibie", href: "/fr/best-time-to-visit-namibia" },
  { title: "Conditions de visa pour la Namibie", href: "/fr/namibia-visa-requirements" },
  { title: "La Namibie est-elle sûre ? Sécurité et santé", href: "/fr/namibia-safety-and-health" },
  { title: "Combien coûte un voyage en Namibie ?", href: "/fr/namibia-trip-cost" },
  { title: "Guide de la faune namibienne", href: "/fr/namibia-wildlife-guide" },
];

export default function WhyVisit2027PageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guides", url: `${SITE_URL}/fr/guides` },
          { name: "Pourquoi visiter la Namibie en 2027", url: `${SITE_URL}/fr/why-visit-namibia-2027` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Pourquoi visiter la Namibie en 2027
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Autant le dire d&apos;emblée : il n&apos;y a ni éclipse solaire totale, ni anniversaire
          exceptionnel, aucune raison spectaculaire unique qui distingue 2027 des autres années en
          Namibie. Ce qu&apos;il y a, en revanche, c&apos;est un vrai faisceau de raisons plus
          modestes mais bien réelles qui font de 2027 une année particulièrement bien choisie pour
          enfin réserver ce voyage, d&apos;une grille tarifaire qui vient de se stabiliser à un pays
          dont la reconnaissance internationale est encore assez récente pour que l&apos;affluence
          n&apos;ait pas suivi. Voici l&apos;argumentaire honnête, une analyse saison par saison du
          calendrier, et une section lune de miel volontairement originale, tant les conseils sur le
          sujet répètent souvent les quatre mêmes idées.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Notre recommandation :</span> si vous
          hésitez entre 2027 et repousser encore le voyage, choisissez 2027. Les difficultés
          pratiques qui compliquaient la préparation d&apos;un voyage en Namibie (un processus de
          visa flou, une grille tarifaire incertaine, une déviation routière active à travers
          Etosha) sont soit déjà résolues, soit sur le point de l&apos;être dans l&apos;année, et la
          reconnaissance récente du pays ne s&apos;est pas encore traduite par des camps nettement
          plus complets.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Ce qui change vraiment en 2027
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Pas le raisonnement générique du « c&apos;est toujours le bon moment pour voyager » :
            six éléments précis et datés, propres à cette année en particulier.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS_2027.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 60}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <MetaIcon name="check" className="h-5 w-5 text-olive" />
              <h3 className="mt-4 text-[15px] font-bold text-charcoal">{r.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-charcoal/70">{r.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h3 className="text-lg font-bold text-charcoal">
            Un mot sur la question de l&apos;éclipse, puisqu&apos;on nous la pose souvent
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            Nous avons cherché à savoir si un véritable événement astronomique justifiait de
            construire tout ce guide autour de 2027, sachant que les ciels sombres de la Namibie en
            font une destination naturelle pour l&apos;astrotourisme. Ce n&apos;est pas le cas : les
            deux éclipses solaires qui touchent la Namibie en 2027 (6 février et 2 août) y sont
            toutes deux partielles, les bandes d&apos;annularité et de totalité tombant
            respectivement en Afrique de l&apos;Ouest et en Afrique du Nord/péninsule arabique. La
            prochaine éclipse solaire totale propre à la Namibie n&apos;aura lieu que le 25 novembre
            2030. Nous préférons vous le dire clairement plutôt que d&apos;inventer un argument qui
            ne tient pas la route. Ce que 2027 offre bel et bien, ce sont les mêmes ciels de
            catégorie Or à la NamibRand Nature Reserve que la Namibie offre chaque année, sans le
            pic de demande qui devrait probablement s&apos;installer à mesure que 2030 approche.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            La Namibie en 2027, saison par saison
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Le climat sous-jacent ne change pas d&apos;une année sur l&apos;autre, mais savoir
            exactement quels mois tombent où en 2027 compte pour les délais de réservation. Pour le
            détail mois par mois, consultez notre{" "}
            <Link
              href="/fr/best-time-to-visit-namibia"
              className="font-semibold text-rust hover:text-rust-dark"
            >
              guide de la meilleure période pour visiter la Namibie
            </Link>
            .
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SEASONS_2027.map((season, i) => (
            <Reveal key={season.name} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-charcoal">{season.name}</h3>
                <p className="mt-1 text-[12px] uppercase tracking-[0.1em] text-rust">
                  {season.months}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-charcoal/70">{season.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Une lune de miel en Namibie, version originale
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            La plupart des conseils sur la lune de miel en Namibie, les nôtres compris, s&apos;appuient
            sur la même poignée d&apos;idées : un dîner privé dans les dunes, un lever de soleil en
            montgolfière, un spa façon château. Ce sont de bonnes idées, qui valent la peine
            d&apos;être vécues. Mais si vous voulez une lune de miel 2027 qui vous ressemble plutôt
            qu&apos;une liste de cases à cocher reprise de tous les autres guides, voici huit idées
            qui vont plus loin, classées à peu près de la plus paisible à la plus aventureuse.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {HONEYMOON_IDEAS.map((idea, i) => (
            <Reveal
              key={idea.title}
              delay={(i % 4) * 60}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <span className="font-serif text-2xl italic text-rust">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-[15px] font-bold text-charcoal">{idea.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-charcoal/70">{idea.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h3 className="text-lg font-bold text-charcoal">
            Sur le rythme d&apos;une lune de miel en particulier
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            Une lune de miel fonctionne mieux sur un format plus court qu&apos;un premier circuit en
            Namibie. Deux ou trois des idées ci-dessus, à raison de trois à quatre nuits chacune,
            plutôt que la boucle à cinq étapes sur dix jours que montent souvent les
            primo-voyageurs, laisse le temps de vraiment ralentir, et permet d&apos;ajouter un dîner
            privé ou un vol en montgolfière sans que le voyage ressemble à une liste de cases à
            cocher. Consultez notre{" "}
            <Link href="/fr/namibia-honeymoon" className="font-semibold text-rust hover:text-rust-dark">
              guide de la lune de miel en Namibie
            </Link>{" "}
            pour la sélection de lodges essentielle, ou notre{" "}
            <Link href="/fr/best-romantic-stays" className="font-semibold text-rust hover:text-rust-dark">
              guide des meilleurs séjours romantiques
            </Link>{" "}
            pour la liste complète.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Organiser le côté pratique
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Une fois la question du timing tranchée, quatre éléments règlent le reste du plan.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANNING_LINKS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <p className="font-serif text-2xl italic text-rust">{p.stat}</p>
                <h3 className="mt-2 text-[14px] font-bold text-charcoal">{p.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-charcoal/70">{p.text}</p>
                <span className="mt-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-rust group-hover:text-rust-dark">
                  {p.cta} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Questions fréquentes
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4">
          {FAQS.map((faq, i) => (
            <Reveal
              key={faq.q}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-charcoal">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{faq.a}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-10 sm:px-10">
        <Reveal className="flex flex-wrap gap-3">
          {POPULAR_GUIDES_NL.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
            >
              {g.title}
            </Link>
          ))}
          <Link
            href="/fr/namibia-honeymoon"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Lune de miel en Namibie
          </Link>
          <Link
            href="/fr/luxury-namibia"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibie de luxe
          </Link>
          <Link
            href="/fr/itineraries"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Itinéraires namibiens
          </Link>
        </Reveal>
      </section>
    </>
  );
}
