import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Namibia Farm Stays";
const DESCRIPTION = "Working homesteads turned into quiet, unpretentious guesthouses across Namibia.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/namibia-farm-stays", languages: { en: "/namibia-farm-stays", de: "/de/namibia-farm-stays", nl: "/nl/namibia-farm-stays" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function Page() {
  return (
    <LodgeCategoryPage
      category="farm"
      title="Namibia farm stays"
      intro="Genuine working farms and homesteads turned into guesthouses are one of Namibia's quieter accommodation traditions. We're still researching properties that meet our bar before recommending any by name."
      path="/namibia-farm-stays"
    />
  );
}
