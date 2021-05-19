import React from "react";
import Home from "./components/Home";
import "./app.scss";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
};

export default App;
