import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Best Family Lodges in Namibia";
const DESCRIPTION = "Family-friendly lodges across Namibia, chosen for space, ease and proximity.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/best-family-lodges", languages: { en: "/best-family-lodges", de: "/de/best-family-lodges", nl: "/nl/best-family-lodges" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function Page() {
  return (
    <LodgeCategoryPage
      category="family"
      title="Best family lodges in Namibia"
      intro="Interleading rooms, easy logistics and a gentler pace: the lodges that work well for travelling with kids."
      path="/best-family-lodges"
    />
  );
}
