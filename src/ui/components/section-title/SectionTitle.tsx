import "./section-title.scss";

interface SectionTitleProps {
  index: number;
  title: string;
}

export const SectionTitle = ({ index, title }: SectionTitleProps) => {
  return (
    <h2 className="heading_3 section__title">
      <span className="section__title__index">
        {index < 9 ? `0${index}` : index}.
      </span>
      {title}
    </h2>
  );
};
