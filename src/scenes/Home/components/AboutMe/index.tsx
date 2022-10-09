import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./index.less";

const AboutMe = () => {
  return (
    <div className="resume-wrapper" id="AboutMe">
      <Experience />
      <Education />
      <Certifications />
    </div>
  );
};
export default AboutMe;
