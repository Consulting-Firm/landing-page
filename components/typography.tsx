import { cn } from "@/lib/utils";

/** Serif italic accent used for emphasised words inside headings. */
export function Em({ children }: { children: React.ReactNode }) {
  return (
    <em className="font-serif font-normal tracking-normal text-ax-accent italic">
      {children}
    </em>
  );
}

/** Uppercase label that sits above each section title. */
export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-[18px] text-[14px] font-semibold tracking-[0.14em] text-ax-accent uppercase">
      {children}
    </div>
  );
}

/** Shared display heading for section heads. */
export function SectionTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={cn(
        "text-[clamp(40px,4.6vw,68px)] leading-[1.05] font-medium tracking-[-0.03em] text-balance",
        className,
      )}
    >
      {children}
    </h2>
  );
}
