import "./deck.scss";
import { useDeck } from "./deckContext";

const pad = (value: number) => String(value).padStart(2, "0");

// Barre du bas : position, pagination et bouton « Suivant »
export const DeckNav = () => {
  const { slides, activeIndex, goTo, next } = useDeck();
  const isLast = activeIndex === slides.length - 1;

  return (
    <nav className="deck-nav" aria-label="Écrans">
      <div className="deck-nav__inner">
        <p className="deck-nav__position" aria-live="polite">
          <span className="deck-nav__count">
            {pad(activeIndex + 1)} / {pad(slides.length)}
          </span>
          <span className="deck-nav__label">{slides[activeIndex].label}</span>
        </p>

        <ol className="deck-nav__dots">
          {slides.map((slide, index) => (
            <li key={slide.id}>
              <button
                type="button"
                className={index === activeIndex ? "is-current" : undefined}
                aria-label={`Aller à : ${slide.label}`}
                aria-current={index === activeIndex ? "step" : undefined}
                onClick={() => goTo(index)}
              />
            </li>
          ))}
        </ol>

        <button
          type="button"
          className="deck-nav__next"
          onClick={() => (isLast ? goTo(0) : next())}
        >
          {isLast ? "Revenir au début" : "Suivant"}
          <span aria-hidden="true">{isLast ? "↑" : "↓"}</span>
        </button>
      </div>
    </nav>
  );
};
