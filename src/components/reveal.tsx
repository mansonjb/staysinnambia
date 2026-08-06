"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reveal = () => {
      node.style.animationDelay = `${delay}ms`;
      node.classList.add("is-visible");
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    // Safety net: guarantee the content becomes visible even if the
    // IntersectionObserver never fires (e.g. backgrounded tab, some
    // crawlers). This is a content site, so it must never stay hidden.
    const fallback = window.setTimeout(reveal, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
