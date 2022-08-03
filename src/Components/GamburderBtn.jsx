import React, { useState } from "react";

import uzFlag from "../Assets/Images/Header/uz-flag.svg";
import ruFlag from "../Assets/Images/Header/ru-flag.svg";

import vector from "../Assets/Images/Header/vector.svg";
import vector2 from "../Assets/Images/Header/vector2.svg";

import arrowMibile from "../Assets/Images/Header/arrow-mobile.svg";

const GamburderBtn = () => {
  const [test, setTest] = useState("none");
  const [img, setImg] = useState(true);

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
    <div className="mobile_button">
      <div onClick={myFunction}>
        <img src={img ? vector : vector2} alt="vector" />
      </div>

      <div className="mobile" style={{ display: test }}>
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
              Главная
              <img src={arrowMibile} />
            </li>
            <li>
              Прайс лист
              <img src={arrowMibile} />
            </li>
            <li>
              О нас
              <img src={arrowMibile} />
            </li>
            <li>
              Услуги
              <img src={arrowMibile} />
            </li>
            <li>
              Статьи
              <img src={arrowMibile} />
            </li>
            <li>
              Акции
              <img src={arrowMibile} />
            </li>
          </ul>
        </div>

        <p className="mobile__bottom btn">Контакты</p>

        <div className="back-color"></div>
      </div>
    </div>
  );
};

export default GamburderBtn;
