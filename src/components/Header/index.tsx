import { Button } from "antd";
import React from "react";
import Typed from "react-typed";
import './index.less';


import "./index.less";
const Header = () => {
  const [colorChange, setColorchange] = React.useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= window.outerHeight) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  return (
    <nav
      className={`navbar ${colorChange ? "gray" : ""
        }`}
    >
        <span className="navbar-brand">
          <Typed
            strings={["Theodoros Psallidas"]}
            typeSpeed={100}
            backSpeed={60}
            loop
          />
        </span>
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
