import React from "react";

interface IProjectProps {
  title: string;
  description: string;
  link: string;
}

const Project = (props: IProjectProps) => {
  const { title, description, link } = props;
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </a>
  );
};
export default Project;
