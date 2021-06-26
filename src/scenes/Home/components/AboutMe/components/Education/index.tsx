const App = () => {
  return (
    <div className="education group">
      <div className="heading">
        <h2 className="text-center">Education</h2>
      </div>
      <div className="item">
        <div className="row">
          <div className="col-md-6">
            <h3>PhD Candidate&nbsp;</h3>
            <h4 className="organization">University of Thessaly</h4>
          </div>
          <div className="col-6">
            <span className="period">2021 - Present</span>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="row">
          <div className="col-md-6">
            <h3>MSc in Data Science&nbsp;</h3>
            <h4 className="organization">University of Peloponnese</h4>
          </div>
          <div className="col-6">
            <span className="period">2019 - 2021</span>
          </div>
        </div>
        <p className="text-muted">
          Thesis:{" "}
          <a
            href="https://labs-repos.iit.demokritos.gr/MagCIL/theses/2021_Psallidas_Multimodal_summarization_of_user-generated_videos_from_wearable_cameras.pdf"
            target="_blank"
            rel="noreferrer"
          >
            "Multimodal summarization of user-generated videos from wearable
            cameras".
          </a>
        </p>
      </div>
      <div className="item">
        <div className="row">
          <div className="col-md-6">
            <h3>BSc in Computer Science</h3>
            <h4 className="organization">University of Thessaly</h4>
          </div>
          <div className="col-md-6">
            <span className="period">2013 - 2018</span>
          </div>
        </div>
        <p className="text-muted">
          Thesis: "Big Data Management to achieve urban sustainabulity
          developement"
        </p>
      </div>
    </div>
  );
};
export default App;
