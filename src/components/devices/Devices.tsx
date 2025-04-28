import "./Devices.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import strongPartsFormater from "./../../utils/strongPartsFormater";
import { devicesData } from "./../../data/devices";

gsap.registerPlugin(ScrollTrigger);

const Devices = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const pictureRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    gsap.fromTo(
        pictureRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: pictureRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section id="devices" className="devices" aria-labelledby="devices-title">
      <img
        ref={pictureRef}
        className="devices__illustration"
        src={devicesData.illustration}
        alt={devicesData.illustrationAlt}
        aria-hidden="true"
      />
      <header className="devices__header">
        <div className="devices__header__title">
          <h2 ref={titleRef} id="devices-title" className="heading_2">
            {devicesData.title}
          </h2>
        </div>
        {devicesData.subtitles.map((subtitle, index) => (
          <p
            key={index}
            className="paragraph"
            dangerouslySetInnerHTML={{
              __html: strongPartsFormater(
                subtitle.content,
                subtitle.strongParts
              ),
            }}
          />
        ))}
      </header>
    </section>
  );
};

export default Devices;
