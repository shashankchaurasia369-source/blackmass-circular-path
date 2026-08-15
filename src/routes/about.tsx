import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, Phone, User } from "lucide-react";
import {
  Container,
  CtaLink,
  Reveal,
  Section,
  SectionHeading,
  TechCard,
} from "@/components/site/primitives";
import { PageHero } from "@/components/site/PageHero";

const TITLE = "About Black Mass Energies | Battery Recycling & Critical Materials";
const DESC =
  "Black Mass Energies is an Indian battery recycling and critical battery materials company building an integrated circular ecosystem for lithium-ion batteries.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

const approach = [
  "Battery scrap aggregation",
  "Supply-chain infrastructure",
  "Black mass production",
  "LFP processing",
  "NMC processing",
  "LCO processing",
  "Hydrometallurgical refining",
  "Critical battery-material recovery",
];

const build = [
  {
    n: "01",
    t: "Battery Scrap Aggregation",
    d: "Building a supply network connecting battery scrap generators, aggregators, recyclers and industrial partners.",
  },
  {
    n: "02",
    t: "Black Mass Production",
    d: "Processing lithium-ion battery scrap into black mass across major battery chemistries. LFP | NMC | LCO",
  },
  {
    n: "03",
    t: "Hydrometallurgy",
    d: "Developing multi-chemistry hydrometallurgical processes for refining black mass and recovering valuable battery materials.",
  },
  {
    n: "04",
    t: "Critical Materials",
    d: "Building pathways for recovered materials to return to the global battery-material supply chain.",
  },
];

const chemistries = [
  {
    code: "LFP",
    name: "Lithium Iron Phosphate",
    d: "A major chemistry across electric vehicles and energy storage systems.",
  },
  {
    code: "NMC",
    name: "Nickel Manganese Cobalt",
    d: "A critical chemistry containing valuable lithium, nickel, manganese and cobalt.",
  },
  {
    code: "LCO",
    name: "Lithium Cobalt Oxide",
    d: "A cobalt-rich chemistry widely associated with consumer electronics and high-energy-density applications.",
  },
];

const infra = [
  { v: "30,000 MT", l: "Annual Black Mass Production Capacity" },
  { v: "3", l: "Major Lithium-Ion Chemistries" },
  { v: "End-to-End", l: "Scrap to Black Mass to Refining" },
  { v: "India", l: "Building Domestic Critical-Material Capabilities" },
];

const loop = [
  "Battery Manufacturing",
  "EVs / Electronics / Energy Storage",
  "End-of-Life Batteries",
  "BME Recycling",
  "Black Mass",
  "Critical Materials",
  "Battery Manufacturing",
];

type Person = {
  name: string;
  role: string;
  email?: string;
  phone?: string;
  bioTitle: string;
  bio: string[];
  linkedin?: string;
};

const people: Person[] = [
  {
    name: "Shivam Kumar Gupta",
    role: "Co-Founder & Chief Executive Officer",
    email: "shivam@blackmassenergies.in",
    phone: "+91 6392161153",
    bioTitle: "About Shivam",
    bio: [
      "Shivam Kumar Gupta is the Co-Founder and CEO of Black Mass Energies, leading the company's overall strategy, business development, partnerships, fundraising and growth.",
      "His focus is on building Black Mass Energies into a vertically integrated battery recycling and critical-materials company spanning battery scrap aggregation, black mass production and advanced hydrometallurgical refining.",
    ],
  },
  {
    name: "Shashank Chourasia",
    role: "Co-Founder & Chief Technology Officer",
    email: "shashank@blackmassenergies.in",
    phone: "+91 9335172143",
    bioTitle: "About Shashank",
    bio: [
      "Shashank Chourasia is the Co-Founder and CTO of Black Mass Energies, leading the company's technology, process development and technical roadmap.",
      "His focus includes black mass processing, refining technologies, process optimization and the development of scalable solutions for recovering critical materials from LFP, NMC and LCO battery chemistries.",
    ],
  },
  {
    name: "Dr. Sonia Khera",
    role: "Mentor",
    bioTitle: "About Sonia",
    bio: [
      "Dr. Sonia Khera serves as a Mentor to Black Mass Energies, providing strategic and technical guidance as the company develops its battery recycling and hydrometallurgical capabilities.",
      "Her mentorship supports the company's long-term technology development, scientific direction and scale-up journey.",
    ],
  },
];

function Portrait({ name }: { name: string }) {
  return (
    <div className="group relative aspect-[4/5] w-full overflow-hidden border border-border bg-surface">
      <div className="absolute inset-0 grid-backdrop opacity-50" aria-hidden />
      <div className="relative flex h-full flex-col items-center justify-center gap-3 text-muted-foreground transition-transform duration-500 group-hover:scale-[1.03]">
        <User className="h-10 w-10" strokeWidth={1} />
        <span className="tech-label">Portrait to be uploaded</span>
      </div>
      <span className="absolute inset-x-0 bottom-0 border-t border-border bg-background/80 px-4 py-3 text-sm font-medium">
        {name}
      </span>
    </div>
  );
}

function LinkedInButton({ url }: { url?: string | undefined }) {
  if (!url) {
    return (
      <span
        className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs text-muted-foreground"
        title="LinkedIn profile to be added"
      >
        <Linkedin className="h-4 w-4" /> LinkedIn
      </span>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs transition-colors hover:border-primary hover:text-primary"
    >
      <Linkedin className="h-4 w-4" /> LinkedIn
    </a>
  );
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Building the Next Generation of Battery Recycling</>}
        lead="Black Mass Energies is an Indian battery recycling and critical battery materials company building an integrated circular ecosystem for lithium-ion batteries."
        actions={[
          { label: "Partner With Us", to: "/contact" },
          { label: "Explore Our Technology", to: "/technology", variant: "outline" },
        ]}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our focus spans the battery recycling value chain:
            </p>
            <p className="mt-6 font-display text-2xl leading-snug font-semibold md:text-3xl">
              Battery Scrap <span className="text-primary">to</span> Black Mass{" "}
              <span className="text-primary">to</span> Hydrometallurgical Refining{" "}
              <span className="text-primary">to</span> Critical Battery Materials
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              We are building the infrastructure, supply-chain network and technology required
              to recover valuable materials from lithium-ion batteries and return them to the
              battery supply chain.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="surface">
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <Container className="relative grid gap-14 lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            eyebrow="Our Approach"
            title="From Battery Waste to Critical Materials"
            lead="Battery recycling is more than waste management. It is an opportunity to recover strategic materials and build a more resilient battery supply chain."
          />
          <div>
            <p className="text-sm text-muted-foreground">
              Black Mass Energies is developing an integrated model combining:
            </p>
            <ul className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2">
              {approach.map((a, i) => (
                <li key={a} className="bg-surface px-5 py-4 text-sm">
                  <span className="tech-label mr-3 text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Our long-term objective is to transform battery waste into strategic resources for
              the next generation of batteries.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="What We Build" title="Four building blocks." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {build.map((b, i) => (
              <Reveal key={b.n} delay={i * 70}>
                <TechCard index={b.n} title={b.t} className="h-full">
                  {b.d}
                </TechCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHeading eyebrow="Our Chemistries" title="Three Battery Chemistries" />
          <p className="mt-8 font-display text-3xl font-bold tracking-tight text-primary md:text-5xl">
            LFP • NMC • LCO
          </p>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
            {chemistries.map((c, i) => (
              <Reveal key={c.code} delay={i * 80}>
                <div className="h-full bg-background p-8">
                  <p className="font-display text-4xl font-bold text-primary">{c.code}</p>
                  <p className="mt-3 text-sm font-medium">{c.name}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Infrastructure"
            title="Building India's Battery Recycling Infrastructure"
          />
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {infra.map((s, i) => (
              <Reveal key={s.l} delay={i * 70}>
                <div className="h-full bg-background p-8">
                  <p className="font-display text-3xl leading-none font-bold tracking-tight md:text-4xl">
                    {s.v}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <Container className="relative grid gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our Vision"
            title="Closing the Loop on Lithium-Ion Batteries"
            lead="Our vision is to build a scalable circular ecosystem where end-of-life batteries become a domestic source of critical battery materials. By combining feedstock aggregation, industrial black mass production and advanced hydrometallurgical refining, Black Mass Energies aims to contribute to a more resilient and circular battery-material supply chain."
          />
          <ol className="relative">
            {loop.map((step, i) => (
              <Reveal key={step + i} delay={i * 60}>
                <li className="flex items-center gap-4 border border-border bg-background px-5 py-4">
                  <span className="tech-label text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium">{step}</span>
                </li>
                {i < loop.length - 1 ? (
                  <div className="mx-auto h-6 w-px bg-primary/40" aria-hidden />
                ) : null}
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="The Team"
            title="Building the Future of Battery Recycling"
            lead="Black Mass Energies is being built by a multidisciplinary team combining entrepreneurship, technology, engineering and industry expertise."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {people.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <Portrait name={p.name} />
              </Reveal>
            ))}
          </div>

          <div className="mt-16 space-y-6">
            {people.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <article className="grid gap-8 border border-border bg-surface/40 p-8 md:grid-cols-[0.8fr_1.2fr] md:p-10">
                  <div>
                    <h3 className="font-display text-2xl font-semibold md:text-3xl">{p.name}</h3>
                    <p className="mt-2 text-sm text-primary">{p.role}</p>
                    <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                      {p.email ? (
                        <p className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <a href={`mailto:${p.email}`} className="hover:text-primary">
                            {p.email}
                          </a>
                        </p>
                      ) : null}
                      {p.phone ? (
                        <p className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <a href={`tel:${p.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                            {p.phone}
                          </a>
                        </p>
                      ) : null}
                    </div>
                    <div className="mt-6">
                      <LinkedInButton url={p.linkedin} />
                    </div>
                  </div>
                  <div>
                    <span className="tech-label text-muted-foreground">{p.bioTitle}</span>
                    <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                      {p.bio.map((b) => (
                        <p key={b}>{b}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface" className="text-center">
        <div className="absolute inset-0 haze" aria-hidden />
        <Container className="relative">
          <h2 className="font-display text-5xl leading-[1.02] font-bold tracking-tight md:text-7xl">
            Recover.
            <br />
            Refine.
            <br />
            <span className="text-primary">Reuse.</span>
          </h2>
          <p className="tech-label mt-10 text-muted-foreground">
            Leadership → Technology → Infrastructure → Critical Materials
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Contact" title="Connect With Black Mass Energies" />
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
            {people
              .filter((p) => p.email)
              .map((p) => (
                <div key={p.name} className="bg-background p-8">
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-primary">{p.role}</p>
                  <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                    <a href={`mailto:${p.email}`} className="block hover:text-primary">
                      {p.email}
                    </a>
                    <a
                      href={`tel:${(p.phone ?? "").replace(/\s/g, "")}`}
                      className="block hover:text-primary"
                    >
                      {p.phone}
                    </a>
                  </div>
                  <div className="mt-6">
                    <LinkedInButton url={p.linkedin} />
                  </div>
                </div>
              ))}
            <div className="bg-background p-8">
              <h3 className="font-display text-xl font-semibold">General Contact</h3>
              <p className="mt-1 text-sm text-primary">Company inquiries</p>
              <div className="mt-6 flex flex-col gap-3">
                <CtaLink to="/contact">Partner With Us</CtaLink>
                <CtaLink to="/contact" variant="outline">
                  Talk to Our Team
                </CtaLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <Container className="relative grid gap-12 lg:grid-cols-2">
          <h2 className="font-display text-3xl leading-[1.06] font-semibold md:text-5xl">
            Build the Circular Battery Supply Chain With Us.
          </h2>
          <div>
            <p className="text-sm text-muted-foreground">Whether you are looking to:</p>
            <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
              {[
                "Supply battery scrap",
                "Supply black mass",
                "Purchase black mass",
                "Source recovered materials",
                "Build a recycling partnership",
                "Explore technology collaboration",
                "Develop a strategic partnership",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2 text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-primary" aria-hidden />
                  {x}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink to="/contact">Partner With Us</CtaLink>
              <CtaLink to="/contact" variant="outline">
                Contact Our Team
              </CtaLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
