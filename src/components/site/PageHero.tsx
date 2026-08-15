import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container, CtaLink, Eyebrow } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  actions,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode | undefined;
  image?: string | undefined;
  imageAlt?: string | undefined;
  actions?: { label: string | undefined; to: string; hash?: string; variant?: "primary" | "outline" }[];
  className?: string | undefined;
}) {
  return (
    <section className={cn("relative overflow-hidden border-b border-border pt-32 pb-16 md:pt-44 md:pb-24", className)}>
      {image ? (
        <img
          src={image}
          alt={imageAlt ?? ""}
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      ) : null}
      <div className="absolute inset-0 grid-backdrop" aria-hidden />
      <div className="absolute inset-0 haze" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30"
        aria-hidden
      />
      <Container className="relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.03] font-semibold md:text-6xl lg:text-[4.25rem]">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {lead}
          </p>
        ) : null}
        {actions?.length ? (
          <div className="mt-9 flex flex-wrap gap-3">
            {actions.map((a) => (
              <CtaLink
                key={a.label}
                to={a.to}
                hash={a.hash}
                variant={a.variant ?? "primary"}
              >
                {a.label}
              </CtaLink>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export function CtaBand({
  title,
  lead,
  actions,
}: {
  title: string;
  lead: string;
  actions: { label: string; to: string; hash?: string; variant?: "primary" | "outline" }[];
}) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface py-20 md:py-24">
      <div className="absolute inset-0 grid-backdrop" aria-hidden />
      <div className="absolute inset-0 haze" aria-hidden />
      <Container className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight font-semibold md:text-5xl">{title}</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">{lead}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {actions.map((a) => (
            <CtaLink key={a.label} to={a.to} hash={a.hash} variant={a.variant ?? "primary"}>
              {a.label}
            </CtaLink>
          ))}
        </div>
      </Container>
    </section>
  );
}
