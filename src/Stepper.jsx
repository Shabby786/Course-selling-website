import React from 'react';

const Stepper = ({ step }) => {
  return (
    <div className="stepper">
      <div className={`step ${step === 1 ? 'active' : ''}`}>
        <div>Personal Details</div>
      </div>
      <div className={`step ${step === 2 ? 'active' : ''}`}>
        <div>Parents Details</div>
      </div>
      <div className={`step ${step === 3 ? 'active' : ''}`}>
        <div>Academic Details</div>
      </div>
      <div className={`step ${step === 4 ? 'active' : ''}`}>
        <div>Course Selection</div>
      </div>
    </div>
  );
};

export default Stepper;