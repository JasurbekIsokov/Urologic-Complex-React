import React from "react";

import pochemu1 from "../Assets/Images/Pochemu/pochemu-1.svg";
import pochemu2 from "../Assets/Images/Pochemu/pochemu-2.svg";
import pochemu3 from "../Assets/Images/Pochemu/pochemu-3.svg";
import pochemu4 from "../Assets/Images/Pochemu/pochemu-4.svg";
import pochemu5 from "../Assets/Images/Pochemu/pochemu-5.svg";
import pochemu6 from "../Assets/Images/Pochemu/pochemu-6.svg";

const Pochemu = () => {
  return (
    <div className="container">
      <p className="pochemu__title">Почему выбирают нас</p>
      <section className="pochemu">
        <div className="pochemu__box pochemu-1">
          <div className="pochemu__box--top">
            <img src={pochemu1} alt="Комплексный Подход" />
            <p>Комплексный Подход</p>
          </div>
          <p className="pochemu__box--description">
            Команда врачей разных специальностей с огромным опытом подберут
            наиболее результативную терапевтическую тактику.
          </p>
        </div>
        <div className="pochemu__box pochemu-2">
          <div className="pochemu__box--top">
            <img src={pochemu2} alt="Очень просто" />
            <p>Очень просто</p>
          </div>
          <p className="pochemu__box--description">
            Вам не придется искать, где сделать тот или иной анализ, все
            обследования и врачебные консультации можно получить на месте.
          </p>
        </div>
        <div className="pochemu__box pochemu-3">
          <div className="pochemu__box--top">
            <img src={pochemu3} alt="Услуги Стационара" />
            <p>Услуги Стационара</p>
          </div>
          <p className="pochemu__box--description">
            При необходимости госпитализации, к услугам пациента современный,
            комфортабельный стационар с палатами класса «люкс».
          </p>
        </div>
        <div className="pochemu__box pochemu-4">
          <div className="pochemu__box--top">
            <img src={pochemu4} alt="Современная лаборатория" />
            <p>Современная лаборатория</p>
          </div>
          <p className="pochemu__box--description">
            Собственная высокотехнологичная лаборатория, позволяет получать
            достоверные результаты исследований в минимальный срок.
          </p>
        </div>
        <div className="pochemu__box pochemu-5">
          <div className="pochemu__box--top">
            <img src={pochemu5} alt="Качественный Сервис" />
            <p>Качественный Сервис</p>
          </div>
          <p className="pochemu__box--description">
            Вы сможете провести комплекс лечебно-диагностических процедур в
            удобное время и получить ответы анализов в электронном виде.
          </p>
        </div>
        <div className="pochemu__box pochemu-6">
          <div className="pochemu__box--top">
            <img src={pochemu6} alt="Оперативное лечение" />
            <p>Оперативное лечение</p>
          </div>
          <p className="pochemu__box--description">
            Проводится весь спектр урологических, гинекологических,
            андрологических, урогинекологических, онкологических операций.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pochemu;
