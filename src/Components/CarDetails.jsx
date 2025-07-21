import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

// Static car data (ideally should come from backend in real project)
const carData = {
  1: {
    _id: "1",
    model: "Dodge Charger",
    hourlyPrice: 10000,
    features: ["Auto", "15K KM", "Petrol", "Luxury Interior"],
    image: "/1.png",
  },
  2: {
    _id: "2",
    model: "Audi RS7",
    hourlyPrice: 60000,
    features: ["Automatic", "2K KM", "Electric", "Panoramic Roof"],
    image: "/3.png",
  },
  3: {
    _id: "3",
    model: "Audi RS7",
    hourlyPrice: 15000,
    features: ["Manual", "20K KM", "Petrol", "LED Display"],
    image: "/4.png",
  },
  4: {
    _id: "4",
    model: "Range Rover Velar",
    hourlyPrice: 65000,
    features: ["Auto", "New", "Hybrid", "Sport Mode"],
    image: "/5.png",
  },
};

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = carData[id];

  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleBooking = async () => {
    try {
      const bookingData = {
        carId: car._id,
        model: car.model,
        pickupLocation,
        dropoffLocation,
        date: selectedDate,
        hourlyPrice: car.hourlyPrice,
        features: car.features,
      };

      await axios.post("http://localhost:5000/api/bookings", bookingData);
      alert("Car booked successfully!");
    } catch (error) {
      console.error("Booking error:", error);
      alert("Booking failed. Please check console.");
    }
  };

  if (!car) return <div className="text-center mt-20 text-xl">Car not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-[40px] font-dmserif mb-4 text-center">{car.model}</h2>
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-[300px] object-cover rounded-md mb-6"
      />
      <p className="text-[24px] text-[#21408E] font-semibold mb-4">
       Hourly Price: {car.hourlyPrice}
      </p>
      <ul className="list-disc pl-6 text-[20px] text-gray-700 mb-6">
        {car.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      {/* Booking Form */}
      <div className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Pick-up Location"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          className="w-[300px] p-3 border border-gray-300 rounded-md block"
        />
        <input
          type="text"
          placeholder="Drop-off Location"
          value={dropoffLocation}
          onChange={(e) => setDropoffLocation(e.target.value)}
          className="w-[300px] p-3 border border-gray-300 rounded-md block"
        />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select Date"
          className="w-[300px] p-3 border border-gray-300 rounded-md block"
        />
      </div>

      {/* Only show Rent Now button */}
      <button
        className="px-6 py-3 bg-[#21408E] text-white text-[22px] rounded-[10px] hover:opacity-90 transition"
        onClick={handleBooking}
      >
        Rent Now
      </button>

      <div className="mt-6">
        <button
          className="text-blue-500 underline text-lg"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
