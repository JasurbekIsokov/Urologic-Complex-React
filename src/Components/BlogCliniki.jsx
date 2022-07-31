import React from "react";

import arrow from "../Assets/Images/BlogCliniki/blogCliniki-arrow.svg";
import timer from "../Assets/Images/BlogCliniki/timer.svg";
import blogCliniki1 from "../Assets/Images/BlogCliniki/blogCliniki-1.svg";
import blogCliniki2 from "../Assets/Images/BlogCliniki/blogCliniki-2.svg";
import blogCliniki3 from "../Assets/Images/BlogCliniki/blogCliniki-3.svg";
import blogCliniki4 from "../Assets/Images/BlogCliniki/blogCliniki-4.svg";

const BlogCliniki = () => {
  return (
    <div className="container">
      <div className="blogCliniki__top">
        <p className="blogCliniki__top--title">Блог клиники</p>
        <div className="blogCliniki__top--left">
          <p className="blogCliniki__top--left-btn">Узнать больше</p>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <section className="blogCliniki">
        <div className="blogCliniki__left">
          <img src={blogCliniki1} alt="blogCliniki" />
          <div className="blogCliniki__left--time">
            <p className="blogCliniki__left--time-year">16 апреля 2022 г.</p>
            <img src={timer} alt="timer" />
            <p className="blogCliniki__left--time-hour"></p>
          </div>
          <p className="blogCliniki__left--title">
            Операция на Варикоцеле в Ташкенте | Лучшие Урологи и Хирурги
          </p>
          <p className="blogCliniki__left--descripiton">
            Проведение операции на Варикоцеле в Ташкенте от лучших хирургов в
            клинике Urologic Complex. Проведение операции на Варикоцеле в
            Ташкенте от лучших хирургов в клинике Urologic Complex
          </p>
          <div className="blogCliniki__left--button">
            <p>Подробнее</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="blogCliniki__right">
          <div className="blogCliniki__box">
            <img src={blogCliniki2} alt="blog cliniki" />
            <div className="blogCliniki__box--right">
              <p className="blogCliniki__box--title">
                Профилактика мужских болезней
              </p>
              <p className="blogCliniki__box--description">
                Профилактика мужских болезней. Самые распространенные болезни у
                мужчин
              </p>
              <div className="blogCliniki__box--time">
                <p className="blogCliniki__box--time-year">16 апреля 2022 г.</p>
                <img src={timer} alt="timer" />
                <p className="blogCliniki__box--time-hour"></p>
              </div>
            </div>
          </div>
        </div>

        <div className="blogCliniki__right">
          <div className="blogCliniki__box">
            <img src={blogCliniki3} alt="blog cliniki" />
            <div className="blogCliniki__box--right">
              <p className="blogCliniki__box--title">
                Что такое ПСА? Норма ПСА в крови{" "}
              </p>
              <p className="blogCliniki__box--description">
                Онкологические заболевания являются бичом нашего времени.
              </p>
              <div className="blogCliniki__box--time">
                <p className="blogCliniki__box--time-year">16 апреля 2022 г.</p>
                <img src={timer} alt="timer" />
                <p className="blogCliniki__box--time-hour"></p>
              </div>
            </div>
          </div>
        </div>

        <div className="blogCliniki__right">
          <div className="blogCliniki__box">
            <img src={blogCliniki4} alt="blog cliniki" />
            <div className="blogCliniki__box--right">
              <p className="blogCliniki__box--title">Травмы полового члена </p>
              <p className="blogCliniki__box--description">
                Виды травм полового члена.Травмы мужского члена могут иметь
                открытый и закрытый характер.
              </p>
              <div className="blogCliniki__box--time">
                <p className="blogCliniki__box--time-year">16 апреля 2022 г.</p>
                <img src={timer} alt="timer" />
                <p className="blogCliniki__box--time-hour"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogCliniki;
