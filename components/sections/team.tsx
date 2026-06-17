import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Em, Kicker, SectionTitle } from "@/components/typography";
import { TEAM } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const DELAYS = ["", "d1", "d2"];

export function Team() {
  return (
    <section id="team" className="py-[130px] max-[980px]:py-[90px]">
      <Container>
        <div className="rv mb-16 max-w-[760px]">
          <Kicker>The team</Kicker>
          <SectionTitle>
            Three people. <Em>Zero handoffs.</Em>
          </SectionTitle>
          <p className="mt-[18px] text-lg leading-[1.6] text-ax-muted">
            You work directly with the people writing the code. No account
            managers, no juniors learning on your budget.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-[980px]:grid-cols-1">
          {TEAM.map((member, i) => (
            <Card
              key={member.name}
              className={cn(
                "rv gap-0 rounded-[28px] border border-ax-line bg-ax-panel px-[34px] py-10 text-ax-ink ring-0 transition-[transform,border-color] duration-400 hover:-translate-y-1.5 hover:border-[color-mix(in_srgb,var(--ax-accent)_40%,transparent)]",
                DELAYS[i],
              )}
            >
              <div className="team-avatar mb-[26px]">
                <Avatar className="size-24 after:hidden">
                  <AvatarImage src={member.photo} alt={member.name} />
                  <AvatarFallback className="avatar-gradient text-3xl font-bold tracking-[-0.02em] text-[#0a0a0a]">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>

              <h3 className="text-[26px] font-semibold tracking-[-0.02em]">
                {member.name}
              </h3>
              <div className="mt-1.5 text-[14px] font-semibold tracking-[0.04em] text-ax-accent uppercase">
                {member.role}
              </div>
              <p className="mt-4 text-[15px] leading-[1.6] text-ax-muted">
                {member.bio}
              </p>

              <div className="mt-auto pt-7">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${member.name} on LinkedIn`}
                  className="group/li inline-flex items-center gap-2 text-[14px] font-medium text-ax-muted transition-colors duration-300 hover:text-ax-accent"
                >
                  <LinkedInIcon className="size-[18px]" />
                  <span className="underline decoration-ax-line decoration-1 underline-offset-4 transition-colors duration-300 group-hover/li:decoration-ax-accent">
                    View on LinkedIn
                  </span>
                  <ArrowUpRight className="relative top-[2px] -ml-1 size-4 transition-transform duration-300 group-hover/li:translate-x-0.5 group-hover/li:-translate-y-0.5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
