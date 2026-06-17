"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function CollapsibleProjects({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative mt-7">
      <div
        className="grid gap-7 overflow-hidden transition-[max-height] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
        style={{ maxHeight: expanded ? "20000px" : "180px" }}
      >
        {children}
      </div>

      {!expanded ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-[240px] items-end justify-center">
          <div className="absolute inset-0 backdrop-blur-sm [mask-image:linear-gradient(to_bottom,transparent_0%,black_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ax-bg/40 to-ax-bg" />
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="pointer-events-auto relative mb-10 flex items-center gap-2 rounded-full bg-ax-ink px-7 py-3.5 text-[15px] font-semibold text-[#0a0a0a] shadow-[0_8px_30px_rgba(0,0,0,0.45)] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:scale-[1.04] hover:bg-ax-accent"
          >
            Show more
            <ChevronDown className="size-4" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
