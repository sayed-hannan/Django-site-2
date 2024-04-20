import React, { useState } from 'react';

function CourseInfo() {
  // Define state to manage form data
  const [courseInfo, setCourseInfo] = useState({
    title: '',
    description: '',
    // Add more fields as needed
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseInfo({
      ...courseInfo,
      [name]: value,
    });
  };

  // Handle form submission (you can implement the submit logic)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit courseInfo to the backend or save as a draft
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Course Info</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={courseInfo.title}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={courseInfo.description}
            onChange={handleInputChange}
            rows="4"
            className="border rounded px-3 py-2 w-full"
            required
          />
        </div>
        {/* Add more form fields here */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save as Draft
          </button>
        </div>
      </form>
    </div>
  );
}

export default CourseInfo;
