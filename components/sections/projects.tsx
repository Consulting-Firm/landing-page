import { Container } from "@/components/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Em, Kicker, SectionTitle } from "@/components/typography";
import { ProjectShot } from "@/components/sections/project-shot";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { ProjectDescription } from "@/components/sections/project-description";
import { PROJECTS, TEAM } from "@/lib/site-data";

const memberByName = new Map(TEAM.map((member) => [member.name, member]));

export function Projects() {
  return (
    <section id="work" className="py-[130px] max-[980px]:py-[90px]">
      <Container>
        <div className="rv mb-16 max-w-[760px]">
          <Kicker>Our work</Kicker>
          <SectionTitle>
            Projects we&apos;ve <Em>worked on</Em>
          </SectionTitle>
        </div>

        <div className="grid gap-7">
          {PROJECTS.map((project, i) => (
            <article
              key={project.name}
              className="rv grid min-h-[420px] grid-cols-[1fr_1.15fr] overflow-hidden rounded-[32px] text-[#101010] max-[980px]:grid-cols-1"
              style={{ background: project.background }}
            >
              <div className="flex flex-col p-[52px]">
                <h3 className="text-[34px] leading-[1.1] font-bold tracking-[-0.03em]">
                  {project.name}
                </h3>
                {project.subtitle ? (
                  <p className="mt-0.5 text-[16px] font-medium opacity-[0.6]">
                    {project.subtitle}
                  </p>
                ) : null}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="h-auto rounded-full bg-black/10 px-3 py-1.5 text-[13px] font-semibold text-[#101010]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <ProjectDescription text={project.description} />

                <div className="mt-auto flex flex-wrap items-end justify-between gap-5 border-t border-black/10 pt-7 max-[520px]:flex-col max-[520px]:items-start">
                  <div className="flex items-center gap-3.5">
                    <div className="flex -space-x-2.5">
                      {project.people.map((personName) => {
                        const member = memberByName.get(personName);
                        return (
                          <Avatar
                            key={personName}
                            className="size-11 ring-2 ring-black/10 after:hidden"
                          >
                            <AvatarImage
                              src={member?.photo}
                              alt={member?.name ?? personName}
                            />
                            <AvatarFallback className="avatar-gradient text-sm font-bold tracking-[-0.02em] text-[#0a0a0a]">
                              {member?.initials ?? personName.slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                        );
                      })}
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold tracking-[0.08em] uppercase opacity-[0.55]">
                        Worked on by
                      </div>
                      <div className="text-[15px] font-bold tracking-[-0.01em]">
                        {project.people.join(" & ")}
                      </div>
                      <div className="text-[12px] opacity-[0.6]">
                        {project.role}
                      </div>
                    </div>
                  </div>

                  <div className="max-[520px]:text-left text-right">
                    <div className="text-[11px] font-semibold tracking-[0.08em] uppercase opacity-[0.55]">
                      Timeframe
                    </div>
                    <div className="mt-1 text-[15px] font-bold tracking-[-0.01em]">
                      {project.timeframe.start}
                      <span className="px-1.5 opacity-[0.45]">—</span>
                      {project.timeframe.end}
                    </div>
                  </div>
                </div>
              </div>

              {project.image ? (
                <ProjectShowcase
                  name={project.name}
                  image={project.image}
                  alt={project.imageAlt}
                  url={project.url}
                />
              ) : (
                <ProjectShot index={i} />
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
