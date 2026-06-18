import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Chamfered (cut-corner) blocks. A 200%-wide gradient sits parked off-screen
// and slides in on hover, so the accent sweeps across the face left-to-right.
const variants = {
  solid:
    "text-[#0a0a0a] bg-[linear-gradient(90deg,var(--ax-accent)_0_50%,var(--ax-ink)_50%_100%)] bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0_0]",
  ghost:
    "text-ax-ink ring-1 ring-inset ring-ax-line bg-[linear-gradient(90deg,var(--ax-accent)_0_50%,transparent_50%_100%)] bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0_0] hover:text-[#0a0a0a] hover:ring-ax-accent",
} as const;

const sizes = {
  default: "px-7 py-3.5 text-[13px]",
  big: "px-9 py-4 text-sm",
} as const;

type CtaButtonProps = React.ComponentProps<"a"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

/**
 * The design's pill CTA. Built on the shadcn Button (focus ring, active state)
 * but rendered as an anchor since every CTA is an in-page hash or a mailto.
 */
export function CtaButton({
  variant = "solid",
  size = "default",
  className,
  ...props
}: CtaButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "h-auto gap-2 rounded-none font-semibold tracking-[0.14em] uppercase ease-[cubic-bezier(0.2,0.8,0.2,1)] duration-300",
        "[clip-path:polygon(10px_0,100%_0,100%_calc(100%_-_10px),calc(100%_-_10px)_100%,0_100%,0_10px)]",
        "hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      <a {...props} />
    </Button>
  );
}
