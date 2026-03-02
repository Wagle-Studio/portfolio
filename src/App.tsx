import "@/ui/globals.scss";
import { useContext } from "react";
import { Header } from "@/ui/components/header/Header";
import { About } from "@/ui/blocs/about/About";
import { Skills } from "@/ui/blocs/skills/Skills";
import { Recommendations } from "@/ui/blocs/recommendations/Recommendations";
import { Projects } from "@/ui/blocs/projects/Projects";
import { Contact } from "@/ui/blocs/contact/Contact";
import { Footer } from "@/ui/components/footer/Footer";
import { AppContext } from "@/ui/AppContext";

const App = () => {
  const { isDarkMode } = useContext(AppContext);

  return (
    <div id="app" className={`app ${isDarkMode ? "app--dark" : ""}`}>
      <Header />
      <main>
        <About />
        <Skills />
        <Recommendations />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
