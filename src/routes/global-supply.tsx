import { createFileRoute } from "@tanstack/react-router";
import {
  Container,
  Reveal,
  Section,
  SectionHeading,
  TechCard,
} from "@/components/site/primitives";
import { PageHero, CtaBand } from "@/components/site/PageHero";

const TITLE = "Global Supply | Battery Materials Sourcing & Supply | BlackMass Energies";
const DESC =
  "We work with global companies across the battery and critical-material ecosystem to source, process and supply battery materials, with India as our operating base.";

export const Route = createFileRoute("/global-supply")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/global-supply" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/global-supply" }],
  }),
  component: Page,
});

const nodes = [
  { c: "India", x: 68, y: 55, primary: true },
  { c: "Korea", x: 82, y: 42 },
  { c: "China", x: 76, y: 44 },
  { c: "USA", x: 22, y: 42 },
  { c: "Australia", x: 84, y: 76 },
  { c: "Europe", x: 49, y: 33 },
];

const capabilities = [
  { t: "Global Sourcing", d: "Access battery-material feedstock across markets." },
  { t: "Material Supply", d: "Supply Black Mass and refined battery materials." },
  { t: "Strategic Procurement", d: "Long-term industrial sourcing." },
  { t: "Logistics", d: "Structured movement of industrial materials." },
  { t: "International Partnerships", d: "Work with global battery and critical-material companies." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Step 06 | Supply"
        title={<>Critical Battery Materials Without Borders.</>}
        lead="We work with global companies across the battery and critical-material ecosystem to source, process and supply battery materials."
        actions={[
          { label: "Build a Supply Partnership", to: "/contact" },
          { label: "Source Black Mass", to: "/contact", hash: "buy-black-mass", variant: "outline" },
        ]}
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Global Customers & Partners"
            title="India at the centre of the material network."
            lead="Our operating base is India. The map below indicates the international battery and critical-material ecosystem we engage with commercially."
          />

          <div className="relative mt-14 aspect-[2/1] w-full border border-border bg-surface/40">
            <div className="absolute inset-0 grid-backdrop" aria-hidden />
            <svg
              viewBox="0 0 100 50"
              className="absolute inset-0 h-full w-full"
              role="img"
              aria-label="Network map with India as the central node connected to Korea, China, USA, Australia and Europe"
            >
              {nodes
                .filter((n) => !n.primary)
                .map((n) => (
                  <line
                    key={n.c}
                    x1={68}
                    y1={27.5}
                    x2={n.x}
                    y2={n.y / 2}
                    stroke="var(--primary)"
                    strokeWidth={0.15}
                    strokeOpacity={0.5}
                    strokeDasharray="1 1"
                  />
                ))}
            </svg>
            {nodes.map((n) => (
              <div
                key={n.c}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                <div
                  className={
                    n.primary
                      ? "flex items-center gap-2 border border-primary bg-background px-3 py-2"
                      : "flex items-center gap-2 border border-border bg-background px-2.5 py-1.5"
                  }
                >
                  <span
                    className={
                      n.primary
                        ? "h-1.5 w-1.5 rounded-full bg-primary pulse-node"
                        : "h-1 w-1 rounded-full bg-muted-foreground"
                    }
                    aria-hidden
                  />
                  <span className="tech-label whitespace-nowrap">{n.c}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Map indicates ecosystem engagement, not offices or operations.
          </p>
        </Container>
      </Section>

      <Section tone="surface">
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <Container className="relative">
          <SectionHeading eyebrow="Capabilities" title="How we supply." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.t} delay={i * 60}>
                <TechCard title={c.t} className="h-full bg-background/60">
                  {c.d}
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
            eyebrow="Ecosystem"
            title="The categories we work across."
            lead="Company logos are published only where a partnership has been formally approved."
          />
          <div className="mt-12 grid gap-px border border-inverse-border bg-inverse-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Battery OEMs",
              "Recyclers",
              "Refiners",
              "Technology partners",
              "Research institutions",
              "Global material companies",
            ].map((e) => (
              <div key={e} className="bg-inverse p-7">
                <span className="tech-label text-inverse-muted">Category</span>
                <p className="mt-3 font-display text-lg font-semibold text-inverse-foreground">
                  {e}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Build a supply partnership."
        lead="Long-term sourcing, structured supply and international material movement."
        actions={[
          { label: "Build a Partnership", to: "/contact" },
          { label: "Request Critical Materials", to: "/contact", hash: "buy-critical-minerals", variant: "outline" },
        ]}
      />
    </>
  );
}
