import React, { useState } from 'react';
import { ProgressBar } from '@nadfri/react-scroll-progress-bar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-800 p-4">
      <div style={{ height: '2vh' }}>
        <ProgressBar color1="#EAF6FE" color2="#177EB3" height="6px" />
      </div>

      <div className="container mx-auto lg:px-[150px] sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="text-white text-2xl font-bold">
          HR Solutions
        </a>

        {/* Hamburger Icon for mobile view */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>

        {/* Links for large screens */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <a href="#hero" className="text-white hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-blue-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-blue-300">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-blue-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile menu (toggle based on isOpen) */}
        {isOpen && (
          <ul className="lg:hidden absolute top-20 left-0 w-full bg-gray-800 text-left pl-5">
            <li className="p-4">
              <a href="#hero" className="text-white hover:text-blue-300">
                Home
              </a>
            </li>
            <li className="p-4">
              <a href="#about" className="text-white hover:text-blue-300">
                About Us
              </a>
            </li>
            <li className="p-4">
              <a href="#services" className="text-white hover:text-blue-300">
                Services
              </a>
            </li>
            <li className="p-4">
              <a href="#contact" className="text-white hover:text-blue-300">
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
