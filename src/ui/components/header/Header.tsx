import "./header.scss";
import data from "@/data/header";

import { createElement } from "react";
import { ButtonLink } from "@/ui/components/button-link/ButtonLink";

export const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header__inner">
        <div className="header__brand">
          <ButtonLink
            href={data.brand.href}
            variant="ghost"
            className="header__brand-link"
          >
            {data.brand.name}
          </ButtonLink>
        </div>
        <nav
          id="primary-navigation"
          aria-label="Navigation principale"
          className="header__nav"
        >
          <ul className="header__nav-list" role="list">
            {data.navigation.map((item, index) => (
              <li key={index} className="header__nav-item">
                <ButtonLink
                  href={item.href}
                  variant={item.variant}
                  target={item.target}
                  iconSide={item.icon_side}
                >
                  {item.icon && <>{createElement(item.icon)}</>}
                  {item.text}
                </ButtonLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
