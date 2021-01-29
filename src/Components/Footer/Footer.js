import React from "react";
import "./Footer.css";
import logo from "../../images/spotify.png";
import flag from "../../images/id.svg";

const Footer = () => {
  return (
    <footer className="container bg-darks pt-8">
      <div className="text-footer-center">
        <div className="heading-0">
          <img src={logo} alt="Footer" className="footer-image" />
        </div>
        <div className="heading-1">
          <p className="heading">PERUSAHAAN</p>
          <p>Tentang</p>
          <p>Pekerjaan</p>
          <p>For the Record</p>
        </div>
        <div className="heading-2">
          <p className="heading">KOMUNITAS</p>
          <p>Untuk Artis</p>
          <p>Pengembang</p>
          <p>Iklan</p>
          <p>Investor</p>
          <p>Vendor</p>
        </div>
        <div className="heading-3">
          <p className="heading">TAUTAN BERGUNA</p>
          <p>Dukungan</p>
          <p>Pemutar Web</p>
          <p>Aplikasi Seluler Gratis</p>
        </div>
        <div className="heading-4">
          <i className="fab fa-instagram fa-lg"></i>
          <i className="fab fa-twitter fa-lg"></i>
          <i className="fab fa-facebook fa-lg"></i>
        </div>
      </div>
      <div className="country">
        <img src={flag} alt="flag" />
        <a href="#">Indonesia</a>
      </div>
      <div className="heading-bottom">
        <div className="heading-bottom-left">
          <a href="#">Hukum</a>
          <a href="#">Pusat Privasi</a>
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Cookies</a>
          <a href="#">Tentang Iklan</a>
        </div>
        <div className="heading-bottom-right">
          <p>© 2021 Spotify AB</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
