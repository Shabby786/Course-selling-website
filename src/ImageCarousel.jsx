import React from 'react';

const ImageCarousel = ({ images }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full object-cover"
          />
        ))}
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
        Previous
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
