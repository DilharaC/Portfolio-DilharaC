import { PROJECTS } from "../data/content";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <header style={{ maxWidth: 700, marginBottom: 100 }}>
          <Reveal as="span" className="eyebrow">
            03 / Selected Engineering
          </Reveal>
          <Reveal as="h2" delay={1} className="section-title">
            Case studies in <em>robustness.</em>
          </Reveal>
        </header>

        <div className="project-list">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={`${project.title}-${i}`}
              project={project}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
