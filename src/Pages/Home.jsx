import React from "react";

import Header from "../Layouts/Header.jsx";
import Footer from "../Layouts/Footer";
import UcHomeVideo from "../Components/UcHomeVideo";
import BlogCliniki from "../Components/BlogCliniki";
import Rabota from "../Components/Rabota";
import Pochemu from "../Components/Pochemu";
import OurServices from "../Components/OurServices";
import Main from "../Components/Main";
import Form from "../Components/Form.jsx";
import CarouselComponent from "../Components/Corusel.jsx";
import GlobalArrow from "../Components/GlobalArrow.jsx";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Main />
      <Rabota />
      <Pochemu />
      <OurServices />
      <UcHomeVideo />
      <CarouselComponent />
      <BlogCliniki />
      <Form />
      <GlobalArrow />
      <Footer />
    </div>
  );
};

export default Home;
