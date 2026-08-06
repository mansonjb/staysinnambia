import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "About Namibia Stays";
const DESCRIPTION =
  "How Namibia Stays is put together: how we choose lodges, why there are no prices or star ratings, and how we keep facts current.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about", languages: { en: "/about", de: "/de/about", nl: "/nl/about" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "About", url: `${SITE_URL}/about` },
        ])}
      />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          About
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          How Namibia Stays is put together
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          We&apos;re not a travel agency and we haven&apos;t personally stayed at every lodge on
          this site. Here&apos;s exactly what we do instead, so you know what you&apos;re reading.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">How we choose what to list</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Every lodge and region on Namibia Stays is researched against real, public sources:
              operator and lodge websites, national and regional tourism authorities, established
              guidebooks, and independent travel reporting. We aggregate and cross-check that
              information to decide what&apos;s genuinely worth listing, rather than publishing a
              first-hand review of a stay we had ourselves.
            </p>
          </Reveal>
          <Reveal delay={60} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Why there are no prices or star ratings</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Prices change constantly and we can&apos;t independently verify guest ratings for
              properties we haven&apos;t stayed at ourselves, so we don&apos;t publish either. Where
              real-time availability and pricing exist, we link out to our booking partner, Stay22,
              rather than showing a number on this site that could be wrong by the time you read it.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">No paid placement</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              We earn a commission when you book a stay through a link on this site. It never
              affects which lodges we feature or how we describe them. Nothing here is included
              because a property paid for it.
            </p>
          </Reveal>
          <Reveal delay={180} className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-charcoal">Keeping facts current</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
              Rules that affect travel to Namibia change: park fees, entry requirements, road
              access, park permits. When we update a page for a genuine change, we say so in the
              page itself, dated. We&apos;d rather flag something as time-sensitive than let it
              quietly go stale.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <div className="flex items-start gap-3">
            <MetaIcon name="check" className="mt-1 h-5 w-5 shrink-0 text-olive" />
            <p className="text-[14px] leading-relaxed text-charcoal/70">
              Spotted something out of date, or a lodge that&apos;s closed or changed hands? We&apos;d
              genuinely rather know. See our{" "}
              <Link href="/guides" className="font-semibold text-rust hover:text-rust-dark">
                full guide index
              </Link>{" "}
              or start with{" "}
              <Link href="/where-to-stay/namibia" className="font-semibold text-rust hover:text-rust-dark">
                where to stay in Namibia
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
