import React from 'react';
import { useThemeProvider } from '../utils/ThemeContext';

function FleetMasterTable() {
  const { currentTheme } = useThemeProvider();
  const darkMode = currentTheme === 'dark';

  const mockData = Array.from({ length: 50 }, (_, i) => ({
    buoyName: `E${i + 1}`,
    buoyID: `ID-${i + 1}`,
    buoyStatus: i % 2 === 0 ? 'Active' : 'Inactive',
    projectName: `Project ${i + 1}`,
    projectManager: `Manager ${i + 1}`,
    projectCoordinates: `36.${i + 1}N, -122.${i + 1}W`,
    clientName: `Client ${i + 1}`,
    clientLogo: 'https://via.placeholder.com/50',
    dataloggerVersion: `v${i + 1}.0`,
    deploymentDate: `2023-0${(i % 9) + 1}-01`,
    endDate: `2024-0${(i % 9) + 1}-01`,
  }));

  return (
    <div
      className={`flex flex-col p-6 bg-${
        darkMode ? 'gray-900' : 'white'
      } dark:bg-gray-800 shadow-md rounded-xl`}
    >
      <header className="pb-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Fleet Master Table
        </h2>
      </header>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 mt-4">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Buoy Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Buoy ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Buoy Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Project Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Project Manager
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Project Coordinates
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Client Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Client Logo
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Datalogger Version
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              Deployment Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              End of Project Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {mockData.map((row, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                {row.buoyName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {row.buoyID}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {row.buoyStatus}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {row.projectName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {row.projectManager}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {row.projectCoordinates}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {row.clientName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                <img
                  src={row.clientLogo}
                  alt="Client Logo"
                  className="h-8 w-8 rounded-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {row.dataloggerVersion}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {row.deploymentDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {row.endDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FleetMasterTable;
