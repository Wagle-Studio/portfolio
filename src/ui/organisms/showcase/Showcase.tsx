import "./Showcase.scss";
import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { showcaseData } from "../../../data";
import { ButtonLink, Tag } from "../../atoms";
import { GitHubIcon } from "../../atoms/icons";

gsap.registerPlugin(ScrollTrigger);

const ROTATION_MS = 45000;

export const Showcase = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const itemsRef = useRef<HTMLElement[]>([]);

  const currentItem = useMemo(() => showcaseData.items[current], [current]);

  useEffect(() => {
    const targets = itemsRef.current.filter(Boolean);
    if (targets.length > 0) {
      gsap.fromTo(
        targets,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: targets[0],
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % showcaseData.items.length);
      setAnimKey((k) => k + 1);
    }, ROTATION_MS);
    return () => clearTimeout(id);
  }, [current]);

  const handleSelect = (index: number) => {
    setCurrent(index);
    setAnimKey((k) => k + 1);
  };

  return (
    <section
      id="showcase"
      className="showcase"
      aria-labelledby="showcase-title"
      style={{ ["--showcase-rotation" as any]: `${ROTATION_MS}ms` }}
    >
      <div className="showcase__title__wrapper">
        <h2 id="showcase-title" className="heading_2 showcase__title">
          {showcaseData.title}
        </h2>
      </div>

      <div className="showcase__card">
        <ul className="showcase__list" role="list" aria-label="Mises en avant">
          {showcaseData.items.map((item, index) => (
            <li key={index}>
              <article
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className={
                  index === current
                    ? "showcase__item showcase__item--active"
                    : "showcase__item"
                }
                onClick={() => handleSelect(index)}
                role="button"
                tabIndex={0}
                aria-pressed={index === current}
                aria-controls="showcase-frame showcase-data"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleSelect(index);
                }}
              >
                <header className="showcase__item-header">
                  <h3 className="heading_4">{item.title}</h3>
                  <ul
                    key={animKey}
                    className="showcase__item-tags-list"
                    aria-live="polite"
                  >
                    {(item.technos ?? []).map((techno: string, idx: number) => (
                      <li key={idx} className="showcase__item-tags-list-item">
                        <Tag size="small">{techno}</Tag>
                      </li>
                    ))}
                  </ul>
                </header>

                <div className="showcase__item-indicator" aria-hidden="true">
                  {index === current && (
                    <div
                      key={`${animKey}-${index}`}
                      className="showcase__item-progress showcase__item-progress--active"
                      style={{ animationDuration: `${ROTATION_MS}ms` }}
                    />
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="showcase__body">
          <div
            id="showcase-frame"
            className="showcase__frame"
            aria-hidden="true"
          >
            {currentItem.media && currentItem.media_type === "video" && (
              <video
                key={`${animKey}-${current}`}
                autoPlay
                loop
                muted
                playsInline
                className="showcase__video"
              >
                <source
                  src={
                    currentItem.media.startsWith("/")
                      ? currentItem.media
                      : `/${currentItem.media}`
                  }
                  type="video/webm"
                />
              </video>
            )}
            {currentItem.media && currentItem.media_type === "image" && (
              <div
                key={`${animKey}-${current}`}
                className="showcase__picture showcase__picture--active"
                style={{ backgroundImage: `url(${currentItem.media})` }}
                role="img"
                aria-label={currentItem.title}
              />
            )}
            </div>
          <div className="showcase__mobile-indicator" aria-hidden="true">
            <div
              key={`mobile-${animKey}-${current}`}
              className="showcase__mobile-progress"
              style={{ animationDuration: `${ROTATION_MS}ms` }}
            />
          </div>
          <div id="showcase-data" className="showcase__data">
            <div className="showcase__data__bottom">
              <ul className="showcase__data__bottom-list " aria-live="polite">
                <li className="showcase__data__bottom-item">
                  <ButtonLink
                    href={currentItem.website ?? ""}
                    disabled={!currentItem.website}
                    target="_blank"
                  >
                    Visiter
                  </ButtonLink>
                </li>
                {(currentItem.tags ?? []).map((tag: string, idx: number) => (
                  <li key={idx} className="showcase__data__bottom-item">
                    <Tag>{tag}</Tag>
                  </li>
                ))}
              </ul>
              <div className="showcase__data__bottom-links ">
                <ButtonLink
                  href={currentItem.git}
                  target="_blank"
                  variant="ghost"
                >
                  <GitHubIcon />
                </ButtonLink>
              </div>
            </div>

            <p className="paragraph showcase__item-subtitle showcase__item-subtitle--active">
              {currentItem.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
