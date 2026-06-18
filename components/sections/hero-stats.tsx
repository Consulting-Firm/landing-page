"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Stat = {
  /** Final numeric value the counter rolls up to. */
  value: number;
  /** Decimal places to render (e.g. 1 for a 4.9 rating). */
  decimals?: number;
  /** Glyph trailing the figure, set in the serif-italic accent. */
  suffix?: string;
  /** Small lead glyph (e.g. a rating denominator), also accented. */
  lead?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 42, suffix: "+", label: "Industry certifications" },
  { value: 75, suffix: "+", label: "Clients partnered" },
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 96, suffix: "%", label: "Client retention" },
  { value: 4.9, decimals: 1, lead: "★", label: "Satisfaction / 5" },
  { value: 14, suffix: "+", label: "Big-tech engineers" },
];

/** Eases a count toward its target — fast start, gentle settle. */
function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Animates from 0 to `value` once the band scrolls into view. Honours
 * `prefers-reduced-motion` by snapping straight to the final figure.
 */
function useCountUp(value: number, active: boolean, decimals = 0) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const DURATION = 1400;
    let raf = 0;
    let start: number | null = null;

    if (reduce) {
      raf = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(raf);
    }

    const tick = (now: number) => {
      if (start === null) start = now;
      const t = Math.min((now - start) / DURATION, 1);
      setDisplay(value * easeOut(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, active, decimals]);

  return display.toFixed(decimals);
}

function StatCell({ stat, active }: { stat: Stat; active: boolean }) {
  const shown = useCountUp(stat.value, active, stat.decimals ?? 0);

  return (
    <div className="hero-stat group relative px-4 py-1 text-center sm:px-6">
      <div className="flex items-baseline justify-center font-medium tracking-[-0.04em] tabular-nums">
        {stat.lead && (
          <span className="mr-1.5 font-serif text-[0.5em] text-ax-accent italic">
            {stat.lead}
          </span>
        )}
        <span className="hero-stat-num text-[clamp(34px,3.7vw,52px)] leading-none">
          {shown}
        </span>
        {stat.suffix && (
          <span className="ml-0.5 font-serif text-[clamp(20px,2vw,30px)] text-ax-accent italic">
            {stat.suffix}
          </span>
        )}
      </div>
      <div className="mt-3 text-[11px] font-medium tracking-[0.16em] text-ax-muted uppercase">
        {stat.label}
      </div>
    </div>
  );
}

/**
 * Editorial stat band sitting between the hero CTAs and the logo marquee.
 * Six figures roll up on first view, divided by hairlines that fade at their
 * ends, with a faint accent wash centred behind the row.
 */
export function HeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "relative mx-auto mt-24 max-w-[1040px] max-[980px]:mt-16",
        active && "hero-stats-in",
      )}
    >
      {/* centred accent wash */}
      <div className="hero-stats-glow" aria-hidden="true" />

      {/* framing hairlines top + bottom */}
      <div className="hero-stats-rule" aria-hidden="true" />

      <div className="relative grid grid-cols-2 gap-y-9 py-9 sm:grid-cols-3 lg:grid-cols-6">
        {STATS.map((stat) => (
          <StatCell key={stat.label} stat={stat} active={active} />
        ))}
      </div>

      <div className="hero-stats-rule" aria-hidden="true" />
    </div>
  );
}
