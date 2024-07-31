// src/AcademicDetailsForm.jsx
import React, { useState } from "react";

const AcademicDetailsForm = ({ onNext, onPrevious, data }) => {
  const [academicDetails, setAcademicDetails] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAcademicDetails({
      ...academicDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(academicDetails);
  };

  return (
    <div className="flex items-center justify-center h-[500px] bg-green-200">
      <div className="max-w-md w-full mx-auto rounded-lg overflow-hidden shadow-md bg-white">
        <div className="px-6 py-8">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
            Academic Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Highest Qualification
              </label>
              <input
                type="text"
                name="highestQualification"
                value={academicDetails.highestQualification || ""}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Institute Name
              </label>
              <input
                type="text"
                name="instituteName"
                value={academicDetails.instituteName || ""}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Year of Passing
              </label>
              <input
                type="text"
                name="yearOfPassing"
                value={academicDetails.yearOfPassing || ""}
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

export default AcademicDetailsForm;
