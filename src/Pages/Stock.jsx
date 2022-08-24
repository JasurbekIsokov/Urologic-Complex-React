import React from "react";

import Header from "../Layouts/Header.jsx";
import Form from "../Components/Form.jsx";
import GlobalArrow from "../Components/GlobalArrow.jsx";
import Footer from "../Layouts/Footer";

const Stock = () => {
  return (
    <div className="stock-page">
      <Header />
      <Form />
      <GlobalArrow />
      <Footer />
    </div>
  );
};

export default Stock;
