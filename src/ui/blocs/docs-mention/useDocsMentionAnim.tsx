import { useRef } from "react";
import { RevealBuilder, useSectionReveal } from "@/ui/anim/useSectionReveal";

const build: RevealBuilder = (tl, q) => {
  tl.from(q(".docs-mention__inner"), { y: 20, opacity: 0, duration: 0.6 }).from(
    q(".docs-mention__text"),
    { y: 10, opacity: 0, duration: 0.45 },
    "-=0.3",
  );
};

export const useDocsMentionAnim = () => {
  const asideRef = useRef<HTMLElement | null>(null);
  useSectionReveal(asideRef, build);
  return { asideRef };
};
