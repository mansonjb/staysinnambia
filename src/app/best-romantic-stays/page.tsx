import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Best Romantic Stays in Namibia";
const DESCRIPTION = "Private decks, sleep-outs and lodges built for two: Namibia's most romantic stays, no prices, no fake reviews.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/best-romantic-stays", languages: { en: "/best-romantic-stays", de: "/de/best-romantic-stays", nl: "/nl/best-romantic-stays" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function Page() {
  return (
    <LodgeCategoryPage
      category="romantic"
      title="Best romantic stays in Namibia"
      intro="Namibia's space and silence make it a genuinely romantic destination: private plunge pools, rooftop star-beds and lodges where the nearest other guests are a real distance away."
      path="/best-romantic-stays"
    />
  );
}
