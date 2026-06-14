import { Container } from "@/components/container";
import { Em, Kicker, SectionTitle } from "@/components/typography";
import { PROCESS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const DELAYS = ["", "d1", "d2", "d3"];

export function Process() {
  return (
    <section id="process" className="py-[130px] max-[980px]:py-[90px]">
      <Container>
        <div className="rv mb-16 max-w-[760px]">
          <Kicker>How we work</Kicker>
          <SectionTitle>
            A process you can <Em>see through</Em>
          </SectionTitle>
        </div>

        <div className="grid grid-cols-4 gap-6 max-[980px]:grid-cols-2">
          {PROCESS.map((step, i) => (
            <div
              key={step.num}
              className={cn("step rv border-t border-ax-line pt-6", DELAYS[i])}
            >
              <div className="font-serif text-[52px] leading-none text-ax-accent italic">
                {step.num}
              </div>
              <h3 className="mt-4 text-[22px] font-semibold tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-ax-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
