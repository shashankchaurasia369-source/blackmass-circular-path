import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Atom,
  Beaker,
  Factory,
  Globe2,
  Layers,
  Recycle,
} from "lucide-react";

import heroImg from "@/assets/battery-cells.jpg";
import blackMassImg from "@/assets/black-mass-macro.jpg";
import hydrometImg from "@/assets/hydromet.jpg";
import mineralsImg from "@/assets/critical-minerals.jpg";

import {
  Container,
  CtaLink,
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
  TechCard,
} from "@/components/site/primitives";
import {
  CircularLoop,
  MaterialFlow,
  ProcessStrip,
} from "@/components/site/MaterialFlow";
import { CtaBand } from "@/components/site/PageHero";

const TITLE = "Black Mass Energies | Battery Recycling & Critical Battery Materials";
const DESC =
  "Black Mass Energies is an integrated battery recycling and critical battery materials company recovering valuable materials from lithium-ion batteries through Black Mass production, hydrometallurgy and advanced materials development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "battery recycling India, lithium-ion battery recycling, Black Mass, NMC Black Mass, LCO Black Mass, LFP Black Mass, critical minerals, critical battery materials, hydrometallurgy, lithium recovery, nickel recovery, cobalt recovery, battery materials",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Black Mass Energies Pvt. Ltd.",
          alternateName: "Black Mass Energies",
          description: DESC,
          foundingDate: "2024-06",
          address: { "@type": "PostalAddress", addressCountry: "IN" },
        }),
      },
    ],
  }),
  component: Home,
});

const valueChain = [
  { n: "01", t: "Source", d: "Lithium-ion batteries from OEMs and the market." },
  { n: "02", t: "Recycle", d: "Battery processing and material recovery." },
  { n: "03", t: "Black Mass", d: "Production of LCO, NMC and LFP Black Mass." },
  { n: "04", t: "Refine", d: "Hydrometallurgical processing." },
  { n: "05", t: "Recover", d: "Lithium, nickel, cobalt, manganese and other critical elements." },
  { n: "06", t: "Materialize", d: "Battery-grade critical minerals and advanced materials." },
  { n: "07", t: "Return", d: "Materials re-enter the battery supply chain." },
];

const industries = [
  { icon: Factory, t: "EV OEMs", d: "Battery waste recovery and circular-material partnerships." },
  { icon: Layers, t: "Battery Manufacturers", d: "Manufacturing scrap and recovered-material supply." },
  { icon: Recycle, t: "Recyclers", d: "Feedstock and downstream material partnerships." },
  { icon: Beaker, t: "Refiners", d: "Black Mass and intermediate material supply." },
  { icon: Atom, t: "Critical Mineral Companies", d: "Recovered mineral and material partnerships." },
  { icon: Globe2, t: "Global Battery Companies", d: "Battery-material sourcing and supply." },
];

const pillars = [
  { n: "01", t: "Integrated Value Chain", d: "From battery waste to refined materials." },
  { n: "02", t: "Chemistry Expertise", d: "LCO, NMC and LFP focused." },
  { n: "03", t: "Critical Mineral Recovery", d: "Moving beyond Black Mass into refined materials." },
  { n: "04", t: "Technology Development", d: "Hydrometallurgy and advanced material R&D." },
  { n: "05", t: "Global Supply Network", d: "Connecting Indian material recovery with global demand." },
];

const journey = [
  { when: "June 2024", what: "Black Mass Energies Founded" },
  { when: "2024–2025", what: "Battery Recycling & Black Mass Development" },
  { when: "2026", what: "Expansion Into Critical Mineral Recovery & Advanced Materials" },
  { when: "April 2026", what: "First Pre-Seed Round" },
];

function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24">
        <img
          src={heroImg}
          alt="Lithium-ion cylindrical cells and a dismantled EV battery pack module"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" aria-hidden />
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <div className="absolute inset-0 hero-glow" aria-hidden />

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="hero-in" style={{ animationDelay: "60ms" }}>
                <Eyebrow>Battery Recycling | Critical Minerals | Battery Materials</Eyebrow>
              </div>
              <h1 className="mt-6 text-4xl leading-[1.04] font-semibold md:text-6xl lg:text-[4.2rem]">
                <span className="block hero-in" style={{ animationDelay: "140ms" }}>
                  Recover and <span className="text-primary">refine</span>
                </span>
                <span className="block hero-in" style={{ animationDelay: "240ms" }}>
                  <span className="text-primary">battery</span> materials
                </span>
              </h1>
              <p
                className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base hero-in"
                style={{ animationDelay: "340ms" }}
              >
                Black Mass Energies recycles lithium-ion batteries, produces chemistry-specific
                Black Mass and recovers critical minerals through hydrometallurgy, building the
                circular supply chain for the next generation of batteries.
              </p>
              <div
                className="mt-8 flex flex-wrap gap-3 hero-in"
                style={{ animationDelay: "440ms" }}
              >
                <CtaLink to="/contact">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </CtaLink>
                <CtaLink to="/technology" variant="outline">
                  Our Technology
                </CtaLink>
              </div>
            </div>

            {/* Hero material-flow visualization */}
            <div
              className="relative border border-border bg-surface/50 p-6 backdrop-blur-sm md:p-8 hero-in"
              style={{ animationDelay: "520ms" }}
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="tech-label text-primary">Material Flow</span>
                <span className="tech-label text-muted-foreground">Source → Supply</span>
              </div>
              <div className="mt-4 h-px w-full flow-line" aria-hidden />
              <ol className="mt-6 space-y-px bg-border">
                {[
                  ["Battery Cell / Pack", "Feedstock"],
                  ["Battery Scrap", "Collection"],
                  ["Black Mass", "LCO | NMC | LFP"],
                  ["Hydrometallurgy", "Leach → Purify"],
                  ["Li | Ni | Co | Mn", "Critical minerals"],
                  ["Battery-Grade Materials", "Refined products"],
                  ["Battery Manufacturing", "Return to supply chain"],
                ].map(([label, sub], i) => (
                  <li
                    key={label}
                    className="group flex items-center justify-between gap-4 bg-background px-4 py-3.5 transition-colors hover:bg-surface"
                  >
                    <div className="flex items-center gap-4">
                      <span className="tech-label text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium">{label}</span>
                    </div>
                    <span className="hidden font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase sm:block">
                      {sub}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sector strip, as in the reference layout */}
          <div className="relative mt-14 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((s, i) => (
              <div
                key={s.t}
                className="group flex flex-col items-start gap-3 bg-background p-5 transition-colors hover:bg-surface hero-in"
                style={{ animationDelay: `${600 + i * 70}ms` }}
              >
                <s.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span className="text-[0.8rem] leading-snug font-medium">{s.t}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* ---------------- CORE VISUAL STORY ---------------- */}
      <Section tone="surface">
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <Container className="relative">
          <SectionHeading
            eyebrow="The Value Chain Story"
            align="center"
            title={
              <>
                Battery waste in. <span className="text-primary">Battery materials out.</span>
              </>
            }
            lead="One continuous material pathway, from end-of-life lithium-ion batteries to the refined materials required by the next generation of batteries."
          />
          <MaterialFlow
            className="mt-16"
            nodes={[
              { stage: "Input", label: "Battery Waste", sub: "OEM & market feedstock" },
              { stage: "Operator", label: "Black Mass Energies", sub: "Integrated processing" },
              { stage: "Product", label: "Black Mass", sub: "LCO | NMC | LFP" },
              { stage: "Process", label: "Hydrometallurgy", sub: "Selective recovery" },
              { stage: "Elements", label: "Critical Minerals", sub: "Li | Ni | Co | Mn" },
              { stage: "Refined", label: "Battery-Grade Materials", sub: "High purity products" },
              { stage: "R&D", label: "Battery Materials", sub: "Technology development" },
              { stage: "Output", label: "Next-Generation Batteries", sub: "Closed loop" },
            ]}
          />
        </Container>
      </Section>

      {/* ---------------- INTRODUCTION ---------------- */}
      <Section>
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Introduction"
              title="The battery is only the beginning."
              lead="Every lithium-ion battery contains critical materials that must remain within the industrial supply chain. Black Mass Energies is building the infrastructure to recover those materials, refine them and return them to the battery ecosystem."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink to="/battery-recycling" variant="outline">
                Battery Recycling
              </CtaLink>
              <CtaLink to="/critical-minerals" variant="outline">
                Critical Minerals
              </CtaLink>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <CircularLoop />
          </Reveal>
        </Container>
      </Section>

      {/* ---------------- VALUE CHAIN ---------------- */}
      <Section tone="light">
        <div className="absolute inset-0 grid-backdrop-light" aria-hidden />
        <Container className="relative">
          <SectionHeading
            tone="light"
            eyebrow="Integrated Operations"
            title="One integrated value chain."
            lead="Seven stages that connect battery waste generation with global battery material demand."
          />
          <div className="mt-14 grid gap-px border border-inverse-border bg-inverse-border md:grid-cols-2 lg:grid-cols-4">
            {valueChain.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="group flex h-full flex-col gap-3 bg-inverse p-6 transition-colors duration-300 hover:bg-inverse/60">
                  <span className="tech-label text-inverse-muted">{s.n}</span>
                  <h3 className="font-display text-lg font-semibold text-inverse-foreground">
                    {s.t}
                  </h3>
                  <p className="text-sm leading-relaxed text-inverse-muted">{s.d}</p>
                </div>
              </Reveal>
            ))}
            <div className="hidden bg-inverse lg:block" />
          </div>
          <div className="mt-10">
            <CtaLink to="/technology" variant="light">
              Explore the Value Chain <ArrowRight className="h-4 w-4" />
            </CtaLink>
          </div>
        </Container>
      </Section>

      {/* ---------------- CAPABILITY BLOCKS ---------------- */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Recover. Refine. Rebuild."
            lead="A single platform spanning recycling operations, material production, refining technology and global supply."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {[
              {
                img: heroImg,
                alt: "Lithium-ion cells and battery pack module",
                eyebrow: "Step 01 / 02",
                title: "Battery Recycling",
                copy: "We source and recycle lithium-ion batteries from OEMs, manufacturers, the EV ecosystem and industrial waste generators.",
                to: "/battery-recycling",
                cta: "Battery Recycling",
              },
              {
                img: blackMassImg,
                alt: "Macro photograph of black mass battery powder",
                eyebrow: "Step 03",
                title: "Black Mass Production",
                copy: "Chemistry-specific Black Mass across LCO, NMC and LFP streams, produced to required composition where commercially and technically applicable.",
                to: "/black-mass",
                cta: "Black Mass",
              },
              {
                img: hydrometImg,
                alt: "Hydrometallurgical reactor vessels and laboratory glassware",
                eyebrow: "Step 04 / 05",
                title: "Hydrometallurgy",
                copy: "Selective recovery of lithium, nickel, cobalt, manganese and other battery-material elements from Black Mass.",
                to: "/technology",
                cta: "Technology",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <article className="group flex h-full flex-col border border-border bg-surface/40 transition-colors duration-300 hover:border-primary/50">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.alt}
                      loading="lazy"
                      width={1600}
                      height={1104}
                      className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" aria-hidden />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="tech-label text-primary">{c.eyebrow}</span>
                    <h3 className="font-display text-xl font-semibold">{c.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
                    <CtaLink to={c.to} variant="ghost" className="mt-auto self-start px-0">
                      {c.cta} <ArrowRight className="h-4 w-4" />
                    </CtaLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------- CRITICAL MINERALS ---------------- */}
      <Section tone="surface" className="overflow-hidden">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative border border-border">
              <img
                src={mineralsImg}
                alt="Battery-grade lithium, nickel and cobalt salts"
                loading="lazy"
                width={1600}
                height={1104}
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-background/25" aria-hidden />
            </div>
          </Reveal>
          <Reveal delay={110}>
            <SectionHeading
              eyebrow="Critical Minerals"
              title="The elements that power the battery economy."
              lead="Lithium-ion batteries contain a concentrated set of critical minerals. Our hydrometallurgical work focuses on selectively recovering these materials and converting them into high-purity products."
            />
            <div className="mt-8 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
              {[
                ["Li", "Lithium"],
                ["Ni", "Nickel"],
                ["Co", "Cobalt"],
                ["Mn", "Manganese"],
              ].map(([sym, name]) => (
                <div key={sym} className="bg-surface p-5">
                  <p className="font-display text-3xl font-bold text-primary">{sym}</p>
                  <p className="tech-label mt-2 text-muted-foreground">{name}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CtaLink to="/critical-minerals" variant="outline">
                Request Critical Materials
              </CtaLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ---------------- HYDROMET PROCESS ---------------- */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="Hydrometallurgy for a circular battery economy."
            lead="A high-level view of how Black Mass is converted into battery-grade material products."
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
          <p className="mt-6 max-w-2xl text-xs text-muted-foreground">
            Proprietary chemical parameters, reagents and operating conditions are not published.
          </p>
        </Container>
      </Section>

      {/* ---------------- ADVANCED MATERIALS R&D ---------------- */}
      <Section tone="light">
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              tone="light"
              eyebrow="Technology Development / R&D"
              title="From recovery to manufacturing."
              lead="Recovering critical minerals is one part of the circular battery economy. The next opportunity is converting those recovered materials into engineered battery materials."
            />
            <div className="grid gap-px border border-inverse-border bg-inverse-border sm:grid-cols-3">
              {[
                { k: "Current", v: "Battery recycling and Black Mass production." },
                { k: "Development", v: "Hydrometallurgical recovery of critical minerals." },
                { k: "Future", v: "Advanced battery-material manufacturing." },
              ].map((l) => (
                <div key={l.k} className="bg-inverse p-6">
                  <span className="tech-label text-inverse-muted">{l.k}</span>
                  <p className="mt-3 text-sm leading-relaxed text-inverse-foreground">{l.v}</p>
                </div>
              ))}
            </div>
          </div>
          <ProcessStrip
            tone="light"
            className="mt-12"
            steps={[
              "Recovered Critical Minerals",
              "Purification",
              "Material Engineering",
              "Battery-Grade Precursors",
              "Cathode / Battery Manufacturing",
            ]}
          />
        </Container>
      </Section>

      {/* ---------------- GLOBAL SUPPLY ---------------- */}
      <Section tone="surface">
        <div className="absolute inset-0 grid-backdrop" aria-hidden />
        <Container className="relative grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Global Supply"
            title="Critical battery materials without borders."
            lead="We work with global companies across the battery and critical-material ecosystem to source, process and supply battery materials, with India as our operating base."
          />
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {[
              ["India", "Operating base"],
              ["Korea", "Ecosystem"],
              ["China", "Ecosystem"],
              ["USA", "Ecosystem"],
              ["Australia", "Ecosystem"],
              ["Europe", "Ecosystem"],
            ].map(([c, r]) => (
              <div key={c} className="flex items-center justify-between bg-surface p-5">
                <span className="font-display text-lg font-semibold">{c}</span>
                <span className="tech-label text-muted-foreground">{r}</span>
              </div>
            ))}
          </div>
        </Container>
        <Container className="relative mt-10">
          <CtaLink to="/global-supply" variant="outline">
            Build a Supply Partnership
          </CtaLink>
        </Container>
      </Section>

      {/* ---------------- INDUSTRIES ---------------- */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Who We Work With"
            title="Built for the battery materials ecosystem."
          />
          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {industries.map((c, i) => (
              <Reveal key={c.t} delay={i * 60}>
                <div className="group flex h-full flex-col gap-4 bg-background p-7 transition-colors duration-300 hover:bg-surface">
                  <c.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-semibold">{c.t}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------- WHY ---------------- */}
      <Section tone="surface">
        <Container>
          <SectionHeading eyebrow="Why Black Mass Energies" title="More than recycling." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <TechCard index={p.n} title={p.t} className="h-full bg-background/60">
                  {p.d}
                </TechCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------- COMPANY JOURNEY ---------------- */}
      <Section>
        <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Company Journey"
            title="Built to close the battery materials loop."
            lead="Black Mass Energies was founded in June 2024 with a focus on building a scalable battery recycling and material recovery business. The company began with lithium-ion battery recycling and Black Mass production, and is expanding downstream into hydrometallurgical recovery, critical minerals and advanced battery materials."
          />
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

      {/* ---------------- LEADERSHIP ---------------- */}
      <Section tone="light">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="Leadership"
            title="Built by operators. Driven by materials."
            lead="Founder and leadership profiles are published once approved by the company. Share your requirement and our team will connect you with the right person directly."
          />
          <div className="mt-10">
            <CtaLink to="/about" variant="light">
              About the Company
            </CtaLink>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="We are not simply recycling batteries. We are rebuilding the supply chain for the materials inside them."
        lead="Sell battery feedstock, source Black Mass, request critical materials or build a technology partnership."
        actions={[
          { label: "Partner With Us", to: "/contact" },
          { label: "Sell Battery Scrap", to: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
}
