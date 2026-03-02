import { MedalIcon, WorkIcon } from "@/ui/components/icons";

export default {
  profile: {
    name: "Bienvenue, moi c'est Kévin",
    role: "Développeur PHP Symfony + React",
    paragraphs: [
      {
        text: "J’accompagne vos projets backend PHP Symfony et React avec rigueur, professionnalisme et bonne humeur.",
        strongParts: [
          "projets backend PHP Symfony",
          "fullstack spécialisé en Symfony et React",
          "rigueur, professionnalisme et bonne humeur",
        ],
      },
      {
        text: "Fort de plusieurs expériences en agence, en freelance et en formation, je suis à même d’intervenir sur des projets backend tels que la création de solutions métiers (DDD, CRM, ERP, SaaS), le développement d’API REST, l’intégration de services tiers ainsi que la maintenance ou l’évolution d’applications.",
        strongParts: [
          "Fort de plusieurs expériences en agence, en freelance et en formation",
          "création de solutions métiers (DDD, CRM, ERP, SaaS)",
          "API REST",
          "maintenance",
          "évolution",
        ],
      },
    ],
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
