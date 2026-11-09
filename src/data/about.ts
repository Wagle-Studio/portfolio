import { MapPinIcon, WorkIcon } from "@/ui/components/icons";

// Début de carrière de développeur (premier contrat chez Ecedi, février 2021)
const CAREER_START = new Date(2021, 1, 1);
const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;
const yearsOfExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / YEAR_MS,
);

export default {
  profile: {
    role: "Développeur web full stack · PHP · Symfony · React",
    paragraphs: [
      {
        text: `Développeur web depuis ${CAREER_START.getFullYear()}, entre agence, freelance et formateur auprès de plus de 70 développeurs, je conçois aujourd’hui des applications web full stack.`,
        strongParts: [
          `Développeur web depuis ${CAREER_START.getFullYear()}`,
          "plus de 70 développeurs",
        ],
      },
      {
        text: "J’interviens de bout en bout sur des projets web : création de solutions métiers (CRM, ERP, SaaS) avec une approche DDD, développement d’API REST, interfaces React et TypeScript, intégration de services tiers, maintenance et évolution d’applications existantes.",
        strongParts: ["CRM, ERP, SaaS", "API REST", "React et TypeScript"],
      },
    ],
    // `status` affiche une pastille animée à la place d'une icône
    tags: [
      {
        label: "En poste",
        icon: undefined,
        status: true,
      },
      {
        label: "Lyon",
        icon: MapPinIcon,
        status: false,
      },
      {
        label: `${yearsOfExperience} ans d’expérience`,
        icon: WorkIcon,
        status: false,
      },
    ],
  },
};
