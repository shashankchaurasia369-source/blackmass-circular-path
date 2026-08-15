import { createFileRoute } from "@tanstack/react-router";
import { Container, Section } from "@/components/site/primitives";
import { PageHero } from "@/components/site/PageHero";
import { InquiryForm } from "@/components/site/InquiryForm";

const TITLE = "Contact Black Mass Energies | Battery Recycling & Materials";
const DESC =
  "Send one short inquiry to Black Mass Energies for battery scrap, Black Mass, critical minerals or partnership discussions.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: TITLE,
          description: DESC,
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Build the battery materials future with us.</>}
        lead="One form for every conversation: battery feedstock, Black Mass supply, critical minerals or partnership."
      />

      <Section>
        <Container className="max-w-3xl">
          <InquiryForm
            id="inquiry"
            title="Send an inquiry"
            description="Share a few details and our materials team will respond directly."
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Prefer email? Write to{" "}
            <a
              href="mailto:info@blackmaskenergies.com"
              className="text-primary hover:underline"
            >
              info@blackmaskenergies.com
            </a>
          </p>
        </Container>
      </Section>
    </>
  );
}
