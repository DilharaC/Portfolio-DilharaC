import { CONTACT_LINKS } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal className="contact-header">
          <span className="eyebrow">07 / Connectivity</span>
          <h2 className="contact-headline">
            Let's build the <em>next generation.</em>
          </h2>
        </Reveal>

        <div className="contact-new-layout">
          <Reveal variant="reveal-left" className="contact-dark-card">
            <span className="contact-dark-sublabel">Get in touch</span>
            <h3 className="contact-dark-headline">
              Have an idea?
              <br />
              <em>Let's build it.</em>
            </h3>
            <p className="contact-dark-sub">
              Open to consulting, collaborations, and interesting
              conversations about tech and product.
            </p>
            <a href="mailto:cdilhara.dev@gmail.com" className="contact-email-btn">
              cdilhara.dev@gmail.com
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </Reveal>

          <Reveal variant="reveal-right" className="contact-links-panel">
            <div className="contact-links-header">Find me on</div>
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="contact-link-row"
              >
                <div className="contact-link-left">
                  <div className="contact-link-icon">
                    <i className={link.icon}></i>
                  </div>
                  <div className="contact-link-meta">
                    <span className="contact-link-sublabel">
                      {link.sublabel}
                    </span>
                    <span className="contact-link-name">{link.name}</span>
                  </div>
                </div>
                <i className="bx bx-link-external contact-link-arrow"></i>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
