import "./recommendations.scss";
import { useState } from "react";
import clsx from "clsx";
import data from "@/data/recommendations";
import { useRecommendationsAnim } from "./useRecommendationsAnim";
import { SectionTitle } from "@/ui/components/section-title/SectionTitle";

const getParagraphs = (value: string) =>
  value
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

export const Recommendations = () => {
  const { sectionRef } = useRecommendationsAnim();
  const [picked, setPicked] = useState(0);

  return (
    <section id="recommendations" className="recommendations" ref={sectionRef}>
      <SectionTitle index={3} title={data.title} />
      <div className="recommendations__layout">
        <ul
          className="recommendations__people"
          aria-label="Personnes qui me recommandent"
        >
          {data.items.map((item, index) => (
            <li key={item.fullName}>
              <button
                type="button"
                className={clsx(
                  "recommendations__person",
                  index === picked && "is-picked",
                )}
                aria-pressed={index === picked}
                onMouseEnter={() => setPicked(index)}
                onFocus={() => setPicked(index)}
                onClick={() => setPicked(index)}
              >
                <img
                  className="recommendations__person__avatar"
                  src={item.avatar}
                  alt=""
                  loading="lazy"
                />
                <span className="recommendations__person__identity">
                  <span className="recommendations__person__name">
                    {item.fullName}
                  </span>
                  <span className="recommendations__person__role">
                    {item.role}
                  </span>
                </span>
                <span className="recommendations__person__source">
                  {item.source}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="recommendations__quotes" aria-live="polite">
          {data.items.map((item, index) => (
            <figure
              key={item.fullName}
              className={clsx(
                "recommendations__quote",
                index === picked && "is-shown",
              )}
            >
              <span className="recommendations__quote__mark" aria-hidden="true">
                “
              </span>
              <blockquote className="recommendations__quote__body">
                {getParagraphs(item.text).map((paragraph) => (
                  <p key={paragraph} className="recommendations__quote__text">
                    {paragraph}
                  </p>
                ))}
              </blockquote>
              <figcaption className="recommendations__quote__author">
                {item.fullName} · {item.role} · via {item.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
