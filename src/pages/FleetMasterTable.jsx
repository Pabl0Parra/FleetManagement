// src/pages/FleetMasterTable.jsx

import React, { useState } from 'react';
import { useThemeProvider } from '../utils/ThemeContext';
import { generateRandomXYZ } from '../utils/Utils';

function FleetMasterTable() {
  const { currentTheme } = useThemeProvider();
  const darkMode = currentTheme === 'dark';

  // State to manage modal visibility and selected row data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // Helper function to pad numbers with leading zeros
  const padNumber = (num) => num.toString().padStart(2, '0');

  const mockData = Array.from({ length: 50 }, (_, i) => {
    const machineNumber = padNumber(i + 1);
    const monthNumber = padNumber((i % 12) + 1); // Ensuring months range from 01 to 12

    const randomXYZ = generateRandomXYZ();

    return {
      buoyName: `E${machineNumber}`,
      buoyID: `${machineNumber}`,
      buoyStatus: i % 2 === 0 ? 'Active' : 'Inactive',
      projectName: `EOL - ${randomXYZ}`,
      projectManager: `Manager ${i + 1}`,
      projectCoordinates: `36.${machineNumber}N, -122.${machineNumber}W`,
      clientName: `Client ${i + 1}`,
      clientLogo: 'https://via.placeholder.com/50',
      dataloggerVersion: `v${i + 1}.0`,
      deploymentDate: `2023-${monthNumber}-01`,
      endDate: `2024-${monthNumber}-01`,
    };
  });

  // Event handler for double-click on a row
  const handleRowDoubleClick = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  // Event handler to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  return (
    <div
      className={`flex flex-col p-4 sm:p-6 m-4 sm:m-6 bg-${
        darkMode ? 'gray-900' : 'white'
      } dark:bg-gray-800 shadow-md rounded-xl w-full`}
    >
      <header className="pb-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Fleet Master Table
        </h2>
      </header>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              {/* Always Visible Columns */}
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Buoy Name
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Buoy Status
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              >
                Project Name
              </th>

              {/* Hidden on Mobile, Visible on Small Screens and Above */}
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell"
              >
                Buoy ID
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell"
              >
                Project Manager
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell"
              >
                Project Coordinates
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell"
              >
                Client Logo
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell"
              >
                Datalogger Version
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell"
              >
                Deployment Date
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell"
              >
                End of Project Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {mockData.map((row, idx) => (
              <tr
                key={idx}
                onDoubleClick={() => handleRowDoubleClick(row)}
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {/* Always Visible Columns */}
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                  {row.buoyName}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {row.buoyStatus}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {row.projectName}
                </td>

                {/* Hidden on Mobile, Visible on Small Screens and Above */}
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                  {row.buoyID}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                  {row.projectManager}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                  {row.projectCoordinates}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                  <img
                    src={row.clientLogo}
                    alt="Client Logo"
                    className="h-8 w-8 rounded-full"
                  />
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                  {row.dataloggerVersion}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                  {row.deploymentDate}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                  {row.endDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && selectedRow && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            className={`bg-${
              darkMode ? 'gray-800' : 'white'
            } rounded-lg shadow-lg w-11/12 max-w-md mx-auto p-6 relative`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Header */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              {selectedRow.projectName} Details
            </h3>

            {/* Modal Body: Display all details in a stacked format */}
            <div className="space-y-2">
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Buoy Name:
                </span>{' '}
                <span className="text-gray-600 dark:text-gray-400">
                  {selectedRow.buoyName}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Buoy ID:
                </span>{' '}
                <span className="text-gray-600 dark:text-gray-400">
                  {selectedRow.buoyID}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Buoy Status:
                </span>{' '}
                <span className="text-gray-600 dark:text-gray-400">
                  {selectedRow.buoyStatus}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Project Manager:
                </span>{' '}
                <span className="text-gray-600 dark:text-gray-400">
                  {selectedRow.projectManager}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Project Coordinates:
                </span>{' '}
                <span className="text-gray-600 dark:text-gray-400">
                  {selectedRow.projectCoordinates}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Client Name:
                </span>{' '}
                <span className="text-gray-600 dark:text-gray-400">
                  {selectedRow.clientName}
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Client Logo:
                </span>{' '}
                <img
                  src={selectedRow.clientLogo}
                  alt="Client Logo"
                  className="h-8 w-8 rounded-full ml-2"
                />
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Datalogger Version:
                </span>{' '}
                <span className="text-gray-600 dark:text-gray-400">
                  {selectedRow.dataloggerVersion}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Deployment Date:
                </span>{' '}
                <span className="text-gray-600 dark:text-gray-400">
                  {selectedRow.deploymentDate}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  End of Project Date:
                </span>{' '}
                <span className="text-gray-600 dark:text-gray-400">
                  {selectedRow.endDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FleetMasterTable;
