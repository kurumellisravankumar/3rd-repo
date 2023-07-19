import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// -------------------------------home  components --------------------------------------

// import Home from "./components/Home";

import Landingpage from "./components/Landingpage";
import Home from "./components/Home";

function EGRADtutor() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Landingpage />} />
        <Route path={"/home"} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default EGRADtutor;
