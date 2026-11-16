// Stay22 affiliate id (aid) = account handle, attributes map bookings to us.
// NOT the letmeallez lmaID (that 24-hex stays in the layout script).
const STAY22_AID = "eijeanbaptistemanson";

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
