import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";

export const metadata: Metadata = {
  title: "Best Luxury Lodges in Namibia",
  description: "Namibia's most design-led, highest-service lodges — no prices, no fake reviews.",
};

export default function Page() {
  return (
    <LodgeCategoryPage
      category="luxury"
      title="Best luxury lodges in Namibia"
      intro="Design-led camps and lodges with the highest level of privacy and service — chosen for setting and craft, not for who pays us the most."
    />
  );
}
