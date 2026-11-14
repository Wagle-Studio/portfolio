import { MapPinIcon, WorkIcon } from "@/ui/components/icons";

const CAREER_START = new Date(2021, 1, 1);
const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;
const yearsOfExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / YEAR_MS,
);

export default {
  profile: {
    role: "Développeur web full stack · PHP · Symfony · TS · React",
    paragraphs: [
      {
        text: `Développeur web depuis ${CAREER_START.getFullYear()}, entre agence, freelance et formateur, j’ai pour objectif de simplifier la vie des entreprises à l’aide de solutions innovantes adaptées à leurs besoins.`,
        strongParts: [
          `Développeur web depuis ${CAREER_START.getFullYear()}, entre agence, freelance et formateur, j’ai pour objectif de simplifier la vie des entreprises à l’aide de solutions innovantes adaptées à leurs besoins.`,
        ],
      },
      {
        text: "J’interviens de bout en bout sur des projets web : création de solutions métiers (back office, CRM, ERP, SaaS), intégration de services tiers, maintenance et évolution d’applications existantes.",
        strongParts: [
          "J’interviens de bout en bout sur des projets web",
          "back office, CRM, ERP, SaaS",
          "services tiers",
          "maintenance et évolution",
        ],
      },
    ],
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
