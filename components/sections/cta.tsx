import { BookCall } from "@/components/book-call";
import { Container } from "@/components/container";
import { CtaButton } from "@/components/cta-button";
import { Em, SectionTitle } from "@/components/typography";
import { CONTACT_EMAIL } from "@/lib/site-data";

export function Cta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-[160px] text-center"
    >
      <div className="cta-glow" />
      <Container className="relative z-10">
        <SectionTitle className="rv mx-auto max-w-[18ch]">
          Let&apos;s build something <Em>durable</Em>
        </SectionTitle>
        <p className="rv d1 mx-auto mt-[22px] mb-[38px] max-w-[46ch] text-lg leading-[1.6] text-ax-muted">
          One call. We&apos;ll tell you honestly whether we&apos;re the right
          team — and exactly what it would take.
        </p>
        <div className="rv d2 flex justify-center gap-3.5">
          <BookCall size="big">Book a call</BookCall>
          <CtaButton
            href={`mailto:${CONTACT_EMAIL}`}
            size="big"
            variant="ghost"
          >
            {CONTACT_EMAIL}
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
