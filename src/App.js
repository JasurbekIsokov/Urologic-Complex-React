import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Layouts/Footer";
import UcHomeVideo from "./Components/UcHomeVideo";
import BlogCliniki from "./Components/BlogCliniki";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// style
import "./Assets/Styles/index.scss";
import "./Assets/Styles/footer.scss";
import "./Assets/Styles/ucHomeVideo.scss";
import "./Assets/Styles/blogCliniki.scss";

// image
import "./Assets/Images/Footer/footer-logo.svg";
import "./Assets/Fonts/Gilroy/Gilroy-Regular.ttf";

function App() {
  return (
    <>
      <UcHomeVideo />
      <BlogCliniki />
      <Footer />
    </>
  );
}

export default App;
