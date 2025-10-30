import "./About.scss";
import { createElement, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutData } from "../../../data";
import { strongPartsFormater } from "../../../utils";
import { Tag } from "../../atoms";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="about"
      className="about grid-pattern"
    >
      <article ref={cardRef} className="about__card">
        <div className="about__content">
          <header className="about__header">
            <div className="about__header__name">
              <h2 className="heading_2">{aboutData.profile.name}</h2>
              <Tag variant="status">Disponible CDI Paris</Tag>
            </div>
            <p className="paragraph">{aboutData.profile.role}</p>
          </header>
          <div className="about__body">
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
        {/* <div className="about__profile__wrapper">
          <div className="about__profile">
            <img
              className="about__picture"
              src={aboutData.profile.picture}
              alt={aboutData.profile.pictureAlt}
              aria-hidden="true"
            />
            <div className="about__status">
              <p className="paragraph about__status__paragraph">
                <strong>{aboutData.profile.profil.status}</strong>
              </p>
              <p className="paragraph">{aboutData.profile.profil.work_type}</p>
              <p className="paragraph">{aboutData.profile.profil.location}</p>
            </div>
          </div>
        </div> */}
        <ul className="about__tags">
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
