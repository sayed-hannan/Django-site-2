import React, { useState } from 'react';
import CourseInfo from './CourseInfo';
import IntendedLearners from './IntendedLearners';
import Curriculum from './Curriculum'; // Import the Curriculum component

function Layout() {
  const [currentStep, setCurrentStep] = useState('plan'); // Initialize with 'plan'

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4 bg-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Course Creation</h2>
        <ul className="space-y-2">
          <li className="cursor-not-allowed text-gray-500 font-semibold">
            Plan Your Course {/* Non-clickable */}
          </li>
          <ul className="ml-4 space-y-2">
            <li
              className={`cursor-pointer ${
                currentStep === 'courseInfo' ? 'text-blue-500 font-semibold' : ''
              }`}
              onClick={() => handleStepChange('courseInfo')}
            >
              Course Info
            </li>
            <li
              className={`cursor-pointer ${
                currentStep === 'intendedLearners' ? 'text-blue-500 font-semibold' : ''
              }`}
              onClick={() => handleStepChange('intendedLearners')}
            >
              Intended Learners
            </li>
          </ul>
          {/* Add Curriculum section */}
          <li className={`cursor-pointer ${
            currentStep === 'curriculum' ? 'text-blue-500 font-semibold' : ''
          }`}
            onClick={() => handleStepChange('curriculum')}
          >
            Curriculum
          </li>
        </ul>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover-bg-blue-600">
          Submit for Review
        </button>
      </div>

      <div className="w-3/4 p-4 bg-white">
        {/* Render sub-components based on the current step */}
        {currentStep === 'courseInfo' && (
          <>
            <h3 className="text-xl font-semibold mb-4">Course Info</h3>
            <CourseInfo /> {/* Render CourseInfo component */}
          </>
        )}
        {currentStep === 'intendedLearners' && (
          <>
            <h3 className="text-xl font-semibold mb-4">Intended Learners</h3>
            <IntendedLearners /> {/* Render IntendedLearners component */}
          </>
        )}
        {/* Render Curriculum section */}
        {currentStep === 'curriculum' && (
          <>
            <h3 className="text-xl font-semibold mb-4">Curriculum</h3>
            <Curriculum /> {/* Render Curriculum component */}
          </>
        )}
      </div>
    </div>
  );
}

export default Layout;
