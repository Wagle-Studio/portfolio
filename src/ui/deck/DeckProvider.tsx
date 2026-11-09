import {
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import slides from "@/data/slides";
import { DECK_MEDIA_QUERY, DeckContext } from "./deckContext";

const LAST_INDEX = slides.length - 1;
const WHEEL_GESTURE_GAP = 160; // ms sans événement molette : un nouveau geste commence
const WHEEL_THRESHOLD = 30; // px cumulés dans un geste avant de changer d'écran
const NAV_COOLDOWN = 600; // ms minimum entre deux changements à la molette ou au doigt
const SWIPE_THRESHOLD = 50; // px de glissement vertical

const clampIndex = (index: number) => Math.max(0, Math.min(LAST_INDEX, index));

const matchesDeck = () =>
  typeof window !== "undefined" && window.matchMedia(DECK_MEDIA_QUERY).matches;

// Index de l'écran qui porte cet id, ou qui contient l'élément qui le porte
const indexFromId = (id: string): number | null => {
  if (id === "" || id === "top") return 0;
  const direct = slides.findIndex((slide) => slide.id === id);
  if (direct !== -1) return direct;
  const slideId = document
    .getElementById(id)
    ?.closest<HTMLElement>("[data-slide]")?.dataset.slide;
  const index = slides.findIndex((slide) => slide.id === slideId);
  return index === -1 ? null : index;
};

const indexFromHash = (hash: string) =>
  indexFromId(decodeURIComponent(hash.replace(/^#/, "")));

// Un conteneur de l'écran courant peut-il encore défiler dans ce sens ?
const canScrollInside = (target: EventTarget | null, direction: 1 | -1) => {
  let element = target instanceof Element ? target : null;
  while (element) {
    const { overflowY } = getComputedStyle(element);
    const scrollable =
      /(auto|scroll)/.test(overflowY) &&
      element.scrollHeight > element.clientHeight + 1;
    if (scrollable) {
      const atEnd =
        element.scrollTop + element.clientHeight >= element.scrollHeight - 1;
      if (direction > 0 && !atEnd) return true;
      if (direction < 0 && element.scrollTop > 0) return true;
    }
    if (element.hasAttribute("data-slide")) break;
    element = element.parentElement;
  }
  return false;
};

// En passant du défilement classique au diaporama : la section la plus visible
const indexInView = () => {
  let found = 0;
  slides.forEach((slide, index) => {
    const element = document.querySelector(`[data-slide="${slide.id}"]`);
    if (
      element &&
      element.getBoundingClientRect().top <= window.innerHeight / 3
    ) {
      found = index;
    }
  });
  return found;
};

export const DeckProvider = ({ children }: { children: ReactNode }) => {
  const [isDeck, setIsDeck] = useState(matchesDeck);
  const [activeIndex, setActiveIndex] = useState(() =>
    matchesDeck() ? (indexFromHash(window.location.hash) ?? 0) : 0,
  );
  const activeIndexRef = useRef(activeIndex);
  const wasDeckRef = useRef(isDeck);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const goTo = useCallback((target: number | string) => {
    const index = typeof target === "number" ? target : indexFromId(target);
    if (index !== null) setActiveIndex(clampIndex(index));
  }, []);
  const next = useCallback(() => setActiveIndex((i) => clampIndex(i + 1)), []);
  const prev = useCallback(() => setActiveIndex((i) => clampIndex(i - 1)), []);

  // Bascule diaporama / défilement selon la taille de la fenêtre
  useEffect(() => {
    const media = window.matchMedia(DECK_MEDIA_QUERY);
    const onChange = () => {
      // Mesure faite tant que la page est encore dans son ancienne disposition
      if (media.matches) setActiveIndex(indexInView());
      setIsDeck(media.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("is-deck", isDeck);
    if (wasDeckRef.current && !isDeck) {
      const id = slides[activeIndexRef.current].id;
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    }
    wasDeckRef.current = isDeck;
  }, [isDeck]);

  // Hauteur réelle du header, pour placer les écrans juste dessous
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".header");
    if (!header) return;
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`,
      );
    });
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // L'adresse suit l'écran affiché (#parcours…), sans empiler l'historique
  useEffect(() => {
    if (!isDeck) return;
    const hash = `#${slides[activeIndex].id}`;
    if (window.location.hash !== hash) {
      window.history.replaceState(null, "", hash);
    }
  }, [isDeck, activeIndex]);

  // Molette, clavier, doigt, liens d'ancre et adresse
  useEffect(() => {
    if (!isDeck) return;

    let lastWheelAt = 0;
    let gestureDelta = 0;
    let gestureDone = false;
    let lastNavAt = 0;
    let touchStartY: number | null = null;
    let touchTarget: EventTarget | null = null;

    const step = (direction: 1 | -1, withCooldown = true) => {
      const now = performance.now();
      if (withCooldown && now - lastNavAt < NAV_COOLDOWN) return false;
      lastNavAt = now;
      setActiveIndex((i) => clampIndex(i + direction));
      return true;
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return; // zoom
      const delta = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY;
      const now = performance.now();
      if (now - lastWheelAt > WHEEL_GESTURE_GAP) {
        gestureDelta = 0;
        gestureDone = false;
      }
      lastWheelAt = now;
      if (delta === 0 || Math.abs(event.deltaX) > Math.abs(delta)) return;

      const direction = delta > 0 ? 1 : -1;
      if (canScrollInside(event.target, direction)) {
        // Le geste fait défiler un contenu : il ne changera pas d'écran
        gestureDone = true;
        return;
      }
      event.preventDefault();
      if (gestureDone) return; // inertie du même geste
      gestureDelta += delta;
      if (Math.abs(gestureDelta) >= WHEEL_THRESHOLD && step(direction)) {
        gestureDone = true;
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      ) {
        return;
      }
      const target = event.target as HTMLElement | null;
      if (
        target?.closest("input, textarea, select, [contenteditable='true']")
      ) {
        return;
      }

      let direction: 1 | -1 | null = null;
      switch (event.key) {
        case "ArrowDown":
        case "PageDown":
          direction = 1;
          break;
        case "ArrowUp":
        case "PageUp":
          direction = -1;
          break;
        case " ":
          if (target?.closest("button, a, summary")) return;
          direction = event.shiftKey ? -1 : 1;
          break;
        case "Home":
          event.preventDefault();
          setActiveIndex(0);
          return;
        case "End":
          event.preventDefault();
          setActiveIndex(LAST_INDEX);
          return;
        default:
          return;
      }

      event.preventDefault();
      // Un écran plus haut que la fenêtre défile d'abord
      const slide = document.querySelector<HTMLElement>(".deck__slide.is-on");
      if (slide && canScrollInside(slide, direction)) {
        slide.scrollBy({ top: direction * slide.clientHeight * 0.8 });
        return;
      }
      step(direction, false);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? null;
      touchTarget = event.target;
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartY === null) return;
      const endY = event.changedTouches[0]?.clientY ?? touchStartY;
      const distance = touchStartY - endY;
      touchStartY = null;
      if (Math.abs(distance) < SWIPE_THRESHOLD) return;
      const direction = distance > 0 ? 1 : -1;
      if (canScrollInside(touchTarget, direction)) return;
      step(direction);
    };

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      const link = (event.target as Element | null)?.closest?.("a[href^='#']");
      if (!link) return;
      const index = indexFromId(link.getAttribute("href")!.slice(1));
      if (index === null) return;
      event.preventDefault();
      setActiveIndex(index);
    };

    const onHashChange = () => {
      const index = indexFromHash(window.location.hash);
      if (index !== null) setActiveIndex(index);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick);
    };
  }, [isDeck]);

  const value = useMemo(
    () => ({
      isDeck,
      activeIndex,
      activeId: slides[activeIndex].id,
      slides,
      goTo,
      next,
      prev,
    }),
    [isDeck, activeIndex, goTo, next, prev],
  );

  return <DeckContext.Provider value={value}>{children}</DeckContext.Provider>;
};
