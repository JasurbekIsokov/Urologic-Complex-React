import React from "react";

import urologiya from "../Assets/Images/OurServices/urologiya.svg";
import uroginekologiya from "../Assets/Images/OurServices/uroginekologiya.svg";
import onkologiya from "../Assets/Images/OurServices/onkologiya.svg";
import andrologiya from "../Assets/Images/OurServices/andrologiya.svg";
import xirurgiya from "../Assets/Images/OurServices/xirurgiya.svg";
import ginekologiya from "../Assets/Images/OurServices/ginekologiya.svg";
import analiz from "../Assets/Images/OurServices/analiz.svg";
import konsultatsiya from "../Assets/Images/OurServices/konsultatsiya.svg";
import element1 from "../Assets/Images/OurServices/element1.svg";
import element from "../Assets/Images/OurServices/element.svg";
import arrow from "../Assets/Images/OurServices/arrow.svg";
import btnArrow from "../Assets/Images/OurServices/btn-arrow.svg";
import whiteArrow from "../Assets/Images/OurServices/white-arrow.svg";

const OurServices = () => {
  return (
    <div className="container">
      <section className="services">
        <div className="services__boxbox">
          <p className="services__boxbox--title">Наши услуги</p>
          <p className="services__boxbox--description">
            У нас вы найдете все услуги, необходимые для поддержания здоровья
            вашей семьи. У нас вы найдете все услуги, необходимые для
            поддержания здоровья вашей семьи
          </p>
          <button className="btn">
            Все услуги
            <img src={btnArrow} alt="arrow" />
          </button>
        </div>
        <div className="services__box urologiya">
          <div className="services__box--top">
            <img src={urologiya} alt="Services" />
            <p>Урология</p>
          </div>
          <div className="services__box--bottom">
            <p>Уроло́гия — область клинической медицины.</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="services__box uroginekologiya">
          <div className="services__box--top">
            <img src={uroginekologiya} alt="Services" />
            <p>Урогинекология</p>
          </div>
          <div className="services__box--bottom">
            <p>Уроло́гия — область клинической медицины.</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="services__box element1 ">
          <img src={element1} alt="element" />
        </div>

        <div className="services__box onkologiya">
          <div className="services__box--top">
            <img src={onkologiya} alt="Services" />
            <p>Онкология</p>
          </div>
          <div className="services__box--bottom">
            <p>Уроло́гия — область клинической медицины.</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="services__box andrologiya">
          <div className="services__box--top">
            <img src={andrologiya} alt="Services" />
            <p>Андрология</p>
          </div>
          <div className="services__box--bottom">
            <p>Уроло́гия — область клинической медицины.</p>
            <img src={whiteArrow} alt="arrow" />
          </div>
        </div>

        <div className="services__box xirurgiya">
          <div className="services__box--top">
            <img src={xirurgiya} alt="Services" />
            <p>Хирургия</p>
          </div>
          <div className="services__box--bottom">
            <p>Уроло́гия — область клинической медицины.</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="services__box ginekologiya">
          <div className="services__box--top">
            <img src={ginekologiya} alt="Services" />
            <p>Гинекология</p>
          </div>
          <div className="services__box--bottom">
            <p>Уроло́гия — область клинической медицины.</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="services__box analiz">
          <div className="services__box--top">
            <img src={analiz} alt="Services" />
            <p>Анализы</p>
          </div>
          <div className="services__box--bottom">
            <p>Уроло́гия — область клинической медицины.</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="services__box  konsultatsiya">
          <div className="services__box--top">
            <img src={konsultatsiya} alt="Services" />
            <p>Консультация </p>
          </div>
          <div className="services__box--bottom">
            <p>Уроло́гия — область клинической медицины.</p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="services__box element">
          <img src={element} alt="element" />
        </div>
      </section>
    </div>
  );
};

export default OurServices;
