import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const variants = {
  solid: "bg-ax-ink text-[#0a0a0a] hover:bg-ax-accent",
  ghost:
    "bg-transparent text-ax-ink ring-1 ring-inset ring-ax-line hover:bg-ax-ink/[0.08]",
} as const;

const sizes = {
  default: "px-6 py-3.5 text-[15px]",
  big: "px-[30px] py-4 text-base",
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
        "h-auto gap-2 rounded-full font-semibold ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:scale-[1.04]",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      <a {...props} />
    </Button>
  );
}
