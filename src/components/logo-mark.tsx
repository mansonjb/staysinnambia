export function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="12" r="6" fill="currentColor" className="text-rust" />
      <path
        d="M0 24 C4 20, 8 26, 12 22 C16 18, 20 26, 24 21 C27 18, 30 22, 32 20 L32 32 L0 32 Z"
        fill="currentColor"
        className="text-sand-dark"
      />
    </svg>
  );
}
