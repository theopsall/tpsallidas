import { Button } from "antd";
import React from "react";
import signature from "../../assets/images/signature_white.svg";
import { useHeaderScroll } from "./hooks/useHeaderScroll";
import "./index.css";
import ThemeToggle from "../ThemeToggle";

const Header: React.FC = () => {
  const { isScrolled } = useHeaderScroll();

  const navbarClass = isScrolled ? "navbar scrolled" : "navbar";

  return (
    <nav className={navbarClass}>
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
      <ThemeToggle/>
      </div>
    </nav>
  );
};

export default Header;
