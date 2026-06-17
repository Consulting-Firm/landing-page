"use client";

import { useState } from "react";

const MAX_CHARS = 200;

export function ProjectDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > MAX_CHARS;

  if (!isLong) {
    return (
      <p className="mt-[22px] max-w-[44ch] text-base leading-[1.6] opacity-[0.78]">
        {text}
      </p>
    );
  }

  const shown = expanded ? text : `${text.slice(0, MAX_CHARS).trimEnd()}… `;

  return (
    <p className="mt-[22px] max-w-[44ch] text-base leading-[1.6] opacity-[0.78]">
      {shown}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="font-semibold underline underline-offset-2 opacity-100 transition-opacity hover:opacity-70"
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </p>
  );
}
