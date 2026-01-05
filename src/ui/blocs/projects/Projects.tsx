import "./projects.scss";
import data from "@/data/projects";
import {
  ExternUrlIcon,
  FigmaIcon,
  GitHubIcon,
  StarIcon,
} from "@/ui/components/icons";
import { Tag } from "@/ui/components/tag/Tag";
import { ButtonLink } from "@/ui/components/button-link/ButtonLink";
import { useProjectsAnim } from "./useProjectsAnim";

export const Projects = () => {
  const { sectionRef } = useProjectsAnim();

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <h2 className="heading_2">Projets</h2>
      <ul className="projects__list">
        {data.items.map((item, index) => {
          const hasMedia = Boolean(item.media);

          return (
            <li key={index}>
              <article className="projects__list__card">
                <div
                  className={
                    hasMedia
                      ? "projects__list__card__picture"
                      : "projects__list__card__picture projects__list__card__picture--empty"
                  }
                  style={
                    hasMedia ? { backgroundImage: `url(${item.media})` } : undefined
                  }
                  role={hasMedia ? "img" : undefined}
                  aria-label={hasMedia ? item.title : undefined}
                >
                  {!hasMedia && (
                    <span className="projects__list__card__picture__placeholder">
                      Aperçu non disponible
                    </span>
                  )}
                </div>
                <div className="projects__list__card__content">
                  <div className="projects__list__card__header">
                    <h3 className="heading_4">{item.title}</h3>
                    <ul className="projects__list__card__body__tags">
                      {item.technos.map((techno, idx) => (
                        <li key={idx} className="showcase__item-tags-list-item">
                          <Tag size="small">{techno}</Tag>
                        </li>
                      ))}
                      {item.tags.map((tag, idx) => (
                        <li key={idx} className="showcase__data__bottom-item">
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
                  <div className="projects__list__card__links projects__list__card__footer__links--mobile">
                    {item.url && (
                      <ButtonLink size="small" href={item.url} target="_blank">
                        <ExternUrlIcon size="medium" /> Visiter
                      </ButtonLink>
                    )}
                    {item.git && (
                      <ButtonLink size="small" href={item.git} target="_blank">
                        <GitHubIcon size="medium" /> GitHub
                      </ButtonLink>
                    )}
                    {item.figma && (
                      <ButtonLink size="small" href={item.figma} target="_blank">
                        <FigmaIcon size="medium" /> Figma
                      </ButtonLink>
                    )}
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
