import Footer from "components/Footer";
import Header from "components/Header";
import AboutMe from "./components/AboutMe";
import Info from "./components/Info";
import Index from "./components/Index";
import Projects from "./components/Projects";
import "./index.less";

const Home = () => {
  return (
    <div className="home-screen">
      <Header />
      <Index />
      <AboutMe />
      <Projects />
      <Info/>
      <Footer />
    </div>
  );
};
export default Home;
