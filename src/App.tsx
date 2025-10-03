import "./ui/globals.scss";
import { Route, Routes } from "react-router";
import { Footer, Portfolio, Header, Saas } from "./ui";

function App() {
  return (
    <div id="app" className="app">
      <Header />
      <Routes location={location}>
        <Route path="/" element={<Portfolio />} />
        <Route path="/saas" element={<Saas />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
