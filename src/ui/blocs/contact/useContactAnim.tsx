import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useContactAnim = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasInteractedRef = useRef(false);
  const hasPlayedRef = useRef(false);

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
      const card = sectionRef.current?.querySelector(".contact__card");
      const paragraphs = sectionRef.current?.querySelectorAll(".contact__intro");
      const actions = sectionRef.current?.querySelectorAll(".contact__action");

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });

      if (sectionTitle) {
        tl.from(sectionTitle, { opacity: 0, y: 24, duration: 0.55 });
      }

      if (sectionIndex) {
        tl.from(sectionIndex, { opacity: 0, x: -12, duration: 0.35 }, "-=0.32");
      }

      if (card) {
        tl.from(card, { y: 28, opacity: 0, duration: 0.55 }, "-=0.26");
      }

      if (paragraphs && paragraphs.length > 0) {
        tl.from(
          paragraphs,
          {
            opacity: 0,
            y: 12,
            stagger: 0.08,
            duration: 0.35,
          },
          "-=0.28"
        );
      }

      if (actions && actions.length > 0) {
        tl.from(
          actions,
          {
            opacity: 0,
            y: 10,
            stagger: 0.08,
            duration: 0.32,
          },
          "-=0.2"
        );
      }

      const playIfAllowed = () => {
        if (hasPlayedRef.current || !hasInteractedRef.current) return;
        hasPlayedRef.current = true;
        tl.restart();
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: playIfAllowed,
        onEnterBack: playIfAllowed,
      });
    }, sectionRef);

    return () => {
      window.removeEventListener("scroll", markInteracted);
      ctx.revert();
    };
  }, []);

  return { sectionRef };
};
