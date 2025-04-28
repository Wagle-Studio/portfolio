import "./App.scss";
import Header from "./components/header/Header";
import HeroBanner from "./components/hero-banner/HeroBanner";
import Process from "./components/process/Process";
import Examples from "./components/examples/Examples";
import Devices from "./components/devices/Devices";
import Promises from "./components/promises/Promises";
import MVP from "./components/mvp/MVP";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div id="app" className="app">
      <Header />
      <main className="app__main">
        <HeroBanner />
        <Process />
        <Examples />
        <Devices />
        <Promises />
        <MVP />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
