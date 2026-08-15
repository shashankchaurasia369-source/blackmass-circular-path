import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { CtaButton } from "./primitives";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "file" | "number";
  options?: string[];
  required?: boolean;
  full?: boolean;
  placeholder?: string;
};

const inputClass =
  "w-full border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

export function InquiryForm({
  id,
  title,
  description,
  fields,
  submitLabel,
  className,
}: {
  id: string;
  title: string;
  description?: string;
  fields: Field[];
  submitLabel: string;
  className?: string;
}) {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Inquiry received", {
        description: "Our materials team will respond to your request shortly.",
      });
    }, 500);
  }

  return (
    <div
      id={id}
      className={cn("scroll-mt-28 border border-border bg-surface/40 p-6 md:p-10", className)}
    >
      <h3 className="font-display text-2xl font-semibold md:text-3xl">{title}</h3>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}

      <form onSubmit={onSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
        {fields.map((f) => (
          <div
            key={f.name}
            className={cn("flex flex-col gap-2", (f.full || f.type === "textarea") && "md:col-span-2")}
          >
            <label htmlFor={`${id}-${f.name}`} className="tech-label text-muted-foreground">
              {f.label}
              {f.required ? <span className="text-primary"> *</span> : null}
            </label>

            {f.type === "textarea" ? (
              <textarea
                id={`${id}-${f.name}`}
                name={f.name}
                rows={4}
                required={f.required}
                placeholder={f.placeholder}
                className={inputClass}
              />
            ) : f.type === "select" ? (
              <select
                id={`${id}-${f.name}`}
                name={f.name}
                required={f.required}
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Select
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : f.type === "file" ? (
              <input
                id={`${id}-${f.name}`}
                name={f.name}
                type="file"
                className={cn(
                  inputClass,
                  "file:mr-3 file:border-0 file:bg-secondary file:px-3 file:py-1 file:text-xs file:text-foreground",
                )}
              />
            ) : (
              <input
                id={`${id}-${f.name}`}
                name={f.name}
                type={f.type ?? "text"}
                required={f.required}
                placeholder={f.placeholder}
                className={inputClass}
              />
            )}
          </div>
        ))}

        <div className="md:col-span-2">
          <CtaButton type="submit" disabled={submitting}>
            {submitting ? "Submitting…" : submitLabel}
          </CtaButton>
        </div>
      </form>
    </div>
  );
}
