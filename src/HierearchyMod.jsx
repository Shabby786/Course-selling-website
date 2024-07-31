// InstituteHierarchy.js

import React from 'react';
import hkeyImage from '/public/hkey.png'; // Import your image file

const InstituteHierarchy = () => {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-orange-500 max-h-[700px]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Educational Institute Hierarchy Model</h2>
          <p className="text-gray-600">Showing the hierarchy from Coordinator to Study Centers</p>
        </div>

        <div className="mb-8">
          <img src={hkeyImage} alt="Institute Hierarchy" className="mx-auto" />
        </div>

        {/* Optionally keep other sections like trainee data */}
        <div>
          <p className="text-gray-600">All trainee data is kept in a centralized database.</p>
          {/* You can add a table or list to display trainee data */}
        </div>
      </div>
    </div>
  );
};

export default InstituteHierarchy;
