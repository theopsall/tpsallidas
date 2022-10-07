import React from "react";
import education from "./data";
const Education = () => {
  return (
    <div className="education group">
      <div className="heading">
        <h2 className="text-center">Education</h2>
      </div>
      {education.map((item, index: number) => {
        return (
          <div className="item" key={index}>
            <div className="row">
              <div className="col-md-6">
                <h3>{item.title}</h3>
                <h4 className="organization">{item.organization}</h4>
              </div>
              <div className="col-6">
                <span className="period">{item.date}</span>
              </div>
            </div>
            {item.thesis}
          </div>
        );
      })}
    </div>
  );
};
export default Education;
