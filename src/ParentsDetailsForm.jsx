// src/ParentsDetailsForm.jsx
import React, { useState } from "react";

const ParentsDetailsForm = ({ onNext, onPrevious, data }) => {
  const [parentsDetails, setParentsDetails] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParentsDetails({
      ...parentsDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(parentsDetails);
  };

  return (
    <div className="flex items-center justify-center h-[500px] bg-green-100">
      <div className="max-w-md w-full mx-auto rounded-lg overflow-hidden shadow-md bg-white">
        <div className="px-6 py-8">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
            Parents Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Father's Name
              </label>
              <input
                type="text"
                name="fathersName"
                value={parentsDetails.fathersName || ""}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Mother's Name
              </label>
              <input
                type="text"
                name="mothersName"
                value={parentsDetails.mothersName || ""}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Contact Number
              </label>
              <input
                type="text"
                name="contactNumber"
                value={parentsDetails.contactNumber || ""}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={onPrevious}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Previous
              </button>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ParentsDetailsForm;