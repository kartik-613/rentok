import React from "react";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";
import Dropdawn from "../components/dropdawn/Dropdawn";

const Home = () => {
  return (
    <div>
      <div className="md:pt-22 pt-18 px-2 bg-gray-100 ">
        <Dropdawn />
        <Banner />
        <CardSection />
      </div>
    </div>
  );
};

export default Home;
