import "./footer.scss";
import data from "@/data/footer";
import { ArrowUpIcon } from "@/ui/components/icons";

export const Footer = () => {
  const onNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [backToTop] = data.navigation;

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__divider" aria-hidden />
        <div className="footer__content">
          <div className="footer__brand">
            <h3 className="footer__brand-title">{data.brand.name}</h3>
            <p className="footer__brand-author">{data.brand.author}</p>
          </div>
          <address className="footer__info">
            <p className="footer__info-item">{data.information.siret}</p>
            <p className="footer__info-item">{data.information.tva}</p>
            <p className="footer__info-item">{data.information.tvaNote}</p>
          </address>
          <p className="footer__copyright">{data.copyright}</p>
          {backToTop ? (
            <a
              href={backToTop.href}
              target={backToTop.target}
              className="footer__back-to-top"
              onClick={onNavClick}
            >
              {backToTop.text}
              <ArrowUpIcon />
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
};
