import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Index from "./components/Index";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useSelector } from "../../reducers/store";
import { Screens } from "../../reducers/screens";
import "./styles.css";


const App = () => {
  const displayedScreen = useSelector((state) => state.displayedScreen);

  const renderScreen = (screen: string) => {
    switch (screen) {
      case Screens.Index:
        return <Index />;
      case Screens.AboutMe:
        return <AboutMe />;
      case Screens.Contact:
        return <Contact />;
      case Screens.Projects:
        return <Projects />;
      default:
        return <Index />;
    }
  };

  return (
    <div className="home-screen">
      <Header />
      {renderScreen(displayedScreen)}
      <Footer />
    </div>
  );
};
export default App;
