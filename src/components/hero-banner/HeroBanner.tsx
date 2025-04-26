import "./HeroBanner.scss";
import { heroBannerData } from "../../data/hero-banner";

const HeroBanner = () => {
  const formatSubtitle = (text: string, strongParts: string[]) => {
    let formattedText = text;
    strongParts.forEach(part => {
      formattedText = formattedText.replace(part, `<strong>${part}</strong>`);
    });
    return formattedText;
  };

  return (
    <section className="hero_banner" aria-labelledby="hero-title">
      <div className="hero_banner__body">
        <h1 id="hero-title" className="heading_1">
          {heroBannerData.title.main}
          <br />
          {heroBannerData.title.sub}
        </h1>
        <p 
          className="hero_banner__body__subtitle paragraph"
          dangerouslySetInnerHTML={{
            __html: formatSubtitle(
              heroBannerData.subtitle.text,
              heroBannerData.subtitle.strongParts
            )
          }}
        />
      </div>
      <a 
        href={heroBannerData.cta.href} 
        className="button"
        aria-label={heroBannerData.cta.text}
      >
        {heroBannerData.cta.text}
      </a>
    </section>
  );
};

export default HeroBanner;
