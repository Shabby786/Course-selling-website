import React, { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import ParentsDetailsForm from './ParentsDetailsForm';
import AcademicDetailsForm from './AcademicDetailsForm';
import CourseSelectionForm from './CourseSelectionForm';
import Stepper from './Stepper'; // Import the Stepper component

const CourseRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: {},
    parentsDetails: {},
    academicDetails: {},
    courseSelection: {},
  });

  const handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, [getStepKey(step)]: data }));
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const getStepKey = (step) => {
    switch (step) {
      case 1:
        return 'personalDetails';
      case 2:
        return 'parentsDetails';
      case 3:
        return 'academicDetails';
      case 4:
        return 'courseSelection';
      default:
        return 'personalDetails';
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Stepper step={step} /> 
      {step === 1 && (
        <PersonalDetailsForm onNext={handleNext} data={formData.personalDetails} />
      )}
      {step === 2 && (
        <ParentsDetailsForm onNext={handleNext} onPrevious={handlePrevious} data={formData.parentsDetails} />
      )}
      {step === 3 && (
        <AcademicDetailsForm onNext={handleNext} onPrevious={handlePrevious} data={formData.academicDetails} />
      )}
      {step === 4 && (
        <CourseSelectionForm onPrevious={handlePrevious} data={formData} />
      )}
    </div>
  );
};

export default CourseRegistration;
