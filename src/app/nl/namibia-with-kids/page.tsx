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
    languages: { en: "/namibia-with-kids", de: "/de/namibia-with-kids", nl: "/nl/namibia-with-kids" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const NOTES = [
  "Veel safarilodges hanteren een minimumleeftijd (vaak 6–8 jaar) voor gamedrives: controleer dit voor het boeken, niet pas bij aankomst.",
  "Het malariarisico concentreert zich in het noorden (Etosha en de Caprivi-strook) en is het hoogst in het regenseizoen (ruwweg november tot april); in de rest van het land is het risico grotendeels laag, maar bevestig de actuele richtlijnen bij een reisvaccinatiekliniek.",
  "Zelfrij-dagen zijn lang: plan rustpauzes in en houd afzonderlijke rijetappes met jonge kinderen onder de 4–5 uur.",
  "Bij Etosha's verlichte drinkplaats-kampementen kunnen kinderen dieren observeren vanuit de veiligheid van de lodge, zonder dat een gamedrive nodig is.",
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
