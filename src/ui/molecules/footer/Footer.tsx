import "./Footer.scss";
import { createElement } from "react";
import { footerData } from "../../../data";
import { ButtonLink } from "../../atoms";

export const Footer = () => {
  const onNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__identity">
          <div className="footer__brand">
            <h3 className="heading_3">{footerData.brand.name}</h3>
            <p className="paragraph">{footerData.brand.author}</p>
          </div>
          <address className="footer__info">
            <p className="paragraph">{footerData.information.siret}</p>
            <p className="paragraph">{footerData.information.tva}</p>
            <p className="paragraph">{footerData.information.tvaNote}</p>
          </address>
        </div>
        <nav className="footer__nav" aria-label="Navigation principale">
          <ul className="footer__nav-list" role="list">
            {footerData.navigation.map((item, index) => (
              <li key={index} className="footer__nav-item">
                <ButtonLink
                  href={item.href}
                  variant={item.variant}
                  target={item.target}
                  className="footer__nav-link"
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
    </footer>
  );
};
