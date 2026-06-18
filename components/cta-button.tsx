import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Chamfered (cut-corner) blocks with an accent gradient parked off-screen that
// slides in on hover, sweeping the face horizontally (cream/transparent → blue).
const variants = {
  solid:
    "text-[#0a0a0a] bg-[linear-gradient(90deg,var(--ax-accent)_0_50%,var(--ax-ink)_50%_100%)] bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0_0]",
  ghost:
    "text-ax-ink ring-1 ring-inset ring-ax-line bg-[linear-gradient(90deg,var(--ax-accent)_0_50%,transparent_50%_100%)] bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0_0] hover:text-[#0a0a0a] hover:ring-ax-accent",
} as const;

const sizes = {
  default: "px-5 py-3 text-[12px] sm:px-7 sm:py-3.5 sm:text-[13px]",
  big: "px-6 py-3 text-[13px] sm:px-9 sm:py-4 sm:text-sm",
} as const;

type CtaButtonProps = React.ComponentProps<"a"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

/**
 * The hero/CTA button: a big chamfered block with a horizontal accent sweep.
 * Rendered as an anchor since every CTA is an in-page hash or a mailto.
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
        "h-auto gap-2 rounded-none font-semibold tracking-[0.14em] uppercase ease-[cubic-bezier(0.2,0.8,0.2,1)] duration-300 hover:-translate-y-0.5",
        "[clip-path:polygon(10px_0,100%_0,100%_calc(100%_-_10px),calc(100%_-_10px)_100%,0_100%,0_10px)]",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      <a {...props} />
    </Button>
  );
}
