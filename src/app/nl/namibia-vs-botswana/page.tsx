import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibië vs. Botswana";
const DESCRIPTION =
  "Namibië en Botswana worden in dezelfde reisgidsen genoemd, en niet zonder reden: dit is het eerlijke verschil voor een eerste Afrikaanse safarireis.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-vs-botswana",
    languages: {
      en: "/namibia-vs-botswana",
      de: "/de/namibia-vs-botswana",
      nl: "/nl/namibia-vs-botswana",
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

const COMPARISON = [
  {
    axis: "Selfdrive",
    namibia:
      "Echt toegankelijk: een goed wegennet, duidelijke bewegwijzering en een goed ontwikkelde verhuurmarkt maken Namibië een van de makkelijkste Afrikaanse landen om zelf te doorkruisen.",
    botswana:
      "Veel beperkter: de meeste toplocaties voor wildlife (Okavango Delta, Chobe, Moremi) bestaan uit diep zandterrein voor 4x4's, bereikbaar per chartervlucht of stevig offroad rijden, en veel kampen zijn alleen per vliegtuig te bereiken.",
  },
  {
    axis: "Wilddichtheid",
    namibia:
      "Uitstekend maar meer verspreid: de waterpoelen van Etosha concentreren wildlife goed, maar waarnemingen elders (Damaraland, Kaokoland) zijn wilder en minder gegarandeerd.",
    botswana:
      "Dichter, klassiekere safari-wildlifebeleving: de Delta en Chobe staan bekend om consequent nabije, frequente waarnemingen, met betrouwbare buffel- en roofdieractiviteit.",
  },
  {
    axis: "Landschap",
    namibia:
      "Voor veel mensen die voor het eerst gaan de belangrijkste aantrekkingskracht: torenhoge rode duinen, aan de woestijn aangepaste wildlife, een ruige Atlantische kust, nergens anders op het continent in deze vorm te vinden.",
    botswana:
      "Waterrijk en groen: de kanalen en overstromingsvlaktes van de Okavango Delta vormen het tegenovergestelde landschap van Namibiës woestijnen, met vogels spotten en wildlife bij het water (nijlpaard, olifant, krokodil) als het kenmerkende onderdeel.",
  },
  {
    axis: "Typisch prijsniveau",
    namibia: (
      <>
        Kan echt binnen budget- tot middenklasseniveau (ruwweg €225–250/dag selfdrive, €325/dag
        middenklasse) via guesthouses en een huurauto, naast een echte luxeklasse boven €700/dag.
        Bekijk ons{" "}
        <Link href="/nl/namibia-trip-cost" className="font-semibold text-rust hover:text-rust-dark">
          volledige kostenoverzicht
        </Link>
        .
      </>
    ),
    botswana:
      "Ligt doorgaans hoger: Botswanas high-value, low-volume toerismemodel betekent minder kampen in totaal en minder budgetopties, waarbij fly-in-kampen eerder de norm zijn dan de uitzondering.",
  },
];

const FAQS = [
  {
    q: "Moet ik Namibië of Botswana bezoeken voor mijn eerste Afrikaanse safari?",
    a: "Als u zelf wilt rijden, uw eigen tempo wilt bepalen en landschap en aan de woestijn aangepaste wildlife voorop wilt stellen, is Namibië de eenvoudigere en over het algemeen betaalbaardere eerste reis. Als klassieke, dichte wildlifebeleving de prioriteit is en het budget fly-in-kampen toelaat, biedt Botswana dat betrouwbaarder.",
  },
  {
    q: "Kan ik Namibië en Botswana in één reis bezoeken?",
    a: "Ja, dit is een goed ingeburgerde combinatie, en onze regio Caprivi Strip grenst direct aan Botswanas Chobe National Park, waardoor het een natuurlijke verbinding tussen de twee vormt in plaats van een aparte, alleen per vliegtuig bereikbare omweg. Bekijk onze gids voor reisverlenging voor hoe dit doorgaans werkt.",
  },
  {
    q: "Is Botswana duurder dan Namibië?",
    a: "Over het algemeen wel. Botswanas toerismemodel beperkt bewust het aantal kampen om overvolle gebieden te voorkomen, waardoor de prijzen doorgaans hoog blijven. Er is veel minder een echte budgetklasse dan Namibië biedt via selfdrive en guesthouses.",
  },
  {
    q: "Welk land is beter voor selfdrive?",
    a: "Namibië, zonder twijfel. De beste wildlifegebieden van Botswana zijn grotendeels ontoegankelijk zonder een stevige 4x4 en offroad-ervaring, of een fly-in-kamp. Het land is niet ingericht op het soort onafhankelijke roadtrip waar Namibië bekend om staat.",
  },
];

export default function VsBotswanaPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Namibië vs. Botswana", url: `${SITE_URL}/nl/namibia-vs-botswana` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibië vs. Botswana
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Reisgidsen noemen deze twee voortdurend in één adem, en niet zonder reden: het zijn
          buurlanden met bijna tegengestelde safari-ervaringen. Dit is het eerlijke verschil, geen
          verkooppraatje voor een van beide.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4">
          {COMPARISON.map((row, i) => (
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
                    Namibië
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.namibia}</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-charcoal/50">
                    Botswana
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.botswana}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Niet kiezen, combineren</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            Namibiës Caprivi Strip grenst direct aan Botswanas Chobe National Park, en dat is
            waarom zoveel langere reisroutes dit als één regio behandelen in plaats van twee
            aparte reizen. Als u drie weken of langer heeft, is het toevoegen van een
            Botswana-etappe aan een Namibië-selfdrive eenvoudiger dan het klinkt.
          </p>
          <div className="mt-5 flex items-center gap-2 text-[13px] text-charcoal/60">
            <MetaIcon name="check" className="h-4 w-4 text-olive" />
            Bekijk onze{" "}
            <Link
              href="/nl/namibia-trip-extensions"
              className="ml-1 font-semibold text-rust hover:text-rust-dark"
            >
              gids voor reisverlenging
            </Link>{" "}
            voor hoe dit doorgaans werkt.
          </div>
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
        </Reveal>
      </section>
    </>
  );
}
