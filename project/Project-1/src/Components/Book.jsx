import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdAccountCircle, MdWhereToVote, MdDateRange } from "react-icons/md";

const Book = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 bg-[#C4C4C4] p-6 sm:p-8 rounded-[12px]">
      {/* Heading */}
      <div className="font-serif text-2xl sm:text-3xl md:text-[39px] text-[#081630] mb-4">
        Book your dream car now!
      </div>

      {/* Subheading */}
      <div className="font-roboto text-base sm:text-lg md:text-[24px] text-[#000000A8] mb-6 max-w-3xl">
        Rent a car online now from one of our worldwide locations. With over
        20 years’ experience in luxury car and customer services, all we need
        is your ID and you can book any car.
      </div>

      {/* Form Row */}
      <div className="flex flex-wrap gap-4">
        {/* Input 1 */}
        <div className="flex items-center gap-2 px-4 w-full sm:w-[48%] md:w-[309px] h-[60px] bg-[#FFF9F9] rounded-[26px]">
          <MdWhereToVote size={24} />
          <span className="text-gray-600">Pick-up Location</span>
        </div>

        {/* Input 2 */}
        <div className="flex items-center gap-2 px-4 w-full sm:w-[48%] md:w-[309px] h-[60px] bg-[#FFF9F9] rounded-[26px]">
          <MdWhereToVote size={24} />
          <span className="text-gray-600">Drop-off Location</span>
        </div>

        {/* Input 3 - Date Picker */}
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
          className="w-full sm:w-[152px] h-[60px] bg-[#21408E] rounded-[26px] text-white text-lg md:text-[22px] font-roboto"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default Book;
