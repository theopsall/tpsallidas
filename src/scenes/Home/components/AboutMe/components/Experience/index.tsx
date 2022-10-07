import React from "react";
import experience from "./data";

const Experience = () => {
  return (
    <div className="work-experience group">
      <div className="heading">
        <h2 className="text-center">Experience</h2>
      </div>
      {experience.map((item, index: number) => {
        return (
          <div className="item" key={index}>
            <div className="row">
              <div className="col-md-6">
                <h3>{item.title}</h3>
                <h4 className="organization">{item.organization}</h4>
              </div>
              <div className="col-md-6">
                <span className="period">{item.date}</span>
              </div>
            </div>
            {item.description}
          </div>
        );
      })}
    </div>
  );
};
export default Experience;
