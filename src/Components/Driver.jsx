import React from "react";

const BecomeDriver = () => {
  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div className="w-full max-w-7xl h-[400px] rounded-[10px] overflow-hidden relative">
        {/* Background Image */}
        <img
  className="w-full h-full object-cover"
  src="/d.1.jpg"   // ✅ correct, matches your /public
  alt="Become a Driver"
/>


        {/* Overlay Content */}
        <div className="absolute top-0 left-0 p-4 sm:p-8 md:p-10 flex flex-col justify-start w-full h-full text-white bg-black/40">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif capitalize m-0">
            Become a Driver
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-serif capitalize mt-2">
            Your time. Your goals. You're the boss.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-roboto mt-4 capitalize">
            Subscribe and join us
          </p>

          {/* Email Input */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-[10px] overflow-hidden mt-4 max-w-full sm:max-w-[700px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-base sm:text-lg outline-none border-none font-roboto text-black"
            />
            <button className="w-full sm:w-[150px] px-4 py-3 bg-[#21408E] text-white font-roboto text-lg sm:text-xl capitalize">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeDriver;
