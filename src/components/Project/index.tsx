import './index.css';
interface IProjectProps {
  title: string;
  description: string;
  link: string;
}

const Project = (props: IProjectProps) => {
  const { title, description, link } = props;
  return (
    <a href={link} target="_blank" rel="noreferrer" className="project-item">
      <div className="card">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </a>
  );
};
export default Project;

