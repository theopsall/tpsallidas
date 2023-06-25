import { Button } from "antd";
import signature from "../../assets/images/signature_white.svg";
import React from "react";
import "./index.css";
import { useEffect } from "react";

const Header: React.FC = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      
      const header = document.querySelector(".navbar");
      header?.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);
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
