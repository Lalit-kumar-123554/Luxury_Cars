import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdWhereToVote, MdDateRange } from "react-icons/md";

const Book = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  const handleBooking = async () => {
    if (!pickupLocation || !dropoffLocation || !selectedDate) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pickupLocation,
          dropoffLocation,
          date: selectedDate,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Booking successful!");
        setPickupLocation("");
        setDropoffLocation("");
        setSelectedDate(null);
      } else {
        alert(data.message || "Booking failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Try again later.");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 bg-[#C4C4C4] p-6 sm:p-8 rounded-[12px]">
      <div className="font-serif text-2xl sm:text-3xl md:text-[39px] text-[#081630] mb-4">
        Book your dream car now!
      </div>
      <div className="font-roboto text-base sm:text-lg md:text-[24px] text-[#000000A8] mb-6 max-w-3xl">
        Rent a car online now from one of our worldwide locations...
      </div>

      <div className="flex flex-wrap gap-4">
        {/* Pick-up Location Input */}
        <input
          type="text"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          placeholder="Pick-up Location"
          className="px-4 w-full sm:w-[48%] md:w-[309px] h-[60px] bg-[#FFF9F9] rounded-[26px] outline-none"
        />

        {/* Drop-off Location Input */}
        <input
          type="text"
          value={dropoffLocation}
          onChange={(e) => setDropoffLocation(e.target.value)}
          placeholder="Drop-off Location"
          className="px-4 w-full sm:w-[48%] md:w-[309px] h-[60px] bg-[#FFF9F9] rounded-[26px] outline-none"
        />

        {/* Date Picker */}
        <div className="flex items-center gap-2 px-4 w-full sm:w-[48%] md:w-[309px] h-[60px] bg-[#FFF9F9] rounded-[26px]">
          <MdDateRange size={24} />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select Date"
            className="bg-transparent outline-none text-gray-600 w-full"
          />
        </div>

        {/* Book Button */}
        <button
          onClick={handleBooking}
          className="w-full sm:w-[152px] h-[60px] bg-[#21408E] rounded-[26px] text-white text-lg md:text-[22px] font-roboto"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default Book;
