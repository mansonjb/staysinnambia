const PATHS: Record<string, React.ReactNode> = {
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="7.5" r="2.8" />
      <path d="M3 19c0-2.8 2.4-4.8 6-4.8s6 2 6 4.8" />
      <circle cx="17" cy="8.5" r="2.2" />
      <path d="M17 11.5c2.2 0 3.7 1.5 3.7 3.8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  check: <path d="M4 12.5 9.5 18 20 6.5" />,
};

export function MetaIcon({
  name,
  className = "h-4 w-4",
}: {
  name: keyof typeof PATHS;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
