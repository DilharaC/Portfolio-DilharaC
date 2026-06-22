import { useEffect, useState } from "react";

interface ScrollProgressState {
  scrolled: boolean;
  progressPct: number;
  trackFillPct: number;
}

/**
 * Tracks page scroll to drive:
 *  - the `scrolled` boolean (nav pill compaction past 60px)
 *  - the top progress bar width
 *  - the side scroll-track fill height
 */
export function useScrollProgress(): ScrollProgressState {
  const [state, setState] = useState<ScrollProgressState>({
    scrolled: false,
    progressPct: 0,
    trackFillPct: 0,
  });

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setState({
        scrolled: window.scrollY > 60,
        progressPct: pct,
        trackFillPct: pct,
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
}
