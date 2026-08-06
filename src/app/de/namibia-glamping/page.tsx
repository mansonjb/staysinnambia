import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Namibia Glamping";
const DESCRIPTION = "Zelt-Komfort ohne auf ein richtiges Bett und Bad zu verzichten: Namibias beste Zeltcamps.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/de/namibia-glamping",
    languages: { en: "/namibia-glamping", de: "/de/namibia-glamping", nl: "/nl/namibia-glamping" },
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
      category="glamping"
      title="Namibia Glamping: die besten Zeltcamps"
      intro="Zeltwände, richtige Betten und eigenes Bad: Diese Zeltcamps bringen Sie näher an die Landschaft und ihre nächtlichen Geräusche, ohne dass Sie wirklich auf Komfort verzichten müssen."
      path="/namibia-glamping"
    />
  );
}
