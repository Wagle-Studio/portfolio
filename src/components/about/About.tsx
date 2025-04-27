import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.scss";
import { aboutData } from "../../data/about";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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

  const formatParagraph = (text: string, strongParts: string[]) => {
    let formattedText = text;
    strongParts.forEach((part) => {
      const escapedPart = part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(escapedPart, "g");
      formattedText = formattedText.replace(regex, `<strong>${part}</strong>`);
    });
    return formattedText;
  };

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <header className="about__header">
        <h2 id="about-title" className="heading_2">
          {aboutData.title}
        </h2>
      </header>
      <article ref={cardRef} className="about__card">
        <img
          className="about__card__pictures"
          src={aboutData.profile.picture}
          alt={aboutData.profile.pictureAlt}
          aria-hidden="true"
        />
        <div className="about__card__content">
          <header className="about__card__content__header">
            <h3 className="heading_3">{aboutData.profile.name}</h3>
            <p className="paragraph">{aboutData.profile.role}</p>
          </header>
          <div className="about__card__content__body">
            {aboutData.profile.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="paragraph"
                dangerouslySetInnerHTML={{
                  __html: formatParagraph(
                    paragraph.text,
                    paragraph.strongParts
                  ),
                }}
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
