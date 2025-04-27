import Map from "./../components/icons/Map";
import Speaker from "./../components/icons/Speaker";
import Building from "./../components/icons/Building";
import Handshake from "./../components/icons/Handshake";

export const promisesData = {
  title: "Pourquoi me faire confiance ?",
  description:
    "Concevoir une application sur mesure, ce n'est pas seulement de la programmation. C'est d'abord une question d'écoute, de compréhension métier, et de collaboration.",
  promises: [
    {
      icon: Building,
      title: "Une approche métier et process",
      paragraphs: [
        "Avant de parler de fonctionnalités, je m'attache à comprendre vos opérations, vos flux, vos contraintes terrain grâce à votre expertise.",
        "Mon approche est orientée processus : c'est votre métier qui dicte la solution, pas l'inverse.",
      ],
    },
    {
      icon: Map,
      title: "Une méthode pilotée par étapes",
      paragraphs: [
        "Chaque projet suit un déroulé structuré, avec des validations claires à chaque phase : cadrage, prototype, développement, tests.",
        "Vous avancez avec des jalons définis, des livrables visibles et un suivi transparent.",
      ],
    },
    {
      icon: Speaker,
      title: "Un interlocuteur impliqué",
      paragraphs: [
        "Vous avez affaire à une seule personne : responsable, disponible, engagée.",
        "Je porte votre projet de bout en bout et m'entoure de professionnels via un réseau de confiance lorsque le besoin l'exige.",
      ],
    },
    {
      icon: Handshake,
      title: "Une collaboration transparente",
      paragraphs: [
        "Avant toute conception, j'explore les alternatives existantes sur le marché. Si une solution pertinente peut répondre à votre besoin, je vous la recommande.",
        "Ma priorité est de résoudre vos problèmes, pas de vous vendre une application.",
      ],
    },
  ],
  cta: {
    text: "Entrons en contact",
    href: "#contact",
  },
};
