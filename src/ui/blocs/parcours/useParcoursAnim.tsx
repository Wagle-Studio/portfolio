import { useRef } from "react";
import {
  RevealBuilder,
  revealSectionTitle,
  useSectionReveal,
} from "@/ui/anim/useSectionReveal";

const build: RevealBuilder = (tl, q) => {
  revealSectionTitle(tl, q);
  tl
    // L'axe se trace, puis les années apparaissent
    .from(q(".parcours__axis"), { "--axis-scale": 0, duration: 0.9 }, "-=0.2")
    .from(
      q(".parcours__axis span"),
      { opacity: 0, stagger: 0.05, duration: 0.4 },
      "<0.1",
    )
    // Les barres s'étirent une à une, suivies de leur nom
    .from(
      q(".parcours__bar"),
      { scaleX: 0, stagger: 0.14, duration: 0.9 },
      "<0.15",
    )
    .from(
      q(".parcours__bar-name"),
      { opacity: 0, stagger: 0.14, duration: 0.5 },
      "<0.35",
    )
    .from(
      q(".parcours__detail"),
      { opacity: 0, y: 12, duration: 0.5 },
      "-=0.6",
    );
};

export const useParcoursAnim = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef, build);
  return { sectionRef };
};
