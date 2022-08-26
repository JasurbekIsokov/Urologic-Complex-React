import React from "react";

import Header from "../Layouts/Header.jsx";
import Footer from "../Layouts/Footer";
import ContactsMain from "../Components/ContactsMain.jsx";
import ContactsMap from "../Components/ContactsMap.jsx";

const Contacts = () => {
  return (
    <div className="contacts-page">
      <Header />
      <ContactsMain />
      <ContactsMap />
      <Footer />
    </div>
  );
};

export default Contacts;
