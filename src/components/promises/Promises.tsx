import "./Promises.scss";
import Building from "../../assets/icons/Building";
import Handshake from "../../assets/icons/Handshake";
import Speaker from "../../assets/icons/Speaker";
import Map from "../../assets/icons/Map";

const Promises = () => {
  return (
    <section className="promises">
      <div className="promises__header">
        <h2 className="heading_2">Pourquoi me faire confiance ?</h2>
        <p className="paragraph">
          Concevoir une application sur mesure, ce n’est pas seulement de la
          programmation. C’est d’abord une <strong>question d’écoute</strong>,
          de <strong>compréhension métier</strong>, et de{" "}
          <strong>collaboration</strong>.
        </p>
      </div>
      <ul className="promises__list">
        <li>
          <div className="promises__list__card">
            <div className="promises__list__card__header">
              <Building />
              <h3 className="heading_3">Une approche métier et process</h3>
            </div>
            <div className="promises__list__card__body">
              <p className="paragraph">
                Avant de parler de fonctionnalités, je m’attache à comprendre
                vos opérations, vos flux, vos contraintes terrain grâce à votre
                expertise.
              </p>
              <p className="paragraph">
                Mon approche est orientée processus : c’est votre métier qui
                dicte la solution, pas l’inverse.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="promises__list__card">
            <div className="promises__list__card__header">
              <Map />
              <h3 className="heading_3">Une méthode pilotée par étapes</h3>
            </div>
            <div className="promises__list__card__body">
              <p className="paragraph">
                Chaque projet suit un déroulé structuré, avec des validations
                claires à chaque phase : cadrage, prototype, développement,
                tests.
              </p>
              <p className="paragraph">
                Vous avancez avec des jalons définis, des livrables visibles et
                un suivi transparent.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="promises__list__card">
            <div className="promises__list__card__header">
              <Speaker />
              <h3 className="heading_3">Un interlocuteur impliqué</h3>
            </div>
            <div className="promises__list__card__body">
              <p className="paragraph">
                Vous avez affaire à une seule personne : responsable,
                disponible, engagée.
              </p>
              <p className="paragraph">
                Je porte votre projet de bout en bout et m’entoure de
                professionnels via un réseau de confiance lorsque le besoin
                l’exige.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="promises__list__card">
            <div className="promises__list__card__header">
              <Handshake />
              <h3 className="heading_3">Une collaboration transparente</h3>
            </div>
            <div className="promises__list__card__body">
              <p className="paragraph">
                Avant toute conception, j’explore les alternatives existantes
                sur le marché. Si une solution pertinente peut répondre à votre
                besoin, je vous la recommande.
              </p>
              <p className="paragraph">
                Ma priorité est de résoudre vos problèmes, pas de vous vendre
                une application.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <a href="#" className="button">
        Entrons en contact
      </a>
    </section>
  );
};

export default Promises;
