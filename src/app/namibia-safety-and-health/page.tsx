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
  alternates: { canonical: "/namibia-safety-and-health", languages: { en: "/namibia-safety-and-health", de: "/de/namibia-safety-and-health", nl: "/nl/namibia-safety-and-health", fr: "/fr/namibia-safety-and-health" } },
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
    text: "Concentrated in Windhoek and, to a lesser degree, Walvis Bay, mostly after dark: both the US State Department and UK FCDO flag pickpocketing, bag-snatching, and smash-and-grabs from unoccupied parked cars as the most common incidents affecting visitors. Both rate Namibia at their equivalent of “exercise increased caution,” the same tier as much of Western Europe, not a serious-risk rating. Isolated armed robberies and home invasions happen, but in residential and business areas, not on tourist routes. Use hotel safes, don't leave bags visible in parked cars, and take a taxi rather than walk after dark in city centres. Outside towns, on lodge and self-drive routes, it is close to a non-issue.",
  },
  {
    title: "Road safety",
    text: (
      <>
        The real risk for most visitors, and it isn&apos;t close. Namibia has roughly 12,000 km
        of gravel road, and the standing advice from the FCDO and local operators alike is to
        stay under 60&ndash;80 km/h on gravel regardless of the posted limit: the most common
        serious incident for self-drive tourists is a single-vehicle rollover from taking a
        corrugated or sandy corner too fast, not a collision with another car. Add long,
        service-free stretches, fatigue, and animals crossing at dusk and dawn, and the pattern is
        clear: slow down, avoid driving after dark outside towns, and carry a spare tyre and extra
        water. See our{" "}
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
    text: "Widely reported as comfortable by solo travellers, including solo women, especially on organised routes and at lodges. Violent crime targeting tourists is rare enough that both the US and UK advisories treat it as the exception, not the pattern. Standard precautions apply in Windhoek and Walvis Bay after dark, as anywhere.",
  },
  {
    title: "Wildlife encounters",
    text: (
      <>
        Real but manageable with guide instruction: stay in vehicles in game areas unless told
        otherwise, never approach animals at waterholes near lodges, and follow camp staff
        guidance on walking after dark where elephants or hyenas are known to pass through. One
        specific worth knowing: Namibia&apos;s Cape fur seal colonies, Cape Cross among them, have
        had documented rabies cases in the seal population, so keep your distance and treat any
        bite or scratch, however minor, as an emergency needing immediate medical attention
        regardless of prior vaccination. See our{" "}
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
  {
    title: "Medical care & evacuation",
    text: "Lodges in the Namib, Kaokoland, or the Zambezi region can be hours by road, or a light-aircraft flight, from the nearest trauma-capable hospital, so this isn't optional planning. Medical Rescue Africa (MRA) is Namibia's own aeromedical evacuation and ambulance provider, and many lodges and operators already work with them, but travel insurance is still what pays the bill. If you already hold an AMREF Flying Doctors membership from an East Africa trip, note it does not cover Namibia, Botswana, or South Africa: confirm your policy explicitly includes medical evacuation valid in Southern Africa before you fly.",
  },
];

const FAQS = [
  {
    q: "Is Namibia safe to visit?",
    a: "Yes. Both the US State Department and UK FCDO rate Namibia at their “exercise increased caution” tier, the same tier as much of Western Europe, not a serious-risk rating. Its real risks are road safety (long distances, gravel, single-vehicle rollovers, and wildlife on roads at dusk) and ordinary city-level petty crime in Windhoek and Walvis Bay, not violent crime targeting travellers.",
  },
  {
    q: "Do I need malaria tablets for Namibia?",
    a: "It depends on where you're going and when. The CDC lists Kavango East, Kavango West, Kunene, Ohangwena, Omaheke, Omusati, Oshana, Oshikoto, Otjozondjupa, and Zambezi as malaria-risk regions, broadly the northern third of the country including northern Etosha and the Zambezi (Caprivi) region, and risk is highest in the rainy season (roughly November to April). There is no malaria transmission in Windhoek, and risk is low across Sossusvlei, Swakopmund, and most of central and southern Namibia year-round. Namibia also saw a sharp rise in cases in early 2026, concentrated in the Zambezi and Kavango regions, so check current conditions with a travel doctor alongside your specific itinerary and dates. This is general information, not medical advice.",
  },
  {
    q: "Is Namibia safe for solo female travellers?",
    a: "Commonly reported as comfortable, particularly for lodge-based or organised self-drive trips; the same advisories that flag Namibia's petty crime don't single out any elevated risk for solo women. Standard urban precautions apply in Windhoek and Walvis Bay after dark, same as any city.",
  },
  {
    q: "What vaccinations do I need for Namibia?",
    a: "There's no universal list, but the CDC's standing recommendations for Namibia are hepatitis A, hepatitis B, and typhoid for most travellers, on top of routine vaccines (MMR, polio, and so on). Rabies pre-exposure vaccination is worth discussing if you'll be cycling, caving, or handling animals, and is especially relevant given documented rabies cases in Namibia's Cape fur seal colonies. Yellow fever vaccination isn't required for direct travel from Europe or North America, but proof of vaccination can be required if you're arriving from a country with yellow fever risk. Check with a travel health clinic four to six weeks before departure: itinerary and personal health history change the answer. This is general information, not medical advice.",
  },
  {
    q: "What about medical evacuation insurance?",
    a: "Take it seriously given how remote some lodges are. Namibia has its own aeromedical evacuation provider, Medical Rescue Africa (MRA), which many lodges and operators already work with, but you still need travel insurance that explicitly covers medical evacuation within Namibia. If you're combining this trip with East Africa and already carry an AMREF Flying Doctors membership, know that it does not extend to Namibia, Botswana, or South Africa. Confirm coverage before you go, not after.",
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
              "CDC- and WHO-listed higher-risk regions: Kavango East, Kavango West, Kunene, Ohangwena, Omaheke, Omusati, Oshana, Oshikoto, Otjozondjupa, and Zambezi, i.e. the northern strip of the country including northern Etosha and the Zambezi (Caprivi) panhandle",
              "No malaria transmission in Windhoek, and low or rare risk across Sossusvlei, Fish River Canyon, the Skeleton Coast, and most of central and southern Namibia",
              "Risk is highest in the rainy season (Nov–Apr); stretches along the Kunene, Zambezi, and Okavango rivers carry some risk year-round",
              "Namibia's Ministry of Health recorded a sharp rise in cases in early 2026, concentrated in Zambezi, Kavango East, and Kavango West, prompting a WHO-supported response: if your route touches these regions, treat prophylaxis as non-negotiable, not optional",
              "Prophylaxis choice (commonly atovaquone-proguanil, doxycycline, or mefloquine) depends on your itinerary, dates, and medical history: a travel doctor should confirm, not a general guide",
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
