import "./parcours.scss";
import { useState, type CSSProperties } from "react";
import data from "@/data/parcours";
import { SectionTitle } from "@/ui/components/section-title/SectionTitle";
import { useParcoursAnim } from "./useParcoursAnim";

const now = new Date();
const CURRENT_MONTH = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

const yearOf = (date: string) => Number(date.slice(0, 4));

const DOMAIN_START = Math.min(
  ...data.experiences.map((experience) => yearOf(experience.start)),
);
const DOMAIN_END = Math.max(now.getFullYear() + 1, DOMAIN_START + 1);
const DOMAIN_MONTHS = (DOMAIN_END - DOMAIN_START) * 12;

// Position en % d'un mois "AAAA-MM" sur l'axe ; `endOfMonth` vise la fin du mois.
const toPercent = (date: string, endOfMonth = false) => {
  const [year, month] = date.split("-").map(Number);
  const months =
    (year - DOMAIN_START) * 12 + (month - 1) + (endOfMonth ? 1 : 0);
  return Math.min(100, Math.max(0, (months / DOMAIN_MONTHS) * 100));
};

const formatYears = (start: string, end?: string) => {
  if (!end) return `${yearOf(start)} – aujourd'hui`;
  if (yearOf(start) === yearOf(end)) return `${yearOf(start)}`;
  return `${yearOf(start)} – ${yearOf(end)}`;
};

const years = Array.from(
  { length: DOMAIN_END - DOMAIN_START },
  (_, index) => DOMAIN_START + index,
);

const bars = data.experiences.map((experience, index) => {
  const x = toPercent(experience.start);
  const w = toPercent(experience.end ?? CURRENT_MONTH, true) - x;
  return {
    ...experience,
    x,
    w,
    index,
    dates: formatYears(experience.start, experience.end),
    // Libellé à gauche de la barre quand elle finit trop près du bord droit
    labelBefore: x + w > 72,
  };
});

type FriseStyle = CSSProperties & Record<`--${string}`, string | number>;

export const Parcours = () => {
  const { sectionRef } = useParcoursAnim();
  const [picked, setPicked] = useState(bars.length - 1);

  return (
    <section id="parcours" className="parcours" ref={sectionRef}>
      <SectionTitle index={2} title={data.title} />
      <div className="parcours__body">
        <div className="parcours__frise">
          <div className="parcours__axis" aria-hidden="true">
            {years.map((year) => (
              <span
                key={year}
                style={
                  {
                    "--x": `${((year - DOMAIN_START) / (DOMAIN_END - DOMAIN_START)) * 100}%`,
                  } as FriseStyle
                }
              >
                {year}
              </span>
            ))}
          </div>

          <ol
            className="parcours__bars"
            aria-label="Mes postes, du plus ancien au plus récent"
          >
            {bars.map((bar) => (
              <li
                key={bar.name}
                className={[
                  bar.index === picked ? "is-picked" : "",
                  bar.labelBefore ? "is-before" : "",
                ].join(" ")}
                style={{ "--x": `${bar.x}%`, "--w": `${bar.w}%` } as FriseStyle}
              >
                <button
                  type="button"
                  aria-pressed={bar.index === picked}
                  onMouseEnter={() => setPicked(bar.index)}
                  onFocus={() => setPicked(bar.index)}
                  onClick={() => setPicked(bar.index)}
                >
                  <i className="parcours__bar" aria-hidden="true" />
                  <span className="parcours__bar-name">
                    {bar.name}{" "}
                    <span className="parcours__sr-only">{bar.dates}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="parcours__detail" aria-live="polite">
          {bars.map((bar) => (
            <div
              key={bar.name}
              className={`parcours__detail__item${bar.index === picked ? " is-shown" : ""}`}
            >
              <p className="parcours__detail__line">
                <span className="parcours__detail__name">{bar.name}</span>
                <span className="parcours__detail__meta">{bar.meta}</span>
                <span className="parcours__detail__dates">{bar.dates}</span>
              </p>
              <p className="parcours__detail__text">
                <span className="parcours__detail__text--long">{bar.text}</span>
                <span className="parcours__detail__text--short">
                  {bar.shortText}
                </span>
              </p>
              {bar.tools.length > 0 && (
                <p className="parcours__detail__tools">
                  {bar.tools.join(" · ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
