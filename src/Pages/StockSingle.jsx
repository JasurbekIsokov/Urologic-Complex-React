import React from "react";

import Header from "../Layouts/Header.jsx";
import Form from "../Components/Form.jsx";
import GlobalArrow from "../Components/GlobalArrow.jsx";
import Footer from "../Layouts/Footer";
import UcHomeVideo from "../Components/UcHomeVideo.jsx";

const StockSingle = () => {
  return (
    <div className="stockSingle-page">
      <Header />

      <Form />
      <GlobalArrow />
      <Footer />
    </div>
  );
};

export default StockSingle;
