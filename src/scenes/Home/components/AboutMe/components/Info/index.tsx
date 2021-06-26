const App = () => {
  return (
    <div className="group">
      <div className="row">
        <div className="col-md-6">
          <div className="skills portfolio-info-card">
            <h2>Skills</h2>
            <h3>Python, C, C++, Java, JavaScript</h3>
            <h3>Tensorflow, keras & PyTorch</h3>
            <h3>Flask, Django, React, Angular</h3>
            <h3>MySQL/MariaDB, PostgreSQL, MSSQL</h3>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-info portfolio-info-card">
            <h2>Contact Info</h2>
            <div className="row">
              <div className="col-1">
                <i className="icon ion-android-calendar icon"></i>
              </div>
              <div className="col-9">
                <span>07/02/1995</span>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <i className="icon ion-person icon"></i>
              </div>
              <div className="col-9">
                <span>Theodoros Psallidas</span>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <i className="icon ion-social-skype icon"></i>
              </div>
              <div className="col-9">
                <span>theopsall</span>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <i className="icon ion-at icon"></i>
              </div>
              <div className="col-9">
                <span>theopsall@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
