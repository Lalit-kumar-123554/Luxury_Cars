import React from "react";
import {
  MdCardTravel,
  MdSettings,
  MdSupervisorAccount,
} from "react-icons/md";

const Experience = () => {
  return (
    <div className="bg-gray-100 w-full flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-7xl bg-white rounded-xl py-12 px-4 sm:px-8">
        {/* Section Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-[45px] font-normal text-black text-center mb-12 leading-snug">
          Feel the best experience <br/> <br/>with our luxury car
        </h2>

        {/* Experience Cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center max-w-xs sm:w-[300px]">
            <div className="bg-[#F1BC00] w-[120px] h-[100px] flex items-center justify-center rounded-xl">
              <MdCardTravel size={50} color="#000000" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-black mt-4">
              Book with flexibility
            </h3>
            <p className="font-roboto text-base sm:text-lg text-[#00000099] mt-3">
              Easily find car and book <br /> with no change fees.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center max-w-xs sm:w-[300px]">
            <div className="bg-[#F1BC00] w-[120px] h-[100px] flex items-center justify-center rounded-xl">
              <MdSettings size={50} color="#000000" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-black mt-4">
              Trusted and free
            </h3>
            <p className="font-roboto text-base sm:text-lg text-[#00000099] mt-3">
              We’re completely free to use – <br /> no hidden charges or fees.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center max-w-xs sm:w-[300px]">
            <div className="bg-[#F1BC00] w-[120px] h-[100px] flex items-center justify-center rounded-xl">
              <MdSupervisorAccount size={50} color="#000000" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-black mt-4">
              We know travel
            </h3>
            <p className="font-roboto text-base sm:text-lg text-[#00000099] mt-3">
              With 10 years of experience, <br /> we're ready to help find your perfect car.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
