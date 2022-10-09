import React from "react";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import './index.less';
const App = () => {
  return (
    <div className="info-page" id="Contact">
      <div className="info-wrapper">
        <Skills />
        {/* <Contact /> */}
        </div>
    </div>
  );
};
export default App;
