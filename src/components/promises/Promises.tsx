import "./Promises.scss";
import { promisesData } from "../../data/promises";

const Promises = () => {
  return (
    <section className="promises" aria-labelledby="promises-title">
      <header className="promises__header">
        <h2 id="promises-title" className="heading_2">{promisesData.title}</h2>
        <p className="paragraph">{promisesData.description}</p>
      </header>
      <ul className="promises__list" aria-label="Liste des engagements" role="list">
        {promisesData.promises.map((promise, index) => (
          <li key={index}>
            <article 
              className="promises__list__card"
              aria-label={`Engagement ${index + 1} : ${promise.title}`}
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
      <a 
        href={promisesData.cta.href} 
        className="button"
        aria-label="Contactez-moi pour discuter de votre projet"
      >
        {promisesData.cta.text}
      </a>
    </section>
  );
};

export default Promises;
