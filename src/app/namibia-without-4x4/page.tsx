import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia Without a 4x4";
const DESCRIPTION =
  "You don't need a 4x4 for most of a Namibia self-drive trip: here's what's fine in a normal sedan and where it genuinely matters.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/namibia-without-4x4", languages: { en: "/namibia-without-4x4", de: "/de/namibia-without-4x4", nl: "/nl/namibia-without-4x4", fr: "/fr/namibia-without-4x4", it: "/it/namibia-without-4x4" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const CAN_2WD = [
  "Windhoek to Sossusvlei (Sesriem) via the B1 and the Remhoogte Pass (C24, then D1275/C19): tar to Rehoboth, then well-graded gravel the rest of the way. This is the route most rental agencies point 2WD drivers toward.",
  "Windhoek to Swakopmund via the B1/B2: fully tarred, no gravel driving at all.",
  "Uis to Twyfelfontein in Damaraland (C35 to D2612): a well-touristed, generally good-condition gravel road that normal sedans handle in dry conditions, though the D2612's final stretch runs sandier than the rest.",
  "Windhoek to Etosha's southern gate (Anderson) near Okaukuejo: tar most of the way, and the roads inside Etosha itself are graded and suitable for a standard 2WD in the dry season.",
  "The southern run to Fish River Canyon's rim viewpoints near Hobas: tar and maintained gravel, with no 4x4 needed for the viewpoints themselves.",
];

const NEED_4X4 = [
  "The final ~5km of soft sand from the Sossusvlei 2x4 car park to the dunes and Deadvlei themselves, now shuttle-only for all vehicles regardless of drivetrain (see below).",
  "Spreetshoogte Pass, the steepest pass in Namibia (gradients as steep as roughly 1:4.5), on the alternate scenic route into Sossusvlei: 4x4-only, and caravans and trailers are barred outright. Take the gentler Remhoogte Pass instead if you're in a 2WD.",
  "Most of the Skeleton Coast north of Torra Bay, plus standout northern lodges like Shipwreck Lodge, which are normally reached by light aircraft rather than any road at all.",
  "Remote Kaokoveld tracks north of Damaraland, including the routes toward Serra Cafema and the Hartmann Valley.",
  "Damaraland and Kaokoland's D-roads generally: graded but rougher and more remote than the C-roads, and genuinely rain-affected in the wet season (roughly November to April), when even usually-fine gravel routes can deteriorate fast.",
];

export default function Without4x4Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Guides", url: `${SITE_URL}/guides` },
          { name: "Namibia Without a 4x4", url: `${SITE_URL}/namibia-without-4x4` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia without a 4x4
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          A common misconception: most of a classic Namibia circuit is drivable in a normal
          sedan or crossover. Namibia&apos;s &quot;C&quot; roads, the country&apos;s main gravel
          network (broken down in more detail in our{" "}
          <Link
            href="/namibia-self-drive-guide"
            className="font-semibold text-rust hover:text-rust-dark"
          >
            self-drive guide
          </Link>
          ), are wide, graded and maintained well enough that most rental agencies rate them for
          2WD at a sensible speed. The rougher &quot;D&quot; roads are a different story, and a
          4x4 genuinely matters for a smaller, specific set of stretches, not the whole trip.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-black/5 bg-olive/5 p-6">
            <h2 className="text-lg font-bold text-olive">Fine in a normal car</h2>
            <ul className="mt-4 space-y-2.5">
              {CAN_2WD.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                  <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-2xl border border-black/5 bg-rust/5 p-6">
            <h2 className="text-lg font-bold text-rust">Where a 4x4 actually matters</h2>
            <ul className="mt-4 space-y-2.5">
              {NEED_4X4.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            <span className="font-semibold text-charcoal">A middle path:</span> at Sossusvlei,
            an official shuttle/excursion service covers the final soft-sand stretch to the dunes
            and Deadvlei, so you can park a 2WD at the public car park and still reach them
            without renting a 4x4 for the whole trip. As of 2026 that&apos;s no longer optional
            even for 4x4 drivers: private vehicles are barred from the final ~5km, and the
            park&apos;s own guidance quotes roughly N$260 per adult and N$130 per child under 12,
            though the pickup point and pricing have both shifted more than once in recent years,
            so confirm the current arrangement at Sesriem or with your lodge before you go.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <Link
            href="/itineraries"
            className="inline-block rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            See Self-Drive Itineraries
          </Link>
        </Reveal>
      </section>
    </>
  );
}
