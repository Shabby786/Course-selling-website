import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
const Header = () => {
  return (
    <>
      {/* header start */}
      <header className="bg-white text-red-500 text-2xl lg:text-xl py-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          {/* Logo and Index Link */}
          <div className="flex items-center mb-4 lg:mb-0">
            <a href="/" className="flex items-center">
              <img
                src="https://nobleeducation.in/wp-content/uploads/2024/06/RojgarSamacharIndia.in__2_-removebg-preview.webp"
                alt="Logo"
                className="h-30 mr-2 lg:h-24"
              />
            </a>
          </div>

          {/* Contact Details */}
          <div className="block flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:mr-7">
            <div className="flex items-center justify-center space-x-2 lg:mb-3">
              <FaEnvelope className="text-gray-300 justify-center hover:text-blue-700 transition duration-300" />
              <a
                href="mailto:info@example.com"
                className="hover:text-blue-700 transition duration-300"
              >
                nobleinstitute.assam@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaPhone className="text-gray-300 hover:text-blue-700 transition duration-300" />
              <span className="hover:text-blue-700 transition duration-200 relative">
                <span className="animate-ping absolute inline-flex h-full w-36 rounded-full bg-blue-400 opacity-75"></span>
                +91 88223-69627
              </span>
            </div>
          </div>
        </div>
      </header>
      {/* header end */}
    </>
  );
};

export default Header;
