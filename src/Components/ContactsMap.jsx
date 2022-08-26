import React from "react";

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
        <div className="contacts__right--box">right</div>
      </div>
    </div>
  );
};

export default ContactsMap;
