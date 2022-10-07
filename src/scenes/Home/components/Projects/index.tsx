import Project from "components/Project";
import React from "react";
import { useSelector } from "reducers/store";
import Title from "components/Title";

const App = () => {
  const repositories = useSelector((state) => state.repos);

  return (
    <main className="page lanidng-page" id="Projects">
      <section className="portfolio-block block-intro">
        <div className="container">
          <Title title="Projects" />
          <div className="card-columns">
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
      </section>
    </main>
  );
};
export default App;
