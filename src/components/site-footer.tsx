import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";

const COLUMNS = [
  {
    title: "Regions",
    links: [
      { label: "Etosha", href: "/where-to-stay/etosha" },
      { label: "Sossusvlei", href: "/where-to-stay/sossusvlei" },
      { label: "Swakopmund", href: "/where-to-stay/swakopmund" },
      { label: "Damaraland", href: "/where-to-stay/damaraland" },
      { label: "Skeleton Coast", href: "/where-to-stay/skeleton-coast" },
    ],
  },
  {
    title: "Lodges",
    links: [
      { label: "Best Lodges in Namibia", href: "/best-lodges-in-namibia" },
      { label: "Best Luxury Lodges", href: "/best-luxury-lodges" },
      { label: "Best Safari Lodges", href: "/best-safari-lodges" },
      { label: "Best Desert Lodges", href: "/best-desert-lodges" },
      { label: "Best Family Lodges", href: "/best-family-lodges" },
    ],
  },
  {
    title: "Itineraries",
    links: [
      { label: "7-day Namibia", href: "/itineraries/7-days" },
      { label: "10-day Namibia", href: "/itineraries/10-days" },
      { label: "14-day Namibia", href: "/itineraries/14-days" },
      { label: "Namibia Self Drive", href: "/namibia-self-drive" },
      { label: "Namibia Without 4x4", href: "/namibia-without-4x4" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Namibia with Kids", href: "/namibia-with-kids" },
      { label: "Namibia Honeymoon", href: "/namibia-honeymoon" },
      { label: "Luxury Namibia", href: "/luxury-namibia" },
      { label: "Best Time to Visit", href: "/best-time-to-visit-namibia" },
      { label: "Best Safari Areas", href: "/best-safari-areas" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative bg-charcoal pt-16">
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute -top-[1px] h-16 w-full sm:h-24"
        aria-hidden="true"
      >
        <path
          d="M0,60 C200,20 380,80 560,50 C740,20 920,70 1100,45 C1260,25 1360,50 1440,45 L1440,0 L0,0 Z"
          fill="#f4efe4"
        />
      </svg>

      <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-8 sm:px-10 sm:pb-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-[13px] uppercase tracking-[0.14em] text-rust">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-ivory/70 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ivory/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-2.5 font-serif text-3xl italic text-ivory">
              <LogoMark className="h-8 w-8" />
              Namibia Stays
            </p>
            <p className="mt-3 max-w-sm text-sm text-ivory/60">
              Independent guides to Namibia&apos;s lodges, camps and hotels. We earn a commission
              when you book through our recommendations — it never affects what we recommend.
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.14em] text-ivory/40">
            © {new Date().getFullYear()} Namibia Stays
          </p>
        </div>
      </div>
    </footer>
  );
}
