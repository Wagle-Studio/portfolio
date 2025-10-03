import "./App.scss";
import Header from "./components/header/Header";
import HeroBanner from "./components/hero-banner/HeroBanner";
import Process from "./components/process/Process";
import Devices from "./components/devices/Devices";
import Examples from "./components/examples/Examples";
import MVP from "./components/mvp/MVP";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div id="app" className="app">
      <Header />
      <main className="app__main">
        <HeroBanner />
        <Process />
        <Devices />
        <Examples />
        <MVP />
      </main>
      <Footer />
    </div>
  );
}

export default App;
