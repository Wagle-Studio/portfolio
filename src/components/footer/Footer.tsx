import "./Footer.scss";
import { footerData } from "../../data/footer";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__wrapper">
        <div className="footer__wrapper__identity">
          <div className="footer__wrapper__identity__brand">
            <h3 className="heading_3">{footerData.brand.name}</h3>
            <p className="paragraph">{footerData.brand.author}</p>
          </div>
          <address className="footer__wrapper__identity__information">
            <p className="paragraph">{footerData.information.siret}</p>
            <p className="paragraph">{footerData.information.tva}</p>
            <p className="paragraph">{footerData.information.tvaNote}</p>
          </address>
        </div>
        <nav aria-label="Navigation principale">
          <ul className="footer__wrapper__navigation" role="list">
            {footerData.navigation.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="footer__wrapper__navigation__item nav_item"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
