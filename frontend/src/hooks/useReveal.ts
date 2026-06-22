import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref. When the element
 * enters the viewport it gains the "active" class (which CSS uses to
 * animate opacity/transform), matching the original site's `.reveal` system.
 * The observer unobserves after first trigger, same as the original script.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
