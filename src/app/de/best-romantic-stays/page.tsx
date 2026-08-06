import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Romantischste Unterkünfte in Namibia";
const DESCRIPTION = "Private Decks, Schlafplätze unter freiem Himmel und Lodges für zwei: Namibias romantischste Unterkünfte, keine Preise, keine gefälschten Bewertungen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/best-romantic-stays",
    languages: { en: "/best-romantic-stays", de: "/de/best-romantic-stays", nl: "/nl/best-romantic-stays" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function Page() {
  return (
    <LodgeCategoryPage
      locale="de"
      category="romantic"
      title="Romantischste Unterkünfte in Namibia"
      intro="Namibias Weite und Stille machen es zu einem wirklich romantischen Reiseziel: private Plunge Pools, Sternenbetten auf dem Dach und Lodges, bei denen die nächsten anderen Gäste wirklich weit entfernt sind."
      path="/best-romantic-stays"
    />
  );
}
