import { createFileRoute } from "@tanstack/react-router";
import { Container, Section } from "@/components/site/primitives";
import { PageHero } from "@/components/site/PageHero";

const TITLE = "Legal — Privacy, Terms & Disclaimer | BlackMass Energies";
const DESC =
  "Privacy policy, terms of use and disclaimer for the BlackMass Energies Pvt. Ltd. website and material inquiries.";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/legal" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/legal" }],
  }),
  component: Page,
});

const blocks = [
  {
    id: "privacy",
    title: "Privacy Policy",
    body: [
      "We collect only the information you submit through our inquiry forms — such as your name, company, contact details, country and material requirement — and use it solely to respond to and evaluate your inquiry.",
      "Documents you upload, including certificates of analysis, are treated as commercially confidential and are shared internally only with the team members handling your request.",
      "We do not sell personal data. To request access, correction or deletion of your information, contact us through the contact page.",
    ],
  },
  {
    id: "terms",
    title: "Terms",
    body: [
      "This website is provided for information purposes. Nothing on it constitutes an offer, quotation or binding commitment to buy, sell or supply any material.",
      "All material transactions are subject to a separate written agreement covering specification, quantity, quality verification, delivery terms, pricing and applicable law.",
      "Content on this site may be updated at any time without notice.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: [
      "Product categories described as development or R&D indicate technology direction. They do not represent current commercial production capability.",
      "Material specifications, compositions and availability are confirmed per lot and per requirement. Indicative descriptions on this site are not specifications.",
      "Forward-looking statements about technology, capability or expansion are subject to change.",
    ],
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Legal information."
        lead="Privacy, terms of use and disclaimer for the BlackMass Energies website and material inquiries."
      />
      <Section>
        <Container className="max-w-3xl">
          {blocks.map((b) => (
            <div key={b.id} id={b.id} className="scroll-mt-28 border-b border-border py-12 first:pt-0 last:border-b-0">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">{b.title}</h2>
              <div className="mt-5 space-y-4">
                {b.body.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}
