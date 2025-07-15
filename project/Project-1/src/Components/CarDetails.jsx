import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const carData = {
  1: {
    model: "Dodge Charger",
    price: "10,000$",
    type: "Rent",
    features: ["Auto", "15K KM", "Petrol", "Luxury Interior"],
    image: "/1.png",
  },
  2: {
    model: "Audi RS7",
    price: "60,000$",
    type: "Buy",
    features: ["Automatic", "2K KM", "Electric", "Panoramic Roof"],
    image: "/3.png",
  },
  3: {
    model: "Audi RS7",
    price: "15,000$",
    type: "Rent",
    features: ["Manual", "20K KM", "Petrol", "LED Display"],
    image: "/4.png",
  },
  4: {
    model: "Range Rover Velar",
    price: "65,000$",
    type: "Buy",
    features: ["Auto", "New", "Hybrid", "Sport Mode"],
    image: "/5.png",
  },
};

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = carData[id];

  if (!car) return <div className="text-center mt-20 text-xl"></div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-[40px] font-dmserif mb-4 text-center">{car.model}</h2>
      <img src={car.image} alt={car.model} className="w-full h-[300px] object-cover rounded-md mb-6" />
      <p className="text-[24px] text-[#21408E] font-semibold mb-4">Price: {car.price}</p>
      <ul className="list-disc pl-6 text-[20px] text-gray-700 mb-6">
        {car.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button
        className="px-6 py-3 bg-[#21408E] text-white text-[22px] rounded-[10px] hover:opacity-90 transition"
        onClick={() => alert(`${car.type} process for ${car.model}`)}
      >
        {car.type === "Buy" ? "Buy Now" : "Rent Now"}
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