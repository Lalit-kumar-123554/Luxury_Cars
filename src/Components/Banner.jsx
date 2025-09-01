import React from "react";
import { MdAccountCircle } from "react-icons/md";

const Banner = () => {
  return (
    <div
  className="relative mt-10 w-full h-[600px] bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: `url(${import.meta.env.BASE_URL}image.1.png.png)` }}
>
      {/* Text 1: Safer, Faster and comfortable */}
      <div className="absolute right-6 md:right-16 bottom-[160px] text-xl sm:text-3xl md:text-4xl text-black font-serif text-right leading-tight">
        Safer, Faster <br /> and comfortable
      </div>

      {/* Text 2: Get in touch with our luxury cars */}
      <div className="absolute right-6 md:right-16 bottom-[100px] text-base sm:text-xl md:text-2xl text-black font-roboto text-right leading-tight">
        Get in touch <br /> with our luxury cars
      </div>

      {/* Rent Now Button */}
      <button className="absolute right-6 md:right-16 bottom-[40px] w-[140px] h-[42px] bg-[#21408E] text-white text-[18px] md:text-[20px] rounded-lg font-roboto hover:opacity-90 transition">
        Rent Now
      </button>
    </div>
  );
};

export default Banner;
