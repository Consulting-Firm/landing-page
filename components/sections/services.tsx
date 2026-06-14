import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { Em, Kicker, SectionTitle } from "@/components/typography";
import { ServiceViz } from "@/components/sections/service-viz";
import { SERVICES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

// Staggered reveal delays, matching the design's cadence across the grid.
const DELAYS = ["", "d1", "d1", "d2"];

export function Services() {
  return (
    <section id="services" className="py-[130px] max-[980px]:py-[90px]">
      <Container>
        <div className="rv mx-auto mb-16 max-w-[760px] text-center">
          <Kicker>What we do</Kicker>
          <SectionTitle>
            Senior hands, <Em>end to end</Em>
          </SectionTitle>
        </div>

        <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
          {SERVICES.map((service, i) => (
            <Card
              key={service.title}
              className={cn(
                "rv gap-0 overflow-hidden rounded-[28px] border border-ax-line bg-ax-panel px-11 pt-11 pb-0 text-center text-ax-ink ring-0 transition-colors duration-400 hover:border-[color-mix(in_srgb,var(--ax-accent)_40%,transparent)]",
                DELAYS[i],
              )}
            >
              <h3 className="font-serif text-[38px] font-normal tracking-[-0.01em]">
                {service.title}
              </h3>
              <p className="mt-2.5 text-base leading-[1.55] text-ax-muted">
                {service.description}
              </p>
              <ServiceViz kind={service.viz} />
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
