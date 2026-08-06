import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Is Namibië veilig? Veiligheid & gezondheid";
const DESCRIPTION =
  "Een eerlijke blik op Namibiës reële risico's: kleine criminaliteit, verkeersveiligheid, en waar malaria daadwerkelijk een aandachtspunt is, tegenover de delen van het land waar dat niet zo is.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-safety-and-health",
    languages: {
      en: "/namibia-safety-and-health",
      de: "/de/namibia-safety-and-health",
      nl: "/nl/namibia-safety-and-health",
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

const SAFETY_POINTS = [
  {
    title: "Kleine criminaliteit",
    text: "Concentreert zich in stedelijke gebieden (vooral Windhoek en Swakopmund) en volgt de normale stadsregels: geen waardevolle spullen zichtbaar laten liggen, gebruik de kluis van het hotel, neem 's avonds een taxi in plaats van te lopen. Buiten de steden, op lodge- en selfdrive-routes, speelt het geen rol.",
  },
  {
    title: "Verkeersveiligheid",
    text: (
      <>
        Het grotere reële risico voor de meeste bezoekers. Lange afstanden, grindwegen en wildlife
        dat bij schemer en 's nachts de weg oversteekt, maken verkeersongevallen het meest
        voorkomende ernstige incident voor reizigers, niet criminaliteit. Bekijk onze{" "}
        <Link
          href="/nl/namibia-self-drive-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          self-drive-gids
        </Link>{" "}
        voor de details.
      </>
    ),
  },
  {
    title: "Alleen reizen en alleenreizende vrouwen",
    text: "Door solo reizigers, waaronder alleenreizende vrouwen, veelvuldig als prettig beschreven, vooral op georganiseerde routes en bij lodges. In stedelijke gebieden gelden na het invallen van de duisternis de gebruikelijke voorzorgsmaatregelen, zoals overal.",
  },
  {
    title: "Ontmoetingen met wildlife",
    text: (
      <>
        Reëel, maar goed te beheersen met instructies van gidsen: blijf in wildgebieden in het
        voertuig tenzij anders aangegeven, nader nooit dieren bij waterpoelen dichtbij lodges, en
        volg de aanwijzingen van het kamppersoneel over lopen na het invallen van de duisternis op
        plekken waar bekend is dat olifanten of hyena's passeren. Bekijk onze{" "}
        <Link
          href="/nl/namibia-wildlife-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          wildlifegids
        </Link>{" "}
        voor wat u regio per regio kunt verwachten.
      </>
    ),
  },
];

const FAQS = [
  {
    q: "Is Namibië veilig om te bezoeken?",
    a: "Ja, naar regionale maatstaven geldt Namibië als een van de veiligere landen in zuidelijk Afrika voor toeristen. De reële risico's zijn verkeersveiligheid (lange afstanden, grind, wildlife op de weg 's nachts) en gewone stedelijke kleine criminaliteit, niet gewelddadige criminaliteit gericht op reizigers.",
  },
  {
    q: "Heb ik malariatabletten nodig voor Namibië?",
    a: "Dat hangt af van waar u naartoe gaat en wanneer. Het malariarisico in Namibië concentreert zich in het noorden (de noordelijke gebieden van Etosha, de Zambezi-regio (Caprivi)) en is het hoogst in het regenseizoen (ruwweg november tot april). Centraal- en Zuid-Namibië, waaronder Sossusvlei, Swakopmund en Windhoek, hebben het hele jaar door een laag of geen risico. Bespreek uw specifieke reisroute en reisdata met een reisarts. Dit is algemene informatie, geen medisch advies.",
  },
  {
    q: "Is Namibië veilig voor alleenreizende vrouwen?",
    a: "Wordt vaak als prettig beschreven, vooral bij lodge-gebaseerde of georganiseerde selfdrive-reizen. In Windhoek en Swakopmund gelden na het invallen van de duisternis de gebruikelijke stedelijke voorzorgsmaatregelen, net als in elke stad.",
  },
  {
    q: "Welke vaccinaties heb ik nodig voor Namibië?",
    a: "Er is geen universele lijst: de vereisten hangen af van uw thuisland, reisroute en persoonlijke medische voorgeschiedenis. Een gelekoortsverklaring kan vereist zijn als u aankomt vanuit een land met overdrachtsrisico. Informeer ruim voor vertrek bij een reisgeneeskundige kliniek.",
  },
];

export default function SafetyHealthPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Veiligheid & gezondheid", url: `${SITE_URL}/nl/namibia-safety-and-health` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Is Namibië veilig? Veiligheid & gezondheid
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibië behoort tot de veiligere landen om in zuidelijk Afrika te reizen, maar
          &quot;veilig&quot; is niet hetzelfde als &quot;risicovrij.&quot; Hier leest u waar de
          reële risico&apos;s daadwerkelijk liggen.
        </p>
        <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Uitsluitend algemene informatie, geen medisch of veiligheidsadvies. Raadpleeg voor
          vertrek een reisgeneeskundige en het reisadvies van uw overheid.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SAFETY_POINTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-lg font-bold text-charcoal">{p.title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Malaria: de realiteit per regio</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Hoger risico: noordelijk Etosha, de Zambezi-regio (Caprivi), vooral in het regenseizoen (nov–apr)",
              "Laag/geen risico: Windhoek, Swakopmund, Sossusvlei, Fish River Canyon, het grootste deel van Centraal- en Zuid-Namibië",
              "De behoefte aan profylaxe hangt af van uw reisroute en reisdata: dit moet een reisarts bevestigen, geen algemene gids",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
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
