import Map from "./../components/icons/Map";
import Speaker from "./../components/icons/Speaker";
import Building from "./../components/icons/Building";
import Handshake from "./../components/icons/Handshake";

export const promisesData = {
  title: "Pourquoi me faire confiance ?",
  description:
    "Concevoir un SaaS sur mesure ne se résume pas à coder. C’est d’abord une question d’écoute, de compréhension métier et de collaboration.",
  strongParts: ["écoute", "compréhension métier", "collaboration"],
  promises: [
    {
      icon: Building,
      title: "Une approche orientée métier",
      paragraphs: [
        "Avant de parler de fonctionnalités, je comprends vos flux et vos contraintes pour créer une solution SaaS qui colle à votre réalité.",
        "C’est votre activité qui dicte la plateforme, pas l’inverse.",
      ],
    },
    {
      icon: Map,
      title: "Une méthode agile et continue",
      paragraphs: [
        "Chaque projet suit un cycle agile avec validations claires : cadrage, prototype, déploiement cloud, tests utilisateurs.",
        "Vous avancez avec des jalons précis, un suivi transparent et des livrables visibles.",
      ],
    },
    {
      icon: Speaker,
      title: "Un interlocuteur impliqué",
      paragraphs: [
        "Un seul point de contact : disponible, responsable, engagé.",
        "Je porte votre SaaS de bout en bout et mobilise un réseau fiable si nécessaire.",
      ],
    },
    {
      icon: Handshake,
      title: "Une collaboration transparente",
      paragraphs: [
        "Avant de développer, j’explore les SaaS existants. Si l’un d’eux répond à vos besoins, je vous l’indique.",
        "Ma priorité : résoudre vos problèmes, pas vous vendre une ligne de code.",
      ],
    },
  ],
  cta: {
    text: "Entrons en contact",
    href: "#contact",
  },
};
