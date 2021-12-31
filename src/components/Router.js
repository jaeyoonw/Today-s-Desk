import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "../routes/Home";
import About from "../routes/About";

const AppRouter = () => {
  return (
    <HashRouter>
      <Navigation /> 
      <Routes>
        <>
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
        </>
      </Routes>
    </HashRouter>
  )
}

export default AppRouter;