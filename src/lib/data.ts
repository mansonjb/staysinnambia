export type Region = {
  slug: string;
  name: string;
  description: string;
  bestFor: string;
  recommendedStay: string;
  image: string;
  alt: string;
};

export const regions: Region[] = [
  {
    slug: "etosha",
    name: "Etosha",
    description:
      "A vast salt pan rimmed with waterholes where elephant, lion and rhino gather at dusk.",
    bestFor: "First-time safari, wildlife photography",
    recommendedStay: "3–4 nights",
    image:
      "https://images.unsplash.com/photo-1643749678251-76783e5f1777?q=80&w=1600&auto=format&fit=crop",
    alt: "Elephant standing on the dry, dusty plains of Etosha National Park",
  },
  {
    slug: "sossusvlei",
    name: "Sossusvlei",
    description:
      "The Namib's towering red dunes, dead camel-thorn trees and some of the darkest skies on earth.",
    bestFor: "Photography, sunrise dune walks",
    recommendedStay: "2–3 nights",
    image:
      "https://images.unsplash.com/photo-1652599720885-abf363ed2992?q=80&w=1600&auto=format&fit=crop",
    alt: "A towering red sand dune in the Namib Desert near Sossusvlei",
  },
  {
    slug: "swakopmund",
    name: "Swakopmund",
    description:
      "A colonial seaside town where the dunes meet the Atlantic, and the pace finally slows.",
    bestFor: "A break from self-driving, adventure activities",
    recommendedStay: "2 nights",
    image:
      "https://images.unsplash.com/photo-1593870893332-a5f39aaa2541?q=80&w=1600&auto=format&fit=crop",
    alt: "The red and white lighthouse in Swakopmund, Namibia",
  },
  {
    slug: "damaraland",
    name: "Damaraland",
    description:
      "Ochre mountains, desert-adapted elephant and some of Namibia's most striking rock art.",
    bestFor: "Remote landscapes, desert-adapted wildlife",
    recommendedStay: "2–3 nights",
    image:
      "https://images.unsplash.com/photo-1772289935377-c5a8ceb51e6d?q=80&w=1600&auto=format&fit=crop",
    alt: "Rocky desert landscape of Damaraland at sunset",
  },
  {
    slug: "skeleton-coast",
    name: "Skeleton Coast",
    description:
      "Fog, shipwrecks and seal colonies along one of the most remote coastlines in Africa.",
    bestFor: "Remote adventure, fly-in itineraries",
    recommendedStay: "2 nights",
    image:
      "https://images.unsplash.com/photo-1667506609659-599fb1f59f94?q=80&w=1600&auto=format&fit=crop",
    alt: "A shipwreck washed up on the sand of the Skeleton Coast, Namibia",
  },
  {
    slug: "windhoek",
    name: "Windhoek",
    description:
      "Namibia's compact, German-inflected capital — most itineraries begin and end here.",
    bestFor: "Arrival and departure nights",
    recommendedStay: "1 night",
    image:
      "https://images.unsplash.com/photo-1586100810957-e4a1fed8c645?q=80&w=1600&auto=format&fit=crop",
    alt: "The Christuskirche, a landmark church in Windhoek, Namibia",
  },
  {
    slug: "fish-river-canyon",
    name: "Fish River Canyon",
    description:
      "The second-largest canyon on earth, best seen at golden hour from the rim.",
    bestFor: "Hiking, dramatic viewpoints",
    recommendedStay: "1–2 nights",
    image:
      "https://images.unsplash.com/photo-1687504692250-fa84b3c78507?q=80&w=1600&auto=format&fit=crop",
    alt: "An elevated view over Fish River Canyon in southern Namibia",
  },
  {
    slug: "caprivi",
    name: "Caprivi Strip",
    description:
      "Namibia's green, water-rich panhandle — rivers, floodplains and a different rhythm entirely.",
    bestFor: "Extending into Botswana or Zambia",
    recommendedStay: "2 nights",
    image:
      "https://images.unsplash.com/photo-1598338332181-c7a78afa1198?q=80&w=1600&auto=format&fit=crop",
    alt: "Silhouetted trees along a river at sunset in the Caprivi Strip",
  },
  {
    slug: "spitzkoppe",
    name: "Spitzkoppe",
    description:
      "Granite peaks rising sheer from the plains — Namibia's answer to Table Mountain.",
    bestFor: "Stargazing, one-night detours",
    recommendedStay: "1 night",
    image:
      "https://images.unsplash.com/photo-1719575366943-76d16957fa90?q=80&w=1600&auto=format&fit=crop",
    alt: "Granite peaks of Spitzkoppe rising from the Namibian desert plains",
  },
];

export type Lodge = {
  name: string;
  region: string;
  description: string;
  highlights: string[];
  bestFor: string;
  image: string;
  alt: string;
};

export const featuredLodges: Lodge[] = [
  {
    name: "A camp in the Namib dunes",
    region: "Sossusvlei",
    description:
      "Canvas-and-thatch suites set against the dune belt, with a plunge pool facing the sunset and nothing else in view.",
    highlights: ["Private plunge pools", "Star-bed sleep-outs", "Dune sunrise excursions"],
    bestFor: "Couples, photographers",
    image:
      "https://images.unsplash.com/photo-1711721013732-3eff3c6d0a3a?q=80&w=1600&auto=format&fit=crop",
    alt: "A desert lodge and tented suite set against the Namib dunes",
  },
  {
    name: "A lodge on the Damaraland escarpment",
    region: "Damaraland",
    description:
      "Stone-and-glass rooms built into a rocky hillside, run in partnership with the local conservancy.",
    highlights: ["Desert-adapted elephant tracking", "Community-owned land", "Open-air showers"],
    bestFor: "Remote luxury, conservation-minded travellers",
    image:
      "https://images.unsplash.com/photo-1688999988308-ede80a12eb89?q=80&w=1600&auto=format&fit=crop",
    alt: "A lodge built into a rocky hillside in Damaraland",
  },
  {
    name: "A waterhole camp on the Etosha boundary",
    region: "Etosha",
    description:
      "Raised wooden suites overlooking a floodlit waterhole, so the wildlife comes to you after dark.",
    highlights: ["Floodlit waterhole viewing", "Guided night drives", "Family suites"],
    bestFor: "Families, first safaris",
    image:
      "https://images.unsplash.com/photo-1711721013738-146212eb5fae?q=80&w=1600&auto=format&fit=crop",
    alt: "A giraffe grazing near a waterhole lodge on the edge of Etosha",
  },
  {
    name: "A farmhouse retreat in the south",
    region: "Fish River Canyon",
    description:
      "A converted homestead with wraparound verandas, quiet gardens and unhurried canyon-rim dinners.",
    highlights: ["Working farm setting", "Canyon-rim sundowners", "Home-cooked dinners"],
    bestFor: "Slow travel, farm stays",
    image:
      "https://images.unsplash.com/photo-1693921148867-3e469f9f1d4f?q=80&w=1600&auto=format&fit=crop",
    alt: "A covered veranda with table and chairs at a farmhouse lodge",
  },
];

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
