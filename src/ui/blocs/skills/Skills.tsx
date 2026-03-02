import "./skills.scss";
import data from "@/data/skills";
import { useSkillsAnim } from "./useSkillsAnim";
import { SectionTitle } from "@/ui/components/section-title/SectionTitle";

export const Skills = () => {
  const { sectionRef } = useSkillsAnim();

  return (
    <section id="expertise" className="skills" ref={sectionRef}>
      <SectionTitle index={1} title="Expertise" />
      <article className="skills__stack">
        <h3 className="skills__stack__title">Stack technique</h3>
        <ul className="skills__stack__list skills__stack__list--techno">
          {data.technos.map((techno) => (
            <li
              key={`techno_${techno.label}`}
              className="skills__stack__list__item skills__stack__list__item--techno"
            >
              <p className="skills__stack__list__item--label-techno">
                {techno.label}
              </p>
              <p className="skills__stack__list__item--level">{techno.level}</p>
            </li>
          ))}
        </ul>
      </article>
      <article className="skills__stack">
        <h3 className="skills__stack__title">Domaines d'intervention</h3>
        <ul className="skills__stack__list">
          {data.missions.map((mission) => (
            <li
              key={`mission_${mission.label}`}
              className="skills__stack__list__item skills__stack__list__item--domain"
            >
              <p className="skills__stack__list__item--label-domain">
                {mission.label}
              </p>
            </li>
          ))}
        </ul>
      </article>
      <article className="skills__stack">
        <h3 className="skills__stack__title">Competences transversales</h3>
        <ul className="skills__stack__list">
          {data.personality.map((personality) => (
            <li
              key={`personality_${personality.label}`}
              className="skills__stack__list__item skills__stack__list__item--soft"
            >
              <p className="skills__stack__list__item--label-soft">
                {personality.label}
              </p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
