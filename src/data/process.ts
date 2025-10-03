import illustration_0 from "./../../public/assets/illustrations/illustration_0.png";
import illustration_1 from "./../../public/assets/illustrations/illustration_1.png";
import illustration_2 from "./../../public/assets/illustrations/illustration_2.png";

export const processData = {
  title: "Transformez vos idées en SaaS opérationnels",
  description: {
    text: "Chaque organisation est unique. Pour concevoir une plateforme SaaS efficace, je commence par comprendre vos processus et vos besoins. Voici les étapes de construction.",
    strongParts: ["plateforme SaaS efficace", "vos processus et vos besoins"],
  },
  steps: [
    {
      illustration: illustration_0,
      illustrationAlt: "Illustration découverte activité",
      title: "Découvrir votre activité",
      paragraphs: [
        {
          text: "Chaque projet commence par une immersion dans votre métier : vos processus, vos contraintes et vos objectifs.",
          strongParts: ["immersion dans votre métier"],
        },
        {
          text: "Un audit ciblé permet de cartographier vos flux de travail pour identifier les meilleurs leviers d'automatisation les plus pertinents.",
          strongParts: ["identifier les meilleurs leviers d'automatisation"],
        },
      ],
    },
    {
      illustration: illustration_1,
      illustrationAlt: "Illustration conception solution",
      title: "Concevoir la solution adaptée",
      paragraphs: [
        {
          text: "Sur la base des échanges et de l'audit, je conçois une plateforme intuitive, alignée sur vos usages.",
          strongParts: ["plateforme intuitive, alignée sur vos usages"],
        },
        {
          text: "Chaque interface est pensée pour être fonctionnelle, durable et simple à prendre en main, même sans bagage technique.",
          strongParts: ["fonctionnelle, durable et simple à prendre en main"],
        },
      ],
    },
    {
      illustration: illustration_2,
      illustrationAlt: "Illustration déploiement, test et accompagnement",
      title: "Livrer, tester, accompagner",
      paragraphs: [
        {
          text: "Votre SaaS est déployé progressivement, avec des phases de test et de validation à chaque étape clé",
          strongParts: [
            "déployé progressivement",
            "validation à chaque étape clé",
          ],
        },
        {
          text: "L’accompagnement continue avec des mises à jour régulières, pour garantir la qualité et l'évolutivité de l'outil.",
          strongParts: [
            "mises à jour régulières",
            "la qualité et l'évolutivité",
          ],
        },
      ],
    },
  ],
};
