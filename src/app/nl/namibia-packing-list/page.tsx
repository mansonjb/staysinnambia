import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibië paklijst";
const DESCRIPTION =
  "Wat Namibiës hitte, stof en enorme temperatuurverschillen tussen dag en nacht werkelijk vereisen: een praktische paklijst voor een selfdrive-reis.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-packing-list",
    languages: {
      en: "/namibia-packing-list",
      de: "/de/namibia-packing-list",
      nl: "/nl/namibia-packing-list",
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

const malariaItem = (
  <>
    Malariaprofylaxe als uw route in het regenseizoen door het noorden voert (Etosha, Caprivi):
    bekijk onze{" "}
    <Link href="/nl/namibia-safety-and-health" className="font-semibold text-rust hover:text-rust-dark">
      veiligheids- en gezondheidsgids
    </Link>
  </>
);

const CATEGORIES = [
  {
    title: "Kleding",
    items: [
      "Kleding in lagen: woestijndagen kunnen oplopen tot 35°C+, terwijl de temperatuur 's nachts onder de 10°C zakt, in de winter (jun–aug) soms bijna tot het vriespunt",
      "Neutraal gekleurde kleding voor game drives (vermijd fel wit of zwart, dat toont stof en houdt warmte vast)",
      "Een goede hoed en zonnebril: de zon is meedogenloos, ook in het groene seizoen",
      "Een warme jas of fleece voor vroege ochtendlijke game drives en woestijnnachten, zelfs in de zomer",
    ],
  },
  {
    title: "Gezondheid & praktisch",
    items: [
      "Zonnebrandcrème met hoge SPF en lippenbalsem: de droge lucht en de hoogte verhogen beide de UV-blootstelling",
      "Een basis EHBO-set en eventuele persoonlijke medicatie, aangezien sommige lodges ver van een apotheek liggen",
      malariaItem,
      "Herbruikbare waterflessen: neem 2 tot 5 liter per persoon mee op afgelegen selfdrive-trajecten",
    ],
  },
  {
    title: "Specifiek voor selfdrive",
    items: [
      "Een fysieke, geprinte of offline gedownloade kaart: bekijk onze connectiviteitsgids voor waarom u niet op bereik kunt rekenen",
      "Een basisgereedschapsset en bandenreparatieset, als uw huurauto die niet al bevat",
      "Contant geld (Namibische dollar of Zuid-Afrikaanse rand) voor tankstations en parktoegang in gebieden waar kaarten niet werken",
      "Stofdichte tassen voor camera-apparatuur en elektronica op dagen met grindwegen",
    ],
  },
  {
    title: "Fotografie",
    items: [
      "Een statief als u van plan bent te sterrenkijken of aan astrofotografie te doen: bekijk onze speciale gids",
      "Reserveaccu's en geheugenkaarten: laadmogelijkheden zijn beperkt in afgelegen kampen",
      "Een lensdoekje en blaasbalgje: op grindwegen dringt stof overal in door",
    ],
  },
];

const FAQS = [
  {
    q: "Hoeveel water moet ik meenemen op een selfdrive-reis door Namibië?",
    a: "Reken op minstens 2 tot 5 liter per persoon voor elk afgelegen traject, meer in de heetste maanden. Dit is niet alleen een kwestie van comfort: tankstations en voorzieningen liggen echt ver uit elkaar, en water meenemen is standaardadvies voor een pechscenario, geen overdrijving.",
  },
  {
    q: "Heb ik warme kleding nodig voor een woestijnland?",
    a: "Ja, en dat verrast veel mensen die voor het eerst gaan. Namibiës woestijngebieden kunnen overdag oplopen tot 35°C+ en 's nachts zakken tot onder de 10°C, en in de winter (juni–augustus) kunnen de nachten op plekken als Sossusvlei bijna tot het vriespunt komen. Kleding in lagen is onmisbaar, geen optie.",
  },
  {
    q: "Welke kleuren moet ik dragen tijdens game drives?",
    a: "Neutrale, gedempte tinten (kaki, olijf, zand) in plaats van fel wit, zwart of zeer donkere kleuren, die snel stof laten zien en op korte afstand opvallender kunnen zijn voor wildlife.",
  },
  {
    q: "Is malariamedicatie nodig op mijn paklijst?",
    a: "Dat hangt af van uw specifieke route en reisdata: het malariarisico in Namibië concentreert zich in het noorden (Etosha, Caprivi) en is het hoogst in het regenseizoen (ruwweg november tot april). Bekijk onze veiligheids- en gezondheidsgids voor de regionale uitsplitsing, en laat dit in elk geval bevestigen door een reisarts in plaats van er zomaar van uit te gaan.",
  },
];

export default function PackingListPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Paklijst", url: `${SITE_URL}/nl/namibia-packing-list` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibië paklijst
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibiës woestijnhitte schommelt overdag tussen de 35°C+ en 's nachts onder de 10°C (in
          de winter soms bijna tot het vriespunt), en het stof van de grindwegen dringt overal in
          door. Dat is wat deze lijst daadwerkelijk bepaalt, geen generieke safari-checklist.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CATEGORIES.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-lg font-bold text-charcoal">{cat.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                    <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                    {item}
                  </li>
                ))}
              </ul>
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
            href="/nl/namibia-connectivity"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Simkaarten, eSIM & connectiviteit
          </Link>
        </Reveal>
      </section>
    </>
  );
}
