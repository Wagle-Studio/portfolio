import "./HeroBanner.scss";

const HeroBanner = () => {
  return (
    <div className="hero_banner">
      <div className="hero_banner__body">
        <h1 className="heading_1">
          Libérez votre potentiel
          <br />
          avec une application métier sur mesure
        </h1>
        <p className="hero_banner__body__subtitle paragraph">
          Je conçois et développe des{" "}
          <strong>applications métiers intuitives et efficaces</strong> pour{" "}
          <strong>automatiser vos tâches, libérer votre temps</strong> et faire
          progresser votre entreprise
        </p>
      </div>
      <a href="#" className="button">
        Découvrez comment
      </a>
    </div>
  );
};

export default HeroBanner;
