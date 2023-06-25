import { Button } from "antd";
import signature from "assets/images/signature_white.svg";
import React, { useEffect } from "react";
import "./index.css";

const Header: React.FC = () => {

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#start">
        <img src={signature} alt="Theo Psallidas" className="signature" />
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
