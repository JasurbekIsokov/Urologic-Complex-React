import React from "react";

import Header from "../Layouts/Header.jsx";
import Form from "../Components/Form.jsx";
import GlobalArrow from "../Components/GlobalArrow.jsx";
import Footer from "../Layouts/Footer";
import ArticlesSingleMain from "../Components/ArticlesSingleMain.jsx";

const StockSingle = () => {
  return (
    <div className="stockSingle-page">
      <Header />
      <ArticlesSingleMain />
      <Form />
      <GlobalArrow />
      <Footer />
    </div>
  );
};

export default StockSingle;
