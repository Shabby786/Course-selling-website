import React from 'react';

const ProgramsSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Programs Offered
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our undergraduate, graduate, and professional programs.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Example program cards */}
          <ProgramCard title="Undergraduate Programs" description="Details about our undergraduate offerings." />
          <ProgramCard title="Graduate Programs" description="Details about our graduate programs and research opportunities." />
          <ProgramCard title="Professional Programs" description="Information on our professional and continuing education programs." />
        </div>
      </div>
    </div>
  );
};

const ProgramCard = ({ title, description }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ProgramsSection;
