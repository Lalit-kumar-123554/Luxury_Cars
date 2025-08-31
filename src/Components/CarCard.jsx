import React from "react";
import { useNavigate } from "react-router-dom";
import  { useEffect, useState } from "react";
const CarCards = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  const fetchCars = async () => {
    const res = await fetch("http://localhost:5000/api/cars");
    const data = await res.json();
    setCars(data);
  };

  fetchCars();
}, []);



  return (
    <section className="w-full flex flex-col items-center px-4 py-10">
      <h2 className="text-[32px] sm:text-[38px] md:text-[45px] font-dmserif text-black text-center leading-snug mb-10">
        We have everything you need
      </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
      {cars.map((car) => (
        <div
          key={car._id}
          className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition"
        >
          <img
  src={`/logo/${car.image}`}
  alt={car.model}
  className="w-full h-48 object-cover rounded-md"
/>

          <h2 className="text-xl font-bold mt-4">{car.model}</h2>
          <p className="text-gray-600">HourlyPrice: ₹{car.hourlyPrice}</p>
          <p className="text-sm text-gray-500 mt-2">{car.description}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => navigate(`/car/${car._id}`)}
          >
            Rent Now
          </button>
        </div>
      ))}
    </div>
      
      
    </section>
  );
};

export default CarCards;