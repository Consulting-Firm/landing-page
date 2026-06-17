import { Bot, Cloud, Compass, Database, Layers, Workflow } from "lucide-react";

import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { Em, Kicker, SectionTitle } from "@/components/typography";
import { SERVICES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

// Staggered reveal across the two rows of three.
const DELAYS = ["", "d1", "d2", "", "d1", "d2"];

const ICONS = { Layers, Cloud, Bot, Workflow, Database, Compass } as const;

export function Services() {
  return (
    <section id="services" className="py-[130px] max-[980px]:py-[90px]">
      <Container>
        <div className="rv mx-auto mb-16 max-w-[760px] text-center">
          <Kicker>What we do</Kicker>
          <SectionTitle>
            Professional developers, <Em>end to end</Em>
          </SectionTitle>
        </div>

        <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            return (
              <Card
                key={service.title}
                className={cn(
                  "rv flex flex-col items-start gap-0 rounded-[24px] border border-ax-line bg-ax-panel p-8 text-left text-ax-ink ring-0 transition-colors duration-300 hover:border-[color-mix(in_srgb,var(--ax-accent)_40%,transparent)]",
                  DELAYS[i],
                )}
              >
                <div className="mb-6 flex size-11 items-center justify-center rounded-xl border border-ax-line bg-ax-panel-2 text-ax-accent">
                  {Icon ? <Icon className="size-5" strokeWidth={1.6} /> : null}
                </div>
                <h3 className="font-serif text-[26px] leading-[1.1] font-normal tracking-[-0.01em]">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[1.55] text-ax-muted">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
