const ICONS: Record<string, React.ReactNode> = {
  crown: (
    <path d="M4 18h16l-1.5-8-4 3-2.5-5-2.5 5-4-3L4 18Z" strokeLinejoin="round" />
  ),
  tent: <path d="M12 4 3 19h18L12 4ZM8 19l4-9 4 9" strokeLinejoin="round" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M17 12.5c2.5 0 4 1.6 4 4" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.4-9.5-9C1 8 2.5 4.5 6 4c2-.3 4 .8 6 3.2C14 4.8 16 3.7 18 4c3.5.5 5 4 3.5 7-2.5 4.6-9.5 9-9.5 9Z" />
  ),
  binoculars: (
    <>
      <circle cx="8" cy="15" r="4" />
      <circle cx="16" cy="15" r="4" />
      <path d="M9 11 8 5h2l1.5 6M15 11l1-6h-2l-1.5 6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-6 2 2-6 6-2Z" />
    </>
  ),
  fire: (
    <path d="M12 3c1 3-3 4-3 8a3 3 0 0 0 6 0c0-1-1-1.5-1-3 1.5 1 3 3 3 5.5A5.5 5.5 0 0 1 6.5 13C6.5 8 12 7 12 3Z" />
  ),
  wheat: (
    <>
      <path d="M12 3v18" />
      <path d="M12 6 9 4M12 6l3-2M12 10 9 8m3 2 3-2M12 14 9 12m3 2 3-2" />
    </>
  ),
};

export function IconBadge({
  icon,
  tone = "rust",
  className = "h-11 w-11",
}: {
  icon: keyof typeof ICONS;
  tone?: "rust" | "olive";
  className?: string;
}) {
  const gradient =
    tone === "rust" ? "from-rust to-sand-dark" : "from-olive to-sand-dark";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-ivory ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-[55%] w-[55%]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        {ICONS[icon]}
      </svg>
    </span>
  );
}
