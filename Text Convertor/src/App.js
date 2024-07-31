import "./App.css";


import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";

import React, { useState } from "react";

function App() {
  /////////////////////////////////////////////////// Using React  /////////////////////////////////////////////////////////
  const [darkmode, setDark] = useState("light");
  const [textdarkmode, settextDark] = useState("textlight");

  const [mix, setMix] = useState("light");

  const toggleMode1 = () => {
    if (darkmode === "light" && textdarkmode === "textlight") {
      setDark("dark");
      settextDark("textdark");

      document.body.style.background = "rgb(91, 91, 91)";
      document.body.style.color = "rgb(198, 198, 198)";
      document.title = "Text Convertor - DarkMode Enabled";
    } else {
      setDark("light");
      settextDark("textlight");

      document.body.style.background = "white";
      document.body.style.color = "rgb(67, 67, 67)";
      document.title = "Text Convertor - lightMode Enabled";
    }
  };
  const toggleMode2 = () => {
    if (mix === "light") {
      setMix("mix");
      document.body.style.background =
        "linear-gradient(150deg, rgb(255, 109, 109), rgb(255, 255, 91))";
      document.body.style.color = "whitesmoke";
      document.title = "Text Convertor - RGBMode Enabled";
    } else {
      setMix("light");

      document.body.style.background = "white";
      document.body.style.color = "rgb(67, 67, 67)";
      document.title = "Text Convertor - LightMode Enabled";
    }
  };

  /////////////////////////////////////////////////// Using Normal JavaScript  /////////////////////////////////////////////////////////
  const toggleMode3 = () => {
    if (
      document.querySelector(".navbar").style.backgroundColor ==
      "rgb(67, 66, 66)"
    ) {
      document.querySelector(".navbar").style.backgroundColor =
        "rgb(218, 217, 217)";
      document.querySelector(".navbar").style.color = "rgb(67, 67, 67)";

      document.body.style.background = "white";
      document.body.style.color = "rgb(67, 67, 67)";
    } else {
      document.querySelector(".navbar").style.backgroundColor =
        "rgb(67, 66, 66)";
      document.querySelector(".navbar").style.color = "rgb(198, 198, 198)";

      document.body.style.background = "rgb(91, 91, 91)";
      document.body.style.color = "rgb(198, 198, 198)";
    }
  };

  return (
    <>
      <Router>
        <div>
          <Navbar
            title="LoGo"
            dark={darkmode}
            light={darkmode}
            NavMix={mix}
            toggleMode1={toggleMode1}
            toggleMode2={toggleMode2}
            toggleMode3={toggleMode3}
          />
        </div>


        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <Textarea
                heading="Enter the Text here ..."
                textlight={textdarkmode}
                textdark={textdarkmode}
                toggleMode1={toggleMode1}
                toggleMode2={toggleMode2}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
