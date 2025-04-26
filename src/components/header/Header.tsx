import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__brand">
        <p className="brand">Kévin Wolff</p>
      </div>
      <nav>
        <ul className="header__nav">
          <li>
            <a className="nav_item" href="#">
              Méthode
            </a>
          </li>
          <li>
            <a className="nav_item" href="#">
              À propos
            </a>
          </li>
          <li>
            <a href="#" className="button">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
