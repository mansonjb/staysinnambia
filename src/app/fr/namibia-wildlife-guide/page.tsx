import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Guide de la faune namibienne";
const DESCRIPTION =
  "La liste de la faune namibienne par région : éléphants adaptés au désert, rhinocéros noirs, espèces des points d'eau d'Etosha, et la faune côtière que la plupart des itinéraires manquent.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-wildlife-guide",
    languages: { en: "/namibia-wildlife-guide", de: "/de/namibia-wildlife-guide", nl: "/nl/namibia-wildlife-guide", fr: "/fr/namibia-wildlife-guide" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_NL = [
  { title: "Meilleurs lodges en Namibie", href: "/fr/best-lodges-in-namibia" },
  { title: "Séjourner à Etosha", href: "/fr/where-to-stay/etosha" },
  { title: "Séjourner à Sossusvlei", href: "/fr/where-to-stay/sossusvlei" },
  { title: "Guide de l'autotour en Namibie", href: "/fr/namibia-self-drive-guide" },
  { title: "Meilleure période pour visiter la Namibie", href: "/fr/best-time-to-visit-namibia" },
  { title: "Conditions de visa pour la Namibie", href: "/fr/namibia-visa-requirements" },
  { title: "La Namibie est-elle sûre ? Sécurité et santé", href: "/fr/namibia-safety-and-health" },
  { title: "Combien coûte un voyage en Namibie ?", href: "/fr/namibia-trip-cost" },
  { title: "Guide de la faune namibienne", href: "/fr/namibia-wildlife-guide" },
];

const SIGHTINGS = [
  {
    region: "Etosha",
    href: "/fr/where-to-stay/etosha",
    animals:
      "Lion, éléphant, girafe, zèbre, springbok, impala à face noire, et l'une des meilleures chances d'Afrique d'observer le rhinocéros noir, concentrés autour des points d'eau éclairés la nuit.",
  },
  {
    region: "Damaraland",
    href: "/fr/where-to-stay/damaraland",
    animals:
      "Éléphant adapté au désert et, avec un guide spécialisé au départ de Palmwag, rhinocéros noir traqué à pied : des animaux adaptés à un terrain presque dépourvu d'eau, que l'on ne trouve pratiquement nulle part ailleurs sur Terre.",
  },
  {
    region: "Skeleton Coast",
    href: "/fr/where-to-stay/skeleton-coast",
    animals:
      "Colonies d'otaries à fourrure du Cap, hyène brune, et, au large, le dauphin de Heaviside, une petite espèce de dauphin que l'on ne trouve que le long des côtes namibienne et sud-africaine.",
  },
  {
    region: "Caprivi (Zambezi)",
    href: "/fr/where-to-stay/caprivi",
    animals: (
      <>
        La faune la plus liée à l&apos;eau de Namibie : hippopotame, crocodile, éléphant le long
        des plaines inondables du fleuve, et la meilleure observation d&apos;oiseaux du pays, bien
        différente des espèces des zones arides ailleurs dans le pays. C&apos;est aussi la région
        de Namibie où le risque de paludisme est le plus élevé : consultez notre{" "}
        <Link
          href="/fr/namibia-safety-and-health"
          className="font-medium text-rust hover:text-rust-dark"
        >
          guide sécurité et santé
        </Link>{" "}
        avant de partir.
      </>
    ),
  },
  {
    region: "Sossusvlei",
    href: "/fr/where-to-stay/sossusvlei",
    animals:
      "L'oryx (gemsbok) qui se découpe sur les crêtes des dunes est l'observation emblématique ; on croise aussi le springbok et, plus rarement, la discrète hyène brune.",
  },
];

const FAQS = [
  {
    q: "La Namibie compte-t-elle les Big Five ?",
    a: "Pas partout, et pas dans la version classique incluant le buffle que suggère la plupart du marketing safari. Etosha offre de manière fiable le lion, l'éléphant, le rhinocéros noir et le léopard ; le buffle ne fait pas partie de l'écosystème d'Etosha. Le Caprivi (Zambezi) est la région où l'on a une réelle chance d'observer les cinq, buffle compris.",
  },
  {
    q: "Qu'est-ce qui différencie la faune namibienne de celle du Kenya ou de la Tanzanie ?",
    a: "La faune emblématique de la Namibie est adaptée au désert : des éléphants et des rhinocéros noirs qui survivent avec une fraction de l'eau dont ont besoin leurs cousins de savane, présents au Damaraland et au Kaokoland, et nulle part ailleurs sur le continent. C'est une rencontre avec la faune différente, plus dépouillée, que les troupeaux denses d'Afrique de l'Est.",
  },
  {
    q: "Où est le meilleur endroit pour voir le rhinocéros noir en Namibie ?",
    a: "Etosha offre une chance via l'autotour ou les game drives organisés par les lodges, et la concession de Palmwag au Damaraland permet le tracking du rhinocéros à pied avec un guide, l'un des seuls endroits en Afrique où cela est proposé de manière responsable, en partenariat avec les réserves communautaires.",
  },
  {
    q: "Peut-on observer la faune en autotour, ou faut-il un guide ?",
    a: "Etosha se prête vraiment bien à l'observation de la faune en autotour : les points d'eau sont accessibles avec une voiture de location classique et la faune s'y concentre de façon prévisible. Le tracking des éléphants adaptés au désert et des rhinocéros au Damaraland nécessite un guide spécialisé.",
  },
];

export default function WildlifeGuidePageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Guide de la faune", url: `${SITE_URL}/fr/namibia-wildlife-guide` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          La faune namibienne : ce que vous verrez, et où
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La faune namibienne est dispersée, pas concentrée comme en Afrique de l&apos;Est. La
          région où vous séjournez détermine ce que vous verrez réellement.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {SIGHTINGS.map((s, i) => (
            <Reveal
              key={s.region}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{s.region}</h2>
                <Link
                  href={s.href}
                  className="text-[12px] font-semibold uppercase tracking-[0.1em] text-rust hover:text-rust-dark"
                >
                  Où séjourner : {s.region} →
                </Link>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{s.animals}</p>
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
          <Link
            href="/fr/best-safari-areas"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Meilleures zones de safari
          </Link>
        </Reveal>
      </section>
    </>
  );
}
