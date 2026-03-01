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

      const cards = gsap.utils.toArray<HTMLElement>(".projects__list__card");

      cards.forEach((card) => {
        const content = card.querySelector(
          ".projects__list__card__content"
        ) as HTMLElement | null;
        const title = card.querySelector(".projects__list__card__title") as HTMLElement | null;
        const tags = card.querySelectorAll(".projects__list__card__body__tags li");
        const body = card.querySelectorAll(".projects__list__card__body > *");
        const actions = card.querySelectorAll(".projects__list__card__title--actions a");

        const tl = gsap.timeline({
          paused: true,
          defaults: { ease: "power3.out" },
        });

        tl.from(card, { y: 36, opacity: 0, duration: 0.6 });

        if (content) {
          tl.from(content, { opacity: 0, y: 18, duration: 0.45 }, "-=0.35");
        }

        if (title) {
          tl.from(title.children, { opacity: 0, y: 10, stagger: 0.08, duration: 0.35 }, "-=0.3");
        }

        if (tags.length > 0) {
          tl.from(tags, { opacity: 0, y: 10, stagger: 0.05, duration: 0.3 }, "-=0.25");
        }

        if (body.length > 0) {
          tl.from(body, { opacity: 0, y: 12, duration: 0.35 }, "-=0.2");
        }

        if (actions.length > 0) {
          tl.from(actions, { opacity: 0, y: 8, stagger: 0.06, duration: 0.3 }, "-=0.28");
        }

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
