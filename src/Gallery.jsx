import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const images = [
  {
    src: 'https://code.nobleeducation.in/india.jpg',
    title: 'First Image',
    caption: 'This is the first image caption.'
  },
  {
    src: 'https://code.nobleeducation.in/india2.jpg',
    title: 'Second Image',
    caption: 'This is the second image caption.'
  },
  {
    src: 'https://code.nobleeducation.in/india3.jpg',
    title: 'Third Image',
    caption: 'This is the third image caption.'
  }
];

const Gallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };
  
    // Automatic slide change every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        nextImage();
      }, 5000);
      return () => clearInterval(interval);
    }, [currentImageIndex]);
  
    return (
      <div className="relative">
        {/* Image Slider */}
        <div className="overflow-hidden lg:h-[680px]">
          <div className="flex transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.title}
                className="w-auto h-full object-cover"
                style={{ minHeight: '100%', minWidth: '100%', objectFit: 'cover' }}
              />
            ))}
          </div>
        </div>
  
        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevImage}
            className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
          >
            <BsChevronLeft className="text-2xl" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextImage}
            className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
          >
            <BsChevronRight className="text-2xl" />
          </button>
        </div>
  
        {/* Image Title and Caption */}
        <div className="absolute opacity-55 text-center bottom-0 left-0 right-0 p-4 bg-gray-900 text-white">
          <h2 className="text-xl font-bold">{images[currentImageIndex].title}</h2>
          <p className="text-sm animate-bounce">{images[currentImageIndex].caption}</p>
        </div>
      </div>
    );
};

export default Gallery;
