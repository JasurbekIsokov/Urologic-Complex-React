import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer row">
        <div className="footer__left col-4">
          <div className="footer__left--top">
            <img src="../../Assets/Image/footer/logo.svg" alt="logo" />
            <p className="footer__left--top-name">UROLOGIC COMPLEX</p>
          </div>
          <div className="footer__left--description">
            We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="footer__leftMidle col-2"></div>
        <div className="footer__rightMidle col-2"></div>
        <div className="footer__right col-4"></div>
      </footer>
      <div className="footer-bottom row justify-content-space-beetvin">
        <div className="footer-bottom__left col-4"></div>
        <div className="footer-bottom__right col-4"></div>
      </div>
    </div>
  );
};

export default Footer;
