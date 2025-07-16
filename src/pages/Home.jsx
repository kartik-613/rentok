import React from "react";
// import Header from "../components/header/Header";
// import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";
import Dropdawn from "../components/dropdawn/Dropdawn";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="md:pt-22 pt-18 px-4 bg-gray-100 ">
        <Dropdawn />
        <Banner />
        <CardSection />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
