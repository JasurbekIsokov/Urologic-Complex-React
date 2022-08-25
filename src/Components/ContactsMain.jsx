import React from "react";

import contactsPersonBack from "../Assets/Images/Contacts/contacts-person1.svg";
import contactsPerson from "../Assets/Images/Contacts/contacts-person.svg";

const ContactsMain = () => {
  return (
    <div className="container">
      <section className="contactsMain">
        <div className="contactsMain__left">
          <p className="contactsMain__left--title">Наши контакты</p>
          <p className="contactsMain__left--description">
            Если у вас возникли вопросы, наши специалисты будут рады вам помочь!
          </p>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Commentry"></textarea>
            <button className="contactsFormBtn btn">Отправить</button>
          </form>
        </div>

        <div className="contactsMain__right">
          <div className="contactsMain__right--imgBox">
            <img src={contactsPersonBack} alt="person" />
            <img src={contactsPerson} alt="person" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsMain;
