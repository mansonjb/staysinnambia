/**
 * Content for the Cricket World Cup 2027 guide (Windhoek).
 *
 * Structure is locale-neutral: every locale file (cricket-wc.{de,nl,fr,it}.ts) exports an object
 * of the same `CricketContent` shape. Inline citations use the marker `[n]` or `[n, m]`, which the
 * page component turns into links to the numbered SOURCES list below. Keep the markers identical
 * across locales. Numbers, dates, URLs and source titles are never translated.
 */

export type Source = {
  id: number;
  title: string;
  publisher: string;
  date: string;
  url: string;
};

export const LAST_UPDATED_ISO = "2026-11-21";

export const SOURCES: Source[] = [
  { id: 1, title: "Fixture schedule announced for ICC Men's Cricket World Cup 2027", publisher: "ICC", date: "1 Oct 2026", url: "https://www.icc-cricket.com/tournaments/icc-cricket-world-cup-2027/news/fixture-schedule-announced-for-icc-men-s-cricket-world-cup-2027" },
  { id: 2, title: "Men's Cricket World Cup 2027 venues and brand revealed", publisher: "ICC", date: "30 Jul 2026", url: "https://www.icc-cricket.com/tournaments/icc-cricket-world-cup-2027/news/men-s-cricket-world-cup-2027-venues-and-brand-revealed" },
  { id: 3, title: "Ticket ballot to go live for Men's Cricket World Cup 2027", publisher: "ICC", date: "30 Sep 2026", url: "https://www.icc-cricket.com/tournaments/icc-cricket-world-cup-2027/news/ticket-ballot-to-go-live-for-men-s-cricket-world-cup-2027" },
  { id: 4, title: "ICC receives 120 million ticket requests for Men's Cricket World Cup 2027", publisher: "ICC media release", date: "2 Nov 2026", url: "https://www.icc-cricket.com/media-releases/icc-receives-120-million-ticket-requests-for-men-s-cricket-world-cup-2027" },
  { id: 5, title: "Namibia welcome the world as stadium build nears completion", publisher: "ICC", date: "1 Mar 2025", url: "https://www.icc-cricket.com/news/namibia-welcome-the-world-as-stadium-build-nears-completion" },
  { id: 6, title: "Namibia readies for 'lekker' Cricket world cups", publisher: "The Namibian", date: "23 Mar 2024", url: "https://www.namibian.com.na/namibia-readies-for-lekker-cricket-world-cups/" },
  { id: 7, title: "When does the 2027 Cricket World Cup start? Key details ahead of tournament", publisher: "ICC", date: "2 Oct 2026", url: "https://www.icc-cricket.com/tournaments/icc-cricket-world-cup-2027/news/when-does-the-2027-cricket-world-cup-start-key-details-ahead-of-tournament" },
  { id: 8, title: "Path to 2027 World Cup: Qualifier format confirmed", publisher: "ICC", date: "15 Nov 2026", url: "https://www.icc-cricket.com/tournaments/icc-cricket-world-cup-2027/news/path-to-2027-world-cup-qualifier-format-confirmed" },
  { id: 9, title: "Cricket Namibia passes ICC test", publisher: "The Namibian", date: "28 Jan 2026", url: "https://www.namibian.com.na/cricket-namibia-passes-icc-test/" },
  { id: 10, title: "Namibia gripped by Cricket World Cup fever", publisher: "Namibian.org", date: "13 Jan 2026", url: "https://namibian.org/blog/namibia-gripped-by-cricket-world-cup-fever" },
  { id: 11, title: "Cricket World Cup 2027: South Africa, Zimbabwe and Namibia", publisher: "Tailormade Africa", date: "read Nov 2026", url: "https://www.tailormadeafrica.com/sports-tours/cricket-world-cup-2027-sa-zim-nam/" },
  { id: 12, title: "Lodges lead Namibia accommodation sector with 67% occupancy in June", publisher: "The Brief", date: "18 Aug 2026", url: "https://thebrief.com.na/2026/08/lodges-lead-namibia-accommodation-sector-with-67-occupancy-in-june/" },
  { id: 13, title: "Namibia tourism under pressure as occupancy slips", publisher: "We (NMH)", date: "21 Jan 2026", url: "https://we.com.na/tourism-we/namibia-tourism-under-pressure-as-occupancy-slips2026-01-21" },
  { id: 14, title: "Leisure travel leads as Namibia's hotel occupancy reaches 55% in April", publisher: "The Brief", date: "23 May 2025", url: "https://thebrief.com.na/2025/05/leisure-travel-leads-as-namibias-hotel-occupancy-reaches-55-in-april/" },
  { id: 15, title: "Hilton Windhoek: prices and availability", publisher: "HotelsCombined", date: "quote of 17 Jun 2026", url: "https://www.hotelscombined.com/Hotel/Hilton_Windhoek.htm" },
  { id: 16, title: "The Weinberg Boutique Hotel: rates", publisher: "Go2Africa", date: "rate sheet, read Nov 2026", url: "https://www.go2africa.com/accommodation/am-weinberg-boutique-hotel" },
  { id: 17, title: "Olive Grove Guest House, Windhoek: rates", publisher: "Siyabona Africa", date: "2026 rates", url: "https://www.siyabona.com/pricing_olive-grove-guest-house-windhoek.html" },
  { id: 18, title: "Guest houses in Windhoek", publisher: "Booking.com", date: "read Nov 2026", url: "https://www.booking.com/guest-house/city/na/windhoek.html" },
  { id: 19, title: "Windhoek short-term rental data", publisher: "AirDNA", date: "data to Jun 2026", url: "https://www.airdna.co/vacation-rental-data/app/na/default/windhoek/overview" },
  { id: 20, title: "Windhoek", publisher: "Wikivoyage", date: "read Nov 2026", url: "https://en.wikivoyage.org/wiki/Windhoek" },
  { id: 21, title: "Windhoek ranks among Africa's more expensive cities, fourth in southern Africa", publisher: "The Brief (Numbeo data)", date: "14 Jan 2026", url: "https://thebrief.com.na/2026/01/windhoek-ranks-among-africas-more-expensive-cities-fourth-in-southern-africa/" },
  { id: 22, title: "2027 Cricket World Cup", publisher: "Wikipedia", date: "read Nov 2026", url: "https://en.wikipedia.org/wiki/2027_Cricket_World_Cup" },
  { id: 23, title: "Namibia launches new online visa on arrival", publisher: "Fragomen", date: "updated 2 Oct 2025", url: "https://www.fragomen.com/insights/namibia-new-online-visa-on-arrival-launched.html" },
  { id: 24, title: "Visa policy of Namibia", publisher: "Wikipedia", date: "read Nov 2026", url: "https://en.wikipedia.org/wiki/Visa_policy_of_Namibia" },
  { id: 25, title: "Direct flights from Windhoek to Johannesburg", publisher: "DirectFlights", date: "Jul 2026", url: "https://www.directflights.com/WDH-JNB" },
  { id: 26, title: "Flights from Windhoek to Cape Town", publisher: "FlightConnections", date: "Nov 2026", url: "https://www.flightconnections.com/flights-from-wdh-to-cpt" },
  { id: 27, title: "Flights from Windhoek to Harare", publisher: "FlightConnections", date: "Nov 2026", url: "https://www.flightconnections.com/flights-from-wdh-to-hre" },
  { id: 28, title: "Windhoek in October: climate averages", publisher: "Weather & Climate", date: "climate normals", url: "https://weather-and-climate.com/Windhoek-October-averages" },
  { id: 29, title: "Namibia: traveler health information", publisher: "US CDC", date: "Apr 2025", url: "https://wwwnc.cdc.gov/travel/destinations/namibia.htm" },
  { id: 30, title: "Roles of the Bank (FAQ): the Namibian dollar and the rand", publisher: "Bank of Namibia", date: "undated", url: "https://www.bon.com.na/Informations/FAQ/Roles-of-the-Bank.aspx" },
  { id: 31, title: "Namibia travel advisory", publisher: "US Department of State", date: "May 2026", url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/namibia-travel-advisory.html" },
  { id: 32, title: "Current time and time zone in Windhoek", publisher: "timeanddate.com", date: "checked 21 Nov 2026", url: "https://www.timeanddate.com/time/zone/namibia/windhoek" },
  { id: 33, title: "Yango launches taxi service in Windhoek", publisher: "The Namibian", date: "2023", url: "https://www.namibian.com.na/yango-launches-taxi-service-in-windhoek/" },
  { id: 34, title: "Getting to Namib-Naukluft and Sossusvlei", publisher: "SafariBookings", date: "undated", url: "https://www.safaribookings.com/namib-naukluft/getting-there" },
  { id: 35, title: "Drive from Windhoek to Swakopmund", publisher: "Wanderlog", date: "undated", url: "https://wanderlog.com/drive/between/79335/79348/windhoek-to-swakopmund-drive" },
  { id: 36, title: "Namibia raises park fees by 80 to 100 percent", publisher: "Namibian.org", date: "2026", url: "https://namibian.org/blog/namibia-raises-park-fees-by-80-to-100-percent" },
  { id: 37, title: "2027 Cricket World Cup co-hosts Namibia face shock qualification risk", publisher: "IOL", date: "4 Aug 2026", url: "https://www.iol.co.za/sport/cricket/2026-08-04-2027-cricket-world-cup-co-hosts-namibia-face-shock-qualification-risk/" },
  { id: 38, title: "2026 Cricket World Cup Qualifier Play-off", publisher: "Wikipedia", date: "read Nov 2026", url: "https://en.wikipedia.org/wiki/2026_Cricket_World_Cup_Qualifier_Play-off" },
  { id: 39, title: "Windhoek Oktoberfest 2026 returns on 30 and 31 October", publisher: "We (NMH)", date: "2026", url: "https://www.we.com.na/art-and-entertainment-we/windhoek-oktoberfest-2026-returns-on-30-and-31-october-nmh017200-4-21127" },
  { id: 40, title: "Namibia Cricket Ground (coordinates)", publisher: "Wikipedia", date: "read Nov 2026", url: "https://en.wikipedia.org/wiki/Namibia_Cricket_Ground" },
  { id: 41, title: "Accommodation in Windhoek: everything you need to know", publisher: "Bren on the Road", date: "updated 6 Sep 2026", url: "https://brenontheroad.com/accommodation-windhoek-everything-need-know/" },
  { id: 42, title: "Namibia releases list of countries eligible for visa on arrival", publisher: "Legit.ng", date: "8 Jul 2026", url: "https://www.legit.ng/people/1718248-namibia-releases-list-121-countries-territories-eligible-visa-arrival-nigeria-missing/" },
  { id: 43, title: "Namibia visa and residency guide 2026", publisher: "The Rio Times", date: "12 Nov 2026", url: "https://www.riotimesonline.com/namibia-visa-residency-2026/" },
  { id: 44, title: "ITT issued for provision of hospitality delivery services for Men's CWC 2027", publisher: "ICC media release", date: "21 Aug 2026", url: "https://www.icc-cricket.com/media-releases/itt-issued-for-provision-of-hospitality-delivery-services-for-icc-men-s-cricket-world-cup-2027" },
  { id: 45, title: "ICC Men's Cricket World Cup 2027 schedule revealed and ballot system opens", publisher: "ICC media release", date: "1 Oct 2026", url: "https://www.icc-cricket.com/media-releases/icc-men-s-cricket-world-cup-2027-schedule-revealed-and-ballot-system-opens" },
  { id: 46, title: "Geocoding of suburbs and hotels; straight-line distances computed by Namibia Stays", publisher: "OpenStreetMap Nominatim, Namibia Stays", date: "21 Nov 2026", url: "https://nominatim.openstreetmap.org/" },
  { id: 47, title: "Mövenpick Hotel Windhoek", publisher: "Accor", date: "read Nov 2026", url: "https://all.accor.com/hotel/B960/index.en.shtml" },
  { id: 48, title: "Mercure Hotel Windhoek", publisher: "Accor", date: "read Nov 2026", url: "https://all.accor.com/hotel/B956/index.en.shtml" },
  { id: 49, title: "Avani Windhoek Hotel & Casino", publisher: "Minor Hotels", date: "read Nov 2026", url: "https://www.minorhotels.com/en/destinations/namibia/windhoek/avani-windhoek-hotel-and-casino" },
  { id: 50, title: "Namibia's first Hilton Garden Inn opens in Windhoek", publisher: "Hilton", date: "18 Mar 2024", url: "https://stories.hilton.com/releases/namibias-first-hilton-garden-inn-opens-in-windhoek" },
  { id: 51, title: "Windhoek Country Club Resort: services and amenities", publisher: "Legacy Hotels & Resorts", date: "read Nov 2026", url: "https://www.legacyhotels.co.za/windhoek-country-club-resort/services-and-amenities" },
  { id: 52, title: "Hilton unveils two new hotels in Africa", publisher: "Hospitality Design", date: "undated", url: "https://hospitalitydesign.com/news/hilton-unveils-two-new-hotels-in-africa/27397" },
  { id: 53, title: "Protea Hotel by Marriott Windhoek Furstenhof", publisher: "Marriott", date: "read Nov 2026", url: "https://www.marriott.com/en-us/hotels/wdhfr-protea-hotel-windhoek-furstenhof/" },
  { id: 54, title: "IHG to open Holiday Inn and Crowne Plaza hotels in boost for Namibia's tourism sector", publisher: "The Namibian", date: "29 Jun 2025", url: "https://www.namibian.com.na/ihg-to-open-holiday-inn-and-crowne-plaza-hotels-in-boost-for-namibias-tourism-sector/" },
  { id: 55, title: "Namibia to get first Holiday Inn as IHG plans three new hotels", publisher: "The Brief", date: "Jun 2025", url: "https://thebrief.com.na/2025/06/namibia-to-get-first-holiday-inn-as-ihg-plans-three-new-hotels/" },
  { id: 56, title: "Arebbusch Travel Lodge, Windhoek", publisher: "Booking.com", date: "read Nov 2026", url: "https://www.booking.com/hotel/na/arebbusch-travel-lodge.html" },
];

/** ISO dates of the six Windhoek matches, in the same order as the match rows of each locale. */
export const MATCH_DATES_ISO = [
  "2027-10-02",
  "2027-10-04",
  "2027-10-06",
  "2027-10-08",
  "2027-10-10",
  "2027-10-13",
];

export type Table = { headers: string[]; rows: string[][]; note?: string };

export type Section =
  | {
      kind: "text";
      id: string;
      heading: string;
      intro?: string;
      paragraphs?: string[];
      bullets?: string[];
      table?: Table;
      callout?: { title: string; text: string };
      links?: { label: string; href: string }[];
    }
  | {
      kind: "lodges";
      id: string;
      heading: string;
      intro: string;
      windhoekGuideLabel: string;
      viewLodge: string;
      checkAvailability: string;
    }
  | { kind: "map"; id: string; heading: string; intro: string; label: string }
  | {
      kind: "routes";
      id: string;
      heading: string;
      intro: string;
      cards: { title: string; stat: string; text: string; href: string }[];
      cta: string;
      bullets: string[];
      related: string;
      links: { label: string; href: string }[];
    };

export type CricketContent = {
  title: string;
  description: string;
  breadcrumbs: { home: string; guides: string; page: string };
  badge: string;
  h1: string;
  updatedLabel: string;
  updatedDisplay: string;
  onThisPage: string;
  shortAnswer: { heading: string; paragraphs: string[] };
  glance: { heading: string; items: { label: string; value: string }[] };
  sections: Section[];
  faq: { heading: string; items: { q: string; a: string }[] };
  sources: { heading: string; intro: string; accessed: string; methodology: string };
  jsonLd: { matchName: string };
};

export const contentEn: CricketContent = {
  title: "Where to Stay in Windhoek for the Cricket World Cup 2027",
  description:
    "Where to sleep to watch the 2027 Cricket World Cup in Windhoek: the six matches, distances from the ground, hotel vs guesthouse vs guest farm, Windhoek vs other host cities, visas, transport and 56 cited sources.",
  breadcrumbs: { home: "Home", guides: "Guides", page: "Cricket World Cup 2027" },
  badge: "Guide",
  h1: "Where to stay in Windhoek for the Cricket World Cup 2027",
  updatedLabel: "Last updated",
  updatedDisplay: "21 November 2026",
  onThisPage: "On this page",
  shortAnswer: {
    heading: "The short answer",
    paragraphs: [
      "Windhoek hosts six matches of the 2027 Men's Cricket World Cup, all at the Namibia Cricket Ground in the Olympia suburb, between 2 and 13 October 2027 [1, 6]. The ground holds about 7,000 people [5], so every Windhoek match is a small, in-demand event: the ICC reported more than 2 million ticket requests for these six fixtures, nearly 900,000 of them for England v Bangladesh on 8 October [4].",
      "For most visitors the best base is one of Windhoek's chain hotels. The closest are the Mövenpick and the Mercure (both Accor) in the Suiderhof area, about 1 km from the ground, and the Windhoek Country Club Resort, about 2 km away [46, 47, 48, 51]. The Hilton, Hilton Garden Inn, Avani and Protea in the city centre are 4 to 5 km away, with more restaurants and a livelier evening scene [46, 49, 50]. Book a fully refundable room now, and only commit to non-refundable travel once you hold tickets [3].",
    ],
  },
  glance: {
    heading: "Key facts at a glance",
    items: [
      { label: "Tournament", value: "2 October to 21 November 2027, 57 matches, 12 venues in South Africa, Zimbabwe and Namibia [1, 2]" },
      { label: "Windhoek matches", value: "Six: three Super Series matches (2, 4, 6 October) and three group matches (8, 10, 13 October 2027) [1]" },
      { label: "Venue", value: "Namibia Cricket Ground, Olympia, south Windhoek, next to the Hage Geingob Rugby Stadium [5, 6]" },
      { label: "Ground capacity", value: "About 7,000, below the 10,000 to 12,500 listed for the three Zimbabwean grounds [5, 22]" },
      { label: "Ticket demand", value: "More than 2 million requests for the six Windhoek matches, nearly 900,000 for England v Bangladesh [4]" },
      { label: "Ticket prices", value: "From about USD 9.62 to USD 31.31 per ticket, up to four tickets per match per application [1, 3]" },
      { label: "Nearest hotels to the ground", value: "Arebbusch Travel Lodge (about 0.2 km), Mövenpick and Mercure (about 1 km), Windhoek Country Club Resort (about 2 km), straight-line distances [46, 47, 48]" },
      { label: "City-centre chain hotels", value: "Hilton, Hilton Garden Inn, Avani and Protea, about 4 to 5 km from the ground [46, 49, 50, 52]" },
      { label: "Airport", value: "Hosea Kutako International, about 42 km from the ground in a straight line [46]" },
      { label: "Time zone", value: "CAT, UTC+2, no daylight saving [32]" },
      { label: "Currency", value: "Namibian dollar, pegged 1:1 to the South African rand [30]" },
      { label: "Malaria", value: "No malaria risk in Windhoek [29]" },
      { label: "October weather", value: "Highs about 29 to 30°C, lows about 14 to 16°C, very little rain [28]" },
    ],
  },
  sections: [
    {
      kind: "text",
      id: "matches",
      heading: "The six matches in Windhoek",
      intro:
        "All six matches are at the Namibia Cricket Ground. The three Super Series matches are a round robin between the second-, third- and fourth-placed teams of the CWC Qualifier 2027, and the top team takes the last group-stage place [1]. Those teams will not be known until the Qualifier finishes in early 2027 [8].",
      table: {
        headers: ["Date", "Match", "Stage", "Reported start (local time)"],
        rows: [
          ["Sat 2 Oct 2027", "QF1 v QF3", "Super Series", "Not yet announced"],
          ["Mon 4 Oct 2027", "QF1 v QF2", "Super Series", "Not yet announced"],
          ["Wed 6 Oct 2027", "QF2 v QF3", "Super Series", "Not yet announced"],
          ["Fri 8 Oct 2027", "England v Bangladesh", "Group stage", "12:30 [22]"],
          ["Sun 10 Oct 2027", "Sri Lanka v Qualifier B", "Group stage", "12:30 [22]"],
          ["Wed 13 Oct 2027", "England v Sri Lanka", "Group stage", "10:00 [22]"],
        ],
        note: "Dates and fixtures: ICC [1]. Start times come from Wikipedia [22] and are not yet confirmed by the ICC, so treat them as provisional. QF1, QF2 and QF3 are placeholders for the Qualifier teams.",
      },
      paragraphs: [
        "Demand is the main planning fact. The ICC counted more than 2 million ticket requests for these six Windhoek fixtures, and nearly 900,000 for England v Bangladesh alone [4]. The ground holds about 7,000 [5], so six matches offer at most about 42,000 seats in total (our arithmetic, assuming full houses and no temporary stands). Requests are not the same as people: the ICC counts requests, and one application can ask for up to four tickets per match [3, 4].",
        "For visitors who are not following a particular team, the three Super Series matches may be the easiest to see, because the teams are lower-profile. That is our inference, not an ICC statement.",
      ],
    },
    {
      kind: "text",
      id: "ground",
      heading: "The ground and its neighbourhood",
      paragraphs: [
        "The Namibia Cricket Ground sits in Olympia, in the south of Windhoek, next to the Hage Geingob Rugby Stadium [5, 6]. Cricket Namibia built it for about USD 4 million, with a High Performance Centre, a restaurant and a hospitality wing [5]. Its first international was a T20I against Canada in March 2025 [5].",
        "It already hosted part of the ICC U19 Men's World Cup in January 2026, where Windhoek staged 16 of the 41 matches [10]. The ICC's feedback on organisation and hospitality was described as positive, but foreign visitor numbers were reported as modest and many matches drew a few hundred spectators [9]. The 2027 matches will be a much bigger draw, particularly the England and Sri Lanka games.",
        "We could not find an official street address, confirmed floodlights, temporary stands or a published match-day shuttle plan. Use the ground's coordinates (22°36′21″S 17°05′15″E [40]) in your maps app, and see \"What we don't know yet\" below.",
      ],
    },
    {
      kind: "text",
      id: "areas",
      heading: "Where to base yourself: area vs area",
      intro:
        "Windhoek is compact, but the distance to the ground changes the experience. The distances below are straight-line distances we calculated from OpenStreetMap coordinates [46], so allow extra for roads and traffic.",
      table: {
        headers: ["Area", "Distance to ground", "Best for", "Watch out for"],
        rows: [
          ["Olympia and Suiderhof (Mövenpick, Mercure, Arebbusch)", "About 0.2 to 1 km", "Walking or a very short ride to the match; the closest chain hotels", "Next to Eros Airport and main roads; few restaurants within walking distance [47, 48, 56]."],
          ["Windhoek Country Club Resort area", "About 2 km", "A resort-style hotel with golf and a casino", "On the western edge of the city; plan on a short drive [51]."],
          ["Academia and Pionierspark", "About 2.1 and 2.4 km", "Quiet residential suburbs close to the ground", "Mostly guesthouses and self-catering; fewer restaurants within walking distance."],
          ["Central Windhoek (Hilton, Hilton Garden Inn, Avani, Protea)", "About 4 to 5 km", "Widest choice of chain hotels, restaurants, the Christuskirche", "Walkable by day but not recommended on foot after dark; use a radio taxi [20]."],
          ["Klein Windhoek and Ludwigsdorf", "About 5 km", "Quiet guesthouses; the area most often recommended to visitors [41]", "Few amenities within walking distance; you will want a car or taxi [41]."],
          ["Eros (Hotel Thule area)", "About 6 km", "A quieter residential base", "The longest drive of the main areas."],
          ["Guest farms (GocheGanas, Etango Ranch)", "About 26 km and 40 km", "A rest night away from the city, open sky", "Long drive on match days; Etango is on the airport side of town [46]."],
          ["Okahandja", "About 72 km", "Only if your trip is mainly the north", "Too far to use as a daily base for matches."],
        ],
        note: "Hotel and area distances: Namibia Stays calculation from OpenStreetMap geocoding [46]; ground coordinates from Wikipedia [40]; the ground is next to the Hage Geingob Rugby Stadium [6].",
      },
      links: [{ label: "Where to stay in Windhoek", href: "/where-to-stay/windhoek" }],
    },
    {
      kind: "text",
      id: "hotels",
      heading: "Chain and larger hotels compared",
      intro:
        "Windhoek's international-chain hotels fall into two groups: two Accor hotels and a resort close to the ground in the south, and four chain hotels in the city centre. Distances are straight-line distances from the ground [46].",
      table: {
        headers: ["Hotel", "Brand", "Area", "Distance to ground", "Rooms", "Source"],
        rows: [
          ["Arebbusch Travel Lodge", "Independent, lodge-style (rooms, chalets, villas)", "Auas Road, Suiderhof", "About 0.2 km", "About 128 units", "[56]"],
          ["Mövenpick Hotel Windhoek", "Accor, five-star", "Auas Road, next to Eros Airport", "About 1.0 km", "130", "[47]"],
          ["Mercure Hotel Windhoek", "Accor, three-star", "Same corner of Auas Road and Aviation Road", "About 1 km (same corner as the Mövenpick)", "98", "[48]"],
          ["Windhoek Country Club Resort", "Legacy Hotels & Resorts", "Western edge, beside the golf course", "About 2.0 km", "152 (aggregator figure)", "[51]"],
          ["Hilton Windhoek", "Hilton, five-star", "City centre", "About 3.9 km", "150", "[52]"],
          ["Hilton Garden Inn Windhoek", "Hilton", "City centre", "About 4.0 km", "174", "[50]"],
          ["Avani Windhoek Hotel & Casino", "Minor Hotels", "City centre, Independence Avenue", "About 4.1 km", "173", "[49]"],
          ["Protea Hotel by Marriott Furstenhof", "Marriott", "Windhoek West, near the centre", "About 4.7 km", "About 31 to 33 (low-confidence figure)", "[53]"],
        ],
        note: "Room counts come from the operators' pages where we could read them [47, 48, 49, 50] and from listings otherwise [51, 52, 53, 56]. Star ratings are as listed by the operators or aggregators. The Mövenpick was formerly the Safari Court and the Avani was formerly the Kalahari Sands, so older reviews may use the old names.",
      },
      paragraphs: [
        "How to choose. Pick the Mövenpick or the Mercure if being close to the ground matters most: they are about 1 km away, on the same corner next to Eros Airport, and offer pools, spas and meeting rooms [47, 48]. Pick the Hilton, the Hilton Garden Inn or the Avani if you want the centre: more restaurants, the Christuskirche and the craft markets, with the ground a short drive away [49, 50]. The Protea Furstenhof is small, so it is more likely to sell out [53].",
        "No new chain hotel will open before the tournament. IHG's planned voco Windhoek CBD (147 rooms) is expected to open in early 2028, and the Holiday Inn reported for Namibia by 2027 appears to be in Walvis Bay, not Windhoek [54, 55]. We could not confirm either, so do not count on extra rooms in October 2027.",
      ],
      links: [{ label: "Where to stay in Windhoek", href: "/where-to-stay/windhoek" }],
    },
    {
      kind: "text",
      id: "types",
      heading: "Hotel vs guesthouse vs short-let vs hostel: indicative prices",
      intro:
        "These are published 2026 rates, not World Cup rates. Match-week prices will probably differ. They are useful for comparing types of stay, not for budgeting a specific night in October 2027.",
      table: {
        headers: ["Type of stay", "Example", "Indicative price", "Source"],
        rows: [
          ["5-star hotel", "Hilton Windhoek", "From about USD 98, average about USD 133 per night (quote of 17 Jun 2026)", "[15]"],
          ["Boutique hotel", "The Weinberg", "USD 170 per person sharing to 31 Oct 2026; USD 190 on the following year's rate sheet", "[16]"],
          ["Mid-range guesthouse", "Olive Grove Guest House", "From R1,406 per person sharing (1 Jul to 30 Nov 2026)", "[17]"],
          ["Guesthouse (average)", "Windhoek listings on Booking.com", "About USD 75 on average, from USD 29 to USD 183", "[18]"],
          ["Short-term rental", "Active Windhoek listings", "About 977 listings, average daily rate about USD 70 (data to June 2026)", "[19]"],
          ["Hostel dorm", "Backpacker hostels", "About N$200 to N$350 per person", "[20]"],
        ],
        note: "The Weinberg's higher rate for the next year suggests prices tend to rise, but no source gives a World Cup uplift. We found no published Windhoek hotel rate index.",
      },
      paragraphs: [
        "How to choose. A hotel gives you reliable service and easy cancellation terms. A guesthouse usually gives better value and a more local feel, but has fewer rooms, which makes it the first thing to sell out. A short-let works for groups sharing a kitchen. A guest farm is a good night off between matches, not a match-day base.",
      ],
    },
    {
      kind: "lodges",
      id: "stays",
      heading: "Windhoek hotels to start from",
      intro: "Chain and city hotels from three-star to five-star, all in our guide. For the full picture, see our",
      windhoekGuideLabel: "where to stay in Windhoek guide",
      viewLodge: "View Lodge",
      checkAvailability: "Check availability",
    },
    {
      kind: "map",
      id: "map",
      heading: "Map of stays in Windhoek",
      intro:
        "Every pin is a real, bookable stay, powered by our booking partner Stay22. Enter your match dates in the map to see live availability and prices.",
      label: "Windhoek",
    },
    {
      kind: "text",
      id: "demand",
      heading: "How hard will it be to find a room?",
      intro:
        "Honest answer: nobody has published a forecast. Here is what the evidence does and does not say.",
      bullets: [
        "No official figure exists for Windhoek's total number of hotel rooms, and we found no ICC, Namibia Tourism Board or ministry statement on accommodation readiness for 2027.",
        "Spare capacity exists in normal times. Namibia's average room occupancy in 2025 was about 52%, down from 54.4% in 2024 [13], and the central region (which includes Windhoek) recorded the lowest occupancy of the four regions in April 2025, at 44.41% [14]. In June 2026 hotels ran at about 49.9% and guesthouses at about 49.2% [12].",
        "But a Cricket World Cup is not a normal fortnight. A tour operator active in this market warns that lodges and hotels around the Zimbabwe and Namibia venues have fewer beds than the big South African cities, and advises planning now while keeping bookings flexible until tickets are confirmed [11]. That is a marketing claim, not data, but it fits the numbers: more than 2 million ticket requests for a 7,000-seat ground [4, 5].",
        "The U19 World Cup is a useful reality check. Windhoek hosted 16 matches in January 2026, and the reporting we found mentions modest foreign turnout and small crowds rather than hotel shortages [9]. The 2027 event is larger, with senior teams and bigger fan bases, so we would not treat the U19 experience as a guide to October 2027.",
        "Our recommendation: book a fully refundable room now for the nights around the matches you want, and cancel if the ballot does not go your way. Small guesthouses and the best-located hotels are the most likely to fill first.",
      ],
    },
    {
      kind: "text",
      id: "cities",
      heading: "Windhoek vs the other host cities",
      intro:
        "If you are planning a World Cup trip across the three host countries, Windhoek is the smallest of the host cities by population and the only one in Namibia. The table compares what we could verify.",
      table: {
        headers: ["City", "Ground capacity", "Cost-of-living index", "Getting there from Windhoek"],
        rows: [
          ["Windhoek (Namibia Cricket Ground)", "7,000 [5]", "37.4 [21]", "Not applicable"],
          ["Johannesburg (Wanderers)", "34,000 [22]", "40.4 [21]", "Nonstop, about 1h45 to 2h10, around 40 flights a week [25]"],
          ["Cape Town", "Not checked", "39.6 [21]", "Nonstop, about 2h05, 21 flights a week [26]"],
          ["Harare", "10,000 [22]", "Not checked", "No nonstop; via Victoria Falls about 2h35 in the air, via Johannesburg about 3h35 [27]"],
          ["Bulawayo", "12,500 [22]", "Not checked", "No direct service found"],
          ["Victoria Falls", "10,000 [22]", "Not checked", "FlyNamibia has flown Windhoek to Victoria Falls on a seasonal schedule; check the 2027 timetable"],
        ],
        note: "The cost-of-living index (Numbeo, via The Brief) puts Windhoek slightly below Johannesburg and Cape Town [21]. We found no hotel-rate comparison across the three countries. Flight times are published schedule figures and vary by airline.",
      },
      paragraphs: [
        "Windhoek hosts six matches [1]. If you want to see a semi-final or the final, those are in South Africa: semi-finals on 17 November in Cape Town and 18 November in Tshwane, and the final on 21 November in Johannesburg [1]. A combined Windhoek and South Africa trip is practical by air, but the Windhoek matches all fall in the first two weeks, while the knockouts come more than a month later.",
      ],
    },
    {
      kind: "text",
      id: "transport",
      heading: "Getting to Windhoek and around",
      bullets: [
        "From the airport: Hosea Kutako International Airport is about 42 km from the ground in a straight line [46]. Road travel to the city centre is usually quoted as 30 to 45 minutes. Arrange a transfer or rental car in advance, since arrivals will bunch around the fixtures.",
        "Ride-hailing: Yango has operated in Windhoek since 2023 [33]. We found no evidence that Uber operates there. Regular taxis have no flat fare, so agree the price before you go.",
        "At night: central Windhoek is walkable in daylight but is best avoided on foot after dark. Use radio taxis [20], and read our safety guide for the full picture.",
        "Cars: rental is available at the airport and in town, and Namibia drives on the left. Book rental cars early for October, which is peak dry-season travel.",
        "Match-day transport: we found no official shuttle or park-and-ride plan for the Windhoek matches. Ask your accommodation, and check the ICC and Cricket Namibia closer to the date.",
      ],
      links: [{ label: "Namibia safety and health", href: "/namibia-safety-and-health" }, { label: "Namibia self-drive guide", href: "/namibia-self-drive-guide" }],
    },
    {
      kind: "text",
      id: "visas",
      heading: "Entry and visas by nationality",
      intro:
        "Namibia's online visa on arrival requires a pre-application before travel [23]. The fee is N$1,600 for adults [23], and your passport should have six months' validity and three blank pages [43]. We found no World Cup-specific visa arrangement. Rules change, so confirm on the official Namibian immigration portal before you book.",
      table: {
        headers: ["Nationality", "What the sources say", "What to do"],
        rows: [
          ["UK, USA, Australia, Netherlands, Ireland", "Lost visa-free entry on 1 April 2025 and now use the online visa on arrival [23, 24]", "Apply online before travel"],
          ["South Africa, Zimbabwe", "Visa-exempt for ordinary passports, up to three months a calendar year [24]", "No visa needed; carry a valid passport"],
          ["India, Pakistan, Bangladesh, Sri Lanka", "Not listed among the visa-on-arrival countries in a July 2026 report, and sources conflict [24, 42]", "Assume you need a visa before travel and verify on the official portal"],
          ["Other nationalities", "Eligibility lists have changed several times since 2025 [23]", "Check the official portal for your passport"],
        ],
        note: "We could not read the Ministry of Home Affairs portal directly, so this table rests on secondary sources [23, 24, 42, 43]. See also our full visa guide.",
      },
      links: [{ label: "Namibia visa requirements", href: "/namibia-visa-requirements" }],
    },
    {
      kind: "text",
      id: "practical",
      heading: "Time zone, weather, money and health",
      bullets: [
        "Time zone: Namibia is on CAT (UTC+2) all year [32]. In early October 2027 the UK is on British Summer Time, so Windhoek is 1 hour ahead of the UK. Windhoek is 3.5 hours behind India and Sri Lanka and 4 hours behind Bangladesh (our calculation from [32]).",
        "Weather: October in Windhoek has highs of about 29 to 30°C and lows of about 14 to 16°C, with very little rain [28]. The city sits above 1,600 metres, so evenings are cooler. Bring sun protection for long days at the ground.",
        "Money: the Namibian dollar is pegged 1:1 to the South African rand, and the rand is accepted in Namibia, but the Namibian dollar is not accepted in South Africa [30]. Cards are widely accepted in Windhoek.",
        "Health: Windhoek has no malaria risk. Prophylaxis matters only if you go north, for example to the Zambezi region [29]. A yellow fever certificate is needed only if you arrive from, or spend a long transit in, a risk country [29].",
        "Safety: the US State Department rates Namibia Level 2 (exercise increased caution) as of May 2026 [31]. Normal city precautions apply, especially after dark.",
        "Plugs: types D and M (South African style three round pins), 220 V.",
      ],
      links: [{ label: "SIM cards and eSIM", href: "/namibia-connectivity" }, { label: "Namibia packing list", href: "/namibia-packing-list" }, { label: "Namibia safety and health", href: "/namibia-safety-and-health" }],
    },
    {
      kind: "routes",
      id: "trip",
      heading: "Turn a match trip into a Namibia trip",
      intro:
        "With all six matches in the first twelve days of the tournament, you can see a game and still have October left for the country. October is the tail end of the dry season, so wildlife concentrates at waterholes.",
      cards: [
        { title: "Etosha", stat: "~4.5 hrs", text: "The classic follow-on. Park fees rose on 1 April 2026: a foreign adult now pays N$280 a day [36]. Book park camps early.", href: "/where-to-stay/etosha" },
        { title: "Sossusvlei", stat: "~5 hrs", text: "About 310 km to Sesriem and roughly 50 km more to the dunes [34]. Climb at dawn: October afternoons are hot.", href: "/where-to-stay/sossusvlei" },
        { title: "Swakopmund", stat: "~4 hrs", text: "About 362 km from Windhoek [35]. A cool Atlantic break after the heat, with adventure activities for a free day between matches.", href: "/where-to-stay/swakopmund" },
      ],
      cta: "See stays",
      bullets: [
        "Fly into Hosea Kutako and keep the first night in Windhoek, especially if your match is the next day.",
        "October is peak dry season, so Etosha camps and Sossusvlei lodges fill well ahead. Our why-visit-2027 guide suggests booking park camps six to nine months out, which for October 2027 means now.",
        "Windhoek Oktoberfest usually falls in the last days of October (30 and 31 October in 2026 [39]). The 2027 dates are not confirmed, but a late-October weekend would fall after the Windhoek matches.",
        "Driving yourself? Read our self-drive guide first: distances are long and gravel is the norm outside the main roads.",
      ],
      related: "See also our",
      links: [
        { label: "why visit Namibia in 2027 guide", href: "/why-visit-namibia-2027" },
        { label: "self-drive guide", href: "/namibia-self-drive-guide" },
        { label: "visa requirements", href: "/namibia-visa-requirements" },
        { label: "safety and health guide", href: "/namibia-safety-and-health" },
      ],
    },
    {
      kind: "text",
      id: "unknowns",
      heading: "What we don't know yet",
      intro:
        "A guide that is clear about its gaps is more useful than one that guesses. As of 21 November 2026, we could not verify the following, and we will update this page when official information appears.",
      bullets: [
        "Official match start times for Windhoek (the times above are from Wikipedia and are provisional) [22].",
        "Whether the ground has floodlights for day-night cricket, whether temporary stands will be added, and the ground's exact street address.",
        "Match-day shuttles, fan zones and park-and-ride arrangements in Windhoek.",
        "Official accommodation or hospitality packages for Windhoek: the ICC issued a tender for a hospitality provider in August 2026 and we found no winner announced [44]. Be cautious with resellers who claim official status.",
        "Windhoek's total room count and any World Cup demand forecast.",
        "Which teams play the Super Series. Namibia's own team is not yet qualified: it must come through the Play-off in December 2026 and the Qualifier in February and March 2027 [8, 38], and one August 2026 report described its qualification as at risk [37].",
        "Later ticket sales phases, resale and refund rules. The first ballot ran from 1 October to 21 November 2026 and later phases may follow [3].",
      ],
    },
  ],
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "Where should I stay to watch the cricket in Windhoek?",
        a: "For most visitors, one of Windhoek's chain hotels. The closest are the Mövenpick and the Mercure (both Accor) in Suiderhof, about 1 km from the Namibia Cricket Ground, and the Windhoek Country Club Resort, about 2 km away. The Hilton, Hilton Garden Inn, Avani and Protea in the city centre are 4 to 5 km away. Book a fully refundable room now.",
      },
      {
        q: "How close can I stay to the Namibia Cricket Ground?",
        a: "The ground is in Olympia, south Windhoek, next to the Hage Geingob Rugby Stadium. The nearest property we found is Arebbusch Travel Lodge (about 0.2 km in a straight line), then the Mövenpick and the Mercure (about 1 km) and the Windhoek Country Club Resort (about 2 km). The city-centre chain hotels are 4 to 5 km away.",
      },
      {
        q: "Which chain hotels are closest to the Namibia Cricket Ground?",
        a: "The Mövenpick Hotel Windhoek and the Mercure Hotel Windhoek, both run by Accor on the same corner of Auas Road and Aviation Road in Suiderhof, are about 1 km from the ground in a straight line. The Windhoek Country Club Resort (Legacy Hotels & Resorts) is about 2 km away. The Hilton, Hilton Garden Inn, Avani and Protea are in the city centre, 4 to 5 km away.",
      },
      {
        q: "Does Windhoek have Hilton, Marriott and Accor hotels?",
        a: "Yes. Windhoek has the Hilton Windhoek and the Hilton Garden Inn (Hilton), the Protea Hotel by Marriott Furstenhof (Marriott), the Mövenpick and the Mercure (Accor), and the Avani Windhoek (Minor Hotels). The Mövenpick was formerly the Safari Court and the Avani was formerly the Kalahari Sands. IHG's planned voco hotel is not expected to open until 2028.",
      },
      {
        q: "Which Cricket World Cup 2027 matches are in Windhoek?",
        a: "Six, at the Namibia Cricket Ground: Super Series matches on 2, 4 and 6 October 2027, England v Bangladesh on 8 October, Sri Lanka v Qualifier B on 10 October and England v Sri Lanka on 13 October. The Super Series teams are not yet known. Confirm on the ICC site before booking non-refundable travel.",
      },
      {
        q: "How big is the Namibia Cricket Ground?",
        a: "About 7,000 capacity, according to the ICC. That is below the 10,000 to 12,500 listed for the Zimbabwean grounds, and the ICC reported more than 2 million ticket requests for the six Windhoek matches, so tickets will be hard to get.",
      },
      {
        q: "Is it hard to find a hotel in Windhoek during the World Cup?",
        a: "No official forecast exists. In normal times Windhoek has spare capacity (Namibian hotel occupancy averaged about 52% in 2025), but the World Cup is a one-off demand spike on a city with a limited number of rooms, and a tour operator warns that Namibia has fewer beds than the big South African cities. Book early and keep the booking refundable.",
      },
      {
        q: "Should I book accommodation before I know if I have tickets?",
        a: "Book a fully refundable room, yes, because good options near the ground are limited. Do not buy non-refundable flights or rooms until the ICC ballot confirms your tickets, since entering the ballot does not guarantee tickets.",
      },
      {
        q: "Which Windhoek match will be hardest to get tickets for?",
        a: "England v Bangladesh on 8 October. The ICC reported nearly 900,000 ticket requests for it, out of more than 2 million for all six Windhoek matches.",
      },
      {
        q: "How do I get tickets?",
        a: "Through the ICC's official ballot at tickets.cricketworldcup.com. Entry is free, you can ask for up to four tickets per match, and successful applicants are emailed a purchase window. The first ballot ran from 1 October to 21 November 2026, with prices from about USD 9.62 to USD 31.31. Later sales phases have not been announced.",
      },
      {
        q: "How do I get from Hosea Kutako airport to Windhoek?",
        a: "The airport is about 42 km from the ground in a straight line, and the road trip to the city centre is usually quoted as 30 to 45 minutes. Pre-book a transfer or rental car, as arrivals will bunch around match dates. Yango ride-hailing operates in Windhoek, but check pickup arrangements at the airport.",
      },
      {
        q: "Do I need a visa for Namibia to watch the cricket?",
        a: "It depends on your passport. UK, US, Australian, Dutch and Irish travellers must use the online visa on arrival (N$1,600 for adults) and apply before travel. South African and Zimbabwean passport holders are visa-exempt. Indian, Pakistani, Bangladeshi and Sri Lankan travellers should verify requirements on the official portal and expect to need a visa in advance.",
      },
      {
        q: "What time do the Windhoek matches start?",
        a: "Start times are not yet confirmed by the ICC. Wikipedia lists England v Bangladesh and Sri Lanka v Qualifier B at 12:30 and England v Sri Lanka at 10:00, local time, which is CAT (UTC+2). Check the ICC fixtures page closer to the date.",
      },
      {
        q: "Is Windhoek safe for visiting cricket fans?",
        a: "Windhoek is generally manageable with normal city precautions. The US State Department rates Namibia Level 2. Central Windhoek is fine in daylight but best avoided on foot after dark; use radio taxis or Yango. Parts of Klein Windhoek and Olympia are quieter residential areas.",
      },
      {
        q: "What currency do I need in Windhoek?",
        a: "The Namibian dollar (NAD), which is pegged 1:1 to the South African rand. The rand is also accepted in Namibia, but the Namibian dollar is not accepted in South Africa. Cards are widely accepted in Windhoek.",
      },
      {
        q: "Is Windhoek cheaper than Johannesburg or Cape Town?",
        a: "Slightly, on the Numbeo cost-of-living index: Windhoek 37.4, Johannesburg 40.4, Cape Town 39.6. We found no hotel-rate comparison, and World Cup match-week prices may differ from normal.",
      },
      {
        q: "Can I see Windhoek matches and a South Africa match on one trip?",
        a: "Yes, by air. Windhoek to Johannesburg is nonstop in about two hours with around 40 flights a week, and to Cape Town about two hours with 21 flights a week. The Windhoek matches are all between 2 and 13 October, while the semi-finals and final are on 17, 18 and 21 November in South Africa.",
      },
      {
        q: "Is Namibia's national team playing at the World Cup?",
        a: "Not yet confirmed. Namibia is a co-host but did not qualify automatically. It must come through the Play-off in December 2026 and the Qualifier in February and March 2027, and it is not guaranteed a place.",
      },
      {
        q: "What is the weather like in Windhoek in October?",
        a: "Dry, sunny and warm: highs of about 29 to 30°C and lows of about 14 to 16°C, with very little rain. The city is above 1,600 metres, so evenings are cooler. Bring sun protection.",
      },
      {
        q: "Is there malaria in Windhoek?",
        a: "No. Windhoek has no malaria risk. Prophylaxis matters only if you travel to northern regions such as the Zambezi, for example on an Etosha or Caprivi extension.",
      },
    ],
  },
  sources: {
    heading: "Sources and methodology",
    intro:
      "Figures on this page are cited with numbered markers that link to the sources below. We prefer the ICC and primary sources, and we label provisional or secondary information.",
    accessed: "All sources accessed 21 November 2026 unless a date is given.",
    methodology:
      "Distances are straight-line distances between OpenStreetMap coordinates (suburbs and hotels) and the Namibia Cricket Ground (22°36′21″S 17°05′15″E, from Wikipedia), calculated by Namibia Stays with the haversine formula. Road distances and drive times will be longer. Price figures are indicative published 2026 rates and are not World Cup rates. Time-zone offsets are our calculation. Arithmetic such as the seat total is ours and is labelled as such.",
  },
  jsonLd: { matchName: "Cricket World Cup 2027" },
};
