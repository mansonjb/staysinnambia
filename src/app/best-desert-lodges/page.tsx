import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Best Desert Lodges in Namibia";
const DESCRIPTION = "The best desert lodges across the Namib dune belt and beyond.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/best-desert-lodges", languages: { en: "/best-desert-lodges", de: "/de/best-desert-lodges", nl: "/nl/best-desert-lodges" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function Page() {
  return (
    <LodgeCategoryPage
      category="desert"
      title="Best desert lodges in Namibia"
      intro="From dune-facing suites at Sossusvlei to shipwreck-shaped chalets on the Skeleton Coast: Namibia's most striking desert stays."
      path="/best-desert-lodges"
    />
  );
}
