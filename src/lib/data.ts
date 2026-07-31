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
};

export const regions: Region[] = [
  {
    slug: "etosha",
    name: "Etosha",
    description:
      "A vast salt pan rimmed with waterholes where elephant, lion and rhino gather at dusk.",
    quickAnswer:
      "Etosha is Namibia's flagship wildlife destination: a 22,000km² national park built around a vast, shimmering salt pan. Base yourself at a lodge on the park's private boundary reserves (Ongava, Onguma) for night drives and off-road tracking, or inside the park itself for floodlit waterhole viewing without leaving your camp.",
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
        a: "Private reserves like Ongava allow night drives and off-road tracking that aren't permitted inside the national park itself — a real trade-off against staying inside for the classic floodlit-waterhole camp experience.",
      },
    ],
  },
  {
    slug: "sossusvlei",
    name: "Sossusvlei",
    description:
      "The Namib's towering red dunes, dead camel-thorn trees and some of the darkest skies on earth.",
    quickAnswer:
      "Sossusvlei is the postcard image of Namibia: 300-metre red dunes rising out of a white clay pan, dotted with the fossilised trees of Deadvlei. Stay on a private reserve bordering Namib-Naukluft Park (like Kulala Wilderness Reserve) for a private gate that beats the sunrise crowds at the public entrance.",
    bestFor: "Photography, sunrise dune walks",
    avoidIf: "You dislike early starts — the best light is before 8am",
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
        a: "The tar and gravel road to Sesriem is fine in a normal car; the last 5km of soft sand to Sossusvlei itself needs 4x4 or the park's shuttle service.",
      },
      {
        q: "What time should I arrive at the dunes?",
        a: "Gates open at sunrise. Arriving right at opening avoids both the heat and the crowds on Dune 45 and at Deadvlei.",
      },
    ],
  },
  {
    slug: "swakopmund",
    name: "Swakopmund",
    description:
      "A colonial seaside town where the dunes meet the Atlantic, and the pace finally slows.",
    quickAnswer:
      "Swakopmund is Namibia's coastal reset button — a walkable German-colonial town between the Namib dunes and a cold Atlantic swell, with genuinely good restaurants and a full menu of adrenaline activities (skydiving, sandboarding, quad biking) on its doorstep.",
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
    ],
  },
  {
    slug: "damaraland",
    name: "Damaraland",
    description:
      "Ochre mountains, desert-adapted elephant and some of Namibia's most striking rock art.",
    quickAnswer:
      "Damaraland is Namibia's community-conservancy heartland — open, ochre-coloured mountain desert where desert-adapted elephant roam between dry riverbeds, and several lodges are genuinely community-owned rather than just community-adjacent.",
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
      "Wildlife is wild and free-roaming — sightings aren't guaranteed",
      "Distances between sights are long on gravel roads",
      "Fewer dining options than the coast or the capital",
    ],
    nearby: ["Twyfelfontein rock art", "Skeleton Coast", "Spitzkoppe"],
    faqs: [
      {
        q: "Can I see elephants in Damaraland?",
        a: "Desert-adapted elephant move along dry riverbeds and sightings are never guaranteed, but guided tracking with a local lodge gives you the best realistic chance.",
      },
    ],
  },
  {
    slug: "skeleton-coast",
    name: "Skeleton Coast",
    description:
      "Fog, shipwrecks and seal colonies along one of the most remote coastlines in Africa.",
    quickAnswer:
      "The Skeleton Coast is Namibia's most remote, least-visited landscape — a fog-bound strip where the Namib dunes run straight into a cold, wreck-strewn Atlantic. Most travellers see it via a short detour from Damaraland, or fly in for a proper multi-night stay with a dedicated operator.",
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
      "True remoteness — some lodges see no other traffic for a hundred kilometres",
      "Seal colonies, shipwrecks and desert-adapted wildlife excursions",
      "Some of the most dramatic, least-photographed coastline in Africa",
    ],
    cons: [
      "Getting there properly usually means flying, which adds real cost",
      "Persistent coastal fog can limit visibility for large parts of the day",
      "Very few accommodation options — book well ahead",
    ],
    nearby: ["Damaraland", "Kaokoveld / Kunene region"],
    faqs: [
      {
        q: "Do I need to fly to the Skeleton Coast?",
        a: "A short southern section is reachable by self-drive from Damaraland, but the northern Skeleton Coast (where the standout lodges are) is normally fly-in only.",
      },
    ],
  },
  {
    slug: "windhoek",
    name: "Windhoek",
    description:
      "Namibia's compact, German-inflected capital — most itineraries begin and end here.",
    quickAnswer:
      "Windhoek is where almost every Namibian trip starts and ends, thanks to Hosea Kutako International Airport. It's compact, walkable in parts, and worth one night to collect your rental car, adjust to the time zone and eat well before heading into the desert.",
    bestFor: "Arrival and departure nights",
    avoidIf: "You've got a same-day onward flight and no need to overnight",
    recommendedStay: "1 night",
    driveFromWindhoek: "—",
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
        a: "For most itineraries, yes — one night bookending each end of the trip is standard, more if you land late or have an early departure.",
      },
    ],
  },
  {
    slug: "fish-river-canyon",
    name: "Fish River Canyon",
    description:
      "The second-largest canyon on earth, best seen at golden hour from the rim.",
    quickAnswer:
      "Fish River Canyon is Namibia's south, and its most overlooked headline sight — a 160km-long, 550m-deep gorge that rivals the Grand Canyon for scale without the crowds. Most visitors see it from the rim viewpoints; serious hikers tackle the multi-day trail below.",
    bestFor: "Hiking, dramatic viewpoints",
    avoidIf: "The south doesn't fit your route — it's a detour from the main circuit",
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
      "It's a real detour south — adds significant driving to a standard loop",
      "The multi-day trail only runs May to September and requires a medical certificate",
      "Very few accommodation options nearby",
    ],
    nearby: ["Ai-Ais hot springs", "Namibia/South Africa border region"],
    faqs: [
      {
        q: "Can I see the canyon without hiking?",
        a: "Yes — the main rim viewpoints near Hobas are a short walk from the car park and give you the classic canyon view.",
      },
    ],
  },
  {
    slug: "caprivi",
    name: "Caprivi Strip",
    description:
      "Namibia's green, water-rich panhandle — rivers, floodplains and a different rhythm entirely.",
    quickAnswer:
      "The Caprivi Strip (officially the Zambezi Region) is a different Namibia entirely — a thin, water-rich panhandle of rivers and floodplains bordering Botswana, Zambia and Angola, better suited to birding and river-based wildlife than the desert circuit further south.",
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
      "Genuinely different landscape from the rest of Namibia — rivers, not desert",
      "Strong birding and river-based wildlife viewing",
      "A natural bridge into Botswana's Okavango Delta or Chobe",
    ],
    cons: [
      "Far from the rest of the country — most people fly rather than drive",
      "Malaria precautions are relevant here, unlike most of the rest of Namibia",
      "Limited lodge choice compared to the desert regions",
    ],
    nearby: ["Chobe National Park (Botswana)", "Bwabwata National Park"],
    faqs: [
      {
        q: "Is the Caprivi Strip worth adding to a Namibia trip?",
        a: "It's best treated as an extension for travellers continuing into Botswana or Zambia, rather than a stop on a standard two-week Namibia loop.",
      },
    ],
  },
  {
    slug: "spitzkoppe",
    name: "Spitzkoppe",
    description:
      "Granite peaks rising sheer from the plains — Namibia's answer to Table Mountain.",
    quickAnswer:
      "Spitzkoppe is a cluster of granite peaks rising straight out of flat gravel plains, easily added as a one-night detour between Swakopmund and Damaraland. It's one of the best stargazing spots on the entire route, with no light pollution for a hundred kilometres.",
    bestFor: "Stargazing, one-night detours",
    avoidIf: "You want full-service lodge comfort — this is mostly rustic camping",
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
      "Very limited facilities — bring supplies with you",
      "Exposed terrain means no shade during the heat of the day",
    ],
    nearby: ["Swakopmund", "Erongo Mountains"],
    faqs: [
      {
        q: "Is Spitzkoppe worth an overnight stop?",
        a: "Yes for the sunset, night sky and sunrise alone — it's one of the most photogenic single nights on a Namibian itinerary.",
      },
    ],
  },
];

export function getRegion(slug: string) {
  return regions.find((r) => r.slug === slug);
}

export type Lodge = {
  slug: string;
  name: string;
  region: string;
  regionSlug: string;
  description: string;
  highlights: string[];
  bestFor: string;
  operator?: string;
  image: string;
  alt: string;
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
    image:
      "https://images.unsplash.com/photo-1711721013738-146212eb5fae?q=80&w=1600&auto=format&fit=crop",
    alt: "A giraffe grazing near a waterhole lodge on the edge of Etosha",
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
    image:
      "https://images.unsplash.com/photo-1643749678251-76783e5f1777?q=80&w=1600&auto=format&fit=crop",
    alt: "Elephant on the open plains near Etosha, close to Onguma Private Game Reserve",
  },
  {
    slug: "mushara-lodge",
    name: "Mushara Lodge",
    region: "Etosha",
    regionSlug: "etosha",
    description:
      "A chalet-style lodge near Etosha's eastern Von Lindequist Gate, positioned as an easy, traditional base for exploring the park.",
    highlights: ["Close to the eastern park gate", "Thatch-and-timber public areas", "Sister property nearby"],
    bestFor: "Families, travellers wanting proximity over remoteness",
    image:
      "https://images.unsplash.com/photo-1688999988308-ede80a12eb89?q=80&w=1600&auto=format&fit=crop",
    alt: "A lodge building set against a rocky hillside near Etosha",
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
    image:
      "https://images.unsplash.com/photo-1711721013732-3eff3c6d0a3a?q=80&w=1600&auto=format&fit=crop",
    alt: "A tented desert lodge suite set against the Namib dune belt",
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
    image:
      "https://images.unsplash.com/photo-1652599720885-abf363ed2992?q=80&w=1600&auto=format&fit=crop",
    alt: "A towering red sand dune in the Namib Desert near Sossusvlei",
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
    image:
      "https://images.unsplash.com/photo-1711721013732-3eff3c6d0a3a?q=80&w=1600&auto=format&fit=crop",
    alt: "A tented desert lodge suite set against the Namib dune belt",
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
    image:
      "https://images.unsplash.com/photo-1772289935377-c5a8ceb51e6d?q=80&w=1600&auto=format&fit=crop",
    alt: "Rocky desert landscape of Damaraland at sunset",
  },
  {
    slug: "grootberg-lodge",
    name: "Grootberg Lodge",
    region: "Damaraland",
    regionSlug: "damaraland",
    description:
      "Believed to be Namibia's first fully community-owned lodge, built in 2005 with the local ≠Khoadi //Hoas community, set along a ridge with valley views from every room.",
    highlights: ["Fully community-owned", "Ridge-top views from every room", "Rhino tracking access"],
    bestFor: "Travellers prioritising community tourism, photographers",
    image:
      "https://images.unsplash.com/photo-1688999988308-ede80a12eb89?q=80&w=1600&auto=format&fit=crop",
    alt: "A lodge built into a rocky hillside ridge in Damaraland",
  },
  {
    slug: "doro-nawas-camp",
    name: "Doro Nawas Camp",
    region: "Damaraland",
    regionSlug: "damaraland",
    description:
      "A camp on an elevated rocky hill in the Doro !Nawas Conservancy, run in partnership with the local community, with easy access to the Twyfelfontein rock art site.",
    highlights: ["Elevated hilltop position", "Conservancy partnership", "Close to Twyfelfontein rock art"],
    bestFor: "Couples combining culture and landscape",
    operator: "Wilderness Safaris",
    image:
      "https://images.unsplash.com/photo-1772289935377-c5a8ceb51e6d?q=80&w=1600&auto=format&fit=crop",
    alt: "Rocky desert landscape of Damaraland at sunset",
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
    image:
      "https://images.unsplash.com/photo-1667506609659-599fb1f59f94?q=80&w=1600&auto=format&fit=crop",
    alt: "A shipwreck washed up on the sand of the Skeleton Coast, Namibia",
  },
  {
    slug: "hoanib-skeleton-coast-camp",
    name: "Hoanib Skeleton Coast Camp",
    region: "Skeleton Coast",
    regionSlug: "skeleton-coast",
    description:
      "A fly-in-only camp of seven tents plus one family unit, reached solely by light aircraft, used as a base for desert-adapted elephant, lion and other rare wildlife.",
    highlights: ["Fly-in access only", "Desert-adapted wildlife focus", "Optional coastline and seal-colony excursion"],
    bestFor: "Serious wildlife photographers, remote-adventure travellers",
    operator: "Wilderness Safaris",
    image:
      "https://images.unsplash.com/photo-1711721013732-3eff3c6d0a3a?q=80&w=1600&auto=format&fit=crop",
    alt: "A tented camp in a remote desert setting",
  },
  {
    slug: "the-delight-swakopmund",
    name: "The Delight Swakopmund",
    region: "Swakopmund",
    regionSlug: "swakopmund",
    description:
      "A 54-room boutique hotel in downtown Swakopmund with colourful, contemporary design — a stylish alternative to the town's older guesthouse stock.",
    highlights: ["Central downtown location", "Contemporary design", "Breakfast, water, parking and Wi-Fi included"],
    bestFor: "Couples, design-conscious travellers, city-break stopovers",
    operator: "Gondwana Collection",
    image:
      "https://images.unsplash.com/photo-1593870893332-a5f39aaa2541?q=80&w=1600&auto=format&fit=crop",
    alt: "The red and white lighthouse in Swakopmund, Namibia",
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
    image:
      "https://images.unsplash.com/photo-1576599875928-56b40063f3cb?q=80&w=1600&auto=format&fit=crop",
    alt: "A white and yellow colonial-era building in Swakopmund",
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
    image:
      "https://images.unsplash.com/photo-1586100810957-e4a1fed8c645?q=80&w=1600&auto=format&fit=crop",
    alt: "The Christuskirche, a landmark church in Windhoek, Namibia",
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
    image:
      "https://images.unsplash.com/photo-1586100810957-e4a1fed8c645?q=80&w=1600&auto=format&fit=crop",
    alt: "The Christuskirche, a landmark church in Windhoek, Namibia",
  },
  {
    slug: "canyon-lodge",
    name: "Canyon Lodge",
    region: "Fish River Canyon",
    regionSlug: "fish-river-canyon",
    description:
      "Thirty rustic chalets built directly among red granite boulders in Gondwana Canyon Park, 20km east of the canyon itself, and a common base for the multi-day Fish River Canyon Trail.",
    highlights: ["Chalets built into granite boulders", "Base for the Fish River Canyon Trail", "Gondwana Canyon Park setting"],
    bestFor: "Hikers, travellers wanting rustic-but-comfortable desert lodging",
    operator: "Gondwana Collection",
    image:
      "https://images.unsplash.com/photo-1693921148867-3e469f9f1d4f?q=80&w=1600&auto=format&fit=crop",
    alt: "A covered veranda with table and chairs at a lodge near Fish River Canyon",
  },
  {
    slug: "nkasa-lupala-tented-lodge",
    name: "Nkasa Lupala Tented Lodge",
    region: "Caprivi Strip",
    regionSlug: "caprivi",
    description:
      "A small 10-tent lodge on Lupala Island in the Kwando-Linyanti river system, on the edge of Nkasa Rupara National Park, built around sustainable, community-linked tourism.",
    highlights: ["Only 10 tents", "River-channel setting", "Community-linked, sustainability-focused"],
    bestFor: "Birders, travellers wanting Namibia's wetter, wildlife-rich northeast",
    image:
      "https://images.unsplash.com/photo-1598338332181-c7a78afa1198?q=80&w=1600&auto=format&fit=crop",
    alt: "Silhouetted trees along a river at sunset in the Caprivi Strip",
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
    image:
      "https://images.unsplash.com/photo-1719575366943-76d16957fa90?q=80&w=1600&auto=format&fit=crop",
    alt: "Granite peaks of Spitzkoppe rising from the Namibian desert plains",
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

export type RoutePlan = {
  days: number;
  title: string;
  description: string;
  stops: string;
};

export const selfDriveRoutes: RoutePlan[] = [
  {
    days: 7,
    title: "One week",
    description: "A tight loop for a first taste — the dunes, the coast, and one wildlife stop.",
    stops: "Windhoek · Sossusvlei · Swakopmund",
  },
  {
    days: 10,
    title: "Ten days",
    description: "The classic Namibian circuit, unhurried, with two nights in each key region.",
    stops: "Windhoek · Sossusvlei · Swakopmund · Damaraland · Etosha",
  },
  {
    days: 14,
    title: "Two weeks",
    description: "Room to add Fish River Canyon or Spitzkoppe without rushing the driving days.",
    stops: "Windhoek · Fish River Canyon · Sossusvlei · Swakopmund · Damaraland · Etosha",
  },
  {
    days: 21,
    title: "Three weeks",
    description: "The full country, including the Caprivi Strip and a wildlife-rich finish.",
    stops: "Windhoek · South · Namib · Coast · Damaraland · Etosha · Caprivi",
  },
];

export type Experience = {
  title: string;
  description: string;
  icon: "crown" | "tent" | "users" | "heart" | "binoculars" | "compass" | "fire" | "wheat";
};

export const experiences: Experience[] = [
  { title: "Luxury lodges", description: "Design-led camps with the highest level of service and privacy.", icon: "crown" },
  { title: "Desert camps", description: "Small, remote and built to disappear into the landscape.", icon: "tent" },
  { title: "Family stays", description: "Interleading rooms, kids' programmes and gentle game drives.", icon: "users" },
  { title: "Romantic escapes", description: "Private decks, sleep-outs and dinners built for two.", icon: "heart" },
  { title: "Safari lodges", description: "Waterhole frontages and expert guiding near Etosha.", icon: "binoculars" },
  { title: "Remote stays", description: "A night somewhere with no other guests for a hundred kilometres.", icon: "compass" },
  { title: "Glamping", description: "Canvas comfort without giving up a proper bed and bathroom.", icon: "fire" },
  { title: "Farm stays", description: "Working homesteads turned into quiet, unpretentious guesthouses.", icon: "wheat" },
];

export type Guide = {
  title: string;
  href: string;
};

export const popularGuides: Guide[] = [
  { title: "Best Lodges in Namibia", href: "/best-lodges-in-namibia" },
  { title: "Where to Stay in Etosha", href: "/where-to-stay/etosha" },
  { title: "Where to Stay in Sossusvlei", href: "/where-to-stay/sossusvlei" },
  { title: "Namibia Self Drive Guide", href: "/namibia-self-drive" },
  { title: "Best Time to Visit Namibia", href: "/best-time-to-visit-namibia" },
];
