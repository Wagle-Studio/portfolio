import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper__identity">
          <div className="footer__wrapper__identity__brand">
            <h3 className="heading_3">Wagle Studio</h3>
            <p className="paragraph">Par Kévin Wolff</p>
          </div>
          <div className="footer__wrapper__identity__information">
            <p className="paragraph">SIRET : 84132048400022</p>
            <p className="paragraph">TVA : FR27841320484</p>
            <p className="paragraph">TVA non applicable Org. Form.</p>
          </div>
        </div>
        <nav>
          <ul className="footer__wrapper__navigation">
            <li>
              <a
                href="#"
                className="footer__wrapper__navigation__item nav_item"
              >
                Haut de la page
              </a>
            </li>
            <li>
              <a
                href="#"
                className="footer__wrapper__navigation__item nav_item"
              >
                Méthode
              </a>
            </li>
            <li>
              <a
                href="#"
                className="footer__wrapper__navigation__item nav_item"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="footer__wrapper__navigation__item nav_item"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
