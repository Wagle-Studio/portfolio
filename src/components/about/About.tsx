import "./About.scss";
import { aboutData } from "../../data/about";

const About = () => {
  return (
    <section className="about" aria-labelledby="about-title">
      <header className="about__header">
        <h2 id="about-title" className="heading_2">{aboutData.title}</h2>
      </header>
      <article 
        className="about__card"
        aria-label="Présentation de Kévin Wolff"
      >
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
            {aboutData.profile.paragraphs.map((paragraph, index) => {
              let text = paragraph.text;
              paragraph.strongParts.forEach(strongPart => {
                text = text.replace(
                  strongPart,
                  `<strong>${strongPart}</strong>`
                );
              });
              return (
                <p 
                  key={index} 
                  className="paragraph"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
