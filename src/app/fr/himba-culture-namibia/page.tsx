import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Visiter les communautés himbas";
const DESCRIPTION =
  "Qui sont les Himbas, où ils vivent, et comment leur rendre visite avec respect : la vraie différence entre une halte mise en scène dans un « musée vivant » et un tourisme géré par la communauté.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/himba-culture-namibia",
    languages: {
      en: "/himba-culture-namibia",
      de: "/de/himba-culture-namibia",
      nl: "/nl/himba-culture-namibia", fr: "/fr/himba-culture-namibia",
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
  { title: "Où séjourner à Etosha", href: "/fr/where-to-stay/etosha" },
  { title: "Où séjourner à Sossusvlei", href: "/fr/where-to-stay/sossusvlei" },
  { title: "Autotour en Namibie", href: "/fr/namibia-self-drive-guide" },
  { title: "Meilleure période pour visiter la Namibie", href: "/fr/best-time-to-visit-namibia" },
  { title: "Conditions de visa pour la Namibie", href: "/fr/namibia-visa-requirements" },
  { title: "La Namibie est-elle sûre ? Sécurité & santé", href: "/fr/namibia-safety-and-health" },
  { title: "Combien coûte un voyage en Namibie ?", href: "/fr/namibia-trip-cost" },
  { title: "Guide de la faune namibienne", href: "/fr/namibia-wildlife-guide" },
];

const PRINCIPLES = [
  {
    title: "Demandez la permission avant de photographier",
    text: "Demandez toujours directement la permission à une personne avant de la photographier, même dans un lieu où la photographie est globalement autorisée. Un signe de tête du guide n'équivaut pas au consentement de la personne cadrée.",
  },
  {
    title: "Prévoyez de payer, et payez directement quand c'est possible",
    text: "Verser une contribution ou acheter de l'artisanat est normal et approprié lors d'une visite : c'est le foyer et le temps de quelqu'un, pas une séance photo gratuite. Demandez à votre guide comment le paiement parvient directement à la communauté, plutôt que de supposer qu'un forfait de lodge le couvre déjà.",
  },
  {
    title: "Sachez faire la différence entre un « musée vivant » et un vrai village",
    text: "Certaines haltes sont des démonstrations mises en scène spécialement pour le tourisme, distinctes du lieu où les gens vivent réellement au quotidien. Aucune des deux n'est mauvaise en soi, mais vous devez savoir laquelle vous visitez et ce que cela signifie pour l'authenticité de la rencontre.",
  },
  {
    title: "Respectez les limites que la communauté fixe elle-même à ce qui est partagé",
    text: "Les feux sacrés, certains rituels et certaines zones précises d'un campement ne sont pas forcément destinés aux visiteurs, quoi qu'on propose ailleurs. Une visite respectueuse suit les limites fixées par la communauté, pas celles de l'itinéraire.",
  },
];

const FAQS = [
  {
    q: "Qui sont les Himbas ?",
    a: "Les Himbas sont un peuple pastoral semi-nomade vivant principalement au Kaokoland, dans la région du Kunene au nord de la Namibie, connus pour l'élevage bovin et une identité visuelle distinctive : notamment la pâte d'otjize (un mélange de matière grasse et d'ocre) que de nombreuses femmes appliquent sur la peau et les cheveux. C'est l'un des plus petits groupes ethniques de Namibie, et l'un des plus photographiés du pays, ce qui crée en soi une réelle tension éthique à connaître avant de visiter.",
  },
  {
    q: "Est-il correct de visiter un village himba en tant que touriste ?",
    a: "Cela peut l'être, si c'est fait avec respect et par le bon canal : un guide ayant une relation authentique avec la communauté, un consentement éclairé pour chaque photo, et un paiement juste qui parvient réellement aux personnes visitées, pas seulement à un intermédiaire. Il vaut la peine d'être honnête avec soi-même sur le fait qu'une halte donnée relève d'un véritable échange culturel ou d'une séance photo mise en scène, et de choisir en conséquence.",
  },
  {
    q: "Quelle est la différence entre un « musée vivant » et la visite d'un vrai campement himba ?",
    a: "Un musée vivant est une démonstration organisée spécifiquement pour montrer aux visiteurs la vie traditionnelle himba, souvent distincte du lieu où cette même communauté vit réellement au quotidien. Cela peut rester une source de revenus légitime, gérée par la communauté, mais c'est une expérience différente d'une visite spontanée d'un campement en activité, et les prestataires doivent préciser en amont laquelle des deux vous réservez.",
  },
  {
    q: "Où en Namibie peut-on visiter des communautés himbas ?",
    a: "Principalement dans et autour du Kaokoland et de la région du Kunene au sens large, au nord-ouest de la Namibie, accessible en extension depuis le Damaraland pour les voyageurs disposant de jours supplémentaires et, le plus souvent, d'un 4x4. C'est un vrai détour, pas une étape du circuit classique, qui demande donc une planification délibérée plutôt qu'un ajout de dernière minute.",
  },
];

export default function HimbaCulturePageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Culture himba", url: `${SITE_URL}/fr/himba-culture-namibia` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Visiter les communautés himbas en Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          C'est l'un des aspects les plus sensibles de la préparation d'un voyage en Namibie, et
          nous préférons l'aborder franchement plutôt que de l'éluder. Voici qui sont les Himbas,
          et comment leur rendre visite (si vous décidez d'y aller) avec un respect sincère.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <MetaIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-olive" />
                <div>
                  <h2 className="text-[14px] font-bold text-charcoal">{p.title}</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            Rien de tout cela n'est une raison d'éviter le Kaokoland ou la région du Kunene : c'est
            une raison de privilégier des opérateurs et des guides ayant des relations réelles et
            durables avec des communautés précises, plutôt qu'une halte générique ajoutée à un
            itinéraire. La plupart des visites s'organisent en extension d'un{" "}
            <Link
              href="/fr/where-to-stay/damaraland"
              className="font-semibold text-rust hover:text-rust-dark"
            >
              séjour au Damaraland
            </Link>
            , alors demandez directement à votre guide comment le paiement parvient à la
            communauté et ce que la visite implique réellement avant de réserver.
          </p>
        </Reveal>
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
            href="/fr/where-to-stay/damaraland"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Où séjourner au Damaraland
          </Link>
        </Reveal>
      </section>
    </>
  );
}
