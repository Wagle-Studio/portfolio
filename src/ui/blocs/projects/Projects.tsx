import "./projects.scss";
import data from "@/data/projects";
import {
  ExternUrlIcon,
  FigmaIcon,
  GitHubIcon,
  StarIcon,
} from "@/ui/components/icons";
import { Tag } from "@/ui/components/tag/Tag";
import { useProjectsAnim } from "./useProjectsAnim";
import { SectionTitle } from "@/ui/components/section-title/SectionTitle";

export const Projects = () => {
  const { sectionRef } = useProjectsAnim();

  return (
    <section id="realisations" className="projects" ref={sectionRef}>
      <SectionTitle index={3} title="Réalisations" />
      <ul className="projects__list">
        {data.items.map((item) => {
          return (
            <li key={`${item.title}-${item.git ?? item.url ?? "project"}`}>
              <article className="projects__list__card">
                <div className="projects__list__card__content">
                  <div className="projects__list__card__header">
                    <div className="projects__list__card__title">
                      <h3 className="heading_4">{item.title}</h3>
                      <div className="projects__list__card__title--actions">
                        {item.url && (
                          <a href={item.url} target="_blank" rel="noreferrer noopener">
                            <ExternUrlIcon size="medium" />
                          </a>
                        )}
                        {item.git && (
                          <a href={item.git} target="_blank" rel="noreferrer noopener">
                            <GitHubIcon size="medium" />
                          </a>
                        )}
                        {item.figma && (
                          <a href={item.figma} target="_blank" rel="noreferrer noopener">
                            <FigmaIcon size="medium" />
                          </a>
                        )}
                      </div>
                    </div>
                    <ul className="projects__list__card__body__tags">
                      {item.technos.map((techno) => (
                        <li key={`${item.title}-tech-${techno}`}>
                          <Tag size="small">{techno}</Tag>
                        </li>
                      ))}
                      {item.tags.map((tag) => (
                        <li key={`${item.title}-tag-${tag}`}>
                          <Tag size="small">
                            <StarIcon size="small" /> {tag}
                          </Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="projects__list__card__body">
                    <p className="paragraph">{item.subtitle}</p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
