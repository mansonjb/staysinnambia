import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Autotour ou safari accompagné";
const DESCRIPTION =
  "Coût, liberté, risque et confort : les compromis honnêtes entre l'autotour en Namibie et la réservation d'un safari accompagné, sans parti pris pour l'un ou l'autre.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/self-drive-vs-guided-namibia",
    languages: {
      en: "/self-drive-vs-guided-namibia",
      de: "/de/self-drive-vs-guided-namibia",
      nl: "/nl/self-drive-vs-guided-namibia", fr: "/fr/self-drive-vs-guided-namibia",
    },
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

const FACTORS = [
  {
    axis: "Coût",
    selfDrive:
      "Nettement moins cher : vous ne payez pas de guide privé ni de véhicule, de loin le poste de dépense le plus important d'un voyage accompagné. Consultez notre analyse complète des coûts pour de vrais chiffres au jour le jour.",
    guided:
      "Plus cher dans l'ensemble, mais inclut souvent les repas, les droits d'entrée des parcs et les activités, qui seraient sinon des coûts séparés en autotour.",
  },
  {
    axis: "Liberté et rythme",
    selfDrive:
      "Contrôle total : rester une heure de plus à un point d'eau, changer d'itinéraire sur un coup de tête, sauter une étape qui ne vous intéresse pas. En contrepartie, c'est vous qui gérez la logistique.",
    guided:
      "Itinéraire fixe, décidé à l'avance : moins flexible, mais aucune logistique à gérer au quotidien.",
  },
  {
    axis: "Observation de la faune",
    selfDrive:
      "Vraiment efficace à Etosha, où les points d'eau concentrent la faune de façon prévisible. Moins performant dans les zones qui demandent des compétences de pistage, comme les éléphants ou rhinocéros adaptés au désert au Damaraland.",
    guided:
      "L'œil exercé d'un guide pour les traces, les sons et le comportement animal augmente nettement les observations, surtout en dehors du cadre plus facile des points d'eau d'Etosha.",
  },
  {
    axis: "Risque et confort",
    selfDrive:
      "Des risques réels à prendre au sérieux : conduite sur pistes en gravier, faune sur la route la nuit, longs tronçons sans essence ni réseau. Consultez notre guide de l'autotour pour le détail.",
    guided:
      "Un risque personnel plus faible (quelqu'un d'autre conduit, navigue et gère les pannes), au prix de devoir suivre le programme d'un tiers.",
  },
  {
    axis: "Profil idéal pour un premier voyage",
    selfDrive:
      "Les conducteurs confiants, à l'aise sur les pistes en gravier et pour s'orienter seuls, qui veulent fixer leur propre rythme et disposent d'un budget plus serré.",
    guided:
      "Les voyageurs qui privilégient les observations de faune et l'absence de logistique plutôt que le coût et la flexibilité, ou toute personne peu à l'aise pour conduire sur des pistes inconnues.",
  },
];

const FAQS = [
  {
    q: "Autotour ou safari accompagné : quel est le meilleur choix pour un premier voyage en Namibie ?",
    a: "Aucun des deux n'est objectivement meilleur : tout dépend de ce que vous privilégiez. L'autotour convient aux conducteurs confiants qui veulent maîtriser le rythme et le coût ; le safari accompagné convient aux voyageurs qui veulent les meilleures observations de faune possibles sans logistique à gérer. Beaucoup de primo-visiteurs optent pour une formule hybride : autotour entre les régions, game drives accompagnés à l'intérieur des parcs.",
  },
  {
    q: "Peut-on combiner autotour et safari accompagné ?",
    a: "Oui, et c'est un compromis courant et judicieux : faites l'autotour pour les transferts entre régions, puis réservez des game drives accompagnés une fois installé dans un lodge, en particulier dans des zones comme le Damaraland où les compétences de pistage améliorent vraiment les observations.",
  },
  {
    q: "Combien coûte un safari accompagné de plus qu'un autotour ?",
    a: "L'écart est important : un guide privé et un véhicule constituent généralement le poste de dépense le plus élevé du budget d'un voyage en Namibie. Consultez notre analyse complète des coûts pour les chiffres exacts, par gamme de prix.",
  },
  {
    q: "Faut-il de l'expérience de conduite tout-terrain pour faire l'autotour en Namibie ?",
    a: "Pas pour l'itinéraire classique : Etosha, Sossusvlei et Swakopmund sont accessibles à quiconque est à l'aise sur les pistes en gravier, sans compétence sérieuse en tout-terrain. Cela devient plus important au Damaraland et au Kaokoland, où un 4x4 et une certaine assurance sur le gravier comptent davantage.",
  },
];

export default function SelfDriveVsGuidedPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Autotour ou accompagné", url: `${SITE_URL}/fr/self-drive-vs-guided-namibia` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Autotour ou safari accompagné en Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          C&apos;est une décision fondamentalement différente de la question{" "}
          <Link
            href="/fr/namibia-without-4x4"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            &quot;ai-je besoin d&apos;un 4x4&quot;
          </Link>
          . Il s&apos;agit de savoir qui conduit, qui décide de l&apos;itinéraire, et ce que vous
          échangez contre quoi.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4">
          {FACTORS.map((row, i) => (
            <Reveal
              key={row.axis}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-[13px] font-bold uppercase tracking-[0.08em] text-rust">
                {row.axis}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-olive">
                    Autotour
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.selfDrive}</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-charcoal/50">
                    Accompagné
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{row.guided}</p>
                </div>
              </div>
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
            href="/fr/namibia-self-drive-guide"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Guide logistique de l&apos;autotour
          </Link>
        </Reveal>
      </section>
    </>
  );
}
