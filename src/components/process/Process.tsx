import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Process.scss";
import { processData } from "../../data/process";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const cardsRef = useRef<HTMLElement[]>([]);

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
  }, []);

  return (
    <section id="process" className="process" aria-labelledby="process-title">
      <header className="process__header">
        <h2 id="process-title" className="heading_2">
          {processData.title}
        </h2>
        <p className="paragraph">{processData.description}</p>
      </header>
      <ul
        className="process__list"
        aria-label="Étapes du processus"
        role="list"
      >
        {processData.steps.map((step, index) => (
          <li key={index}>
            <article
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="process__list__card"
            >
              <div className="process__list__card__header">
                <img
                  className="process__list__card__header__illustration"
                  src={step.illustration}
                  alt={step.illustrationAlt}
                  aria-hidden="true"
                />
              </div>
              <div className="process__list__card__body">
                <h3 className="heading_3">{step.title}</h3>
                {step.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Process;
