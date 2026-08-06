const STAY22_AID = "6a6d1d818b07e110fe9e5539";

export function Stay22Map({
  lat,
  lng,
  label,
  zoom = 9,
  className = "",
}: {
  lat: number;
  lng: number;
  label: string;
  zoom?: number;
  className?: string;
}) {
  const src = `https://www.stay22.com/embed/gm?aid=${STAY22_AID}&lat=${lat}&lng=${lng}&zoom=${zoom}`;

  return (
    <div className={`overflow-hidden rounded-2xl border border-black/5 shadow-sm ${className}`}>
      <iframe
        src={src}
        title={`Map of places to stay near ${label}`}
        width="100%"
        height="460"
        loading="lazy"
        style={{ border: 0 }}
      />
    </div>
  );
}
