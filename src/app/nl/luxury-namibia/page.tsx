import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Luxe in Namibië";
const DESCRIPTION =
  "Hoe een luxe reis door Namibië er in de praktijk uitziet: fly-in rondreizen, privégidsen en de topklasse lodges die de extra kosten waard zijn.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/luxury-namibia",
    languages: { en: "/luxury-namibia", de: "/de/luxury-namibia", nl: "/nl/luxury-namibia" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POINTS = [
  {
    title: "Fly-in in plaats van zelf rijden",
    text: (
      <>
        De topklasse lodges (Hoanib Skeleton Coast Camp, Sossusvlei Desert Lodge) worden vaak per
        kleine chartervlucht bereikt in plaats van over de weg, waardoor een rit die onze{" "}
        <Link
          href="/nl/namibia-self-drive-guide"
          className="text-rust underline underline-offset-2 hover:text-rust-dark"
        >
          zelfrijgids
        </Link>{" "}
        op 6 uur zou zetten, wordt teruggebracht tot een vlucht van 45 minuten.
      </>
    ),
  },
  {
    title: "Privéreservaten, niet alleen privékamers",
    text: "Luxe in Namibië betekent meestal toegang: een privépoort tot een conservancy, offroad-trackingrechten, of nachtelijke ritten die binnen de nationale parken zelf niet zijn toegestaan.",
  },
  {
    title: "Minder, maar betere nachten",
    text: "Een luxe reisroute is vaak korter dan een budget-zelfrijreis: drie of vier kampementen verspreid over 8–10 dagen, elk goed voor twee volle nachten in plaats van een korte tussenstop.",
  },
];

export default function LuxuryPageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Gidsen", url: `${SITE_URL}/nl/guides` },
          { name: "Luxe in Namibië", url: `${SITE_URL}/nl/luxury-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gidsen
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Luxe in Namibië
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Een luxe reis door Namibië lijkt minder op een vijfsterrenhotel en meer op volledige,
          privétoegang tot het landschap. Dit verandert er werkelijk als u meer uitgeeft.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <MetaIcon name="compass" className="h-6 w-6 text-rust" />
                <h2 className="mt-4 text-lg font-bold text-charcoal">{p.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            href="/nl/best-luxury-lodges"
            className="group inline-flex items-center gap-3 rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Bekijk de beste luxe lodges
            <CardArrow className="bg-ivory/20 text-ivory group-hover:bg-ivory group-hover:text-rust" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
