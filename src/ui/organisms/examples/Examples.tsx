import "./Examples.scss";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { examplesData } from "../../../data";
import { strongPartsFormater } from "../../../utils";
import { Button, Tag } from "../../atoms";

gsap.registerPlugin(ScrollTrigger);

export const Examples = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cardListGap = 40;
  const cardOverlap = window.innerWidth >= 768 ? 20 : 0;

  const updateSizes = useCallback(() => {
    if (cardsRef.current[0]) {
      setCardWidth(cardsRef.current[0].offsetWidth);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateSizes);
    updateSizes();

    return () => {
      window.removeEventListener("resize", updateSizes);
    };
  }, [updateSizes]);

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

  const resetCards = useCallback(() => {
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
  }, []);

  const handleNext = () => {
    if (!cardWidth) return;

    const nextIndex = currentCardIndex + 1;

    if (nextIndex >= cardsRef.current.length) {
      resetCards();
      return;
    }

    const xOffset = -(cardWidth + cardListGap - cardOverlap) * nextIndex;

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
    if (!cardWidth) return;

    const prevIndex = currentCardIndex - 1;

    if (prevIndex < 0) {
      resetCards();
      return;
    }

    const xOffset = -(cardWidth + cardListGap - cardOverlap) * prevIndex;

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
    <section
      id="examples"
      className="examples"
      aria-labelledby="examples-title"
    >
      <header className="examples__header">
        <h2 id="examples-title" className="heading_2">
          {examplesData.title}
        </h2>
        <hgroup className="examples__subtitles">
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
          className="examples__list"
          aria-label="Liste des exemples d'utilisation"
        >
          {examplesData.cards.map((card, index) => (
            <li key={index}>
              <article
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="examples__card"
              >
                <ul className="examples__tags">
                  {card.tags?.map((tag, tIndex) => (
                    <li key={tIndex}>
                      <Tag size="small">{tag}</Tag>
                    </li>
                  ))}
                </ul>
                <h3 className="heading_3">{card.title}</h3>
                {card.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="paragraph"
                    dangerouslySetInnerHTML={{
                      __html: strongPartsFormater(
                        paragraph.text,
                        "strongParts" in paragraph
                          ? paragraph.strongParts
                          : undefined
                      ),
                    }}
                  />
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
          className="examples__navigation"
          aria-label="Navigation des exemples"
        >
          <Button
            onClick={handlePrev}
            aria-label="Exemple précédent"
            aria-controls="examples-list"
          >
            &#60;
          </Button>
          <Button
            onClick={handleNext}
            aria-label="Exemple suivant"
            aria-controls="examples-list"
          >
            &#62;
          </Button>
        </nav>
      </div>
    </section>
  );
};
