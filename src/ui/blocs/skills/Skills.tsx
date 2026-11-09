import "./skills.scss";
import data from "@/data/skills";
import { useSkillsAnim } from "./useSkillsAnim";
import { SectionTitle } from "@/ui/components/section-title/SectionTitle";

const TECHNO_CATEGORY_LABELS = {
  backend: "Backend",
  frontend: "Frontend",
  infra: "Infra & data",
} as const;

type TechnoCategory = keyof typeof TECHNO_CATEGORY_LABELS;

export const Skills = () => {
  const { sectionRef } = useSkillsAnim();

  const technoCategories = Object.entries(data.technos) as [
    TechnoCategory,
    { label: string; level: string }[],
  ][];

  return (
    <section id="expertise" className="skills" ref={sectionRef}>
      <SectionTitle index={1} title="Expertise" />
      <div className="skills__columns">
        <article className="skills__stack">
          <h3 className="skills__stack__title">Stack technique</h3>
          <div className="skills__stack__categories">
            {technoCategories.map(([category, technos]) => (
              <div key={category} className="skills__stack__category">
                <p className="skills__stack__category__label">
                  {TECHNO_CATEGORY_LABELS[category]}
                </p>
                <ul className="skills__chips">
                  {technos.map((techno) => (
                    <li
                      key={`techno_${techno.label}`}
                      className="skills__chip skills__chip--techno"
                    >
                      <span className="skills__chip__label">
                        {techno.label}
                      </span>
                      <span
                        className={`skills__chip__level${
                          techno.level === "Avancé"
                            ? " skills__chip__level--high"
                            : ""
                        }`}
                      >
                        {techno.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <div className="skills__side">
          <article className="skills__stack">
            <h3 className="skills__stack__title">Domaines d'intervention</h3>
            <ul className="skills__chips">
              {data.missions.map((mission) => (
                <li
                  key={`mission_${mission.label}`}
                  className="skills__chip skills__chip--domain"
                >
                  {mission.label}
                </li>
              ))}
            </ul>
          </article>
          <article className="skills__stack">
            <h3 className="skills__stack__title">Compétences transversales</h3>
            <ul className="skills__chips">
              {data.personality.map((personality) => (
                <li
                  key={`personality_${personality.label}`}
                  className="skills__chip skills__chip--soft"
                >
                  {personality.label}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
