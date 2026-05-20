import { useEffect, useState } from "react";
import { navLinks, profile } from "./data";

export default function Nav() {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const firstName = profile.name.split(" ")[0] ?? "";
  const lastName = profile.name.split(" ")[1] ?? "";

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        <a
          href="#top"
          data-testid="nav-logo"
          className="font-mono text-xs uppercase tracking-[0.22em] text-white"
        >
          {firstName}
          <span className="text-vermillion">.</span>
          {lastName}
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-white link-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-testid="nav-cta-talk"
          className="hidden md:inline-flex items-center gap-2 group font-mono text-xs uppercase tracking-[0.2em] border border-white/20 px-4 py-2 hover:bg-vermillion hover:border-vermillion transition-colors duration-200"
        >
          <span className="w-1.5 h-1.5 bg-vermillion group-hover:bg-white" />
          Let's Talk
        </a>

        <button
          type="button"
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
          className="md:hidden text-white font-mono text-xs uppercase tracking-[0.2em]"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          data-testid="nav-mobile-panel"
          className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl px-6 py-6 flex flex-col gap-5"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-mobile-${link.label.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-mono text-sm uppercase tracking-[0.2em] text-neutral-300 hover:text-vermillion"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}