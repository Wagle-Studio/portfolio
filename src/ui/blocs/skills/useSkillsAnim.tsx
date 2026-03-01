import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSkillsAnim = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasInteractedRef = useRef(false);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const isSectionVisibleOnLoad = () => {
      if (!sectionRef.current) return false;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const vw = window.innerWidth || document.documentElement.clientWidth;
      return (
        rect.top < vh && rect.bottom > 0 && rect.left < vw && rect.right > 0
      );
    };

    const markInteracted = () => {
      hasInteractedRef.current = true;
      window.removeEventListener("scroll", markInteracted);
    };

    hasInteractedRef.current = isSectionVisibleOnLoad();
    window.addEventListener("scroll", markInteracted, { passive: true });

    const ctx = gsap.context(() => {
      const sectionTitle = sectionRef.current?.querySelector(".section__title");
      const sectionIndex = sectionRef.current?.querySelector(
        ".section__title__index"
      );

      const headingTl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });

      if (sectionTitle) {
        headingTl.from(sectionTitle, { opacity: 0, y: 24, duration: 0.55 });
      }

      if (sectionIndex) {
        headingTl.from(sectionIndex, { opacity: 0, x: -12, duration: 0.35 }, "-=0.32");
      }

      let headingPlayed = false;
      const playHeading = () => {
        if (headingPlayed || !hasInteractedRef.current) return;
        headingPlayed = true;
        headingTl.restart();
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: playHeading,
        onEnterBack: playHeading,
      });

      const stacks = gsap.utils.toArray<HTMLElement>(".skills__stack");

      stacks.forEach((stack, index) => {
        const stackTitle = stack.querySelector(".skills__stack__title");
        const items = stack.querySelectorAll(".skills__stack__list__item");
        const technoLabels = stack.querySelectorAll(
          ".skills__stack__list__item--label-techno"
        );
        const technoLevels = stack.querySelectorAll(
          ".skills__stack__list__item--level"
        );
        const genericLabels = stack.querySelectorAll(
          ".skills__stack__list__item--label, .skills__stack__list__item--label-soft"
        );

        const direction = index % 2 === 0 ? -20 : 20;

        const tl = gsap.timeline({
          paused: true,
          defaults: { ease: "power3.out" },
        });

        tl.from(stack, { opacity: 0, y: 28, x: direction, duration: 0.55 });

        if (stackTitle) {
          tl.from(stackTitle, { opacity: 0, y: 10, duration: 0.35 }, "-=0.32");
        }

        if (items.length > 0) {
          tl.from(
            items,
            {
              opacity: 0,
              y: 12,
              scale: 0.97,
              stagger: 0.05,
              duration: 0.38,
            },
            "-=0.24"
          );
        }

        if (technoLabels.length > 0) {
          tl.from(
            technoLabels,
            { opacity: 0, x: -8, stagger: 0.04, duration: 0.24 },
            "-=0.3"
          );
        }

        if (technoLevels.length > 0) {
          tl.from(
            technoLevels,
            {
              opacity: 0,
              x: 8,
              scale: 0.82,
              transformOrigin: "right center",
              stagger: 0.04,
              duration: 0.24,
            },
            "-=0.26"
          );
        }

        if (genericLabels.length > 0) {
          tl.from(
            genericLabels,
            { opacity: 0, y: 6, stagger: 0.03, duration: 0.22 },
            "-=0.25"
          );
        }

        let played = false;
        const play = () => {
          if (played || !hasInteractedRef.current) return;
          played = true;
          tl.restart();
        };

        ScrollTrigger.create({
          trigger: stack,
          start: "top 84%",
          onEnter: play,
          onEnterBack: play,
        });
      });
    }, sectionRef);

    return () => {
      window.removeEventListener("scroll", markInteracted);
      ctx.revert();
    };
  }, []);

  return { sectionRef };
};
