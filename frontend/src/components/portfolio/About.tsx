import type { CSSProperties } from "react";

import { images, profile } from "./data";
import { useReveal } from "./useReveal";

type StatProps = {
  k: string;
  v: string;
};

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="relative px-6 md:px-16 py-28 md:py-40 border-t border-white/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-2 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-vermillion">
            01 / About
          </span>
        </div>

        <div
          className="md:col-span-7 reveal"
          style={{ animationDelay: "0.1s" } as CSSProperties}
        >
          <h2 className="font-display font-light text-white leading-[0.95] tracking-tighter text-4xl sm:text-5xl lg:text-6xl">
            I build digital systems
            <span className="text-neutral-500"> that refuse to feel </span>
            <span className="italic font-black">templated</span>
            <span className="text-vermillion">.</span>
          </h2>

          <div className="mt-10 max-w-xl space-y-5 text-neutral-400 leading-relaxed text-base sm:text-lg">
            <p>
              I'm <span className="text-white">{profile.name}</span> — a full-stack developer focused 
              on building clean, scalable, and thoughtfully crafted digital products that feel modern, polished, and intentional.
            </p>

            <p>
I care about creating experiences that balance simplicity, performance, and strong visual identity —
 turning ideas into products that feel refined, smooth, and professionally built.            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
            <Stat k="10+" v="completed projects" />
            <Stat k="5+" v="full-stack systems" />
            <Stat k="100%" v="End-to-end ownership" />
          </div>
        </div>

        <div
          className="md:col-span-3 reveal"
          style={{ animationDelay: "0.2s" } as CSSProperties}
        >
          <div className="relative aspect-[3/4] border border-white/10 overflow-hidden group">
            <img
              src={images.portrait}
              alt="Portrait of Chamuditha Dilhara"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              data-testid="about-portrait"
            />

            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-300 bg-gradient-to-t from-black/80 to-transparent">
              <span>Frame 042</span>
              <span className="text-vermillion">●</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: StatProps) {
  return (
    <div className="border-t border-white/10 pt-3">
      <div className="font-display text-3xl text-white">{k}</div>

      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-1">
        {v}
      </div>
    </div>
  );
}