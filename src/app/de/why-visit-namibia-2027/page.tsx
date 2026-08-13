import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Warum Namibia 2027 besuchen";
const DESCRIPTION =
  "Eine ehrliche Einschätzung für eine Namibia-Reise 2027: was sich dieses Jahr wirklich ändert, eine Aufschlüsselung der Reisezeit nach Saison und ein ausführlicher, eigenständiger Abschnitt zur Flitterwochenplanung.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/why-visit-namibia-2027",
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

const POPULAR_GUIDES_DE = [
  { title: "Beste Lodges in Namibia", href: "/de/best-lodges-in-namibia" },
  { title: "Unterkünfte in Etosha", href: "/de/where-to-stay/etosha" },
  { title: "Unterkünfte in Sossusvlei", href: "/de/where-to-stay/sossusvlei" },
  { title: "Namibia Self-Drive-Guide", href: "/de/namibia-self-drive-guide" },
  { title: "Beste Reisezeit für Namibia", href: "/de/best-time-to-visit-namibia" },
  { title: "Einreisebestimmungen für Namibia", href: "/de/namibia-visa-requirements" },
  { title: "Ist Namibia sicher? Sicherheit & Gesundheit", href: "/de/namibia-safety-and-health" },
  { title: "Was kostet eine Namibia-Reise?", href: "/de/namibia-trip-cost" },
  { title: "Namibia Tierwelt-Guide", href: "/de/namibia-wildlife-guide" },
];

const REASONS_2027 = [
  {
    title: "Die Preise haben sich bereits neu eingependelt, kein erneuter Sprung in Sicht",
    text: "Die Eintrittsgebühren für Namibias Nationalparks stiegen am 1. April 2026 drastisch, ein Anstieg um 86 Prozent, der erste seit 2021. Das ist genau die Art von Änderung, die Reisende überrascht, die ihre Planung auf einem älteren Guide aufgebaut haben. Eine Reise 2027 wird von Anfang an nach dem neuen Normalzustand kalkuliert: Sie budgetieren mit der aktuellen Gebührenstruktur, nicht mit einer veralteten, und die Erfahrung zeigt, dass ein Sprung dieser Größenordnung erst wieder in einigen Jahren fällig wird.",
  },
  {
    title: "Etoshas große Umleitung dürfte endlich aufgehoben werden",
    text: "Ein Straßenausbauprojekt hat die direkte Route zwischen Okaukuejo und Halali gesperrt, mit einer verpflichtenden Umleitung vom 2. Juni 2026 bis Juli 2027. Wer Anfang 2027 reist, fährt noch über die Umgehung durch die Gemsbokvlakte und den Rhino Drive; wer in der zweiten Jahreshälfte reist, hat eine echte Chance, dass die direkte Route wieder offen ist. So oder so: Prüfen Sie den aktuellen Status vor der Abreise bei NWR, da sich Bauzeitpläne verschieben können, aber 2027 ist das Jahr, in dem dieses konkrete Ärgernis planmäßig enden soll.",
  },
  {
    title: "Die Anerkennung ist frisch, aber der Andrang hat noch nicht nachgezogen",
    text: "Namibia wurde von Lonely Planet als eines der besten Reiseziele im Best in Travel 2026 ausgezeichnet, für seine wüstenangepassten Elefanten und den naturschutzorientierten Tourismus, und Shipwreck Lodge erhielt 2025 einen Michelin Key in der ersten globalen Michelin-Keys-Auswahl des Guides. Beides sind echte, aktuelle Zeichen dafür, dass das Land in eine höhere Stufe internationaler Aufmerksamkeit aufsteigt. Solche Anerkennung braucht normalerweise ein paar Jahre, bis sie sich in volleren Camps und höheren Preisen niederschlägt. 2027 liegt früh in diesem Zeitfenster, nach der Anerkennung, aber noch vor deren umfassenderen Auswirkungen.",
  },
  {
    title: "Das Visasystem hat sich eingespielt",
    text: "Seit dem 1. April 2025 erfordert Namibias Visum bei Ankunft eine verpflichtende Online-Vorabantragstellung statt der Zahlung am Flughafen, und die Liste der berechtigten Nationalitäten wuchs im Oktober 2025 um weitere 36 Länder. Bis 2027 ist dieser Übergang nicht mehr neu: Das Onlinesystem hatte rund zwei Jahre Zeit, seine anfänglichen Reibungspunkte auszubügeln, und die meisten Nationalitäten, die eine Reise planen, wissen bereits, ob sie einen Antrag stellen müssen und was er kostet. Prüfen Sie den Status Ihrer eigenen Nationalität vor der Buchung auf dem offiziellen Portal, da sich die Liste noch ändern kann.",
  },
  {
    title: "Ein ruhigeres Jahr vor dem Ansturm zur Sonnenfinsternis 2030",
    text: "Namibias nächste totale Sonnenfinsternis findet erst am 25. November 2030 statt, wenn der Pfad der Totalität über Namibia, Botswana, Südafrika, Lesotho und Australien ziehen soll. Das liegt noch Jahre in der Zukunft, aber Astrotourismus-Anbieter und Dark-Sky-Lodges planen für solche Ereignisse schon Jahre im Voraus, und der seit 2012 bestehende Gold-Status der NamibRand Nature Reserve als International Dark Sky Reserve macht sie schon jetzt zu einem natürlichen Ausgangspunkt für Reisen rund um die Finsternis, sobald sich 2030 nähert. 2027 bietet Ihnen denselben wirklich dunklen Himmel zu den Preisen und der Verfügbarkeit eines gewöhnlichen Jahres, weit vor jeder finsternisbedingten Nachfrage.",
  },
  {
    title: "Neue Lodges laufen 2027 endlich auf voller Höhe",
    text: "Namibias Tourismusbranche hat 2026 weiter ausgebaut, mit gemeldeten neuen Lodge-Eröffnungen im Norden des Landes, darunter neue Unterkünfte in der Sambesi-Region. Frisch eröffnete Lodges brauchen typischerweise ihr erstes Jahr, um ihren Rhythmus zu finden: Personal, Guiding-Routen und Logistik brauchen alle Zeit, sich einzuspielen. Bis 2027 hat alles, was 2026 eröffnet hat, eine volle Saison hinter sich, was meist einen gleichmäßigeren Aufenthalt bedeutet als im Eröffnungsjahr.",
  },
];

const SEASONS_2027 = [
  {
    name: "Trockenzeit",
    months: "Mai – Oktober 2027",
    text: "Namibias klassisches Safari-Fenster. Der Regen hört auf, die Vegetation lichtet sich, und die Tiere konzentrieren sich an Etoshas permanenten Wasserlöchern, besonders von August bis Oktober, wenn die Trockenzeit ihren Griff verstärkt. Der Juli ist meist der trockenste Monat, und die Nächte im Wüsteninneren fallen im Juni und Juli regelmäßig auf 5°C oder darunter, packen Sie also eine richtige Daunenschicht ein. Dies ist zugleich die Hochsaison für Buchungen: Etoshas Nationalpark-Camps lohnt es sich für eine Trockenzeit-Reise 2027 sechs bis neun Monate im Voraus zu reservieren, das heißt, Mitte bis Ende 2026 mit der Planung zu beginnen.",
  },
  {
    name: "Grüne Saison",
    months: "November 2027 – April 2028",
    text: "Vereinzelte Novembergewitter bauen sich zu einem Höhepunkt zwischen Januar und März auf, wenn die Wüste fast über Nacht grün wird und paläarktische Zugvögel sich zu den Standvögeln gesellen, für die stärkste Vogelbeobachtungszeit des Jahres. Die Tierwelt verteilt sich weg von den Wasserlöchern, da Wasser überall reichlich vorhanden ist, weshalb Sichtungen in Etosha mehr Fahrzeit erfordern. Es ist auch die Zeit, in der die Setzzeit neue Impalas und Springböcke auf die Ebenen bringt, und in der dramatische Wolken- und Lichtfotografie voll zur Geltung kommt.",
  },
  {
    name: "Übergangsmonate",
    months: "April–Mai & September–Oktober 2027",
    text: "Das beste Verhältnis von Preis zu Bedingungen im Kalender. April–Mai 2027 bietet grüne, abtrocknende Landschaften zu Preisen unter der Hochsaison; September–Oktober 2027 bietet Trockenzeit-Tierbeobachtung in ihrer konzentriertesten Form, kurz vor der Preisumstellung im Januar, mit spürbar weniger vollen Camps als im August. Die Oktoberhitze ist allerdings real: Wüstenregionen erreichen am frühen Nachmittag regelmäßig 35 bis 38°C, planen Sie Pirschfahrten also für den frühen Morgen und den späten Nachmittag.",
  },
];

const HONEYMOON_IDEAS = [
  {
    title: "Eine Sternenzeremonie oder Ehegelübde-Erneuerung in NamibRand",
    text: (
      <>
        NamibRand Nature Reserve trägt seit 2012 den Gold-Status als International Dark Sky
        Reserve, eines von nur einer Handvoll Gold-Reservate weltweit, mit
        Sky-Quality-Meter-Messwerten, die regelmäßig 21 Magnituden pro Quadratbogensekunde
        übersteigen, nahe an den dunkelsten auf der Erde messbaren Himmeln. Mehrere Lodges am Rand
        des Reservats bieten geführte Astronomie-Sessions mit echten Teleskopen an, nicht nur eine
        Decke im Sand, und immer mehr Paare legen ein privates Dinner oder eine informelle
        Ehegelübde-Erneuerung auf eine mondlose Nacht dort draußen. Planen Sie es rund um Neumond
        und lesen Sie vorher unseren vollständigen{" "}
        <Link
          href="/de/namibia-stargazing-photography"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          Guide zu Sternenbeobachtung und Astrofotografie
        </Link>
        .
      </>
    ),
  },
  {
    title: "Abgeschiedenheit zwischen Felsblöcken in Damaraland",
    text: (
      <>
        Lassen Sie für eine Nacht die klassische Dünen-Postkarte aus und entscheiden Sie sich
        stattdessen für etwas Fremdartiges und Schönes:{" "}
        <Link href="/de/lodges/doro-nawas-camp" className="font-semibold text-rust hover:text-rust-dark">
          Camp Kipwe
        </Link>{" "}
        baut seine iglu-förmigen Steinbungalows direkt in Spalten zwischen aufgetürmten
        Granitblöcken nahe Twyfelfontein, während{" "}
        <Link href="/de/lodges/damaraland-camp" className="font-semibold text-rust hover:text-rust-dark">
          Mowani Mountain Camp
        </Link>{" "}
        seine erhöhten Plattformzimmer etwas weiter nördlich in dieselbe rote Granitlandschaft
        setzt. Beide bringen Sie tagsüber in Reichweite geführter Fahrten zu wüstenangepassten
        Elefanten und abends zu einem Sundowner auf einem Felsvorsprung. Das ist eine wirklich
        andere Flitterwochen-Kulisse als die Dünen, auf die die meisten Reiserouten standardmäßig
        setzen, und nur wenige andere Reisende finden hierher. Den vollständigen Überblick finden
        Sie in unserem{" "}
        <Link
          href="/de/where-to-stay/damaraland"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          Damaraland-Lodge-Guide
        </Link>
        .
      </>
    ),
  },
  {
    title: "Die eigene Route gestalten: gemeinsame Flitterwochen im Selbstfahrer-Modus",
    text: (
      <>
        Die meisten Flitterwochen-Ratgeber drängen zu einer vollständig geführten, durchgeplanten
        Reise, und dafür gibt es durchaus gute Gründe. Aber Namibias asphaltiertes und ausgebautes
        C-Straßen-Netz ist für sichere Fahrer wirklich zugänglich, und Flitterwochen im
        Selbstfahrer-Modus haben ihre eigene Romantik: kein fester Zeitplan, niemand sonst
        entscheidet, wann Sie einen Sonnenuntergang verlassen, Sie beide allein im Auto über lange
        Strecken, nur mit Radio und Straße. Das passt zu Paaren, die die Reise lieber selbst
        gestalten als einer vorgegebenen zu folgen. Lesen Sie unseren{" "}
        <Link
          href="/de/self-drive-vs-guided-namibia"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          Vergleich Selbstfahrer vs. geführt
        </Link>
        , um zu sehen, ob dieser Kompromiss zu Ihnen passt.
      </>
    ),
  },
  {
    title: "Ein Abstecher an die Skeleton Coast ab Swakopmund",
    text: (
      <>
        Die meisten Flitterwochen-Reiserouten enden bei den Dünen und der Küste von Swakopmund und
        kehren dann um. Ein Abstecher nach Norden zum Cape Cross, mit dem Selbstfahrer sowohl ab
        Swakopmund als auch ab Damaraland erreichbar, bringt Sie zu einer der größten Kolonien von
        Kap-Pelzrobben auf dem Kontinent, in der Saison Zehntausende von Tieren, vor derselben
        nebelverhangenen, wrackübersäten Küste, die der Skeleton Coast ihren Namen gab. Es ist eher
        schroff als hübsch, und genau dieser Kontrast zum Rest einer Namibia-Flitterwoche (Dünen,
        Felsblöcke, Wasserlöcher) ist der Sinn der Sache: ein Tag, der sich wirklich anders anfühlt
        als jeder andere auf der Reise.
      </>
    ),
  },
  {
    title: "Respektvolle, geführte Zeit bei einer Himba-Gemeinschaft",
    text: (
      <>
        Nicht jede Flitterwoche muss sich nur um Privatsphäre drehen. Ein geführter, respektvoller
        Besuch bei einer Himba-Gemeinschaft im Kaokoland, organisiert über einen Guide mit einer
        echten, langjährigen Beziehung vor Ort, etwa das Kaoko Information Centre in Opuwo, gibt
        einem Paar ein gemeinsames Erlebnis, das substanziell statt dekorativ ist: gemeinsam vorab
        Vorräte kaufen, vor jedem Foto um Erlaubnis fragen und sich an die Grenzen der Gemeinschaft
        halten statt an eine Reiseroute. Meist wird das als Erweiterung ab Damaraland organisiert
        und bedeutet mindestens einen zusätzlichen Fahrtag pro Richtung. Unser{" "}
        <Link href="/de/himba-culture-namibia" className="font-semibold text-rust hover:text-rust-dark">
          Guide zur Himba-Kultur
        </Link>{" "}
        erklärt, wie das richtig gemacht wird.
      </>
    ),
  },
  {
    title: "Schloss-Resort-Romantik im Le Mirage",
    text: (
      <>
        Für Paare, die Dünenlandschaft wollen, ohne auf Resort-Komfort zu verzichten, ist{" "}
        <Link href="/de/lodges/little-kulala" className="font-semibold text-rust hover:text-rust-dark">
          Le Mirage Resort &amp; Spa
        </Link>{" "}
        der Ausreißer auf Namibias Lodge-Karte: eine burgähnliche Anlage an der D826-Straße nahe
        dem Sesriem-Tor, mit offenen Turmzimmern, die speziell zum Schlafen unter freiem Himmel
        gebaut sind, und einem Full-Service-Spa vor Ort (dem Mystique Spa) in einem Land, in dem
        die meisten Lodge-Spas noch klein sind. Fragen Sie für das Turmzimmer nach der Nacht Ihres
        Aufenthalts mit der klarsten Wettervorhersage, denn die klaren, unverschmutzten Himmel des
        Namib-Naukluft-Gebiets machen es lohnenswert, danach zu planen.
      </>
    ),
  },
  {
    title: "Gemeinsam zu Fuß auf Tierspuren",
    text: (
      <>
        Ein gemeinsames, körperliches Erlebnis bleibt einem Paar meist länger in Erinnerung als ein
        gemeinsamer Ausblick. Die Palmwag Concession im westlichen Damaraland ist einer der wenigen
        Orte in Afrika, an denen Spitzmaulnashorn-Tracking zu Fuß angeboten wird, betrieben
        zusammen mit lokalen Gemeinschafts-Conservancies, und meist wird es als eigene, gebuchte
        Aktivität behandelt statt als beiläufiges Extra. Das ist kein Spa-Nachmittag, sondern ein
        echtes gemeinsames Abenteuer, geführt von jemandem, der beruflich Spuren liest. Planen Sie
        die zusätzliche Vorlaufzeit ein: unser{" "}
        <Link href="/de/luxury-namibia" className="font-semibold text-rust hover:text-rust-dark">
          Luxus-Namibia-Guide
        </Link>{" "}
        erklärt, wie der Flugzugang zu solchen Concessions meist funktioniert.
      </>
    ),
  },
  {
    title: "Ein Boutique-Rahmen in Windhoek statt nur ein Zwischenstopp",
    text: (
      <>
        Die meisten Reiserouten behandeln Windhoek nur als eine wegzustreichende Nacht an jedem
        Ende der Reise.{" "}
        <Link
          href="/de/lodges/the-olive-exclusive"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          The Olive Exclusive
        </Link>
        , ein Boutique-Hotel mit sieben Suiten, von denen jede einer anderen namibischen Region
        gewidmet ist und einen eigenen privaten Plunge-Pool hat, verdient es, als echter Anlass
        behandelt zu werden statt nur als Ort, um den Jetlag vor der eigentlichen Reise
        abzuschlafen: eine richtige erste oder letzte Nacht.
      </>
    ),
  },
];

const PLANNING_LINKS = [
  {
    title: "Visabestimmungen",
    stat: "US$90",
    text: "Die meisten Nationalitäten beantragen das Visum bei Ankunft seit dem 1. April 2025 vorab online, nicht am Flughafen. Prüfen Sie den Status Ihrer Nationalität, bevor Sie Flüge buchen.",
    href: "/de/namibia-visa-requirements",
    cta: "Visabestimmungen prüfen",
  },
  {
    title: "Wie lange sollten Sie bleiben",
    stat: "7–21 Tage",
    text: "Namibias Fahrtstrecken bestimmen die Reiseroute stärker als umgekehrt. Vergleichen Sie die Optionen mit 7, 10, 14 und 21 Tagen.",
    href: "/de/itineraries",
    cta: "Ihre Reiseroute planen",
  },
  {
    title: "Was es kostet",
    stat: "€225–700+/Tag",
    text: "Vom Budget-Selbstfahrer bis zur vollständig geführten Luxusreise: die Preisspannen pro Person und Tag in allen drei Kategorien, und was die Zahl tatsächlich bestimmt.",
    href: "/de/namibia-trip-cost",
    cta: "Zur vollständigen Kostenaufstellung",
  },
  {
    title: "Selbstfahrer oder geführt",
    stat: "Ihre Entscheidung",
    text: "Kosten, Freiheit, Risiko und Komfort: die ehrlichen Kompromisse zwischen Selbstfahren und einer geführten Reise, ohne Werbung für eines von beiden.",
    href: "/de/self-drive-vs-guided-namibia",
    cta: "Selbstfahrer vs. geführt vergleichen",
  },
];

const FAQS = [
  {
    q: "Gibt es 2027 ein besonderes astronomisches Ereignis in Namibia?",
    a: "Keine totale Sonnenfinsternis berührt Namibia 2027. Am 6. Februar 2027 ist von Windhoek aus eine partielle Sonnenfinsternis zu sehen, eine weitere am 2. August 2027, aber die Pfade der Totalität beziehungsweise Ringförmigkeit beider Ereignisse liegen anderswo in Afrika. Namibias nächste totale Sonnenfinsternis findet erst am 25. November 2030 statt, wenn der Pfad der Totalität über Namibia, Botswana, Südafrika, Lesotho und Australien ziehen soll. Wenn dunkler Himmel für Sie Priorität hat, macht der Gold-Status der NamibRand als Dark Sky Reserve fast jede klare, mondlose Nacht 2027 lohnenswert, ganz ohne ein seltenes Ereignis einzuplanen.",
  },
  {
    q: "Ist 2027 wirklich ein besseres Jahr für eine Reise als 2026 oder 2028?",
    a: "Es gibt keinen einzelnen dramatischen Grund, warum 2027 die Nachbarjahre übertrifft, und wir sagen das lieber ehrlich, statt einen zu erfinden. Was tatsächlich für 2027 spricht, ist eine Kombination kleinerer, echter Faktoren: Die im April 2026 neu festgelegten Nationalpark-Gebühren haben sich inzwischen als neuer Normalzustand eingespielt statt als frischer Schock, Etoshas Straßenumleitung zwischen Okaukuejo und Halali soll planmäßig bis Juli 2027 aufgehoben werden, das Online-Visasystem hatte seit seinem Start im April 2025 zwei Jahre Zeit zu reifen, und Namibias jüngste Anerkennung durch Lonely Planet und Michelin ist noch frisch genug, dass die umfassenderen Auswirkungen auf Andrang und Preise noch nicht vollständig eingetreten sind.",
  },
  {
    q: "Wann sollte ich eine Namibia-Reise für 2027 buchen?",
    a: "Für eine Trockenzeit-Reise (Mai bis Oktober 2027) beginnen Sie die Planung 6 bis 9 Monate im Voraus, besonders wenn Etoshas Nationalpark-Camps Teil Ihrer Route sind, da diese zuerst ausgebucht sind. Für die grüne Saison (November 2027 bis April 2028) können Sie im Allgemeinen mit weniger Vorlaufzeit planen, auch wenn Flüge und Top-Lodges weiterhin von einer früheren Buchung profitieren.",
  },
  {
    q: "Brauche ich für eine Namibia-Reise 2027 einen 4x4?",
    a: "Das hängt von Ihrer Route ab, nicht vom Jahr. Die klassische Runde Windhoek–Sossusvlei–Swakopmund ist mit einem normalen 2x4 gut machbar. Damaralands Schotter-D-Straßen und jede Kaokoland-Erweiterung sind dort, wo sich ein 4x4 auszahlt. Details dazu in unserem Vergleich Selbstfahrer vs. geführt und unseren Reiserouten-Guides.",
  },
  {
    q: "Ist Namibia 2027 gut für Flitterwochen?",
    a: "Ja, und man könnte argumentieren, es ist ein besonders gutes Zeitfenster: Die jüngste internationale Anerkennung (Lonely Planets Best in Travel 2026, Shipwreck Lodges Michelin Key 2025) hat noch nicht zu der Art von Andrang geführt, die einige Jahre später folgt, sodass die echten Flitterwochen-Stärken des Landes, Privatsphäre, dunkler Himmel, dramatische Landschaften mit sehr wenigen anderen Reisenden, noch vollständig intakt sind. Siehe die originellen Flitterwochen-Ideen oben, oder unseren eigenen Flitterwochen-Guide für die Auswahl der romantischsten Lodges.",
  },
  {
    q: "Was hat sich zuletzt geändert, das die Reiseplanung für 2027 betrifft?",
    a: "Drei Dinge, die es vor der Buchung zu wissen lohnt: Namibias Visum bei Ankunft erfordert inzwischen eine verpflichtende Online-Vorabantragstellung statt der Zahlung am Flughafen, in Kraft seit dem 1. April 2025, mit 36 weiteren berechtigten Nationalitäten seit Oktober 2025. Die Eintrittsgebühren für Nationalparks stiegen am 1. April 2026 um 86 Prozent, der erste Anstieg seit 2021. Und eine verpflichtende Straßenumleitung zwischen Etoshas Camps Okaukuejo und Halali ist seit dem 2. Juni 2026 in Kraft, planmäßig aufgehoben bis Juli 2027, auch wenn sich Bauzeitpläne verschieben können.",
  },
  {
    q: "Wird Namibia 2027 wegen seiner jüngsten Anerkennung stärker frequentiert sein?",
    a: "Nicht dramatisch, nach allem, was man über den typischen Verlauf solcher Anerkennung weiß. Die Nennung in Lonely Planets Best in Travel 2026 und Shipwreck Lodges Michelin Key 2025 sind beides echte Signale, dass die internationale Aufmerksamkeit für Namibia wächst, aber diese Aufmerksamkeit braucht meist ein paar Jahre, bis sie sich spürbar in volleren Camps und höheren Preisen niederschlägt. 2027 liegt früh genug in diesem Zeitfenster, dass Namibias Kernstärke, echte Abgeschiedenheit und eine sehr geringe Besucherdichte im Vergleich zu den anderen Safari-Ländern des südlichen Afrikas, weiterhin Bestand haben sollte.",
  },
];

export default function WhyVisit2027PageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Ratgeber", url: `${SITE_URL}/de/guides` },
          { name: "Warum Namibia 2027 besuchen", url: `${SITE_URL}/de/why-visit-namibia-2027` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Warum Namibia 2027 besuchen
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Gleich vorweg: Es gibt keine totale Sonnenfinsternis, kein Jubiläum zu einem runden
          Jahrhundert, keinen einzelnen dramatischen Grund, warum sich 2027 von jedem anderen Jahr
          in Namibia abhebt. Was es gibt, ist eine echte Häufung kleinerer, realer Gründe, warum
          ausgerechnet 2027 ein gut getimtes Jahr ist, um die Reise endlich zu buchen, von einer
          Gebührenstruktur, die sich gerade erst eingependelt hat, bis zu einem Land, dessen
          internationale Anerkennung noch frisch genug ist, dass der Andrang noch nicht
          nachgezogen hat. Im Folgenden: die ehrliche Einschätzung, eine Aufschlüsselung der
          Reisezeit nach Saison, und ein bewusst eigenständiger Abschnitt zur
          Flitterwochenplanung, denn so viele Flitterwochen-Ratgeber für dieses Land wiederholen
          dieselben vier Ideen.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Unsere Empfehlung:</span> Wenn Sie
          zwischen 2027 und einem noch weiter aufgeschobenen Termin wählen, entscheiden Sie sich
          für 2027. Die praktischen Hürden, die die Planung einer Namibia-Reise bisher erschwert
          haben (ein unklarer Visaprozess, eine unklare Gebührenstruktur, eine aktive
          Straßenumleitung durch Etosha), sind entweder bereits gelöst oder sollen im Laufe des
          Jahres gelöst werden, und die jüngste Anerkennung des Landes hat sich noch nicht in
          spürbar volleren Camps niedergeschlagen.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Was sich bei 2027 tatsächlich unterscheidet
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Keine allgemeine „jetzt ist immer eine gute Zeit zu reisen"-Logik: sechs konkrete,
            datierte Tatsachen, die speziell für dieses Jahr gelten.
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
            Ein Wort zur Sonnenfinsternis-Frage, da sie oft gestellt wird
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            Wir haben geprüft, ob ein echtes astronomisches Ereignis diesen ganzen Guide rund um
            2027 rechtfertigt, da Namibias dunkler Himmel das Land ohnehin zu einem natürlichen
            Astrotourismus-Ziel macht. Das tut es nicht: Die beiden Sonnenfinsternisse, die
            Namibia 2027 berühren (6. Februar und 2. August), sind beide von namibischem Boden aus
            nur partiell zu sehen, mit den Pfaden der Ringförmigkeit beziehungsweise Totalität in
            Westafrika beziehungsweise Nordafrika/der arabischen Halbinsel. Namibias eigene
            nächste totale Sonnenfinsternis findet erst am 25. November 2030 statt. Das sagen wir
            lieber klar, statt einen Aufhänger zu konstruieren, der nicht trägt. Was 2027
            tatsächlich bietet, ist derselbe Gold-Status-Himmel der NamibRand Nature Reserve, den
            Namibia jedes Jahr bietet, nur ohne den Nachfrageschub, der sich vermutlich aufbauen
            wird, je näher 2030 rückt.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Namibia 2027, Saison für Saison
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Das zugrunde liegende Klima ändert sich nicht von Jahr zu Jahr, aber zu wissen, welche
            Monate 2027 genau wohin fallen, ist für die Buchungs-Vorlaufzeit wichtig. Die
            vollständige Monat-für-Monat-Aufschlüsselung finden Sie in unserem{" "}
            <Link
              href="/de/best-time-to-visit-namibia"
              className="font-semibold text-rust hover:text-rust-dark"
            >
              Guide zur besten Reisezeit
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
            Eine originelle Namibia-Flitterwoche
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Die meisten Ratgeber zu Flitterwochen in Namibia, unsere eingeschlossen, stützen sich
            auf dieselbe Handvoll Ideen: ein privates Dünendinner, ein Sonnenaufgang im
            Heißluftballon, ein Schloss-Spa. Das sind wirklich gute Ideen, die sich lohnen. Aber
            wenn Sie 2027 Flitterwochen wollen, die sich wie Ihre eigenen anfühlen statt wie eine
            Checkliste aus jedem anderen Guide, hier acht Ideen, die weitergehen, grob geordnet von
            den ruhigsten bis zu den abenteuerlichsten.
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
            Zum Reisetempo speziell für Flitterwochen
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            Flitterwochen funktionieren besser kürzer als eine Erstbesuch-Rundreise. Zwei oder drei
            der obigen Ideen mit je drei bis vier Nächten, statt der Fünf-Stopp-Route über zehn
            Tage, die Erstbesucher oft planen, reicht, um wirklich zur Ruhe zu kommen, und lässt
            noch Raum für ein privates Dinner oder eine Ballonfahrt, ohne dass sich die Reise wie
            eine Checkliste anfühlt. Den Kern der Lodge-Auswahl finden Sie in unserem{" "}
            <Link href="/de/namibia-honeymoon" className="font-semibold text-rust hover:text-rust-dark">
              Namibia-Flitterwochen-Guide
            </Link>
            , oder die vollständige Liste in unserem{" "}
            <Link
              href="/de/best-romantic-stays"
              className="font-semibold text-rust hover:text-rust-dark"
            >
              Guide zu den romantischsten Unterkünften
            </Link>
            .
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Die praktische Seite planen
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Sobald die Entscheidung zum Reisezeitpunkt steht, klären vier Dinge den Rest der
            Planung.
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
            Häufig gestellte Fragen
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
          {POPULAR_GUIDES_DE.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
            >
              {g.title}
            </Link>
          ))}
          <Link
            href="/de/namibia-honeymoon"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibia Flitterwochen
          </Link>
          <Link
            href="/de/luxury-namibia"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Luxus-Namibia
          </Link>
          <Link
            href="/de/itineraries"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibia Reiserouten
          </Link>
        </Reveal>
      </section>
    </>
  );
}
