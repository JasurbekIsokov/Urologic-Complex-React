import React from "react";

import Header from "../Layouts/Header.jsx";
import Form from "../Components/Form.jsx";
import GlobalArrow from "../Components/GlobalArrow.jsx";
import Footer from "../Layouts/Footer";
import ArticlesBlogCliniki from "../Components/ArticlesBlogCliniki.jsx";

const Articles = () => {
  return (
    <div className="articles-page">
      <Header />
      <ArticlesBlogCliniki />
      <Form />
      <GlobalArrow />
      <Footer />
    </div>
  );
};

export default Articles;
