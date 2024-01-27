import "./App.css";

import Header from "./Component/Header/Header";
import Home from "./Component/Home";
import About from "./Component/About/About";
import Project from "./Component/Project/Project";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer";

import portfolio from "./Json/portfolio.json"

function App() {
  return (
    <div className="App" data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
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
