import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visiting Himba Communities",
  description:
    "Who the Himba are, where they live, and how to visit respectfully: the real difference between a staged 'living museum' stop and community-run tourism.",
  alternates: { canonical: "/himba-culture-namibia", languages: { en: "/himba-culture-namibia", de: "/de/himba-culture-namibia", nl: "/nl/himba-culture-namibia" } },
  openGraph: {
    title: "Visiting Himba Communities",
    description:
      "Who the Himba are, where they live, and how to visit respectfully: the real difference between a staged 'living museum' stop and community-run tourism.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const PRINCIPLES = [
  {
    title: "Ask before you photograph",
    text: "Always ask an individual directly before photographing them, even in a setting where photography is broadly permitted. A nod from a guide isn't the same as consent from the person in the frame.",
  },
  {
    title: "Expect to pay, and pay directly where possible",
    text: "A fee or purchase of crafts is normal and appropriate for a visit: this is someone's home and time, not a free photo opportunity. Ask your guide how payment reaches the community directly rather than assuming a lodge fee covers it.",
  },
  {
    title: "Know the difference between a 'living museum' and a real village",
    text: "Some stops are staged demonstrations set up specifically for tourism, distinct from where people actually live day to day. Neither is inherently wrong, but you should know which one you're visiting and what that means for how genuine the interaction is.",
  },
  {
    title: "Follow the community's lead on what's shared",
    text: "Sacred fires, certain rituals, and specific areas of a homestead may not be for visitors regardless of what's offered elsewhere. A respectful visit follows the community's boundaries, not the itinerary's.",
  },
];

const FAQS = [
  {
    q: "Who are the Himba people?",
    a: "The Himba are a semi-nomadic pastoralist people living primarily in Kaokoland, in Namibia's northern Kunene region, known for cattle-herding and a distinct visual identity: most notably the otjize paste (a mixture of butterfat and ochre) many women apply to skin and hair. They are one of Namibia's smaller ethnic groups and among the country's most photographed, which itself creates real ethical tension worth being aware of before you visit.",
  },
  {
    q: "Is it okay to visit a Himba village as a tourist?",
    a: "It can be, done respectfully and through a proper channel: a guide with a genuine community relationship, informed consent for any photography, and fair payment that reaches the people you're visiting rather than only an intermediary. It's worth being honest with yourself about whether a given stop is genuine cultural exchange or a staged photo opportunity, and choosing accordingly.",
  },
  {
    q: "What's the difference between a 'living museum' and visiting a real Himba homestead?",
    a: "A living museum is a demonstration set up specifically to show visitors traditional Himba life, often distinct from where the same community actually lives day to day. It can still be a legitimate, community-run source of income, but it's a different experience from an organic visit to a working homestead, and operators should be upfront about which one you're booking.",
  },
  {
    q: "Where in Namibia can I visit Himba communities?",
    a: "Mainly in and around Kaokoland and the wider Kunene region, in Namibia's northwest, reachable as an extension from Damaraland for travellers with the extra days and, usually, a 4x4. It's a genuine detour, not a stop on the classic circuit, so it needs deliberate planning rather than being squeezed in.",
  },
];

export default function HimbaCulturePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Himba Culture", url: `${SITE_URL}/himba-culture-namibia` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Visiting Himba communities in Namibia
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          This is one of the more genuinely sensitive parts of planning a Namibia trip, and we&apos;d
          rather address it directly than leave it out. Here&apos;s who the Himba are, and how to
          visit (if you visit) with real respect.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <MetaIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-olive" />
                <div>
                  <h2 className="text-[14px] font-bold text-charcoal">{p.title}</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <p className="text-[14px] leading-relaxed text-charcoal/70">
            None of this is a reason to avoid Kaokoland or the Kunene region: it&apos;s a reason to
            go through operators and guides who have real, ongoing relationships with specific
            communities, rather than a generic stop added to an itinerary. Most visits are arranged
            as an extension from{" "}
            <Link
              href="/where-to-stay/damaraland"
              className="font-semibold text-rust hover:text-rust-dark"
            >
              Damaraland stays
            </Link>
            , so ask your guide directly how payment reaches the community and what the visit will
            actually involve before you book.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4">
          {FAQS.map((faq, i) => (
            <Reveal
              key={faq.q}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-charcoal">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{faq.a}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-10 sm:px-10">
        <Reveal className="flex flex-wrap gap-3">
          {popularGuides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
            >
              {g.title}
            </Link>
          ))}
          <Link
            href="/where-to-stay/damaraland"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Where to Stay in Damaraland
          </Link>
        </Reveal>
      </section>
    </>
  );
}
