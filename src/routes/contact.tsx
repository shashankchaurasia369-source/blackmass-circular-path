import { createFileRoute } from "@tanstack/react-router";
import { Container, Section, SectionHeading } from "@/components/site/primitives";
import { PageHero } from "@/components/site/PageHero";
import { InquiryForm, type Field } from "@/components/site/InquiryForm";

const TITLE = "Contact — Build the Battery Materials Future | BlackMass Energies";
const DESC =
  "Sell battery scrap, source Black Mass, request critical minerals or build a technology, supply or strategic partnership with BlackMass Energies.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

const chemistries = ["LCO", "NMC", "LFP", "Mixed", "Other / Unknown"];

const generalFields: Field[] = [
  { name: "name", label: "Full Name", required: true },
  { name: "company", label: "Company", required: true },
  { name: "email", label: "Work Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "country", label: "Country", required: true },
  {
    name: "inquiryType",
    label: "Inquiry Type",
    type: "select",
    required: true,
    options: [
      "Sell Battery Scrap",
      "Buy Black Mass",
      "Buy Critical Minerals",
      "Global Material Supply",
      "Recycling Partnership",
      "Technology Partnership",
      "R&D Partnership",
      "Strategic Partnership",
      "Investment",
      "Other",
    ],
  },
  { name: "material", label: "Material" },
  { name: "chemistry", label: "Chemistry", type: "select", options: chemistries },
  { name: "quantity", label: "Quantity" },
  { name: "requirement", label: "Requirement" },
  { name: "message", label: "Message", type: "textarea" },
  { name: "coa", label: "File Upload / COA", type: "file", full: true },
];

const sellFields: Field[] = [
  { name: "name", label: "Name", required: true },
  { name: "company", label: "Company", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "location", label: "Location", required: true },
  { name: "chemistry", label: "Battery Chemistry", type: "select", options: chemistries },
  {
    name: "batteryType",
    label: "Battery Type",
    type: "select",
    options: ["EV pack", "Cells", "Modules", "Manufacturing scrap", "Production rejects", "End-of-life", "Other"],
  },
  { name: "quantity", label: "Estimated Quantity" },
  { name: "frequency", label: "Frequency", type: "select", options: ["One-time", "Monthly", "Quarterly", "Ongoing"] },
  {
    name: "condition",
    label: "Material Condition",
    type: "select",
    options: ["Intact packs", "Dismantled", "Damaged", "Discharged", "Mixed"],
  },
  { name: "currentLocation", label: "Current Location" },
  { name: "coaAvailable", label: "COA Available", type: "select", options: ["Yes", "No"] },
  { name: "coaUpload", label: "Upload COA", type: "file" },
  { name: "photos", label: "Photos", type: "file" },
  { name: "message", label: "Message", type: "textarea" },
];

const buyBlackMassFields: Field[] = [
  { name: "name", label: "Name", required: true },
  { name: "company", label: "Company", required: true },
  { name: "country", label: "Country", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "chemistry", label: "Chemistry", type: "select", options: chemistries, required: true },
  { name: "quantity", label: "Required Quantity" },
  { name: "monthly", label: "Monthly Requirement" },
  { name: "composition", label: "Required Composition" },
  { name: "delivery", label: "Delivery Location" },
  { name: "timeline", label: "Timeline" },
  { name: "coaRequirement", label: "COA Requirement" },
  { name: "message", label: "Message", type: "textarea" },
];

const buyMineralsFields: Field[] = [
  { name: "company", label: "Company", required: true },
  { name: "country", label: "Country", required: true },
  { name: "email", label: "Work Email", type: "email", required: true },
  {
    name: "material",
    label: "Material",
    type: "select",
    required: true,
    options: [
      "Lithium Carbonate",
      "Lithium Hydroxide",
      "Lithium Phosphate",
      "Nickel Sulphate",
      "Cobalt Sulphate",
      "Manganese products",
      "Nickel intermediates",
      "Cobalt intermediates",
      "Other",
    ],
  },
  { name: "purity", label: "Required Purity" },
  { name: "quantity", label: "Quantity" },
  { name: "monthly", label: "Monthly Requirement" },
  { name: "application", label: "Application" },
  { name: "delivery", label: "Delivery Location" },
  { name: "timeline", label: "Timeline" },
  { name: "specification", label: "Specification" },
  { name: "coaRequirements", label: "COA Requirements" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Build the Battery Materials Future With Us.</>}
        lead="Whether you have battery feedstock, need Black Mass, require critical materials or want to build a strategic technology partnership, connect with our team."
        actions={[
          { label: "Sell Battery Scrap", to: "/contact", hash: "sell-battery-scrap" },
          { label: "Source Black Mass", to: "/contact", hash: "buy-black-mass", variant: "outline" },
        ]}
      />

      <Section>
        <Container className="space-y-8">
          <InquiryForm
            id="general"
            title="General Inquiry"
            description="Tell us who you are and what you need. Every inquiry is reviewed by our materials team."
            fields={generalFields}
            submitLabel="Submit Inquiry"
          />
        </Container>
      </Section>

      <Section tone="surface">
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <Container className="relative">
          <SectionHeading
            eyebrow="Commercial Pathways"
            title="Three direct routes to work with us."
            lead="Use the pathway that matches your position in the battery material chain."
          />
          <div className="mt-12 space-y-8">
            <InquiryForm
              id="sell-battery-scrap"
              title="Sell Battery Scrap"
              description="Place lithium-ion battery feedstock with an integrated recycler."
              fields={sellFields}
              submitLabel="Submit Battery Feedstock"
              className="bg-background/60"
            />
            <InquiryForm
              id="buy-black-mass"
              title="Buy Black Mass"
              description="Chemistry-specific LCO, NMC and LFP material streams."
              fields={buyBlackMassFields}
              submitLabel="Request Black Mass"
              className="bg-background/60"
            />
            <InquiryForm
              id="buy-critical-minerals"
              title="Buy Critical Minerals"
              description="Refined and intermediate battery material products. Availability confirmed per requirement."
              fields={buyMineralsFields}
              submitLabel="Request Material"
              className="bg-background/60"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
