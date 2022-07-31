import React from "react";

import ucHomeVideoImg from "../Assets/Images/UcHomeVideo/UcHomeVideo.svg";

const UcHomeVideo = () => {
  return (
    <div className="container">
      <div className="ucHomeVideo ">
        <div className="ucHomeVideo__left">
          <p className="ucHomeVideo__left--title">Urologic Complex</p>
          <p className="ucHomeVideo__left--description">
            Урологическая клиника “Urologic Complex” — современный центр по
            решению урологических, гинекологических, андрологических и
            онкологических проблем консервативными и малоинвазивными методами.
          </p>
          <div className="ucHomeVideo__left--button btn">Подробнее</div>
        </div>
        <div className="ucHomeVideo__right">
          <p className="ucHomeVideo__right--title">Urologic Complex</p>
          <img src={ucHomeVideoImg} alt="video" />
        </div>
      </div>
    </div>
  );
};

export default UcHomeVideo;
