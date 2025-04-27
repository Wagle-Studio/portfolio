import "./Promises.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { promisesData } from "./../../data/promises";
import strongPartsFormater from "./../../utils/strongPartsFormater";

gsap.registerPlugin(ScrollTrigger);

const Promises = () => {
  const cardsRef = useRef<HTMLElement[]>([]);
  const CTARef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
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

    if (CTARef.current) {
      gsap.fromTo(
        CTARef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: CTARef.current,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section className="promises" aria-labelledby="promises-title">
      <header className="promises__header">
        <h2 id="promises-title" className="heading_2">
          {promisesData.title}
        </h2>
        <p
          className="paragraph"
          dangerouslySetInnerHTML={{
            __html: strongPartsFormater(
              promisesData.description,
              promisesData.strongParts
            ),
          }}
        />
      </header>
      <ul
        className="promises__list"
        aria-label="Liste des engagements"
        role="list"
      >
        {promisesData.promises.map((promise, index) => (
          <li key={index}>
            <article
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="promises__list__card"
            >
              <header className="promises__list__card__header">
                <promise.icon aria-hidden="true" />
                <h3 className="heading_3">{promise.title}</h3>
              </header>
              <div className="promises__list__card__body">
                {promise.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>
      <a ref={CTARef} href={promisesData.cta.href} className="button">
        {promisesData.cta.text}
      </a>
    </section>
  );
};

export default Promises;
