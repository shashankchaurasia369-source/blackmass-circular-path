import { createFileRoute } from "@tanstack/react-router";
import {
  Container,
  CtaLink,
  Reveal,
  Section,
  SectionHeading,
  TechCard,
} from "@/components/site/primitives";
import { PageHero, CtaBand } from "@/components/site/PageHero";
import { CircularLoop } from "@/components/site/MaterialFlow";

const TITLE = "About BlackMass Energies | Integrated Battery Materials Company";
const DESC =
  "BlackMass Energies is an integrated battery recycling and critical battery materials company building the circular supply chain from battery scrap to Black Mass to refined critical materials.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

const journey = [
  { when: "June 2024", what: "BlackMass Energies Founded" },
  { when: "2024–2025", what: "Battery Recycling & Black Mass Development" },
  { when: "2026", what: "Expansion Into Critical Mineral Recovery & Advanced Materials" },
  { when: "April 2026", what: "First Pre-Seed Round" },
];

const pillars = [
  { n: "01", t: "Integrated Value Chain", d: "From battery waste to refined materials." },
  { n: "02", t: "Chemistry Expertise", d: "LCO, NMC and LFP focused." },
  { n: "03", t: "Critical Mineral Recovery", d: "Moving beyond Black Mass into refined materials." },
  { n: "04", t: "Technology Development", d: "Hydrometallurgy and advanced material R&D." },
  { n: "05", t: "Global Supply Network", d: "Connecting Indian material recovery with global demand." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Built to Close the Battery Materials Loop.</>}
        lead="BlackMass Energies is an integrated battery recycling and critical battery materials company building the circular supply chain from battery scrap to Black Mass to refined critical materials and advanced battery materials."
        actions={[
          { label: "Explore Our Technology", to: "/technology" },
          { label: "Partner With Us", to: "/contact", variant: "outline" },
        ]}
      />

      <Section>
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Company Story"
              title="A recycler becoming a materials company."
              lead="BlackMass Energies was founded in June 2024 with a focus on building a scalable battery recycling and material recovery business. The company began by focusing on lithium-ion battery recycling and Black Mass production, and is expanding downstream into hydrometallurgical recovery, critical minerals and advanced battery materials."
            />
          </Reveal>
          <Reveal delay={120}>
            <CircularLoop />
          </Reveal>
        </Container>
      </Section>

      <Section tone="surface">
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <Container className="relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="Timeline" title="Company journey." />
          <ol className="relative border-l border-border pl-8">
            {journey.map((j, i) => (
              <Reveal key={j.when} delay={i * 80}>
                <li className="relative pb-10 last:pb-0">
                  <span
                    className="absolute top-2 -left-[33px] h-2 w-2 rounded-full bg-primary"
                    aria-hidden
                  />
                  <span className="tech-label text-primary">{j.when}</span>
                  <p className="mt-2 font-display text-lg font-semibold">{j.what}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Why BlackMass Energies" title="More than recycling." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <TechCard index={p.n} title={p.t} className="h-full">
                  {p.d}
                </TechCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="Leadership"
            title="Built by operators. Driven by materials."
            lead="Founder and leadership profiles, portraits and professional links are published once approved by the company. Until then, our team responds directly to every qualified inquiry."
          />
          <div className="mt-12 grid gap-px border border-inverse-border bg-inverse-border md:grid-cols-3">
            {["Name", "Position", "Approved bio & LinkedIn"].map((k) => (
              <div key={k} className="bg-inverse p-8">
                <span className="tech-label text-inverse-muted">{k}</span>
                <p className="mt-3 text-sm text-inverse-muted">To be published on approval.</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <CtaLink to="/contact" variant="light">
              Contact the Team
            </CtaLink>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="From battery waste to battery materials."
        lead="Work with a company building the infrastructure behind the next generation of batteries."
        actions={[
          { label: "Partner With Us", to: "/contact" },
          { label: "Explore Our Technology", to: "/technology", variant: "outline" },
        ]}
      />
    </>
  );
}
