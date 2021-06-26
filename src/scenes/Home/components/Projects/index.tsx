import React from "react";
import Title from "../../../../components/Title";

const App = () => {
  return (
    <main className="page lanidng-page">
      <section className="portfolio-block block-intro">
        <div className="container">
          <Title title="Projects" />
          <div className="card-columns">
            {/* <!-- Project Start    --> */}
            <a
              href="https://github.com/theopsall/Video-Summarization"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Video Summarization</h5>
                  <p className="card-text">
                    Multimodal summarization of user-generated videos from
                    wearable cameras
                  </p>
                </div>
              </div>
            </a>
            {/* <!--  Project END   --> */}
            {/* <!-- Project Start    --> */}
            <a
              href="https://github.com/theopsall/video_annotator"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Video Annotator Web App Tool</h5>
                  <p className="card-text">
                    Video Annotator app is a simple and easy to use tool, that
                    helps you to serve videos to annotators in random order.
                    Video Annotator Tool is written in flask
                  </p>
                </div>
              </div>
            </a>
            {/* <!--  Project END   --> */}
            {/* <!-- Project Start    --> */}
            <a
              href="https://github.com/theopsall/multiSmote"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">MultiSMOTE</h5>
                  <p className="card-text">
                    A multi-label approach for SMOTE algorithm
                  </p>
                </div>
              </div>
            </a>
            {/* <!--  Project END   --> */}
            {/* <!-- Project Start    --> */}
            <a
              href="https://github.com/theopsall/archeo"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Archeo</h5>
                  <p className="card-text">
                    ARCHEO: a python lib for sound event detection in areas of
                    touristic Interest
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
export default App;
