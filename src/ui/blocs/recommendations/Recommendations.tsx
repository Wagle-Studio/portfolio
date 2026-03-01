import "./recommendations.scss";
import data from "@/data/recommendations";
import { useRecommendationsAnim } from "./useRecommendationsAnim";
import { SectionTitle } from "@/ui/components/section-title/SectionTitle";

export const Recommendations = () => {
  const { sectionRef } = useRecommendationsAnim();

  return (
    <section id="recommendations" className="recommendations" ref={sectionRef}>
      <SectionTitle index={2} title={data.title} />
      <ul className="recommendations__list">
        {data.items.map((item, index) => {
          return (
            <li
              key={`${item.fullName}-${index}`}
              className="recommendations__list__item"
            >
              <article className="recommendations__list__item__card">
                <div className="recommendations__list__item__card__content">
                  {getParagraphs(item.text).map((paragraph, pIndex) => (
                    <p
                      key={`${item.fullName}-${pIndex}`}
                      className="paragraph recommendations__list__item__card__text"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="recommendations__list__item__card__header">
                  <div className="recommendations__list__item__card__avatar">
                    <img
                      src={item.avatar}
                      alt={`Photo de ${item.fullName}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="recommendations__list__item__card__identity">
                    <h3 className="heading_4 recommendations__list__item__card__name">
                      {item.fullName}
                    </h3>
                    <p className="recommendations__list__item__card__role">
                      {item.role}
                    </p>
                  </div>
                  <p className="recommendations__list__item__card__source">
                    {item.source}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const getParagraphs = (value: string) => {
  if (!value) return [];

  return value
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
};
