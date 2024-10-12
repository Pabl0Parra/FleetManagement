import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';
import './charts/ChartjsConfig';

// Import Layout and Pages
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import FleetMasterTable from './pages/FleetMasterTable';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position on route change
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // Triggered on route change

  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/table" element={<FleetMasterTable />} />
      </Routes>
    </Layout>
  );
}

export default App;
