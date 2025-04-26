import "./Examples.scss";

const Examples = () => {
  return (
    <section className="examples">
      <div className="examples__header">
        <h2 className="heading_2">
          Et si votre outil de travail devenait un vrai levier de performance ?
        </h2>
        <div className="examples__header__subtitles">
          <p className="paragraph">
            Le bon outil, c'est celui qui épouse votre façon de travailler
          </p>
          <p className="paragraph">
            Une application métier ne doit pas être une dépense technique, mais
            un levier de performance. Voici des exemples concrets où le
            sur-mesure fait toute la différence.
          </p>
        </div>
      </div>
      <div className="examples__body">
        <ul className="examples__body__list">
          <li>
            <div className="examples__body__list__card">
              <h3 className="heading_3">
                Difficile de suivre le travail sur le terrain ?
              </h3>
              <p className="paragraph">
                Vos équipes multiplient les échanges par téléphone ou par SMS,
                les informations se dispersent et vous manquez de visibilité sur
                l’avancement réel.
              </p>
              <p className="paragraph">
                Avec une application mobile connectée à votre activité, chaque
                intervenant peut consulter ses missions, remonter des infos et
                cocher les étapes réalisées.
              </p>
              <p className="paragraph">
                La communication est fluide, les tâches sont suivies, les oublis
                évités.
              </p>
            </div>
          </li>
          <li>
            <div className="examples__body__list__card">
              <h3 className="heading_3">Trop d’outils, pas assez de temps ?</h3>
              <p className="paragraph">
                Vous jonglez entre mails, fichiers, tableurs, messages et
                post-its pour gérer votre activité ? Le risque d’erreur
                augmente, l’info se perd, et votre énergie s’éparpille.
              </p>
              <p className="paragraph">
                Une application centralisée vous permet de retrouver toutes vos
                données clés au même endroit, mises à jour automatiquement.
              </p>
              <p className="paragraph">
                Vous gagnez du temps, de la clarté, et vous reprenez le
                contrôle.
              </p>
            </div>
          </li>
          <li>
            <div className="examples__body__list__card">
              <h3 className="heading_3">
                L’administratif vous prend plus de temps que votre cœur de
                métier ?
              </h3>
              <p className="paragraph">
                Créer des devis, envoyer des factures, suivre les relances ou
                produire des attestations devient un fardeau quotidien.
              </p>
              <p className="paragraph">
                Votre application automatise ces tâches selon vos règles métier
                : génération de documents, envoi, archivage, alertes.
              </p>
              <p className="paragraph">
                Vous réduisez drastiquement votre charge mentale et gagnez du
                temps pour piloter.
              </p>
            </div>
          </li>
          <li>
            <div className="examples__body__list__card">
              <h3 className="heading_3">
                Vos outils terrain ne suivent pas la cadence ?
              </h3>
              <p className="paragraph">
                Vos équipes utilisent encore des tableaux papier ou des fichiers
                partagés peu fiables, rendant la gestion de production complexe
                et les erreurs fréquentes.
              </p>
              <p className="paragraph">
                Une application web et mobile connectée à votre environnement
                permet un suivi des opérations en temps réel, depuis n’importe
                quel support.
              </p>
              <p className="paragraph">
                Vous fluidifiez les flux, sécurisez les données, et optimisez
                chaque étape de production.
              </p>
            </div>
          </li>
        </ul>
        <div className="examples__body__navigation">
            <button className="button">&#60;</button>
            <button className="button">&#62;</button>
        </div>
      </div>
    </section>
  );
};

export default Examples;
