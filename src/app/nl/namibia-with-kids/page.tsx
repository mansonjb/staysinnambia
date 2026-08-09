import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { getLodgesByCategoryNl } from "@/lib/data.nl";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibië met kinderen";
const DESCRIPTION =
  "Planningstips voor een familiereis naar Namibië: welke lodges goed werken met kinderen, en wat u vooraf moet weten.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-with-kids",
    languages: { en: "/namibia-with-kids", de: "/de/namibia-with-kids", nl: "/nl/namibia-with-kids", fr: "/fr/namibia-with-kids" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const NOTES = [
  "Minimumleeftijden verschillen per lodge, niet volgens één landelijke regel: Mushara Bush Camp bij Etosha's oostpoort accepteert kinderen van elke leeftijd op begeleide ritten, terwijl veel andere kampen een ondergrens rond 6-8 jaar hanteren (sommige zelfs 12) voor gedeelde gamedrive-voertuigen. Bevestig het exacte leeftijdsbeleid rechtstreeks bij de lodge die u boekt, want dit kan verschillen tussen zusterpanden.",
  "Het malariarisico is reëel maar geconcentreerd, niet overal gelijk. Het is het hele jaar door aanwezig langs de Kunene, Zambezi en Okavango rivieren (dus de Caprivi Strip en het verre noordwesten), en seizoensgebonden, ruwweg november tot juni, in Etosha en Namibië's andere noordelijke regio's. Het klassieke Sossusvlei-Swakopmund-Damaraland-circuit verder naar het zuiden en westen kent nauwelijks tot geen risico. Bevestig de actuele, regiospecifieke richtlijnen bij een reisvaccinatiekliniek voordat u beslist over malariapreventie.",
  "Zelfrij-dagen zijn lang: plan rustpauzes in en houd afzonderlijke rijetappes met jonge kinderen onder de 4-5 uur. De poorten van Etosha liggen ongeveer 4,5 uur van Windhoek en Damaralands grindetappes kunnen elk 3-4 uur duren, dus behandel deze als volledige rijdagen in plaats van ze tussen activiteiten door te proppen.",
  "Bij Etosha's verlichte waterpoelkampen, binnen het park bij Okaukuejo en Halali, of bij de aangrenzende particuliere reservaten (Ongava, Onguma), kunnen kinderen olifant, neushoorn en leeuw na donker zien drinken vanuit de veiligheid van de lodge, zonder dat een gamedrive nodig is.",
  "Begeleide wandelingen en culturele bezoeken (de rotstekeningen van Twyfelfontein, een bezoek aan een Himba-dorp verder naar het noorden) zijn doorgaans geschikt voor een breder leeftijdsbereik dan een hobbelige, urenlange gamedrive. Vraag bij het boeken aan de lodge welke activiteiten realistisch zijn voor de specifieke leeftijd van uw kinderen, niet pas ter plekke.",
];

export default function KidsPageNl() {
  const familyLodges = getLodgesByCategoryNl("family");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Gidsen", url: `${SITE_URL}/nl/guides` },
          { name: "Namibië met kinderen", url: `${SITE_URL}/nl/namibia-with-kids` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gidsen
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibië met kinderen
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibië werkt goed als familie-safaribestemming:{" "}
          <Link
            href="/nl/namibia-self-drive-guide"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            zelf rijden in uw eigen tempo
          </Link>{" "}
          betekent kortere, flexibele rijdagen, en veel lodges beschikken over onderling
          verbonden familiekamers. Een paar praktische zaken, waaronder{" "}
          <Link
            href="/nl/namibia-safety-and-health"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            waar malaria wel en niet een aandachtspunt is
          </Link>
          , zijn goed om te weten voordat u boekt.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <ul className="space-y-3">
            {NOTES.map((n) => (
              <li key={n} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Lodges die goed werken voor gezinnen</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Mushara Lodge ligt dicht bij Etosha&apos;s oostpoort met gezinsvriendelijke suites en
            een zusterpand in de buurt als u meer ruimte nodig heeft. Desert Quiver Camp ligt
            direct bij de Sesriem-poort met self-catering chalets en gratis verblijf voor
            kinderen, een eenvoudige, betaalbare uitvalsbasis voor een familiedag bij de duinen.
            Villa Violet is een kleine, door de eigenaar gerunde guesthouse in Windhoek met een
            self-catering optie, een rustig begin- of eindpunt voor of na de rondreis. Canyon
            Lodge, bij de Fish River Canyon, is rustiek maar comfortabel en een goede uitvalsbasis
            als wandelen of het zuiden deel uitmaakt van uw route.
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {familyLodges.map((lodge, i) => (
            <Reveal key={lodge.slug} delay={i * 60}>
              <Link
                href={`/nl/lodges/${lodge.slug}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div>
                  <p className="font-serif text-xl italic text-charcoal">{lodge.name}</p>
                  <p className="mt-1 text-[13px] text-charcoal/50">{lodge.region}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
