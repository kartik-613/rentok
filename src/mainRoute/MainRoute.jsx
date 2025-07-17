import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Hireperson from "../pages/Hireperson";
import Products from "../pages/Products";
import Login from "../pages/Login";
// import Register from "../pages/Register";
import Sell from "../pages/Sell";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import RegisterPage from "../pages/register/Register";


const MainRoute = () => {
  return (
    <>
      <Router>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hireperson" element={<Hireperson />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
          <Footer />
      </Router>
    </>
  );
};

export default MainRoute;
