import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Em } from "@/components/typography";
import { HeroMarquee } from "@/components/sections/hero-marquee";
import { HeroStats } from "@/components/sections/hero-stats";

export function Hero() {
  return (
    <header className="relative pt-[120px] text-center">
      <Container>
        <h1 className="mx-auto max-w-[16ch] text-[clamp(36px,4.7vw,70px)] leading-[1.04] font-medium tracking-[-0.03em] text-balance">
          We build <Em>software</Em> that moves business <Em>forward</Em>
        </h1>
        <div className="mt-7 flex justify-center gap-3.5">
          <CtaButton href="#contact" size="big">
            Book a call
          </CtaButton>
          <CtaButton href="#work" size="big" variant="ghost">
            See our work
          </CtaButton>
        </div>
      </Container>

      <Container>
        <HeroStats />
      </Container>

      <div className="hero-visual">
        <HeroMarquee />
      </div>
    </header>
  );
}
