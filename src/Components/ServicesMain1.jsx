import React from "react";

import andrologiya from "../Assets/Images/Services/andrologiya.svg";
import main1 from "../Assets/Images/Services/main-1.svg";
import main2 from "../Assets/Images/Services/main-2.svg";
import galareya1 from "../Assets/Images/Services/galareya-1.svg";
import galareya2 from "../Assets/Images/Services/galareya-2.svg";
import galareya3 from "../Assets/Images/Services/galareya-3.svg";
import galareya4 from "../Assets/Images/Services/galareya-4.svg";
import galareya5 from "../Assets/Images/Services/galareya-5.svg";
import elementLeft from "../Assets/Images/Services/element-left.svg";
import elementRight from "../Assets/Images/Services/element-right.svg";
import plus from "../Assets/Images/Services/plus.svg";

const ServicesMain1 = () => {
  return (
    <div className="container">
      <section class="servicesMain">
        <div class="servicesMain__left">
          <div class="servicesMain__left--head">
            <img src={andrologiya} alt="and" />
            <p>Андрология</p>
          </div>
          <p class="servicesMain__left--description">
            Андрология (andros (греч.) – мужчина, logos – учение, наука) —{" "}
            раздел клинической медицины, изучающий заболевания органов мочевой
            системы и заболевания мужских половых органов, разрабатывающий
            методы диагностики и лечения таких патологий. Врачи занимаются
            лечением воспалительных заболеваний:
          </p>
          <ul servicesMain__left--ul>
            <li>мочеиспускательного канала,</li>
            <li>предстательной железы,</li>
            <li>семенных пузырьков,</li>
            <li>органов мошонки и полового члена.</li>
          </ul>
          <p class="servicesMain__left--paragraph">
            Очень часто лечат доброкачественные новообразования наружных половых
            органов и конгестивных заболеваний половых органов у мужчин. А
            также, занимаются консервативным и оперативным лечением нарушений
            эрекции, изучают причины задержки полового развития и мужской
            гипогонадизм, мужское бесплодие, климакс и другие заболевания
            половой системы у мужчин.
          </p>
        </div>
        <img class="servicesMain__right" src={main1} alt="main" />
      </section>
    </div>
  );
};

export default ServicesMain1;
