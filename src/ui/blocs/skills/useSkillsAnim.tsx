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
      const bands = gsap.utils.toArray<HTMLElement>(".band");

      bands.forEach((band) => {
        const track = band.querySelector(".band__track");
        const items = band.querySelectorAll(".band__item");

        if (!track) return;

        const tl = gsap
          .timeline({
            paused: true,
            defaults: { ease: "power3.out" },
          })
          .from(band, { opacity: 0, y: 32, duration: 0.6 })
          .fromTo(
            track,
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 0.7, ease: "power2.out" },
            "-=0.35"
          )
          .from(
            items,
            { opacity: 0, stagger: 0.04, duration: 0.45 },
            "-=0.45"
          );

        let played = false;
        const play = () => {
          if (played || !hasInteractedRef.current) return;
          played = true;
          tl.restart();
        };

        ScrollTrigger.create({
          trigger: band,
          start: "top 80%",
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
