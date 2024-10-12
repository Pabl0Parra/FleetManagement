import React from 'react';
import { Link } from 'react-router-dom';
import EditMenu from '../../components/DropdownEditMenu';
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01({ backgroundImage }) {
  const cardTitle = 'Basic Details';
  const location = 'Korea';
  const status = 'Deployed';
  const projectManagerName = 'John Smith';

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
            {cardTitle}
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
          Location
        </div>
        <div className="flex flex-col mb-2">
          <input
            type="text"
            className="mb-2 p-2 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 border-none rounded"
            value={location}
            readOnly
          />
        </div>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
          Status
        </div>
        <div className="flex flex-col mb-2">
          <input
            type="text"
            className="mb-2 p-2 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 border-none rounded"
            value={status}
            readOnly
          />
        </div>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
          Project Manager
        </div>
        <div className="flex flex-col mb-2">
          <input
            type="text"
            className="mb-2 p-2 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 border-none rounded"
            value={projectManagerName}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;
