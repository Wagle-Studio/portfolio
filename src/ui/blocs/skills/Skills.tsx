import "./skills.scss";
import data from "@/data/skills";
import clsx from "clsx";
import { useSkillsAnim } from "./useSkillsAnim";

export const Skills = () => {
  const { sectionRef } = useSkillsAnim();

  return (
    <section className="bands" ref={sectionRef}>
      <Band
        items={data.personality}
        bg="gray"
        size="small"
        weight="small"
        gap="medium"
        dir="right"
        uppercase
        separator="-"
      />
      <Band
        items={data.technos}
        bg="white"
        color="primary"
        size="large"
        weight="large"
        gap="medium"
        dir="left"
        uppercase
        separator=" "
      />
      <Band
        items={data.missions}
        bg="secondary"
        size="medium"
        weight="medium"
        gap="small"
        dir="right"
        separator="•"
      />
    </section>
  );
};

interface BandProps {
  items: { label: string }[];
  bg?: "gray" | "white" | "secondary";
  color?: "default" | "primary";
  size?: "small" | "medium" | "large";
  weight?: "small" | "medium" | "large";
  gap?: "small" | "medium" | "large";
  dir?: "left" | "right";
  uppercase?: boolean;
  separator?: string;
}

const Band = ({
  items,
  bg = "white",
  color = "default",
  size = "medium",
  weight = "medium",
  gap = "medium",
  dir = "left",
  uppercase = false,
  separator,
}: BandProps) => {
  const content = items.map((i) => i.label);

  const withSep =
    separator && content.length
      ? content.flatMap((item) => [item, separator])
      : content;

  const bandClasses = clsx(
    "band",
    `band--bg-${bg}`,
    `band--color-${color}`,
    `band--size-${size}`,
    `band--gap-${gap}`,
    `band--weight-${weight}`,
    `band--dir-${dir}`
  );

  return (
    <div className={bandClasses} aria-hidden={false}>
      <div className="band__track">
        <ul className="band__list" aria-hidden="true">
          {withSep.map((t, i) => (
            <li className="paragraph band__item" key={`a-${i}`}>
              {uppercase ? t.toUpperCase() : t}
            </li>
          ))}
        </ul>
        <ul className="band__list" aria-hidden="true">
          {withSep.map((t, i) => (
            <li className="paragraph band__item" key={`b-${i}`}>
              {uppercase ? t.toUpperCase() : t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
