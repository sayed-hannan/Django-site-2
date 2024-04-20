import React from 'react';

const InstructorDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-semibold mb-4">Instructor Dashboard</h2>
        {/* Add some sidebar content */}
        <ul className="mb-4">
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white">Link 1</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white">Link 2</a>
          </li>
          {/* Add more links or text as needed */}
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        {/* Upper Section Card */}
        <div className="bg-white shadow-lg p-4 rounded-lg mb-6 flex items-center justify-between">
          {/* Text on the right */}
          <p className="text-lg text-gray-800">Jump into Course Creation</p>
          {/* Button on the left */}
          <button
            onClick={() => {
              // Handle button click to navigate to course creation
              // You can use React Router or other navigation methods here
              alert("Navigate to Course Creation");
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Create Your Course
          </button>
        </div>


        {/* Instructor Courses Card */}
        <div className="bg-white shadow-lg p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Your Instructor Courses</h2>
          {/* List of instructor courses */}
          {/* You can map over your course data and display each course */}
          <div className=" gap-4">
            {/* Example course card */}
            <div className="bg-white shadow-lg p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Course Title</h3>
              <p className="text-gray-600">Course Description</p>
            </div>
            {/* Repeat this card for each instructor course */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstructorDashboard;
