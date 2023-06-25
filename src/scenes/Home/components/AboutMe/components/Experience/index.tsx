import Position from "components/Position";
import React from "react";
import experience from "./data";
import './index.css';
const Experience = () => {
  return (
    <div className="experience-wrapper">
        <h2 >Experience</h2>
      {experience.map((item, index: number) => {
        return (
          <Position  key={index} title={item.title} organization={item.organization} date={item.date} description={item.description}/>
        );
      })}
    </div>
  );
};
export default Experience;
