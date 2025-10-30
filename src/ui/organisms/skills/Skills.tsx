import "./Skills.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import { skillsData } from "../../../data";

export const Skills = () => {
  const bandsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (bandsRef.current) {
      gsap.fromTo(
        bandsRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: bandsRef.current,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={bandsRef} className="bands">
      <Band
        items={skillsData.personality}
        bg="gray"
        size="small"
        weight="small"
        gap="medium"
        dir="right"
        uppercase
        separator="-"
      />
      <Band
        items={skillsData.technos}
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
        items={skillsData.missions}
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
