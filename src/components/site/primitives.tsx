import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------- Reveal on scroll ---------------- */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      data-visible={visible ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------- Layout ---------------- */

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1320px] px-5 md:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "dark",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "surface" | "light";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28",
        tone === "dark" && "bg-background text-foreground",
        tone === "surface" && "bg-surface text-foreground",
        tone === "light" && "bg-inverse text-inverse-foreground",
        className,
      )}
    >
      {children}
    </section>
  );
}

/* ---------------- Typography ---------------- */

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "tech-label flex items-center gap-3",
        tone === "dark" ? "text-primary" : "text-inverse-muted",
        className,
      )}
    >
      <span
        className={cn(
          "inline-block h-px w-6",
          tone === "dark" ? "bg-primary" : "bg-inverse-border",
        )}
        aria-hidden
      />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} className={align === "center" ? "justify-center" : ""}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2 className="mt-5 text-3xl leading-[1.08] font-semibold md:text-5xl">
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            tone === "dark" ? "text-muted-foreground" : "text-inverse-muted",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/* ---------------- Buttons ---------------- */

type CtaVariant = "primary" | "outline" | "ghost" | "light";

const ctaStyles: Record<CtaVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:brightness-110 hover:shadow-[0_0_38px_-10px_var(--primary)]",
  outline:
    "border border-border-strong text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground/80 hover:text-primary",
  light:
    "border border-inverse-border text-inverse-foreground hover:border-inverse-foreground",
};

const ctaBase =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300";

export function SiteLink({
  to,
  hash,
  className,
  children,
  onClick,
}: {
  to: string;
  hash?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const extra = (hash ? { hash } : {}) as Record<string, unknown>;
  return (
    <Link
      to={to as never}
      {...extra}
      className={className as string}
      onClick={onClick as never}
    >
      {children}
    </Link>
  );
}

export function CtaLink({
  to,
  children,
  variant = "primary",
  className,
  hash,
  onClick,
}: {
  to: string;
  children: ReactNode;
  variant?: CtaVariant;
  className?: string;
  hash?: string;
  onClick?: () => void;
}) {
  return (
    <SiteLink
      to={to}
      hash={hash}
      onClick={onClick}
      className={cn(ctaBase, ctaStyles[variant], className)}
    >
      {children}
    </SiteLink>
  );
}

export function CtaButton({
  children,
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: CtaVariant }) {
  return (
    <button className={cn(ctaBase, ctaStyles[variant], className)} {...props}>
      {children}
    </button>
  );
}

/* ---------------- Cards ---------------- */

export function TechCard({
  index,
  title,
  children,
  tone = "dark",
  className,
}: {
  index?: string;
  title: ReactNode;
  children?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-3 border p-6 transition-colors duration-300 md:p-8",
        tone === "dark"
          ? "border-border bg-surface/40 hover:border-primary/50"
          : "border-inverse-border bg-inverse hover:border-inverse-foreground/40",
        className,
      )}
    >
      {index ? (
        <span
          className={cn(
            "tech-label",
            tone === "dark" ? "text-primary" : "text-inverse-muted",
          )}
        >
          {index}
        </span>
      ) : null}
      <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
      {children ? (
        <div
          className={cn(
            "text-sm leading-relaxed",
            tone === "dark" ? "text-muted-foreground" : "text-inverse-muted",
          )}
        >
          {children}
        </div>
      ) : null}
      <span
        className={cn(
          "absolute top-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full",
          tone === "dark" ? "bg-primary" : "bg-inverse-foreground",
        )}
        aria-hidden
      />
    </div>
  );
}

export function SpecRow({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-border py-3 last:border-b-0">
      <span className="tech-label text-muted-foreground">{label}</span>
      <span className="text-right text-sm text-foreground">{value}</span>
    </div>
  );
}
