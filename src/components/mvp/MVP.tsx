import "./MVP.scss";

const MVP = () => {
  return (
    <section className="MVP">
      <div className="MVP__header">
        <h2 className="heading_2">Donnez vie à vos idées sans délai</h2>
        <div className="MVP__header__subtitles">
          <p className="paragraph">
            Vous avez une idée, un besoin, ou simplement l’intuition d’un outil
            qui pourrait améliorer votre activité ?
          </p>
          <p className="paragraph">
            Je conçois une version minimale de votre application centrée sur les
            fonctionnalités utiles, prête à être testée sur le terrain. Vous
            avancez rapidement, validez les usages réels, et faites évoluer
            votre solution au bon rythme.
          </p>
        </div>
      </div>
      <div className="MVP__tags">
        <div className="MVP__tags__wrapper">
          <p className="MVP__tags__wrapper__tag paragraph">
            Cibler l’essentiel, sans superflu
          </p>
          <p className="MVP__tags__wrapper__tag paragraph">
            Réduire l’investissement initial
          </p>
        </div>
        <div className="MVP__tags__wrapper">
          <p className="MVP__tags__wrapper__tag paragraph">
            Apprendre vite, décider mieux
          </p>
          <p className="MVP__tags__wrapper__tag paragraph">
            Faire évoluer l’outil au fil de vos besoins
          </p>
        </div>
      </div>
      <div className="MVP__punchline">
        <div className="MVP__punchline__item">
          <p className="paragraph">Avancez vite</p>
        </div>
        <div className="MVP__punchline__item">
          <p className="paragraph">Dépensez juste</p>
        </div>
        <div className="MVP__punchline__item">
          <p className="paragraph">Construisez mieux</p>
        </div>
      </div>
    </section>
  );
};

export default MVP;
