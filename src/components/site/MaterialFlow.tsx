import { cn } from "@/lib/utils";
import { Reveal } from "./primitives";

export type FlowNode = {
  label: string;
  sub?: string;
  stage?: string;
};

/**
 * Vertical material-flow diagram: the core visual identity of the company.
 * Battery waste -> Black Mass -> Hydrometallurgy -> Critical minerals -> Battery materials.
 */
export function MaterialFlow({
  nodes,
  tone = "dark",
  className,
}: {
  nodes: FlowNode[];
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "absolute top-3 bottom-3 left-[11px] w-px md:left-1/2 md:-translate-x-1/2",
          tone === "dark" ? "bg-border" : "bg-inverse-border",
        )}
        aria-hidden
      />
      <ol className="relative space-y-3 md:space-y-4">
        {nodes.map((n, i) => (
          <li key={n.label}>
            <Reveal delay={i * 70}>
              <div className="flex items-center gap-5 md:grid md:grid-cols-[1fr_24px_1fr] md:gap-0">
                {/* left slot (desktop alternating) */}
                <div
                  className={cn(
                    "hidden md:block",
                    i % 2 === 0 ? "md:pr-10 md:text-right" : "",
                  )}
                >
                  {i % 2 === 0 ? <NodeCard node={n} tone={tone} align="right" /> : null}
                </div>

                <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                  <span
                    className={cn(
                      "absolute h-6 w-6 rounded-full",
                      tone === "dark" ? "bg-primary/12" : "bg-inverse-foreground/8",
                    )}
                    aria-hidden
                  />
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      tone === "dark" ? "bg-primary" : "bg-inverse-foreground",
                    )}
                    aria-hidden
                  />
                </div>

                <div className="flex-1 md:pl-10">
                  <div className="md:hidden">
                    <NodeCard node={n} tone={tone} align="left" />
                  </div>
                  <div className="hidden md:block">
                    {i % 2 === 1 ? <NodeCard node={n} tone={tone} align="left" /> : null}
                  </div>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

function NodeCard({
  node,
  tone,
  align,
}: {
  node: FlowNode;
  tone: "dark" | "light";
  align: "left" | "right";
}) {
  return (
    <div
      className={cn(
        "border px-5 py-4 transition-colors duration-300",
        tone === "dark"
          ? "border-border bg-surface/50 hover:border-primary/50"
          : "border-inverse-border bg-inverse",
        align === "right" ? "md:ml-auto" : "",
      )}
    >
      {node.stage ? (
        <span
          className={cn(
            "tech-label block",
            tone === "dark" ? "text-primary" : "text-inverse-muted",
          )}
        >
          {node.stage}
        </span>
      ) : null}
      <p className="mt-1 font-display text-base font-semibold md:text-lg">
        {node.label}
      </p>
      {node.sub ? (
        <p
          className={cn(
            "mt-1 font-mono text-[0.7rem] tracking-widest uppercase",
            tone === "dark" ? "text-muted-foreground" : "text-inverse-muted",
          )}
        >
          {node.sub}
        </p>
      ) : null}
    </div>
  );
}

/** Compact horizontal process strip, e.g. LEACHING -> PURIFICATION -> ... */
export function ProcessStrip({
  steps,
  tone = "dark",
  className,
}: {
  steps: string[];
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-stretch gap-px border",
        tone === "dark"
          ? "border-border bg-border"
          : "border-inverse-border bg-inverse-border",
        className,
      )}
    >
      {steps.map((s, i) => (
        <div
          key={s}
          className={cn(
            "group relative flex min-w-[140px] flex-1 flex-col justify-between gap-6 p-4 transition-colors duration-300",
            tone === "dark"
              ? "bg-background hover:bg-surface"
              : "bg-inverse hover:bg-inverse/70",
          )}
        >
          <span
            className={cn(
              "tech-label",
              tone === "dark" ? "text-primary" : "text-inverse-muted",
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm leading-snug font-medium">{s}</span>
          <span
            className={cn(
              "h-px w-full",
              tone === "dark" ? "bg-primary/25" : "bg-inverse-border",
            )}
            aria-hidden
          />
        </div>
      ))}
    </div>
  );
}

/** Closed-loop visual: battery -> materials -> battery */
export function CircularLoop({ className }: { className?: string }) {
  const items = ["BATTERY", "RECYCLING", "BLACK MASS", "REFINING", "MATERIALS"];
  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[420px]", className)}>
      <div className="absolute inset-0 rounded-full border border-border" aria-hidden />
      <div className="absolute inset-[14%] rounded-full border border-dashed border-primary/30" aria-hidden />
      <div className="absolute inset-[32%] rounded-full border border-border" aria-hidden />
      <div className="absolute inset-[38%] haze rounded-full" aria-hidden />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="tech-label text-primary">Closed loop</span>
        <p className="mt-2 max-w-[9rem] font-display text-lg leading-tight font-semibold">
          Battery to material to battery
        </p>
      </div>
      {items.map((label, i) => {
        const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2;
        const r = 50;
        const x = 50 + r * Math.cos(angle);
        const y = 50 + r * Math.sin(angle);
        return (
          <div
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="flex items-center gap-2 border border-border bg-background px-2.5 py-1.5">
              <span className="h-1 w-1 rounded-full bg-primary pulse-node" aria-hidden />
              <span className="tech-label whitespace-nowrap">{label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
