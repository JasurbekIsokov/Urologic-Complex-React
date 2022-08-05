import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Layouts/Header.jsx";
import Footer from "./Layouts/Footer";
import UcHomeVideo from "./Components/UcHomeVideo";
import BlogCliniki from "./Components/BlogCliniki";
import Rabota from "./Components/Rabota";
import Pochemu from "./Components/Pochemu";
import OurServices from "./Components/OurServices";
import Main from "./Components/Main";
import Form from "./Components/Form.jsx";
import CarouselComponent from "./Components/Corusel.jsx";

// style
import "./Assets/Styles/footer.scss";
import "./Assets/Styles/ucHomeVideo.scss";
import "./Assets/Styles/blogCliniki.scss";
import "./Assets/Styles/rabota.scss";
import "./Assets/Styles/pochemu.scss";
import "./Assets/Styles/OurServices.scss";
import "./Assets/Styles/header.scss";
import "./Assets/Styles/gamburgerBtn.scss";
import "./Assets/Styles/main.scss";
import "./Assets/Styles/form.scss";
import "./Assets/Styles/corusel.scss";

// image
import "./Assets/Images/Footer/footer-logo.svg";
import "./Assets/Fonts/Gilroy/Gilroy-Regular.ttf";

import "./Assets/Styles/index.scss";

function App() {
  return (
    <>
      <CarouselComponent />
      {/* <Form /> */}
      {/* <Header />
      <Main />
      <Rabota />
      <Pochemu />
      <OurServices />
      <UcHomeVideo />
      <BlogCliniki />
      <Footer /> */}
    </>
  );
}

export default App;
