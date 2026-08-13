import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { regionsFr } from "@/lib/data.fr";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Guides de voyage Namibie";
const DESCRIPTION = "Tous les guides de Namibia Stays : lodges, itinéraires, saisons et régions.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/fr/guides", languages: { en: "/guides", de: "/de/guides", nl: "/nl/guides", fr: "/fr/guides", it: "/it/guides" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const REGION_GUIDES = regionsFr.map((r) => ({
  title: `Où séjourner à ${r.name}`,
  href: `/fr/where-to-stay/${r.slug}`,
}));

const POPULAR_GUIDES = [
  { title: "Meilleurs lodges de Namibie", href: "/fr/best-lodges-in-namibia" },
  { title: "Où séjourner à Etosha", href: "/fr/where-to-stay/etosha" },
  { title: "Où séjourner à Sossusvlei", href: "/fr/where-to-stay/sossusvlei" },
  { title: "Guide de l'autonomie en Namibie", href: "/fr/namibia-self-drive-guide" },
  { title: "Meilleure période pour visiter la Namibie", href: "/fr/best-time-to-visit-namibia" },
  { title: "Conditions de visa pour la Namibie", href: "/fr/namibia-visa-requirements" },
  { title: "La Namibie est-elle sûre ? Sécurité et santé", href: "/fr/namibia-safety-and-health" },
  { title: "Quel budget pour un voyage en Namibie ?", href: "/fr/namibia-trip-cost" },
  { title: "Guide de la faune namibienne", href: "/fr/namibia-wildlife-guide" },
];

const PRACTICAL_GUIDES = [
  { title: "Autonomie vs. safari guidé", href: "/fr/self-drive-vs-guided-namibia" },
  { title: "Namibie vs. Botswana", href: "/fr/namibia-vs-botswana" },
  { title: "Cartes SIM, eSIM et connectivité", href: "/fr/namibia-connectivity" },
  { title: "Liste de bagages pour la Namibie", href: "/fr/namibia-packing-list" },
  { title: "Prolonger votre voyage", href: "/fr/namibia-trip-extensions" },
  { title: "Visiter les communautés himba", href: "/fr/himba-culture-namibia" },
  { title: "Observation des étoiles et astrophotographie", href: "/fr/namibia-stargazing-photography" },
];

const TRAVEL_STYLE_GUIDES = [
  { title: "La Namibie sans 4x4", href: "/fr/namibia-without-4x4" },
  { title: "Meilleures zones de safari en Namibie", href: "/fr/best-safari-areas" },
  { title: "La Namibie avec des enfants", href: "/fr/namibia-with-kids" },
  { title: "Voyage de noces en Namibie", href: "/fr/namibia-honeymoon" },
  { title: "Namibie de luxe", href: "/fr/luxury-namibia" },
];

const LODGE_STYLE_GUIDES = [
  { title: "Meilleurs lodges de luxe", href: "/fr/best-luxury-lodges" },
  { title: "Meilleurs lodges de safari", href: "/fr/best-safari-lodges" },
  { title: "Meilleurs lodges du désert", href: "/fr/best-desert-lodges" },
  { title: "Meilleurs lodges familiaux", href: "/fr/best-family-lodges" },
  { title: "Séjours les plus romantiques", href: "/fr/best-romantic-stays" },
  { title: "Les lodges les plus reculés de Namibie", href: "/fr/most-remote-lodges" },
  { title: "Glamping en Namibie", href: "/fr/namibia-glamping" },
  { title: "Séjours à la ferme en Namibie", href: "/fr/namibia-farm-stays" },
];

export default function GuidesPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guides", url: `${SITE_URL}/fr/guides` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guides
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Tous les guides Namibia Stays
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Outils de planification, aperçus des régions et outils d'itinéraires, tout au même
          endroit.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Commencez ici</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {POPULAR_GUIDES.map((g, i) => (
            <Reveal key={g.href} delay={i * 40}>
              <Link
                href={g.href}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="font-serif text-xl italic text-charcoal">{g.title}</span>
                <CardArrow />
              </Link>
            </Reveal>
          ))}
          <Reveal delay={200}>
            <Link
              href="/fr/itineraries"
              className="group flex items-center justify-between gap-6 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="font-serif text-xl italic text-charcoal">Itinéraires en Namibie</span>
              <CardArrow />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-bold text-charcoal">Préparer le voyage</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICAL_GUIDES.map((g, i) => (
            <Reveal key={g.href} delay={(i % 3) * 40}>
              <Link
                href={g.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-[14px] font-medium text-charcoal">{g.title}</span>
                <CardArrow />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-bold text-charcoal">Styles de voyage</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRAVEL_STYLE_GUIDES.map((g, i) => (
            <Reveal key={g.href} delay={(i % 3) * 40}>
              <Link
                href={g.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-[14px] font-medium text-charcoal">{g.title}</span>
                <CardArrow />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-bold text-charcoal">Styles de lodges</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LODGE_STYLE_GUIDES.map((g, i) => (
            <Reveal key={g.href} delay={(i % 3) * 40}>
              <Link
                href={g.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-[14px] font-medium text-charcoal">{g.title}</span>
                <CardArrow />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-bold text-charcoal">Où séjourner, par région</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REGION_GUIDES.map((g, i) => (
            <Reveal key={g.href} delay={(i % 3) * 40}>
              <Link
                href={g.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="text-[14px] font-medium text-charcoal">{g.title}</span>
                <CardArrow />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
