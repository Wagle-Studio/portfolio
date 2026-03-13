import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useDocsMentionAnim = () => {
  const asideRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const aside = asideRef.current;
    if (!aside) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const isSectionVisibleOnLoad = () => {
      const rect = aside.getBoundingClientRect();
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
        .from(".docs-mention__inner", { y: 20, opacity: 0 })
        .from(
          ".docs-mention__text",
          { y: 10, opacity: 0, duration: 0.45 },
          "-=0.3"
        );

      trigger = ScrollTrigger.create({
        trigger: aside,
        start: "top 80%",
        once: true,
        onEnter: () => timeline?.play(0),
      });

      if (isSectionVisibleOnLoad()) {
        timeline.play(0);
        trigger.kill();
        trigger = null;
      }
    }, asideRef);

    return () => {
      trigger?.kill();
      timeline?.kill();
      ctx.revert();
    };
  }, []);

  return { asideRef };
};
