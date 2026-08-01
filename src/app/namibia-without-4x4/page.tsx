import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Namibia Without a 4x4",
  description:
    "You don't need a 4x4 for most of a Namibia self-drive trip — here's what's fine in a normal sedan and where it genuinely matters.",
};

const CAN_2WD = [
  "Windhoek to Sossusvlei (Sesriem) — tar and well-graded gravel",
  "Windhoek to Swakopmund via the B1/B2 — fully tarred",
  "Swakopmund to Damaraland's main lodges — graded gravel, fine in the dry season",
  "Windhoek to Etosha's southern and eastern gates — tar most of the way",
];

const NEED_4X4 = [
  "The final ~5km of soft sand from the Sossusvlei 2x4 car park to the dunes themselves",
  "Most of the Skeleton Coast north of Torra Bay",
  "Remote Kaokoveld tracks north of Damaraland",
  "Some rougher conservancy roads to community campsites off the main gravel routes",
];

export default function Without4x4Page() {
  return (
    <>
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
          sedan or crossover. The country&apos;s main gravel roads (the &quot;C&quot; and
          &quot;D&quot; roads) are well-graded and maintained. A 4x4 genuinely matters for a
          smaller set of specific stretches.
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
            the park&apos;s own shuttle service covers the final soft-sand stretch, so you can
            park a 2WD at the public car park and still reach the dunes without renting a 4x4
            for the whole trip.
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
