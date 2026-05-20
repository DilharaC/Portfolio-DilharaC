import type { CSSProperties } from "react";


import { testimonials } from "./data";
import { useReveal } from "./useReveal";

export default function Testimonials() {
  const ref = useReveal();
  const marqueeWords = "Clients & Peers / Clients & Peers / Clients & Peers / ";

  return (
    <section
      id="testimonials"
      ref={ref}
      data-testid="testimonials-section"
      className="relative overflow-hidden px-6 md:px-16 py-28 md:py-36 border-t border-white/10"
    >
      <div
        aria-hidden
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, index) => (
            <span
              key={index}
              className="font-display font-black italic text-outline tracking-tighter pr-12"
              style={
                {
                  fontSize: "clamp(6rem, 18vw, 22rem)",
                } as CSSProperties
              }
            >
              {marqueeWords}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-14">
          <div className="md:col-span-2 reveal">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-vermillion">
              06 / Praise
            </span>
          </div>

          <div
            className="md:col-span-10 reveal"
            style={{ animationDelay: "0.1s" } as CSSProperties}
          >
            <h2 className="font-display font-light text-white leading-[0.95] tracking-tighter text-4xl sm:text-5xl lg:text-6xl">
              What collaborators
              <span className="italic font-black"> say</span>
              <span className="text-vermillion">.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <figure
              key={`${testimonial.author}-${index}`}
              data-testid={`testimonial-${index}`}
              className="reveal bg-ink-900 border border-white/15 hover:border-vermillion p-8 md:p-10 flex flex-col justify-between transition-colors group"
              style={
                {
                  animationDelay: `${0.1 * (index + 1)}s`,
                } as CSSProperties
              }
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-vermillion mb-6">
                ◇ Reference 0{index + 1}
              </div>

              <blockquote className="font-display text-xl sm:text-2xl text-white leading-snug tracking-tight">
                "{testimonial.quote}"
              </blockquote>

              <figcaption className="mt-8 pt-6 border-t border-white/10">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-white">
                  {testimonial.author}
                </div>

                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-1">
                  {testimonial.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}