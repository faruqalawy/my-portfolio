import "./App.css";

import Header from "./Component/Header/Header";
import Home from "./Component//Home/Home";
import About from "./Component/About/About";
import Project from "./Component/Project/Project";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

import portfolio from "./Json/portfolio.json"

import ReactGA from "react-ga4";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    ReactGA.initialize("G-2SYGNWZ60V");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "My Portfolio" });
  }, [])
  return (
    <div className="App" data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true">
      <Header />
      <section className="gray-background">
        <Home />
      </section>
      <section>
        <About data={portfolio.about} />
      </section>
      <section className="gray-background">
        <Project />
      </section>
      <section>
        <Contact />
      </section>
      <section className="dark-background">
        <Footer />
      </section>
    </div>
  );
}

export default App;
