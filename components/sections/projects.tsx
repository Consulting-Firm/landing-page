import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Em, Kicker, SectionTitle } from "@/components/typography";
import { ProjectShot } from "@/components/sections/project-shot";
import { PROJECTS } from "@/lib/site-data";

export function Projects() {
  return (
    <section id="work" className="py-[130px] max-[980px]:py-[90px]">
      <Container>
        <div className="rv mb-16 max-w-[760px]">
          <Kicker>Selected work</Kicker>
          <SectionTitle>
            Projects that <Em>shipped</Em>
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
                <h3 className="text-[40px] font-bold tracking-[-0.03em]">
                  {project.name}
                </h3>
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
                <p className="mt-[22px] max-w-[44ch] text-base leading-[1.6] opacity-[0.78]">
                  {project.description}
                </p>
                <div className="mt-auto flex gap-9 pt-[26px]">
                  {project.results.map((result) => (
                    <div key={result.label}>
                      <b className="block text-[30px] font-bold tracking-[-0.02em]">
                        {result.value}
                      </b>
                      <span className="text-[13px] opacity-[0.65]">
                        {result.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <ProjectShot index={i} />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
