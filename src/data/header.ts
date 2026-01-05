import { LinkedinIcon } from "@/ui/components/icons";

export default {
  brand: {
    name: "Kévin Wolff",
    href: "#top",
  },
  navigation: [
    {
      text: "Recommandations",
      href: "#recommendations",
      variant: "ghost",
      target: "_self",
      icon: undefined,
      icon_side: undefined,
    },
    {
      text: "Projets",
      href: "#projects",
      variant: "ghost",
      target: "_self",
      icon: undefined,
      icon_side: undefined,
    },
    {
      text: "Linkedin",
      href: "https://www.linkedin.com/in/wolff-kevin/",
      variant: "primary",
      target: "_blank",
      icon: LinkedinIcon,
      icon_side: "right",
    },
  ],
};
