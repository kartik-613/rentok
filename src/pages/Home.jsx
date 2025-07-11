import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="space-y-10">
        <Banner />
        <CardSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
