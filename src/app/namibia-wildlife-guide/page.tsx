import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Namibia Wildlife Guide",
  description:
    "Namibia's wildlife checklist by region: desert-adapted elephants, black rhino, Etosha's waterhole species, and the coastal wildlife most itineraries miss.",
  alternates: { canonical: "/namibia-wildlife-guide", languages: { en: "/namibia-wildlife-guide", de: "/de/namibia-wildlife-guide", nl: "/nl/namibia-wildlife-guide", fr: "/fr/namibia-wildlife-guide", it: "/it/namibia-wildlife-guide" } },
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
      "Lion, elephant, giraffe, zebra, springbok, and the black-faced impala, a subspecies found nowhere outside Etosha and northwestern Kaokoland. The floodlit waterholes at Okaukuejo and Halali camps are the country's most reliable black rhino viewing: rhino typically arrive between 7pm and 11pm through the dry season (roughly May–October), often sharing the waterhole with elephant and lion the same night. For cheetah, the open plains west of Okaukuejo and the Okondeka waterhole are a better bet than the eastern pans.",
  },
  {
    region: "Damaraland",
    href: "/where-to-stay/damaraland",
    animals:
      "Home to the desert-adapted elephant, a population that has recovered from fewer than 30 individuals in the 1980s to roughly 600–700 today, almost entirely through Namibia's community conservancy model. These elephants range across territories of up to 700km and can go five days without drinking, adaptations found almost nowhere else on Earth. The Torra Conservancy, in the Huab River valley, is the most consistent base for tracking them. Further north, the Palmwag Concession holds the world's largest free-roaming population of black rhino, around 200 animals monitored daily by Save the Rhino Trust rangers; seeing them means a full-day guided tracking excursion on foot with a licensed guide, not a self-drive stop.",
  },
  {
    region: "Skeleton Coast",
    href: "/where-to-stay/skeleton-coast",
    animals:
      "Cape fur seal colonies (Cape Cross alone holds well over 100,000 animals at peak season), brown hyena working the tideline for carrion, and, offshore, Heaviside's dolphin, a small dolphin species found only along the Namibian and South African coast. This is scenery-and-marine-life territory more than a big-game stop.",
  },
  {
    region: "Caprivi (Zambezi)",
    href: "/where-to-stay/caprivi",
    animals: (
      <>
        Namibia&apos;s most water-based wildlife, concentrated in Bwabwata National Park along
        the Kwando and Zambezi floodplains: hippo, crocodile, sizeable elephant and buffalo
        herds, sable and roan antelope, and one of Namibia&apos;s last remaining wild dog
        populations, tracked by the Kwando Carnivore Project. It&apos;s also the country&apos;s
        best birding region and the one place where a genuine Big Five sighting, buffalo
        included, is realistic, a different ecosystem entirely from the arid-country species
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
      "Oryx (gemsbok) silhouetted on dune ridges are the defining sighting, and the neighbouring NamibRand Nature Reserve's most recent game census counted roughly 3,200 oryx and 12,400 springbok across its 172,000 hectares. Brown hyena, black-backed jackal and leopard are present but genuinely elusive; NamibRand also runs an active caracal and cheetah reintroduction programme, so either is a bonus sighting, not an expectation.",
  },
];

const TIMING = [
  "Dawn (roughly 05:30–08:00): predators are most active, the best window for lion, cheetah and leopard movement before the heat sets in.",
  "Midday: game concentrates at waterholes rather than moving around, especially in the May–October dry season. Parking at Okaukuejo, Halali or Olifantsrus and waiting works better than driving in search of sightings.",
  "Dusk into the first hours of dark, at floodlit camp waterholes: black rhino and elephant activity peaks, typically between 19:00 and 23:00 in the dry season.",
  "Wet season (November–April): game disperses widely as temporary pans fill, so sightings become less predictable, but the birding, newborn wildlife and green scenery improve substantially.",
];

const FAQS = [
  {
    q: "Does Namibia have the Big Five?",
    a: "Not everywhere, and not the classic buffalo-inclusive version most safari marketing implies. Etosha has lion, elephant, black rhino and leopard reliably; buffalo aren't part of Etosha's ecosystem. Bwabwata National Park in the Caprivi (Zambezi) region is the one place with a genuine chance at all five, including buffalo, alongside sable and roan antelope and one of the country's last wild dog packs.",
  },
  {
    q: "What makes Namibia's wildlife different from Kenya or Tanzania?",
    a: "Namibia's signature wildlife is desert-adapted: elephants and black rhino that survive on a fraction of the water their savannah relatives need. Damaraland's desert elephant population has climbed from under 30 animals in the 1980s to roughly 600–700 today, and the Palmwag Concession holds the world's largest free-roaming population of desert-adapted black rhino, around 200 individuals. It's a different, starker kind of wildlife encounter than the dense herds of East Africa, built around sparse sightings rather than volume.",
  },
  {
    q: "Where's the best place to see black rhino in Namibia?",
    a: "Etosha's floodlit waterholes at Okaukuejo and Halali for the most reliable chance, with rhino typically arriving between 7pm and 11pm in the dry season; and the Palmwag Concession in Damaraland for guided rhino tracking on foot with Save the Rhino Trust-monitored animals, one of the only places in Africa this is offered responsibly, run in partnership with community conservancies.",
  },
  {
    q: "Can you see wildlife on a self-drive trip, or do you need a guide?",
    a: "Etosha is genuinely excellent for self-drive game viewing: waterholes are accessible by ordinary rental car and wildlife concentrates there predictably, especially in the May–October dry season. Desert-adapted elephant tracking in Damaraland's Torra Conservancy and black rhino tracking in the Palmwag Concession both require a specialist, licensed guide; they aren't roadside sightings.",
  },
  {
    q: "Where can I see cheetah in Namibia?",
    a: "Namibia holds the world's largest free-roaming cheetah population, estimated at around 1,500 animals, and Otjiwarongo, near the Waterberg, is often called the cheetah capital of the world. The Cheetah Conservation Fund's research centre there is the most dependable sighting, alongside the AfriCat Foundation at Okonjima. In Etosha, your best odds on a game drive are the open plains west of Okaukuejo and the Okondeka waterhole, though cheetah sightings anywhere are opportunistic, not guaranteed.",
  },
  {
    q: "When's the best time of year for wildlife viewing in Namibia?",
    a: "The dry season, roughly May to October, when sparse water forces animals to concentrate at waterholes and sightings become far more predictable, especially in Etosha. The wet season (November–April) disperses game more widely and sightings get harder to predict, but it's the better window for birding, newborn wildlife and green landscapes.",
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

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Best time of day, by species</h2>
          <ul className="mt-5 space-y-3">
            {TIMING.map((item) => (
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
