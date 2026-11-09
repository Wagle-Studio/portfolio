import { createContext, useContext } from "react";
import slides from "@/data/slides";

export interface DeckValues {
  /** Diaporama actif (grand écran) ; sinon la page défile normalement. */
  isDeck: boolean;
  activeIndex: number;
  activeId: string;
  slides: typeof slides;
  goTo: (target: number | string) => void;
  next: () => void;
  prev: () => void;
}

export const DeckContext = createContext<DeckValues>({
  isDeck: false,
  activeIndex: 0,
  activeId: slides[0].id,
  slides,
  goTo: () => {},
  next: () => {},
  prev: () => {},
});

export const useDeck = () => useContext(DeckContext);

// Le diaporama n'a de sens que si un écran entier tient dans la fenêtre.
export const DECK_MEDIA_QUERY = "(min-width: 992px) and (min-height: 700px)";
