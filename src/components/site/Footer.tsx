import { Container, SiteLink } from "./primitives";
import { Wordmark } from "./Nav";

const groups: { title: string; items: { label: string; to: string; hash?: string }[] }[] = [
  {
    title: "Company",
    items: [
      { label: "About", to: "/about" },
      { label: "Technology", to: "/technology" },
      { label: "Global Supply", to: "/global-supply" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Materials",
    items: [
      { label: "Battery Scrap", to: "/battery-recycling" },
      { label: "Black Mass", to: "/black-mass" },
      { label: "Critical Minerals", to: "/critical-minerals" },
      { label: "Battery Materials", to: "/technology", hash: "battery-materials" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { label: "Battery Recycling", to: "/battery-recycling" },
      { label: "Material Recovery", to: "/critical-minerals" },
      { label: "Hydrometallurgy", to: "/technology" },
      { label: "Strategic Supply", to: "/global-supply" },
    ],
  },
  {
    title: "Inquiries",
    items: [
      { label: "Sell Battery Scrap", to: "/contact", hash: "sell-battery-scrap" },
      { label: "Source Black Mass", to: "/contact", hash: "buy-black-mass" },
      { label: "Request Critical Materials", to: "/contact", hash: "buy-critical-minerals" },
      { label: "Build a Partnership", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background pb-24 lg:pb-0">
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-60" aria-hidden />
      <Container className="relative">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-6 lg:py-20">
          <div className="lg:col-span-2">
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Building the circular supply chain for critical battery materials.
            </p>
            <p className="tech-label mt-8 text-muted-foreground">
              BlackMass Energies Pvt. Ltd., India
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="tech-label text-primary">{g.title}</h3>
              <ul className="mt-5 space-y-3">
                {g.items.map((i) => (
                  <li key={i.label + i.to + (i.hash ?? "")}>
                    <SiteLink
                      to={i.to}
                      hash={i.hash}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {i.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-8 md:flex-row md:items-center md:justify-between">
          <p className="tech-label text-muted-foreground">
            Recover. Refine. Rebuild.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BlackMass Energies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <SiteLink to="/legal" hash="privacy" className="hover:text-primary">
              Privacy Policy
            </SiteLink>
            <SiteLink to="/legal" hash="terms" className="hover:text-primary">
              Terms
            </SiteLink>
            <SiteLink to="/legal" hash="disclaimer" className="hover:text-primary">
              Disclaimer
            </SiteLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}
