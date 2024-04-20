import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InstructorDashboard from './components/InstructorDashboard';
import Layout from './components/Layout';

const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/instructor" element={<InstructorDashboard />} />
        <Route path="/instructor/create" element={<Layout />} />
      </Routes>
    </Router>
  );
};

export default Routes;
