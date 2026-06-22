import type { Project } from "../data/types";
import Reveal from "./Reveal";

interface ProjectCardProps {
  project: Project;
  reversed: boolean;
}

export default function ProjectCard({ project, reversed }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Reveal
        variant={reversed ? "reveal-right" : "reveal-left"}
        className="project-visual"
      >
        <div className="mockup">
          <div className="mockup-header">
            <div className="mockup-dot"></div>
            <div className="mockup-dot"></div>
            <div className="mockup-dot"></div>
          </div>
          <div className="mockup-img-wrap">
            <img src={project.imageSrc} alt={project.imageAlt} loading="lazy" />
            <span className="mockup-img-label">{project.imageLabel}</span>
          </div>
        </div>
      </Reveal>

      <Reveal
        variant={reversed ? "reveal-left" : "reveal-right"}
        className="project-info"
      >
        <span className="project-num">{project.caseNum}</span>
        <h3 className="project-h3">
          {project.title}
          <em>{project.titleEm}</em>
        </h3>
        <p className="project-p">{project.description}</p>

        <div className="project-specs">
          <div className="spec-item">
            <h4 className="spec-h4">CHALLENGE</h4>
            <p className="spec-p">{project.challenge}</p>
          </div>
          <div className="spec-item">
            <h4 className="spec-h4">SOLUTION</h4>
            <p className="spec-p">{project.solution}</p>
          </div>
        </div>

        <div className="tag-group">
          {project.tags.map((tag) => (
            <span className="tag" key={tag.label}>
              {tag.icon && <i className={tag.icon}></i>}
              {tag.label}
            </span>
          ))}
        </div>

        <div className="project-cta">
          <a href={project.demoHref} className="btn-cta-primary">
            <i className="bx bx-play-circle"></i>Watch Demo
          </a>
          <a href={project.repoHref} className="btn-cta-secondary">
            <i className="bx bxl-github"></i>View Repository
          </a>
        </div>
      </Reveal>
    </article>
  );
}
