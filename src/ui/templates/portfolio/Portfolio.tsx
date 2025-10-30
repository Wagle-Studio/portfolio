import { useLocation } from "react-router";
import { About, Projects, Skills } from "../../organisms";

export const Portfolio = () => {
  const location = useLocation();

  return (
    <main key={location.pathname} className="page-transition">
      <About />
      <Skills />
      <Projects />
    </main>
  );
};
