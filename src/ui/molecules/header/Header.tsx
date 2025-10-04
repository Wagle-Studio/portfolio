import "./Header.scss";
import { useState, useEffect, createElement } from "react";
import { headerData } from "../../../data";
import { ButtonLink } from "../../atoms";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no_scroll");
    } else {
      document.body.classList.remove("no_scroll");
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="header" role="banner">
      <div className="header__inner">
        <div className="header__brand">
          <ButtonLink
            href={headerData.brand.href}
            variant="ghost"
            className="header__brand-link"
            onClick={onNavClick}
          >
            {headerData.brand.name}
          </ButtonLink>
        </div>
        <button
          type="button"
          className="header__menu-button"
          aria-label="Ouvrir le menu"
          aria-controls="primary-navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <h1>TODO</h1>
        </button>
        <nav
          id="primary-navigation"
          aria-label="Navigation principale"
          className={
            isMobileMenuOpen ? "header__nav header__nav--open" : "header__nav"
          }
        >
          <ul
            className={
              isMobileMenuOpen
                ? "header__nav-list header__nav-list--mobile"
                : "header__nav-list"
            }
            role="list"
          >
            {headerData.navigation.map((item, index) => (
              <li key={index} className="header__nav-item">
                <ButtonLink
                  href={item.href}
                  variant={item.variant}
                  target={item.target}
                  onClick={onNavClick}
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
