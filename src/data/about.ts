import { MedalIcon, WorkIcon } from "@/ui/components/icons";

export default {
  profile: {
    role: "Développeur d’applications métier · PHP · Symfony",
    paragraphs: [
      {
        text: "Après deux expériences en agence et plusieurs missions en freelance, j’ai passé trois ans à former plus de 70 développeurs web. Je reviens aujourd’hui au développement à temps plein.",
        strongParts: [
          "deux expériences en agence",
          "plus de 70 développeurs web",
        ],
      },
      {
        text: "J’interviens sur des projets backend : création de solutions métiers (CRM, ERP, SaaS) avec une approche DDD, développement d’API REST, intégration de services tiers, maintenance et évolution d’applications existantes.",
        strongParts: [
          "CRM, ERP, SaaS",
          "API REST",
        ],
      },
    ],
    tags: [
      {
        label: "5 ans d’expériences",
        icon: WorkIcon,
      },
      {
        label: "Certification Symfony 8 · T3 2026",
        icon: MedalIcon,
      },
    ],
  },
};
