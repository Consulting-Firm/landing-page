"use client";

import { Bot, Cloud, Compass, Database, Layers, Workflow } from "lucide-react";

import { Container } from "@/components/container";
import { Em, Kicker, SectionTitle } from "@/components/typography";
import { SERVICES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const ICONS = { Layers, Cloud, Bot, Workflow, Database, Compass } as const;
const AREAS = ["bento-a", "bento-b", "bento-c", "bento-d", "bento-e", "bento-f"];
const DELAYS = ["", "d1", "d2", "d1", "d2", "d3"];

export function Services() {
  function handleTilt(e: React.PointerEvent<HTMLElement>) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - py) * 6}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 6}deg`);
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  }
  function resetTilt(e: React.PointerEvent<HTMLElement>) {
    const el = e.currentTarget;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <section id="services" className="py-[130px] max-[980px]:py-[90px]">
      <Container>
        <div className="rv mx-auto mb-16 max-w-[760px] text-center">
          <Kicker>What we do</Kicker>
          <SectionTitle>
            Professional developers, <Em>end to end</Em>
          </SectionTitle>
        </div>

        <div className="bento">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            return (
              <article
                key={service.title}
                className={cn(
                  "bento-tile rv",
                  AREAS[i],
                  DELAYS[i],
                  i === 0 && "bento-tile--feature",
                )}
                onPointerMove={handleTilt}
                onPointerLeave={resetTilt}
              >
                <span className="bento-tile__glow" aria-hidden="true" />
                <span className="bento-tile__icon">
                  {Icon ? <Icon strokeWidth={1.5} /> : null}
                </span>
                <div className="bento-tile__text">
                  <h3 className="bento-tile__title">{service.title}</h3>
                  <p className="bento-tile__desc">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
