import React from "react";

import phone from "../Assets/Images/Contacts/Calling.svg";
import mail from "../Assets/Images/Contacts/mail.svg";
import home from "../Assets/Images/Contacts/Home.svg";
import location from "../Assets/Images/Contacts/Location.svg";
import time from "../Assets/Images/Contacts/Time Circle.svg";

const ContactsMap = () => {
  return (
    <div className="contactsMap">
      <div className="contactsMap__left">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Uzbekistan Tashkent city, Uchtepa district urologic complex&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://embedmapgenerator.com/">
              embed google maps in website
            </a>
          </div>
        </div>
      </div>
      <div className="contactsMap__right">
        <div className="contactsMap__right--box phone-box">
          <img src={phone} alt="contact" />
          <div className="phone">
            <p className="phoneNumber">+998 (78) 140-03-03 </p>
            <p className="phoneNumber">+998 (78) 140-01-60</p>
            <p className="phoneNumber">+998 (78) 140-01-62 </p>
            <p className="phoneNumber">+998 (78) 140-01-63</p>
          </div>
        </div>

        <div className="contactsMap__right--box mail-box">
          <img src={mail} alt="contact" />
          <p className="mail">info@urologic.uz</p>
        </div>

        <div className="contactsMap__right--box">
          <img src={home} alt="contact" />
          <p className="home">
            г. Ташкент, Учтепинский район, 12 <br /> квартал, ул. М. Шайхзода, 7
            (Ориентир: <br /> налоговая Инспекция Учтепинского <br /> района)
          </p>
        </div>

        <div className="contactsMap__right--box location-box">
          <img src={location} alt="contact" />
          <p className="location">
            <a href="#">Схема проезда до клиники</a>
          </p>
        </div>

        <div className="contactsMap__right--box">
          <img src={time} alt="contact" />
          <p className="time">
            Пн — Пт: 8:30 — 17:30 <br /> Суббота: 8:30 — 15:30 <br /> Выходной:
            Воскресенье
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactsMap;
