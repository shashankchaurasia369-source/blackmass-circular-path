import { createFileRoute } from "@tanstack/react-router";
import mineralsImg from "@/assets/critical-minerals.jpg";
import {
  Container,
  CtaLink,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { PageHero, CtaBand } from "@/components/site/PageHero";

const TITLE = "Critical Minerals | Lithium, Nickel, Cobalt, Manganese | Black Mass Energies";
const DESC =
  "Recovering lithium, nickel, cobalt and manganese from Black Mass through hydrometallurgy and converting them into high-purity battery material products.";

export const Route = createFileRoute("/critical-minerals")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/critical-minerals" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/critical-minerals" }],
  }),
  component: Page,
});

const elements = [
  {
    sym: "Li",
    name: "Lithium",
    products: ["Lithium Carbonate", "Lithium Hydroxide", "Lithium Phosphate"],
  },
  {
    sym: "Ni",
    name: "Nickel",
    products: ["Nickel Sulphate", "Nickel Hydroxide", "Nickel Carbonate", "Nickel Oxide"],
  },
  {
    sym: "Co",
    name: "Cobalt",
    products: ["Cobalt Sulphate", "Cobalt Oxide", "Cobalt intermediates"],
  },
  {
    sym: "Mn",
    name: "Manganese",
    products: ["Manganese Dioxide", "Other manganese intermediates"],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Step 04 / 05 | Recovery"
        title={<>Recovering the Elements That Power the Battery Economy.</>}
        lead="Lithium-ion batteries contain a concentrated set of critical minerals. Our hydrometallurgical technology focuses on selectively recovering these materials and converting them into high-purity products."
        image={mineralsImg}
        imageAlt="Battery-grade lithium, nickel and cobalt salts"
        actions={[
          { label: "Request Critical Materials", to: "/contact" },
          { label: "Explore Our Technology", to: "/technology", variant: "outline" },
        ]}
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Element Focus"
            title="Four elements. One recovery platform."
            lead="Product categories below indicate the direction of our material development. Commercial availability is confirmed on a case-by-case basis."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {elements.map((el, i) => (
              <Reveal key={el.sym} delay={i * 80}>
                <article className="group flex h-full flex-col border border-border bg-surface/40 p-8 transition-colors duration-300 hover:border-primary/50">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-display text-6xl leading-none font-bold text-primary">
                        {el.sym}
                      </p>
                      <h2 className="mt-4 font-display text-xl font-semibold">{el.name}</h2>
                    </div>
                    <span className="tech-label border border-border px-2 py-1 text-muted-foreground">
                      Development
                    </span>
                  </div>
                  <p className="tech-label mt-8 text-muted-foreground">Potential products</p>
                  <ul className="mt-4 space-y-px bg-border">
                    {el.products.map((p) => (
                      <li key={p} className="bg-surface px-4 py-3 text-sm">
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="Status Definitions"
            title="Commercial versus development."
            lead="We distinguish clearly between what we supply today and what is under technology development."
          />
          <div className="mt-12 grid gap-px border border-inverse-border bg-inverse-border md:grid-cols-2">
            <div className="bg-inverse p-8">
              <span className="tech-label text-inverse-muted">Commercial</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-inverse-foreground">
                Battery recycling and Black Mass supply
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-inverse-muted">
                Recycled lithium-ion battery feedstock and chemistry-specific Black Mass across
                LCO, NMC and LFP streams.
              </p>
            </div>
            <div className="bg-inverse p-8">
              <span className="tech-label text-inverse-muted">Development / R&D</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-inverse-foreground">
                Refined critical mineral products
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-inverse-muted">
                Hydrometallurgical recovery and battery-grade material products are under
                technology development. Availability is confirmed per requirement.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <CtaLink to="/contact" variant="light">
              Request Material
            </CtaLink>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Specify your material requirement."
        lead="Share material, purity, quantity and application. Our team will confirm what can be supported."
        actions={[
          { label: "Request Critical Materials", to: "/contact" },
          { label: "Build a Partnership", to: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
}
