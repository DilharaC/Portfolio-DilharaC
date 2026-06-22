import { MATRIX_COLUMNS } from "../data/content";
import Reveal from "./Reveal";

export default function Matrix() {
  return (
    <section id="matrix">
      <div className="container">
        <header style={{ maxWidth: 700, marginBottom: 80 }}>
          <Reveal as="span" className="eyebrow">
            04 / Technical Matrix
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title">
            Refined <em>Proficiency.</em>
          </Reveal>
        </header>

        <div className="matrix-grid">
          {MATRIX_COLUMNS.map((col, i) => (
            <Reveal
              key={col.heading}
              delay={(i + 1) as 1 | 2 | 3 | 4}
              className="matrix-col"
            >
              <h4>{col.heading}</h4>
              <ul className="matrix-list">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <i className={`${item.icon} stack-icon`}></i>
                    <span className="stack-label">{item.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
