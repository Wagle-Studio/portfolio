import { MedalIcon, WorkIcon } from "@/ui/components/icons";

export default {
  profile: {
    status: "Disponible en alternance · Rentrée 2026",
    role: "Développeur backend confirmé, en spécialisation ingénierie des données",
    paragraphs: [
      {
        text: "Développeur backend depuis cinq ans, entre agence, freelance et trois ans comme formateur auprès de plus de 70 développeurs web, je me spécialise aujourd’hui en ingénierie des données et prépare un Bac+5 en alternance.",
        strongParts: [
          "plus de 70 développeurs web",
          "ingénierie des données",
        ],
      },
      {
        text: "J’ai conçu Evidence Vault, un pipeline de données complet : ingestion de contenus non structurés, orchestration asynchrone des traitements, enrichissement par scoring IA, indexation Elasticsearch et garantie d’intégrité par hachage SHA-256. Une première mise en pratique concrète de l’ingénierie des données, avec mes compétences backend.",
        strongParts: [
          "Evidence Vault",
          "pipeline de données",
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
    ],
  },
};
