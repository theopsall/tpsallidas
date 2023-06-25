import Project from "components/Project";
import { useSelector } from "reducers/store";
import './index.css';
const App = () => {
  const repositories = useSelector((state) => state.repos);

  return (
    <div className="projects-wrapper" id="Projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="wrapper">
          {repositories.map((repo) => (
            <Project
              key={repo.id}
              title={repo.name}
              description={repo.description}
              link={repo.html_url}
            />
          ))}
        </div>

      </div>

    </div>
  );
};
export default App;
