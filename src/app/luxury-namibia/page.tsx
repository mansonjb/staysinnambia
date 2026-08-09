import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Luxury Namibia";
const DESCRIPTION = "What a luxury Namibia trip actually looks like: fly-in circuits, private guiding, and the top-tier lodges worth the splurge.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/luxury-namibia", languages: { en: "/luxury-namibia", de: "/de/luxury-namibia", nl: "/nl/luxury-namibia", fr: "/fr/luxury-namibia" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POINTS = [
  {
    title: "Fly-in over self-drive",
    text: (
      <>
        The top lodges are often reached by light aircraft rather than road. Hoanib Skeleton
        Coast Camp, eight tented villas in the Palmwag Concession built around desert lion and
        elephant tracking, is fly-in only. Sossusvlei Desert Lodge, &Beyond&apos;s flagship on
        the NamibRand Nature Reserve, is around 45 minutes by air rather than the roughly 5-hour
        drive our{" "}
        <Link
          href="/namibia-self-drive-guide"
          className="text-rust underline underline-offset-2 hover:text-rust-dark"
        >
          self-drive guide
        </Link>{" "}
        clocks for the equivalent gravel route. At the far end, Serra Cafema sits alone on the
        Kunene River in the Hartmann Valley, reachable only by light aircraft to its own airstrip:
        genuinely the most remote lodge in the country.
      </>
    ),
  },
  {
    title: "Private reserves, not just private rooms",
    text: "Luxury in Namibia usually means access, not thread count. Ongava Reserve, bordering Etosha's Anderson Gate, allows night drives and off-road tracking the national park itself doesn't permit. In Damaraland, the Palmwag Concession holds one of the largest free-roaming black rhino populations left on earth, and is one of the only places in Africa where you can track them on foot with a specialist guide rather than from a vehicle.",
  },
  {
    title: "Fewer, better nights",
    text: "A luxury itinerary is often shorter than a budget self-drive: three or four camps over 8–10 days, each earning two full nights rather than a quick stopover. Shipwreck Lodge on the Skeleton Coast received a Michelin Key in the guide's inaugural Global Michelin Keys Selection (2025), a useful marker for what \"worth the flight\" means at this level.",
  },
  {
    title: "What the extra spend actually buys",
    text: "At the top tier, each unit typically comes with its own guide and often a dedicated chef, rather than a shared game-drive vehicle and a set menu. Sossusvlei Desert Lodge and Little Kulala both sit inside the Namib-Naukluft area's International Dark Sky Reserve (Gold Tier since 2012), so stargazing is a scheduled activity, from an in-room skylight, a private rooftop star-bed, or an on-site observatory, not just a clear night you happen to notice. A private hot-air balloon sunrise over the dunes (Namib Sky Balloon Safaris, roughly N$9,900/US$550 per person, ending in a champagne breakfast) is the kind of one-off splurge that's easy to add to a luxury itinerary and hard to justify on a budget one.",
  },
];

export default function LuxuryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Guides", url: `${SITE_URL}/guides` },
          { name: "Luxury Namibia", url: `${SITE_URL}/luxury-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Luxury Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          A luxury Namibia trip looks less like a five-star hotel and more like total, private
          access to landscape. Here&apos;s what actually changes when you spend more: which gates
          you can drive through, whose vehicle you&apos;re in, and how many other people are
          anywhere near you.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <MetaIcon name="compass" className="h-6 w-6 text-rust" />
                <h2 className="mt-4 text-lg font-bold text-charcoal">{p.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            href="/best-luxury-lodges"
            className="group inline-flex items-center gap-3 rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            See the Best Luxury Lodges
            <CardArrow className="bg-ivory/20 text-ivory group-hover:bg-ivory group-hover:text-rust" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
