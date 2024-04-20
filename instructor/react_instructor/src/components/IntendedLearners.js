import React, { useState } from 'react';

function IntendedLearners() {
  const [whatStudentsWillLearn, setWhatStudentsWillLearn] = useState(['']);
  const [prerequisites, setPrerequisites] = useState(['']);
  const [courseLevel, setCourseLevel] = useState('');

  const handleWhatStudentsWillLearnChange = (index, value) => {
    const updatedFields = [...whatStudentsWillLearn];
    updatedFields[index] = value;
    setWhatStudentsWillLearn(updatedFields);
  };

  const handlePrerequisitesChange = (index, value) => {
    const updatedFields = [...prerequisites];
    updatedFields[index] = value;
    setPrerequisites(updatedFields);
  };

  const addWhatStudentsWillLearnField = () => {
    setWhatStudentsWillLearn([...whatStudentsWillLearn, '']);
  };

  const addPrerequisitesField = () => {
    setPrerequisites([...prerequisites, '']);
  };

  const handleSaveAsDraft = () => {
    // Add logic to save the form data as a draft
    // You can send the data to the backend or store it locally as needed
    // For now, let's just log the form data to the console
    console.log('Draft Saved:', {
      whatStudentsWillLearn,
      prerequisites,
      courseLevel,
    });
  };

  return (
    <div className="form">
      <h3 className="text-xl font-semibold mb-4">Intended Learners</h3>
      <div className="mb-4">
        <label htmlFor="courseLevel" className="block font-semibold mb-2">
          Course Level
        </label>
        <select
          id="courseLevel"
          name="courseLevel"
          value={courseLevel}
          onChange={(e) => setCourseLevel(e.target.value)}
          className="border rounded px-3 py-2 w-full"
          required
        >
          <option value="">Select Course Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">What Students Will Learn</label>
        {whatStudentsWillLearn.map((field, index) => (
          <input
            key={index}
            type="text"
            value={field}
            onChange={(e) => handleWhatStudentsWillLearnChange(index, e.target.value)}
            className="border rounded px-3 py-2 w-full mb-2"
            required
          />
        ))}
        <button
          onClick={addWhatStudentsWillLearnField}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Field
        </button>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Prerequisites</label>
        {prerequisites.map((field, index) => (
          <input
            key={index}
            type="text"
            value={field}
            onChange={(e) => handlePrerequisitesChange(index, e.target.value)}
            className="border rounded px-3 py-2 w-full mb-2"
            required
          />
        ))}
        <button
          onClick={addPrerequisitesField}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Field
        </button>
      </div>
      <button
        onClick={handleSaveAsDraft}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save as Draft
      </button>
    </div>
  );
}

export default IntendedLearners;
