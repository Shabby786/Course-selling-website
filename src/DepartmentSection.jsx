import React from 'react';

const DepartmentsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Departments
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our academic departments and their research areas.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Example department cards */}
          <DepartmentCard name="Computer Science" facultyCount={20} researchAreas={['Artificial Intelligence', 'Data Science']} />
          <DepartmentCard name="Biology" facultyCount={15} researchAreas={['Genetics', 'Ecology']} />
          <DepartmentCard name="Business Administration" facultyCount={18} researchAreas={['Marketing', 'Finance']} />
        </div>
      </div>
    </div>
  );
};

const DepartmentCard = ({ name, facultyCount, researchAreas }) => {
  return (
    <div className="bg-gray-100 overflow-hidden shadow rounded-lg p-4">
      <h3 className="text-xl font-medium text-gray-900">{name}</h3>
      <p className="mt-2 text-sm text-gray-600">Faculty: {facultyCount}</p>
      <div className="mt-3">
        <p className="text-sm font-medium text-gray-700">Research Areas:</p>
        <ul className="mt-1 text-sm text-gray-600">
          {researchAreas.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DepartmentsSection;
