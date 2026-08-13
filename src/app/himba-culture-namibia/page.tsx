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
  alternates: { canonical: "/himba-culture-namibia", languages: { en: "/himba-culture-namibia", de: "/de/himba-culture-namibia", nl: "/nl/himba-culture-namibia", fr: "/fr/himba-culture-namibia", it: "/it/himba-culture-namibia" } },
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
    text: "Always ask an individual directly before photographing them, even in a setting where photography is broadly permitted. A nod from a guide isn't the same as consent from the person in the frame, and being waved through by an intermediary doesn't substitute for the person's own yes.",
  },
  {
    title: "Bring supplies, not cash",
    text: "Cash is close to useless days from the nearest shop and isn't a traditional part of how the Himba transact, so it's a poor way to compensate a community for its time. The stronger norm, followed by community-run guides in Opuwo, is to stop at a supermarket with your guide before the visit and buy staples the guide selects: maize meal, sugar, cooking oil, tea or coffee. Budget roughly N$500 worth of food for two visitors, more for a larger group, and let your guide judge the right amount rather than skimping.",
  },
  {
    title: "Know the difference between a 'living museum' and a real village",
    text: "Some stops are staged demonstrations set up specifically for tourism, distinct from where people actually live day to day. Neither is inherently wrong, and a living museum can still be a legitimate, community-owned source of income, but you should know which one you're visiting and ask your guide directly rather than assume.",
  },
  {
    title: "Follow the community's lead on what's shared",
    text: "Sacred fires, certain rituals, and specific areas of a homestead may not be for visitors regardless of what's offered elsewhere. A respectful visit follows the community's boundaries, not the itinerary's, and a good guide will tell you what's off-limits before you arrive, not improvise in the moment.",
  },
];

const FAQS = [
  {
    q: "Who are the Himba people?",
    a: "The Himba are a semi-nomadic pastoralist people living primarily in Kaokoland, in Namibia's northern Kunene region, known for cattle-herding and a distinct visual identity: most notably the otjize paste (a mixture of butterfat and ochre) many women apply to skin and hair. They are one of Namibia's smaller ethnic groups and among the country's most photographed, which itself creates real ethical tension worth being aware of before you visit.",
  },
  {
    q: "Is it okay to visit a Himba village as a tourist?",
    a: "It can be, done respectfully and through a proper channel: a guide with a genuine community relationship, informed consent for any photography, and compensation that reaches the people you're visiting in a form they actually want, which in practice usually means food staples bought together with your guide rather than cash. It's worth being honest with yourself about whether a given stop is genuine cultural exchange or a staged photo opportunity, and choosing accordingly.",
  },
  {
    q: "What's the difference between a 'living museum' and visiting a real Himba homestead?",
    a: "A living museum is a demonstration set up specifically to show visitors traditional Himba life, often distinct from where the same community actually lives day to day. It can still be a legitimate, community-run source of income, but it's a different experience from an organic visit to a working homestead, and operators should be upfront about which one you're booking.",
  },
  {
    q: "Where in Namibia can I visit Himba communities, and who should I book through?",
    a: "Mainly in and around Kaokoland and the wider Kunene region, in Namibia's northwest, reachable as an extension from Damaraland for travellers with the extra days and, usually, a 4x4. The town of Opuwo is the practical hub: it's home to guide services such as the Kaoko Information Centre, run by Himba people for the Himba, where a guide will take you to buy provisions locally before the visit itself. It's a genuine detour, not a stop on the classic circuit, so it needs deliberate planning rather than being squeezed in.",
  },
  {
    q: "What should I bring or buy for a Himba community visit?",
    a: "Practical food staples rather than cash or western trinkets: maize meal, sugar, cooking oil, tea or coffee are the items communities themselves ask for, since they're semi-nomadic and these goods aren't always easy to restock. The norm followed by community-run guides is to buy these together at a supermarket in Opuwo immediately before the visit, so the community sees exactly what's being brought and the guide can judge fair quantities for the size of the group.",
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
          <h2 className="text-xl font-bold text-charcoal">Our recommendation</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            None of this is a reason to avoid Kaokoland or the Kunene region: it&apos;s a reason to
            go through operators and guides who have real, ongoing relationships with specific
            communities, rather than a generic stop added to an itinerary. In practice, that means
            basing yourself in or routing through Opuwo and using a Himba-run guide service such as
            the Kaoko Information Centre rather than booking a village stop as an anonymous add-on
            through a coastal tour desk. Most visits are arranged as an extension from{" "}
            <Link
              href="/where-to-stay/damaraland"
              className="font-semibold text-rust hover:text-rust-dark"
            >
              Damaraland stays
            </Link>
            , adding at least a day each way of driving, much of it on gravel. Ask your guide
            directly what the visit will involve, whether you&apos;ll buy provisions together
            beforehand, and how photography consent works on the day, before you book rather than
            once you&apos;re standing at the homestead.
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
