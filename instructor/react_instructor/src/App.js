import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InstructorDashboard from './components/InstructorDashboard';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/instructor" element={<InstructorDashboard />} />
          <Route path="/instructor/create" element={<Layout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
