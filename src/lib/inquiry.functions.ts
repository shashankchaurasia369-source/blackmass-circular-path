import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().default(""),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export const sendInquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      throw new Error("Email service is not configured");
    }

    const rows: Array<[string, string]> = [
      ["Name", data.name],
      ["Company", data.company || "Not provided"],
      ["Email", data.email],
      ["Phone", data.phone || "Not provided"],
    ];

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111">
        <h2 style="margin:0 0 16px">New website inquiry</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="color:#666">${k}</td><td><strong>${esc(v)}</strong></td></tr>`,
            )
            .join("")}
        </table>
        <h3 style="margin:20px 0 6px">Message</h3>
        <p style="white-space:pre-wrap;margin:0">${esc(data.message)}</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env["INQUIRY_FROM_EMAIL"] ??
          "BlackMass Energies <onboarding@resend.dev>",
        to: [process.env["INQUIRY_TO_EMAIL"] ?? "info@blackmaskenergies.com"],
        reply_to: data.email,
        subject: `Website inquiry from ${data.name}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error", res.status, detail);
      throw new Error("Could not send inquiry");
    }

    return { ok: true } as const;
  });
