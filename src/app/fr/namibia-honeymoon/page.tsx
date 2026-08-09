import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AvailabilityBadge, CardCTA } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { getLodgeFr } from "@/lib/data.fr";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Lune de miel en Namibie";
const DESCRIPTION =
  "Les lodges et campements les plus romantiques pour une lune de miel en Namibie : intimes, paisibles et pensés pour deux.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-honeymoon",
    languages: { en: "/namibia-honeymoon", de: "/de/namibia-honeymoon", nl: "/nl/namibia-honeymoon", fr: "/fr/namibia-honeymoon" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const HONEYMOON_SLUGS = ["little-kulala", "sossusvlei-desert-lodge", "doro-nawas-camp", "the-olive-exclusive"];

export default function HoneymoonPageFr() {
  const lodges = HONEYMOON_SLUGS.map((slug) => getLodgeFr(slug)).filter(Boolean);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guides", url: `${SITE_URL}/fr/guides` },
          { name: "Lune de miel en Namibie", url: `${SITE_URL}/fr/namibia-honeymoon` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Lune de miel en Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          L'espace et le silence de la Namibie en font une destination sincèrement romantique :
          piscines à débordement privées et nuits sous les étoiles sur un lit installé sur le
          toit sont la norme dans des lodges comme Little Kulala, et les autres voyageurs les
          plus proches se trouvent souvent à bonne distance. Voici les quatre lodges vers
          lesquels nous orienterions une lune de miel en priorité ; pour la liste complète,
          consultez notre{" "}
          <Link
            href="/fr/best-romantic-stays"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            guide des meilleurs séjours romantiques
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {lodges.map((lodge, i) => (
            <Reveal key={lodge!.slug} delay={i * 60}>
              <Link
                href={`/fr/lodges/${lodge!.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={lodge!.image}
                    alt={lodge!.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-rust px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ivory shadow-sm">
                    {lodge!.region}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-2xl italic text-charcoal">{lodge!.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/60">
                    {lodge!.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <AvailabilityBadge label="Vérifier la disponibilité" />
                    <CardCTA label="Voir le lodge" />
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
