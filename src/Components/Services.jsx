import React from "react";
import carImage from "/car1.jpg"; // Make sure this exists in /public

const ServiceItem = () => {
  return (
    <div className="bg-white max-w-screen-xl mx-auto mt-16 rounded-2xl p-6 md:p-12 relative overflow-hidden">

      {/* ==== BACKGROUND CURVED SHAPES (MATCH REFERENCE) ==== */}

      {/* BIG OVAL SHAPE */}
      <div className="absolute left-[-120px] top-[-80px] w-[750px] h-[450px]
      bg-[#F6D463] opacity-50 rounded-[200px] rotate-[-10deg] blur-sm"></div>

      {/* SOFT INNER CURVE */}
      <div className="absolute left-[-40px] top-[160px] w-[650px] h-[360px]
      bg-[#FBEFB2] opacity-70 rounded-[200px] rotate-[12deg]"></div>

      {/* LOWER CURVE */}
      <div className="absolute left-[40px] top-[300px] w-[680px] h-[320px]
      bg-[#F6D463] opacity-40 rounded-[200px] rotate-[-8deg]"></div>



      {/* ==== MAIN CONTENT ==== */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={carImage}
            alt="Luxury Car"
            className="w-[460px] md:w-[550px] object-contain drop-shadow-xl"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="w-full md:w-1/2">

          <h2 className="text-[32px] md:text-[44px] font-dmserif text-black mb-10">
            Our Services
          </h2>

          {/* SERVICE LIST */}
          {[
            {
              title: "Car Hire",
              description:
                "We pride ourselves in always going the extra mile for our customers.",
            },
            {
              title: "Car Sales",
              description:
                "We sell the best luxury cars across the world at a competitive price.",
            },
            {
              title: "Hire a driver",
              description:
                "If you want to travel and feel comfortable, our drivers are available.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-8">

              {/* Yellow Box */}
              <div className="w-[70px] h-[70px] bg-[#F1BC00] rounded-[16px] mr-6"></div>

              <div>
                <h3 className="text-[22px] md:text-[26px] font-dmserif text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-[16px] md:text-[20px] text-black leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
