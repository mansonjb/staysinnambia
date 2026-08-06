import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Namibia Safety & Health Guide",
  description:
    "An honest look at Namibia's real risks: petty crime, road safety, and where malaria is actually a concern, versus the parts of the country that aren't.",
  alternates: { canonical: "/namibia-safety-and-health", languages: { en: "/namibia-safety-and-health", de: "/de/namibia-safety-and-health", nl: "/nl/namibia-safety-and-health" } },
  openGraph: {
    title: "Namibia Safety & Health Guide",
    description:
      "An honest look at Namibia's real risks: petty crime, road safety, and where malaria is actually a concern, versus the parts of the country that aren't.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const SAFETY_POINTS = [
  {
    title: "Petty crime",
    text: "Concentrated in city areas (Windhoek and Swakopmund mainly) and follows normal-city rules: don't display valuables, use hotel safes, take a taxi at night rather than walking. Outside towns, on lodge and self-drive routes, it is a non-issue.",
  },
  {
    title: "Road safety",
    text: (
      <>
        The bigger real risk for most visitors. Long distances, gravel surfaces, and wildlife
        crossing roads at dusk/night mean vehicle accidents are the most common serious incident
        for travellers, not crime. See our{" "}
        <Link
          href="/namibia-self-drive-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          self-drive guide
        </Link>{" "}
        for specifics.
      </>
    ),
  },
  {
    title: "Solo and solo-female travel",
    text: "Widely reported as comfortable by solo travellers, including solo women, especially on organised routes and at lodges. Standard precautions apply in city areas after dark, as anywhere.",
  },
  {
    title: "Wildlife encounters",
    text: (
      <>
        Real but manageable with guide instruction: stay in vehicles in game areas unless told
        otherwise, never approach animals at waterholes near lodges, and follow camp staff
        guidance on walking after dark where elephants or hyenas are known to pass through. See
        our{" "}
        <Link
          href="/namibia-wildlife-guide"
          className="font-medium text-rust hover:text-rust-dark"
        >
          wildlife guide
        </Link>{" "}
        for what to expect region by region.
      </>
    ),
  },
];

const FAQS = [
  {
    q: "Is Namibia safe to visit?",
    a: "Yes, by regional standards Namibia is considered one of the safer countries in Southern Africa for tourists. Its real risks are road safety (long distances, gravel, wildlife on roads at night) and ordinary city-level petty crime, not violent crime targeting travellers.",
  },
  {
    q: "Do I need malaria tablets for Namibia?",
    a: "It depends on where you're going and when. Malaria risk in Namibia is concentrated in the north (Etosha's northern areas, the Zambezi (Caprivi) region) and is highest in the rainy season (roughly November to April). Central and southern Namibia, including Sossusvlei, Swakopmund, and Windhoek, are low or no risk year-round. Consult a travel doctor with your specific itinerary and dates. This is general information, not medical advice.",
  },
  {
    q: "Is Namibia safe for solo female travellers?",
    a: "Commonly reported as comfortable, particularly for lodge-based or organised self-drive trips. Standard urban precautions apply in Windhoek and Swakopmund after dark, same as any city.",
  },
  {
    q: "What vaccinations do I need for Namibia?",
    a: "There's no universal list: requirements depend on your home country, itinerary, and personal health history. Yellow fever certification may be required if arriving from a country with risk of transmission. Check with a travel health clinic well before departure.",
  },
];

export default function SafetyHealthPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Safety & Health", url: `${SITE_URL}/namibia-safety-and-health` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Is Namibia safe? Safety & health
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia ranks among the safer countries in Southern Africa to travel in, but &quot;safe&quot;
          isn&apos;t the same as &quot;risk-free.&quot; Here&apos;s where the real risks actually sit.
        </p>
        <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          General information only, not medical or safety advice. Consult a travel health
          professional and your government&apos;s travel advisory before you go.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SAFETY_POINTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <h2 className="text-lg font-bold text-charcoal">{p.title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">Malaria: the region-by-region reality</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Higher-risk: northern Etosha, the Zambezi (Caprivi) region, especially in the rainy season (Nov–Apr)",
              "Low/no risk: Windhoek, Swakopmund, Sossusvlei, Fish River Canyon, most of central and southern Namibia",
              "Prophylaxis needs depend on your itinerary and dates: a travel doctor should confirm, not a general guide",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
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
        </Reveal>
      </section>
    </>
  );
}
