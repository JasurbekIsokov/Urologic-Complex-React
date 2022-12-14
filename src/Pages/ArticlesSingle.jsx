import React from "react";

import Header from "../Layouts/Header.jsx";
import Form from "../Components/Form.jsx";
import GlobalArrow from "../Components/GlobalArrow.jsx";
import Footer from "../Layouts/Footer";
import UcHomeVideo from "../Components/UcHomeVideo.jsx";
import ArticlesSingleMain from "../Components/ArticlesSingleMain.jsx";

const ArticlesSingle = () => {
  return (
    <div className="articlesSingle-page">
      <Header />
      <ArticlesSingleMain />
      <UcHomeVideo />
      <Form />
      <GlobalArrow />
      <Footer />
    </div>
  );
};

export default ArticlesSingle;
