"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { HERO_CARDS } from "@/lib/site-data";

const ASPECT = 1; // card height ÷ width — 1:1 square, preserved at every size
const MOTION = 0.7;

interface Dims {
  cardW: number;
  cardH: number;
  radius: number;
  step: number;
  count: number;
}

/**
 * The hero signature: a 3D cylinder of project cards viewed from the inside, so
 * the front card is the far wall and the edge cards sweep toward the viewer. The
 * tube dimensions track the viewport; one rAF loop rotates the track and fades
 * the cards on the back half. Ported from the design's vanilla implementation.
 */
export function HeroCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [dims, setDims] = useState<Dims | null>(null);
  // Rotation lives in a ref so it survives a dims change (resize) instead of
  // snapping back to 0 when the animation effect below re-runs.
  const angleRef = useRef(0);

  // Size the tube from the viewport; derive the card count from the
  // circumference so spacing stays even however large the tube grows.
  useEffect(() => {
    function compute() {
      const vmax = Math.max(window.innerWidth, window.innerHeight);
      const cardW = Math.round(vmax * 0.1085);
      const cardH = Math.round(cardW * ASPECT);
      const gap = Math.round(cardW * 0.06);
      const arc = cardW + gap;
      const radius = Math.round(vmax * 0.4);
      // Round the slot count to a whole number of logo sets so the cycle wraps
      // cleanly. Otherwise the last slot repeats the first logo and the two land
      // next to each other at the seam (e.g. two Adobes side by side).
      const count = Math.max(6, Math.round((2 * Math.PI * radius) / arc));
      const step = 360 / count;
      setDims({ cardW, cardH, radius, step, count });
    }

    compute();
    let lastW = window.innerWidth;
    let timer: ReturnType<typeof setTimeout>;
    function onResize() {
      // Mobile browsers fire `resize` when the URL bar shows/hides on scroll,
      // changing only innerHeight. Recompute on width change alone — otherwise
      // the dims object is replaced on every scroll, restarting the animation.
      if (window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      clearTimeout(timer);
      timer = setTimeout(compute, 150);
    }
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Drift + depth fade. Card transforms are static (set in JSX); the loop only
  // rotates the track and updates per-card opacity.
  useEffect(() => {
    if (!dims) return;
    const { radius, step, count } = dims;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const baseAngle = Array.from({ length: count }, (_, i) => i * step);

    let last: number | null = null;
    let speed = 0;
    let raf = 0;

    function frame(now: number) {
      if (last === null) last = now;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const target = reduced ? 0 : 3 * MOTION; // deg/sec — slow drift
      speed += (target - speed) * Math.min(dt * 4, 1);
      const angle = (angleRef.current - speed * dt) % 360;
      angleRef.current = angle;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateZ(${radius}px) rotateY(${angle}deg)`;
      }

      for (let i = 0; i < count; i++) {
        const card = cardRefs.current[i];
        if (!card) continue;
        const c = Math.cos(((baseAngle[i] + angle) * Math.PI) / 180);
        if (c <= 0.04) {
          if (card.style.opacity !== "0") {
            card.style.opacity = "0";
            card.style.pointerEvents = "none";
          }
        } else {
          card.style.opacity = (0.7 + 0.3 * c).toFixed(3);
          card.style.pointerEvents = "auto";
        }
      }
      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [dims]);

  return (
    <div
      className="v-carousel"
      aria-hidden="true"
      style={dims ? { height: dims.cardH * 2 } : undefined}
    >
      <div
        ref={trackRef}
        className="car-track"
        style={
          dims
            ? {
                ["--cw" as string]: `${dims.cardW}px`,
                ["--ch" as string]: `${dims.cardH}px`,
                transform: `translateZ(${dims.radius}px)`,
              }
            : undefined
        }
      >
        {dims &&
          Array.from({ length: dims.count }, (_, i) => {
            const card = HERO_CARDS[i % HERO_CARDS.length];
            return (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="car-card"
                style={{
                  transform: `rotateY(${i * dims.step}deg) translateZ(${-dims.radius}px)`,
                }}
              >
                <span className="car-logo">
                  <Image
                    src={card.img}
                    alt={card.name}
                    fill
                    sizes="(max-width: 640px) 40vw, 16vw"
                    className="object-cover"
                  />
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
