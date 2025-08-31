import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const CarDetails = () => {
  const { id } = useParams();
  console.log(useParams())
  const navigate = useNavigate();

  const [car, setCar] = useState(null);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/cars/${id}`);
        setCar(res.data);
      } catch (err) {
        console.error("Error fetching car:", err);
      }
    };

    fetchCar();
  }, [id]);

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
      alert("Booking failed. Check console for details.");
    }
  };

  if (!car) {
    return <div className="text-center mt-20 text-xl">Loading car details...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-[40px] font-dmserif mb-4 text-center">{car.model}</h2>
      <img
  src={`/logo/${car.image}`}
  alt={car.model}
  className="w-full h-[300px] object-cover rounded-md mb-6"
/>

      <p className="text-[24px] text-[#21408E] font-semibold mb-4">
        Hourly Price: ₹{car.hourlyPrice}
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

      {/* Rent Now Button */}
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
