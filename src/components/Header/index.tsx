import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { Button, Switch } from "antd";
import React from "react";
import Typed from "react-typed";
import "./index.css";
const Header = () => {
  const [colorChange, setColorchange] = React.useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 1080) {
      setColorchange(false);
    } else {
      setColorchange(true);
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
      className={`navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient ${
        colorChange ? "transparent" : ""
      }`}
    >
      <div className="container">
        <span className="navbar-brand logo">
          <Typed
            strings={["Theodoros Psallidas"]}
            typeSpeed={100}
            backSpeed={60}
            loop
          />
        </span>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navbarNav"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" role="presentation">
              <Button type="text" className="nav-link" href="#AboutMe">
                AboutMe
              </Button>
            </li>
            <li className="nav-item" role="presentation">
              <Button type="text" className="nav-link" href="#Projects">
                Projects
              </Button>
            </li>
            <li className="nav-item" role="presentation">
              <Button type="text" className="nav-link" href="#Contact">
                Contact
              </Button>
            </li>
          </ul>
          <span>
            <Switch
              checkedChildren={<BrightnessMediumIcon />}
              unCheckedChildren={<ModeNightIcon />}
              defaultChecked
            />
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Header;
