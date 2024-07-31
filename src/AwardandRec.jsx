import React from 'react';

const CertificateRecognitionSection = () => {
  // Replace these URLs with your actual image URLs
  const images = [
    
    'http://nobleeducation.in/wp-content/uploads/2024/06/ISO.jpg',
    'https://nobleeducation.in/wp-content/themes/fresherslive/WhatsApp%20Image%202021-09-11%20at%204.31.16%20PM.jpeg',
    'https://nobleeducation.in/wp-content/themes/fresherslive/WhatsApp%20Image%202021-09-11%20at%204.31.15%20PM%20(1).jpeg',
    'https://nobleeducation.in/wp-content/themes/fresherslive/WhatsApp%20Image%202021-09-11%20at%204.31.15%20PM.jpeg',
    // Add more images as needed
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Certificates and Recognitions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((imageUrl, index) => (
            <div key={index} className="flex justify-center items-center">
              <img src={imageUrl} alt={`Certificate ${index + 1}`} className="max-h-56 md:max-h-56" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateRecognitionSection;
