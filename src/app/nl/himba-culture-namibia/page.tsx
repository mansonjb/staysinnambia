import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Himba-gemeenschappen bezoeken";
const DESCRIPTION =
  "Wie de Himba zijn, waar ze wonen, en hoe u hen respectvol kunt bezoeken: het werkelijke verschil tussen een geënsceneerde stop bij een 'levend museum' en gemeenschapsgeleid toerisme.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/himba-culture-namibia",
    languages: {
      en: "/himba-culture-namibia",
      de: "/de/himba-culture-namibia",
      nl: "/nl/himba-culture-namibia",
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
  { title: "Zelf rijden door Namibië", href: "/nl/namibia-self-drive-guide" },
  { title: "Beste reistijd voor Namibië", href: "/nl/best-time-to-visit-namibia" },
  { title: "Visumvereisten voor Namibië", href: "/nl/namibia-visa-requirements" },
  { title: "Is Namibië veilig? Veiligheid & gezondheid", href: "/nl/namibia-safety-and-health" },
  { title: "Wat kost een reis naar Namibië?", href: "/nl/namibia-trip-cost" },
  { title: "Gids voor wilde dieren in Namibië", href: "/nl/namibia-wildlife-guide" },
];

const PRINCIPLES = [
  {
    title: "Vraag toestemming voordat u fotografeert",
    text: "Vraag altijd rechtstreeks toestemming aan iemand voordat u hem of haar fotografeert, ook op plekken waar fotograferen in het algemeen is toegestaan. Een knikje van een gids is niet hetzelfde als toestemming van de persoon in beeld.",
  },
  {
    title: "Reken op betaling, en betaal waar mogelijk rechtstreeks",
    text: "Een vergoeding of de aankoop van handwerk is normaal en gepast bij een bezoek: dit is iemands huis en tijd, geen gratis fotomoment. Vraag uw gids hoe de betaling rechtstreeks bij de gemeenschap terechtkomt, in plaats van ervan uit te gaan dat een lodgevergoeding dit al dekt.",
  },
  {
    title: "Ken het verschil tussen een 'levend museum' en een echt dorp",
    text: "Sommige stops zijn geënsceneerde demonstraties die speciaal voor het toerisme zijn opgezet, los van de plek waar mensen daadwerkelijk dagelijks leven. Geen van beide is op zichzelf verkeerd, maar u moet weten welke van de twee u bezoekt en wat dat betekent voor hoe authentiek de ontmoeting is.",
  },
  {
    title: "Volg de grenzen die de gemeenschap zelf stelt aan wat wordt gedeeld",
    text: "Heilige vuren, bepaalde rituelen en specifieke delen van een woonerf zijn mogelijk niet bedoeld voor bezoekers, ongeacht wat elders wordt aangeboden. Een respectvol bezoek volgt de grenzen van de gemeenschap, niet die van het reisschema.",
  },
];

const FAQS = [
  {
    q: "Wie zijn de Himba?",
    a: "De Himba zijn een semi-nomadisch herdersvolk dat voornamelijk in Kaokoland leeft, in het noordelijke Kunene-gebied van Namibië, bekend om veeteelt en een onderscheidende visuele identiteit: met name de otjize-pasta (een mengsel van boterachtig vet en oker) die veel vrouwen op huid en haar aanbrengen. Ze zijn een van de kleinere etnische groepen van Namibië en behoren tot de meest gefotografeerde van het land, wat op zichzelf al een reële ethische spanning oplevert waar u zich vóór uw bezoek bewust van moet zijn.",
  },
  {
    q: "Is het oké om als toerist een Himba-dorp te bezoeken?",
    a: "Dat kan, mits het respectvol gebeurt en via de juiste weg: een gids met een echte band met de gemeenschap, geïnformeerde toestemming voor elke foto, en een eerlijke betaling die bij de mensen terechtkomt die u bezoekt, niet alleen bij een tussenpersoon. Het loont om eerlijk tegen uzelf te zijn over de vraag of een bepaalde stop een oprechte culturele uitwisseling is of een geënsceneerd fotomoment, en daarnaar te kiezen.",
  },
  {
    q: "Wat is het verschil tussen een 'levend museum' en een bezoek aan een echt Himba-woonerf?",
    a: "Een levend museum is een demonstratie die speciaal is opgezet om bezoekers het traditionele leven van de Himba te tonen, vaak los van de plek waar diezelfde gemeenschap daadwerkelijk dagelijks leeft. Het kan nog steeds een legitieme, door de gemeenschap gerunde inkomstenbron zijn, maar het is een andere ervaring dan een organisch bezoek aan een actief woonerf, en aanbieders moeten vooraf duidelijk maken welke van de twee u boekt.",
  },
  {
    q: "Waar in Namibië kan ik Himba-gemeenschappen bezoeken?",
    a: "Vooral in en rond Kaokoland en de bredere Kunene-regio, in het noordwesten van Namibië, bereikbaar als uitbreiding vanuit Damaraland voor reizigers met extra dagen en, meestal, een 4x4. Het is een echte omweg, geen stop op het klassieke reisparcours, dus het vraagt om bewuste planning in plaats van er even tussendoor te worden gepropt.",
  },
];

export default function HimbaCulturePageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Himba-cultuur", url: `${SITE_URL}/nl/himba-culture-namibia` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Himba-gemeenschappen bezoeken in Namibië
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Dit is een van de werkelijk gevoeligere onderdelen van het plannen van een reis naar
          Namibië, en we bespreken het liever direct dan het weg te laten. Hier leest u wie de
          Himba zijn, en hoe u hen (als u besluit te gaan) met echt respect kunt bezoeken.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <MetaIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-olive" />
                <div>
                  <h2 className="text-[14px] font-bold text-charcoal">{p.title}</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            Niets hiervan is een reden om Kaokoland of de Kunene-regio te vermijden: het is een
            reden om te kiezen voor exploitanten en gidsen met echte, blijvende relaties met
            specifieke gemeenschappen, in plaats van een generieke stop die aan een reisschema is
            toegevoegd. De meeste bezoeken worden georganiseerd als uitbreiding op{" "}
            <Link
              href="/nl/where-to-stay/damaraland"
              className="font-semibold text-rust hover:text-rust-dark"
            >
              verblijven in Damaraland
            </Link>
            , dus vraag uw gids rechtstreeks hoe de betaling bij de gemeenschap terechtkomt en wat
            het bezoek daadwerkelijk inhoudt voordat u boekt.
          </p>
        </Reveal>
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
            href="/nl/where-to-stay/damaraland"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Verblijven in Damaraland
          </Link>
        </Reveal>
      </section>
    </>
  );
}
