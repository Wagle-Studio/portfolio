import "./projects.scss";
import { useState } from "react";
import clsx from "clsx";
import data from "@/data/projects";
import { ExternUrlIcon, GitHubIcon, StarIcon } from "@/ui/components/icons";
import { Tag } from "@/ui/components/tag/Tag";
import { useProjectsAnim } from "./useProjectsAnim";
import { SectionTitle } from "@/ui/components/section-title/SectionTitle";
import { DocsMention } from "@/ui/blocs/docs-mention/DocsMention";

const projects = data.items.map((item) => ({
  ...item,
  status: "status" in item ? item.status : undefined,
  features: "features" in item ? item.features : undefined,
  technicalNote: "technicalNote" in item ? item.technicalNote : undefined,
}));

export const Projects = () => {
  const { sectionRef } = useProjectsAnim();
  const [picked, setPicked] = useState(0);

  return (
    <section id="realisations" className="projects" ref={sectionRef}>
      <SectionTitle index={4} title="Réalisations" />
      <div className="projects__layout">
        <ul className="projects__list" aria-label="Mes projets">
          {projects.map((project, index) => (
            <li key={project.title}>
              <button
                type="button"
                className={clsx(
                  "projects__item",
                  index === picked && "is-picked",
                )}
                aria-pressed={index === picked}
                onMouseEnter={() => setPicked(index)}
                onFocus={() => setPicked(index)}
                onClick={() => setPicked(index)}
              >
                <span className="projects__item__head">
                  <span className="projects__item__title">{project.title}</span>
                  {project.status && (
                    <span className="projects__item__status">
                      {project.status}
                    </span>
                  )}
                </span>
                <span
                  className="projects__item__tags"
                  title={project.tags.join(" · ")}
                >
                  {project.tags.join(" · ")}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="projects__details" aria-live="polite">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={clsx(
                "projects__detail",
                index === picked && "is-shown",
                project.status && "projects__detail--ribbon",
              )}
            >
              {project.status && (
                <div className="projects__ribbon">
                  <span>{project.status}</span>
                </div>
              )}
              <header className="projects__detail__header">
                <h3 className="heading_4">{project.title}</h3>
                <div className="projects__detail__links">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Voir ${project.title} en ligne`}
                    >
                      <ExternUrlIcon size="medium" />
                    </a>
                  )}
                  {project.git && (
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Code de ${project.title} sur GitHub`}
                    >
                      <GitHubIcon size="medium" />
                    </a>
                  )}
                </div>
              </header>

              <p className="projects__detail__subtitle">{project.subtitle}</p>

              {project.features && project.features.length > 0 && (
                <ul className="projects__detail__features">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <span
                        className="projects__detail__dot"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <ul className="projects__detail__tags">
                {project.technos.map((techno) => (
                  <li key={`tech-${techno}`}>
                    <Tag size="small">{techno}</Tag>
                  </li>
                ))}
                {project.tags.map((tag) => (
                  <li key={`tag-${tag}`}>
                    <Tag size="small">
                      <StarIcon size="small" /> {tag}
                    </Tag>
                  </li>
                ))}
              </ul>

              {project.technicalNote && (
                <p className="projects__detail__note">
                  {project.technicalNote}
                </p>
              )}
            </article>
          ))}
        </div>

        <DocsMention className="projects__docs" />
      </div>
    </section>
  );
};
