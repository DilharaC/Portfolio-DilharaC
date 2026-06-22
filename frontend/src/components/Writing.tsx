import { ARTICLES } from "../data/content";
import Reveal from "./Reveal";

export default function Writing() {
  return (
    <section id="writing">
      <div className="container">
        <header style={{ maxWidth: 700, marginBottom: 80 }}>
          <Reveal as="span" className="eyebrow">
            06 / Journal &amp; Editorial
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title">
            Deciphering <em>Architecture.</em>
          </Reveal>
        </header>

        <Reveal className="writing-list">
          {ARTICLES.map((article) => (
            <a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className="writing-item"
            >
              <div className="article-date">{article.date}</div>
              <div className="article-title">{article.title}</div>
              <div className="article-link">
                Read Article <i className="bx bx-right-arrow-alt"></i>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
