import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container, CtaLink, SiteLink } from "./primitives";

const links = [
  { to: "/", label: "Home" },
  { to: "/battery-recycling", label: "Battery Recycling" },
  { to: "/black-mass", label: "Black Mass" },
  { to: "/critical-minerals", label: "Critical Minerals" },
  { to: "/technology", label: "Technology" },
  { to: "/global-supply", label: "Global Supply" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn(
        "font-display text-[1.05rem] leading-none font-bold tracking-tight",
        className,
      )}
    >
      BLACKMASS<span className="text-primary">&nbsp;/</span>
      <span className="ml-1 font-normal opacity-70">ENERGIES</span>
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <Wordmark />

        <nav className="hidden items-center gap-6 xl:flex">
          {links.slice(1, 7).map((l) => (
            <SiteLink
              key={l.to}
              to={l.to}
              className="text-[0.82rem] text-foreground/70 transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              {l.label}
            </SiteLink>
          ))}
          <SiteLink
            to="/about"
            className="text-[0.82rem] text-foreground/70 transition-colors hover:text-primary"
            activeClassName="text-primary"
          >
            About
          </SiteLink>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CtaLink to="/contact" variant="outline" className="px-4 py-2 text-[0.8rem]">
            Partner With Us
          </CtaLink>
          <CtaLink to="/contact" className="px-4 py-2 text-[0.8rem]">
            Get in Touch
          </CtaLink>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center border border-border xl:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </Container>

      {open ? (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-border bg-background md:top-[72px] xl:hidden">
          <Container className="flex flex-col py-6">
            {links.map((l) => (
              <SiteLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-xl font-medium"
                activeClassName="text-primary"
              >
                {l.label}
              </SiteLink>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <CtaLink to="/contact" onClick={() => setOpen(false)}>
                Get in Touch
              </CtaLink>
              <CtaLink to="/contact" variant="outline">
                Partner With Us
              </CtaLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-border bg-border lg:hidden">
      <SiteLink
        to="/contact"
        className="bg-primary py-3.5 text-center text-sm font-medium text-primary-foreground"
      >
        Partner With Us
      </SiteLink>
      <SiteLink
        to="/contact"
        hash="sell-battery-scrap"
        className="bg-background py-3.5 text-center text-sm font-medium text-foreground"
      >
        Sell Scrap
      </SiteLink>
    </div>
  );
}
