import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { popularGuides, regions } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1400px] flex-col items-center justify-center px-6 py-20 text-center sm:px-10">
      <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
        <LogoMark className="h-4 w-4" />
        Page not found
      </span>
      <h1 className="mt-6 max-w-lg text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
        This page went off-road.
      </h1>
      <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal/70">
        The page you&apos;re looking for doesn&apos;t exist, or has moved. Here&apos;s where to
        pick the route back up.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory shadow-lg transition-colors hover:bg-rust-dark"
        >
          Back to Home
        </Link>
        <Link
          href="/where-to-stay/namibia"
          className="rounded-full border border-charcoal/20 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-charcoal transition-colors hover:border-charcoal/40"
        >
          Where to Stay
        </Link>
      </div>

      <div className="mt-14 w-full max-w-2xl border-t border-charcoal/10 pt-10">
        <p className="text-[12px] uppercase tracking-[0.14em] text-charcoal/40">
          Or jump to a region
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {regions.map((r) => (
            <Link
              key={r.slug}
              href={`/where-to-stay/${r.slug}`}
              className="rounded-full bg-sand/30 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:text-rust"
            >
              {r.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {popularGuides.slice(0, 5).map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
            >
              {g.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
