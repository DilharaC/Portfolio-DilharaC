import type { CSSProperties } from "react";

import { ArrowUpRight } from "lucide-react";

import { projects, images, type Project } from "./data";
import { useReveal } from "./useReveal";

const imgMap: Record<string, string> = {
  projectTrading: images.projectTrading,
  projectAI: images.projectAI,
};

type ProjectCardProps = {
  p: Project;
  className?: string;
  delay?: string;
};

export default function Projects() {
  const ref = useReveal();

  return (
    <section
      id="work"
      ref={ref}
      data-testid="projects-section"
      className="relative px-6 md:px-16 py-28 md:py-36 border-t border-white/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16">
        <div className="md:col-span-2 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-vermillion">
            03 / Work
          </span>
        </div>

        <div
          className="md:col-span-10 flex items-end justify-between gap-6 reveal"
          style={{ animationDelay: "0.1s" } as CSSProperties}
        >
          <h2 className="font-display font-light text-white leading-[0.95] tracking-tighter text-4xl sm:text-5xl lg:text-6xl">
            Selected
            <span className="italic font-black"> work</span>
            <span className="text-vermillion">.</span>
          </h2>

          <span className="hidden md:inline font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
            2024 — 2025
          </span>
        </div>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        <ProjectCard
          p={projects[0]}
          className="md:col-span-8 reveal"
        />

        <ProjectCard
          p={projects[1]}
          className="md:col-span-4 reveal"
          delay="0.1s"
        />

        <ProjectCard
          p={projects[2]}
          className="md:col-span-5 reveal"
          delay="0.15s"
        />

        <ProjectCard
          p={projects[3]}
          className="md:col-span-7 reveal"
          delay="0.2s"
        />
      </div>
    </section>
  );
}

function ProjectCard({
  p,
  className = "",
  delay = "0s",
}: ProjectCardProps) {
  const img = p.image ? imgMap[p.image] : null;

  return (
    <a
      href={p.href}
      data-testid={`project-card-${p.id}`}
      className={`group relative block border border-white/10 hover:border-vermillion bg-ink-900 overflow-hidden transition-colors duration-300 ${className}`}
      style={{ animationDelay: delay } as CSSProperties}
    >
      {/* Image / texture */}
      <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden border-b border-white/10">
        {img ? (
          <img
            src={img}
            alt={p.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        ) : (
          <div className="w-full h-full bg-ink-800 relative">
            <div
              className="absolute inset-0 opacity-30"
              style={
                {
                  backgroundImage:
                    "radial-gradient(circle at 20% 30%, rgba(255,59,0,0.18), transparent 40%), linear-gradient(90deg, transparent 0, rgba(255,255,255,0.04) 50%, transparent 100%)",
                } as CSSProperties
              }
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[12vw] md:text-[8vw] text-white/5 tracking-tighter">
                {p.index}
              </span>
            </div>
          </div>
        )}

        <div className="absolute top-4 left-4 flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white bg-black/60 px-2 py-1">
            {p.year}
          </span>
        </div>

        <div className="absolute top-4 right-4 w-9 h-9 border border-white/30 group-hover:border-vermillion flex items-center justify-center bg-black/50 transition-colors">
          <ArrowUpRight
            size={16}
            className="text-white group-hover:text-vermillion transition-colors"
          />
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            {p.index} · {p.category}
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl text-white tracking-tight leading-tight group-hover:text-vermillion transition-colors">
          {p.title}
        </h3>

        <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed max-w-lg">
          {p.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((skill) => (
            <span
              key={skill}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-300 border border-white/15 px-2 py-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}