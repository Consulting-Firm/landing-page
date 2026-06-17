"use client";

import { useState } from "react";

const MAX_CHARS = 200;

const PARAGRAPH_CLASS =
  "mt-[22px] max-w-[44ch] text-base leading-[1.6] opacity-[0.78]";

function ToggleButton({
  expanded,
  onClick,
}: {
  expanded: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="font-semibold underline underline-offset-2 transition-opacity hover:opacity-70"
    >
      {expanded ? "Show less" : "Read more"}
    </button>
  );
}

export function ProjectDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= MAX_CHARS) {
    return <p className={PARAGRAPH_CLASS}>{text}</p>;
  }

  const prefix = text.slice(0, MAX_CHARS).trimEnd();
  const rest = text.slice(MAX_CHARS);

  return (
    <div className={PARAGRAPH_CLASS}>
      <p>
        {prefix}
        {!expanded && "… "}
        {!expanded && (
          <ToggleButton expanded={false} onClick={() => setExpanded(true)} />
        )}
      </p>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className={`transition-opacity duration-300 ${
              expanded ? "opacity-100" : "opacity-0"
            }`}
          >
            {rest}{" "}
            <ToggleButton expanded onClick={() => setExpanded(false)} />
          </p>
        </div>
      </div>
    </div>
  );
}
