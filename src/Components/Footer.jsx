import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#081630] text-white font-roboto py-10 px-4">
      {/* Main Sections */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Reservation */}
        <div>
          <h3 className="font-serif text-[22px] md:text-[28px] mb-4 capitalize">
            Reservation
          </h3>
          <ul className="space-y-2 text-[18px] md:text-[22px] capitalize">
            <li>Car hire</li>
            <li>Modify or cancel</li>
            <li>Get a receipt</li>
          </ul>
        </div>

        {/* Customer Services */}
        <div>
          <h3 className="font-serif text-[22px] md:text-[28px] mb-4 capitalize">
            Customer Services
          </h3>
          <ul className="space-y-2 text-[18px] md:text-[22px] capitalize">
            <li>Help / FAQs</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-serif text-[22px] md:text-[28px] mb-4 capitalize">
            Company
          </h3>
          <ul className="space-y-2 text-[18px] md:text-[22px] capitalize">
            <li>About us</li>
            <li>Career</li>
            <li>Report & Governance</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-200 opacity-30 max-w-7xl mx-auto"></div>

      {/* Bottom Branding and Social Icons */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand */}
        <div className="text-2xl md:text-[32px] font-normal font-roboto">
          LUXURYCARS
        </div>

        {/* Social Icons */}
        
      </div>
    </footer>
  );
};

export default Footer;
