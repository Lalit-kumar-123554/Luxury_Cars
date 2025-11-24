import React from "react";
import Header from "../Components/Header";       // ADD THIS
import Banner from "../Components/Banner";
import ServiceItem from "../Components/Services";
import CarCards from "../Components/CarCard";
import Experience from "../Components/Experience";
import BecomeDriver from "../Components/Driver";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">

      <Header />        {/* SHOW HEADER FIXED */}

      <Banner />
      <ServiceItem />
      <CarCards />
      <Experience />
      <BecomeDriver />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
