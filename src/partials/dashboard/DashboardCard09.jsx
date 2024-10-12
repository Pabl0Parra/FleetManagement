// src/pages/Dashboard/DashboardCard09.jsx

import React from 'react';
import Tooltip from '../../components/Tooltip';

// Import the CSS for battery visualization
import './DashboardCard09.css';

// Import your custom icons
import PowerIcon from '../../images/power-button-icon.svg';
import EfficiencyIcon from '../../images/efficiency-icon.svg';
import RuntimeIcon from '../../images/runtime-icon.png';
import FuelIcon from '../../images/fuel-icon.png';

function DashboardCard09() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="pb-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center justify-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          EFOY 2800 Pro Fuel Cell
        </h2>
        <Tooltip className="ml-2" size="lg">
          <div className="text-sm">
            The EFOY 2800 Pro is a compact and efficient fuel cell solution
            designed for extended power supply needs.
          </div>
        </Tooltip>
      </header>

      {/* Battery Visualization and Metrics */}
      <div className="relative flex justify-center items-center my-4 w-full h-40">
        {/* Battery Container */}
        <div className="battery-container">
          <div className="battery">
            <div className="shine"></div>
            <div className="shine"></div>
            <div className="container">
              <div className="energy">
                <div className="wave"></div>
                <div className="wave"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Positioned Around the Battery */}
        {/* Top Metric */}
        <div className="absolute top-0 flex items-center">
          <div className="flex items-center space-x-1 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
            {/* Power Output Icon */}
            <img
              src={PowerIcon}
              alt="Power Output Icon"
              className="h-3 w-3 text-blue-500 mr-1"
            />
            <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
              2.8 kW
            </div>
          </div>
        </div>

        {/* Right Metric */}
        <div className="absolute right-0 flex items-center">
          <div className="flex items-center space-x-1 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
            {/* Efficiency Icon */}
            <img
              src={EfficiencyIcon}
              alt="Efficiency Icon"
              className="h-3 w-3 text-yellow-500 mr-1"
            />
            <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
              45%
            </div>
          </div>
        </div>

        {/* Bottom Metric */}
        <div className="absolute bottom-0 flex items-center">
          <div className="flex items-center space-x-1 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
            {/* Runtime Icon */}
            <img
              src={RuntimeIcon}
              alt="Runtime Icon"
              className="h-3 w-3 text-green-500 mr-1"
            />
            <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
              24 Hrs
            </div>
          </div>
        </div>

        {/* Left Metric */}
        <div className="absolute left-0 flex items-center">
          <div className="flex items-center space-x-1 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
            {/* Fuel Consumption Icon */}
            <img
              src={FuelIcon}
              alt="Fuel Consumption Icon"
              className="h-3 w-3 text-red-500 mr-1"
            />
            <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
              3.2 L/D
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard09;
