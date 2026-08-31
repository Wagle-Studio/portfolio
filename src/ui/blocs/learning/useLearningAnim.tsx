import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useLearningAnim = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const isSectionVisibleOnLoad = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const vw = window.innerWidth || document.documentElement.clientWidth;
      return (
        rect.top < vh && rect.bottom > 0 && rect.left < vw && rect.right > 0
      );
    };

    let trigger: ScrollTrigger | null = null;
    let timeline: gsap.core.Timeline | null = null;

    const ctx = gsap.context(() => {
      timeline = gsap
        .timeline({
          paused: true,
          defaults: { ease: "power3.out", duration: 0.6 },
        })
        .from(".learning__header", { y: 20, opacity: 0 })
        .from(".learning__context", { y: 16, opacity: 0 }, "-=0.3")
        .from(
          ".learning__axes__item",
          { y: 16, opacity: 0, stagger: 0.08 },
          "-=0.2"
        );

      trigger = ScrollTrigger.create({
        trigger: section,
        start: "top 75%",
        once: true,
        onEnter: () => timeline?.play(0),
      });

      if (isSectionVisibleOnLoad()) {
        timeline.play(0);
        trigger.kill();
        trigger = null;
      }
    }, sectionRef);

    return () => {
      trigger?.kill();
      timeline?.kill();
      ctx.revert();
    };
  }, []);

  return { sectionRef };
};
