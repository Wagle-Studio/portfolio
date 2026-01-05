import "./recommendations.scss";
import data from "@/data/recommendations";
import { Tag } from "@/ui/components/tag/Tag";
import { useRecommendationsAnim } from "./useRecommendationsAnim";

export const Recommendations = () => {
  const { sectionRef } = useRecommendationsAnim();

  return (
    <section
      id="recommendations"
      className="recommendations"
      ref={sectionRef}
    >
      <h2 className="heading_2">{data.title}</h2>
      <ul className="recommendations__list">
        {data.items.map((item, index) => {
          return (
            <li key={`${item.fullName}-${index}`}>
              <article className="recommendations__card">
                <header className="recommendations__card__header">
                  <div className="recommendations__card__avatar">
                    <img
                      src={item.avatar}
                      alt={`Photo de ${item.fullName}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="recommendations__card__identity">
                    <h3 className="heading_4 recommendations__card__name">
                      {item.fullName}
                    </h3>
                    <p className="recommendations__card__role">{item.role}</p>
                  </div>
                </header>
                {getParagraphs(item.text).map((paragraph, pIndex) => (
                  <p
                    key={`${item.fullName}-${pIndex}`}
                    className="paragraph recommendations__card__text"
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="recommendations__source">
                  {item.source && (
                    <Tag size="small" variant="default">
                      source : {item.source}
                    </Tag>
                  )}
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
