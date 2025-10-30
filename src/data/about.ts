import { MedalIcon, WorkIcon } from "../ui/atoms/icons";
import ProfilePicture from "./../../public/assets/pictures/profile_picture.jpg";

export const aboutData = {
  title: "À propos",
  profile: {
    picture: ProfilePicture,
    pictureAlt: "Photo de profil de Kévin Wolff",
    name: "Bienvenue, moi c'est Kévin",
    role: "Développeur fullstack | Formateur CDA & DWWM",
    paragraphs: [
      {
        text: "Développeur fullstack spécialisé en Symfony et React, j’accompagne vos projets backend et fullstack avec rigueur, professionnalisme et bonne humeur.",
        strongParts: [
          "fullstack spécialisé en Symfony et React",
          "rigueur, professionnalisme et bonne humeur",
        ],
      },
      {
        text: "Avec plusieurs années d’expérience en agence, enseignement et freelance, je suis attaché à la qualité de mes prestations, tant sur le plan technique qu’humain, avec la volonté d’apporter des solutions concrètes et adaptées à vos besoins.",
        strongParts: [
          "qualité de mes prestations",
          "sur le plan technique qu’humain",
          "volonté d’apporter des solutions",
        ],
      },
    ],
    profil: {
      status: "À l'écoute du marché",
      work_type: "Remote ou présentiel",
      location: "Grenoble | Paris",
    },
    tags: [
      {
        label: "5 ans d'expériences",
        icon: WorkIcon,
      },
      {
        label: "Certification Symfony en cours",
        icon: MedalIcon,
      },
    ],
  },
};
