"use client";

import { useEffect, useState } from "react";

import { NavButton } from "@/components/nav-button";
import { NAV_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteNav() {
  // `light` is true while the nav band overlaps a light-background section
  // (the white #work projects section), so contents flip to dark ink.
  const [light, setLight] = useState(false);

  useEffect(() => {
    const navBand = 80;

    const update = () => {
      const work = document.getElementById("work");
      if (!work) {
        setLight(false);
        return;
      }
      const rect = work.getBoundingClientRect();
      setLight(rect.top <= navBand && rect.bottom >= navBand);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b px-10 py-[22px] backdrop-blur-lg transition-colors duration-300 max-[980px]:px-[22px] max-[980px]:py-4",
        light ? "border-black/5 bg-white/10" : "border-white/5 bg-black/10",
      )}
    >
      <a href="#" className="flex items-center" aria-label="Archthorpe — home">
        <img
          src="/logo.svg"
          alt="Archthorpe"
          className={cn(
            "h-6 w-auto transition-[filter] duration-300",
            light && "brightness-0",
          )}
        />
      </a>

      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-7 text-[15px] transition-colors duration-300 max-[980px]:hidden">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "transition-colors",
              light
                ? "text-[#0a0a0a]/60 hover:text-[#0a0a0a]"
                : "text-ax-muted hover:text-ax-ink",
            )}
          >
            {link.label}
          </a>
        ))}
      </div>

      <NavButton href="#contact" className={cn(light && "text-[#0a0a0a]")}>
        Book a call
      </NavButton>
    </nav>
  );
}
