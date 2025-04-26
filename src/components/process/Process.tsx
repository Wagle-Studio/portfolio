import "./Process.scss";
import illustration_0 from "./../../assets/illustrations/illustration_0.png";
import illustration_1 from "./../../assets/illustrations/illustration_1.png";
import illustration_2 from "./../../assets/illustrations/illustration_2.png";

const Process = () => {
  return (
    <section className="process">
      <div className="process__header">
        <h2 className="heading_2">
          Transformez vos besoins
          <br />
          en solutions concrètes
        </h2>
        <p className="paragraph">
          Chaque entreprise est unique. Pour concevoir une application métier
          pertinente, je commence par comprendre vos besoins et vos processus.
          Voici comment je procède, étape par étape.
        </p>
      </div>
      <ul className="process__list">
        <li>
          <div className="process__list__card">
            <div className="process__list__card__header">
              <img
                className="process__list__card__header__illustration"
                src={illustration_0}
                alt="Illustration comprend votre activité"
              />
            </div>
            <div className="process__list__card__body">
              <h3 className=" heading_3">Comprendre votre activité</h3>
              <p className="paragraph">
                Chaque projet commence par une immersion dans votre métier : vos
                processus, vos contraintes et vos objectifs.
              </p>
              <p className="paragraph">
                Grâce à une phase d’audit ciblée, je cartographie vos flux de
                travail pour identifier les leviers d’automatisation les plus
                pertinents.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="process__list__card">
            <div className="process__list__card__header">
              <img
                className="process__list__card__header__illustration"
                src={illustration_1}
                alt="Illustration conception d'une solution adaptée"
              />
            </div>
            <div className="process__list__card__body">
              <h3 className="heading_3">Concevoir la solution adaptée</h3>
              <p className="paragraph">
                Sur la base des échanges et de l’audit, je conçois une
                application intuitive, alignée sur vos usages métier.
              </p>
              <p className="paragraph">
                Chaque interface est pensée pour être fonctionnelle, durable et
                simple à prendre en main, même sans bagage technique.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="process__list__card">
            <div className="process__list__card__header">
              <img
                className="process__list__card__header__illustration"
                src={illustration_2}
                alt="Illustration livraison, test et accompagnent"
              /></div>
            <div className="process__list__card__body">
              <h3 className="heading_3">Livrer, tester, accompagner</h3>
              <p className="paragraph">
                La solution est livrée progressivement, avec des phases de test
                et de validation à chaque étape clé.
              </p>
              <p className="paragraph">
                Vous êtes accompagné jusqu’à la mise en production, avec un
                suivi dédié pour garantir la qualité et l’évolutivité de
                l’outil.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Process;
