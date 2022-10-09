import Certification from "components/Certification";
import certifications from "./data";
import './index.less';
const Certifications = () => {
  return (
    <div className="certifications-wrapper">
        <h2 >Certifications</h2>
      {certifications.map((cert, index: number) => {
        return (
          <Certification  key={index} title={cert.title} organization={cert.organization} date={cert.date} description={cert.description}/>

        );
      })}
    </div>
  );
};
export default Certifications;
