import "./learning.scss";
import data from "@/data/learning";
import { Tag } from "@/ui/components/tag/Tag";
import { useLearningAnim } from "./useLearningAnim";

export const Learning = () => {
  const { sectionRef } = useLearningAnim();

  return (
    <section id="montee-competence" className="learning" ref={sectionRef}>
      <div className="learning__header">
        <div className="learning__header__title">
          <h3 className="heading_4">{data.title}</h3>
        </div>
        <Tag variant="status">En cours</Tag>
      </div>
      <p className="learning__context">{data.context}</p>
      <ul className="learning__axes">
        {data.axes.map((axis) => (
          <li key={axis.label} className="learning__axes__item">
            <p className="learning__axes__item__label">{axis.label}</p>
            <p className="learning__axes__item__technos">
              {axis.technos.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
