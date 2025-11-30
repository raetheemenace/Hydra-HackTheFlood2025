import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx'; // Added .jsx extension
import InvestigatorMap from './pages/InvestigatorMap.jsx'; // Added .jsx extension

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route is the Dashboard */}
        <Route path="/" element={<Dashboard />} />
        
        {/* The new Map route */}
        <Route path="/map" element={<InvestigatorMap />} />
      </Routes>
    </Router>
  );
}

export default App;