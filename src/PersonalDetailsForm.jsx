// src/PersonalDetailsForm.jsx
import React, { useState } from "react";

const PersonalDetailsForm = ({ onNext, data }) => {
  const [personalDetails, setPersonalDetails] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(personalDetails);
  };

  return (
    <div className="flex items-center justify-center h-[500px] bg-green-50">
      <div className="max-w-md w-full mx-auto rounded-lg overflow-hidden shadow-md bg-white">
        <div className="px-6 py-8">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
            Personal Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="firstName"
                value={personalDetails.firstName || ""}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={personalDetails.email || ""}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={personalDetails.address || ""}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mt-6">
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

export default PersonalDetailsForm;
