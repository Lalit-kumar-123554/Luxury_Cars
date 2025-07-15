import React from "react";
import { MdAccountCircle, MdWhereToVote, MdDateRange, MdCardTravel, MdSettings, MdSupervisorAccount } from "react-icons/md";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Book from "./Components/Book";
import ServiceItem from "./Components/Services";
import Experience from "./Components/Experience";
import BecomeDriver from "./Components/Driver";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import CarDetails from "./Components/CarDetails";
import CarCards from "./Components/CarCard";

const App = () => {
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Container */}
      <Header/>
      {/* Banner Section */}
      <Banner/>
      
      {/* Booking Section */}
      <Book/>
      {/* Our Services Section */}
      <ServiceItem/>
      <CarCards/>
        <Routes>
        {/* <Route path="/" element={<Heading />} /> */}
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
      {/* <CarDetails/> */}

          {/* Existing content (Header, Banner, Booking, Services, Store, etc.) */}
      
          {/* Experience Section */}
          <Experience/>
          <BecomeDriver/>
         
            {/* Newsletter Section */}
             <Newsletter/>
           <Footer/>
    </div>

</>
  );
};

export default App;
