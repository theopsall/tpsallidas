import './index.less';
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h2>Contact</h2>
      <div className="row">
        <i className="icon ion-android-calendar icon"></i>
        <span>07/02/1995</span>
      </div>
      <div className="row">
        <i className="icon ion-person icon"></i>
        <span>Theodoros Psallidas</span>
      </div>
      <div className="row">
        <i className="icon ion-social-skype icon"></i>
        <span>theopsall</span>
      </div>
      <div className="row">
        <i className="icon ion-at icon"></i>
        <span>theopsall@gmail.com</span>

      </div>
    </div>
  );
};
export default Contact;
