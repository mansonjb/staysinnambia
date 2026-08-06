import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia Tierwelt-Guide";
const DESCRIPTION =
  "Namibias Tierwelt nach Region: wüstenangepasste Elefanten, Spitzmaulnashörner, die Arten an Etoshas Wasserlöchern und die Küstentierwelt, die die meisten Reiserouten verpassen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-wildlife-guide",
    languages: { en: "/namibia-wildlife-guide", de: "/de/namibia-wildlife-guide", nl: "/nl/namibia-wildlife-guide" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_DE = [
  { title: "Beste Lodges in Namibia", href: "/de/best-lodges-in-namibia" },
  { title: "Unterkünfte in Etosha", href: "/de/where-to-stay/etosha" },
  { title: "Unterkünfte in Sossusvlei", href: "/de/where-to-stay/sossusvlei" },
  { title: "Namibia Selbstfahrer-Guide", href: "/de/namibia-self-drive-guide" },
  { title: "Beste Reisezeit für Namibia", href: "/de/best-time-to-visit-namibia" },
  { title: "Namibia Visabestimmungen", href: "/de/namibia-visa-requirements" },
  { title: "Ist Namibia sicher? Sicherheit & Gesundheit", href: "/de/namibia-safety-and-health" },
  { title: "Wie viel kostet eine Namibia-Reise?", href: "/de/namibia-trip-cost" },
  { title: "Namibia Tierwelt-Guide", href: "/de/namibia-wildlife-guide" },
];

const SIGHTINGS = [
  {
    region: "Etosha",
    href: "/de/where-to-stay/etosha",
    animals:
      "Löwe, Elefant, Giraffe, Zebra, Springbock, Schwarznasenimpala und eine der besten Chancen Afrikas auf Spitzmaulnashörner, konzentriert rund um beleuchtete Wasserlöcher.",
  },
  {
    region: "Damaraland",
    href: "/de/where-to-stay/damaraland",
    animals:
      "Wüstenangepasste Elefanten und, mit einem Spezialguide ab Palmwag, aufgespürte Spitzmaulnashörner, Tiere, die sich an nahezu wasserloses Gelände angepasst haben, wie es fast nirgendwo sonst auf der Erde vorkommt.",
  },
  {
    region: "Skeleton Coast",
    href: "/de/where-to-stay/skeleton-coast",
    animals:
      "Kolonien von Kap-Pelzrobben, Schabrackenhyänen und, vor der Küste, Heaviside-Delfine, eine kleine Delfinart, die nur entlang der namibischen und südafrikanischen Küste vorkommt.",
  },
  {
    region: "Caprivi (Zambezi)",
    href: "/de/where-to-stay/caprivi",
    animals: (
      <>
        Namibias wasserreichste Tierwelt: Flusspferd, Krokodil, Elefant entlang der Flussauen und
        die beste Vogelbeobachtung des Landes, ganz anders als die Trockenland-Arten anderswo. Es
        ist zudem die Region Namibias mit dem höheren Malariarisiko: Werfen Sie vor der Reise
        einen Blick in unseren{" "}
        <Link
          href="/de/namibia-safety-and-health"
          className="font-medium text-rust hover:text-rust-dark"
        >
          Guide zu Sicherheit und Gesundheit
        </Link>
        .
      </>
    ),
  },
  {
    region: "Sossusvlei",
    href: "/de/where-to-stay/sossusvlei",
    animals:
      "Oryx (Spießbock), die sich auf den Dünenkämmen als Silhouette abzeichnen, ist die typische Sichtung; außerdem Springbock und, weniger verlässlich, die scheue Schabrackenhyäne.",
  },
];

const FAQS = [
  {
    q: "Gibt es in Namibia die Big Five?",
    a: "Nicht überall, und nicht in der klassischen Version inklusive Büffel, die die meisten Safari-Werbetexte suggerieren. Etosha bietet zuverlässig Löwe, Elefant, Spitzmaulnashorn und Leopard; Büffel gehören nicht zu Etoshas Ökosystem. Caprivi/Zambezi ist die Region mit einer echten Chance auf alle fünf, Büffel eingeschlossen.",
  },
  {
    q: "Was unterscheidet Namibias Tierwelt von Kenia oder Tansania?",
    a: "Namibias Markenzeichen ist wüstenangepasste Tierwelt: Elefanten und Spitzmaulnashörner, die mit einem Bruchteil des Wassers auskommen, das ihre Verwandten in der Savanne brauchen, zu finden in Damaraland und dem Kaokoland, nirgendwo sonst auf dem Kontinent. Das ist eine andere, kargere Art der Tierbegegnung als die dichten Herden Ostafrikas.",
  },
  {
    q: "Wo sieht man in Namibia am besten Spitzmaulnashörner?",
    a: "Etosha für eine Chance per Selbstfahrer oder auf Lodge-Pirschfahrten, und die Palmwag-Konzession in Damaraland für geführtes Rhino-Tracking zu Fuß, einer der wenigen Orte in Afrika, an dem das verantwortungsvoll angeboten wird, in Partnerschaft mit gemeindeeigenen Schutzgebieten betrieben.",
  },
  {
    q: "Kann man auf einer Selbstfahrer-Reise Tiere sehen, oder braucht man einen Guide?",
    a: "Etosha eignet sich wirklich hervorragend für Tierbeobachtung im Selbstfahrer-Modus: Die Wasserlöcher sind mit einem normalen Mietwagen erreichbar, und die Tierwelt konzentriert sich dort verlässlich. Für wüstenangepasste Elefanten und Rhino-Tracking in Damaraland braucht es einen Spezialguide.",
  },
];

export default function WildlifeGuidePageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Tierwelt-Guide", url: `${SITE_URL}/de/namibia-wildlife-guide` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibias Tierwelt: Was Sie sehen werden, und wo
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibias Tierwelt ist weit verstreut, nicht so konzentriert wie in Ostafrika. Welche
          Region Sie wählen, entscheidet, was Sie tatsächlich zu sehen bekommen.
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
                  Unterkünfte in {s.region} →
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
            Häufig gestellte Fragen
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
          {POPULAR_GUIDES_DE.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
            >
              {g.title}
            </Link>
          ))}
          <Link
            href="/de/best-safari-areas"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Beste Safari-Gebiete
          </Link>
        </Reveal>
      </section>
    </>
  );
}
