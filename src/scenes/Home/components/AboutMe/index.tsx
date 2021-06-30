import React from "react";
import Info from "./components/Info";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import "./styles.css";

const App = () => {
  return (
    <main className="page cv-page">
      <section className="portfolio-block cv">
        <Experience />
        <Education />
        <Certifications />
        <Info />
      </section>
    </main>
  );
};
export default App;
