import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Namibia Visa Requirements",
  description:
    "What changed in April 2025: Namibia's new online Visa-on-Arrival system, who still needs one, the $90 fee, and what documents to bring.",
  alternates: { canonical: "/namibia-visa-requirements", languages: { en: "/namibia-visa-requirements", de: "/de/namibia-visa-requirements", nl: "/nl/namibia-visa-requirements", fr: "/fr/namibia-visa-requirements" } },
  openGraph: {
    title: "Namibia Visa Requirements",
    description:
      "What changed in April 2025: Namibia's new online Visa-on-Arrival system, who still needs one, the $90 fee, and what documents to bring.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const FAQS = [
  {
    q: "Do I need a visa for Namibia?",
    a: "It depends on nationality. Namibia keeps roughly 55 countries fully visa-exempt for short tourist stays, including its immediate SADC neighbours South Africa, Botswana, Zambia and Zimbabwe, plus a further 18 countries under reciprocal visa-waiver agreements. Most other nationalities, including the majority of EU countries, the UK, and the US, are eligible for a Visa on Arrival (VoA), but since 1 April 2025 that visa has to be applied for and approved online before you fly, not issued on the spot at the airport.",
  },
  {
    q: "What changed on 1 April 2025, and has anything changed since?",
    a: "Namibia's Ministry of Home Affairs, Immigration, Safety and Security (MHAISS) moved the Visa on Arrival scheme to a mandatory pre-arrival online application, submitted through its eServices portal. Travellers who are VoA-eligible can no longer simply queue at immigration and pay cash: the application, payment and approval now happen before departure, similar to an eTA. The system has kept evolving since launch: MHAISS added 36 additional eligible nationalities to the online VoA list in October 2025, and the eligibility framework has continued to see incremental updates through 2026. Because the list can move, always check your specific nationality on the official portal close to your travel date rather than relying on last year's list.",
  },
  {
    q: "How much does the Namibia Visa on Arrival cost?",
    a: "The published fee is NAD 1,600 (roughly US$90 at current exchange rates) for most non-African nationalities, and a discounted NAD 1,200 (roughly US$65–70) for nationals of other African Union member states. It's paid online, in Namibian dollars, at the time of application. The visa is valid for 3 months from the date of issue and permits a stay of up to 30 days per entry.",
  },
  {
    q: "What documents do I need to apply?",
    a: "A passport valid for at least 6 months beyond your travel dates with blank pages free for the visa; a short motivation/purpose-of-visit letter; a confirmed accommodation booking or invitation letter; a bank statement or other proof of sufficient funds for your stay; and proof of travel or medical insurance covering your trip. Some applicants are also asked for onward or return flight confirmation. Requirements can shift, so confirm the current list on Namibia's official eServices immigration portal before you apply.",
  },
  {
    q: "How long does approval actually take?",
    a: "MHAISS's own guidance points to roughly 7–10 working days for online applications, though independent immigration advisers have reported everything from same-day approval to longer waits during periods of portal maintenance or high demand. Treat 7–10 working days as the planning baseline, apply at least 2–3 weeks before departure, and build in a buffer if you're travelling in peak season (July–September) when application volumes are highest.",
  },
];

export default function VisaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Visa Requirements", url: `${SITE_URL}/namibia-visa-requirements` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide · Updated for 2026
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Namibia visa requirements
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          Since 1 April 2025, Namibia&apos;s Visa on Arrival is no longer issued at the border:
          it has to be applied for, paid, and approved online through the Ministry of Home
          Affairs&apos; eServices portal before you fly. The eligible-nationality list has kept
          growing since then, most recently with 36 countries added in October 2025. A lot of
          older guides still describe the pre-2025 pay-at-the-airport system. Here&apos;s what
          applies now, and how the roughly $90 fee fits into the rest of your{" "}
          <Link href="/namibia-trip-cost" className="font-medium text-rust hover:text-rust-dark">
            trip budget
          </Link>
          .
        </p>
        <p className="mt-4 max-w-2xl text-[12px] uppercase tracking-[0.08em] text-charcoal/40">
          This page summarises publicly reported policy changes and immigration-adviser
          commentary, and is not immigration advice. Rules, fees and eligible-nationality lists
          have changed multiple times since April 2025 and can change again. Always verify current
          requirements for your specific nationality directly with Namibia&apos;s official
          immigration authority (MHAISS, via its eServices portal) before booking flights or
          paying any visa fee.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: "Visa on Arrival fee", value: "US$90" },
            { label: "Validity from issue", value: "3 months" },
            { label: "Maximum stay", value: "30 days" },
          ].map((stat) => (
            <Reveal
              key={stat.label}
              className="rounded-2xl border border-black/5 bg-white p-7 text-center shadow-sm"
            >
              <p className="font-serif text-4xl italic text-rust">{stat.value}</p>
              <p className="mt-2 text-[13px] uppercase tracking-[0.1em] text-charcoal/50">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h2 className="text-xl font-bold text-charcoal">What you&apos;ll need to apply</h2>
          <ul className="mt-5 space-y-3">
            {[
              "Passport valid 6+ months beyond your travel dates, with blank pages free for the visa",
              "A short motivation letter stating the purpose of your visit",
              "Confirmed accommodation booking (or a formal invitation letter if staying with contacts)",
              "Bank statement or other proof of sufficient funds for your stay",
              "Proof of travel or medical insurance covering the trip",
              "Onward or return flight confirmation, if requested during the application",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-[14px] text-charcoal/70">
                <MetaIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13px] leading-relaxed text-charcoal/50">
            Applications are submitted through Namibia&apos;s official government portal at{" "}
            <span className="font-medium text-charcoal/70">eservices.mhaiss.gov.na</span>, run by
            the Ministry of Home Affairs, Immigration, Safety and Security. Avoid third-party
            sites that charge a mark-up for the same application.
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
        </Reveal>
      </section>
    </>
  );
}
