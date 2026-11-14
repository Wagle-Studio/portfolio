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
    row: "row" in experience ? experience.row : experience.name,
    isFormation: "kind" in experience && experience.kind === "formation",
    x,
    w,
    index,
    dates: formatYears(experience.start, experience.end),
  };
});

type Bar = (typeof bars)[number];

// Une ligne de la frise : les entrées consécutives de même `row` y sont regroupées
const rows = bars.reduce<Bar[][]>((acc, bar) => {
  const last = acc[acc.length - 1];
  if (last && last[0].row === bar.row) last.push(bar);
  else acc.push([bar]);
  return acc;
}, []);

const rowSpan = (row: Bar[]) => {
  const x = row[0].x;
  const end = row[row.length - 1];
  const w = end.x + end.w - x;
  // Libellé à gauche de la ligne quand elle finit trop près du bord droit
  return { x, w, labelBefore: x + w > 72 };
};

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
            aria-label="Mes postes et formations, du plus ancien au plus récent"
          >
            {rows.map((row) => {
              const span = rowSpan(row);
              const lastIndex = row[row.length - 1].index;
              return (
                <li
                  key={`${row[0].name}-${row[0].start}`}
                  className={[
                    row.some((bar) => bar.index === picked) ? "is-picked" : "",
                    span.labelBefore ? "is-before" : "",
                    row[0].isFormation ? "is-formation" : "",
                  ].join(" ")}
                  style={
                    { "--x": `${span.x}%`, "--w": `${span.w}%` } as FriseStyle
                  }
                >
                  {row.map((bar, position) => (
                    <button
                      key={bar.start}
                      type="button"
                      className={[
                        bar.index === picked ? "is-picked" : "",
                        position > 0 ? "is-joined" : "",
                      ].join(" ")}
                      style={
                        { "--x": `${bar.x}%`, "--w": `${bar.w}%` } as FriseStyle
                      }
                      aria-pressed={bar.index === picked}
                      onMouseEnter={() => setPicked(bar.index)}
                      onFocus={() => setPicked(bar.index)}
                      onClick={() => setPicked(bar.index)}
                    >
                      <i className="parcours__bar" aria-hidden="true" />
                      <span className="parcours__sr-only">
                        {bar.name}
                        {row.length > 1 && ` · ${bar.meta}`} {bar.dates}
                      </span>
                    </button>
                  ))}
                  <span
                    className="parcours__bar-name"
                    aria-hidden="true"
                    onMouseEnter={() => setPicked(lastIndex)}
                    onClick={() => setPicked(lastIndex)}
                  >
                    {row[0].row}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="parcours__detail" aria-live="polite">
          {bars.map((bar) => (
            <div
              key={`${bar.name}-${bar.start}`}
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
