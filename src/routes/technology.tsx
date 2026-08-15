import { createFileRoute } from "@tanstack/react-router";
import hydrometImg from "@/assets/hydromet.jpg";
import {
  Container,
  Reveal,
  Section,
  SectionHeading,
  TechCard,
} from "@/components/site/primitives";
import { PageHero, CtaBand } from "@/components/site/PageHero";
import { MaterialFlow, ProcessStrip } from "@/components/site/MaterialFlow";

const TITLE = "Technology — Hydrometallurgy & Advanced Battery Materials | BlackMass Energies";
const DESC =
  "Our technology roadmap focuses on recovering critical minerals from Black Mass with improved selectivity, purity, recovery and process economics.";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/technology" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Process Technology"
        title={<>Hydrometallurgy for a Circular Battery Economy.</>}
        lead="Our technology roadmap focuses on recovering critical minerals from Black Mass with improved selectivity, purity, recovery and process economics."
        image={hydrometImg}
        imageAlt="Hydrometallurgical reactor vessels and laboratory glassware"
        actions={[
          { label: "Build a Partnership", to: "/contact" },
          { label: "Request Critical Materials", to: "/contact", hash: "buy-critical-minerals", variant: "outline" },
        ]}
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Process Overview"
            title="From Black Mass to battery-grade materials."
            lead="A high-level representation of the hydrometallurgical pathway. Proprietary chemical parameters, reagents, recipes and operating conditions are not published."
          />
          <ProcessStrip
            className="mt-12"
            steps={[
              "Black Mass",
              "Leaching",
              "Impurity Removal",
              "Separation",
              "Purification",
              "Precipitation / Crystallization",
              "Battery-Grade Materials",
            ]}
          />
        </Container>
      </Section>

      <Section tone="surface">
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <Container className="relative">
          <SectionHeading
            eyebrow="Technology Layers"
            title="Current, development and future."
            lead="Our long-term objective is not simply to recycle batteries. It is to build a closed-loop critical-material platform capable of converting battery waste into materials that can return to battery manufacturing."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { n: "Current", t: "Battery Recycling & Black Mass", d: "Lithium-ion battery recycling operations and chemistry-specific Black Mass production." },
              { n: "Development", t: "Critical Mineral Recovery", d: "Hydrometallurgical recovery of lithium, nickel, cobalt and manganese from Black Mass." },
              { n: "Future", t: "Advanced Battery Materials", d: "Manufacturing processes for engineered battery-grade materials." },
            ].map((l, i) => (
              <Reveal key={l.n} delay={i * 80}>
                <TechCard index={l.n} title={l.t} className="h-full bg-background/60">
                  {l.d}
                </TechCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="battery-materials" tone="light" className="scroll-mt-24">
        <Container className="relative">
          <SectionHeading
            tone="light"
            eyebrow="Technology Development / R&D"
            title="From recovery to manufacturing."
            lead="Recovering critical minerals is one part of the circular battery economy. The next opportunity is converting those recovered materials into engineered battery materials. This is a technology-development direction, not a claim of current commercial production."
          />
          <MaterialFlow
            tone="light"
            className="mt-14"
            nodes={[
              { stage: "Input", label: "Recovered Critical Minerals", sub: "Li | Ni | Co | Mn" },
              { stage: "Process", label: "Purification" },
              { stage: "Process", label: "Material Engineering" },
              { stage: "Product", label: "Battery-Grade Precursors / Materials" },
              { stage: "Output", label: "Cathode / Battery Manufacturing" },
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Development Focus"
            title="Selectivity, purity, recovery, economics."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Selectivity", d: "Targeted separation of individual elements from complex Black Mass streams." },
              { t: "Purity", d: "Process routes designed toward battery-grade product specifications." },
              { t: "Recovery", d: "Maximising the share of contained value returned to the supply chain." },
              { t: "Process Economics", d: "Reagent, energy and residue management assessed for industrial scale." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 60}>
                <TechCard title={c.t} className="h-full">
                  {c.d}
                </TechCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Build a technology partnership."
        lead="We work with technology companies, research institutions and industrial partners across the recovery and refining chain."
        actions={[
          { label: "Partner With Us", to: "/contact" },
          { label: "Contact the Team", to: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
}
