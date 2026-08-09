import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Prolonger votre voyage en Namibie";
const DESCRIPTION =
  "La Namibie se combine naturellement avec quelques hauts lieux voisins : voici comment les voyageurs prolongent réellement leur séjour, et ce que chaque extension coûte en temps supplémentaire.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/fr/namibia-trip-extensions",
    languages: {
      en: "/namibia-trip-extensions",
      de: "/de/namibia-trip-extensions",
      nl: "/nl/namibia-trip-extensions", fr: "/fr/namibia-trip-extensions",
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

const EXTENSIONS = [
  {
    place: "Chutes Victoria (Zambie/Zimbabwe)",
    text: "L'extension la plus courante depuis la Namibie. Généralement en avion, pas en voiture : la plupart des voyageurs prennent un vol depuis Windhoek ou depuis Katima Mulilo, dans la bande de Caprivi, plutôt que de parcourir la distance eux-mêmes. Prévoyez au moins 2 nuits pour voir les chutes côté zambien et côté zimbabwéen.",
    time: "+3 à 4 jours minimum",
  },
  {
    place: "Parc national de Chobe et delta de l'Okavango (Botswana)",
    text: (
      <>
        Une liaison naturelle depuis notre région de la bande de Caprivi, qui borde directement
        Chobe. Consultez notre{" "}
        <Link href="/fr/namibia-vs-botswana" className="font-semibold text-rust hover:text-rust-dark">
          comparatif Namibie contre Botswana
        </Link>{" "}
        pour savoir ce qui change une fois la frontière franchie : attendez-vous surtout à des
        camps accessibles uniquement par avion et à un niveau de prix plus élevé que le circuit en
        autonomie namibien.
      </>
    ),
    time: "+4 à 7 jours",
  },
  {
    place: "Le Cap et la Garden Route (Afrique du Sud)",
    text: "Généralement ajouté en début ou en fin de voyage plutôt que combiné en cours de route : de nombreux voyageurs prennent l'avion vers Le Cap avant ou après leur boucle namibienne, et traitent cette étape comme un séjour urbain distinct plutôt que comme une extension du circuit en autonomie lui-même.",
    time: "+3 à 5 jours",
  },
];

const FAQS = [
  {
    q: "Peut-on rejoindre les chutes Victoria en voiture depuis la Namibie ?",
    a: "Techniquement oui, en passant par la bande de Caprivi puis en Zambie ou au Botswana, mais c'est un long trajet de plusieurs jours que la plupart des voyageurs évitent en préférant un vol intérieur depuis Windhoek ou Katima Mulilo. L'avion reste l'option par défaut pour cette extension en particulier.",
  },
  {
    q: "Faut-il un visa séparé pour ces extensions ?",
    a: "Oui, dans tous les cas : la Zambie, le Zimbabwe, le Botswana et l'Afrique du Sud ont chacun leurs propres conditions d'entrée, distinctes de celles de la Namibie (qui est elle-même passée à une demande obligatoire de visa à l'arrivée en ligne le 1er avril 2025). Vérifiez les exigences pour votre nationalité et chaque pays bien avant de réserver vos vols, en complément de notre guide sur les conditions de visa pour la Namibie.",
  },
  {
    q: "Combien de jours supplémentaires prévoir pour une extension vers les chutes Victoria ?",
    a: "Au moins 3 à 4 jours au total, trajets compris : cela couvre un vol aller-retour plus 2 nuits pour bien voir les chutes depuis les points de vue zambien et zimbabwéen, qui offrent des expériences réellement différentes.",
  },
  {
    q: "Vaut-il mieux prolonger vers le Botswana ou s'envoler directement pour les chutes Victoria ?",
    a: "Cela dépend de ce que vous recherchez davantage. Le Botswana prolonge l'expérience safari avec une observation de la faune plus dense ; les chutes Victoria sont un site emblématique à part entière, avec peu de recoupement avec ce que vous avez déjà vu en Namibie. Beaucoup de voyages de trois semaines ou plus combinent les deux.",
  },
];

export default function TripExtensionsPageFr() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/fr` },
          { name: "Prolonger le voyage", url: `${SITE_URL}/fr/namibia-trip-extensions` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Prolonger votre voyage en Namibie
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          La Namibie borde certains des plus hauts lieux d&apos;Afrique australe. Voici comment les
          voyageurs les ajoutent réellement à leur itinéraire, et ce que chaque extension coûte
          vraiment en temps.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {EXTENSIONS.map((e, i) => (
            <Reveal
              key={e.place}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{e.place}</h2>
                <span className="rounded-full bg-sand/30 px-3 py-1 text-[12px] font-semibold text-charcoal/70">
                  {e.time}
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{e.text}</p>
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
            href="/fr/namibia-vs-botswana"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibie contre Botswana
          </Link>
        </Reveal>
      </section>
    </>
  );
}
