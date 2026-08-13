import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo-mark";
import { MetaIcon } from "@/components/meta-icon";
import { popularGuides } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

const TITLE = "Why Visit Namibia in 2027";
const DESCRIPTION =
  "An honest case for a 2027 Namibia trip: what's genuinely different this year, a season-by-season timing breakdown, and a deep, original honeymoon planning section.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/why-visit-namibia-2027",
    languages: {
      en: "/why-visit-namibia-2027",
      de: "/de/why-visit-namibia-2027",
      nl: "/nl/why-visit-namibia-2027",
      fr: "/fr/why-visit-namibia-2027",
      it: "/it/why-visit-namibia-2027",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

const REASONS_2027 = [
  {
    title: "Prices have already reset, not about to jump again",
    text: "Namibia's national park entry fees rose sharply on 1 April 2026, an 86% jump that was the first increase since 2021. That's the kind of change that catches travellers who planned off an older guide off guard. A 2027 trip is priced on the new normal from day one: you're budgeting against the current fee structure, not an outdated one, and history suggests another jump this size isn't due again for a few years.",
  },
  {
    title: "Etosha's big diversion should finally be clearing",
    text: "A road-upgrade project closed the direct route between Okaukuejo and Halali, with a mandatory diversion in effect from 2 June 2026 through July 2027. Visit early in 2027 and you're still routing via the Gemsbokvlakte bypass and Rhino Drive; visit in the second half of the year and there's a real chance the direct route has reopened. Either way, confirm current status with NWR before you travel, since construction timelines shift, but 2027 is the year this specific headache is scheduled to end.",
  },
  {
    title: "Recognition is fresh, but the crowds haven't caught up yet",
    text: "Namibia was named one of Lonely Planet's top places to visit in Best in Travel 2026, for its desert-adapted elephants and conservation-led tourism, and Shipwreck Lodge received a Michelin Key in the guide's inaugural Global Michelin Keys Selection in 2025. Both are genuine, recent marks of a country entering a higher tier of international attention. That kind of recognition typically takes a few years to translate into fuller camps and steeper rates. 2027 sits early in that window, after the recognition but before the wider effects of it.",
  },
  {
    title: "The visa system has settled down",
    text: "Since 1 April 2025, Namibia's Visa on Arrival has required a mandatory online pre-application rather than a pay-at-the-airport process, and the eligible-nationality list grew again in October 2025 with 36 more countries added. By 2027 that transition is no longer new: the online system has had roughly two years to iron out its early friction, and most nationalities that plan to travel already know whether they need to apply and what it costs. Confirm your own nationality's status on the official portal before booking, since the list can still move.",
  },
  {
    title: "A quieter year before the 2030 eclipse rush",
    text: "Namibia's next total solar eclipse isn't until 25 November 2030, when the path of totality is set to sweep across Namibia, Botswana, South Africa, Lesotho and Australia. That's still years off, but astro-tourism operators and dark-sky lodges plan years ahead for events like it, and NamibRand Nature Reserve's Gold-tier International Dark Sky Reserve status (held since 2012) already makes it a natural staging ground for eclipse travel once 2030 gets closer. 2027 gets you the same genuinely dark skies at an ordinary year's prices and availability, well ahead of any eclipse-driven demand.",
  },
  {
    title: "New lodges will finally be running at full stride",
    text: "Namibia's tourism industry has kept building through 2026, with new lodge openings reported across the north, including new properties in the Zambezi Region. Freshly opened lodges typically spend their first year finding their rhythm: staffing, guiding routes and logistics all take time to settle. By 2027, anything that opened in 2026 has had a full season to mature, which usually means a more consistent experience than a launch-year stay.",
  },
];

const SEASONS_2027 = [
  {
    name: "Dry season",
    months: "May – October 2027",
    text: "Namibia's classic safari window. Rain stops, vegetation thins, and animals concentrate at Etosha's permanent waterholes, especially from August through October as the dry season tightens its grip. July is typically the driest month on record, and June–July nights in the desert interior regularly fall to 5°C or below, so pack a proper down layer. This is also peak booking season: Etosha's national park camps are worth reserving 6–9 months out for a 2027 dry-season trip, which means starting to plan in mid-to-late 2026.",
  },
  {
    name: "Green season",
    months: "November 2027 – April 2028",
    text: "Scattered November storms build to a January–March peak, when the desert turns green almost overnight and Palearctic migrant birds join the resident species for the year's strongest birding. Wildlife disperses away from waterholes as water becomes plentiful everywhere, so sightings in Etosha take more driving to find. It's also when calving season brings new impala and springbok to the plains, and when dramatic cloud-and-light photography comes into its own.",
  },
  {
    name: "Shoulder months",
    months: "April–May & September–October 2027",
    text: "The best value-for-conditions trade-off in the calendar. April–May 2027 gives you green, drying landscapes with rates below peak dry season; September–October 2027 gives you dry-season game viewing at its most concentrated, just before January's price reset, with noticeably lighter camps than August. October heat is real, though: desert regions regularly hit 35–38°C by mid-afternoon, so plan game drives for early morning and late afternoon.",
  },
];

const HONEYMOON_IDEAS = [
  {
    title: "A stargazing vow renewal or ceremony at NamibRand",
    text: (
      <>
        NamibRand Nature Reserve has held Gold-tier International Dark Sky Reserve status since
        2012, one of only a handful of Gold-tier reserves on the planet, with Sky Quality Meter
        readings that regularly exceed 21 magnitudes per square arcsecond, close to the darkest
        skies measurable on earth. Several lodges bordering the reserve run guided astronomy
        sessions with real telescopes, not just a blanket on the sand, and a growing number of
        couples are timing a private dinner or an informal vow renewal to coincide with a
        moonless night out there. Time it around the new moon and read our full{" "}
        <Link
          href="/namibia-stargazing-photography"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          stargazing and astrophotography guide
        </Link>{" "}
        before you book.
      </>
    ),
  },
  {
    title: "Boulder-camp seclusion in Damaraland",
    text: (
      <>
        Skip the classic dune postcard for a night and go strange and beautiful instead:{" "}
        <Link href="/lodges/doro-nawas-camp" className="font-semibold text-rust hover:text-rust-dark">
          Camp Kipwe
        </Link>{" "}
        builds its igloo-shaped stone bungalows directly into crevices between stacked granite
        boulders near Twyfelfontein, while{" "}
        <Link href="/lodges/damaraland-camp" className="font-semibold text-rust hover:text-rust-dark">
          Mowani Mountain Camp
        </Link>{" "}
        sits its raised-platform rooms among the same red granite landscape a little further
        north. Both put you within reach of guided desert-adapted elephant drives by day and a
        sundowner on a rocky overhang by evening. It&apos;s a genuinely different honeymoon backdrop
        from the dunes most itineraries default to, and few other travellers find their way out
        here. See our{" "}
        <Link href="/where-to-stay/damaraland" className="font-semibold text-rust hover:text-rust-dark">
          Damaraland lodge guide
        </Link>{" "}
        for the full shortlist.
      </>
    ),
  },
  {
    title: "Design your own route: a self-drive honeymoon, together",
    text: (
      <>
        Most honeymoon advice pushes you toward a fully guided, fully planned trip, and there&apos;s a
        real case for that comfort. But Namibia&apos;s tarred and graded C-road network is genuinely
        approachable for confident drivers, and a self-drive honeymoon has its own kind of
        romance: no fixed schedule, no third party deciding when you leave a sunset, the two of
        you alone in the car for long stretches with nothing but the radio and the road. It suits
        couples who&apos;d rather build the trip than follow one. Read our{" "}
        <Link href="/self-drive-vs-guided-namibia" className="font-semibold text-rust hover:text-rust-dark">
          self-drive vs guided comparison
        </Link>{" "}
        to see whether that trade-off fits you.
      </>
    ),
  },
  {
    title: "A Skeleton Coast detour from Swakopmund",
    text: (
      <>
        Most honeymoon itineraries stop at Swakopmund&apos;s dunes and coastline and turn back. A
        detour north to Cape Cross, self-drive reachable from either Swakopmund or Damaraland,
        puts you at one of the largest Cape fur seal colonies on the continent, tens of thousands
        of animals in season, against the same fog-bound, wreck-strewn coastline that gave the
        Skeleton Coast its name. It&apos;s stark rather than pretty, and that contrast against the rest
        of a Namibia honeymoon (dunes, boulders, waterholes) is exactly the point: one day that
        feels genuinely unlike anywhere else on the trip.
      </>
    ),
  },
  {
    title: "Respectful, guided time with a Himba community",
    text: (
      <>
        Not every honeymoon needs to be only about privacy. A guided, respectful visit to a Himba
        community in Kaokoland, arranged through a guide with a real ongoing relationship there
        such as Opuwo&apos;s Kaoko Information Centre, gives a couple a shared experience that&apos;s
        substantive rather than decorative: buying provisions together beforehand, asking consent
        before any photograph, and following the community&apos;s own boundaries rather than an
        itinerary&apos;s. It&apos;s usually arranged as an extension from Damaraland, adding at least a day
        each way of driving. Our{" "}
        <Link href="/himba-culture-namibia" className="font-semibold text-rust hover:text-rust-dark">
          Himba culture guide
        </Link>{" "}
        covers how to do this properly.
      </>
    ),
  },
  {
    title: "Castle-resort romance at Le Mirage",
    text: (
      <>
        For couples who want dune scenery without giving up resort comfort,{" "}
        <Link href="/lodges/little-kulala" className="font-semibold text-rust hover:text-rust-dark">
          Le Mirage Resort &amp; Spa
        </Link>{" "}
        is the outlier on Namibia&apos;s lodge map: a castle-style property on the D826 road near
        Sesriem gate, with open-air tower rooms built specifically for sleeping under the open
        sky, and a full-service spa on-site (the Mystique Spa) in a country where most lodge spa
        menus are still small. Ask for the clearest-forecast night of your stay for the tower
        room, since the Namib-Naukluft&apos;s clear, unpolluted skies make it worth planning around.
      </>
    ),
  },
  {
    title: "Track wildlife together, on foot",
    text: (
      <>
        A shared, physical experience tends to stick with a couple longer than a shared view. The
        Palmwag Concession in western Damaraland is one of the only places in Africa offering
        black rhino tracking on foot, run with local community conservancies, and it&apos;s usually
        booked as a dedicated activity rather than a casual add-on. It&apos;s not a spa afternoon, it&apos;s
        a genuine adventure the two of you do together, guided by someone who reads tracks for a
        living. Build in the extra planning time: our{" "}
        <Link href="/luxury-namibia" className="font-semibold text-rust hover:text-rust-dark">
          luxury Namibia guide
        </Link>{" "}
        covers how fly-in access into concessions like this usually works.
      </>
    ),
  },
  {
    title: "A boutique Windhoek bookend, not just a stopover",
    text: (
      <>
        Most itineraries treat Windhoek as a single throwaway night at each end of the trip.{" "}
        <Link
          href="/lodges/the-olive-exclusive"
          className="font-semibold text-rust hover:text-rust-dark"
        >
          The Olive Exclusive
        </Link>
        , a seven-suite boutique hotel with each suite themed on a different Namibian region and
        its own private plunge pool, is worth treating as a genuine occasion instead: a proper
        first or last night, not just a place to sleep off jet lag before the real trip starts.
      </>
    ),
  },
];

const PLANNING_LINKS = [
  {
    title: "Visa requirements",
    stat: "US$90",
    text: "Most nationalities apply online in advance for the Visa on Arrival, not at the airport, since 1 April 2025. Confirm your nationality's status before booking flights.",
    href: "/namibia-visa-requirements",
    cta: "Check visa requirements",
  },
  {
    title: "How long should you go for",
    stat: "7–21 days",
    text: "Namibia's driving distances mean trip length decides your route more than the other way round. Compare the 7, 10, 14 and 21-day options.",
    href: "/itineraries",
    cta: "Build your itinerary",
  },
  {
    title: "What it costs",
    stat: "€225–700+/day",
    text: "Budget self-drive to fully guided luxury: per-person, per-day ranges across all three tiers, and what actually drives the number.",
    href: "/namibia-trip-cost",
    cta: "See the full cost breakdown",
  },
  {
    title: "Self-drive or guided",
    stat: "Your call",
    text: "Cost, freedom, risk and comfort: the honest trade-offs between driving yourself and booking a guide, with no sales pitch for either.",
    href: "/self-drive-vs-guided-namibia",
    cta: "Compare self-drive vs guided",
  },
];

const FAQS = [
  {
    q: "Is there a special astronomical event in Namibia in 2027?",
    a: "No total solar eclipse touches Namibia in 2027. There's a partial solar eclipse visible from Windhoek on 6 February 2027 and another on 2 August 2027, but the paths of totality/annularity for both fall elsewhere in Africa. Namibia's next total solar eclipse is on 25 November 2030, when the path of totality is set to sweep across Namibia, Botswana, South Africa, Lesotho and Australia. If dark skies are your priority, NamibRand's Gold-tier Dark Sky Reserve status makes almost any clear, moonless night in 2027 worthwhile without needing to plan around a rare event.",
  },
  {
    q: "Is 2027 actually a better year to visit than 2026 or 2028?",
    a: "There's no single dramatic reason 2027 outranks its neighbouring years, and we'd rather be honest about that than invent one. What genuinely favours 2027 is a combination of smaller, real factors: national park fees that reset in April 2026 have now settled into their new normal rather than being a fresh shock, Etosha's Okaukuejo-Halali road diversion is scheduled to lift by July 2027, the online visa system has had two years to mature since its April 2025 launch, and Namibia's recent Lonely Planet and Michelin recognition is still fresh enough that the wider effects on crowds and pricing haven't fully arrived.",
  },
  {
    q: "When should I book a 2027 Namibia trip?",
    a: "For a dry-season trip (May-October 2027), start planning 6-9 months out, particularly if Etosha's national park camps are part of your route, since those book out first. For the green season (November 2027-April 2028), you can generally plan with less lead time, though flights and top-tier lodges still benefit from earlier booking.",
  },
  {
    q: "Do I need a 4x4 for a 2027 Namibia trip?",
    a: "It depends on your route, not the year. The classic Windhoek-Sossusvlei-Swakopmund loop is manageable in a standard 2x4. Damaraland's gravel D-roads and any Kaokoland extension are where a 4x4 earns its keep. See our self-drive vs guided comparison and our itinerary guides for route-specific advice.",
  },
  {
    q: "Is Namibia good for a honeymoon in 2027?",
    a: "Yes, and arguably it's an especially good window: recent international recognition (Lonely Planet's Best in Travel 2026, Shipwreck Lodge's 2025 Michelin Key) hasn't yet driven the kind of crowding that follows a few years later, so the country's genuine honeymoon strengths, privacy, dark skies, dramatic landscapes with very few other travellers, are still fully intact. See the original honeymoon ideas above, or our dedicated honeymoon guide for the shortlist of the most romantic lodges.",
  },
  {
    q: "What changed most recently that affects 2027 travel planning?",
    a: "Three things worth knowing before you book: Namibia's Visa on Arrival now requires mandatory online pre-application rather than payment at the airport, in effect since 1 April 2025, with 36 more eligible nationalities added in October 2025. National park entry fees rose 86% on 1 April 2026, the first increase since 2021. And a mandatory road diversion between Etosha's Okaukuejo and Halali camps has been in effect since 2 June 2026, scheduled to lift by July 2027, though construction timelines can shift.",
  },
  {
    q: "Will Namibia be more crowded in 2027 because of its recent recognition?",
    a: "Not dramatically, based on how this kind of recognition typically plays out. Being named in Lonely Planet's Best in Travel 2026 and Shipwreck Lodge's 2025 Michelin Key are both real signals that international attention on Namibia is rising, but that attention usually takes a few years to show up as materially fuller camps and higher rates. 2027 sits early enough in that window that Namibia's core appeal, genuine remoteness and very low visitor density compared to Southern Africa's other safari countries, should still hold.",
  },
];

export default function WhyVisit2027Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Guides", url: `${SITE_URL}/guides` },
          { name: "Why Visit Namibia in 2027", url: `${SITE_URL}/why-visit-namibia-2027` },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />

      <section className="mx-auto max-w-[1400px] px-6 pb-8 pt-10 sm:px-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-rust/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
          <LogoMark className="h-4 w-4" />
          Guide
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-5xl">
          Why visit Namibia in 2027
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
          We&apos;ll say this upfront: there is no total solar eclipse, no once-a-century anniversary,
          no single dramatic reason 2027 stands apart from any other year in Namibia. What there
          is, is a genuine cluster of smaller, real reasons why 2027 specifically is a well-timed
          year to finally book the trip, from a fee structure that&apos;s just settled down to a
          country whose international recognition is still fresh enough that the crowds haven&apos;t
          caught up. Below is the honest case, a season-by-season timing breakdown, and a
          deliberately original honeymoon planning section, since so much honeymoon advice for
          this country repeats the same four ideas.
        </p>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
          <span className="font-semibold text-charcoal">Our recommendation:</span> if you&apos;re
          choosing between 2027 and pushing the trip back further, go with 2027. The practical
          friction that made Namibia harder to plan around (an unclear visa process, an unclear
          fee structure, an active road diversion through Etosha) is either already resolved or
          scheduled to resolve within the year, and the country&apos;s recent recognition hasn&apos;t yet
          translated into materially fuller camps.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            What&apos;s actually different about 2027
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Not generic "now is always a good time to travel" reasoning: six specific, dated
            things that are true about this particular year.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS_2027.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 60}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <MetaIcon name="check" className="h-5 w-5 text-olive" />
              <h3 className="mt-4 text-[15px] font-bold text-charcoal">{r.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-charcoal/70">{r.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h3 className="text-lg font-bold text-charcoal">
            A note on that eclipse question, since people ask
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            We looked into whether a genuine astronomical event justified building this whole
            guide around 2027, since Namibia&apos;s dark skies make it a natural astro-tourism
            destination. It doesn&apos;t: the two solar eclipses that touch Namibia in 2027 (6 February
            and 2 August) are both partial from Namibian soil, with the paths of annularity and
            totality landing respectively in West Africa and North Africa/the Arabian Peninsula.
            Namibia&apos;s own next total solar eclipse isn&apos;t until 25 November 2030. We&apos;d rather tell
            you that plainly than manufacture a hook that doesn&apos;t hold up. What 2027 does offer is
            the same Gold-tier dark skies at NamibRand Nature Reserve that Namibia offers every
            year, without the demand spike that will likely build as 2030 approaches.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            Namibia in 2027, season by season
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            The underlying climate doesn&apos;t change year to year, but knowing exactly which months
            fall where in 2027 matters for booking lead time. For the full month-by-month
            breakdown, see our{" "}
            <Link
              href="/best-time-to-visit-namibia"
              className="font-semibold text-rust hover:text-rust-dark"
            >
              best time to visit guide
            </Link>
            .
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SEASONS_2027.map((season, i) => (
            <Reveal key={season.name} delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-charcoal">{season.name}</h3>
                <p className="mt-1 text-[12px] uppercase tracking-[0.1em] text-rust">
                  {season.months}
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-charcoal/70">{season.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
            An original Namibia honeymoon
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Most Namibia honeymoon advice, ours included, leans on the same handful of ideas: a
            private dune dinner, a hot-air balloon sunrise, a castle-style spa. Those are genuinely
            good, and worth doing. But if you want a 2027 honeymoon that feels like yours rather
            than a checklist pulled from every other guide, here are eight ideas that go further,
            organised roughly from the quietest to the most adventurous.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {HONEYMOON_IDEAS.map((idea, i) => (
            <Reveal
              key={idea.title}
              delay={(i % 4) * 60}
              className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <span className="font-serif text-2xl italic text-rust">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-[15px] font-bold text-charcoal">{idea.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-charcoal/70">{idea.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-black/5 bg-sand/20 p-8">
          <h3 className="text-lg font-bold text-charcoal">On pacing a honeymoon specifically</h3>
          <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">
            A honeymoon works better shorter than a first-time circuit. Two or three of the ideas
            above at three to four nights each, rather than the five-stop, ten-day loop
            first-timers often build, is enough time to actually slow down, and it leaves room to
            add a private dinner or a balloon flight without the trip feeling like a checklist.
            See our{" "}
            <Link href="/namibia-honeymoon" className="font-semibold text-rust hover:text-rust-dark">
              Namibia honeymoon guide
            </Link>{" "}
            for the core lodge shortlist, or our{" "}
            <Link href="/best-romantic-stays" className="font-semibold text-rust hover:text-rust-dark">
              best romantic stays guide
            </Link>{" "}
            for the fuller list.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">Planning the practical side</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-charcoal/60">
            Once the timing decision is made, four things settle the rest of the plan.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANNING_LINKS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <p className="font-serif text-2xl italic text-rust">{p.stat}</p>
                <h3 className="mt-2 text-[14px] font-bold text-charcoal">{p.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-charcoal/70">{p.text}</p>
                <span className="mt-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-rust group-hover:text-rust-dark">
                  {p.cta} →
                </span>
              </Link>
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
            href="/namibia-honeymoon"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibia Honeymoon
          </Link>
          <Link
            href="/luxury-namibia"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Luxury Namibia
          </Link>
          <Link
            href="/itineraries"
            className="rounded-full border border-charcoal/15 px-4 py-2 text-[13px] font-medium text-charcoal/70 transition-colors hover:border-rust hover:text-rust"
          >
            Namibia Itineraries
          </Link>
        </Reveal>
      </section>
    </>
  );
}
