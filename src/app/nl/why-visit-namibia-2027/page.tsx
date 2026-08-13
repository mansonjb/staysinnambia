import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Waarom Namibië bezoeken in 2027";
const DESCRIPTION =
  "Een eerlijk pleidooi voor een Namibië-reis in 2027: wat er dit jaar echt anders is, een seizoensgebonden planningsoverzicht en een uitgebreid, origineel gedeelte over huwelijksreizen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/why-visit-namibia-2027",
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

const POPULAR_GUIDES_NL = [
  { title: "Beste lodges in Namibië", href: "/nl/best-lodges-in-namibia" },
  { title: "Verblijven in Etosha", href: "/nl/where-to-stay/etosha" },
  { title: "Verblijven in Sossusvlei", href: "/nl/where-to-stay/sossusvlei" },
  { title: "Namibië zelfrijgids", href: "/nl/namibia-self-drive-guide" },
  { title: "Beste reistijd voor Namibië", href: "/nl/best-time-to-visit-namibia" },
  { title: "Namibië visumvereisten", href: "/nl/namibia-visa-requirements" },
  { title: "Is Namibië veilig? Veiligheid & gezondheid", href: "/nl/namibia-safety-and-health" },
  { title: "Wat kost een Namibië-reis?", href: "/nl/namibia-trip-cost" },
  { title: "Namibië wildlife gids", href: "/nl/namibia-wildlife-guide" },
];

const REASONS_2027 = [
  {
    title: "De prijzen zijn al gereset, geen nieuwe sprong op til",
    text: "De toegangsprijzen voor Namibische nationale parken stegen fors op 1 april 2026: een sprong van 86%, de eerste verhoging sinds 2021. Dat is precies het soort verandering waardoor reizigers met een verouderde gids voor verrassingen komen te staan. Een reis in 2027 is vanaf dag één gebudgetteerd op de nieuwe normaal: u rekent met de huidige tariefstructuur, niet met een verouderde, en de geschiedenis leert dat een sprong van deze omvang niet snel weer op stapel staat.",
  },
  {
    title: "Etosha's grote omleiding zou eindelijk moeten opklaren",
    text: "Een wegverbeteringsproject sloot de directe route tussen Okaukuejo en Halali, met een verplichte omleiding die van kracht is van 2 juni 2026 tot en met juli 2027. Bezoekt u begin 2027, dan rijdt u nog via de omweg Gemsbokvlakte en Rhino Drive; bezoekt u in de tweede helft van het jaar, dan is er een reële kans dat de directe route weer open is. Controleer in beide gevallen de actuele status bij NWR voor vertrek, want bouwplanningen verschuiven, maar 2027 is het jaar waarin dit specifieke ongemak volgens planning eindigt.",
  },
  {
    title: "De erkenning is vers, maar de drukte heeft het nog niet ingehaald",
    text: "Namibië werd door Lonely Planet uitgeroepen tot een van de topbestemmingen in Best in Travel 2026, vanwege de woestijnaangepaste olifanten en het natuurbehoud-gedreven toerisme, en Shipwreck Lodge ontving een Michelin Key in de eerste editie van de Global Michelin Keys Selection in 2025. Beide zijn oprechte, recente tekenen dat het land een hoger niveau van internationale aandacht binnentreedt. Dat soort erkenning vertaalt zich doorgaans pas na een paar jaar naar vollere kampen en hogere tarieven. 2027 valt vroeg in dat venster: na de erkenning, maar vóór de bredere gevolgen ervan.",
  },
  {
    title: "Het visumsysteem is tot rust gekomen",
    text: "Sinds 1 april 2025 vereist het Namibische Visa on Arrival een verplichte online vooraanvraag in plaats van betaling bij aankomst op de luchthaven, en de lijst van in aanmerking komende nationaliteiten groeide in oktober 2025 opnieuw, met 36 extra landen. Tegen 2027 is die overgang niet meer nieuw: het online systeem heeft dan ongeveer twee jaar gehad om de aanloopproblemen op te lossen, en de meeste nationaliteiten die van plan zijn te reizen weten inmiddels of ze moeten aanvragen en wat het kost. Controleer wel de status van uw eigen nationaliteit op het officiële portaal voor u boekt, want de lijst kan nog wijzigen.",
  },
  {
    title: "Een rustiger jaar vóór de eclipshaast van 2030",
    text: "De volgende totale zonsverduistering in Namibië vindt pas plaats op 25 november 2030, wanneer het pad van totaliteit over Namibië, Botswana, Zuid-Afrika, Lesotho en Australië trekt. Dat ligt nog jaren weg, maar astro-toerismeaanbieders en dark-sky lodges plannen jaren vooruit voor dit soort gebeurtenissen, en de Gold-tier status van NamibRand Nature Reserve als International Dark Sky Reserve (sinds 2012) maakt het gebied nu al een natuurlijk uitvalspunt voor eclipsreizen zodra 2030 dichterbij komt. 2027 geeft u dezelfde oprecht donkere luchten tegen de prijzen en beschikbaarheid van een gewoon jaar, ruim vóór de vraag die de eclips zal aanwakkeren.",
  },
  {
    title: "Nieuwe lodges draaien eindelijk op volle toeren",
    text: "De Namibische toerismesector is in 2026 blijven bouwen, met nieuwe lodgeopeningen gemeld in het noorden, waaronder nieuwe verblijven in de Zambezi-regio. Vers geopende lodges hebben doorgaans hun eerste jaar nodig om hun ritme te vinden: personeel, gidsroutes en logistiek moeten allemaal nog inslijten. Tegen 2027 heeft alles wat in 2026 opende een volledig seizoen gehad om te rijpen, wat meestal een consistentere ervaring oplevert dan een verblijf in het openingsjaar.",
  },
];

const SEASONS_2027 = [
  {
    name: "Droog seizoen",
    months: "Mei – oktober 2027",
    text: "Het klassieke safarivenster van Namibië. De regen stopt, de vegetatie dunt uit en dieren concentreren zich bij Etosha's permanente waterpoelen, vooral van augustus tot en met oktober, wanneer het droge seizoen zijn greep verstevigt. Juli is doorgaans de droogste maand ooit gemeten, en de nachten in het woestijnbinnenland zakken in juni en juli regelmatig tot 5°C of lager, dus neem een echte donsjas mee. Dit is ook het drukste boekingsseizoen: de nationale parkkampen van Etosha zijn het waard om 6 tot 9 maanden van tevoren te reserveren voor een droge-seizoensreis in 2027, wat betekent dat u medio tot eind 2026 al moet beginnen met plannen.",
  },
  {
    name: "Groen seizoen",
    months: "November 2027 – april 2028",
    text: "Verspreide onweersbuien in november bouwen op naar een piek in januari–maart, wanneer de woestijn bijna van de ene op de andere dag groen kleurt en Palearctische trekvogels zich bij de standvogels voegen voor het beste vogelspotseizoen van het jaar. Wildlife verspreidt zich weg van de waterpoelen omdat water overal voorhanden is, waardoor waarnemingen in Etosha meer rijden vergen. Het is ook de periode waarin het werptseizoen nieuwe impala's en springbokken op de vlaktes brengt, en waarin dramatische wolken- en lichtfotografie tot haar recht komt.",
  },
  {
    name: "Schoudermaanden",
    months: "April–mei & september–oktober 2027",
    text: "De beste prijs-omstandighedenverhouding van de kalender. April–mei 2027 biedt groene, opdrogende landschappen tegen tarieven onder het hoogseizoen; september–oktober 2027 biedt de meest geconcentreerde droge-seizoenswaarnemingen, vlak vóór de prijsreset van januari, met merkbaar minder drukke kampen dan in augustus. De hitte in oktober is echter reëel: woestijnregio's halen tegen het midden van de middag regelmatig 35–38°C, dus plan gamedrives voor de vroege ochtend en late namiddag.",
  },
];

const HONEYMOON_IDEAS = [
  {
    title: "Een sterrenkijk-huwelijksbelofte of ceremonie bij NamibRand",
    text: (
      <>
        NamibRand Nature Reserve heeft sinds 2012 de Gold-tier status van International Dark Sky
        Reserve, een van slechts een handvol Gold-tier reservaten op de planeet, met Sky Quality
        Meter-metingen die regelmatig boven de 21 magnitudes per vierkante boogseconde uitkomen,
        bijna de donkerste hemel die op aarde meetbaar is. Verschillende lodges aan de rand van het
        reservaat organiseren begeleide astronomiesessies met echte telescopen, niet zomaar een
        deken op het zand, en een groeiend aantal stellen plant een privédiner of een informele
        huwelijksbelofte rond een maanloze nacht daar. Kies het tijdstip rond nieuwe maan en lees
        eerst onze volledige{" "}
        <Link
          href="/nl/namibia-stargazing-photography"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          gids voor sterrenkijken en astrofotografie
        </Link>{" "}
        voordat u boekt.
      </>
    ),
  },
  {
    title: "Afzondering tussen de rotsblokken in Damaraland",
    text: (
      <>
        Sla de klassieke duinenansichtkaart voor één nacht over en kies voor iets vreemds en
        moois:{" "}
        <Link
          href="/nl/lodges/doro-nawas-camp"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          Camp Kipwe
        </Link>{" "}
        bouwt zijn iglovormige stenen bungalows rechtstreeks in spleten tussen gestapelde
        granietblokken nabij Twyfelfontein, terwijl{" "}
        <Link
          href="/nl/lodges/damaraland-camp"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          Mowani Mountain Camp
        </Link>{" "}
        zijn verhoogde platformkamers een stukje noordelijker in datzelfde rode
        granietlandschap plaatst. Beide brengen u binnen bereik van begeleide ritten langs
        woestijnaangepaste olifanten overdag en een sundowner op een rotsuitstek in de avond.
        Het is een oprecht andere huwelijksreisachtergrond dan de duinen waar de meeste
        reisroutes standaard voor kiezen, en weinig andere reizigers vinden hun weg hierheen.
        Zie onze{" "}
        <Link
          href="/nl/where-to-stay/damaraland"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          lodgegids voor Damaraland
        </Link>{" "}
        voor de volledige shortlist.
      </>
    ),
  },
  {
    title: "Stel samen uw eigen route samen: een huwelijksreis met zelfrijden",
    text: (
      <>
        De meeste huwelijksreisadviezen sturen aan op een volledig begeleide, volledig geplande
        reis, en daar valt zeker iets voor te zeggen qua comfort. Maar het geasfalteerde en
        gegradeerde C-wegennet van Namibië is voor zelfverzekerde bestuurders oprecht
        toegankelijk, en een zelfrijdende huwelijksreis heeft haar eigen soort romantiek: geen
        vast schema, geen derde partij die beslist wanneer u een zonsondergang verlaat, u
        tweeën alleen in de auto voor lange stukken met niets dan de radio en de weg. Het past
        bij stellen die liever de reis zelf bouwen dan er een volgen. Lees onze{" "}
        <Link
          href="/nl/self-drive-vs-guided-namibia"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          vergelijking tussen zelfrijden en begeleid reizen
        </Link>{" "}
        om te zien of die afweging bij u past.
      </>
    ),
  },
  {
    title: "Een omweg naar de Skeleton Coast vanuit Swakopmund",
    text: (
      <>
        De meeste huwelijksreisroutes stoppen bij de duinen en de kustlijn van Swakopmund en
        keren dan terug. Een omweg noordwaarts naar Cape Cross, per zelfrijdende auto
        bereikbaar vanuit zowel Swakopmund als Damaraland, brengt u bij een van de grootste
        Zuid-Afrikaanse pelszeehondkolonies van het continent, tienduizenden dieren in het
        seizoen, tegen dezelfde mistige, met wrakken bezaaide kustlijn die de Skeleton Coast
        zijn naam gaf. Het is rauw in plaats van mooi, en juist dat contrast met de rest van een
        Namibische huwelijksreis (duinen, rotsblokken, waterpoelen) is precies de pointe: één
        dag die oprecht anders aanvoelt dan de rest van de reis.
      </>
    ),
  },
  {
    title: "Respectvolle, begeleide tijd bij een Himba-gemeenschap",
    text: (
      <>
        Niet elke huwelijksreis hoeft alleen om privacy te draaien. Een begeleid, respectvol
        bezoek aan een Himba-gemeenschap in Kaokoland, geregeld via een gids met een echte,
        langdurige relatie daar, zoals het Kaoko Information Centre in Opuwo, geeft een
        stel een gedeelde ervaring die inhoudelijk is in plaats van decoratief: samen vooraf
        proviand kopen, om toestemming vragen voor elke foto, en de eigen grenzen van de
        gemeenschap volgen in plaats van die van een reisroute. Het wordt meestal geregeld als
        uitbreiding vanuit Damaraland, met minstens een dag extra rijden per richting. Onze{" "}
        <Link
          href="/nl/himba-culture-namibia"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          gids over Himba-cultuur
        </Link>{" "}
        beschrijft hoe u dit op de juiste manier doet.
      </>
    ),
  },
  {
    title: "Kasteelresort-romantiek bij Le Mirage",
    text: (
      <>
        Voor stellen die duinlandschap willen zonder resortcomfort op te geven, is{" "}
        <Link
          href="/nl/lodges/little-kulala"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          Le Mirage Resort &amp; Spa
        </Link>{" "}
        de uitzondering op de Namibische lodgekaart: een kasteelachtig verblijf aan de D826-weg
        bij de Sesriem-poort, met open torenkamers die specifiek gebouwd zijn om onder de open
        hemel te slapen, en een volledig uitgeruste spa op het terrein (de Mystique Spa) in een
        land waar de meeste lodgespa's nog klein zijn. Vraag voor de torenkamer naar de avond met
        de helderste voorspelling van uw verblijf, want de heldere, onvervuilde luchten van het
        Namib-Naukluft-gebied maken het de moeite waard om erop te plannen.
      </>
    ),
  },
  {
    title: "Volg wildlife samen, te voet",
    text: (
      <>
        Een gedeelde, fysieke ervaring blijft een stel doorgaans langer bij dan een gedeeld
        uitzicht. De Palmwag Concession in westelijk Damaraland is een van de weinige plekken
        in Afrika waar u te voet zwarte neushoorns kunt volgen, georganiseerd met lokale
        gemeenschapsreservaten, en het wordt meestal geboekt als een aparte activiteit in plaats
        van een terloopse toevoeging. Het is geen spa-middag, het is een echt avontuur dat u
        samen beleeft, begeleid door iemand die sporen lezen als beroep heeft. Reken op extra
        plantijd: onze{" "}
        <Link href="/nl/luxury-namibia" className="font-semibold text-rust hover:text-rust-dark">
          gids voor luxe Namibië
        </Link>{" "}
        beschrijft hoe fly-in toegang tot dit soort concessies doorgaans werkt.
      </>
    ),
  },
  {
    title: "Een boetiek-Windhoek als afsluiting, niet zomaar een tussenstop",
    text: (
      <>
        De meeste reisroutes behandelen Windhoek als één weggooinacht aan elk uiteinde van de
        reis.{" "}
        <Link
          href="/nl/lodges/the-olive-exclusive"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          The Olive Exclusive
        </Link>
        , een boetiekhotel met zeven suites waarvan elke suite is ingericht rond een andere
        Namibische regio en een eigen privé-plonsbad heeft, is het waard om als een echte
        gelegenheid te behandelen in plaats van dat: een volwaardige eerste of laatste nacht, niet
        alleen een plek om de jetlag af te slapen voordat de eigenlijke reis begint.
      </>
    ),
  },
];

const PLANNING_LINKS = [
  {
    title: "Visumvereisten",
    stat: "US$90",
    text: "De meeste nationaliteiten vragen sinds 1 april 2025 online vooraf aan voor het Visa on Arrival, niet meer op de luchthaven. Controleer de status van uw nationaliteit voordat u vluchten boekt.",
    href: "/nl/namibia-visa-requirements",
    cta: "Bekijk visumvereisten",
  },
  {
    title: "Hoe lang moet u gaan",
    stat: "7–21 dagen",
    text: "De rijafstanden in Namibië bepalen uw route meer dan andersom. Vergelijk de opties van 7, 10, 14 en 21 dagen.",
    href: "/nl/itineraries",
    cta: "Stel uw reisroute samen",
  },
  {
    title: "Wat het kost",
    stat: "€225–700+/dag",
    text: "Van budget-zelfrijden tot volledig begeleide luxe: prijsklassen per persoon per dag voor alle drie de niveaus, en wat het bedrag echt bepaalt.",
    href: "/nl/namibia-trip-cost",
    cta: "Bekijk het volledige kostenoverzicht",
  },
  {
    title: "Zelf rijden of begeleid",
    stat: "Uw keuze",
    text: "Kosten, vrijheid, risico en comfort: de eerlijke afwegingen tussen zelf rijden en een gids boeken, zonder verkooppraatje voor een van beide.",
    href: "/nl/self-drive-vs-guided-namibia",
    cta: "Vergelijk zelfrijden met begeleid reizen",
  },
];

const FAQS = [
  {
    q: "Is er een bijzondere astronomische gebeurtenis in Namibië in 2027?",
    a: "Nee, er is in 2027 geen totale zonsverduistering die Namibië raakt. Er is een gedeeltelijke zonsverduistering zichtbaar vanuit Windhoek op 6 februari 2027 en nog een op 2 augustus 2027, maar de paden van totaliteit/annulariteit van beide vallen elders in Afrika. De volgende totale zonsverduistering in Namibië is op 25 november 2030, wanneer het pad van totaliteit over Namibië, Botswana, Zuid-Afrika, Lesotho en Australië trekt. Als donkere luchten uw prioriteit zijn, maakt de Gold-tier Dark Sky Reserve-status van NamibRand bijna elke heldere, maanloze nacht in 2027 de moeite waard, zonder dat u om een zeldzame gebeurtenis heen hoeft te plannen.",
  },
  {
    q: "Is 2027 daadwerkelijk een beter jaar om te bezoeken dan 2026 of 2028?",
    a: "Er is geen enkele dramatische reden waarom 2027 boven de omliggende jaren uitsteekt, en we vertellen dat liever eerlijk dan er een te verzinnen. Wat 2027 oprecht in het voordeel heeft, is een combinatie van kleinere, reële factoren: de nationale parkkosten die in april 2026 zijn gereset, zijn inmiddels de nieuwe normaal geworden in plaats van een verse schok, de wegomleiding tussen Okaukuejo en Halali in Etosha staat gepland om vóór juli 2027 te worden opgeheven, het online visumsysteem heeft sinds de lancering in april 2025 twee jaar gehad om te rijpen, en de recente erkenning van Namibië door Lonely Planet en Michelin is nog vers genoeg dat de bredere gevolgen voor drukte en prijzen nog niet volledig zijn doorgekomen.",
  },
  {
    q: "Wanneer moet ik een Namibië-reis in 2027 boeken?",
    a: "Voor een reis in het droge seizoen (mei–oktober 2027) begint u 6 tot 9 maanden van tevoren met plannen, zeker als de nationale parkkampen van Etosha deel uitmaken van uw route, want die zitten het eerst vol. Voor het groene seizoen (november 2027–april 2028) kunt u over het algemeen met minder voorlooptijd plannen, al profiteren vluchten en toplodges nog steeds van vroeger boeken.",
  },
  {
    q: "Heb ik een 4x4 nodig voor een Namibië-reis in 2027?",
    a: "Dat hangt af van uw route, niet van het jaar. De klassieke lus Windhoek-Sossusvlei-Swakopmund is prima te doen met een gewone 2x4. De grindwegen (D-wegen) van Damaraland en elke uitbreiding naar Kaokoland zijn waar een 4x4 zich terugbetaalt. Zie onze vergelijking tussen zelfrijden en begeleid reizen en onze reisroutegidsen voor route-specifiek advies.",
  },
  {
    q: "Is Namibië goed voor een huwelijksreis in 2027?",
    a: "Ja, en het is zelfs een bijzonder goed moment: recente internationale erkenning (Lonely Planet's Best in Travel 2026, de Michelin Key van Shipwreck Lodge in 2025) heeft nog niet geleid tot het soort drukte dat een paar jaar later doorgaans volgt, dus de oprechte huwelijksreissterktes van het land, privacy, donkere luchten, dramatische landschappen met heel weinig andere reizigers, zijn nog volledig intact. Zie de originele huwelijksreisideeën hierboven, of onze speciale huwelijksreisgids voor de shortlist van de meest romantische lodges.",
  },
  {
    q: "Wat is er recent veranderd dat de planning van een reis in 2027 beïnvloedt?",
    a: "Drie zaken die het waard zijn om te weten voordat u boekt. Het Namibische Visa on Arrival vereist nu een verplichte online vooraanvraag in plaats van betaling op de luchthaven, van kracht sinds 1 april 2025, met 36 extra in aanmerking komende nationaliteiten toegevoegd in oktober 2025. De toegangsprijzen voor nationale parken stegen op 1 april 2026 met 86%, de eerste verhoging sinds 2021. En een verplichte wegomleiding tussen de Etosha-kampen Okaukuejo en Halali is van kracht sinds 2 juni 2026, met de verwachting dat deze vóór juli 2027 wordt opgeheven, al kunnen bouwplanningen nog verschuiven.",
  },
  {
    q: "Wordt Namibië drukker in 2027 vanwege de recente erkenning?",
    a: "Niet dramatisch, gezien hoe dit soort erkenning doorgaans uitpakt. De vermelding in Lonely Planet's Best in Travel 2026 en de Michelin Key van Shipwreck Lodge in 2025 zijn beide echte signalen dat de internationale aandacht voor Namibië toeneemt, maar die aandacht heeft doorgaans een paar jaar nodig om zich te vertalen naar merkbaar vollere kampen en hogere tarieven. 2027 valt vroeg genoeg in dat venster dat de kernaantrekkingskracht van Namibië, oprechte afgelegenheid en een zeer lage bezoekersdichtheid vergeleken met de andere safarilanden van zuidelijk Afrika, nog overeind zou moeten blijven.",
  },
];

export default function WhyVisit2027PageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Gidsen", url: `${SITE_URL}/nl/guides` },
          {
            name: "Waarom Namibië bezoeken in 2027",
            url: `${SITE_URL}/nl/why-visit-namibia-2027`,
          },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Waarom Namibië bezoeken in 2027
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Laten we dat meteen zeggen: er is geen totale zonsverduistering, geen jubileum dat maar
          eens per eeuw voorkomt, geen enkele dramatische reden waarom 2027 zich onderscheidt van
          elk ander jaar in Namibië. Wat er wél is, is een oprechte opeenstapeling van kleinere,
          reële redenen waarom 2027 specifiek een goed getimed jaar is om eindelijk de reis te
          boeken, van een tariefstructuur die net tot rust is gekomen tot een land waarvan de
          internationale erkenning nog vers genoeg is dat de drukte het nog niet heeft ingehaald.
          Hieronder staat het eerlijke verhaal, een seizoensgebonden planningsoverzicht en een
          bewust origineel gedeelte over huwelijksreizen, want zoveel huwelijksreisadviezen voor
          dit land herhalen dezelfde vier ideeën.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Onze aanbeveling:</span> als u kiest
          tussen 2027 en de reis nog verder vooruitschuiven, kies dan voor 2027. De praktische
          wrijving die Namibië lastiger maakte om rond te plannen (een onduidelijk visumproces,
          een onduidelijke tariefstructuur, een actieve wegomleiding door Etosha) is inmiddels
          opgelost of staat gepland om binnen het jaar opgelost te worden, en de recente erkenning
          van het land heeft zich nog niet vertaald in merkbaar vollere kampen.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Wat er in 2027 écht anders is
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Geen algemene "nu is altijd een goede tijd om te reizen"-redenering: zes specifieke,
            gedateerde zaken die waar zijn over dit specifieke jaar.
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
            Een woord over die eclipsvraag, want mensen vragen ernaar
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            We hebben onderzocht of een oprechte astronomische gebeurtenis het waard maakte om
            deze hele gids rond 2027 te bouwen, aangezien de donkere luchten van Namibië het land
            een natuurlijke astro-toerismebestemming maken. Dat is niet zo: de twee
            zonsverduisteringen die Namibië in 2027 raken (6 februari en 2 augustus) zijn beide
            gedeeltelijk vanaf Namibische bodem, met de paden van annulariteit en totaliteit die
            respectievelijk in West-Afrika en Noord-Afrika/het Arabisch Schiereiland vallen. De
            eigen volgende totale zonsverduistering van Namibië is pas op 25 november 2030. We
            vertellen dat liever gewoon zo dan een haakje te verzinnen dat niet standhoudt. Wat
            2027 wél biedt, zijn dezelfde Gold-tier donkere luchten bij NamibRand Nature Reserve
            die Namibië elk jaar biedt, zonder de vraagpiek die waarschijnlijk zal ontstaan
            naarmate 2030 dichterbij komt.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Namibië in 2027, seizoen voor seizoen
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Het onderliggende klimaat verandert niet van jaar tot jaar, maar weten precies welke
            maanden waar in 2027 vallen, is belangrijk voor uw boekingstermijn. Voor het volledige
            overzicht per maand, zie onze{" "}
            <Link
              href="/nl/best-time-to-visit-namibia"
              className="font-semibold text-rust hover:text-rust-dark"
            >
              gids voor de beste reistijd
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
            Een originele Namibische huwelijksreis
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            De meeste adviezen voor een Namibische huwelijksreis, de onze inbegrepen, leunen op
            dezelfde handvol ideeën: een privédiner bij de duinen, een luchtballonvaart bij
            zonsopgang, een kasteelachtige spa. Die zijn oprecht goed en de moeite waard. Maar als
            u een huwelijksreis in 2027 wilt die aanvoelt als de uwe in plaats van een afvinklijst
            uit elke andere gids, zijn hier acht ideeën die verder gaan, ruwweg geordend van het
            rustigste naar het meest avontuurlijke.
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
            Over het tempo van een huwelijksreis specifiek
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            Een huwelijksreis werkt beter als hij korter is dan een reis voor eerste bezoekers.
            Twee of drie van de bovenstaande ideeën van elk drie tot vier nachten, in plaats van
            de vijf-stops-in-tien-dagen-route die beginnende reizigers vaak samenstellen, is
            genoeg tijd om écht te vertragen, en laat ruimte over om een privédiner of een
            ballonvlucht toe te voegen zonder dat de reis aanvoelt als een afvinklijstje. Zie onze{" "}
            <Link
              href="/nl/namibia-honeymoon"
              className="font-semibold text-rust hover:text-rust-dark"
            >
              Namibië huwelijksreisgids
            </Link>{" "}
            voor de kernshortlist met lodges, of onze{" "}
            <Link
              href="/nl/best-romantic-stays"
              className="font-semibold text-rust hover:text-rust-dark"
            >
              gids met de beste romantische verblijven
            </Link>{" "}
            voor de volledige lijst.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            De praktische kant plannen
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Zodra de timingsbeslissing is genomen, bepalen vier dingen de rest van het plan.
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
            Veelgestelde vragen
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
            href="/nl/namibia-honeymoon"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibië Huwelijksreis
          </Link>
          <Link
            href="/nl/luxury-namibia"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Luxe Namibië
          </Link>
          <Link
            href="/nl/itineraries"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibië Reisroutes
          </Link>
        </Reveal>
      </section>
    </>
  );
}
