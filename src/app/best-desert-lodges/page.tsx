import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";

export const metadata: Metadata = {
  title: "Best Desert Lodges in Namibia",
  description: "The best desert lodges across the Namib dune belt and beyond.",
};

export default function Page() {
  return (
    <LodgeCategoryPage
      category="desert"
      title="Best desert lodges in Namibia"
      intro="From dune-facing suites at Sossusvlei to shipwreck-shaped chalets on the Skeleton Coast — Namibia's most striking desert stays."
    />
  );
}
