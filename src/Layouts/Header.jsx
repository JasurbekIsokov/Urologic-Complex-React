import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import logo from "../Assets/Images/Header/header-logo.svg";
import search from "../Assets/Images/Header/search.svg";
import uzFlag from "../Assets/Images/Header/uz-flag.svg";
import ruFlag from "../Assets/Images/Header/ru-flag.svg";

import GamburderBtn from "../Components/GamburderBtn";

const Header = () => {
  const navigate = useNavigate();
  const loc = useLocation();

  const uslugiOnClick = () => {
    navigate("/services");
    console.log("as");
  };

  const contactClick = () => {
    navigate("/contacts");
  };

  return (
    <div className="header-back">
      <div className="container">
        <header className="header" id="header">
          <div className="header__left">
            <img src={logo} alt="logo" />
            <p style={{ marginBottom: "0" }} className="header__left--logoName">
              UROLOGIC COMPLEX
            </p>
          </div>
          <navbar className="navbar">
            <ul style={{ marginBottom: "0" }}>
              <li>
                <Link
                  className="navbarLink"
                  to="/"
                  style={
                    loc.pathname == "/"
                      ? { color: "#12AADB" }
                      : { color: "#0B304F" }
                  }
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  className="navbarLink"
                  to="/price"
                  style={
                    loc.pathname == "/price"
                      ? { color: "#12AADB" }
                      : { color: "#0B304F" }
                  }
                >
                  Прайс лист
                </Link>
              </li>
              {/* 
              <div className="dropdown">
                <li className="dropbtn">
                  О нас <i className="fa-solid fa-angle-down"></i>
                </li>
                <div className="dropdown-content">
                  <li>
                    <Link className="navbarLink" to="/aboutUs">
                      Описание
                    </Link>
                  </li>
                  <li>
                    <Link className="navbarLink" to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className="navbarLink" to="/doctors">
                      Врачи
                    </Link>
                  </li>
                  <li>
                    <Link className="navbarLink" to="/hospital">
                      Стационар
                    </Link>
                  </li>
                  <li>
                    <Link className="navbarLink" to="/reviews">
                      Отзывы
                    </Link>
                  </li>
                </div>
              </div> */}

              <div className="dropdown" onClick={uslugiOnClick}>
                <li
                  className="dropbtn"
                  style={
                    loc.pathname == "/services"
                      ? { color: "#12AADB" }
                      : { color: "#0B304F" }
                  }
                >
                  Услуги <i className="fa-solid fa-angle-down"></i>
                </li>
                <div className="dropdown-content">
                  <li>Консультация</li>
                  <li>Физиотерапия</li>
                  <li>Хирургия </li>
                  <li> Урология</li>
                  <li>Андрология</li>
                  <li>Анализы</li>
                  <li>УЗД</li>
                  <li>МСКТ</li>
                  <li>Урогинекология</li>
                  <li>Онкология</li>
                  <li>Гинекология</li>
                </div>
              </div>

              <li>
                <Link
                  className="navbarLink"
                  to="/articles"
                  style={
                    loc.pathname == "/articles" ||
                    loc.pathname == "/articlesSingle"
                      ? { color: "#12AADB" }
                      : { color: "#0B304F" }
                  }
                >
                  Статьи
                </Link>
              </li>
              <li>
                <Link
                  className="navbarLink"
                  to="/stock"
                  style={
                    loc.pathname == "/stock" || loc.pathname == "/stockSingle"
                      ? { color: "#12AADB" }
                      : { color: "#0B304F" }
                  }
                >
                  Акции
                </Link>
              </li>
            </ul>
          </navbar>

          <div className="header__right">
            <div className="header__right--search">
              <img src={search} alt="search icon" />
            </div>
            <div className="header__right--language">
              <ul style={{ marginBottom: "0" }}>
                <div className="dropdown languageDrop">
                  <li className="dropbtn languageDropbtn">
                    Рус<i className="fa-solid fa-angle-down"></i>
                  </li>
                  <div className="dropdown-content dropdown-content-language">
                    <li>
                      Узб
                      <img src={uzFlag} alt="uzFlag" />
                    </li>
                    <li>
                      Рус
                      <img src={ruFlag} alt="ruFlag" />
                    </li>
                  </div>
                </div>
              </ul>
            </div>
            <p
              onClick={contactClick}
              style={{ marginBottom: "0" }}
              className="header__right--kontakt btn"
            >
              Контакты
            </p>
          </div>
          <GamburderBtn />
        </header>

        <div className="resHeader">
          <header className="header">
            <navbar className="resNavbar">
              <ul style={{ marginBottom: "0" }}>
                <li>
                  <Link
                    className="navbarLink"
                    to="/"
                    style={
                      loc.pathname == "/"
                        ? { color: "#12AADB" }
                        : { color: "#0B304F" }
                    }
                  >
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    className="navbarLink"
                    to="/price"
                    style={
                      loc.pathname == "/price"
                        ? { color: "#12AADB" }
                        : { color: "#0B304F" }
                    }
                  >
                    Прайс лист
                  </Link>
                </li>

                {/* <div className="dropdown">
                  <li className="dropbtn">
                    О нас <i className="fa-solid fa-angle-down"></i>
                  </li>
                  <div className="dropdown-content">
                    <li>
                      <Link className="navbarLink" to="/aboutUs">
                        Описание
                      </Link>
                    </li>
                    <li>
                      <Link className="navbarLink" to="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link className="navbarLink" to="/doctors">
                        Врачи
                      </Link>
                    </li>
                    <li>
                      <Link className="navbarLink" to="/hospital">
                        Стационар
                      </Link>
                    </li>
                    <li>
                      <Link className="navbarLink" to="/reviews">
                        Отзывы
                      </Link>
                    </li>
                  </div>
                </div> */}

                <div className="dropdown" onClick={uslugiOnClick}>
                  <li
                    className="dropbtn"
                    style={
                      loc.pathname == "/services"
                        ? { color: "#12AADB" }
                        : { color: "#0B304F" }
                    }
                  >
                    Услуги <i className="fa-solid fa-angle-down"></i>
                  </li>
                  <div className="dropdown-content">
                    <li>Консультация</li>
                    <li>Физиотерапия</li>
                    <li>Хирургия </li>
                    <li> Урология</li>
                    <li>Андрология</li>
                    <li>Анализы</li>
                    <li>УЗД</li>
                    <li>МСКТ</li>
                    <li>Урогинекология</li>
                    <li>Онкология</li>
                    <li>Гинекология</li>
                  </div>
                </div>

                <li>
                  <Link
                    className="navbarLink"
                    to="/articles"
                    style={
                      loc.pathname == "/articles" ||
                      loc.pathname == "/articlesSingle"
                        ? { color: "#12AADB" }
                        : { color: "#0B304F" }
                    }
                  >
                    Статьи
                  </Link>
                </li>
                <li>
                  <Link
                    className="navbarLink"
                    to="/stock"
                    style={
                      loc.pathname == "/stock" || loc.pathname == "/stockSingle"
                        ? { color: "#12AADB" }
                        : { color: "#0B304F" }
                    }
                  >
                    Акции
                  </Link>
                </li>
              </ul>
            </navbar>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
