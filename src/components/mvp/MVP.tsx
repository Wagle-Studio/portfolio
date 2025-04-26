import "./MVP.scss";
import { mvpData } from "../../data/mvp";

const MVP = () => {
  return (
    <section className="MVP" aria-labelledby="mvp-title">
      <header className="MVP__header">
        <h2 id="mvp-title" className="heading_2">{mvpData.title}</h2>
        <div className="MVP__header__subtitles">
          {mvpData.subtitles.map((subtitle, index) => (
            <p key={index} className="paragraph">{subtitle}</p>
          ))}
        </div>
      </header>
      <div className="MVP__tags" role="list" aria-label="Avantages du MVP">
        {mvpData.tags.map((tagGroup, groupIndex) => (
          <div key={groupIndex} className="MVP__tags__wrapper" role="listitem">
            {tagGroup.map((tag, tagIndex) => (
              <p 
                key={tagIndex} 
                className="MVP__tags__wrapper__tag paragraph"
                role="listitem"
              >
                {tag}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="MVP__punchline" role="list" aria-label="Punchlines">
        {mvpData.punchlines.map((punchline, index) => (
          <div 
            key={index} 
            className="MVP__punchline__item"
            role="listitem"
          >
            <p className="paragraph">{punchline}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MVP;
