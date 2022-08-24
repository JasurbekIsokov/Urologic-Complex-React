import React from "react";

import Header from "../Layouts/Header.jsx";
import Form from "../Components/Form.jsx";
import GlobalArrow from "../Components/GlobalArrow.jsx";
import Footer from "../Layouts/Footer";

const Articles = () => {
  return (
    <div className="articles-page">
      <Header />
      <Form />
      <GlobalArrow />
      <Footer />
    </div>
  );
};

export default Articles;
