import React from "react";

import mainBtnArrow from "../Assets/Images/Main/main-button-arrow.svg";
import ellipce1 from "../Assets/Images/Main/ellipce-1.svg";
import ellipce2 from "../Assets/Images/Main/ellipce-2.svg";
import ellipce3 from "../Assets/Images/Main/ellipce-3.svg";
import ellipce4 from "../Assets/Images/Main/ellipce-4.svg";
import ellipce5 from "../Assets/Images/Main/ellipce-5.svg";
import mainImg from "../Assets/Images/Main/main.svg";

import searchRes from "../Assets/Images/Header/search-res.svg";

const Main = () => {
  return (
    <div className="mainBack">
      <div className="container">
        <div className="searchInput">
          <img src={searchRes} alt="search icon" />
          <input
            type="text"
            className="searchRes"
            placeholder="Введите запрос"
          />
        </div>

        <main className="main" id="main">
          <div className="main__left">
            <p className="main__left--date">Режим работы: 9.00 - 22.00</p>
            <p className="main__left--title">
              Медицинская <br /> клиника работает <br /> постоянно
            </p>
            <p className="main__left--description">
              Медицинская клиника работает в постоянном контакте с лучшими
              врачами всего мира Медицинская клиника работает в постоянном
              контакте
            </p>
            <div className="main__left--buttons">
              <button className="main__left--buttons-left btn">
                Связаться
              </button>
              <button className="main__left--buttons-right btn">
                Узнать больше
                <img src={mainBtnArrow} />
              </button>
            </div>
          </div>

          <div className="main__right">
            <img src={mainImg} alt="main-picture" className="main-picture" />
            <div className="mainImgBack"></div>
            <div className="mainBox">
              <div className="mainBox__top">
                <img
                  src={ellipce1}
                  alt="ellipce"
                  className="ellipce ellipce-1"
                />
                <img
                  src={ellipce2}
                  alt="ellipce"
                  className="ellipce ellipce-2"
                />
                <img
                  src={ellipce3}
                  alt="ellipce"
                  className="ellipce ellipce-3"
                />
                <img
                  src={ellipce4}
                  alt="ellipce"
                  className="ellipce ellipce-4"
                />
                <img
                  src={ellipce5}
                  alt="ellipce"
                  className="ellipce ellipce-5"
                />
                <p className="ellipce ellipce-6">45+</p>
              </div>
              <p className="mainBox__bottom">105 + пациенты</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
