import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibië zonder 4x4";
const DESCRIPTION =
  "Voor het grootste deel van een zelfrijreis door Namibië heeft u geen 4x4 nodig: hier leest u wat prima gaat met een gewone sedan en waar een 4x4 echt van belang is.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-without-4x4",
    languages: { en: "/namibia-without-4x4", de: "/de/namibia-without-4x4", nl: "/nl/namibia-without-4x4" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const CAN_2WD = [
  "Windhoek naar Sossusvlei (Sesriem): asfalt en goed onderhouden grind",
  "Windhoek naar Swakopmund via de B1/B2: volledig geasfalteerd",
  "Swakopmund naar de belangrijkste lodges in Damaraland: onderhouden grindweg, prima in het droge seizoen",
  "Windhoek naar Etosha's zuidelijke en oostelijke poorten: grotendeels geasfalteerd",
];

const NEED_4X4 = [
  "De laatste circa 5 km zacht zand vanaf de 2x4-parkeerplaats bij Sossusvlei tot aan de duinen zelf",
  "Het grootste deel van de Skeleton Coast ten noorden van Torra Bay",
  "Afgelegen pistes in het Kaokoveld, ten noorden van Damaraland",
  "Enkele ruwere conservancy-wegen naar gemeenschapskampeerplaatsen buiten de belangrijkste grindroutes",
];

export default function Without4x4PageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Gidsen", url: `${SITE_URL}/nl/guides` },
          { name: "Namibië zonder 4x4", url: `${SITE_URL}/nl/namibia-without-4x4` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gidsen
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibië zonder 4x4
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Een veelvoorkomend misverstand: het grootste deel van een klassieke Namibië-rondreis is
          te rijden met een gewone sedan of crossover. De belangrijkste grindwegen van het land
          (de &quot;C&quot;- en &quot;D&quot;-wegen, uitgebreider besproken in onze{" "}
          <Link
            href="/nl/namibia-self-drive-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            zelfrijgids
          </Link>
          ) zijn goed onderhouden en begaanbaar. Een 4x4 is echt alleen nodig voor een kleiner
          aantal specifieke trajecten.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-black/5 bg-olive/5 p-6">
            <h2 className="text-lg font-bold text-olive">Prima met een gewone auto</h2>
            <ul className="mt-4 space-y-2.5">
              {CAN_2WD.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                  <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-2xl border border-black/5 bg-rust/5 p-6">
            <h2 className="text-lg font-bold text-rust">Waar een 4x4 echt van belang is</h2>
            <ul className="mt-4 space-y-2.5">
              {NEED_4X4.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            <span className="font-semibold text-charcoal">Een middenweg:</span> bij Sossusvlei
            neemt de eigen shuttleservice van het park het laatste zandtraject voor zijn
            rekening, zodat u met een 2WD op de openbare parkeerplaats kunt parkeren en toch de
            duinen bereikt, zonder voor de hele reis een 4x4 te huren.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <Link
            href="/nl/itineraries"
            className="inline-block rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Bekijk zelfrij-reisroutes
          </Link>
        </Reveal>
      </section>
    </>
  );
}
