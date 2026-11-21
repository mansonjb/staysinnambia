import { CricketWcPage, cricketMetadata } from "@/components/cricket-wc-page";
import { contentDe } from "@/lib/cricket-wc.de";
import { getLodgeDe } from "@/lib/data.de";

export const metadata = cricketMetadata(contentDe, "de");

export default function CricketWorldCup2027PageDe() {
  return <CricketWcPage content={contentDe} locale="de" getLodge={getLodgeDe} />;
}
