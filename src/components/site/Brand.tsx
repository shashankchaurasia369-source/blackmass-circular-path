import { cn } from "@/lib/utils";

/**
 * Official brand lockup: "Black Mass" in black, "Energies" in the logo green.
 * The logo is the source of truth for the green (#83d114 => --brand-green).
 */
export function BrandName({
  className,
  onDark = false,
}: {
  className?: string | undefined;
  onDark?: boolean | undefined;
}) {
  return (
    <span className={cn("font-display font-bold tracking-tight", className)}>
      <span className={onDark ? "text-foreground" : "text-brand-black"}>Black Mass</span>{" "}
      <span className="font-normal text-brand-green">Energies</span>
    </span>
  );
}
