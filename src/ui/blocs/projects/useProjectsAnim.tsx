import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useProjectsAnim = () => {
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
        .timeline({ paused: true, defaults: { ease: "power3.out" } })
        .from(".projects .heading_2", { y: 28, opacity: 0, duration: 0.6 });

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

      const cards = gsap.utils.toArray<HTMLElement>(".projects__list__card");

      cards.forEach((card) => {
        const picture = card.querySelector(".projects__list__card__picture");
        const content = card.querySelector(
          ".projects__list__card__content"
        ) as HTMLElement | null;
        const header = card.querySelector(
          ".projects__list__card__header"
        ) as HTMLElement | null;
        const body = card.querySelector(
          ".projects__list__card__body"
        ) as HTMLElement | null;
        const links = card.querySelectorAll(
          ".projects__list__card__links a"
        );

        const tl = gsap
          .timeline({
            paused: true,
            defaults: { ease: "power3.out" },
          })
          .from(card, { y: 36, opacity: 0, duration: 0.6 })
          .from(
            picture,
            { scale: 0.92, opacity: 0, duration: 0.45 },
            "-=0.4"
          )
          .from(
            content,
            { opacity: 0, y: 18, duration: 0.45 },
            "-=0.35"
          )
          .from(
            header?.children || [],
            { opacity: 0, y: 10, stagger: 0.08, duration: 0.35 },
            "-=0.3"
          )
          .from(
            body?.children || [],
            { opacity: 0, y: 12, duration: 0.35 },
            "-=0.25"
          )
          .from(
            links,
            { opacity: 0, y: 8, stagger: 0.06, duration: 0.3 },
            "-=0.2"
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
