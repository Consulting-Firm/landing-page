import { CtaButton } from "@/components/cta-button";
import { NAV_LINKS } from "@/lib/site-data";

export function SiteNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-10 py-[22px] backdrop-blur-[6px] [background:linear-gradient(rgba(10,10,10,0.92),rgba(10,10,10,0.6)_70%,transparent)] max-[980px]:px-[22px] max-[980px]:py-4">
      <a href="#" className="flex items-center" aria-label="Archthorpe — home">
        <img
          src="/logo.svg"
          alt="Archthorpe"
          className="h-6 w-auto"
        />
      </a>

      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-7 text-[15px] text-ax-muted max-[980px]:hidden">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-ax-ink"
          >
            {link.label}
          </a>
        ))}
      </div>

      <CtaButton href="#contact">Book a call</CtaButton>
    </nav>
  );
}
