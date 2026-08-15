import { Container, SiteLink } from "./primitives";
import { BrandName } from "./Brand";

const groups: { title: string; items: { label: string; to: string; hash?: string }[] }[] = [
  {
    title: "Company",
    items: [
      { label: "About", to: "/about" },
      { label: "Technology", to: "/technology" },
      { label: "Supply Chain", to: "/global-supply" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Materials",
    items: [
      { label: "Battery Scrap", to: "/battery-recycling" },
      { label: "Black Mass", to: "/black-mass" },
      { label: "Critical Minerals", to: "/critical-minerals" },
      { label: "Battery Materials", to: "/technology" },
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
      { label: "Sell Battery Scrap", to: "/contact" },
      { label: "Source Black Mass", to: "/contact" },
      { label: "Request Critical Materials", to: "/contact" },
      { label: "Build a Partnership", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-pure-white pb-24 text-brand-black lg:pb-0">
      <Container>
        <div className="grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-6 lg:py-24">
          <div className="lg:col-span-2">
            <BrandName className="text-xl" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-black/70">
              Building the circular supply chain for critical battery materials.
            </p>
            <p className="tech-label mt-10 text-brand-black/60">
              Black Mass Energies Pvt. Ltd., India
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="tech-label text-brand-black">{g.title}</h3>
              <ul className="mt-5 space-y-3">
                {g.items.map((i) => (
                  <li key={i.label + i.to}>
                    <SiteLink
                      to={i.to}
                      className="text-sm text-brand-black/70 transition-colors hover:text-brand-green"
                    >
                      {i.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-black/10 py-8 md:flex-row md:items-center md:justify-between">
          <p className="tech-label text-brand-black">Recover. Refine. Rebuild.</p>
          <p className="text-xs text-brand-black/60">
            © {new Date().getFullYear()} Black Mass Energies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-black/60">
            <SiteLink to="/legal" hash="privacy" className="hover:text-brand-green">
              Privacy Policy
            </SiteLink>
            <SiteLink to="/legal" hash="terms" className="hover:text-brand-green">
              Terms
            </SiteLink>
            <SiteLink to="/legal" hash="disclaimer" className="hover:text-brand-green">
              Disclaimer
            </SiteLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}
