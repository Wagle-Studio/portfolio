import { useRef } from "react";
import { RevealBuilder, useSectionReveal } from "@/ui/anim/useSectionReveal";

const build: RevealBuilder = (tl, q) => {
  tl.from(q(".about__header__name"), { y: 28, opacity: 0, duration: 0.6 })
    .from(
      q(".about__header__title"),
      { y: 16, opacity: 0, duration: 0.6 },
      "-=0.3",
    )
    .from(
      q(".about__body p"),
      { y: 22, opacity: 0, stagger: 0.12, duration: 0.6 },
      "-=0.15",
    )
    .from(
      q(".about__tags-item"),
      { y: 12, opacity: 0, scale: 0.96, stagger: 0.08, duration: 0.6 },
      "-=0.2",
    );
};

export const useAboutAnim = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  useSectionReveal(sectionRef, build);
  return { sectionRef };
};
