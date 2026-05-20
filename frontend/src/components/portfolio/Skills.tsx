import type { CSSProperties } from "react";


import { skills, type SkillCategory } from "./data";
import { useReveal } from "./useReveal";

export default function Skills() {
  const ref = useReveal();
  const categories = Object.keys(skills) as SkillCategory[];

  return (
    <section
      id="skills"
      ref={ref}
      data-testid="skills-section"
      className="relative px-6 md:px-16 py-28 md:py-36 border-t border-white/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-14">
        <div className="md:col-span-2 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-vermillion">
            02 / Stack
          </span>
        </div>

        <div
          className="md:col-span-10 reveal"
          style={{ animationDelay: "0.1s" } as CSSProperties}
        >
          <h2 className="font-display font-light text-white leading-[0.95] tracking-tighter text-4xl sm:text-5xl lg:text-6xl">
            Tools that earn
            <span className="italic font-black"> their keep</span>
            <span className="text-vermillion">.</span>
          </h2>
        </div>
      </div>

      <div className="reveal grid grid-cols-1 md:grid-cols-4 border-t border-l border-white/10">
        {categories.map((cat, index) => (
          <div
            key={cat}
            data-testid={`skills-col-${cat.toLowerCase()}`}
            className="border-r border-b border-white/10 p-6 md:p-8 hover:bg-ink-800 transition-colors group"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                0{index + 1}
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-vermillion opacity-0 group-hover:opacity-100 transition-opacity">
                ●
              </span>
            </div>

            <h3 className="font-display text-2xl text-white mb-6 tracking-tight">
              {cat}
            </h3>

            <ul className="space-y-2">
              {skills[cat].map((skill) => (
                <li
                  key={skill}
                  className="font-mono text-sm text-neutral-300 hover:text-vermillion transition-colors cursor-default"
                >
                  — {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}