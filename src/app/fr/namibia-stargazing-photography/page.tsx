import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Guide de l'observation des étoiles en Namibie";
const DESCRIPTION =
  "Où le ciel nocturne namibien est le plus sombre, et ce qui rend ces lieux vraiment différents : la réserve de ciel étoilé Gold de NamibRand, la lumière photographique des dunes, et où dormir sous ce ciel.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-stargazing-photography",
    languages: {
      en: "/namibia-stargazing-photography",
      de: "/de/namibia-stargazing-photography",
      nl: "/nl/namibia-stargazing-photography", fr: "/fr/namibia-stargazing-photography",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_NL = [
  { title: "Meilleurs lodges de Namibie", href: "/fr/best-lodges-in-namibia" },
  { title: "Où loger à Etosha", href: "/fr/where-to-stay/etosha" },
  { title: "Où loger à Sossusvlei", href: "/fr/where-to-stay/sossusvlei" },
  { title: "Guide de la conduite en Namibie", href: "/fr/namibia-self-drive-guide" },
  { title: "Meilleure période pour visiter la Namibie", href: "/fr/best-time-to-visit-namibia" },
  { title: "Conditions de visa pour la Namibie", href: "/fr/namibia-visa-requirements" },
  { title: "La Namibie est-elle sûre ? Sécurité & santé", href: "/fr/namibia-safety-and-health" },
  { title: "Quel est le coût d'un voyage en Namibie ?", href: "/fr/namibia-trip-cost" },
  { title: "Guide de la faune namibienne", href: "/fr/namibia-wildlife-guide" },
];

const SPOTS = [
  {
    place: "NamibRand Nature Reserve",
    href: "/fr/where-to-stay/sossusvlei",
    text: (
      <>
        La destination phare de la Namibie pour l&apos;observation du ciel nocturne, une réserve
        internationale de ciel étoilé classée Gold, l&apos;une des rares au monde à obtenir cette
        distinction. Aucune pollution lumineuse sur une centaine de kilomètres dans la plupart des
        directions. Les lodges en bordure de la réserve proposent des sessions d&apos;astronomie
        guidées avec de véritables télescopes, et pas seulement une couverture posée sur le sable.
        Privilégiez la saison sèche (mai–octobre) pour un ciel au plus clair. Consultez notre{" "}
        <Link href="/fr/best-time-to-visit-namibia" className="font-semibold text-rust hover:text-rust-dark">
          guide de la meilleure période pour partir
        </Link>
        .
      </>
    ),
  },
  {
    place: "Dunes de Sossusvlei",
    href: "/fr/where-to-stay/sossusvlei",
    text: "Le même air désertique limpide qui rend le ciel nocturne exceptionnel offre ici aussi l'une des meilleures photographies de lever de soleil d'Afrique : la fenêtre de 20 à 45 minutes après l'ouverture des grilles est le moment où la couleur des dunes est la plus spectaculaire, avant que la brume de chaleur ne s'installe.",
  },
  {
    place: "Spitzkoppe",
    href: "/fr/where-to-stay/spitzkoppe",
    text: "Ces dômes de granit qui surgissent directement des plaines plates forment un premier plan singulier face à la Voie lactée, et c'est l'un des rares sites de ciel étoilé de l'itinéraire à offrir des silhouettes rocheuses spectaculaires plutôt qu'un horizon plat.",
  },
];

const FAQS = [
  {
    q: "Qu'est-ce qui distingue le ciel nocturne de NamibRand des autres lieux sombres ?",
    a: "NamibRand détient le statut Gold de réserve internationale de ciel étoilé, la classification la plus élevée qui soit, accordée à seulement une poignée de lieux dans le monde. Ce statut reflète à la fois l'absence quasi totale de pollution lumineuse et les mesures actives et continues prises par les exploitants de la réserve et des lodges pour la préserver.",
  },
  {
    q: "Faut-il un équipement particulier pour l'astrophotographie en Namibie ?",
    a: "Un trépied et un appareil photo capable de poses longues manuelles suffisent pour l'essentiel ; un objectif grand angle aide pour les prises de vue de la Voie lactée. Plusieurs lodges proches de NamibRand et de Sossusvlei proposent des sessions d'astronomie guidées avec de vrais télescopes si vous voulez plus qu'un simple plan large du ciel.",
  },
  {
    q: "Quelle est la meilleure période de l'année pour observer les étoiles en Namibie ?",
    a: "La saison sèche (mai–octobre) offre l'air le plus clair, le plus sec et la couverture nuageuse la plus faible. Les conditions qui en font la meilleure saison pour observer la faune en font aussi la meilleure saison pour observer les étoiles. Une nuit sans lune, proche de la nouvelle lune, offre le ciel le plus sombre possible : cela vaut la peine de caler votre voyage en fonction si c'est une priorité.",
  },
  {
    q: "Sossusvlei ou Spitzkoppe : lequel est le meilleur pour la photographie ?",
    a: "Ce sont des sujets différents, pas un choix entre meilleur et moins bon. Sossusvlei, c'est la couleur et l'ampleur des dunes au lever du soleil ; Spitzkoppe, ce sont des silhouettes de granit spectaculaires au coucher du soleil et à la tombée de la nuit. Plusieurs itinéraires combinent les deux avec une nuit d'étape entre les deux sites.",
  },
];

export default function StargazingPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Observation des étoiles & photographie", url: `${SITE_URL}/fr/namibia-stargazing-photography` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Observation des étoiles et astrophotographie en Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          L&apos;air sec de la Namibie et l&apos;absence quasi totale de pollution lumineuse en
          font l&apos;une des rares véritables destinations de ciel étoilé au monde, pas un simple
          argument marketing. Voici où c&apos;est réellement le mieux, et pourquoi.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {SPOTS.map((s, i) => (
            <Reveal
              key={s.place}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{s.place}</h2>
                <Link
                  href={s.href}
                  className="text-[12px] font-semibold uppercase tracking-[0.1em] text-rust hover:text-rust-dark"
                >
                  Où loger →
                </Link>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Questions fréquentes
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
