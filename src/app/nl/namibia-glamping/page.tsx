import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Namibië glamping";
const DESCRIPTION = "Tentcomfort zonder in te leveren op een echt bed en badkamer: Namibië's beste tentenkampen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/nl/namibia-glamping",
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
      locale="nl"
      category="glamping"
      title="Namibië glamping: de beste tentenkampen"
      intro="Tentwanden, echte bedden en eigen badkamer: deze tentenkampen brengen u dichter bij het landschap en het geluid ervan 's nachts, zonder dat u echt hoeft te bivakkeren."
      path="/namibia-glamping"
    />
  );
}
