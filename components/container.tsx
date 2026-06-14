import { cn } from "@/lib/utils";

/** Centered content column matching the design's 1280px max width. */
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-10 max-[980px]:px-[22px]",
        className,
      )}
      {...props}
    />
  );
}
