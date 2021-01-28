import React from "react";
import "./Footer.css";
import logo from "../../images/spotify.png";

const Footer = () => {
  return (
    <footer className="container bg-darks pt-8">
      <img src={logo} alt="Footer" width="140" className="footer-image" />
      <div className="text-footer">
        <i className="fab fa-instagram fa-lg"></i>
        <i className="fab fa-twitter fa-lg"></i>
        <i className="fab fa-facebook fa-lg"></i>
      </div>
      <div className="text-footer-center">
        <p className="heading">Perusahaan</p>
      </div>
    </footer>
  );
};

export default Footer;
