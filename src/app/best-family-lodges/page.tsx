import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";

export const metadata: Metadata = {
  title: "Best Family Lodges in Namibia",
  description: "Family-friendly lodges across Namibia, chosen for space, ease and proximity.",
};

export default function Page() {
  return (
    <LodgeCategoryPage
      category="family"
      title="Best family lodges in Namibia"
      intro="Interleading rooms, easy logistics and a gentler pace — the lodges that work well for travelling with kids."
    />
  );
}
