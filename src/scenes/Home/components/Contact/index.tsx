import React from "react";
import Title from "components/Title";
import InfoCard from "./components/InfoCard";

const App = () => {
  return (
    <main className="page contact-page" id="Contact">
      <section className="portfolio-block contact">
        <div className="container">
          <Title title="Contact Me" />
          <InfoCard />
        </div>
      </section>
    </main>
  );
};
export default App;
