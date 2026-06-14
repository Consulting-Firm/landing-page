"use client";

import { useEffect } from "react";

/**
 * Mount-once island that drives the scroll-reveal animations. A single
 * IntersectionObserver adds `in` to every `.rv`/`.step` element as it enters the
 * viewport; the actual transitions live in CSS and are gated on
 * `prefers-reduced-motion`, so when motion is reduced nothing is hidden.
 */
export function ScrollReveal() {
  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>(".rv, .step");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
