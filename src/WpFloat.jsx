// WhatsAppIcon.js

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+918822369627"
      className="fixed z-50 right-6 bottom-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 hover:text-gray-900 hover:shadow-xl flex items-center justify-center transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center">
        <FaWhatsapp size={24} />
        <span className="ml-2 hidden md:block">Contact Us on WhatsApp</span>
      </div>
    </a>
  );
};

export default WhatsAppIcon;
