import "./Projects.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "../../../data";
import {
  ButtonLink,
  ExternUrlIcon,
  FigmaIcon,
  GitHubIcon,
  StarIcon,
  Tag,
} from "../../atoms";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = listRef.current
        ? Array.from(
            listRef.current.querySelectorAll<HTMLElement>(":scope > li")
          )
        : [];

      if (!items.length) return;

      gsap.from(items, {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="projects">
      <h2 className="heading_2">Projets</h2>
      <ul ref={listRef} className="projects__list">
        {projectsData.items.map((item, index) => (
          <li key={index}>
            <article className="projects__list__card">
              <div
                className="projects__list__card__picture"
                style={{ backgroundImage: `url(${item.media})` }}
                role="img"
                aria-label={item.title}
              />
              <div className="projects__list__card__header">
                <h3 className="heading_4">{item.title}</h3>
                <ul className="projects__list__card__body__tags">
                  {item.technos.map((techno, idx) => (
                    <li key={idx} className="showcase__item-tags-list-item">
                      <Tag size="small">{techno}</Tag>
                    </li>
                  ))}
                  {item.tags.map((tag, idx) => (
                    <li key={idx} className="showcase__data__bottom-item">
                      <Tag size="small">
                        <StarIcon size="small" /> {tag}
                      </Tag>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="projects__list__card__body">
                <p className="paragraph">{item.subtitle}</p>
              </div>
              <div className="projects__list__card__links projects__list__card__footer__links--mobile">
                {item.url && (
                  <ButtonLink size="small" href={item.url} target="_blank">
                    <ExternUrlIcon size="medium" /> Visiter
                  </ButtonLink>
                )}
                {item.git && (
                  <ButtonLink size="small" href={item.git} target="_blank">
                    <GitHubIcon size="medium" /> GitHub
                  </ButtonLink>
                )}
                {item.figma && (
                  <ButtonLink size="small" href={item.figma} target="_blank">
                    <FigmaIcon size="medium" /> Figma
                  </ButtonLink>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
