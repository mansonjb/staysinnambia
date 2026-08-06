import type { Metadata } from "next";
import { LodgeCategoryPage } from "@/components/lodge-category-page";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Namibia's Most Remote Lodges";
const DESCRIPTION = "A night somewhere with no other guests for a hundred kilometres: Namibia's most remote, hardest-to-reach stays.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/most-remote-lodges", languages: { en: "/most-remote-lodges", de: "/de/most-remote-lodges", nl: "/nl/most-remote-lodges" } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 900 }],
  },
};

export default function Page() {
  return (
    <LodgeCategoryPage
      category="remote"
      title="Namibia's most remote lodges"
      intro="These are the stays with real distance around them: fly-in-only camps, single-lodge coastlines, and detours far enough off the main circuit that most itineraries skip them entirely."
      path="/most-remote-lodges"
    />
  );
}
