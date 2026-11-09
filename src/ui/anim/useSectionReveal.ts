import { RefObject, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDeck } from "@/ui/deck/deckContext";

gsap.registerPlugin(ScrollTrigger);

export type RevealBuilder = (
  tl: gsap.core.Timeline,
  q: (selector: string) => Element[],
) => void;

// Titre de section commun à tous les blocs
export const revealSectionTitle: RevealBuilder = (tl, q) => {
  tl.from(q(".section__title"), { opacity: 0, y: 24, duration: 0.55 }).from(
    q(".section__title__index"),
    { opacity: 0, x: -12, duration: 0.35 },
    "-=0.32",
  );
};

const isInViewport = (element: Element) => {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
};

/**
 * Animation d'entrée d'une section, construite par `build` (à définir hors du
 * composant pour rester stable).
 * - Diaporama : rejouée à chaque arrivée sur l'écran qui contient la section.
 * - Défilement classique : jouée une fois, quand la section entre dans la vue.
 * Rien n'est animé si l'utilisateur demande moins d'animations.
 */
export const useSectionReveal = (
  sectionRef: RefObject<HTMLElement | null>,
  build: RevealBuilder,
) => {
  const { isDeck, activeId } = useDeck();
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const slideIdRef = useRef<string | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    slideIdRef.current =
      section.closest<HTMLElement>("[data-slide]")?.dataset.slide ?? null;

    let trigger: ScrollTrigger | undefined;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" },
      });
      build(tl, gsap.utils.selector(section));
      timelineRef.current = tl;

      if (!isDeck) {
        trigger = ScrollTrigger.create({
          trigger: section,
          start: "top 80%",
          once: true,
          onEnter: () => tl.play(),
        });
        if (isInViewport(section)) {
          tl.play();
          trigger.kill();
        }
      }
    }, section);

    return () => {
      trigger?.kill();
      ctx.revert();
      timelineRef.current = null;
    };
  }, [isDeck, sectionRef, build]);

  useEffect(() => {
    if (isDeck && slideIdRef.current === activeId) {
      timelineRef.current?.restart();
    }
  }, [isDeck, activeId]);
};
