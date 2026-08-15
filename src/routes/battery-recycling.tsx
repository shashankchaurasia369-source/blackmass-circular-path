import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/battery-cells.jpg";
import {
  Container,
  Reveal,
  Section,
  SectionHeading,
  TechCard,
} from "@/components/site/primitives";
import { PageHero, CtaBand } from "@/components/site/PageHero";
import { ProcessStrip } from "@/components/site/MaterialFlow";

const TITLE = "Battery Recycling | Black Mass Energies";
const DESC =
  "We source and recycle lithium-ion batteries from OEMs and the broader market, converting end-of-life and manufacturing battery streams into valuable secondary raw materials.";

export const Route = createFileRoute("/battery-recycling")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/battery-recycling" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/battery-recycling" }],
  }),
  component: Page,
});

const feedstock = [
  "Lithium-ion batteries",
  "EV batteries",
  "Battery packs",
  "Cells",
  "Manufacturing scrap",
  "Production rejects",
  "End-of-life batteries",
];

const sources = [
  { t: "OEMs", d: "Vehicle and equipment manufacturers with end-of-life and warranty return streams." },
  { t: "Battery Manufacturers", d: "Production scrap, rejects and off-spec cell material." },
  { t: "EV Ecosystem", d: "Fleets, service networks and pack integrators." },
  { t: "Industrial Sources", d: "Industrial battery users and manufacturing facilities." },
  { t: "Battery Waste Generators", d: "Organisations holding accumulated battery waste." },
  { t: "Recycling Ecosystem", d: "Recyclers and processors seeking downstream partners." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Step 01 / 02 | Recycling"
        title={<>Recovering Value From Every Battery.</>}
        lead="We source and recycle lithium-ion batteries from OEMs and the broader market, converting end-of-life and manufacturing battery streams into valuable secondary raw materials."
        image={heroImg}
        imageAlt="Lithium-ion cells and a dismantled EV battery pack"
        actions={[
          { label: "Sell Battery Scrap", to: "/contact", hash: "sell-battery-scrap" },
          { label: "Partner With Us", to: "/contact", variant: "outline" },
        ]}
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Feedstock"
            title="What we accept."
            lead="Chemistry and format vary; every stream is evaluated technically and commercially before intake."
          />
          <div className="mt-12 flex flex-wrap gap-px border border-border bg-border">
            {feedstock.map((f) => (
              <div key={f} className="flex-1 bg-background px-5 py-6 whitespace-nowrap">
                <span className="text-sm font-medium">{f}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <Container className="relative">
          <SectionHeading eyebrow="Sourcing Network" title="Where material comes from." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sources.map((s, i) => (
              <Reveal key={s.t} delay={i * 60}>
                <TechCard title={s.t} className="h-full bg-background/60">
                  {s.d}
                </TechCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="relative">
          <SectionHeading
            tone="light"
            eyebrow="Processing"
            title="A controlled path from pack to Black Mass."
            lead="A high-level view of our recycling route. Detailed operational parameters are shared only under confidentiality."
          />
          <ProcessStrip
            tone="light"
            className="mt-12"
            steps={[
              "Collection",
              "Safe Handling",
              "Discharge",
              "Dismantling",
              "Mechanical Processing",
              "Separation",
              "Black Mass",
            ]}
          />
        </Container>
      </Section>

      <CtaBand
        title="Have battery feedstock to place?"
        lead="Share chemistry, quantity and location. Our materials team will evaluate and respond."
        actions={[
          { label: "Sell Battery Scrap", to: "/contact", hash: "sell-battery-scrap" },
          { label: "Source Black Mass", to: "/contact", hash: "buy-black-mass", variant: "outline" },
        ]}
      />
    </>
  );
}
