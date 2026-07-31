export function CardArrow({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rust/10 text-rust transition-colors group-hover:bg-rust group-hover:text-ivory ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function CardCTA({ label, className = "" }: { label: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-rust px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-ivory shadow-sm transition-colors group-hover:bg-rust-dark ${className}`}
    >
      {label}
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function SaveButton({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-sm transition-colors hover:text-rust ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path
          d="M12 20s-7-4.4-9.5-9C1 8 2.5 4.5 6 4c2-.3 4 .8 6 3.2C14 4.8 16 3.7 18 4c3.5.5 5 4 3.5 7-2.5 4.6-9.5 9-9.5 9Z"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
