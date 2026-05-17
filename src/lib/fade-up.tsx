"use client";

import { useEffect, useRef } from "react";

/* Root-level IntersectionObserver. Wrap a page section (or the app) and any
 * descendant with className="fade-up" will reveal once on enter. */
export function FadeUpRoot({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const observe = () =>
      el.querySelectorAll(".fade-up:not(.in)").forEach((node) => io.observe(node));
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(el, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}
