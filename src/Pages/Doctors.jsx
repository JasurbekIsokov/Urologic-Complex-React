import React from "react";

import Header from "../Layouts/Header.jsx";
import Form from "../Components/Form.jsx";
import GlobalArrow from "../Components/GlobalArrow.jsx";
import Footer from "../Layouts/Footer";

const Doctors = () => {
  return (
    <div className="doctors-page">
      <Header />
      <Form />
      <GlobalArrow />
      <Footer />
    </div>
  );
};

export default Doctors;
