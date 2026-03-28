import  { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Find Tutors", "Dashboard", "About"];

  return (
    <header className="relative bg-linear-to-r from-[#021824] to-[#031a29] border-b border-[#0c2a3a] px-6 md:px-16 py-3">
     <div className="flex items-center justify-between">
       {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-blue-400 text-2xl">🎓</div>
          <h1 className="text-white text-xl font-semibold tracking-wide">
            EduSelect
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a key={index}  href="#" className="text-gray-300 hover:text-white transition duration-200" >{link}</a>
          ))}

          <img src="https://i.pravatar.cc/100"  alt="profile" className="w-9 h-9 rounded-full border border-gray-600"  />
        </nav>

        {/* Hamburger */}
        <div  className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}  >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-[#031a29] shadow-lg p-5 space-y-4 md:hidden z-50">
          {navLinks.map((link, index) => (
            <a  key={index}  href="#"  className="block text-gray-300 hover:text-white"   > {link}  </a>
          ))}

          <img  src="https://i.pravatar.cc/100" alt="profile"  className="w-9 h-9 rounded-full border border-gray-600" />
        </div>
      )}
    </header>
  );
};

export default Header;