// src/components/GlobalFilter.jsx

import React from 'react';

const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-700 dark:text-gray-300">Search:</span>
      <input
        type="text"
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default GlobalFilter;
