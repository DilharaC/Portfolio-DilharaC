import type { CSSProperties } from "react";

import { ArrowDownRight } from "lucide-react";

import { profile, images } from "./data";
import { useReveal } from "./useReveal";

export default function Hero() {
  const ref = useReveal();

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end"
    >
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images.heroBg})`,
        }}
      />

      <div aria-hidden className="absolute inset-0 bg-black/60" />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(255,59,0,0.10), transparent 60%)",
        }}
      />

      {/* Side rails */}
      <div className="hidden md:flex absolute left-6 top-0 bottom-0 flex-col justify-between py-28 z-10 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
        <span>{profile.location}</span>

        <span className="rotate-180 [writing-mode:vertical-rl]">
          FULL-STACK ENGINEER
        </span>
      </div>

      <div className="hidden md:flex absolute right-6 top-0 bottom-0 flex-col justify-between py-28 z-10 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 items-end">
        <span>N 07°29' · E 80°63'</span>
        <span>AVAILABLE NOW</span>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 pb-20 md:pb-28 pt-32">
        <div
          className="reveal"
          style={{ animationDelay: "0.05s" } as CSSProperties}
        >
          <span
            data-testid="hero-overline"
            className="font-mono text-xs uppercase tracking-[0.3em] text-vermillion"
          >
            — {profile.name}
          </span>
        </div>

        <h1
          data-testid="hero-title"
          className="reveal font-display font-light text-white mt-6 leading-[0.9] tracking-tighter"
          style={
            {
              animationDelay: "0.15s",
              fontSize: "clamp(3.2rem, 11vw, 12rem)",
            } as CSSProperties
          }
        >
          Software
          <br />

          <span className="italic font-black">Developer</span>

          <span className="text-vermillion">.</span>
        </h1>

        <div
          className="reveal mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          style={{ animationDelay: "0.35s" } as CSSProperties}
        >
          <p className="max-w-xl text-neutral-300 text-base sm:text-lg leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#work"
              data-testid="hero-cta-work"
              className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] border-b border-white/30 pb-2 hover:border-vermillion text-white"
            >
              See selected work

              <ArrowDownRight
                size={16}
                className="group-hover:text-vermillion transition-colors"
              />
            </a>

            <a
              href="#contact"
              data-testid="hero-cta-contact"
              className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 hover:text-white"
            >
              Or say hello →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 md:px-16 py-4 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
          <span>(Scroll)</span>

          <span className="hidden sm:inline">
            BUILDING CLEAN FULL-STACK PRODUCTS
          </span>

          <span>©2026</span>
        </div>
      </div>
    </section>
  );
}