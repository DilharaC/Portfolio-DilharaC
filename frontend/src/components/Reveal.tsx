import type { ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type RevealVariant = "reveal" | "reveal-left" | "reveal-right" | "reveal-scale";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: 1 | 2 | 3 | 4 | 5;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wraps content in a scroll-triggered reveal animation, mirroring the
 * original site's `.reveal` / `.reveal-left` / `.reveal-right` classes
 * driven by an IntersectionObserver.
 */
export default function Reveal({
  children,
  variant = "reveal",
  delay,
  as: Tag = "div",
  className = "",
  style,
}: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  const classes = `${variant}${delayClass}${className ? ` ${className}` : ""}`;

  return (
    <Tag ref={ref as React.Ref<HTMLElement>} className={classes} style={style}>
      {children}
    </Tag>
  );
}
