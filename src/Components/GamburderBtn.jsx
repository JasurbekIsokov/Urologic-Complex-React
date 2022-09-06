import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import uzFlag from "../Assets/Images/Header/uz-flag.svg";
import ruFlag from "../Assets/Images/Header/ru-flag.svg";

import vector from "../Assets/Images/Header/vector.svg";
import vector2 from "../Assets/Images/Header/vector2.svg";

import logo from "../Assets/Images/Header/header-logo.svg";
import search from "../Assets/Images/Header/search.svg";
import searchRes from "../Assets/Images/Header/search-res.svg";

import arrowMibile from "../Assets/Images/Header/arrow-mobile.svg";

const GamburderBtn = () => {
  const navigate = useNavigate();

  const uslugiOnClick = () => {
    navigate("/services");
  };

  const contactClick = () => {
    navigate("/contacts");
  };

  const [test, setTest] = useState("none");
  const [img, setImg] = useState(true);

  // mobile page uchun headerni moslashtiradi va undagi
  // gamburger buttonning ko'rinishini o'zgartiradi
  const myFunction = () => {
    if (test === "block") {
      setTest("none");
      setImg(true);
    } else {
      setTest("block");
      setImg(false);
    }
  };

  return (
    <>
      <div className="mobile_button">
        <div onClick={myFunction} className=" ">
          <img src={img ? vector : vector2} alt="vector" />
        </div>
      </div>

      <div className="mobile" style={{ display: test }}>
        <div className="container">
          <header className="header">
            <div className="header__left">
              <img src={logo} alt="logo" />
              <p
                style={{ marginBottom: "0" }}
                className="header__left--logoName"
              >
                UROLOGIC COMPLEX
              </p>
            </div>
            <div className="mobile_button">
              <div onClick={myFunction} className=" ">
                <img src={img ? vector : vector2} alt="vector" />
              </div>
            </div>
          </header>

          <hr className="row" />
          <div className="mobile__language">
            <p className="mobile__language--title">Язык</p>
            <div className="mobile__language--box">
              <div className="mobile__language--box-left">
                <div className="language_img">
                  <img src={ruFlag} alt="rus" />
                </div>
                <p>Русский</p>
              </div>
              <div className="checkBox checkBox__active">
                <div className="checkBox-active"></div>
              </div>
            </div>
            <div className="mobile__language--box">
              <div className="mobile__language--box-left">
                <div className="language_img">
                  <img src={uzFlag} alt="uzb" />
                </div>
                <p>Узбекский</p>
              </div>
              <div className="checkBox"></div>
            </div>
          </div>

          <div className="mobile__head">
            <ul>
              <li>
                <Link className="navbarLink" to="/">
                  Главная
                </Link>

                <img src={arrowMibile} />
              </li>
              <li>
                <Link className="navbarLink" to="/price">
                  Прайс лист
                </Link>
                <img src={arrowMibile} />
              </li>
              {/* <li>
                О нас
                <img src={arrowMibile} />
              </li> */}
              <li onClick={uslugiOnClick} className="navbarLink">
                Услуги
                <img src={arrowMibile} />
              </li>
              <li>
                <Link className="navbarLink" to="/articles">
                  Статьи
                </Link>
                <img src={arrowMibile} />
              </li>
              <li>
                <Link className="navbarLink" to="/stock">
                  Акции
                </Link>
                <img src={arrowMibile} />
              </li>
            </ul>
          </div>

          <p className="mobile__bottom btn" onClick={contactClick}>
            Контакты
          </p>
        </div>
      </div>
    </>
  );
};

export default GamburderBtn;
