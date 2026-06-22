import { PHILOSOPHY_CARDS } from "../data/content";
import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section id="philosophy">
      <div className="container">
        <header style={{ maxWidth: 700, marginBottom: 80 }}>
          <Reveal as="span" className="eyebrow">
            01 / Engineering Strategy
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title">
            Design is how <em>it works.</em>
          </Reveal>
        </header>

        <div className="phil-grid">
          {PHILOSOPHY_CARDS.map((card, i) => (
            <Reveal
              key={card.num}
              delay={(i + 1) as 1 | 2 | 3}
              className="phil-card"
            >
              <span className="phil-num">{card.num}</span>
              <i className={card.icon}></i>
              <h3 className="phil-h3">{card.title}</h3>
              <p className="phil-p">{card.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
