import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Extending Your Namibia Trip",
  description:
    "Namibia pairs naturally with a handful of neighbouring highlights: here's how travellers actually extend their trip, and what each add-on costs in extra time.",
  alternates: { canonical: "/namibia-trip-extensions", languages: { en: "/namibia-trip-extensions", de: "/de/namibia-trip-extensions", nl: "/nl/namibia-trip-extensions", fr: "/fr/namibia-trip-extensions", it: "/it/namibia-trip-extensions" } },
  openGraph: {
    title: "Extending Your Namibia Trip",
    description:
      "Namibia pairs naturally with a handful of neighbouring highlights: here's how travellers actually extend their trip, and what each add-on costs in extra time.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const EXTENSIONS = [
  {
    place: "Victoria Falls (Zambia/Zimbabwe)",
    text: "The most common Namibia add-on, and usually flown rather than driven. A direct flight from Windhoek to Victoria Falls airport (VFA) runs a little over an hour in the air, though realistic door-to-door time with a connection is closer to half a day. Self-driving is possible but long: it's roughly 1,228km and a full 12 hours of driving from Windhoek to Katima Mulilo at the eastern tip of the Zambezi Region (most self-drivers split it over 2 days, overnighting in Rundu), then a further border crossing and drive to the falls themselves. Once there, budget a minimum of 2 nights to properly see both the Zambian and Zimbabwean sides, which are genuinely different viewpoints of the same falls.",
    time: "+3–4 days minimum",
  },
  {
    place: "Chobe National Park & the Okavango Delta (Botswana)",
    text: (
      <>
        A natural link from our Zambezi Region (formerly Caprivi Strip), which borders Chobe
        directly across the Ngoma Bridge border post (open 07:00–18:00 daily), roughly 55km from
        Kasane and about 70km from Katima Mulilo on the Namibian side. For the Okavango Delta and
        Maun, most self-drivers instead cross further west at Mohembo border post (open
        06:00–18:00), south of Divundu, then continue around 580km to Maun through the Okavango
        Panhandle, partly on gravel that&apos;s manageable in a sedan in the dry season but can
        get soft after heavy rain. See our{" "}
        <Link href="/namibia-vs-botswana" className="font-semibold text-rust hover:text-rust-dark">
          Namibia vs Botswana comparison
        </Link>{" "}
        for what changes once you cross: mainly, expect fly-in camps and a higher cost tier than
        Namibia&apos;s self-drive circuit.
      </>
    ),
    time: "+4–7 days",
  },
  {
    place: "Cape Town & the Garden Route (South Africa)",
    text: "Usually bookended rather than combined mid-trip: many travellers fly into or out of Cape Town before or after their Namibia loop, treating it as a separate city stay rather than an extension of the self-drive itself. It's an easy add-on logistically: a direct flight from Windhoek to Cape Town takes a little over 2 hours, with several flights a day on the route.",
    time: "+3–5 days",
  },
];

const FAQS = [
  {
    q: "Can I drive from Namibia to Victoria Falls?",
    a: "Technically yes, via the Zambezi Region (the old Caprivi Strip) and across into Zambia or Botswana, but it's a genuinely long, multi-day drive most travellers skip in favour of a domestic flight from Windhoek or Katima Mulilo. As a reference point, Windhoek to Katima Mulilo alone is roughly 1,228km and 12 hours of driving, usually split over 2 days with an overnight in Rundu, and that's before you've crossed a border. Flying is the practical default for this specific extension unless you're already road-tripping the Zambezi Region as part of your Namibia route.",
  },
  {
    q: "Do I need a separate visa for these extensions?",
    a: "Yes, in every case: Zambia, Zimbabwe, Botswana and South Africa each have their own entry requirements, separate from Namibia's (which itself moved to a mandatory online Visa on Arrival application on 1 April 2025, and has continued to update its eligible-nationality list since). If your extension covers both Zambia and Zimbabwe, the joint KAZA UniVisa (around US$50, valid for 30 days across both countries within a 12-month period) is usually the simplest option and also covers day trips into Botswana via the Kazungula border post, though an overnight stay in Botswana requires that country's own separate entry permission. Check requirements for your specific nationality and each country well before booking flights, alongside our own Namibia visa requirements guide.",
  },
  {
    q: "How many extra days should I budget for a Victoria Falls extension?",
    a: "A minimum of 3–4 days total, including travel: that covers a flight each way (a little over an hour in the air from Windhoek to Victoria Falls airport, longer door-to-door with a connection) plus 2 nights to properly see the falls from both the Zambian and Zimbabwean viewpoints, which are genuinely different experiences worth the extra border crossing.",
  },
  {
    q: "Is it better to extend into Botswana or fly straight to Victoria Falls?",
    a: "Depends on what you want more of. Botswana extends the safari experience with denser wildlife viewing, particularly around Chobe National Park, reached from Namibia's Zambezi Region via the Ngoma Bridge border post; Victoria Falls is a standalone landmark with little overlap with what you've already seen in Namibia. Many longer, 3-week-plus trips do both, crossing into Chobe by road and then flying on to the falls.",
  },
];

export default function TripExtensionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Trip Extensions", url: `${SITE_URL}/namibia-trip-extensions` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Extending your Namibia trip
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Namibia borders some of Southern Africa&apos;s biggest highlights. Here&apos;s how
          travellers actually add them on, and what each one really costs in time.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Our recommendation:</span> if your route
          already ends in the Zambezi Region, a short fly-in extension to Victoria Falls or a
          Chobe day trip across the Ngoma border adds relatively little extra travel time for a
          genuinely different landscape. If your Namibia loop is entirely in the south and centre
          (Sossusvlei, Etosha, the coast), tacking on Cape Town at either end of the trip is the
          lower-friction option logistically, since it doesn&apos;t require backtracking across the
          country to reach a border.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6">
          {EXTENSIONS.map((e, i) => (
            <Reveal
              key={e.place}
              delay={i * 60}
              className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-charcoal">{e.place}</h2>
                <span className="rounded-full bg-sand/30 px-3 py-1 text-[12px] font-semibold text-charcoal/70">
                  {e.time}
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{e.text}</p>
            </Reveal>
          ))}
        </div>
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
            href="/namibia-vs-botswana"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibia vs Botswana
          </Link>
        </Reveal>
      </section>
    </>
  );
}
