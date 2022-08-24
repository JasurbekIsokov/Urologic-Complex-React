import React from "react";

import Header from "../Layouts/Header.jsx";
import Form from "../Components/Form.jsx";
import GlobalArrow from "../Components/GlobalArrow.jsx";
import Footer from "../Layouts/Footer";
import AksiyBlogCliniki from "../Components/AksiyBlogCliniki.jsx";

const Stock = () => {
  return (
    <div className="stock-page">
      <Header />
      <AksiyBlogCliniki />
      <Form />
      <GlobalArrow />
      <Footer />
    </div>
  );
};

export default Stock;
