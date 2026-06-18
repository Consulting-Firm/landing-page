"use client";

import { Clock } from "lucide-react";
import { useEffect, useRef } from "react";

import { Container } from "@/components/container";
import { Em, Kicker } from "@/components/typography";
import { PROCESS, PROCESS_ESTIMATE } from "@/lib/site-data";

export function Process() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // On desktop the section pins and the steps travel horizontally as you
  // scroll. On mobile (and reduced-motion) it falls back to a vertical stack.
  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!wrap || !track || !fill) return;
    const desktop = window.matchMedia("(min-width: 981px)");

    let raf = 0;
    function update() {
      raf = 0;
      if (!wrap || !track || !fill) return;
      if (!desktop.matches) {
        track.style.transform = "";
        fill.style.transform = "scaleX(0)";
        return;
      }
      const scrollable = wrap.offsetHeight - window.innerHeight;
      const top = wrap.getBoundingClientRect().top;
      const progress = Math.max(0, Math.min(1, -top / Math.max(1, scrollable)));
      const viewport = track.parentElement;
      const maxX = Math.max(0, track.scrollWidth - (viewport?.clientWidth ?? 0));
      track.style.transform = `translate3d(${-progress * maxX}px, 0, 0)`;
      fill.style.transform = `scaleX(${progress})`;
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="process" className="proc">
      <div ref={wrapRef} className="proc-wrap">
        <div className="proc-pin">
          <Container className="rv">
            <Kicker>How we work</Kicker>
            <h2 className="proc-title">
              A clear path from <Em>call to launch</Em>
            </h2>
            <div className="proc-bar" aria-hidden="true">
              <div ref={fillRef} className="proc-bar__fill" />
            </div>
          </Container>

          <div className="proc-viewport">
            <div ref={trackRef} className="proc-track">
              {PROCESS.map((step) => (
                <article key={step.num} className="proc-panel">
                  <div className="proc-panel__num">{step.num}</div>
                  <div>
                    <h3 className="proc-panel__title">{step.title}</h3>
                    <p className="proc-panel__desc">{step.description}</p>
                    <span className="proc-dur">
                      <Clock className="size-3.5" strokeWidth={2} />
                      {step.duration}
                    </span>
                  </div>
                </article>
              ))}
              <article className="proc-panel proc-panel--end">
                <p className="proc-panel__end-text">{PROCESS_ESTIMATE}</p>
                <p className="proc-panel__end-sub">
                  Fixed scope and a fixed quote — both agreed in the blueprint,
                  before we write a line of code.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
