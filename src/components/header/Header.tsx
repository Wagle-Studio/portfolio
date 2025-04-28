import "./Header.scss";
import { useState, useEffect } from "react";
import { headerData } from "./../../data/header";
import Menu from "./../icons/Menu";

const Header = () => {
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header" role="banner">
      <div className="header__wrapper">
        <div className="header__wrapper__brand">
          <a
            href={headerData.brand.href}
            className="brand"
            onClick={closeMobileMenu}
          >
            {headerData.brand.name}
          </a>
        </div>

        <div
          className="header__wrapper__mobile_menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu />
        </div>

        <nav
          aria-label="Navigation principale"
          className={
            isMobileMenuOpen
              ? "header__wrapper__nav header__wrapper__nav__mobile"
              : "header__wrapper__nav"
          }
        >
          <ul
            className={
              isMobileMenuOpen
                ? "header__wrapper__nav__list header__wrapper__nav__list__mobile"
                : "header__wrapper__nav"
            }
            role="list"
          >
            {headerData.navigation.map((item, index) => (
              <li
                key={index}
                className={
                  isMobileMenuOpen
                    ? "header__wrapper__nav__list__item__mobile"
                    : ""
                }
              >
                <a
                  href={item.href}
                  className={item.className}
                  aria-label={item.text}
                  onClick={closeMobileMenu}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
