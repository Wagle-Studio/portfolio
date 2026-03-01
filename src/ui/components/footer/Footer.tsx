import "./footer.scss";
import data from "@/data/footer";

export const Footer = () => {
  const onNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToTop = data.navigation[0];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__divider" aria-hidden />
        <div className="footer__content">
          <div className="footer__brand">
            <h3>{data.brand.name}</h3>
            <p>{data.brand.author}</p>
          </div>
          <address className="footer__info">
            <p>{data.information.siret}</p>
            <p>{data.information.tva}</p>
            <p>{data.information.tvaNote}</p>
          </address>
          <p className="footer__copyright">{data.copyright}</p>
          {backToTop ? (
            <a
              href={backToTop.href}
              target={backToTop.target}
              className="footer__back-top"
              onClick={onNavClick}
            >
              {backToTop.text}
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
};
