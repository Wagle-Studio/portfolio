import { useLocation } from "react-router";
import { About, Showcase } from "../../organisms";

export const Portfolio = () => {
  const location = useLocation();

  return (
    <main key={location.pathname} className="page-transition">
      <About />
      <Showcase />
    </main>
  );
};
