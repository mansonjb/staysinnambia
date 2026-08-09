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
  alternates: { canonical: "/namibia-with-kids", languages: { en: "/namibia-with-kids", de: "/de/namibia-with-kids", nl: "/nl/namibia-with-kids", fr: "/fr/namibia-with-kids" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const NOTES = [
  "Minimum ages vary by lodge, not by a single national rule: Mushara Bush Camp near Etosha's eastern gate accepts children of any age on guided drives, while many other camps set a floor around 6–8 (some as high as 12) for shared game-drive vehicles. Confirm the exact age policy directly with the lodge you're booking, since it can change between sister properties.",
  "Malaria risk is real but concentrated, not uniform. It's present year-round along the Kunene, Zambezi and Okavango rivers (so the Caprivi Strip and the far northwest), and seasonally, roughly November to June, across Etosha and Namibia's other northern regions. Most of the classic Sossusvlei–Swakopmund–Damaraland circuit further south and west carries little to no risk. Confirm current, region-specific guidance with a travel clinic before you decide on antimalarials.",
  "Self-drive days are long: plan rest stops and keep individual driving legs under 4–5 hours with young children. Etosha's gates sit roughly 4.5 hours from Windhoek and Damaraland's gravel legs can run 3–4 hours each, so treat those as full driving days rather than squeezing them around activities.",
  "Etosha's floodlit waterhole camps, inside the park at Okaukuejo and Halali, or on the private reserves bordering it (Ongava, Onguma), let kids watch elephant, rhino and lion come to drink after dark from the safety of the lodge, with no game drive required.",
  "Guided walks and cultural visits (Twyfelfontein's rock engravings, a Himba village visit further north) tend to suit a wider age range than a bumpy multi-hour game-tracking drive. Ask the lodge which of its activities are realistic for your kids' specific ages when you book, not once you're there.",
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
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Mushara Lodge sits close to Etosha&apos;s eastern gate with family-friendly suites and
            a sister property nearby if you need more space. Kulala Desert Lodge shares its private
            reserve with Little Kulala at a more accessible price tier, so kids still get a private
            gate into Namib-Naukluft Park. Villa Violet is a small, owner-run Windhoek guesthouse
            with a self-catering option, a low-key bookend before or after the circuit. Canyon
            Lodge, near Fish River Canyon, is rustic-but-comfortable and a good base if hiking or
            the south is part of your route.
          </p>
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
