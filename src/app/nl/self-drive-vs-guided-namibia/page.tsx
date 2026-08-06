import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Zelf rijden vs. begeleide safari";
const DESCRIPTION =
  "Kosten, vrijheid, risico en comfort: de eerlijke afwegingen tussen zelf rijden door Namibië en een begeleide safari boeken, geen verkooppraatje voor een van beide.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/self-drive-vs-guided-namibia",
    languages: {
      en: "/self-drive-vs-guided-namibia",
      de: "/de/self-drive-vs-guided-namibia",
      nl: "/nl/self-drive-vs-guided-namibia",
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

const FACTORS = [
  {
    axis: "Kosten",
    selfDrive:
      "Aanzienlijk goedkoper: u betaalt niet voor een privégids en voertuig, veruit de grootste kostenpost van een begeleide reis. Bekijk ons volledige kostenoverzicht voor de echte dagbedragen.",
    guided:
      "Doorgaans hoger, maar vaak inclusief maaltijden, parkkosten en activiteiten die bij een selfdrive-reis anders aparte kosten zouden zijn.",
  },
  {
    axis: "Vrijheid & tempo",
    selfDrive:
      "Volledige controle: een uur langer bij een waterpoel blijven, spontaan van route veranderen, een stop overslaan die u niet interesseert. De keerzijde: u regelt zelf de logistiek.",
    guided:
      "Vaste, vooraf bepaalde reisroute: minder flexibel, maar geen logistiek om dag na dag te beheren.",
  },
  {
    axis: "Wildlife spotten",
    selfDrive:
      "Echt goed in Etosha, waar waterpoelen wildlife voorspelbaar concentreren. Zwakker in gebieden die trackingvaardigheid vereisen, zoals aan de woestijn aangepaste olifanten of neushoorns in Damaraland.",
    guided:
      "Het geoefende oog van een gids voor sporen, geluiden en dierengedrag vergroot de kans op waarnemingen aanzienlijk, vooral buiten Etoshas eenvoudigere waterpoel-observatie.",
  },
  {
    axis: "Risico & comfort",
    selfDrive:
      "Reële risico's die serieus genomen moeten worden: rijden op grindwegen, wildlife op de weg 's nachts, lange trajecten zonder brandstof of telefoonbereik. Bekijk onze self-drive-gids voor de details.",
    guided:
      "Lager persoonlijk risico (iemand anders rijdt, navigeert en handelt pech af), ten koste van het feit dat u aan het schema van een ander vastzit.",
  },
  {
    axis: "Beste optie voor beginners",
    selfDrive:
      "Zelfverzekerde bestuurders die zich prettig voelen op grindwegen en bij zelf navigeren, die hun eigen tempo willen bepalen en met een krapper budget werken.",
    guided:
      "Reizigers voor wie wildlife-waarnemingen en geen logistiek zwaarder wegen dan kosten en flexibiliteit, of iedereen die zich niet zeker voelt op onbekende grindwegen.",
  },
];

const FAQS = [
  {
    q: "Is selfdrive of een begeleide reis beter voor een eerste Namibië-reis?",
    a: "Geen van beide is objectief beter: het hangt af van waar u prioriteit aan geeft. Selfdrive past bij zelfverzekerde bestuurders die zelf tempo en kosten willen bepalen; een begeleide reis past bij reizigers die de best mogelijke wildlife-waarnemingen willen zonder logistiek te hoeven regelen. Veel mensen die voor het eerst gaan kiezen voor een hybride vorm: zelf rijden tussen de regio's, begeleide game drives binnen de parken.",
  },
  {
    q: "Kan ik selfdrive en een begeleide reis combineren?",
    a: "Ja, en dat is een gangbare, verstandige middenweg: zelf rijden voor de transfers tussen de regio's, en vervolgens begeleide game drives boeken zodra u bij een lodge bent, vooral in gebieden zoals Damaraland waar trackingvaardigheid de waarnemingen echt verbetert.",
  },
  {
    q: "Hoeveel duurder is een begeleide safari dan selfdrive?",
    a: "Het verschil is aanzienlijk: een privégids met voertuig is doorgaans de grootste kostenpost in het budget van een Namibië-reis. Bekijk ons volledige kostenoverzicht voor de exacte bedragen per prijsklasse.",
  },
  {
    q: "Heb ik offroad-rijervaring nodig om zelf door Namibië te rijden?",
    a: "Niet voor de klassieke route: Etosha, Sossusvlei en Swakopmund zijn te doen voor iedereen die zich prettig voelt op grindwegen, zonder dat serieuze offroad-vaardigheid nodig is. Het wordt relevanter in Damaraland en Kaokoland, waar een 4x4 en wat zelfvertrouwen op grind meer gewicht in de schaal leggen.",
  },
];

export default function SelfDriveVsGuidedPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Zelf rijden vs. begeleid", url: `${SITE_URL}/nl/self-drive-vs-guided-namibia` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Zelf rijden vs. begeleide safari in Namibië
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Dit is een fundamenteel andere keuze dan de vraag{" "}
          <Link
            href="/nl/namibia-without-4x4"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            &quot;heb ik een 4x4 nodig&quot;
          </Link>
          . Het gaat over wie er rijdt, wie de route bepaalt, en wat u voor wat inruilt.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4">
          {FACTORS.map((row, i) => (
            <Reveal
              key={row.axis}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {row.axis}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-olive">
                    Selfdrive
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.selfDrive}</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-charcoal/50">
                    Begeleid
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.guided}</p>
                </div>
              </div>
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
            href="/nl/namibia-self-drive-guide"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Self-Drive-logistiekgids
          </Link>
        </Reveal>
      </section>
    </>
  );
}
