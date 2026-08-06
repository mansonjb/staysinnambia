import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Best Luxury Lodges in Namibia";
const DESCRIPTION = "Namibia's most design-led, highest-service lodges: no prices, no fake reviews.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/best-luxury-lodges", languages: { en: "/best-luxury-lodges", de: "/de/best-luxury-lodges", nl: "/nl/best-luxury-lodges" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function Page() {
  return (
    <LodgeCategoryPage
      category="luxury"
      title="Best luxury lodges in Namibia"
      intro="Design-led camps and lodges with the highest level of privacy and service: chosen for setting and craft, not for who pays us the most."
      path="/best-luxury-lodges"
    />
  );
}
