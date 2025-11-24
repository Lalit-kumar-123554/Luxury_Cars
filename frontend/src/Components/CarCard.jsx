import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CarCards = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/cars`);
        const data = await res.json();
        console.log("Cars from backend:", data);
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <section className="w-full flex flex-col items-center px-4 py-10">
      <h2 className="text-[32px] md:text-[45px] font-dmserif text-black mb-10">
        We have everything you need
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {cars.map((car) => (
          <div key={car._id} className="bg-white rounded-xl shadow p-5">

            {/* Correct Image Path */}
            <img
              src={`${import.meta.env.VITE_API_URL}/uploads/${car.image}`}
              alt={car.model}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h2 className="text-xl font-bold mt-4">{car.model}</h2>
            <p className="text-gray-600">Hourly Price: ₹{car.hourlyPrice}</p>

            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
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
