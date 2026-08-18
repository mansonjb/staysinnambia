"use client";

import { useEffect, useRef } from "react";

/**
 * Travelpayouts eSIM widget (tpwgt.com). The script self-renders into whatever
 * element it's parsed inside, so it must be appended imperatively rather than
 * rendered as static JSX, otherwise React's hydration never executes it.
 */
export function EsimWidget({ locale = "en" }: { locale?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const script = document.createElement("script");
    script.async = true;
    script.charset = "utf-8";
    script.src = `https://tpwgt.com/content?trs=530832&shmarker=730118.namibia&locale=${locale}&powered_by=true&color_button=%23f2685f&color_focused=%23f2685f&secondary=%23FFFFFF&dark=%2311100f&light=%23FFFFFF&special=%23C4C4C4&border_radius=5&plain=false&no_labels=&promo_id=8588&campaign_id=541`;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [locale]);

  return <div ref={ref} className="min-h-[120px]" />;
}
