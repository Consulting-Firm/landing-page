import Image from "next/image";

/**
 * Floating browser-style window that showcases a project screenshot.
 * Replaces the old MacBook frame: traffic-light chrome, a URL pill, a soft
 * accent glow behind, a subtle 3D tilt that straightens on hover, and a glossy
 * top reflection. Anchored low so it bleeds off the bottom of the card.
 */
export function ProjectShowcase({
  name,
  image,
  alt,
  domain,
}: {
  name: string;
  image: string;
  alt?: string;
  domain?: string;
}) {
  return (
    <div className="relative flex items-center justify-center p-10 [perspective:1600px] max-[980px]:px-7 max-[980px]:py-8">
      {/* soft blurred blob behind the window — no straight edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-black/20 blur-[60px]"
      />

      <figure className="relative w-full max-w-[560px] origin-center transition-transform duration-500 ease-out [transform:rotateX(8deg)_rotateY(-6deg)] hover:[transform:rotateX(0deg)_rotateY(0deg)_translateY(-6px)] max-[980px]:[transform:none]">
        <div className="overflow-hidden rounded-2xl bg-[#0c0c0d] p-2.5 shadow-[0_30px_70px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
          {/* window chrome */}
          <div className="flex items-center gap-2 px-2 pb-2.5 pt-1">
            <span className="flex gap-1.5" aria-hidden="true">
              <i className="size-2.5 rounded-full bg-[#ff5f57]" />
              <i className="size-2.5 rounded-full bg-[#febc2e]" />
              <i className="size-2.5 rounded-full bg-[#28c840]" />
            </span>
            <span className="mx-auto flex max-w-[60%] items-center gap-1.5 truncate rounded-md bg-white/[0.06] px-3 py-1 text-[11px] font-medium tracking-[0.01em] text-white/45">
              <svg
                width="9"
                height="9"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <path
                  d="M6 10V8a6 6 0 1112 0v2"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <rect
                  x="4"
                  y="10"
                  width="16"
                  height="10"
                  rx="2"
                  fill="currentColor"
                />
              </svg>
              {domain ?? name.toLowerCase().replace(/\s+/g, "")}
            </span>
          </div>

          {/* screenshot */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#060606]">
            <Image
              src={image}
              alt={alt ?? `${name} screenshot`}
              fill
              sizes="(max-width: 980px) 100vw, 560px"
              className="object-cover object-top"
            />
            {/* glossy reflection */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent"
            />
          </div>
        </div>
      </figure>
    </div>
  );
}
