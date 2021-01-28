import React from "react";
import Logo from "../../images/spotify.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container bg-dark text-light">
        <div className="navbar">
          <img src={Logo} alt="Navbar" width="140" />
          <div className="text-right">
            <ul>
              <li>Premium</li>
              <li>Dukungan</li>
              <li>Download</li>
              <span className="garis-nav">|</span>
              <li>Daftar</li>
              <li>Masuk</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
