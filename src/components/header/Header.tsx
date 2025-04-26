import "./Header.scss";
import { headerData } from "../../data/header";

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header__brand">
        <p className="brand">{headerData.brand.name}</p>
      </div>
      <nav aria-label="Navigation principale">
        <ul className="header__nav" role="list">
          {headerData.navigation.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className={item.className}
                aria-label={item.text}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
