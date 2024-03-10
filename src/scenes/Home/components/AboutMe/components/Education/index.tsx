import Student from "../../../../../../components/Student";
import education from "./data";
import "./index.css";
const Education = () => {
  return (
    <div className="education-wrapper">
      <h2>Education</h2>
      {education.map((item, index: number) => {
        return (
          <Student
            key={index}
            title={item.title}
            organization={item.organization}
            date={item.date}
            thesis={item.thesis}
          />
        );
      })}
    </div>
  );
};
export default Education;
