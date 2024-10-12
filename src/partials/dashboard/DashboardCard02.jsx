import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import { chartAreaGradient } from '../../charts/ChartjsConfig';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard02({ backgroundImage }) {
  const projectName = 'EOL-XYZ';
  const deploymentDate = '2023-09-01';
  const estimatedEndDate = '2024-09-01';

  return (
    <div
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Project Details
          </h2>
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link
                className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3"
                to="#0"
              >
                Edit
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3"
                to="#0"
              >
                Remove
              </Link>
            </li>
          </EditMenu>
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
          Project Name
        </div>
        <div className="flex flex-col mb-2">
          <input
            type="text"
            className="mb-2 p-2 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 border-none rounded"
            value={projectName}
            readOnly
          />
        </div>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
          Deployment Date
        </div>
        <div className="flex flex-col mb-2">
          <input
            type="text"
            className="mb-2 p-2 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 border-none rounded"
            value={deploymentDate}
            readOnly
          />
        </div>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
          Estimated End Date
        </div>
        <div className="flex flex-col mb-2">
          <input
            type="text"
            className="mb-2 p-2 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 border-none rounded"
            value={estimatedEndDate}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
export default DashboardCard02;
