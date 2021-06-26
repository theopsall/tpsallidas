const App = () => {
  return (
    <div className="work-experience group">
      <div className="heading">
        <h2 className="text-center">&nbsp;Experience</h2>
      </div>
      {/* <div className="item">
        <div className="row">
          <div className="col-md-6">
            <h3>Associate Researcher</h3>
            <h4 className="organization">NSCR Demokrtios</h4>
          </div>
          <div className="col-md-6">
            <span className="period">07/2021 - Present</span>
          </div>
        </div>
        <p className="text-muted">
          Associate Researcher at the Multimedia Analysis Group of the
          Computational Intelligence Lab ({" "}
          <a
            href="https://labs-repos.iit.demokritos.gr/MagCIL/"
            target="_blank"
            rel="noreferrer"
          >
            MagCIL
          </a>
          ) of the the Institute of Informatics and Telecommunications , of the
          National Center for Scientific Research "Demokritos".{" "}
        </p>
      </div> */}
      <div className="item">
        <div className="row">
          <div className="col-md-6">
            <h3>Software Developer</h3>
            <h4 className="organization">Optechain</h4>
          </div>
          <div className="col-md-6">
            <span className="period">11/2020 - Present</span>
          </div>
        </div>
        <p className="text-muted">
          Projects Development in React, React Native, Angular and Vanilla
          JavaScript
        </p>
      </div>
      <div className="item">
        <div className="row">
          <div className="col-md-6">
            <h3>Research Associate</h3>
            <h4 className="organization">NSCR Demokrtios</h4>
          </div>
          <div className="col-md-6">
            <span className="period">12/2019 - 01/2021</span>
          </div>
        </div>
        <p className="text-muted">
          Research Associate at the Multimedia Analysis Group of the
          Computational Intelligence Lab ({" "}
          <a
            href="https://labs-repos.iit.demokritos.gr/MagCIL/"
            target="_blank"
            rel="noreferrer"
          >
            MagCIL
          </a>
          ) of the Institute of Informatics and Telecommunications , of the
          National Center for Scientific Research "Demokritos".{" "}
        </p>
      </div>
      <div className="item">
        <div className="row">
          <div className="col-6">
            <h3>Web Developer &amp; IT Support</h3>
            <h4 className="organization">Greek Army</h4>
          </div>
          <div className="col-md-6">
            <span className="period">02/2019 - 07/2019</span>
          </div>
        </div>
        <p className="text-muted">
          Research and Computer Department at the General Military Hospital of
          Athens.
          <br />
          Working on IT Services, Web Development (Drupal, Joomla), Network
          Switching, Python Automate Tools.
        </p>
      </div>
    </div>
  );
};
export default App;
