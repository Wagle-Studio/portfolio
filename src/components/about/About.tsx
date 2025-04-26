import "./About.scss";
import ProfilePicture from "./../../assets/pictures/profile_picture.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about__header">
        <h2 className="heading_2">À propos</h2>
      </div>
      <div className="about__card">
        <img className="about__card__pictures" src={ProfilePicture} alt="Photo de profil de Kévin Wolff" />
        <div className="about__card__content">
          <div className="about__card__content__header">
            <h3 className="heading_3">Kévin Wolff</h3>
            <p className="paragraph">Entrepreneur et concepteur web</p>
          </div>
          <div className="about__card__content__body">
            <p className="paragraph">
              Je suis convaincu que dans chaque organisations,{" "}
              <strong>
                quelques leviers bien identifiés suffisent à débloquer tout le
                reste
              </strong>
              . Mon rôle est d’identifier ces leviers avec vous, et de concevoir{" "}
              <strong>
                un outil digital qui les rend simples, fluides et performants
              </strong>
              .
            </p>
            <p className="paragraph">
              Je conçois des applications qui{" "}
              <strong>automatisent l’essentiel</strong>, pour que vous puissiez
              avancer plus vite, avec moins d’efforts, et concentrer votre
              énergie sur votre activité, pas sur vos outils.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
