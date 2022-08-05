import React from "react";

import globalArrow from "../Assets/Images/GlobalArrow/global-arrow.svg";

const GlobalArrow = () => {
  return (
    <div className="container">
      <div className="global-arrow">
        <a href="#header" className="global-arrow__img">
          <img src={globalArrow} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default GlobalArrow;
