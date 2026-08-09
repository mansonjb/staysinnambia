"use client";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Wraps the "Check availability" link on a lodge page and fires a GA4
 * `affiliate_click` event with hotel context before the browser follows the
 * href. This is the last click we control before the user reaches the
 * Stay22 map: Stay22's widget is a cross-origin iframe, so clicks on an
 * actual booking link inside it aren't visible to this site's analytics.
 */
export function AffiliateClickLink({
  href,
  hotelName,
  hotelSlug,
  region,
  children,
  className = "",
}: {
  href: string;
  hotelName: string;
  hotelSlug: string;
  region: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "affiliate_click",
          hotel_name: hotelName,
          hotel_slug: hotelSlug,
          region,
        });
      }}
    >
      {children}
    </a>
  );
}
