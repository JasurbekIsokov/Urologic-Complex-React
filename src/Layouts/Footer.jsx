import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer container">
        <div className="footer__left">
          <img
            src="Assets/Images/Footer/footer-logo.svg"
            alt="logo"
            className="footer__left--logo"
          />
          <p className="footer__left--name">UROLOGIC COMPLEX</p>
          <div className="footer__left--description">
            We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="footer__left--call">
            <img src="Assets/Images/Footer/facebook.svg" alt="facebook" />
            <img src="Assets/Images/Footer/youtube.svg" alt="youtube" />
            <img src="Assets/Images/Footer/whatsap.svg" alt="whatsap" />
          </div>
        </div>

        <ul className="footer__leftMidle">
          <li>О нас</li>
          <li>Описание </li>
          <li>Наши</li>
          <li>врачи</li>
          <li>Лицензии</li>
          <li>Стационар </li>
          <li>FAQ</li>
        </ul>

        <ul className="footer__rightMidled">
          <li>Услуги</li>
          <li>Урология </li>
          <li>Гинекология</li>
          <li>Адрология</li>
          <li>Хирургия</li>
          <li>Онкология</li>
        </ul>

        <div className="footer__right">
          <p className="footer__right--title">Адрес</p>
          <p className="footer__right--descriotion">
            г. Ташкент, Учтепинский район, 12 квартал, ул. М. Шайхзода, 7
            (Ориентир: налоговая Инспекция Учтепинского района)
          </p>
          <p className="footer__right--email">
            E-mail: <span>info@urologic.uz</span>
          </p>
        </div>
      </footer>
      <div className="footer-bottom">
        <p className="footer__bottom--title">© 2022, All Rights Reserved</p>

        <div className="footer-bottom__right ">
          <p className="footer__bottom--rightDesc">Разработано IT компанией</p>
          <img
            src="Assets/Images/Footer/kompany-name.svg"
            alt="EXADOR"
            className="footer__bottom--rightImg"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
