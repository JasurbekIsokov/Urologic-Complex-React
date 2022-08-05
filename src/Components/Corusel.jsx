import React from "react";

import coruselImg1 from "../Assets/Images/Corusel/carusel-img-1.svg";
import coruselImg2 from "../Assets/Images/Corusel/carusel-img-2.svg";
import coruselImg3 from "../Assets/Images/Corusel/carusel-img-3.svg";
import coruselVectorLeft from "../Assets/Images/Corusel/carusel-vector-left.svg";
import coruselVectorRight from "../Assets/Images/Corusel/carusel-vector.svg";
import coruselArrow from "../Assets/Images/Corusel/carusel-arrow.svg";

const CarouselComponent = () => {
  return (
    <div className="container">
      <div className="caruselComponent__top">
        <p className="caruselComponent__top--title">Наши врачи</p>
        <div className="caruselComponent__top--right">
          <img
            src={coruselVectorLeft}
            alt="arrow"
            className="btn carusel-vector"
          />
          <img
            src={coruselVectorRight}
            alt="arrow"
            className="btn carusel-vector"
          />
        </div>
      </div>

      <section className="caruselComponent">
        <div className="caruselComponent__box">
          <div className="caruselComponent__box--img caruselComponent__box--img1"></div>
          <p className="caruselComponent__box--title">
            Рахмонов Ойбек Мухаммадмуйдинович
          </p>
          <p className="caruselComponent__box--description">
            Главный врач. Уролог высшей квалификации. 26 лет опыта в области
            урологии
          </p>
          <button className="btn caruselComponent__box--button">
            Подробнее
            <img src={coruselArrow} />
          </button>
        </div>

        <div className="caruselComponent__box">
          <div className="caruselComponent__box--img caruselComponent__box--img2"></div>
          <p className="caruselComponent__box--title">
            Нуралиев Тельман Юлдашбаевич
          </p>
          <p className="caruselComponent__box--description">
            Врач первой категории. Уролог. высшей квалификации. 18 лет опыта в
            области урологии.
          </p>
          <button className="btn caruselComponent__box--button">
            Подробнее
            <img src={coruselArrow} />
          </button>
        </div>

        <div className="caruselComponent__box">
          <div className="caruselComponent__box--img caruselComponent__box--img3"></div>
          <p className="caruselComponent__box--title">
            Абдуллаев Дилмурод Абдумухтарович
          </p>
          <p className="caruselComponent__box--description">
            Врач высшей категории. Эндоуролог 17 лет опыта в области урологии.
          </p>
          <button className="btn caruselComponent__box--button">
            Подробнее
            <img src={coruselArrow} />
          </button>
        </div>
      </section>

      <div className="caruselComponent__bottom">
        <button className="btn">Все врачи</button>
      </div>
    </div>
  );
};

export default CarouselComponent;
