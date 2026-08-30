import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Page } from "../types";
import logo from "../../imports/logo.png";

export function Navbar({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems: { label: string; action: () => void }[] = [
    { label: "Início", action: () => setPage("home") },
    { label: "Sobre", action: () => setPage("about") },
    { label: "Contato", action: () => setPage("contact") },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => { setPage("home"); setOpen(false); }}
          className="flex-shrink-0 focus:outline-none"
        >
          <img src={logo} alt="Servih" className="h-9 object-contain" />
        </button>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-9">
          {navItems.map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none ${
                (label === "Início" && page === "home") ||
                (label === "Sobre" && page === "about") ||
                (label === "Contato" && page === "contact")
                  ? "text-primary"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-2">
          {navItems.map(({ label, action }) => (
            <button
              key={label}
              onClick={() => { action(); setOpen(false); }}
              className="text-left py-3 text-base font-medium text-foreground/70 hover:text-primary transition-colors border-b border-border/50 last:border-0"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
