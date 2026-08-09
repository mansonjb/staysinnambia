import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Conditions de visa pour la Namibie";
const DESCRIPTION =
  "Ce qui a changé en avril 2025 : le nouveau système en ligne de visa à l'arrivée en Namibie, qui en a encore besoin, les frais de 90 $ et les documents à prévoir.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-visa-requirements",
    languages: {
      en: "/namibia-visa-requirements",
      de: "/de/namibia-visa-requirements",
      nl: "/nl/namibia-visa-requirements", fr: "/fr/namibia-visa-requirements",
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

const FAQS = [
  {
    q: "Ai-je besoin d'un visa pour la Namibie ?",
    a: "Cela dépend de votre nationalité. Les pays voisins de la région SADC et un certain nombre d'autres pays restent exemptés de visa pour les séjours courts. La plupart des autres nationalités (dont la majorité des pays de l'UE, le Royaume-Uni et les États-Unis) sont éligibles à un visa à l'arrivée, mais depuis avril 2025, ce visa doit être demandé en ligne à l'avance et n'est plus délivré sur place à l'aéroport.",
  },
  {
    q: "Qu'est-ce qui a changé le 1er avril 2025 ?",
    a: "La Namibie a transformé son système de visa à l'arrivée en une demande en ligne obligatoire avant le départ. Les voyageurs éligibles au visa à l'arrivée ne peuvent plus simplement faire la queue à l'immigration et payer en liquide : la demande, le paiement et l'approbation se font désormais avant le départ, un peu comme une eTA.",
  },
  {
    q: "Combien coûte le visa à l'arrivée en Namibie ?",
    a: "Les frais du visa à l'arrivée s'élèvent à 90 dollars américains, à payer en ligne au moment de la demande. Le visa est valable 3 mois à compter de sa date de délivrance et permet un séjour unique de 30 jours maximum.",
  },
  {
    q: "Quels documents faut-il pour faire la demande ?",
    a: "Un passeport valide au moins 6 mois après vos dates de voyage, avec au moins 3 pages vierges, une lettre d'invitation ou une confirmation d'hébergement, ainsi qu'une preuve de moyens financiers suffisants et d'une assurance voyage ou médicale pour la durée du séjour. Les exigences peuvent évoluer : vérifiez la liste actuelle auprès des canaux officiels de l'immigration namibienne avant de faire votre demande.",
  },
  {
    q: "Combien de temps à l'avance faut-il faire la demande ?",
    a: "Faites votre demande dès que vos dates de voyage sont confirmées. Ce système en ligne étant récent, les délais de traitement ont été inégaux au début de son déploiement : prévoyez plusieurs semaines de marge plutôt que de faire la demande la semaine précédant le départ.",
  },
];

export default function VisaPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Conditions de visa", url: `${SITE_URL}/fr/namibia-visa-requirements` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide · Mis à jour pour 2026
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Conditions de visa pour la Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Depuis le 1er avril 2025, le visa à l&apos;arrivée en Namibie n&apos;est plus délivré à
          la frontière : il faut le demander et le payer en ligne avant de prendre l&apos;avion.
          Beaucoup de guides plus anciens décrivent encore l&apos;ancien système. Voici ce qui
          s&apos;applique désormais, et comment les frais de 90 $ s&apos;intègrent dans le reste de
          votre{" "}
          <Link href="/fr/namibia-trip-cost" className="font-medium text-rust hover:text-rust-dark">
            budget de voyage
          </Link>
          .
        </p>
        <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Cette page résume des changements de politique rendus publics et ne constitue pas un
          conseil en immigration. Vérifiez les exigences actuelles pour votre nationalité auprès de
          l&apos;autorité officielle de l&apos;immigration namibienne avant de réserver.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: "Frais du visa à l'arrivée", value: "90 $ US" },
            { label: "Validité depuis délivrance", value: "3 mois" },
            { label: "Séjour maximum", value: "30 jours" },
          ].map((stat) => (
            <Reveal
              key={stat.label}
              className="rounded-2xl border border-black/5 bg-white p-7 text-center shadow-sm"
            >
              <p className="font-serif text-4xl italic text-rust">{stat.value}</p>
              <p className="mt-2 text-[13px] uppercase tracking-[0.1em] text-charcoal/50">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Ce qu'il faut pour la demande</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Passeport valide au moins 6 mois après vos dates de voyage, avec au moins 3 pages vierges",
              "Lettre d'invitation ou réservation d'hébergement confirmée",
              "Preuve de moyens financiers suffisants pour la durée du séjour",
              "Preuve d'assurance voyage ou médicale",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
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
        </Reveal>
      </section>
    </>
  );
}
