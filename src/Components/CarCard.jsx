import React from "react";
import { useNavigate } from "react-router-dom";

const CarCards = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full flex flex-col items-center px-4 py-10">
      <h2 className="text-[32px] sm:text-[38px] md:text-[45px] font-dmserif text-black text-center leading-snug mb-10">
        We have everything you need
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {/* === Car 1 === */}
        <div
          className="w-full sm:w-[300px] bg-[#FAF5F8] rounded-lg overflow-hidden shadow cursor-pointer"
          onClick={() => navigate("/car/1")}
        >
          <div className="px-6 pt-6">
            <h3 className="text-[28px] text-[#21408E] mb-4">Dodge Charger</h3>
            <img src="/1.png" alt="Audi RS7" className="w-full h-[155px] object-cover" />
          </div>
          <div className="p-4 bg-white">
            <div className="text-center text-[#21408E] text-[22px] mb-2">10,000</div>
            <button className="block mx-auto bg-[#21408E] text-white px-5 py-2 text-[18px] rounded-lg">
              Rent
            </button>
          </div>
        </div>

        {/* === Car 2 === */}
        <div
          className="w-full sm:w-[300px] bg-[#FAF5F8] rounded-lg overflow-hidden shadow cursor-pointer"
          onClick={() => navigate("/car/2")}
        >
          <div className="px-6 pt-6">
            <h3 className="text-[28px] text-[#21408E] mb-4">Audi RS7</h3>
            <img src="/3.png" alt="Audi RS7" className="w-full h-[155px] object-cover" />
          </div>
          <div className="p-4 bg-white">
            <div className="text-center text-[#21408E] text-[22px] mb-2">60,000</div>
            <button className="block mx-auto bg-[#21408E] text-white px-5 py-2 text-[18px] rounded-lg">
              Rent
            </button>
          </div>
        </div>

        {/* === Car 3 === */}
        <div
          className="w-full sm:w-[300px] bg-[#FAF5F8] rounded-lg overflow-hidden shadow cursor-pointer"
          onClick={() => navigate("/car/3")}
        >
          <div className="px-6 pt-6">
            <h3 className="text-[28px] text-[#21408E] mb-4">Audi RS7</h3>
            <img src="/4.png" alt="Audi RS7" className="w-full h-[160px] object-cover" />
          </div>
          <div className="p-4 bg-white">
            <div className="text-center text-[#21408E] text-[22px] mb-2">15,000</div>
            <button className="block mx-auto bg-[#21408E] text-white px-5 py-2 text-[18px] rounded-lg">
              Rent
            </button>
          </div>
        </div>

        {/* === Car 4 === */}
        <div
          className="w-full sm:w-[300px] bg-[#FAF5F8] rounded-lg overflow-hidden shadow cursor-pointer"
          onClick={() => navigate("/car/4")}
        >
          <div className="px-6 pt-6">
            <h3 className="text-[28px] text-[#21408E] mb-4">Range Rover Velar</h3>
            <img src="/5.png" alt="Audi RS7" className="w-full h-[160px] object-cover" />
          </div>
          <div className="p-4 bg-white">
            <div className="text-center text-[#21408E] text-[22px] mb-2">65,000</div>
            <button className="block mx-auto bg-[#21408E] text-white px-5 py-2 text-[18px] rounded-lg">
              Rent
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarCards;