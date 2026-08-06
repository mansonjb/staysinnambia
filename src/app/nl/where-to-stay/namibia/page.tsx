import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CardCTA } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { regionsNl } from "@/lib/data.nl";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Verblijven in Namibië";
const DESCRIPTION =
  "Een onafhankelijke, regio-voor-regio gids over waar u kunt verblijven in Namibië: van de waterput-lodges van Etosha tot de duinen van Sossusvlei.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/where-to-stay/namibia",
    languages: { en: "/where-to-stay/namibia", de: "/de/where-to-stay/namibia", nl: "/nl/where-to-stay/namibia" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function WhereToStayHubNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Verblijven", url: `${SITE_URL}/nl/where-to-stay/namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Verblijven
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Waar u kunt verblijven in Namibië, regio voor regio
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibië beloont reizigers die per regio plannen, niet per stad. Kies hieronder waar u
          naartoe gaat voor een eerlijke inschatting van hoeveel nachten het verdient, de beste
          lodges die we konden vinden, en een live kaart van elk boekbaar verblijf in de buurt.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regionsNl.map((region, i) => (
            <Reveal key={region.slug} delay={(i % 3) * 60}>
              <Link
                href={`/nl/where-to-stay/${region.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={region.image}
                    alt={region.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-ivory/90 px-2.5 py-1 text-[11px] font-semibold text-charcoal/70 shadow-sm">
                    <MetaIcon name="clock" className="h-3.5 w-3.5" />
                    {region.recommendedStay}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-serif text-2xl italic text-charcoal">{region.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/60">
                    {region.description}
                  </p>
                  <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
                    {region.driveFromWindhoek} vanaf Windhoek
                  </p>
                  <div className="mt-4 flex justify-end border-t border-charcoal/10 pt-4">
                    <CardCTA label="Bekijk verblijven" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
