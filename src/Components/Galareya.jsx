import React from "react";

import galareya1 from "../Assets/Images/Services/galareya-1.svg";
import galareya2 from "../Assets/Images/Services/galareya-2.svg";
import galareya3 from "../Assets/Images/Services/galareya-3.svg";
import galareya4 from "../Assets/Images/Services/galareya-4.svg";
import galareya5 from "../Assets/Images/Services/galareya-5.svg";

const Galareya = () => {
  return (
    <div className="container">
      <p class="galareya-title">Галерея</p>
      <section class="galareya">
        <div class="galareya__left">
          <img src={galareya1} alt="Галерея" />
        </div>
        <div class="galareya__right">
          <img src={galareya2} alt="Галерея" />
          <img src={galareya3} alt="Галерея" />
          <img src={galareya4} alt="Галерея" />
          <img src={galareya5} alt="Галерея" />
        </div>
      </section>
    </div>
  );
};

export default Galareya;
