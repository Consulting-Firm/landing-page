import { cn } from "@/lib/utils";

/**
 * The header CTA — no box, just a confident text link. An accent underline
 * wipes in from the left on hover and the arrow nudges out. Deliberately its
 * own component, distinct from the hero's chamfered CtaButton.
 */
export function NavButton({
  className,
  children,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      {...props}
      className={cn(
        "group relative inline-flex items-center text-[15px] font-extrabold tracking-[0.06em] uppercase text-ax-ink",
        "transition-colors duration-200 outline-none hover:text-ax-accent focus-visible:text-ax-accent",
        className,
      )}
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-ax-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </a>
  );
}
