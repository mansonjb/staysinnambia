import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Luxury Namibia",
  description: "What a luxury Namibia trip actually looks like — fly-in circuits, private guiding, and the top-tier lodges worth the splurge.",
};

const POINTS = [
  {
    title: "Fly-in over self-drive",
    text: "The top lodges (Hoanib Skeleton Coast Camp, Sossusvlei Desert Lodge) are often reached by light aircraft rather than road, cutting a 6-hour drive to a 45-minute flight.",
  },
  {
    title: "Private reserves, not just private rooms",
    text: "Luxury in Namibia usually means access — a private conservancy gate, off-road tracking rights, or night drives that aren't permitted inside the national parks themselves.",
  },
  {
    title: "Fewer, better nights",
    text: "A luxury itinerary is often shorter than a budget self-drive — three or four camps over 8–10 days, each earning two full nights rather than a quick stopover.",
  },
];

export default function LuxuryPage() {
  return (
    <>
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
          access to landscape. Here&apos;s what actually changes when you spend more.
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
