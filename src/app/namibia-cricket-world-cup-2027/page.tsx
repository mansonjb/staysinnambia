import { CricketWcPage, cricketMetadata } from "@/components/cricket-wc-page";
import { getLodge } from "@/lib/data";
import { contentEn } from "@/lib/cricket-wc";

export const metadata = cricketMetadata(contentEn, "en");

export default function CricketWorldCup2027Page() {
  return <CricketWcPage content={contentEn} locale="en" getLodge={getLodge} />;
}
