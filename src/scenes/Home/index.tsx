import React from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import Index from "./components/Index";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

const Home = () => {
  return (
    <div className="home-screen">
      <Header />
      <Index />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
