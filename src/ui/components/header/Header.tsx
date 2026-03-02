import "./header.scss";
import data from "@/data/header";
import { createElement, useContext } from "react";
import { ButtonLink } from "@/ui/components/button-link/ButtonLink";
import { AppContext } from "@/ui/AppContext";
import { DarkModeIcon, LightModeIcon } from "@/ui/components/icons";

export const Header = () => {
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  return (
    <header className="header" role="banner">
      <a href={data.brand.href} className="header__logo">
        {data.brand.name}
      </a>
      <nav className="header__nav" aria-label="Principale">
        <ul className="header__list">
          {data.navigation.map((item) => (
            <li
              key={item.text}
              className={
                item.variant === "secondary" ? "header__list__item--cta" : ""
              }
            >
              <ButtonLink href={item.href} variant={item.variant}>
                {item.icon && createElement(item.icon)}
                {item.text}
              </ButtonLink>
            </li>
          ))}
        </ul>
        <button
          className="header__toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label="Changer le thème"
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </nav>
    </header>
  );
};
