import { Container } from "@/components/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Em, Kicker, SectionTitle } from "@/components/typography";
import { TEAM } from "@/lib/site-data";
import { cn } from "@/lib/utils";

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

              <div className="mt-5 flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="h-auto rounded-full border-ax-line px-3 py-1.5 text-[13px] font-medium text-ax-ink"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <Separator className="mt-6 bg-ax-line" />
              <div className="mt-[18px] grid gap-2.5">
                {member.work.map((item) => (
                  <div
                    key={item.project}
                    className="flex justify-between text-[14px]"
                  >
                    <b className="font-semibold">{item.project}</b>
                    <span className="text-ax-faint">{item.meta}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
