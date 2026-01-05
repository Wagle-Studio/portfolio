import { LinkedinIcon } from "@/ui/components/icons";

export default {
  brand: {
    name: "Wagle Studio",
    author: "Par Kévin Wolff",
  },
  information: {
    siret: "SIRET : 84132048400022",
    tva: "TVA : FR27841320484",
    tvaNote: "TVA non applicable Org. Form.",
  },
  navigation: [
    {
      text: "Haut de la page",
      href: "#app",
      variant: "ghost",
      target: "_self",
      icon: undefined,
      icon_side: undefined,
    },
    {
      text: "Portfolio",
      href: "/",
      variant: "ghost",
      target: "_self",
      icon: undefined,
      icon_side: undefined,
    },
    {
      text: "Linkedin",
      href: "https://www.linkedin.com/in/wolff-kevin/",
      variant: "ghost",
      target: "_blank",
      icon: LinkedinIcon,
      icon_side: "right",
    },
  ],
};
