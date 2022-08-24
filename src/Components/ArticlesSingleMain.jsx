import React from "react";

import timer from "../Assets/Images/BlogCliniki/timer.svg";
// import articlesSingleImg1 from "../Assets/Images/ArticlesSinge/articleSingle.svg";
// import articlesSingleImg2 from "../Assets/Images/ArticlesSinge/articleSingle.svg";

const ArticlesSingleMain = () => {
  return (
    <div className="articlesSingleMainContainer">
      <div className="articlesSingleMain">
        <p class="articlesSingleMain__title">
          Операция на Варикоцеле в Ташкенте | Лучшие Урологи и Хирурги
        </p>
        <div class="articlesSingleMain__date">
          <p class="articlesSingleMain__date--year">16 апреля 2022 г.</p>
          <img src={timer} alt="timer" />
          <p class="articlesSingleMain__date--hours">14:00</p>
        </div>
        <hr />
        <p class="articlesSingleMain__description">
          Проведение операции на Варикоцеле в Ташкенте от лучших хирургов в
          клинике Urologic Complex. Проведение операции на Варикоцеле в Ташкенте
          от лучших хирургов в клинике Urologic Complex. Всего 1 операция
          позволит вам: избавиться от болевого синдрома и симптомов варикоцеле,
          улучшить качество спермы, снизить ДНК-фрагментацию сперматозоидов и,
          самое главное, значительно повысить шанс зачатия ребёнка естественным
          путём.
        </p>
        <div className="articlesSingleMain__img1"></div>
        <p class="articlesSingleMain__title2">Преимущества метода:</p>

        <ul>
          <li>Малый травматизм;</li>
          <li>Минимальный риск рецидивов и осложнений</li>
          <li>
            Быстрое восстановление после операции. Рана заживает всего за 5-7
            дней.
          </li>
        </ul>

        <div className="articlesSingleMain__img2"></div>
        <p class="articlesSingleMain__title2">Описание операции</p>
        <p class="articlesSingleMain__description">
          Проведение операции на Варикоцеле в Ташкенте от лучших хирургов в
          клинике Urologic Complex. Проведение операции на Варикоцеле в Ташкенте
          от лучших хирургов в клинике Urologic Complex. Всего 1 операция
          позволит вам: избавиться от болевого синдрома и симптомов варикоцеле,
          улучшить качество спермы, снизить ДНК-фрагментацию сперматозоидов и,
          самое главное, значительно повысить шанс зачатия ребёнкаестественным
          путём.
        </p>
      </div>
    </div>
  );
};

export default ArticlesSingleMain;
