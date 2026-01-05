import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useRecommendationsAnim = () => {
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
      const headingTl = gsap
        .timeline({
          paused: true,
          defaults: { ease: "power3.out", duration: 0.6 },
        })
        .from(".recommendations .heading_2", { y: 28, opacity: 0 });

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

      const cards = gsap.utils.toArray<HTMLElement>(".recommendations__card");

      cards.forEach((card) => {
        const avatar = card.querySelector(".recommendations__card__avatar");
        const role = card.querySelector(".recommendations__card__role");
        const texts = card.querySelectorAll(".recommendations__card__text");

        const tl = gsap
          .timeline({
            paused: true,
            defaults: { ease: "power3.out" },
          })
          .from(card, { y: 36, opacity: 0, duration: 0.6 })
          .from(role, { opacity: 0, y: 8, duration: 0.35 }, "-=0.3")
          .from(avatar, { scale: 0.85, opacity: 0, duration: 0.4 }, "-=0.35")
          .from(
            texts,
            { opacity: 0, y: 10, stagger: 0.08, duration: 0.45 },
            "-=0.25"
          );

        let played = false;
        const play = () => {
          if (played || !hasInteractedRef.current) return;
          played = true;
          tl.restart();
        };

        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
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
