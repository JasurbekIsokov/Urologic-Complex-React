import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import "./Assets/Styles/globalArrow.scss";
import "./Assets/Styles/priceMain.scss";
import "./Assets/Styles/servicesMain1.scss";
import "./Assets/Styles/servicesMain2.scss";
import "./Assets/Styles/galareya.scss";
import "./Assets/Styles/articlesBlogCliniki.scss";
import "./Assets/Styles/articlesSingleMain.scss";
import "./Assets/Styles/contactsMain.scss";
import "./Assets/Styles/contactsMap.scss";

// image
import "./Assets/Images/Footer/footer-logo.svg";
import "./Assets/Fonts/Gilroy/Gilroy-Regular.ttf";

import "./Assets/Styles/index.scss";

// Pages

import "./Assets/Styles/homePage.scss";

import Home from "./Pages/Home";
import Price from "./Pages/Price";
import Services from "./Pages/Services";
import AboutUsDescription from "./Pages/AboutUsDescription";
import Faq from "./Pages/Faq";
import Doctors from "./Pages/Doctors";
import Hospital from "./Pages/Hospital";
import Reviews from "./Pages/Reviews";
import Articles from "./Pages/Articles";
import Stock from "./Pages/Stock";
import ArticlesSingle from "./Pages/ArticlesSingle";
import StockSingle from "./Pages/StockSingle";
import Contacts from "./Pages/Contacts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/price" element={<Price />}></Route>

        <Route path="/services" element={<Services />}></Route>
        <Route path="/aboutUs" element={<AboutUsDescription />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/hospital" element={<Hospital />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>

        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/articlesSingle" element={<ArticlesSingle />}></Route>

        <Route path="/contacts" element={<Contacts />}></Route>

        <Route path="/stock" element={<Stock />}></Route>
        <Route path="/stockSingle" element={<StockSingle />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
