import { HandshakeIcon, MedalIcon, WorkIcon } from "@/ui/components/icons";

export default {
  profile: {
    status: "Disponible en alternance · Rentrée 2026",
    role: "Développeur confirmé, en spécialisation ingénierie des données et IA",
    paragraphs: [
      {
        text: "Développeur backend depuis cinq ans, entre agence, freelance et formateur auprès de plus de 70 développeurs, je me spécialise aujourd’hui en ingénierie des données et prépare un Bac+5 en alternance.",
        strongParts: [
          "Développeur backend depuis cinq ans",
          "je me spécialise aujourd’hui en ingénierie des données et prépare un Bac+5 en alternance",
        ],
      },
      {
        text: "Je recherche un contrat de professionnalisation où je serais opérationnel dès le premier jour tout en développant mes compétences sur les outils spécifiques de la data. Disponible à la rentrée 2026, je serais ravi d'échanger avec vous afin d'imaginer ce parcours au sein de vos équipes.",
        strongParts: [
          "Je recherche un contrat de professionnalisation où je serais opérationnel dès le premier jour tout en développant mes compétences sur les outils spécifiques de la data",
        ],
      },
    ],
    tags: [
      {
        label: "5 ans d’expérience",
        icon: WorkIcon,
      },
      {
        label: "Bac+5 Ingénierie des données",
        icon: MedalIcon,
      },
      {
        label: "Contrat de professionnalisation",
        icon: HandshakeIcon,
      },
    ],
  },
};
