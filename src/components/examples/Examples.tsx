import "./Examples.scss";
import { examplesData } from "../../data/examples";

const Examples = () => {
  return (
    <section className="examples" aria-labelledby="examples-title">
      <header className="examples__header">
        <h2 id="examples-title" className="heading_2">{examplesData.title}</h2>
        <hgroup className="examples__header__subtitles">
          {examplesData.subtitles.map((subtitle, index) => (
            <p key={index} className="paragraph">
              {subtitle}
            </p>
          ))}
        </hgroup>
      </header>
      <div className="examples__body">
        <ul className="examples__body__list" aria-label="Liste des exemples d'utilisation">
          {examplesData.cards.map((card, index) => (
            <li key={index}>
              <article className="examples__body__list__card">
                <h3 className="heading_3">{card.title}</h3>
                {card.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="paragraph">
                    {paragraph}
                  </p>
                ))}
              </article>
            </li>
          ))}
        </ul>
        <nav className="examples__body__navigation" aria-label="Navigation des exemples">
          <button 
            className="button" 
            aria-label="Exemple précédent"
            aria-controls="examples-list"
          >
            &#60;
          </button>
          <button 
            className="button" 
            aria-label="Exemple suivant"
            aria-controls="examples-list"
          >
            &#62;
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Examples;
