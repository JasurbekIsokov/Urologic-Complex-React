import React from "react";

import formImg from "../Assets/Images/Form/form-img.svg";
import formElement from "../Assets/Images/Form/form-element.svg";
import formElement2 from "../Assets/Images/Form/form-elemet-bottom.svg";

const Form = () => {
  return (
    <div className="container">
      <section className="form">
        <img src={formElement} alt="element" className="element" />
        <img src={formElement2} alt="element" className="element element2" />

        <div className="form__left">
          <p className="form__left--title">Запишитесь на прием</p>
          <p className="form__left--description">
            Оставьте свои контактные данные, и наш менеджер свяжется с вами в
            течение пяти минут
          </p>

          <form className="form__left--form">
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="Ваше фамилия" />
            <input type="number" placeholder="Номер телефона" />
            <button className="btn form__left--form-btn">
              Заказать звонок
            </button>
          </form>
        </div>
        <div className="form__right">
          <div className="form__right--back">
            <img src={formImg} alt="picture" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
