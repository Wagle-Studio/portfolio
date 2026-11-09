import { useRef } from "react";
import {
  RevealBuilder,
  revealSectionTitle,
  useSectionReveal,
} from "@/ui/anim/useSectionReveal";

const build: RevealBuilder = (tl, q) => {
  revealSectionTitle(tl, q);
  tl.from(
    q(".skills__stack__title, .skills__stack__category__label"),
    { opacity: 0, y: 10, stagger: 0.06, duration: 0.35 },
    "-=0.2",
  ).from(
    q(".skills__chip"),
    { opacity: 0, y: 10, scale: 0.97, stagger: 0.02, duration: 0.3 },
    "-=0.3",
  );
};

export const useSkillsAnim = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef, build);
  return { sectionRef };
};
