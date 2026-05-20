import type { CSSProperties } from "react";


import { experience } from "./data";
import { useReveal } from "./useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section
      id="experience"
      ref={ref}
      data-testid="experience-section"
      className="relative px-6 md:px-16 py-28 md:py-36 border-t border-white/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-12">
        <div className="md:col-span-2 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-vermillion">
            04 / Trajectory
          </span>
        </div>

        <div
          className="md:col-span-10 reveal"
          style={{ animationDelay: "0.1s" } as CSSProperties}
        >
          <h2 className="font-display font-light text-white leading-[0.95] tracking-tighter text-4xl sm:text-5xl lg:text-6xl">
            A decade of
            <span className="italic font-black"> shipping</span>
            <span className="text-vermillion">.</span>
          </h2>
        </div>
      </div>

      <div className="reveal border-t border-white/10">
        {experience.map((item, index) => (
          <div
            key={`${item.company}-${item.year}`}
            data-testid={`exp-row-${index}`}
            className="group grid grid-cols-12 items-center gap-4 px-2 md:px-4 py-7 md:py-10 border-b border-white/10 hover:bg-ink-800 transition-colors cursor-default"
          >
            <div className="col-span-12 md:col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 group-hover:text-vermillion transition-colors">
              {item.year}
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="font-display text-2xl sm:text-3xl text-white tracking-tight">
                {item.role}
              </div>

              <div className="font-body text-sm text-neutral-500 mt-1">
                {item.note}
              </div>
            </div>

            <div className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-[0.22em] text-neutral-300 md:text-right">
              {item.company}
            </div>

            <div className="col-span-12 md:col-span-1 md:text-right">
              <span className="font-mono text-xs text-neutral-500 group-hover:text-vermillion transition-colors">
                ↗
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}