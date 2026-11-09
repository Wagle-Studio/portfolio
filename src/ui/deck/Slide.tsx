import type { ReactNode } from "react";
import clsx from "clsx";
import { useDeck } from "./deckContext";

interface SlideProps {
  id: string;
  children: ReactNode;
}

// Un écran du diaporama. En défilement classique, simple conteneur sans effet.
export const Slide = ({ id, children }: SlideProps) => {
  const { isDeck, activeId } = useDeck();
  const isHidden = isDeck && activeId !== id;

  return (
    <div
      className={clsx("deck__slide", isDeck && !isHidden && "is-on")}
      data-slide={id}
      aria-hidden={isHidden || undefined}
      inert={isHidden || undefined}
    >
      <div className="deck__slide__inner">{children}</div>
    </div>
  );
};
