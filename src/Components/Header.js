import React from "react";
import logo from "../assets/SVG/status-logo.svg";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <main className="main-container">
      <header className="nav-header-container background-container">
        <div className="header-contents">
          <img src={logo} alt="" className="logo" />
          <h2>People Ops at Status</h2>
        </div>
        <NavBar />
      </header>
    </main>
  );
};

export default Header;
