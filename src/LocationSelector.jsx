import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const LocationSelector = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedInstitute, setSelectedInstitute] = useState('');

  const states = ['Assam', 'Kerala', 'Tamil Nadu'];
  const districtsData = {
    'Assam': ['Dhubri', 'Guwahati'],
    'Kerala': ['District K1', 'District K2'],
    'Tamil Nadu': ['District T1', 'District T2']
  };
  const institutesData = {
    'Dhubri': ['Institute D1', 'Institute D2'],
    'Guwahati': ['Institute G1', 'Institute G2'],
    'District K1': ['Institute K1', 'Institute K2'],
    'District K2': ['Institute K3', 'Institute K4'],
    'District T1': ['Institute T1', 'Institute T2'],
    'District T2': ['Institute T3', 'Institute T4']
  };

  const handleStateChange = (event) => {
    const stateValue = event.target.value;
    setSelectedState(stateValue);
    setSelectedDistrict('');
    setSelectedInstitute('');
  };

  const handleDistrictChange = (event) => {
    const districtValue = event.target.value;
    setSelectedDistrict(districtValue);
    setSelectedInstitute(''); // Reset institute selection when district changes
  };

  const renderCentersTable = () => {
    if (selectedDistrict && institutesData[selectedDistrict]) {
      return (
        <div className="border border-gray-300 p-4 rounded-lg mt-4">
          <h2 className="text-xl font-medium mb-4">Available Centers</h2>
          <table className="w-full">
            <tbody>
              {institutesData[selectedDistrict].map((center, index) => (
                <tr key={index}>
                  <td className="font-medium">Center {index + 1}:</td>
                  <td>{center}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-tr from-green-50 via-orange-100 to-pink-200 flex flex-col lg:flex-row gap-4 p-4 lg:p-11 shadow-2xl">

      {/* Image (Visible on Mobile Devices) */}
      <div className="lg:hidden mb-4">
        <img
          src="https://nobleeducation.in/element5-digital-OyCl7Y4y0Bk-unsplash.jpg"
          alt="Image"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Right Column (Selectors and Table) */}
      <div className="lg:w-1/2">
        {/* State Select */}
        <div className="relative mb-4">
          <label htmlFor="state" className="block text-xl font-medium text-gray-700">
            State
          </label>
          <div className="relative mt-1">
            <select
              id="state"
              name="state"
              className="block appearance-none w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
              onChange={handleStateChange}
              value={selectedState}
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* District Select */}
        {selectedState && (
          <div className="relative mb-4">
            <label htmlFor="district" className="block text-xl font-medium text-gray-700">
              District
            </label>
            <div className="relative mt-1">
              <select
                id="district"
                name="district"
                className="block appearance-none w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl"
                onChange={handleDistrictChange}
                value={selectedDistrict}
              >
                <option value="">Select a district</option>
                {districtsData[selectedState].map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        )}

        {/* Render Centers Table */}
        {renderCentersTable()}

      </div>

      {/* Left Column (Image Only on Large Devices) */}
      <div className="lg:w-1/2 hidden lg:block">
        <img
          src="https://nobleeducation.in/element5-digital-OyCl7Y4y0Bk-unsplash.jpg"
          alt="Image"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default LocationSelector;
