import type { Metadata } from "next";
import Link from "next/link";
import { CardArrow } from "@/components/card-arrow";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Luxus in Namibia";
const DESCRIPTION =
  "Wie eine Luxusreise durch Namibia tatsächlich aussieht: Fly-in-Rundreisen, private Guides und die erstklassigen Lodges, die den Aufpreis wert sind.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/luxury-namibia",
    languages: { en: "/luxury-namibia", de: "/de/luxury-namibia", nl: "/nl/luxury-namibia" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const POINTS = [
  {
    title: "Fly-in statt Selbstfahrer",
    text: (
      <>
        Die besten Lodges (Hoanib Skeleton Coast Camp, Sossusvlei Desert Lodge) werden oft mit
        dem Kleinflugzeug statt über die Straße erreicht, wodurch eine Fahrt, die laut unserem{" "}
        <Link
          href="/de/namibia-self-drive-guide"
          className="text-rust underline underline-offset-2 hover:text-rust-dark"
        >
          Selbstfahrer-Guide
        </Link>{" "}
        sechs Stunden dauern würde, zu einem 45-minütigen Flug wird.
      </>
    ),
  },
  {
    title: "Private Reservate, nicht nur private Zimmer",
    text: "Luxus in Namibia bedeutet meist Zugang: ein privates Tor zum Conservancy, Offroad-Tracking-Rechte oder Nachtfahrten, die innerhalb der Nationalparks selbst nicht erlaubt sind.",
  },
  {
    title: "Weniger, dafür bessere Nächte",
    text: "Eine Luxus-Reiseroute ist oft kürzer als eine Budget-Selbstfahrer-Tour: drei oder vier Camps über 8–10 Tage, mit jeweils zwei vollen Nächten statt eines kurzen Zwischenstopps.",
  },
];

export default function LuxuryPageDe() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/de` },
          { name: "Ratgeber", url: `${SITE_URL}/de/guides` },
          { name: "Luxus in Namibia", url: `${SITE_URL}/de/luxury-namibia` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Ratgeber
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Luxus in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Eine Luxusreise durch Namibia sieht weniger nach Fünf-Sterne-Hotel aus als nach
          vollständigem, privatem Zugang zur Landschaft. Hier erfahren Sie, was sich tatsächlich
          ändert, wenn Sie mehr ausgeben.
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
            href="/de/best-luxury-lodges"
            className="group inline-flex items-center gap-3 rounded-full bg-rust px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-colors hover:bg-rust-dark"
          >
            Die besten Luxus-Lodges ansehen
            <CardArrow className="bg-ivory/20 text-ivory group-hover:bg-ivory group-hover:text-rust" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
