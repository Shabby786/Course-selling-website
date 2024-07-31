import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* navbar start */}
      <nav className="bg-gradient-to-r from-pink-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-12">
            {/* Hamburger menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop navigation links */}
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 ">
                {/* Insert your logo here if needed */}
              </div>
              <div className="hidden sm:block sm:ml-6 ">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/page/about-us/"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    About Us
                  </Link>
                  <Link
                    to="#"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Gallery
                  </Link>
                  <Link
                    to="/page/contact/"
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* WhatsApp icon for desktop */}
            <div className="hidden sm:block">
              <a
                href="https://wa.me/+918822369627"
                className="text-white hover:text-green-500 px-3 py-2 rounded-md text-3xl animate-bounce w-6 h-6"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gradient-to-b from-blue-500 to-purple-500 divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  {/* Insert your logo here if needed */}
                  <div className="-mr-2">
                    <button
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex flex-col space-y-4">
                    <Link
                      to="#"
                      className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      to="/page/about-us/"
                      className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
                    >
                      About Us
                    </Link>
                    <Link
                      to="#"
                      className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
                    >
                      Gallery
                    </Link>
                    <Link
                      to="/page/contact/"
                      className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium"
                    >
                      Contact
                    </Link>
                    {/* WhatsApp icon for mobile */}
                    <a
                      href="https://wa.me/+918822369627"
                      className="text-white hover:text-green-500 px-3 py-2 rounded-md text-3xl animate-bounce w-6 h-6"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* navbar end */}
    </>
  );
};

export default NavBar;
