import "./MVP.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mvpData } from "./../../data/mvp";

gsap.registerPlugin(ScrollTrigger);

const MVP = () => {
  const tagsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (tagsRef.current.length > 0) {
      gsap.fromTo(
        tagsRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: tagsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="MVP" aria-labelledby="mvp-title">
      <header className="MVP__header">
        <h2 id="mvp-title" className="heading_2">
          {mvpData.title}
        </h2>
        <div className="MVP__header__subtitles">
          {mvpData.subtitles.map((subtitle, index) => (
            <p key={index} className="paragraph">
              {subtitle}
            </p>
          ))}
        </div>
      </header>
      <div className="MVP__punchline" aria-label="Punchlines">
        {mvpData.punchlines.map((punchline, index) => (
          <div
            ref={(el) => {
              if (el) tagsRef.current[index] = el;
            }}
            key={index}
            className="MVP__punchline__item"
          >
            <p className="paragraph">{punchline}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MVP;
