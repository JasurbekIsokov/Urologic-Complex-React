import React from "react";

import Header from "../Layouts/Header.jsx";
import PriceMain from "../Components/PriceMain.jsx";
import Form from "../Components/Form.jsx";
import GlobalArrow from "../Components/GlobalArrow.jsx";
import Footer from "../Layouts/Footer";

const Price = () => {
  return (
    <div className="price-page">
      <Header />
      <PriceMain />
      <Form />
      <GlobalArrow />
      <Footer />
    </div>
  );
};

export default Price;
