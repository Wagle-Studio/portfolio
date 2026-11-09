import { useRef } from "react";
import {
  RevealBuilder,
  revealSectionTitle,
  useSectionReveal,
} from "@/ui/anim/useSectionReveal";

const build: RevealBuilder = (tl, q) => {
  revealSectionTitle(tl, q);
  tl.from(
    q(".projects__item"),
    { opacity: 0, x: -16, stagger: 0.08, duration: 0.45 },
    "-=0.2",
  ).from(
    q(".projects__details"),
    { opacity: 0, y: 18, duration: 0.55 },
    "-=0.35",
  );
};

export const useProjectsAnim = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef, build);
  return { sectionRef };
};
