import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { cn } from "@/lib/utils";
import { CtaButton } from "./primitives";
import { sendInquiry } from "@/lib/inquiry.functions";

const inputClass =
  "w-full border border-input bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

export function InquiryForm({
  id = "inquiry",
  title = "Send an inquiry",
  description,
  className,
}: {
  id?: string;
  title?: string;
  description?: string;
  className?: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const submit = useServerFn(sendInquiry);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }

    setSubmitting(true);
    try {
      await submit({ data: payload });
      form.reset();
      toast.success("Inquiry sent", {
        description: "Our team will get back to you shortly.",
      });
    } catch {
      toast.error("Could not send your inquiry", {
        description: "Please try again or write to info@blackmassenergies.com.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      id={id}
      className={cn(
        "scroll-mt-28 border border-border bg-surface/40 p-6 sm:p-8 md:p-10",
        className,
      )}
    >
      <h3 className="font-display text-2xl font-semibold md:text-3xl">{title}</h3>
      {description ? (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}

      <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id={id} name="name" label="Name" required />
        <Field id={id} name="company" label="Company" />
        <Field id={id} name="email" label="Email" type="email" required />
        <Field id={id} name="phone" label="Phone" type="tel" />

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor={`${id}-message`} className="tech-label text-muted-foreground">
            Message<span className="text-primary"> *</span>
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={5}
            required
            maxLength={2000}
            placeholder="Tell us what you need: material, quantity, location."
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <CtaButton type="submit" disabled={submitting} className="w-full sm:w-auto">
            {submitting ? "Sending" : "Send Inquiry"}
          </CtaButton>
        </div>
      </form>
    </div>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={`${id}-${name}`} className="tech-label text-muted-foreground">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </label>
      <input
        id={`${id}-${name}`}
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className={inputClass}
      />
    </div>
  );
}
