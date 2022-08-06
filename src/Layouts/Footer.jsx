import React from "react";
import { Link } from "react-router-dom";

import logo from "../Assets/Images/Footer/footer-logo.svg";
import facebook from "../Assets/Images/Footer/facebook.svg";
import youtube from "../Assets/Images/Footer/youtube.svg";
import whatsap from "../Assets/Images/Footer/whatsap.svg";
import kompanyName from "../Assets/Images/Footer/kompany-name.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-back">
        <footer className="footer container">
          <div className="footer__left">
            <div className="footer__left--top">
              <img src={logo} alt="logo" className="footer__left--top-logo" />
              <p className="footer__left--top-name">UROLOGIC COMPLEX</p>
            </div>
            <div className="footer__left--description">
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="footer__left--call">
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={youtube} alt="youtube" />
              </a>
              <a href="#">
                <img src={whatsap} alt="whatsap" />
              </a>
            </div>
          </div>

          <ul className="footer__leftMidle">
            <li>О нас</li>
            <li>
              <Link to="/aboutUs">Описание</Link>
            </li>
            <li>Наши</li>
            <li>Лицензии</li>
            <li>Стационар </li>
            <li>FAQ</li>
          </ul>

          <ul className="footer__rightMidle">
            <li>Услуги</li>
            <li>Урология </li>
            <li>Гинекология</li>
            <li>Адрология</li>
            <li>Хирургия</li>
            <li>Онкология</li>
          </ul>

          <div className="footer__right">
            <p className="footer__right--title">Адрес</p>
            <p className="footer__right--description">
              г. Ташкент, Учтепинский район, 12 квартал, ул. М. Шайхзода, 7
              (Ориентир: налоговая Инспекция Учтепинского района)
            </p>
            <p className="footer__right--email">
              E-mail: <span>info@urologic.uz</span>
            </p>
          </div>
        </footer>

        <div className="footerBottom container">
          <p className="footerBottom__title">© 2022, All Rights Reserved</p>

          <div className="footerBottom__right ">
            <p className="footerBottom__right--description">
              Разработано IT компанией
            </p>
            <a href="#">
              <img
                src={kompanyName}
                alt="EXADOR"
                className="footerBottom__right--img"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
