import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";

export const metadata: Metadata = {
  title: "Best Safari Lodges in Namibia",
  description: "The best safari lodges near Etosha and beyond — waterhole frontages, night drives and expert guiding.",
};

export default function Page() {
  return (
    <LodgeCategoryPage
      category="safari"
      title="Best safari lodges in Namibia"
      intro="Waterhole frontages, off-road tracking and expert guiding — the lodges we'd actually book for a wildlife-first trip."
    />
  );
}
