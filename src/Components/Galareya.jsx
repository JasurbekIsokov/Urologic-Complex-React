import React from "react";

import galareya1 from "../Assets/Images/Services/galareya-1.svg";
import galareya2 from "../Assets/Images/Services/galareya-2.svg";
import galareya3 from "../Assets/Images/Services/galareya-3.svg";
import galareya4 from "../Assets/Images/Services/galareya-4.svg";
import galareya5 from "../Assets/Images/Services/galareya-5.svg";
import element1 from "../Assets/Images/Services/element-left.svg";
import element2 from "../Assets/Images/Services/element-right.svg";

const Galareya = () => {
  return (
    <>
      <div className="container">
        <p class="galareya-title">Галерея</p>
        <section class="galareya">
          <div class="galareya__left"></div>
          <div class="galareya__right">
            <div className="galareya1 galareyaImg"></div>
            <div className="galareya2 galareyaImg"></div>
            <div className="galareya3 galareyaImg"></div>
            <div className="galareya4 galareyaImg"></div>
          </div>
        </section>
      </div>

      <div className="bigFaq">
        <p class="faq-title">
          Часто задаваемые <br /> вопросы в этой области
        </p>
        <section class="FAQ container">
          <img class="faq-img faq-img1" src={element1} alt="FAQ" />
          <div class="FAQ__head">
            <p class="FAQ__head--title">
              Последнее время после перенесённого простатита беспокоит
              преждевременная эякуляция. Половой акт длится не более 1 минуты.
              Можно как то это исправить?
            </p>

            <p class="FAQ__head--description">
              Подобное состояние довольно часто явление после недолеченного
              простатита. Поэтому и остаются симптомы или появляются новые.
              Возможно после лечения вам не сделали контрольное
              бактериологическое исследование. В любом случае вам необходима
              консультация уролога. Самолечение в этом случаем может только
              усугубить состояние.
            </p>
          </div>
          <div class="FAQ__body">
            <p>Скажите как увеличить подвижность сперматозоидов?</p>
            <p>+</p>
          </div>
          <div class="FAQ__body">
            <p>При каких симптомах необходимо срочно обратиться к доктору?</p>
            <p>+</p>
          </div>
          <div class="FAQ__body">
            <p>Как часто следует сдавать кровь на ПСА?</p>
            <p>+</p>
          </div>
          <div class="FAQ__body">
            <p>Как часто следует сдавать кровь на ПСА?</p>
            <p>+</p>
          </div>
          <img class="faq-img faq-img2" src={element2} alt="FAQ" />
        </section>
      </div>
    </>
  );
};

export default Galareya;
