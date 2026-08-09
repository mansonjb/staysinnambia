import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "La Namibie de luxe";
const DESCRIPTION =
  "A quoi ressemble vraiment un voyage de luxe en Namibie : circuits en vol privé, guides personnels et les lodges haut de gamme qui valent le supplément.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/luxury-namibia",
    languages: { en: "/luxury-namibia", de: "/de/luxury-namibia", nl: "/nl/luxury-namibia", fr: "/fr/luxury-namibia" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POINTS = [
  {
    title: "L'avion plutôt que la voiture",
    text: (
      <>
        Les camps en fly-in de la Palmwag Concession et les lodges de la NamibRand Nature Reserve
        se rejoignent souvent en petit avion plutôt que par la route, ce qui réduit à 45 minutes
        de vol un trajet que notre{" "}
        <Link
          href="/fr/namibia-self-drive-guide"
          className="text-rust underline underline-offset-2 hover:text-rust-dark"
        >
          guide de la conduite en autonomie
        </Link>{" "}
        chiffrerait à 6 heures de route.
      </>
    ),
  },
  {
    title: "Des réserves privées, pas seulement des chambres privées",
    text: "Le luxe en Namibie, c'est surtout une question d'accès : un portail privé vers une réserve communautaire, un droit de sortir des pistes balisées, ou des safaris de nuit interdits à l'intérieur des parcs nationaux eux-mêmes.",
  },
  {
    title: "Moins de nuits, mais de meilleure qualité",
    text: "Un itinéraire de luxe est souvent plus court qu'un circuit en autonomie économique : trois ou quatre campements répartis sur 8 à 10 jours, chacun mérite deux nuits complètes plutôt qu'une simple étape de passage.",
  },
];

export default function LuxuryPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guides", url: `${SITE_URL}/fr/guides` },
          { name: "La Namibie de luxe", url: `${SITE_URL}/fr/luxury-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          La Namibie de luxe
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Un voyage de luxe en Namibie ressemble moins à un hôtel cinq étoiles qu'à un accès total
          et privé au paysage. Voici ce qui change réellement quand on met le prix.
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
            href="/fr/best-luxury-lodges"
            className="group inline-flex items-center gap-3 rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Voir les meilleurs lodges de luxe
            <CardArrow className="bg-ivory/20 text-ivory group-hover:bg-ivory group-hover:text-rust" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
