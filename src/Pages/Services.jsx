import React from "react";

import Header from "../Layouts/Header";
import ServicesMain1 from "../Components/ServicesMain1";
import ServicesMain2 from "../Components/ServicesMain2";
import Form from "../Components/Form.jsx";
import GlobalArrow from "../Components/GlobalArrow.jsx";
import Footer from "../Layouts/Footer";

const Services = () => {
  return (
    <>
      <Header />
      <ServicesMain1 />
      <ServicesMain2 />
      <Form />
      <GlobalArrow />
      <Footer />
    </>
  );
};

export default Services;
