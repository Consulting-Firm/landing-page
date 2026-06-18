"use client";

import { useEffect } from "react";

import { CtaButton } from "@/components/cta-button";
import { CALENDLY_URL } from "@/lib/site-data";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

const CSS_ID = "calendly-widget-css";
const JS_ID = "calendly-widget-js";

// Inject Calendly's popup assets once, no matter how many buttons are on the page.
function loadCalendly() {
  if (typeof document === "undefined") return;
  if (!document.getElementById(CSS_ID)) {
    const link = document.createElement("link");
    link.id = CSS_ID;
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }
  if (!document.getElementById(JS_ID)) {
    const script = document.createElement("script");
    script.id = JS_ID;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }
}

type Props = {
  size?: "default" | "big";
  variant?: "solid" | "ghost";
  className?: string;
  /** Render as a plain styled link (e.g. in the footer) instead of a pill button. */
  asLink?: boolean;
  children?: React.ReactNode;
};

/**
 * "Book a call" — opens the Calendly scheduler in an on-page popup modal. Falls
 * back to opening the Calendly link in a new tab if the widget hasn't loaded.
 */
export function BookCall({
  size = "big",
  variant = "solid",
  className,
  asLink = false,
  children = "Book a call",
}: Props) {
  useEffect(() => {
    loadCalendly();
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (typeof window !== "undefined" && window.Calendly) {
      e.preventDefault();
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  }

  if (asLink) {
    return (
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <CtaButton
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      size={size}
      variant={variant}
      className={className}
    >
      {children}
    </CtaButton>
  );
}
