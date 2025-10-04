import { LinkedinIcon } from "../ui/atoms/icons";

export const headerData = {
  brand: {
    name: "Kévin Wolff",
    href: "/",
  },
  navigation: [
    {
      text: "Portfolio",
      href: "/",
      variant: "ghost",
      target: "_self",
      icon: undefined,
      icon_side: undefined,
    },
    {
      text: "Solution SaaS",
      href: "/saas",
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
