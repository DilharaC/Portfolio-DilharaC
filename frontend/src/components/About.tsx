import { EDUCATION_ITEMS } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal variant="reveal-left">
            <span className="eyebrow">02 / Biography</span>
            <h2 className="section-title">
              Building digital experiences with <em>curiosity.</em>
            </h2>
            <div className="about-text">
              <p>
                I'm a Full-Stack Developer passionate about building modern
                web applications and creating clean, user-friendly digital
                experiences. Through university studies and personal
                projects, I have developed skills in both frontend and
                backend development while continuously expanding my technical
                knowledge.
              </p>
              <p>
                I enjoy solving problems, learning new technologies, and
                turning ideas into functional products. Currently, I am
                seeking opportunities to contribute to meaningful projects,
                collaborate with experienced teams, and grow as a software
                developer.
              </p>
            </div>
          </Reveal>

          <Reveal variant="reveal-right">
            <span className="eyebrow">Academic Foundation</span>
            <div className="edu-timeline">
              {EDUCATION_ITEMS.map((item) => (
                <div className="edu-item" key={item.degree}>
                  <div className="edu-year">{item.year}</div>
                  <h3 className="edu-degree">{item.degree}</h3>
                  <div className="edu-school">{item.school}</div>
                  {item.logoUrl && (
                    <img
                      className="edu-logo"
                      src={item.logoUrl}
                      alt={item.school}
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
