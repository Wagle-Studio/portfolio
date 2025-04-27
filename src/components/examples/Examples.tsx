import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Examples.scss";
import { examplesData } from "../../data/examples";

gsap.registerPlugin(ScrollTrigger);

const BREAKPOINTS = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1260,
};

const Examples = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const cardsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentBreakpoint = useMemo(() => {
    if (windowWidth < BREAKPOINTS.mobile) return "smallMobile";
    if (windowWidth < BREAKPOINTS.tablet) return "mobile";
    if (windowWidth < BREAKPOINTS.laptop) return "tablet";
    if (windowWidth < BREAKPOINTS.desktop) return "laptop";
    return "desktop";
  }, [windowWidth]);

  const cardOffset = useMemo(() => {
    switch (currentBreakpoint) {
      case "smallMobile":
        return 397;
      case "mobile":
        return 381;
      case "tablet":
      case "laptop":
        return 375;
      case "desktop":
        return 350;
    }
  }, [currentBreakpoint]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }
  }, []);

  const resetCards = () => {
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.to(card, {
          x: 0,
          duration: 0.5,
          ease: "power2.in",
        });
      }
    });
    setCurrentCardIndex(0);
  };

  const handleNext = () => {
    const nextIndex = currentCardIndex + 1;

    if (nextIndex >= cardsRef.current.length) {
      resetCards();
      return;
    }

    const xOffset = -cardOffset * nextIndex;

    cardsRef.current.forEach((card, index) => {
      if (card && index >= nextIndex) {
        gsap.to(card, {
          x: xOffset,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });

    setCurrentCardIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = currentCardIndex - 1;

    if (prevIndex < 0) {
      resetCards();
      return;
    }

    const xOffset = -cardOffset * prevIndex;

    cardsRef.current.forEach((card, index) => {
      if (card && index >= prevIndex) {
        gsap.to(card, {
          x: xOffset,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });

    setCurrentCardIndex(prevIndex);
  };

  return (
    <section className="examples" aria-labelledby="examples-title">
      <header className="examples__header">
        <h2 id="examples-title" className="heading_2">
          {examplesData.title}
        </h2>
        <hgroup className="examples__header__subtitles">
          {examplesData.subtitles.map((subtitle, index) => (
            <p key={index} className="paragraph">
              {subtitle}
            </p>
          ))}
        </hgroup>
      </header>
      <div className="examples__body">
        <ul
          id="examples-list"
          className="examples__body__list"
          aria-label="Liste des exemples d'utilisation"
        >
          {examplesData.cards.map((card, index) => (
            <li key={index}>
              <article
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="examples__body__list__card"
              >
                <h3 className="heading_3">{card.title}</h3>
                {card.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="paragraph">
                    {paragraph}
                  </p>
                ))}
                {card.cta && (
                  <a href={card.cta.link} className="button">
                    {card.cta.text}
                  </a>
                )}
              </article>
            </li>
          ))}
        </ul>
        <nav
          className="examples__body__navigation"
          aria-label="Navigation des exemples"
        >
          <button
            className="button"
            onClick={handlePrev}
            aria-label="Exemple précédent"
            aria-controls="examples-list"
          >
            &#60;
          </button>
          <button
            className="button"
            onClick={handleNext}
            aria-label="Exemple suivant"
            aria-controls="examples-list"
          >
            &#62;
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Examples;
