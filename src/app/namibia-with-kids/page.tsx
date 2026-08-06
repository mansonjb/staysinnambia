import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { Reveal } from "@/components/reveal";
import { getLodgesByCategory } from "@/lib/data";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Namibia with Kids";
const DESCRIPTION =
  "Planning notes for a Namibia family trip: which lodges work well with children, and what to know before you go.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/namibia-with-kids", languages: { en: "/namibia-with-kids", de: "/de/namibia-with-kids", nl: "/nl/namibia-with-kids" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const NOTES = [
  "Many safari lodges set a minimum age (often 6–8) for game drives: check before booking, not on arrival.",
  "Malaria risk is concentrated in the north (Etosha and the Caprivi Strip) and highest in the rainy season (roughly November to April); most of the rest of the country is low-risk, but confirm current guidance with a travel clinic.",
  "Self-drive days are long: plan rest stops and keep individual driving legs under 4–5 hours with young children.",
  "Etosha's floodlit waterhole camps let kids watch wildlife from the safety of the lodge, without a game drive required.",
];

export default function KidsPage() {
  const familyLodges = getLodgesByCategory("family");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Guides", url: `${SITE_URL}/guides` },
          { name: "Namibia with Kids", url: `${SITE_URL}/namibia-with-kids` },
        ])}
      />
      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia with kids
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia works well as a family safari destination:{" "}
          <Link
            href="/namibia-self-drive-guide"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            self-driving at your own pace
          </Link>{" "}
          means shorter, flexible driving days, and many lodges are set up for interleading
          family rooms. A few practical things, including{" "}
          <Link
            href="/namibia-safety-and-health"
            className="text-rust underline underline-offset-2 hover:text-rust-dark"
          >
            where malaria is and isn&apos;t a concern
          </Link>
          , are worth knowing before you book.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
        <Reveal className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <ul className="space-y-3">
            {NOTES.map((n) => (
              <li key={n} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-8 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal">Lodges that work well for families</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {familyLodges.map((lodge, i) => (
            <Reveal key={lodge.slug} delay={i * 60}>
              <Link
                href={`/lodges/${lodge.slug}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div>
                  <p className="font-serif text-xl italic text-charcoal">{lodge.name}</p>
                  <p className="mt-1 text-[13px] text-charcoal/50">{lodge.region}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
