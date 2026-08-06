export type Region = {
  slug: string;
  name: string;
  description: string;
  quickAnswer: string;
  bestFor: string;
  avoidIf: string;
  recommendedStay: string;
  driveFromWindhoek: string;
  lat: number;
  lng: number;
  image: string;
  alt: string;
  pros: string[];
  cons: string[];
  nearby: string[];
  faqs: { q: string; a: string }[];
  knownFor: string[];
  dayPlans: { nights: number; verdict: string; text: string }[];
};

export const regions: Region[] = [
  {
    slug: "etosha",
    name: "Etosha",
    description:
      "A vast salt pan rimmed with waterholes where elephant, lion and rhino gather at dusk.",
    quickAnswer:
      "Etosha is Namibia's flagship wildlife destination: a 22,000km² national park built around a salt pan so large it's visible from space and covers roughly a quarter of the park's area. Entry is via three main gates: Von Lindequist in the east, Anderson in the south near Okaukuejo, and King Nehale in the north. Which one you use shapes your whole route. Base yourself at a lodge on the park's private boundary reserves (Ongava, Onguma) for night drives and off-road tracking, or inside the park itself for floodlit waterhole viewing without leaving your camp.",
    bestFor: "First-time safari, wildlife photography",
    avoidIf: "You want a beach or coastal detour in the same trip leg",
    recommendedStay: "3–4 nights",
    driveFromWindhoek: "~4.5 hours",
    lat: -19.1667,
    lng: 15.9167,
    image:
      "https://images.unsplash.com/photo-1643749678251-76783e5f1777?q=80&w=1600&auto=format&fit=crop",
    alt: "Elephant standing on the dry, dusty plains of Etosha National Park",
    pros: [
      "Some of the most reliable game viewing in Southern Africa",
      "Floodlit waterholes mean wildlife comes to you after dark",
      "Well-maintained roads suitable for a standard 2WD in the dry season",
    ],
    cons: [
      "Gates and speed limits are strictly enforced inside the national park",
      "Dry-season crowds concentrate around the busiest waterholes",
      "Accommodation inside the park books out early in peak season",
    ],
    nearby: ["Damaraland (rock art and desert elephant)", "Waterberg Plateau"],
    faqs: [
      {
        q: "How many nights should I spend in Etosha?",
        a: "Three to four nights lets you cover both the eastern and western sections without rushing between waterholes.",
      },
      {
        q: "Should I stay inside the park or on a private reserve?",
        a: "Private reserves like Ongava allow night drives and off-road tracking that aren't permitted inside the national park itself, a real trade-off against staying inside for the classic floodlit-waterhole camp experience.",
      },
      {
        q: "Is there a road closure in Etosha right now?",
        a: "Yes, a road-upgrade project has closed the direct route between Okaukuejo and Halali, with a mandatory diversion in effect from 2 June 2026 to July 2027. Traffic is rerouted via the Gemsbokvlakte bypass (to around km 47) and Rhino Drive to reach Halali, with only the Gemsbokvlakte, Sueda and Salvadora waterholes accessible on that stretch. Budget noticeably more driving time between the two camps than older guides assume, and confirm current status with NWR before you travel, since these dates can shift with construction progress.",
      },
      {
        q: "How much are Etosha's park entry fees?",
        a: "Fees rose sharply on 1 April 2026: international visitors now pay N$280/person/day (up from N$150) plus a N$620 two-person vehicle fee, with SADC citizens and Namibians paying less. It's the first increase since 2021, so any trip-cost estimate written before mid-2026 is now understating this line item.",
      },
      {
        q: "Which Etosha gate should I enter through?",
        a: "Anderson Gate in the south, near Okaukuejo, is the standard entry for anyone driving up from Windhoek or Sossusvlei, and sits closest to the park's most reliable dry-season waterholes. Von Lindequist Gate in the east is the natural exit (or entry) if you're continuing toward Waterberg or the Caprivi Strip, putting you nearest Fischer's Pan. King Nehale Gate in the north mainly serves travellers coming from Ovamboland. Most self-drive itineraries enter via Anderson and exit via Von Lindequist, giving a straight run through the park instead of doubling back.",
      },
      {
        q: "How far apart are Etosha's waterholes?",
        a: "Spacing varies widely, not evenly. Waterholes around Okaukuejo and Namutoni sit within a short game drive of each other, while some in the quieter western section can be an hour or more apart on gravel roads. Plan a loop around three or four waterholes per session rather than trying to cover the whole park in a day. The driving alone eats the daylight, especially outside the mandatory Okaukuejo-Halali diversion route.",
      },
    ],
    knownFor: [
      "Floodlit waterholes",
      "Black rhino sightings",
      "Self-drive game viewing",
      "The vast white salt pan",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Enough for the eastern section only",
        text: "Two nights keeps you on Etosha's eastern side, working the waterholes around Namutoni and Halali. You'll get real game viewing, but you're skipping the western Dolomite and Okaukuejo waterholes most guides rate as the park's best, worth it only if Etosha is one stop among several.",
      },
      {
        nights: 4,
        verdict: "The right amount for a proper visit",
        text: "Four nights lets you split time between a private reserve on the boundary (for night drives and off-road rhino tracking, neither permitted inside the park) and a camp inside the park itself for the floodlit-waterhole experience after dark. You cover both the eastern and western halves without rushing between gates.",
      },
    ],
  },
  {
    slug: "sossusvlei",
    name: "Sossusvlei",
    description:
      "The Namib's towering red dunes, dead camel-thorn trees and some of the darkest skies on earth.",
    quickAnswer:
      "Sossusvlei is the postcard image of Namibia: red dunes exceeding 300 metres rising out of a white clay pan inside Namib-Naukluft Park, part of a desert widely considered among the oldest in the world. Dune 45, the most climbed and photographed, is simply named for sitting 45km along the road from Sesriem gate; Deadvlei's fossilised camel-thorn trees, standing for centuries in a pan too dry for them to decompose, sit a short walk beyond it. Stay on a private reserve bordering the park (like Kulala Wilderness Reserve) for a private gate that beats the sunrise crowds at the public entrance.",
    bestFor: "Photography, sunrise dune walks",
    avoidIf: "You dislike early starts: the best light is before 8am",
    recommendedStay: "2–3 nights",
    driveFromWindhoek: "~5 hours",
    lat: -24.7333,
    lng: 15.3,
    image:
      "https://images.unsplash.com/photo-1652599720885-abf363ed2992?q=80&w=1600&auto=format&fit=crop",
    alt: "A towering red sand dune in the Namib Desert near Sossusvlei",
    pros: [
      "Among the most photographed landscapes in Africa, and it earns it",
      "Private-reserve lodges offer their own park gate, ahead of the public queue",
      "Some of the darkest night skies in the world for stargazing",
    ],
    cons: [
      "Daytime heat is extreme from October to March",
      "The final stretch to Sossusvlei itself needs a 4x4 or the shuttle",
      "Deadvlei involves a further 20–45 minute walk from the 2x4 car park",
    ],
    nearby: ["Sesriem Canyon", "NamibRand Nature Reserve"],
    faqs: [
      {
        q: "Do I need a 4x4 to visit Sossusvlei?",
        a: "No for the drive in, yes for the last stretch. The tar and gravel road to Sesriem is fine in a normal car; the last 5km of soft sand to Sossusvlei itself needs 4x4 or the park's shuttle service. Our self-drive guide covers vehicle choice for the rest of the country if you're planning a full circuit.",
      },
      {
        q: "What time should I arrive at the dunes?",
        a: "Right at gate opening, which is sunrise. Arriving then avoids both the heat and the crowds on Dune 45 and at Deadvlei. Arrive even 30 minutes late in peak season and the car park at Sesriem is already filling up.",
      },
      {
        q: "Can I still drive myself to Deadvlei?",
        a: "No, as of 1 May 2026, private vehicles, including 4x4s, are no longer permitted on the final ~5km sand track from the 2x4 car park to the Deadvlei/Big Daddy 4x4 parking area. That stretch is now shuttle-only, using the official shuttle service or an NTB-registered lodge tour vehicle, at around N$260 per adult and N$130 per child under 12 (subject to change; confirm current pricing before you go). It's a recent change protecting the Namib Sand Sea, and shuttle wait times of around 30 minutes are commonly reported, so build that into your morning timing.",
      },
      {
        q: "How tall are the dunes at Sossusvlei?",
        a: "Big Daddy, beside Deadvlei, is the tallest in the immediate area at roughly 325 metres, among the tallest dunes on earth. Dune 45, the most-climbed, is lower but far more accessible, rising right at the roadside 45km from Sesriem gate. 'Big Mama,' next to Deadvlei itself, is the shorter, easier climb if Big Daddy's ridge walk looks like too much before breakfast.",
      },
      {
        q: "How deep is Sesriem Canyon?",
        a: "Sesriem Canyon cuts roughly 30 metres into the plain over about a kilometre, carved by the Tsauchab River, shallow enough to walk into without technical gear, and a good shaded midday option once the dunes themselves get too hot to climb.",
      },
    ],
    knownFor: [
      "300-metre red dunes",
      "Deadvlei's dead camel-thorn trees",
      "Some of the darkest night skies on earth",
      "Sunrise dune walks",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Workable, but only one sunrise at the dunes",
        text: "Two nights gives you one full sunrise session: Dune 45, then Deadvlei via the shuttle, then Sesriem Canyon in the cooler late afternoon. It's tight: you get the postcard shot, but no buffer if the light or your energy isn't right the first morning.",
      },
      {
        nights: 3,
        verdict: "The right amount for a proper visit",
        text: "Three nights gives you two sunrise sessions at the dunes instead of one, room to add a stargazing session on the NamibRand Nature Reserve side, and a genuine rest afternoon rather than driving straight out. This is the stay length we'd actually book.",
      },
    ],
  },
  {
    slug: "swakopmund",
    name: "Swakopmund",
    description:
      "A colonial seaside town where the dunes meet the Atlantic, and the pace finally slows.",
    quickAnswer:
      "Swakopmund is Namibia's coastal reset button, a walkable German-colonial town founded in 1892 as the main harbour for German South West Africa, wedged between the Namib dunes and a cold Atlantic swell. It has genuinely good restaurants, a full menu of adrenaline activities (skydiving, sandboarding, quad biking) on its doorstep, and sits under an hour from the Walvis Bay lagoon, a Ramsar-listed wetland that draws thousands of lesser and greater flamingos.",
    bestFor: "A break from self-driving, adventure activities",
    avoidIf: "You're short on days and need to prioritise wildlife time",
    recommendedStay: "2 nights",
    driveFromWindhoek: "~4 hours",
    lat: -22.6787,
    lng: 14.5251,
    image:
      "https://images.unsplash.com/photo-1593870893332-a5f39aaa2541?q=80&w=1600&auto=format&fit=crop",
    alt: "The red and white lighthouse in Swakopmund, Namibia",
    pros: [
      "Easily the best food and coffee on a Namibian self-drive circuit",
      "A genuine change of pace after days of driving and game drives",
      "Wide range of activities booked directly through your hotel",
    ],
    cons: [
      "Coastal fog (the 'Skeleton Coast haze') can linger into late morning",
      "The Atlantic here is too cold and rough for swimming",
      "Sea breeze makes evenings cooler than the desert interior",
    ],
    nearby: ["Walvis Bay lagoon (flamingos)", "Namib Desert dune belt"],
    faqs: [
      {
        q: "Is Swakopmund worth two nights?",
        a: "Yes if you want to fit in a coastal activity like sandboarding or a Walvis Bay boat trip without rushing; one night is enough for just a dinner and a walk through town.",
      },
      {
        q: "How cold is the Atlantic in Swakopmund?",
        a: "Cold enough that swimming isn't the draw. The Benguela Current pulls cold water up from the south Atlantic, keeping the sea low year-round even when the air above the dunes just inland is hot. It's also what generates the coastal fog that can linger into late morning, sometimes called the 'Skeleton Coast haze,' the same current effect that shapes that region further north.",
      },
      {
        q: "Can I skydive in Swakopmund?",
        a: "Yes, tandem skydives over the dune belt and coastline are one of the town's signature activities, jumping from a small aircraft out of the local airfield, weather and fog permitting. Sandboarding and quad biking on the dunes just outside town don't depend on clear skies the way skydiving does, so they're the more reliable backup if the morning fog hasn't lifted.",
      },
    ],
    knownFor: [
      "German-colonial architecture",
      "Skydiving and sandboarding",
      "Walvis Bay flamingos",
      "The best food in Namibia",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "Fine as a pit stop, not a proper visit",
        text: "One night is enough to walk the jetty, eat a good dinner, and sleep somewhere that isn't a lodge for a change. You won't have time to book an activity. Treat it as a reset, not a destination.",
      },
      {
        nights: 2,
        verdict: "The right amount to actually do something",
        text: "Two nights leaves room for one real activity (sandboarding on the dunes just outside town, a skydive over the coast, or a boat trip out to the Walvis Bay flamingo lagoon) on top of the walk-and-eat itinerary a single night gives you.",
      },
    ],
  },
  {
    slug: "damaraland",
    name: "Damaraland",
    description:
      "Ochre mountains, desert-adapted elephant and some of Namibia's most striking rock art.",
    quickAnswer:
      "Damaraland is Namibia's community-conservancy heartland: open, ochre-coloured mountain desert where desert-adapted elephant roam between dry riverbeds, and several lodges are genuinely community-owned rather than just community-adjacent. Twyfelfontein, a UNESCO World Heritage Site since 2007, holds one of the largest concentrations of rock engravings in Africa, some over 2,000 years old. The surrounding Kunene region also holds one of the largest free-roaming black rhino populations left anywhere in the world, outside a fenced national park.",
    bestFor: "Remote landscapes, desert-adapted wildlife",
    avoidIf: "You need guaranteed daily wildlife sightings",
    recommendedStay: "2–3 nights",
    driveFromWindhoek: "~5.5 hours",
    lat: -20.5867,
    lng: 14.3722,
    image:
      "https://images.unsplash.com/photo-1772289935377-c5a8ceb51e6d?q=80&w=1600&auto=format&fit=crop",
    alt: "Rocky desert landscape of Damaraland at sunset",
    pros: [
      "Several lodges are directly community-owned, not just community-branded",
      "Desert-adapted elephant and rhino tracking on foot or by vehicle",
      "Twyfelfontein's rock engravings are a genuine UNESCO World Heritage Site",
    ],
    cons: [
      "Wildlife is wild and free-roaming: sightings aren't guaranteed",
      "Distances between sights are long on gravel roads",
      "Fewer dining options than the coast or the capital",
    ],
    nearby: ["Twyfelfontein rock art", "Skeleton Coast", "Spitzkoppe"],
    faqs: [
      {
        q: "Can I see elephants in Damaraland?",
        a: "There's no guarantee, but guided tracking gives you a real shot. Desert-adapted elephant move along dry riverbeds and sightings are never guaranteed, but guided tracking with a local lodge gives you the best realistic chance. Our wildlife guide covers what else to expect from desert-adapted species across the country.",
      },
      {
        q: "Where can I see desert-adapted rhino, not just elephant?",
        a: "The Palmwag Concession, in western Damaraland, is one of the only places in Africa offering black rhino tracking on foot, run in partnership with local community conservancies, the same model that protects the region's desert-adapted elephant. It's usually booked as a dedicated activity through a Palmwag-area lodge rather than a casual add-on, so plan for it in advance if it matters to you.",
      },
      {
        q: "Is Twyfelfontein worth visiting if I'm not into rock art?",
        a: "Yes, on landscape alone. The site sits among Damaraland's ochre sandstone formations, including the Organ Pipes and Burnt Mountain nearby, both worth the short detour even if the engravings themselves aren't your main interest.",
      },
    ],
    knownFor: [
      "Desert-adapted elephant",
      "Twyfelfontein rock engravings (UNESCO)",
      "Community-owned lodges",
      "Ochre mountain scenery",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "Covers the highlights, one shot at wildlife",
        text: "Two nights covers Twyfelfontein's rock engravings and one guided drive in search of desert-adapted elephant. Sightings aren't guaranteed on any single outing, so this is the minimum rather than the ideal.",
      },
      {
        nights: 3,
        verdict: "The right amount given wildlife isn't guaranteed",
        text: "Three nights buys you a second wildlife outing if the first comes up empty, plus time to add guided black rhino tracking at the Palmwag concession, one of the only places in Africa this is offered on foot, in partnership with community conservancies.",
      },
    ],
  },
  {
    slug: "skeleton-coast",
    name: "Skeleton Coast",
    description:
      "Fog, shipwrecks and seal colonies along one of the most remote coastlines in Africa.",
    quickAnswer:
      "The Skeleton Coast is Namibia's most remote, least-visited landscape, a fog-bound strip where the Namib dunes run straight into a cold, wreck-strewn Atlantic. Early Portuguese sailors called it 'The Gates of Hell': the same cold Benguela Current that generates the fog also makes the coastline treacherous, and wrecked ships still lie half-buried in the sand. Most travellers see it via a short detour from Damaraland, or fly in for a proper multi-night stay with a dedicated operator.",
    bestFor: "Remote adventure, fly-in itineraries",
    avoidIf: "You're on a tight self-drive schedule with limited days",
    recommendedStay: "2 nights",
    driveFromWindhoek: "~7 hours (or fly in)",
    lat: -19.1833,
    lng: 12.7167,
    image:
      "https://images.unsplash.com/photo-1667506609659-599fb1f59f94?q=80&w=1600&auto=format&fit=crop",
    alt: "A shipwreck washed up on the sand of the Skeleton Coast, Namibia",
    pros: [
      "True remoteness: some lodges see no other traffic for a hundred kilometres",
      "Seal colonies, shipwrecks and desert-adapted wildlife excursions",
      "Some of the most dramatic, least-photographed coastline in Africa",
    ],
    cons: [
      "Getting there properly usually means flying, which adds real cost",
      "Persistent coastal fog can limit visibility for large parts of the day",
      "Very few accommodation options: book well ahead",
    ],
    nearby: ["Damaraland", "Kaokoveld / Kunene region"],
    faqs: [
      {
        q: "Do I need to fly to the Skeleton Coast?",
        a: "Only for the far north. A short southern section is reachable by self-drive from Damaraland, but the northern Skeleton Coast (where the standout lodges are) is normally fly-in only.",
      },
      {
        q: "Is Cape Cross part of the Skeleton Coast?",
        a: "Yes, Cape Cross sits at the southern end of the Skeleton Coast, reachable by self-drive from Swakopmund or Damaraland, and is home to one of the largest Cape fur seal colonies on the continent, tens of thousands of animals in season. It's the accessible, self-drive version of the Skeleton Coast experience; the fly-in lodges further north cover the truly remote section.",
      },
      {
        q: "What's the best time of day to visit the Skeleton Coast?",
        a: "Afternoon, once the fog has burned off. The coastal fog is a year-round Benguela Current effect that typically clears by mid-to-late morning, so most operators schedule excursions for the afternoon rather than fighting the visibility earlier in the day.",
      },
    ],
    knownFor: [
      "Shipwrecks",
      "Cape fur seal colonies",
      "Total remoteness",
      "Fog-bound coastline",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "The standard length, and it works",
        text: "Two nights is what most fly-in itineraries offer, and it's enough: one afternoon for a seal colony or shipwreck excursion, one full day for a coastal drive with your guide, and time built in for the fog to lift before you commit to a plan for the day.",
      },
    ],
  },
  {
    slug: "windhoek",
    name: "Windhoek",
    description:
      "Namibia's compact, German-inflected capital: most itineraries begin and end here.",
    quickAnswer:
      "Windhoek is where almost every Namibian trip starts and ends, thanks to Hosea Kutako International Airport, itself around 45 minutes outside the city centre. The capital sits over 1,600 metres up in the Khomas Highland, which keeps evenings cooler than you might expect this far into southern Africa even in summer. It's compact, walkable in parts, and worth one night to collect your rental car, adjust to the time zone and eat well before heading into the desert.",
    bestFor: "Arrival and departure nights",
    avoidIf: "You've got a same-day onward flight and no need to overnight",
    recommendedStay: "1 night",
    driveFromWindhoek: "N/A",
    lat: -22.5609,
    lng: 17.0658,
    image:
      "https://images.unsplash.com/photo-1586100810957-e4a1fed8c645?q=80&w=1600&auto=format&fit=crop",
    alt: "The Christuskirche, a landmark church in Windhoek, Namibia",
    pros: [
      "The best restaurant and coffee scene outside Swakopmund",
      "Easy, low-stakes place to adjust before or after a long drive",
      "Central for car rental pickup and drop-off",
    ],
    cons: [
      "Not a wildlife or scenery destination in its own right",
      "The airport is around 45 minutes outside the city centre",
      "City-centre safety after dark warrants normal urban caution",
    ],
    nearby: ["Daan Viljoen Game Reserve", "Auas Mountains"],
    faqs: [
      {
        q: "Is one night in Windhoek enough?",
        a: "Yes, for most itineraries, one night bookending each end of the trip is standard, more if you land late or have an early departure.",
      },
      {
        q: "What is the Christuskirche?",
        a: "It's Windhoek's best-known landmark, a Lutheran church built in the early 1900s from local sandstone at a prominent traffic circle in the city centre. Most self-drive itineraries pass within sight of it on the way to or from the airport, even without planning to stop.",
      },
      {
        q: "Is Windhoek safe to walk around?",
        a: "Central Windhoek is walkable in daylight with normal city precautions, but like most capital cities it warrants more caution after dark, particularly around the train station and quieter side streets. Stick to well-lit, populated areas or take a short taxi ride back to your hotel at night. Our safety and health guide covers the fuller picture across the rest of the country.",
      },
    ],
    knownFor: [
      "The Christuskirche landmark",
      "German-Namibian food scene",
      "Car rental pickup hub",
      "Craft and curio markets",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "This is really all Windhoek needs",
        text: "One night bookending each end of the trip is the standard pattern, enough time to collect or return your rental car, eat one good dinner, and adjust before or after the long drives ahead. It's not a scenery or wildlife stop in its own right.",
      },
    ],
  },
  {
    slug: "fish-river-canyon",
    name: "Fish River Canyon",
    description:
      "The second-largest canyon on earth, best seen at golden hour from the rim.",
    quickAnswer:
      "Fish River Canyon is Namibia's south, and its most overlooked headline sight, a 160km-long, up to 550m-deep gorge, often billed as the second-largest canyon on earth, that rivals the Grand Canyon for scale without the crowds. Most visitors see it from the rim viewpoints; serious hikers tackle the multi-day trail below, which ends at Ai-Ais, where hot springs emerge from the ground at around 60°C.",
    bestFor: "Hiking, dramatic viewpoints",
    avoidIf: "The south doesn't fit your route: it's a detour from the main circuit",
    recommendedStay: "1–2 nights",
    driveFromWindhoek: "~5.5 hours",
    lat: -27.5833,
    lng: 17.6167,
    image:
      "https://images.unsplash.com/photo-1687504692250-fa84b3c78507?q=80&w=1600&auto=format&fit=crop",
    alt: "An elevated view over Fish River Canyon in southern Namibia",
    pros: [
      "One of the largest canyons on earth, with a fraction of the visitors",
      "Rim viewpoints require no hiking at all",
      "The multi-day Fish River Canyon Trail is a genuine bucket-list hike",
    ],
    cons: [
      "It's a real detour south: adds significant driving to a standard loop",
      "The multi-day trail only runs May to September and requires a medical certificate",
      "Very few accommodation options nearby",
    ],
    nearby: ["Ai-Ais hot springs", "Namibia/South Africa border region"],
    faqs: [
      {
        q: "Can I see the canyon without hiking?",
        a: "Yes, the main rim viewpoints near Hobas are a short walk from the car park and give you the classic canyon view.",
      },
      {
        q: "What are the rules for the multi-day Fish River Canyon hike?",
        a: "The trail runs seasonally, roughly 1 May to 15 September, with exact opening/closing dates set each year by Namibia Wildlife Resorts (NWR) based on river-level assessments. You'll need a medical fitness certificate and a minimum group size of 3 (solo hiking isn't permitted) with permits booked in advance directly through NWR. Confirm current-season dates before you plan around it, since they shift year to year.",
      },
      {
        q: "Can I combine Ai-Ais with the rim viewpoints without hiking the full trail?",
        a: "Yes, Ai-Ais Hot Springs Resort is reachable by road at the canyon's southern end without doing any of the multi-day trail above it, so a rim-viewpoint visit near Hobas and a soak at Ai-Ais can be combined in the same short trip. The two are connected by road, not just by the hiking trail, which surprises some travellers.",
      },
      {
        q: "How does Fish River Canyon compare to the Grand Canyon?",
        a: "It's smaller but still enormous. Fish River Canyon runs roughly 160km long and up to 550m deep, against the Grand Canyon's roughly 450km length and depths approaching 1,800m, so it's in the same conversation for scale, without approaching the Grand Canyon's visitor numbers or infrastructure.",
      },
    ],
    knownFor: [
      "The second-largest canyon on earth",
      "The multi-day Fish River hiking trail",
      "Ai-Ais hot springs",
      "Golden-hour rim views",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "Enough for the rim, not the trail",
        text: "One night covers the main viewpoints near Hobas at golden hour (no hiking required), which is what most travellers actually come for. It doesn't leave room for the multi-day trail below the rim, which needs its own dedicated trip.",
      },
      {
        nights: 2,
        verdict: "The right amount for rim visitors",
        text: "Two nights gives you both a sunset and a sunrise session at the viewpoints, which change the canyon's colour completely, plus time to soak at Ai-Ais hot springs on the way out rather than driving straight through.",
      },
    ],
  },
  {
    slug: "caprivi",
    name: "Caprivi Strip",
    description:
      "Namibia's green, water-rich panhandle: rivers, floodplains and a different rhythm entirely.",
    quickAnswer:
      "The Caprivi Strip (officially renamed the Zambezi Region in 2013) is a different Namibia entirely, a thin, water-rich panhandle of rivers and floodplains bordering Botswana, Zambia and Angola, better suited to birding and river-based wildlife than the desert circuit further south. The strip itself is a leftover of colonial map-making: Germany acquired it in the 1890 Heligoland-Zanzibar Treaty specifically to give German South-West Africa a corridor to the Zambezi River, and the old name (after German chancellor Leo von Caprivi) persists in everyday use even though the official name has changed.",
    bestFor: "Extending into Botswana or Zambia",
    avoidIf: "You're only doing the classic dunes-and-desert circuit",
    recommendedStay: "2 nights",
    driveFromWindhoek: "~12 hours (most fly to Katima Mulilo)",
    lat: -17.5039,
    lng: 24.275,
    image:
      "https://images.unsplash.com/photo-1598338332181-c7a78afa1198?q=80&w=1600&auto=format&fit=crop",
    alt: "Silhouetted trees along a river at sunset in the Caprivi Strip",
    pros: [
      "Genuinely different landscape from the rest of Namibia: rivers, not desert",
      "Strong birding and river-based wildlife viewing",
      "A natural bridge into Botswana's Okavango Delta or Chobe",
    ],
    cons: [
      "Far from the rest of the country: most people fly rather than drive",
      "Malaria precautions are relevant here, unlike most of the rest of Namibia",
      "Limited lodge choice compared to the desert regions",
    ],
    nearby: ["Chobe National Park (Botswana)", "Bwabwata National Park"],
    faqs: [
      {
        q: "Is the Caprivi Strip worth adding to a Namibia trip?",
        a: "Best treated as an extension, not a standalone stop. It works well for travellers continuing into Botswana or Zambia, rather than a stop on a standard two-week Namibia loop.",
      },
      {
        q: "Is malaria a real risk in the Caprivi Strip specifically?",
        a: "Yes, unlike most of the rest of Namibia, the Zambezi Region carries a year-round malaria risk because of its rivers and wetlands, so antimalarial precautions are worth taking seriously here even if you've skipped them for the rest of a desert-focused itinerary. Our safety and health guide has current guidance before you travel, since recommendations can change.",
      },
      {
        q: "Can I combine the Caprivi Strip with Botswana's Okavango Delta or Chobe?",
        a: "Yes, that's the main reason most travellers add it. The Zambezi Region borders Botswana directly, and Bwabwata National Park and the Kwando-Linyanti river system here connect naturally to Chobe National Park or the Okavango Delta on the other side of the border, making it a practical extension rather than a separate trip.",
      },
    ],
    knownFor: [
      "Zambezi River floodplains",
      "Birding",
      "The bridge into Botswana's Okavango/Chobe",
      "Hippo and river wildlife",
    ],
    dayPlans: [
      {
        nights: 2,
        verdict: "The standard length for an extension stop",
        text: "Two nights covers a river cruise for hippo and birdlife and one game drive in Bwabwata National Park, enough to feel the region's different rhythm before continuing on into Botswana or Zambia, or flying back to the desert circuit.",
      },
    ],
  },
  {
    slug: "spitzkoppe",
    name: "Spitzkoppe",
    description:
      "Granite peaks rising sheer from the plains, Namibia's answer to Table Mountain.",
    quickAnswer:
      "Spitzkoppe is a cluster of granite peaks rising straight out of flat gravel plains: the main peak reaches around 1,784m and stands roughly 600m above the surrounding plain, granite estimated at over 120 million years old, which is why it's sometimes called the 'Matterhorn of Namibia.' It's an easy one-night detour between Swakopmund and Damaraland, and one of the best stargazing spots on the entire route, with no light pollution for a hundred kilometres.",
    bestFor: "Stargazing, one-night detours",
    avoidIf: "You want full-service lodge comfort: this is mostly rustic camping",
    recommendedStay: "1 night",
    driveFromWindhoek: "~3.5 hours",
    lat: -21.8333,
    lng: 15.1833,
    image:
      "https://images.unsplash.com/photo-1719575366943-76d16957fa90?q=80&w=1600&auto=format&fit=crop",
    alt: "Granite peaks of Spitzkoppe rising from the Namibian desert plains",
    pros: [
      "Among the best stargazing anywhere on a Namibian self-drive route",
      "Easy, short detour that doesn't cost you a full driving day",
      "Dramatic sunset and sunrise light on the granite domes",
    ],
    cons: [
      "Most on-site stays are basic community campsites, not lodges",
      "Very limited facilities: bring supplies with you",
      "Exposed terrain means no shade during the heat of the day",
    ],
    nearby: ["Swakopmund", "Erongo Mountains"],
    faqs: [
      {
        q: "Is Spitzkoppe worth an overnight stop?",
        a: "Yes, for the sunset, night sky and sunrise alone, it's one of the most photogenic single nights on a Namibian itinerary.",
      },
      {
        q: "Where's the best rock art at Spitzkoppe?",
        a: "Bushman's Paradise, a rock shelter on the eastern side of the massif reached by a short scramble, holds some of the site's best-known paintings, including images of elephant. It's usually visited with a local community guide, both for the climb and because guiding here directly supports the surrounding conservancy.",
      },
      {
        q: "Can I climb Spitzkoppe?",
        a: "The main peak is a technical rock climb, not a hike. It wasn't summited until 1946 and still requires ropes and climbing experience today. Most visitors instead walk the shorter, ungraded trails around the base and to viewpoints like the natural rock arch, which need no climbing gear at all.",
      },
    ],
    knownFor: [
      "Granite inselbergs",
      "Stargazing",
      "Bushman rock art",
      "Sunset and sunrise photography",
    ],
    dayPlans: [
      {
        nights: 1,
        verdict: "This is the whole point of Spitzkoppe",
        text: "One night is the standard and correct length: arrive with time for sunset on the granite domes, spend the night under some of the clearest skies on the route, and catch sunrise before continuing on. It's a detour, not a destination in itself.",
      },
    ],
  },
];

export function getRegion(slug: string) {
  return regions.find((r) => r.slug === slug);
}

export type LodgeCategory =
  | "luxury"
  | "safari"
  | "desert"
  | "family"
  | "romantic"
  | "remote"
  | "glamping"
  | "farm";

export type Lodge = {
  slug: string;
  name: string;
  region: string;
  regionSlug: string;
  description: string;
  highlights: string[];
  bestFor: string;
  operator?: string;
  categories: LodgeCategory[];
  image: string;
  alt: string;
  /**
   * Indicative price tier (1 = most accessible, 4 = ultra-luxury), not a live rate.
   * Judged from operator positioning and published property style (private
   * pools/sleep-outs vs. community-run vs. boutique hotel), never a verified
   * per-night figure, this site doesn't have real-time pricing for these
   * named properties (see /about).
   */
  priceTier: 1 | 2 | 3 | 4;
};

export const lodges: Lodge[] = [
  {
    slug: "ongava-lodge",
    name: "Ongava Lodge",
    region: "Etosha",
    regionSlug: "etosha",
    description:
      "Chalets built into a rocky outcrop overlooking a waterhole, on a private reserve adjoining Etosha's Anderson Gate.",
    highlights: ["Waterhole-facing rooms", "Private-reserve night drives", "Off-road tracking permitted"],
    bestFor: "First-time safari couples, wildlife photographers",
    operator: "Ongava Reserve",
    categories: ["safari", "romantic"],
    image: "/images/lodges/ongava-lodge.jpg",
    alt: "Thatched chalet built into a rocky outcrop at Ongava Lodge, Etosha",
    priceTier: 4,
  },
  {
    slug: "onguma-tented-camp",
    name: "Onguma Tented Camp",
    region: "Etosha",
    regionSlug: "etosha",
    description:
      "A tented camp on a private reserve directly bordering Etosha's eastern side, with rooms overlooking a waterhole.",
    highlights: ["Tents facing a waterhole", "Private reserve, night drives allowed", "Sister camps nearby"],
    bestFor: "Photographers, couples wanting more flexibility than the park allows",
    operator: "Onguma Private Game Reserve",
    categories: ["safari", "romantic", "glamping"],
    image: "/images/lodges/onguma-tented-camp.jpg",
    alt: "A tented suite at dusk under a large tree at Onguma Tented Camp, Etosha",
    priceTier: 3,
  },
  {
    slug: "mushara-lodge",
    name: "Mushara Lodge",
    region: "Etosha",
    regionSlug: "etosha",
    description:
      "A chalet-style lodge near Etosha's eastern Von Lindequist Gate, with thatch-and-timber public areas and a sister property nearby.",
    highlights: ["Close to the eastern park gate", "Thatch-and-timber public areas", "Sister property nearby"],
    bestFor: "Families, travellers wanting proximity over remoteness",
    categories: ["safari", "family"],
    image: "/images/lodges/mushara-lodge.jpg",
    alt: "Thatched lounge and terrace at Mushara Lodge, Etosha, lit at dusk",
    priceTier: 3,
  },
  {
    slug: "little-kulala",
    name: "Little Kulala",
    region: "Sossusvlei",
    regionSlug: "sossusvlei",
    description:
      "Wilderness Safaris' flagship dune camp on the private Kulala Wilderness Reserve, around 45 minutes from Sossusvlei itself.",
    highlights: ["Rooftop star-bed sleep-outs", "Private plunge pools", "Private reserve gate into the park"],
    bestFor: "Couples, honeymooners, stargazers",
    operator: "Wilderness Safaris",
    categories: ["luxury", "desert", "romantic", "glamping"],
    image: "/images/lodges/little-kulala.jpg",
    alt: "A shaded deck overlooking the Namib plains at Little Kulala, Sossusvlei",
    priceTier: 4,
  },
  {
    slug: "sossusvlei-desert-lodge",
    name: "Sossusvlei Desert Lodge",
    region: "Sossusvlei",
    regionSlug: "sossusvlei",
    description:
      "A designer lodge on a private reserve, designated an International Dark Sky Reserve, known for glass-fronted rooms with uninterrupted desert views.",
    highlights: ["International Dark Sky Reserve", "Glass-fronted rooms", "In-house astronomy program"],
    bestFor: "Astronomy enthusiasts, luxury travellers",
    operator: "&Beyond",
    categories: ["luxury", "desert"],
    image: "/images/lodges/sossusvlei-desert-lodge.jpg",
    alt: "Glass-fronted rooms of Sossusvlei Desert Lodge lit red at night under a starry sky",
    priceTier: 4,
  },
  {
    slug: "kulala-desert-lodge",
    name: "Kulala Desert Lodge",
    region: "Sossusvlei",
    regionSlug: "sossusvlei",
    description:
      "Thatched chalets facing the red dunes on the same private reserve as Little Kulala, at a more accessible price tier.",
    highlights: ["Private gate into Namib-Naukluft Park", "Same reserve as Little Kulala", "Dune-facing chalets"],
    bestFor: "Families, first-timers wanting dune access without ultra-luxury pricing",
    operator: "Wilderness Safaris",
    categories: ["desert", "family"],
    image: "/images/lodges/kulala-desert-lodge.jpg",
    alt: "Thatched chalets on red desert terrain at Kulala Desert Lodge, Sossusvlei",
    priceTier: 3,
  },
  {
    slug: "damaraland-camp",
    name: "Damaraland Camp",
    region: "Damaraland",
    regionSlug: "damaraland",
    description:
      "One of Namibia's earliest community-conservancy joint ventures, in the Huab River Valley, credited as a template for community-run tourism in the country.",
    highlights: ["Pioneering community-conservancy model", "Desert-adapted elephant tracking", "Run with the local conservancy"],
    bestFor: "Conservation-minded travellers, wildlife trackers",
    operator: "Wilderness Safaris",
    categories: ["safari", "desert", "glamping"],
    image: "/images/lodges/damaraland-camp.jpg",
    alt: "Thatched chalets set among red rock hills at Damaraland Camp",
    priceTier: 3,
  },
  {
    slug: "grootberg-lodge",
    name: "Grootberg Lodge",
    region: "Damaraland",
    regionSlug: "damaraland",
    description:
      "Believed to be Namibia's first fully community-owned lodge, built with the ≠Khoadi //Hoas community on a ridge with valley views from every room.",
    highlights: ["Fully community-owned", "Ridge-top views from every room", "Rhino tracking access"],
    bestFor: "Travellers prioritising community tourism, photographers",
    categories: ["safari"],
    image: "/images/lodges/grootberg-lodge.jpg",
    alt: "View over the valley from a room at Grootberg Lodge, Damaraland",
    priceTier: 2,
  },
  {
    slug: "doro-nawas-camp",
    name: "Doro Nawas Camp",
    region: "Damaraland",
    regionSlug: "damaraland",
    description:
      "A camp on an elevated rocky hill in the Doro !Nawas Conservancy, run with the local community, with easy access to Twyfelfontein's rock art.",
    highlights: ["Elevated hilltop position", "Conservancy partnership", "Close to Twyfelfontein rock art"],
    bestFor: "Couples combining culture and landscape",
    operator: "Wilderness Safaris",
    categories: ["desert", "romantic", "glamping"],
    image: "/images/lodges/doro-nawas-camp.jpg",
    alt: "A shaded veranda overlooking the plains at Doro Nawas Camp, Damaraland",
    priceTier: 3,
  },
  {
    slug: "shipwreck-lodge",
    name: "Shipwreck Lodge",
    region: "Skeleton Coast",
    regionSlug: "skeleton-coast",
    description:
      "The only lodge actually sited on the Skeleton Coast itself, with shipwreck-shaped chalets scattered among the dunes two hours north of Möwe Bay.",
    highlights: ["Genuinely on the coast", "Shipwreck-inspired architecture", "Remote dune and coastal excursions"],
    bestFor: "Remote-adventure travellers, design-minded guests",
    operator: "Natural Selection",
    categories: ["luxury", "desert", "remote"],
    image: "/images/lodges/shipwreck-lodge.jpg",
    alt: "The shipwreck-shaped chalets of Shipwreck Lodge on the dunes at dusk",
    priceTier: 4,
  },
  {
    slug: "hoanib-skeleton-coast-camp",
    name: "Hoanib Skeleton Coast Camp",
    region: "Skeleton Coast",
    regionSlug: "skeleton-coast",
    description:
      "A fly-in-only camp of seven tents and one family unit, reached by light aircraft, used as a base for desert-adapted elephant, lion and rare wildlife.",
    highlights: ["Fly-in access only", "Desert-adapted wildlife focus", "Optional coastline and seal-colony excursion"],
    bestFor: "Serious wildlife photographers, remote-adventure travellers",
    operator: "Wilderness Safaris",
    categories: ["luxury", "safari", "remote", "glamping"],
    image: "/images/lodges/hoanib-skeleton-coast-camp.jpg",
    alt: "A tented suite lit at dusk at Hoanib Skeleton Coast Camp",
    priceTier: 4,
  },
  {
    slug: "the-delight-swakopmund",
    name: "The Delight Swakopmund",
    region: "Swakopmund",
    regionSlug: "swakopmund",
    description:
      "A 54-room boutique hotel in downtown Swakopmund with colourful, contemporary design, and breakfast, water, parking and Wi-Fi included.",
    highlights: ["Central downtown location", "Contemporary design", "Breakfast, water, parking and Wi-Fi included"],
    bestFor: "Couples, design-conscious travellers, city-break stopovers",
    operator: "Gondwana Collection",
    categories: ["luxury", "romantic"],
    image: "/images/lodges/the-delight-swakopmund.jpg",
    alt: "The contemporary facade of The Delight Swakopmund on the seafront",
    priceTier: 2,
  },
  {
    slug: "hansa-hotel",
    name: "Hansa Hotel",
    region: "Swakopmund",
    regionSlug: "swakopmund",
    description:
      "Namibia's oldest hotel, established in 1905 in the historic centre of Swakopmund, with 49 rooms and preserved period architecture.",
    highlights: ["Namibia's oldest hotel (1905)", "Historic-centre location", "Preserved colonial-era façade"],
    bestFor: "History-minded travellers, classic-hotel loyalists",
    categories: [],
    image: "/images/lodges/hansa-hotel.jpg",
    alt: "The historic entrance of the Hansa Hotel, Swakopmund, lit at dusk",
    priceTier: 2,
  },
  {
    slug: "the-olive-exclusive",
    name: "The Olive Exclusive",
    region: "Windhoek",
    regionSlug: "windhoek",
    description:
      "A seven-suite boutique hotel in Windhoek, each suite themed on a different Namibian region, with a private plunge pool and full bar and restaurant.",
    highlights: ["Only seven suites", "Each suite themed on a Namibian region", "Private plunge pool"],
    bestFor: "Couples, a luxury bookend before or after a safari circuit",
    categories: ["luxury", "romantic"],
    image: "/images/lodges/the-olive-exclusive.jpg",
    alt: "Suites overlooking Windhoek at dusk from The Olive Exclusive",
    priceTier: 4,
  },
  {
    slug: "villa-violet",
    name: "Villa Violet",
    region: "Windhoek",
    regionSlug: "windhoek",
    description:
      "A small, owner-run guesthouse with five bedrooms in the Klein Windhoek suburb, five minutes from the city centre.",
    highlights: ["Owner-operated, personal service", "Self-catering kitchen option", "Small pool and patio"],
    bestFor: "Budget-conscious travellers, solo travellers wanting a personal touch",
    categories: ["family"],
    image: "/images/lodges/villa-violet.jpg",
    alt: "The pool and garden terrace at Villa Violet, Windhoek",
    priceTier: 1,
  },
  {
    slug: "canyon-lodge",
    name: "Canyon Lodge",
    region: "Fish River Canyon",
    regionSlug: "fish-river-canyon",
    description:
      "Thirty rustic chalets built among red granite boulders in Gondwana Canyon Park, near the canyon, and a common base for the multi-day Fish River Trail.",
    highlights: ["Chalets built into granite boulders", "Base for the Fish River Canyon Trail", "Gondwana Canyon Park setting"],
    bestFor: "Hikers, travellers wanting rustic-but-comfortable desert lodging",
    operator: "Gondwana Collection",
    categories: ["desert", "family", "remote"],
    image: "/images/lodges/canyon-lodge.jpg",
    alt: "A guest room built among granite boulders at Canyon Lodge, Fish River Canyon",
    priceTier: 2,
  },
  {
    slug: "nkasa-lupala-tented-lodge",
    name: "Nkasa Lupala Tented Lodge",
    region: "Caprivi Strip",
    regionSlug: "caprivi",
    description:
      "A small 10-tent lodge on Lupala Island in the Kwando-Linyanti river system, built around sustainable, community-linked tourism in Namibia's northeast.",
    highlights: ["Only 10 tents", "River-channel setting", "Community-linked, sustainability-focused"],
    bestFor: "Birders, travellers wanting Namibia's wetter, wildlife-rich northeast",
    categories: ["safari", "remote", "glamping"],
    image: "/images/lodges/nkasa-lupala-tented-lodge.jpg",
    alt: "A dining deck overlooking the floodplain at Nkasa Lupala Tented Lodge",
    priceTier: 2,
  },
  {
    slug: "spitzkoppen-lodge",
    name: "Spitzkoppen Lodge",
    region: "Spitzkoppe",
    regionSlug: "spitzkoppe",
    description:
      "A 15-chalet lodge on the northern edge of the Spitzkoppe massif, connected by elevated walkways designed to minimise disturbance to the ground below.",
    highlights: ["Elevated boardwalk design", "Private chalets with viewing decks", "Granite-boulder setting"],
    bestFor: "Travellers wanting comfort near Spitzkoppe without full camping",
    categories: ["desert"],
    image: "/images/lodges/spitzkoppen-lodge.jpg",
    alt: "Elevated chalets among the granite domes of Spitzkoppen Lodge at dusk",
    priceTier: 2,
  },
  {
    slug: "thitaka-river-lodge",
    name: "Thitaka River Lodge",
    region: "Caprivi Strip",
    regionSlug: "caprivi",
    description:
      "A 2026-opening luxury tented camp on the Kwando River in Bwabwata National Park, Newmark's first Namibian property, set near a key elephant corridor.",
    highlights: ["Twice-daily game drives and river outings", "Elephant-corridor location", "Villas and tents with private pools"],
    bestFor: "Travellers wanting the Zambezi region's river wildlife with full-board luxury",
    operator: "Newmark Hotels",
    categories: ["luxury", "safari", "remote", "glamping"],
    image:
      "https://images.unsplash.com/photo-1740447342649-8b68b10b42d0?q=80&w=1600&auto=format&fit=crop",
    alt: "A river winding through dense green riverine forest, typical of the Zambezi region's wetlands",
    priceTier: 3,
  },
  {
    slug: "luna-namib-collection",
    name: "Luna Namib Collection",
    region: "Sossusvlei",
    regionSlug: "sossusvlei",
    description:
      "A 2026-opening, three-unit ultra-luxury retreat 70km south of Sesriem, with standalone villas, private plunge pools and in-room telescopes for stargazing.",
    highlights: ["Only three standalone units", "Private plunge pools and telescopes", "Dedicated concierge per unit"],
    bestFor: "Couples and small families wanting the highest tier of desert privacy",
    operator: "Gondwana Collection",
    categories: ["luxury", "desert", "romantic"],
    image: "/images/lodges/luna-namib-collection.jpg",
    alt: "A private deck and plunge pool at sunrise at Luna Namib Collection, Sossusvlei",
    priceTier: 3,
  },
];

export const featuredLodges = [
  lodges.find((l) => l.slug === "little-kulala")!,
  lodges.find((l) => l.slug === "grootberg-lodge")!,
  lodges.find((l) => l.slug === "ongava-lodge")!,
  lodges.find((l) => l.slug === "canyon-lodge")!,
];

export function getLodgesForRegion(regionSlug: string) {
  return lodges.filter((l) => l.regionSlug === regionSlug);
}

export function getLodge(slug: string) {
  return lodges.find((l) => l.slug === slug);
}

export function getLodgesByCategory(category: LodgeCategory) {
  return lodges.filter((l) => l.categories.includes(category));
}

export type RoutePlan = {
  days: number;
  slug: string;
  title: string;
  description: string;
  stops: string;
  vehicle: string;
  pace: string;
  bestFor: string;
  image: string;
  alt: string;
  dayByDay: { label: string; text: string; regionSlug?: string }[];
  faqs: { q: string; a: string }[];
};

export const selfDriveRoutes: RoutePlan[] = [
  {
    days: 7,
    slug: "7-days",
    title: "One week",
    description: "A tight loop for a first taste: the dunes, the coast, and one wildlife stop.",
    stops: "Windhoek · Sossusvlei · Swakopmund",
    image:
      "https://images.unsplash.com/photo-1652599720885-abf363ed2992?q=80&w=1600&auto=format&fit=crop",
    alt: "A towering red sand dune in the Namib Desert near Sossusvlei",
    vehicle:
      "A standard 2x4 rental covers this entire route. Sossusvlei's final 5km sand track is shuttle-only anyway, and the roads to Sesriem and Swakopmund are tarred or well-graded gravel throughout.",
    pace: "Tight: one full day at each stop, most of it built around that stop's single headline activity.",
    bestFor: "First-time visitors with a week or less who want a real taste of desert and coast, and can live without a dedicated wildlife stop.",
    dayByDay: [
      {
        label: "Day 1",
        text: "Land in Windhoek, collect your rental car (a 2x4 is all this route needs), and overnight in the capital. One good dinner and an early night beats pushing straight out to the desert on jet lag.",
        regionSlug: "windhoek",
      },
      {
        label: "Days 2–3",
        text: "Drive to Sossusvlei (~5 hours via Rehoboth and Solitaire). Use one morning for the sunrise session: Dune 45, then Deadvlei via the shuttle from the 2x4 car park (mandatory since May 2026, budget a ~30-minute wait), and the cooler late afternoon for Sesriem Canyon.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Days 4–5",
        text: "Drive to Swakopmund (~4–5 hours via Solitaire and the Kuiseb Pass). Two nights on the coast: pick one real activity (sandboarding on the dunes just outside town, or a Walvis Bay boat trip for the flamingo lagoon) and eat well. This is the best food and coffee of the whole trip.",
        regionSlug: "swakopmund",
      },
      {
        label: "Days 6–7",
        text: "Return to Windhoek (~4 hours) with a full day to spare before your flight, or fly out of Walvis Bay directly if your onward schedule allows skipping the drive back.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Is 7 days enough for Namibia?",
        a: "Enough for a genuine taste of the desert and coast, not enough to add a proper wildlife stop. Etosha alone deserves 3–4 nights, which this itinerary doesn't have room for. Treat this as the short version, not the compromise version.",
      },
      {
        q: "Do I need a 4x4 for this route?",
        a: "No. Everything on this loop (Windhoek, Sossusvlei, Swakopmund) is reachable on tarred or well-graded gravel roads in a standard 2x4, and Sossusvlei's soft-sand final stretch is shuttle-only regardless of what you're driving.",
      },
      {
        q: "Can I fit Etosha into a 7-day trip?",
        a: "Only by cutting Swakopmund to one night, and even then it's tight. If wildlife matters to you, the 10-day itinerary is the shorter route that actually has room for it properly.",
      },
      {
        q: "How much total driving does the 7-day route involve?",
        a: "Around 13 hours spread across three legs: roughly 5 hours from Windhoek to Sossusvlei, 4–5 hours on to Swakopmund, and 4 hours back to Windhoek (or a flight out of Walvis Bay instead of that last leg). It's less driving than the longer itineraries, which is part of the trade-off for skipping a dedicated wildlife stop.",
      },
    ],
  },
  {
    days: 10,
    slug: "10-days",
    title: "Ten days",
    description: "The classic Namibian circuit, unhurried, with two nights in each key region.",
    stops: "Windhoek · Sossusvlei · Swakopmund · Damaraland · Etosha",
    image:
      "https://images.unsplash.com/photo-1643749678251-76783e5f1777?q=80&w=1600&auto=format&fit=crop",
    alt: "Elephant standing on the dry, dusty plains of Etosha National Park",
    vehicle:
      "A high-clearance 2x4 is workable, but a 4x4 earns its keep once you're on Damaraland's gravel D-roads, worth the upgrade for this route specifically.",
    pace: "Two nights per stop: the standard, comfortable Namibia rhythm, with a driving day built into each transfer rather than squeezed around it.",
    bestFor: "A first full Namibia trip that covers desert, coast and wildlife properly, without the long southern or northeastern detours.",
    dayByDay: [
      {
        label: "Day 1",
        text: "Land at Hosea Kutako International Airport, around 45 minutes from the city centre, collect your rental car, and overnight in Windhoek, the standard one-night bookend before the long drives start.",
        regionSlug: "windhoek",
      },
      {
        label: "Days 2–3",
        text: "Drive to Sossusvlei (~5 hours via Rehoboth and Solitaire) for one sunrise session at Dune 45 and Deadvlei (shuttle from the 2x4 car park, since it's mandatory for that final stretch), and Sesriem Canyon in the cooler part of the day.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Days 4–5",
        text: "Drive to Swakopmund (~4–5 hours via Solitaire and the Kuiseb Pass) for two nights on the coast, one real activity (sandboarding or a Walvis Bay boat trip), and the best food on the route.",
        regionSlug: "swakopmund",
      },
      {
        label: "Days 6–7",
        text: "Damaraland (~3–4 hours from Swakopmund via Uis): Twyfelfontein's rock engravings, a genuine UNESCO World Heritage Site, on the first day; a guided drive tracking desert-adapted elephant on the second (sightings aren't guaranteed, but this is the best realistic chance in the country).",
        regionSlug: "damaraland",
      },
      {
        label: "Days 8–9",
        text: "Etosha (~4 hours from Damaraland via Kamanjab and Outjo): split between a private-reserve lodge for night drives and off-road tracking, and waterhole viewing either inside the park or from camp.",
        regionSlug: "etosha",
      },
      {
        label: "Day 10",
        text: "Drive back to Windhoek (~4.5 hours) for your departure flight.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Is 10 days the right length for a first Namibia trip?",
        a: "For most people, yes, it's the shortest itinerary that covers desert, coast and a proper wildlife stop without turning every day into a driving day. This is the route we'd recommend by default.",
      },
      {
        q: "Should I rent a 4x4 for this itinerary?",
        a: "Yes, worth it specifically because of Damaraland's gravel D-roads. A high-clearance 2x4 can manage, but a 4x4 is the more comfortable, lower-risk choice for that leg. Etosha, Sossusvlei and Swakopmund alone wouldn't require it.",
      },
      {
        q: "Can I skip Damaraland to avoid the 4x4 upgrade?",
        a: "Yes, drop back to the 7-day route's coverage and add a third Etosha night instead, or swap Damaraland for a second Swakopmund activity day. You'll lose the desert-adapted elephant and Twyfelfontein, which is a real trade-off, not a minor one.",
      },
      {
        q: "How much total driving does the 10-day route involve?",
        a: "Around 21 hours across five legs: roughly 5 hours to Sossusvlei, 4–5 hours on to Swakopmund, 3–4 hours to Damaraland, 4 hours to Etosha, and 4.5 hours back to Windhoek. That's just over 2 hours a day on average once it's spread across ten days, since each two-night stop leaves a full day with no driving at all.",
      },
    ],
  },
  {
    days: 14,
    slug: "14-days",
    title: "Two weeks",
    description: "Room to add Fish River Canyon and Spitzkoppe without rushing the driving days.",
    stops: "Windhoek · Fish River Canyon · Sossusvlei · Spitzkoppe · Swakopmund · Damaraland · Etosha",
    image:
      "https://images.unsplash.com/photo-1687504692250-fa84b3c78507?q=80&w=1600&auto=format&fit=crop",
    alt: "An elevated view over Fish River Canyon in southern Namibia",
    vehicle:
      "4x4 recommended for the full loop: this route covers Damaraland's gravel D-roads and the long southern detour to Fish River Canyon, both more comfortable with higher clearance.",
    pace: "Comfortable, with real slack: most stops get two or more nights and there's room to adjust if weather, fatigue or a missed sunrise calls for it.",
    bestFor: "Travellers who want the classic circuit plus the south, without the long-haul detours of Caprivi or the Skeleton Coast.",
    dayByDay: [
      {
        label: "Day 1",
        text: "Land in Windhoek, collect your 4x4 rental (this loop calls for the clearance on Damaraland's D-roads and the Fish River Canyon detour later), and overnight in the capital before the long drives south begin.",
        regionSlug: "windhoek",
      },
      {
        label: "Days 2–3",
        text: "Fish River Canyon (~5.5 hours south): the rim viewpoints near Hobas at golden hour, no hiking required for a stop this length. Namibia's most overlooked headline sight, and a real detour that adds meaningful driving to the loop.",
        regionSlug: "fish-river-canyon",
      },
      {
        label: "Days 4–5",
        text: "Sossusvlei (drive back north, ~4–5 hours): sunrise at Dune 45 and Deadvlei via the shuttle, Sesriem Canyon in the afternoon heat.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Day 6",
        text: "Spitzkoppe: a short detour on the way toward the coast. One night for sunset, some of the best stargazing on the route, and sunrise on the granite domes. Facilities here are rustic community campsites, not lodge comfort.",
        regionSlug: "spitzkoppe",
      },
      {
        label: "Days 7–8",
        text: "Swakopmund: two nights on the coast, one real activity (sandboarding on the dunes just outside town, or a Walvis Bay boat trip for the flamingo lagoon), and the best food of the trip.",
        regionSlug: "swakopmund",
      },
      {
        label: "Days 9–10",
        text: "Damaraland (~3–4 hours from Swakopmund via Uis): Twyfelfontein's rock engravings, a genuine UNESCO World Heritage Site, on the first day; a guided drive tracking desert-adapted elephant on the second (sightings aren't guaranteed, but this is the best realistic chance in the country).",
        regionSlug: "damaraland",
      },
      {
        label: "Days 11–13",
        text: "Etosha: three nights, split between a private-reserve lodge for night drives and off-road tracking (not permitted inside the park) and a park camp for floodlit-waterhole viewing, with enough time to reach both the eastern and western sections rather than picking one side.",
        regionSlug: "etosha",
      },
      {
        label: "Day 14",
        text: "Drive back to Windhoek (~4.5 hours) for your departure flight.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Is Fish River Canyon worth the detour on a 14-day trip?",
        a: "Yes, if you have the days, it's one of the largest canyons on earth with a fraction of the visitors of comparable sights elsewhere. The honest trade-off is real driving time added to the loop, which is exactly why it doesn't appear on the 7- or 10-day routes.",
      },
      {
        q: "Do I need a 4x4 for the Fish River Canyon detour specifically?",
        a: "No, the main tar and gravel roads south are fine in a 2x4, and the rim viewpoints themselves need no 4x4 at all. It's the combination with Damaraland later in this same loop that makes 4x4 the sensible choice for the whole trip.",
      },
      {
        q: "Can I do this itinerary without Spitzkoppe?",
        a: "Yes, it's a one-night detour, easy to drop if you'd rather add a third night in Swakopmund or Sossusvlei instead. You'd lose one of the best stargazing stops on the route, which is the only real cost.",
      },
      {
        q: "Could I run this route in reverse, starting with Etosha?",
        a: "Yes, swapping to Etosha and Damaraland first, then Fish River Canyon last, works just as well logistically, since neither leg depends on the other. The order here is built for pacing: starting in the south eases you into the trip before the coast, then saves Etosha's wildlife as the highlight closer to the end.",
      },
    ],
  },
  {
    days: 21,
    slug: "21-days",
    title: "Three weeks",
    description: "The full country, including the Skeleton Coast, Caprivi Strip and a wildlife-rich finish.",
    stops: "Windhoek · Fish River Canyon · Sossusvlei · Spitzkoppe · Swakopmund · Skeleton Coast · Damaraland · Etosha · Caprivi",
    image:
      "https://images.unsplash.com/photo-1667506609659-599fb1f59f94?q=80&w=1600&auto=format&fit=crop",
    alt: "A shipwreck washed up on the sand of the Skeleton Coast, Namibia",
    vehicle:
      "4x4 for the self-drive legs: Damaraland and the Fish River Canyon detour both call for it. Budget for at least one internal flight too: the Skeleton Coast's standout northern lodges and the Caprivi Strip are both normally reached by air from this point in the loop, not by road.",
    pace: "The full country, unrushed: this is the itinerary for travellers with three weeks who want to see all of it, not just the classic loop.",
    bestFor: "Repeat visitors, or first-timers with the time to do Namibia properly, including its most remote coastline and its water-rich northeast.",
    dayByDay: [
      {
        label: "Day 1",
        text: "Land in Windhoek, collect your 4x4 rental, and overnight in the capital, the standard bookend before three weeks of driving and, later, at least one internal flight.",
        regionSlug: "windhoek",
      },
      {
        label: "Days 2–3",
        text: "Fish River Canyon (~5.5 hours south): the rim viewpoints near Hobas at golden hour, no hiking required.",
        regionSlug: "fish-river-canyon",
      },
      {
        label: "Days 4–5",
        text: "Sossusvlei (drive back north, ~4–5 hours): sunrise at Dune 45 and Deadvlei via the shuttle, Sesriem Canyon.",
        regionSlug: "sossusvlei",
      },
      {
        label: "Day 6",
        text: "Spitzkoppe: a short detour on the way toward the coast. One night for sunset, some of the best stargazing on the route, and sunrise on the granite domes. Facilities here are rustic community campsites, not lodge comfort.",
        regionSlug: "spitzkoppe",
      },
      {
        label: "Days 7–8",
        text: "Swakopmund: two nights on the coast, one real activity (sandboarding or a Walvis Bay boat trip for the flamingo lagoon), and the trip's best food.",
        regionSlug: "swakopmund",
      },
      {
        label: "Days 9–10",
        text: "Skeleton Coast: two nights. The standout northern lodges are normally fly-in only from Swakopmund; a short self-drive detour from Damaraland only reaches the less remote southern section. Seal colonies, shipwrecks and true remoteness either way.",
        regionSlug: "skeleton-coast",
      },
      {
        label: "Days 11–12",
        text: "Damaraland: Twyfelfontein's rock engravings, a genuine UNESCO World Heritage Site, and a guided desert-adapted elephant tracking drive (sightings aren't guaranteed, but this is the best realistic chance in the country).",
        regionSlug: "damaraland",
      },
      {
        label: "Days 13–15",
        text: "Etosha: three nights, split between a private-reserve lodge for night drives and off-road tracking and waterhole-side camps inside the park, with enough time to reach both the eastern and western sections rather than picking one side.",
        regionSlug: "etosha",
      },
      {
        label: "Days 16–18",
        text: "Fly or make the long drive (~12 hours) to the Caprivi Strip: most people fly to Katima Mulilo from this point rather than drive it. Three nights of river cruises for hippo and birdlife, and a game drive in Bwabwata National Park, a genuinely different Namibia from the desert circuit behind you.",
        regionSlug: "caprivi",
      },
      {
        label: "Days 19–21",
        text: "Return to Windhoek to close the loop: most travellers fly back from Katima Mulilo rather than repeat the ~12-hour drive, especially with an international departure to catch by Day 21.",
        regionSlug: "windhoek",
      },
    ],
    faqs: [
      {
        q: "Do I need to fly anywhere on this 21-day route?",
        a: "Realistically, yes, at least once: the Skeleton Coast's best lodges and the Caprivi Strip are both normally reached by light aircraft or domestic flight rather than self-drive, given the distances involved. Budget for it when pricing this itinerary out.",
      },
      {
        q: "Is 3 weeks too long for Namibia?",
        a: "Not given the country's driving distances: 3 weeks is what lets you add both extremes (the Skeleton Coast and Caprivi) to the classic loop without turning the whole trip into transit days. Most travellers doing this length are repeat visitors or specifically prioritising remoteness.",
      },
      {
        q: "Could I do this route in a 2x4 instead of a 4x4?",
        a: "Not comfortably: Damaraland's D-roads and the Fish River Canyon detour are the two legs where a 4x4 makes a real difference, and this itinerary includes both. If you want to stay in a 2x4, the 7-day route is the one built for it.",
      },
      {
        q: "Could I run this itinerary in the opposite direction?",
        a: "Yes structurally, starting with Etosha and the north, then heading south to Fish River Canyon last, works just as well, since neither the Skeleton Coast nor the Caprivi legs depend on which direction you're travelling. The one fixed point is Windhoek itself: both ends of the trip anchor to its airport, so whichever direction you choose, you're still flying in and out of the same city.",
      },
    ],
  },
];

export function getRoute(slug: string) {
  return selfDriveRoutes.find((r) => r.slug === slug);
}

export type Experience = {
  title: string;
  description: string;
  icon: "crown" | "tent" | "users" | "heart" | "binoculars" | "compass" | "fire" | "wheat";
  href: string;
};

export const experiences: Experience[] = [
  { title: "Luxury lodges", description: "Design-led camps with the highest level of service and privacy.", icon: "crown", href: "/best-luxury-lodges" },
  { title: "Desert camps", description: "Small, remote and built to disappear into the landscape.", icon: "tent", href: "/best-desert-lodges" },
  { title: "Family stays", description: "Interleading rooms, kids' programmes and gentle game drives.", icon: "users", href: "/best-family-lodges" },
  { title: "Romantic escapes", description: "Private decks, sleep-outs and dinners built for two.", icon: "heart", href: "/best-romantic-stays" },
  { title: "Safari lodges", description: "Waterhole frontages and expert guiding near Etosha.", icon: "binoculars", href: "/best-safari-lodges" },
  { title: "Remote stays", description: "A night somewhere with no other guests for a hundred kilometres.", icon: "compass", href: "/most-remote-lodges" },
  { title: "Glamping", description: "Canvas comfort without giving up a proper bed and bathroom.", icon: "fire", href: "/namibia-glamping" },
  { title: "Farm stays", description: "Working homesteads turned into quiet, unpretentious guesthouses.", icon: "wheat", href: "/namibia-farm-stays" },
];

export type Guide = {
  title: string;
  href: string;
};

export const popularGuides: Guide[] = [
  { title: "Best Lodges in Namibia", href: "/best-lodges-in-namibia" },
  { title: "Where to Stay in Etosha", href: "/where-to-stay/etosha" },
  { title: "Where to Stay in Sossusvlei", href: "/where-to-stay/sossusvlei" },
  { title: "Namibia Self-Drive Guide", href: "/namibia-self-drive-guide" },
  { title: "Best Time to Visit Namibia", href: "/best-time-to-visit-namibia" },
  { title: "Namibia Visa Requirements", href: "/namibia-visa-requirements" },
  { title: "Is Namibia Safe? Safety & Health", href: "/namibia-safety-and-health" },
  { title: "How Much Does a Namibia Trip Cost?", href: "/namibia-trip-cost" },
  { title: "Namibia Wildlife Guide", href: "/namibia-wildlife-guide" },
];
