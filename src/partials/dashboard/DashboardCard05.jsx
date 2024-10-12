import React, { useState } from 'react';

function DashboardCard05() {
  const connections = [
    { type: 'Certus', number: '00 1', ipUrl: '192.168.1.1', port: '8080' },
    { type: 'Iridium1', number: '00 2', ipUrl: '192.168.1.2', port: '8081' },
    { type: 'Iridium2', number: '00 3', ipUrl: '192.168.1.3', port: '8082' },
    { type: '4G', number: '00 4', ipUrl: '192.168.1.4', port: '8083' },
  ];

  const [selectedConnection, setSelectedConnection] = useState(connections[0]);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Communications Configuration
        </h2>
      </header>
      <div className="px-5 py-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Connection Type:
          </label>
          <select
            className="form-select mt-1 block w-full dark:bg-gray-700 dark:text-gray-300"
            value={selectedConnection.type}
            onChange={(e) =>
              setSelectedConnection(
                connections.find((conn) => conn.type === e.target.value),
              )
            }
          >
            {connections.map((connection, index) => (
              <option key={index} value={connection.type}>
                {connection.type}
              </option>
            ))}
          </select>
        </div>
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b dark:border-gray-700 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
                Type of Connection
              </th>
              <th className="py-2 px-4 border-b dark:border-gray-700 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
                Connection Number
              </th>
              <th className="py-2 px-4 border-b dark:border-gray-700 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
                IP/URL
              </th>
              <th className="py-2 px-4 border-b dark:border-gray-700 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
                Port
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="py-2 px-4 border-b dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100">
                {selectedConnection.type}
              </td>
              <td className="py-2 px-4 border-b dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100">
                {selectedConnection.number}
              </td>
              <td className="py-2 px-4 border-b dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100">
                {selectedConnection.ipUrl}
              </td>
              <td className="py-2 px-4 border-b dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100">
                {selectedConnection.port}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardCard05;
