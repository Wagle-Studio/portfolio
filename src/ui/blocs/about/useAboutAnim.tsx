import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAboutAnim = () => {
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
      const tl = gsap
        .timeline({
          paused: true,
          defaults: { ease: "power3.out", duration: 0.6 },
        })
        .from(".about__header__name", { y: 28, opacity: 0 })
        .from(
          ".about__header .paragraph",
          { y: 16, opacity: 0 },
          "-=0.3"
        )
        .from(
          ".about__body p",
          { y: 22, opacity: 0, stagger: 0.12 },
          "-=0.15"
        )
        .from(
          ".about__tags-item",
          { y: 12, opacity: 0, stagger: 0.08 },
          "-=0.2"
        );

      const playIfAllowed = () => {
        if (hasPlayedRef.current || !hasInteractedRef.current) return;
        hasPlayedRef.current = true;
        tl.restart();
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
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
