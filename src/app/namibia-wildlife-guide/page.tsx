import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Namibia Wildlife Guide",
  description:
    "Namibia's wildlife checklist by region: desert-adapted elephants, black rhino, Etosha's waterhole species, and the coastal wildlife most itineraries miss.",
  alternates: { canonical: "/namibia-wildlife-guide", languages: { en: "/namibia-wildlife-guide", de: "/de/namibia-wildlife-guide", nl: "/nl/namibia-wildlife-guide" } },
  openGraph: {
    title: "Namibia Wildlife Guide",
    description:
      "Namibia's wildlife checklist by region: desert-adapted elephants, black rhino, Etosha's waterhole species, and the coastal wildlife most itineraries miss.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const SIGHTINGS = [
  {
    region: "Etosha",
    href: "/where-to-stay/etosha",
    animals:
      "Lion, elephant, giraffe, zebra, springbok, black-faced impala, and one of Africa's best chances at black rhino, concentrated around floodlit waterholes.",
  },
  {
    region: "Damaraland",
    href: "/where-to-stay/damaraland",
    animals:
      "Desert-adapted elephant and, with a specialist guide out of Palmwag, tracked black rhino, animals that have adapted to near-waterless terrain found almost nowhere else on Earth.",
  },
  {
    region: "Skeleton Coast",
    href: "/where-to-stay/skeleton-coast",
    animals:
      "Cape fur seal colonies, brown hyena, and, offshore, Heaviside's dolphin, a small dolphin species found only along the Namibian and South African coast.",
  },
  {
    region: "Caprivi (Zambezi)",
    href: "/where-to-stay/caprivi",
    animals: (
      <>
        Namibia&apos;s most water-based wildlife: hippo, crocodile, elephant along the river
        floodplains, and the country&apos;s best birding, distinct from the arid-country species
        elsewhere. It&apos;s also Namibia&apos;s higher malaria-risk region: see our{" "}
        <Link
          href="/namibia-safety-and-health"
          className="font-medium text-rust hover:text-rust-dark"
        >
          safety and health guide
        </Link>{" "}
        before you go.
      </>
    ),
  },
  {
    region: "Sossusvlei",
    href: "/where-to-stay/sossusvlei",
    animals:
      "Oryx (gemsbok) silhouetted on dune ridges are the defining sighting; also springbok and, less predictably, the elusive brown hyena.",
  },
];

const FAQS = [
  {
    q: "Does Namibia have the Big Five?",
    a: "Not everywhere, and not the classic buffalo-inclusive version most safari marketing implies. Etosha has lion, elephant, black rhino and leopard reliably; buffalo aren't part of Etosha's ecosystem. Caprivi/Zambezi is the region with a genuine chance at all five, including buffalo.",
  },
  {
    q: "What makes Namibia's wildlife different from Kenya or Tanzania?",
    a: "Namibia's signature wildlife is desert-adapted: elephants and black rhino that survive on a fraction of the water their savannah relatives need, found in Damaraland and Kaokoland nowhere else on the continent. It's a different, starker kind of wildlife encounter than the dense herds of East Africa.",
  },
  {
    q: "Where's the best place to see black rhino in Namibia?",
    a: "Etosha for a chance via self-drive or lodge game drives, and the Palmwag concession in Damaraland for guided rhino tracking on foot, one of the only places in Africa this is offered responsibly, run in partnership with community conservancies.",
  },
  {
    q: "Can you see wildlife on a self-drive trip, or do you need a guide?",
    a: "Etosha is genuinely excellent for self-drive game viewing: waterholes are accessible by ordinary rental car and wildlife concentrates there predictably. Desert-adapted elephant and rhino tracking in Damaraland require a specialist guide.",
  },
];

export default function WildlifeGuidePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Wildlife Guide", url: `${SITE_URL}/namibia-wildlife-guide` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia wildlife: what you&apos;ll see, and where
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia&apos;s wildlife is spread out, not concentrated the way East Africa&apos;s is.
          Which region you stay in decides what you&apos;ll actually see.
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
                  Where to stay in {s.region} →
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
            Frequently asked questions
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
          {popularGuides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
            >
              {g.title}
            </Link>
          ))}
          <Link
            href="/best-safari-areas"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Best Safari Areas
          </Link>
        </Reveal>
      </section>
    </>
  );
}
