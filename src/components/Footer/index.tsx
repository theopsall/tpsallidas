import React from "react";

const App = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="links">
          <a href="cv.html">About me</a>
          <a href="contact.html">Contact me</a>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/theopsall"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon ion-social-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tpsallidas/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon ion-social-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/TheoPsallidas"
            target="_blank"
            rel="noreferrer"
          >
            <i className="icon ion-social-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default App;
