import "@/ui/globals.scss";
import "@/ui/deck/deck.scss";
import { useContext } from "react";
import clsx from "clsx";
import { Header } from "@/ui/components/header/Header";
import { About } from "@/ui/blocs/about/About";
import { Skills } from "@/ui/blocs/skills/Skills";
import { Parcours } from "@/ui/blocs/parcours/Parcours";
import { Recommendations } from "@/ui/blocs/recommendations/Recommendations";
import { Projects } from "@/ui/blocs/projects/Projects";
import { Footer } from "@/ui/components/footer/Footer";
import { AppContext } from "@/ui/AppContext";
import { useDeck } from "@/ui/deck/deckContext";
import { Slide } from "@/ui/deck/Slide";
import { DeckNav } from "@/ui/deck/DeckNav";

const App = () => {
  const { isDarkMode } = useContext(AppContext);
  const { isDeck } = useDeck();

  return (
    <div
      id="app"
      className={clsx("app", isDarkMode && "app--dark", isDeck && "app--deck")}
    >
      <div className="app__backdrop" aria-hidden="true" />
      <Header />
      <main className="deck">
        <Slide id="about">
          <About />
        </Slide>
        <Slide id="expertise">
          <Skills />
        </Slide>
        <Slide id="parcours">
          <Parcours />
        </Slide>
        <Slide id="recommendations">
          <Recommendations />
        </Slide>
        <Slide id="realisations">
          <Projects />
        </Slide>
      </main>
      {isDeck ? <DeckNav /> : <Footer />}
    </div>
  );
};

export default App;
