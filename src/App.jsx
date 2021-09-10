import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Background from "./Pages/Background";
import Contact from "./Components/Contact";
import Footer from './Components/Footer';
import SkillsDiv from "./Components/SkillsDiv";
import NavBar from "./Components/Nav/NavBar";

function App() {
  return (
    <div className="App">

      <NavBar />
      <Home />
      <SkillsDiv />
      <Background />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
