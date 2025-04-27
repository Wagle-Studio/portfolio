import "./HeroBanner.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroBannerData } from "./../../data/hero-banner";
import strongPartsFormater from "./../../utils/strongPartsFormater";

gsap.registerPlugin(ScrollTrigger);

const HeroBanner = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const CTARef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const animateElement = (
      element: HTMLElement | null,
      options: { fromY: number; delay?: number }
    ) => {
      if (!element) return;

      gsap.fromTo(
        element,
        { opacity: 0, y: options.fromY },
        {
          opacity: 1,
          y: 0,
          delay: options.delay || 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    };

    animateElement(titleRef.current, { fromY: -30 });
    animateElement(subtitleRef.current, { fromY: 30 });
    animateElement(CTARef.current, { fromY: 30, delay: 0.3 });
  }, []);

  return (
    <section className="hero_banner" aria-labelledby="hero-title">
      <div className="hero_banner__body">
        <h1 ref={titleRef} id="hero-title" className="heading_1">
          {heroBannerData.title.main}
          <br />
          {heroBannerData.title.sub}
        </h1>
        <p
          ref={subtitleRef}
          className="hero_banner__body__subtitle paragraph"
          dangerouslySetInnerHTML={{
            __html: strongPartsFormater(
              heroBannerData.subtitle.text,
              heroBannerData.subtitle.strongParts
            ),
          }}
        />
      </div>
      <a ref={CTARef} href={heroBannerData.cta.href} className="button">
        {heroBannerData.cta.text}
      </a>
    </section>
  );
};

export default HeroBanner;
