"use client";

import { Clock } from "lucide-react";
import { useEffect, useRef } from "react";

import { Container } from "@/components/container";
import { Em, Kicker, SectionTitle } from "@/components/typography";
import { PROCESS, PROCESS_ESTIMATE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const DELAYS = ["", "d1", "d2", "d3"];

export function Process() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Scroll-linked progress: the rail fills and each station lights up as the
  // section moves through the viewport. Degrades to fully-lit for reduced motion.
  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const steps = Array.from(el.querySelectorAll<HTMLElement>(".t-step"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--progress", "1");
      steps.forEach((s) => s.classList.add("active"));
      return;
    }

    let raf = 0;
    function update() {
      raf = 0;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.8;
      const end = vh * 0.35;
      const prog = Math.max(0, Math.min(1, (start - r.top) / (start - end)));
      el.style.setProperty("--progress", prog.toFixed(3));
      steps.forEach((s, i) =>
        s.classList.toggle("active", prog >= (i + 0.35) / steps.length),
      );
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
    <section id="process" className="py-[130px] max-[980px]:py-[90px]">
      <Container>
        <div className="rv mb-20 max-w-[760px] max-[980px]:mb-12">
          <Kicker>How we work</Kicker>
          <SectionTitle>
            A clear path from <Em>call to launch</Em>
          </SectionTitle>
        </div>

        <div ref={timelineRef} className="timeline">
          <div className="timeline-rail" aria-hidden="true">
            <span className="timeline-rail-fill" />
          </div>
          <ol className="timeline-steps">
            {PROCESS.map((step, i) => (
              <li key={step.num} className={cn("t-step rv", DELAYS[i])}>
                <div className="t-node">
                  <span>{step.num}</span>
                </div>
                <h3 className="t-title">{step.title}</h3>
                <p className="t-desc">{step.description}</p>
                <span className="t-duration">
                  <Clock className="size-3.5" strokeWidth={2} />
                  {step.duration}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <p className="rv mt-16 max-w-[60ch] text-[15px] leading-[1.6] text-ax-muted max-[980px]:mt-12">
          <span className="font-semibold text-ax-ink">{PROCESS_ESTIMATE}</span>{" "}
          Fixed scope and a fixed quote — both agreed in the blueprint, before we
          write a line of code.
        </p>
      </Container>
    </section>
  );
}
