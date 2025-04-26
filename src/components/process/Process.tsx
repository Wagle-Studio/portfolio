import "./Process.scss";
import { processData } from "../../data/process";

const Process = () => {
  return (
    <section className="process" aria-labelledby="process-title">
      <header className="process__header">
        <h2 id="process-title" className="heading_2">{processData.title}</h2>
        <p className="paragraph">{processData.description}</p>
      </header>
      <ul className="process__list" aria-label="Étapes du processus" role="list">
        {processData.steps.map((step, index) => (
          <li key={index}>
            <article 
              className="process__list__card"
              aria-label={`Étape ${index + 1} : ${step.title}`}
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
