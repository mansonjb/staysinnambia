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
        it: "/it/namibia-visa-requirements",
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
    a: "Cela dépend de votre nationalité. La Namibie exempte totalement de visa environ 55 pays pour les séjours touristiques courts, y compris ses voisins immédiats de la SADC que sont l'Afrique du Sud, le Botswana, la Zambie et le Zimbabwe, ainsi que 18 pays supplémentaires dans le cadre d'accords réciproques de dispense de visa. La plupart des autres nationalités, dont la majorité des pays de l'UE, le Royaume-Uni et les États-Unis, sont éligibles à un visa à l'arrivée (VoA), mais depuis le 1er avril 2025, ce visa doit être demandé et approuvé en ligne avant le départ, et n'est plus délivré sur place à l'aéroport.",
  },
  {
    q: "Qu'est-ce qui a changé le 1er avril 2025, et depuis ?",
    a: "Le ministère namibien de l'Intérieur, de l'Immigration, de la Sécurité et de la Sûreté (MHAISS) a transformé le système de visa à l'arrivée en une demande en ligne obligatoire avant le départ, soumise via son portail eServices. Les voyageurs éligibles au visa à l'arrivée ne peuvent plus simplement faire la queue à l'immigration et payer en liquide : la demande, le paiement et l'approbation se font désormais avant le départ, un peu comme une eTA. Le système a continué d'évoluer depuis son lancement : le MHAISS a ajouté 36 nationalités supplémentaires éligibles à la liste du VoA en ligne en octobre 2025, et le cadre d'éligibilité a continué de recevoir des mises à jour ponctuelles tout au long de 2026. Comme cette liste peut bouger, vérifiez toujours votre nationalité spécifique sur le portail officiel à l'approche de votre date de voyage plutôt que de vous fier à la liste de l'an dernier.",
  },
  {
    q: "Combien coûte le visa à l'arrivée en Namibie ?",
    a: "Les frais publiés s'élèvent à 1 600 N$ (environ 90 $ US au taux de change actuel) pour la plupart des nationalités non africaines, et à 1 200 N$ (environ 65-70 $ US) au tarif réduit pour les ressortissants des autres États membres de l'Union africaine. Le paiement se fait en ligne, en dollars namibiens, au moment de la demande. Le visa est valable 3 mois à compter de sa date de délivrance et permet un séjour unique de 30 jours maximum.",
  },
  {
    q: "Quels documents faut-il pour faire la demande ?",
    a: "Un passeport valide au moins 6 mois après vos dates de voyage, avec des pages vierges disponibles pour le visa ; une courte lettre de motivation précisant l'objet du séjour ; une réservation d'hébergement confirmée ou une lettre d'invitation ; un relevé bancaire ou une autre preuve de moyens financiers suffisants pour la durée du séjour ; et une preuve d'assurance voyage ou médicale couvrant le séjour. Certains demandeurs se voient aussi demander une confirmation de vol retour ou de continuation. Les exigences peuvent évoluer : vérifiez la liste actuelle sur le portail officiel eServices de l'immigration namibienne avant de faire votre demande.",
  },
  {
    q: "Combien de temps à l'avance faut-il faire la demande ?",
    a: "Les indications du MHAISS lui-même évoquent environ 7 à 10 jours ouvrés pour les demandes en ligne, même si des conseillers en immigration indépendants ont rapporté des délais allant de l'approbation le jour même à des attentes bien plus longues en période de maintenance du portail ou de forte demande. Prenez 7 à 10 jours ouvrés comme base de planification, faites votre demande au moins 2 à 3 semaines avant le départ, et prévoyez une marge supplémentaire si vous voyagez en haute saison (juillet-septembre), période où le volume de demandes est le plus élevé.",
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
          la frontière : il faut le demander, le payer et le faire approuver en ligne via le
          portail eServices du ministère de l&apos;Intérieur avant de prendre l&apos;avion. La
          liste des nationalités éligibles n&apos;a cessé de s&apos;élargir depuis, avec en dernier
          lieu 36 pays ajoutés en octobre 2025. Beaucoup de guides plus anciens décrivent encore
          l&apos;ancien système de paiement à l&apos;aéroport datant d&apos;avant 2025. Voici ce
          qui s&apos;applique désormais, et comment les frais d&apos;environ 90 $ s&apos;intègrent
          dans le reste de votre{" "}
          <Link href="/fr/namibia-trip-cost" className="font-medium text-rust hover:text-rust-dark">
            budget de voyage
          </Link>
          .
        </p>
        <p className="mt-4 max-w-2xl text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          Cette page résume des changements de politique rendus publics et des commentaires de
          conseillers en immigration, et ne constitue pas un conseil en immigration. Les règles,
          frais et listes de nationalités éligibles ont changé plusieurs fois depuis avril 2025 et
          peuvent encore changer. Vérifiez toujours les exigences actuelles pour votre nationalité
          directement auprès de l&apos;autorité officielle de l&apos;immigration namibienne (le
          MHAISS, via son portail eServices) avant de réserver un vol ou de payer des frais de
          visa.
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
              "Passeport valide au moins 6 mois après vos dates de voyage, avec des pages vierges disponibles pour le visa",
              "Une courte lettre de motivation précisant l'objet du séjour",
              "Réservation d'hébergement confirmée (ou lettre d'invitation formelle en cas de séjour chez des proches)",
              "Relevé bancaire ou autre preuve de moyens financiers suffisants pour la durée du séjour",
              "Preuve d'assurance voyage ou médicale couvrant le séjour",
              "Confirmation de vol retour ou de continuation, si elle est demandée pendant la procédure",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13px] leading-relaxed text-charcoal/50">
            Les demandes se font via le portail officiel du gouvernement namibien, à
            l&apos;adresse{" "}
            <span className="font-medium text-charcoal/70">eservices.mhaiss.gov.na</span>, géré
            par le ministère de l&apos;Intérieur, de l&apos;Immigration, de la Sécurité et de la
            Sûreté. Évitez les sites tiers qui facturent une majoration pour la même démarche.
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
        </Reveal>
      </section>
    </>
  );
}
