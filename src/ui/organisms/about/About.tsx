import "./About.scss";
import { createElement, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutData } from "../../../data";
import { strongPartsFormater } from "../../../utils";
import { Tag } from "../../atoms";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const headerRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const animateElement = (
      element: HTMLElement | null,
      options: { fromY: number; delay?: number }
    ) => {
      if (!element) return;

      gsap.fromTo(
        element,
        { opacity: 0, y: options.fromY },
        {
          opacity: 1,
          y: 0,
          delay: options.delay || 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    };

    animateElement(headerRef.current, { fromY: -30 });
    animateElement(bodyRef.current, { fromY: 30, delay: 0.2 });
    animateElement(tagsRef.current, { fromY: 30, delay: 0.4 });
  }, []);

  return (
    <section id="about" className="about grid-pattern">
      <article className="about__card">
        <div className="about__content">
          <header ref={headerRef} className="about__header">
            <div className="about__header__name">
              <h2 className="heading_2">{aboutData.profile.name}</h2>
              <Tag variant="status">Disponible CDI Paris</Tag>
            </div>
            <p className="paragraph">{aboutData.profile.role}</p>
          </header>

          <div ref={bodyRef} className="about__body">
            {aboutData.profile.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="paragraph"
                dangerouslySetInnerHTML={{
                  __html: strongPartsFormater(
                    paragraph.text,
                    paragraph.strongParts
                  ),
                }}
              />
            ))}
          </div>
        </div>

        <ul ref={tagsRef} className="about__tags">
          {aboutData.profile.tags.map((tag, tIndex) => (
            <li key={tIndex} className="about__tags-item">
              <Tag>
                {tag.icon && <>{createElement(tag.icon, { size: "medium" })}</>}
                {tag.label}
              </Tag>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
