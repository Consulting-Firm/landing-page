import { ScrollReveal } from "@/components/scroll-reveal";
import { Certifications } from "@/components/sections/certifications";
import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/sections/site-nav";
import { Team } from "@/components/sections/team";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <Team />
        <Certifications />
        <Projects />
        <Process />
        <Cta />
      </main>
      <SiteFooter />
      <ScrollReveal />
    </>
  );
}
