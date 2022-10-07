import certifications from "./data";
const Certifications = () => {
  return (
    <div className="certification group">
      <div className="heading">
        <h2 className="text-center">certifications</h2>
      </div>
      {certifications.map((cert, index: number) => {
        return (
          <div className="item">
            <div className="row">
              <div className="col-md-6">
                <h3>{cert.title}</h3>
                <h4 className="organization">{cert.organization}</h4>
              </div>
              <div className="col-6">
                <span className="period">{cert.date}</span>
              </div>
            </div>
            {cert.description}
          </div>
        );
      })}
    </div>
  );
};
export default Certifications;
