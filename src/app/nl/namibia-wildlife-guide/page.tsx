import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibië wildlife gids";
const DESCRIPTION =
  "Namibië's wildlife checklist per regio: woestijnaangepaste olifanten, zwarte neushoorn, de soorten bij Etosha's waterpoelen, en de kustwildlife die de meeste reisroutes missen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-wildlife-guide",
    languages: { en: "/namibia-wildlife-guide", de: "/de/namibia-wildlife-guide", nl: "/nl/namibia-wildlife-guide" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POPULAR_GUIDES_NL = [
  { title: "Beste lodges in Namibië", href: "/nl/best-lodges-in-namibia" },
  { title: "Verblijven in Etosha", href: "/nl/where-to-stay/etosha" },
  { title: "Verblijven in Sossusvlei", href: "/nl/where-to-stay/sossusvlei" },
  { title: "Namibië zelfrijgids", href: "/nl/namibia-self-drive-guide" },
  { title: "Beste tijd om Namibië te bezoeken", href: "/nl/best-time-to-visit-namibia" },
  { title: "Namibië visumvereisten", href: "/nl/namibia-visa-requirements" },
  { title: "Is Namibië veilig? Veiligheid & gezondheid", href: "/nl/namibia-safety-and-health" },
  { title: "Hoeveel kost een Namibië-reis?", href: "/nl/namibia-trip-cost" },
  { title: "Namibië wildlife gids", href: "/nl/namibia-wildlife-guide" },
];

const SIGHTINGS = [
  {
    region: "Etosha",
    href: "/nl/where-to-stay/etosha",
    animals:
      "Leeuw, olifant, giraffe, zebra, springbok, zwartneusimpala, en een van Afrika's beste kansen op zwarte neushoorn, geconcentreerd rond verlichte waterpoelen.",
  },
  {
    region: "Damaraland",
    href: "/nl/where-to-stay/damaraland",
    animals:
      "Woestijnaangepaste olifant en, met een gespecialiseerde gids vanuit Palmwag, opgespoorde zwarte neushoorn, dieren die zich hebben aangepast aan bijna waterloos terrein dat vrijwel nergens anders op aarde voorkomt.",
  },
  {
    region: "Skeleton Coast",
    href: "/nl/where-to-stay/skeleton-coast",
    animals:
      "Kolonies Kaapse pelsrobben, bruine hyena, en, voor de kust, Heaviside's dolfijn, een kleine dolfijnsoort die alleen langs de Namibische en Zuid-Afrikaanse kust voorkomt.",
  },
  {
    region: "Caprivi (Zambezi)",
    href: "/nl/where-to-stay/caprivi",
    animals: (
      <>
        Namibië&apos;s meest waterrijke wildlife: nijlpaard, krokodil, olifant langs de
        rivieroevers, en de beste vogelspotting van het land, heel anders dan de soorten uit de
        droge gebieden elders. Het is bovendien de regio van Namibië met het hoogste
        malariarisico: bekijk onze{" "}
        <Link
          href="/nl/namibia-safety-and-health"
          className="font-medium text-rust hover:text-rust-dark"
        >
          gids over veiligheid en gezondheid
        </Link>{" "}
        voordat u vertrekt.
      </>
    ),
  },
  {
    region: "Sossusvlei",
    href: "/nl/where-to-stay/sossusvlei",
    animals:
      "Oryx (gemsbok) die zich aftekent op de duinruggen is de bepalende waarneming; verder springbok en, minder voorspelbaar, de schuwe bruine hyena.",
  },
];

const FAQS = [
  {
    q: "Heeft Namibië de Big Five?",
    a: "Niet overal, en niet de klassieke versie inclusief buffel die de meeste safarimarketing suggereert. Etosha heeft betrouwbaar leeuw, olifant, zwarte neushoorn en luipaard; buffel maakt geen deel uit van Etosha's ecosysteem. Caprivi/Zambezi is de regio met een echte kans op alle vijf, buffel inbegrepen.",
  },
  {
    q: "Wat maakt Namibië's wildlife anders dan die van Kenia of Tanzania?",
    a: "Namibië's kenmerkende wildlife is woestijnaangepast: olifanten en zwarte neushoorns die overleven op een fractie van het water dat hun soortgenoten in de savanne nodig hebben, te vinden in Damaraland en het Kaokoland, nergens anders op het continent. Het is een andere, kalere vorm van wildlife-ontmoeting dan de dichte kuddes van Oost-Afrika.",
  },
  {
    q: "Waar is de beste plek om zwarte neushoorns te zien in Namibië?",
    a: "Etosha voor een kans via zelf rijden of lodge-gamedrives, en de Palmwag-concessie in Damaraland voor begeleid rhino-tracken te voet, een van de weinige plekken in Afrika waar dit op verantwoorde wijze wordt aangeboden, in samenwerking met gemeenschapsreservaten.",
  },
  {
    q: "Kunt u wildlife zien tijdens een zelfrijreis, of heeft u een gids nodig?",
    a: "Etosha is werkelijk uitstekend voor wildlife spotten tijdens zelf rijden: waterpoelen zijn bereikbaar met een gewone huurauto en wildlife concentreert zich daar voorspelbaar. Woestijnaangepaste olifant- en neushoorntracking in Damaraland vereist een gespecialiseerde gids.",
  },
];

export default function WildlifeGuidePageNl() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/nl` },
          { name: "Wildlife gids", url: `${SITE_URL}/nl/namibia-wildlife-guide` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Gids
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibië's wildlife: wat u zult zien, en waar
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibië's wildlife is verspreid, niet geconcentreerd zoals in Oost-Afrika. In welke
          regio u verblijft, bepaalt wat u daadwerkelijk te zien krijgt.
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
                  Verblijven in {s.region} →
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
            Veelgestelde vragen
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
            href="/nl/best-safari-areas"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Beste safari gebieden
          </Link>
        </Reveal>
      </section>
    </>
  );
}
