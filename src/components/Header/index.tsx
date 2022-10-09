import { Button } from "antd";
import React from "react";
import Typed from "react-typed";
import './index.less';


import "./index.less";
const Header = () => {
  return (
    <nav
      className="navbar" >
        <a className="navbar-brand" href="#start">
          <Typed
            strings={["Theodoros Psallidas"]}
            typeSpeed={100}
            backSpeed={60}
            loop
          />
        </a>
        <div className="navbar-links">
        <Button type="text" className="nav-link" href="#AboutMe">
            About Me
          </Button>
          <Button type="text" className="nav-link" href="#Projects">
            Projects
          </Button>
          <Button type="text" className="nav-link" href="#Contact">
            Contact
          </Button>
        </div>
    </nav>
  );
};
export default Header;
