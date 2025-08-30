import React from "react";

const ServiceItem = ({ title, description }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white px-4 md:px-10 lg:px-20 py-10 md:py-[60px] rounded-[12px] max-w-screen-xl mx-auto mt-10 gap-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/image2.png"
          alt="Luxury Car"
          className="w-full h-[250px] md:h-full object-cover rounded-[40px] md:rounded-[80px]"
        />
      </div>

      {/* Services Content */}
      <div className="w-full md:w-1/2 text-[#21408E]">
        <h2 className="font-dmserif text-[32px] md:text-[45px] mb-6 text-black">
          Our Services
        </h2>

        {/* Service List */}
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
            title: "Hire a Driver",
            description:
              "Want to travel and feel comfortable? Our drivers are available.",
          },
        ].map((service, index) => (
          <div className="flex items-start mb-6" key={index}>
            <div className="min-w-[80px] h-[70px] md:w-[105px] md:h-[80px] bg-[#F1BC00] rounded-[12px] mr-4 md:mr-8"></div>
            <div>
              <h3 className="font-dmserif text-[22px] md:text-[26px] mb-2 text-black">
                {service.title}
              </h3>
              <p className="font-roboto text-[16px] md:text-[20px] text-black">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceItem;
