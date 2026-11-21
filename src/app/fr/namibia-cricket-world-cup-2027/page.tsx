import { CricketWcPage, cricketMetadata } from "@/components/cricket-wc-page";
import { contentFr } from "@/lib/cricket-wc.fr";
import { getLodgeFr } from "@/lib/data.fr";

export const metadata = cricketMetadata(contentFr, "fr");

export default function CricketWorldCup2027PageFr() {
  return <CricketWcPage content={contentFr} locale="fr" getLodge={getLodgeFr} />;
}
