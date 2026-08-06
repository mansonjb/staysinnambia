import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Namibia Glamping";
const DESCRIPTION = "Canvas comfort without giving up a proper bed and bathroom: Namibia's best tented camps.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/namibia-glamping", languages: { en: "/namibia-glamping", de: "/de/namibia-glamping", nl: "/nl/namibia-glamping" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function Page() {
  return (
    <LodgeCategoryPage
      category="glamping"
      title="Namibia glamping: the best tented camps"
      intro="Canvas walls, real beds and en-suite bathrooms: these tented camps put you closer to the landscape and the sound of it at night, without actually roughing it."
      path="/namibia-glamping"
    />
  );
}
