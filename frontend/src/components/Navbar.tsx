import { useState } from "react";
import { NAV_LINKS } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.section));

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <img
              className="nav-logo-avatar"
              src="/images/avatar.png"
              alt="Chamuditha Dilhara"
            />
            <div className="nav-logo-text">
              <span className="nav-logo-name">
                Chamuditha <em>&nbsp;D.</em>
                <span className="nav-logo-pulse"></span>
              </span>
              <span className="nav-logo-sub">Full-Stack Developer</span>
            </div>
          </a>

          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.section}>
                <a
                  href={link.href}
                  className={activeSection === link.section ? "active" : ""}
                >
                  <span className="nav-dot"></span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="mailto:dilhara@example.com" className="nav-cta">
            <span className="nav-cta-inner">
              <span>Direct Mail</span>
            </span>
          </a>

          <button
            className={`nav-burger ${drawerOpen ? "open" : ""}`}
            aria-label="Open menu"
            onClick={() => toggleDrawer(!drawerOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`nav-drawer ${drawerOpen ? "open" : ""}`}>
        <div
          className="nav-drawer-backdrop"
          onClick={() => toggleDrawer(false)}
        ></div>
        <div className="nav-drawer-panel">
          {NAV_LINKS.map((link) => (
            <a
              key={link.section}
              href={link.href}
              className="nav-drawer-link"
              onClick={() => toggleDrawer(false)}
            >
              {link.label} <i className="bx bx-right-arrow-alt"></i>
            </a>
          ))}
          <div className="nav-drawer-footer">Kandy · SRI LANKA · 2026</div>
        </div>
      </div>
    </>
  );
}
