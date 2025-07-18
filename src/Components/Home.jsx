import React from "react";
import Banner from "./Banner";
import Book from "./Book";
import ServiceItem from "./Services";
import CarCards from "./CarCard";
import Experience from "./Experience";
import BecomeDriver from "./Driver";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <Banner />
      <Book />
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
