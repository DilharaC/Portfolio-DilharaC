import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

import { blog, images } from "./data";
import { useReveal } from "./useReveal";

export default function Blog() {
  const ref = useReveal();

  const [featured, ...rest] = blog;

  return (
    <section
      id="writing"
      ref={ref}
      data-testid="blog-section"
      className="relative px-6 md:px-16 py-28 md:py-36 border-t border-white/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-12">
        <div className="md:col-span-2 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-vermillion">
            05 / Writing
          </span>
        </div>

        <div
          className="md:col-span-10 flex items-end justify-between reveal"
          style={{ animationDelay: "0.1s" } as CSSProperties}
        >
          <h2 className="font-display font-light text-white leading-[0.95] tracking-tighter text-4xl sm:text-5xl lg:text-6xl">
            Field
            <span className="italic font-black"> notes</span>
            <span className="text-vermillion">.</span>
          </h2>

          <a
            href="https://medium.com/@chamudithadilhara985"
            data-testid="blog-archive-link"
            className="hidden md:inline-flex font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 hover:text-vermillion"
          >
            Full archive →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
        {/* Featured */}
        <a
          href="https://medium.com/@chamudithadilhara985/how-i-build-clean-full-stack-applications-19a6395e736a"
          data-testid={`blog-card-${featured.id}`}
          className="reveal md:col-span-7 group block border border-white/10 hover:border-vermillion bg-ink-900 overflow-hidden"
        >
          <div className="aspect-[16/10] overflow-hidden border-b border-white/10">
            <img
              src={images.blogKeyboard}
              alt={featured.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-vermillion">
                Featured · {featured.kicker}
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                {featured.date}
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-white tracking-tight leading-tight group-hover:text-vermillion transition-colors">
              {featured.title}
            </h3>

            <p className="mt-4 text-neutral-400 text-base leading-relaxed max-w-xl">
              {featured.excerpt}
            </p>
          </div>
        </a>

        {/* Rest as editorial list */}
        <div
          className="reveal md:col-span-5 border-t border-white/10"
          style={{ animationDelay: "0.1s" } as CSSProperties}
        >
          {rest.map((post) => (
            <a
              key={post.id}
              href="#"
              data-testid={`blog-card-${post.id}`}
              className="group flex items-start justify-between gap-6 px-1 py-6 border-b border-white/10 hover:bg-ink-800 transition-colors"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
                  {post.kicker} · {post.date}
                </div>

                <h4 className="font-display text-xl sm:text-2xl text-white tracking-tight leading-snug group-hover:text-vermillion transition-colors">
                  {post.title}
                </h4>
              </div>

              <ArrowUpRight
                size={18}
                className="mt-2 text-neutral-500 group-hover:text-vermillion transition-colors shrink-0"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}