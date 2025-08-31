import { useState } from "react";
import { MdAccountCircle, MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="text-xl sm:text-2xl font-roboto font-semibold text-black">
          Luxurycars
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-base sm:text-lg font-roboto text-black">
          <span className="cursor-pointer hover:text-[#F1BC00] transition">Home</span>
          <span className="cursor-pointer hover:text-[#F1BC00] transition">Services</span>
          <span className="cursor-pointer hover:text-[#F1BC00] transition">Blog</span>
          <span className="cursor-pointer hover:text-[#F1BC00] transition">Contact Us</span>
        </nav>

        {/* Sign In + Menu */}
        <div className="flex items-center gap-4 text-black">
          <MdAccountCircle size={28} />
          <span className="hidden sm:block font-roboto text-base sm:text-lg">Sign In</span>

          {/* Hamburger Menu Icon (mobile) */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden mt-4 px-4 space-y-2 font-roboto text-black text-base sm:text-lg">
          <span className="block">Home</span>
          <span className="block">Services</span>
          <span className="block">Blog</span>
          <span className="block">Contact Us</span>
        </nav>
      )}
    </header>
  );
};

export default Header;
