import "@/ui/globals.scss";

import { Header } from "@/ui/components/header/Header";
import { Footer } from "@/ui/components/footer/Footer";
import { About } from "@/ui/blocs/about/About";
import { Skills } from "@/ui/blocs/skills/Skills";
import { Recommendations } from "@/ui/blocs/recommendations/Recommendations";
// import { Projects } from "@/ui/blocs/projects/Projects";

const App = () => {
  return (
    <div id="app" className="app">
      <Header />
      <main>
        <About />
        <Skills />
        <Recommendations />
        {/* <Projects /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
