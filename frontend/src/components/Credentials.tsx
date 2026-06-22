import { CERTIFICATES } from "../data/content";
import Reveal from "./Reveal";

export default function Credentials() {
  return (
    <section id="credentials">
      <div className="container">
        <header style={{ maxWidth: 700, marginBottom: 80 }}>
          <Reveal as="span" className="eyebrow">
            05 / Credentials
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title">
            Validated <em>Expertise.</em>
          </Reveal>
        </header>

        <div className="cert-grid">
          {CERTIFICATES.map((cert, i) => (
            <Reveal
              key={`${cert.org}-${cert.name}`}
              delay={i === 0 ? undefined : ((Math.min(i, 5)) as 1 | 2 | 3 | 4 | 5)}
              className="cert-card"
            >
              <div className="cert-badge">
                <i className={cert.badgeIcon}></i>
              </div>
              <div className="cert-content">
                <span className="cert-org">{cert.org}</span>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-meta">{cert.meta}</p>
                <a href={cert.verifyHref} className="cert-link">
                  Verify <i className="bx bx-link-external"></i>
                </a>
              </div>
              <img
                className="cert-watermark"
                src={cert.watermarkSrc}
                alt=""
                aria-hidden="true"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
