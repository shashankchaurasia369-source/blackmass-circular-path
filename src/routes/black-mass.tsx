import { createFileRoute } from "@tanstack/react-router";
import blackMassImg from "@/assets/black-mass-macro.jpg";
import {
  Container,
  CtaLink,
  Reveal,
  Section,
  SectionHeading,
  SpecRow,
  TechCard,
} from "@/components/site/primitives";
import { PageHero, CtaBand } from "@/components/site/PageHero";

const TITLE = "Black Mass | LCO, NMC & LFP | Black Mass Energies";
const DESC =
  "Chemistry-specific Black Mass from lithium-ion battery feedstocks across LCO, NMC and LFP streams, produced with a focus on downstream recovery economics.";

export const Route = createFileRoute("/black-mass")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/black-mass" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/black-mass" }],
  }),
  component: Page,
});

const materials = [
  {
    code: "LCO",
    name: "LCO Black Mass",
    d: "Cobalt-rich battery material stream.",
    chemistry: "Lithium Cobalt Oxide",
    feedstock: "Consumer electronics cells and packs",
  },
  {
    code: "NMC",
    name: "NMC Black Mass",
    d: "Nickel-Manganese-Cobalt battery material stream.",
    chemistry: "Nickel Manganese Cobalt",
    feedstock: "EV cells, packs and manufacturing scrap",
  },
  {
    code: "LFP",
    name: "LFP Black Mass",
    d: "Lithium-Iron-Phosphate battery material stream.",
    chemistry: "Lithium Iron Phosphate",
    feedstock: "EV, stationary storage and industrial cells",
  },
];

const capabilities = [
  "Material sourcing",
  "Supplier network",
  "Buyer requirements",
  "Chemistry matching",
  "COA verification",
  "Commercial evaluation",
  "Logistics coordination",
  "International supply",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Step 03 | Material"
        title={<>Chemistry-Specific Black Mass.</>}
        lead="We produce and supply Black Mass from lithium-ion battery feedstocks, with a focus on chemistry-specific material streams and downstream recovery economics."
        image={blackMassImg}
        imageAlt="Macro photograph of black mass battery powder"
        actions={[
          { label: "Request Material", to: "/contact" },
          { label: "Sell Battery Scrap", to: "/contact", variant: "outline" },
        ]}
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Material Streams"
            title="Three chemistry-specific streams."
            lead="Composition and availability vary by feedstock batch. Specifications are issued per lot."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {materials.map((m, i) => (
              <Reveal key={m.code} delay={i * 90}>
                <article className="flex h-full flex-col border border-border bg-surface/40 p-7 transition-colors duration-300 hover:border-primary/50">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-4xl font-bold text-primary">{m.code}</span>
                    <span className="tech-label text-muted-foreground">Black Mass</span>
                  </div>
                  <h2 className="mt-6 font-display text-xl font-semibold">{m.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>

                  <div className="mt-6">
                    <SpecRow label="Chemistry" value={m.chemistry} />
                    <SpecRow label="Typical Composition" value="Specification available on request" />
                    <SpecRow label="Applicable Feedstock" value={m.feedstock} />
                    <SpecRow label="Assay / COA" value="Issued per lot on request" />
                    <SpecRow label="Moisture" value="Specification available on request" />
                    <SpecRow label="Quantity" value="Subject to availability" />
                    <SpecRow label="Availability" value="Enquire for current position" />
                    <SpecRow label="Delivery" value="Domestic and international, on terms" />
                  </div>

                  <CtaLink
                    to="/contact"

                    className="mt-7 w-full"
                    variant="outline"
                  >
                    Request Material
                  </CtaLink>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <Container className="relative grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Industrial Material Supply"
            title="Structured sourcing between qualified suppliers and industrial buyers."
            lead="We connect qualified battery-material suppliers and industrial buyers through structured sourcing, material evaluation, commercial negotiation and logistics."
          />
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c} className="bg-surface p-5">
                <span className="text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </Container>
        <Container className="relative mt-10">
          <CtaLink to="/contact">
            Source Material
          </CtaLink>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="Quality & Documentation"
            title="Every lot is evaluated before it moves."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: "Chemistry Matching", d: "Material streams are matched to buyer chemistry and downstream process requirements." },
              { t: "COA Verification", d: "Assay and certificate documentation is reviewed against the declared material position." },
              { t: "Commercial Evaluation", d: "Recovery economics, logistics and terms are assessed for each transaction." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 70}>
                <TechCard tone="light" title={c.t} className="h-full">
                  {c.d}
                </TechCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Source Black Mass from a qualified producer."
        lead="Tell us your chemistry, volume and delivery requirement."
        actions={[
          { label: "Source Black Mass", to: "/contact" },
          { label: "Partner With Us", to: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
}
