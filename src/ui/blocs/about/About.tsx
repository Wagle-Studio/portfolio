import "./about.scss";
import data from "@/data/about";
import { createElement } from "react";
import { Tag } from "@/ui/components/tag/Tag";
import { useAboutAnim } from "./useAboutAnim";

export const About = () => {
  const { sectionRef } = useAboutAnim();

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__wrapper">
        <div className="about__header">
          <div className="about__header__name">
            <Tag variant="status">Disponible CDI Paris</Tag>
            <h2 className="heading_1">{data.profile.name}</h2>
          </div>
          <h3 className="about__header__title heading_3">
            <strong>{data.profile.role}</strong>
          </h3>
        </div>
        <div className="about__body">
          {data.profile.paragraphs.map((paragraph) => (
            <p
              key={paragraph.text}
              className="paragraph"
              dangerouslySetInnerHTML={{
                __html: strongPartsFormatter(
                  paragraph.text,
                  paragraph.strongParts
                ),
              }}
            />
          ))}
        </div>
        <ul className="about__tags">
          {data.profile.tags.map((tag) => (
            <li key={tag.label} className="about__tags-item">
              <Tag>
                {tag.icon && createElement(tag.icon, { size: "medium" })}
                {tag.label}
              </Tag>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const strongPartsFormatter = (text: string, strongParts?: string[]) => {
  if (!strongParts || strongParts.length === 0) {
    return text;
  }

  let formattedText = text;
  strongParts.forEach((part) => {
    const escapedPart = part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedPart, "g");
    formattedText = formattedText.replace(
      regex,
      `<strong class="paragraph--strong">${part}</strong>`
    );
  });

  return formattedText;
};
