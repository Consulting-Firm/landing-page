"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

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
          <div className="absolute inset-0 backdrop-blur-[3px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f5f3ee]/60 to-[#f5f3ee]" />
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className={cn(
              "group pointer-events-auto relative mb-10 flex items-center gap-3.5 rounded-full border border-[#0a0a0a]/15 bg-[#f5f3ee]/70 py-2 pr-2 pl-6 text-[14px] font-semibold tracking-[-0.01em] text-[#0a0a0a] backdrop-blur-sm",
              "ease-[cubic-bezier(0.2,0.8,0.2,1)] duration-300 hover:border-[#0a0a0a]/30",
            )}
          >
            And many more
            <span className="flex size-9 items-center justify-center rounded-full bg-[#0a0a0a] text-[#f5f3ee] transition-colors duration-300 group-hover:bg-ax-accent group-hover:text-[#0a0a0a]">
              <ChevronDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
