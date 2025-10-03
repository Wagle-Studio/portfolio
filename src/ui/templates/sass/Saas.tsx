import { useLocation } from "react-router";
import { Devices, Examples, HeroBanner, MVP, Process } from "../../organisms";

export const Saas = () => {
  const location = useLocation();

  return (
    <main key={location.pathname} className="page-transition">
      <HeroBanner />
      <Process />
      <Devices />
      <Examples />
      <MVP />
    </main>
  );
};
