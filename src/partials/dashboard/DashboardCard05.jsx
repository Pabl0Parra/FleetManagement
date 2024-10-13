import React, { useState } from 'react';
import LineChart from '../../charts/LineChart01';
import { chartAreaGradient } from '../../charts/ChartjsConfig';
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard05() {
  const connections = [
    { type: 'Certus', number: '00 1', ipUrl: '192.168.1.1', port: '8080' },
    { type: 'Iridium1', number: '00 2', ipUrl: '192.168.1.2', port: '8081' },
    { type: 'Iridium2', number: '00 3', ipUrl: '192.168.1.3', port: '8082' },
    { type: '4G', number: '00 4', ipUrl: '192.168.1.4', port: '8083' },
  ];

  const [selectedConnection, setSelectedConnection] = useState(connections[0]);

  const chartData = {
    labels: [
      '12-01-2022',
      '01-01-2023',
      '02-01-2023',
      '03-01-2023',
      '04-01-2023',
      '05-01-2023',
      '06-01-2023',
      '07-01-2023',
      '08-01-2023',
      '09-01-2023',
      '10-01-2023',
      '11-01-2023',
      '12-01-2023',
      '01-01-2024',
      '02-01-2024',
      '03-01-2024',
      '04-01-2024',
      '05-01-2024',
      '06-01-2024',
      '07-01-2024',
      '08-01-2024',
      '09-01-2024',
      '10-01-2024',
      '11-01-2024',
      '12-01-2024',
      '01-01-2025',
    ],
    datasets: [
      {
        data: [
          540, 466, 540, 466, 385, 432, 334, 334, 289, 289, 200, 289, 222, 289,
          289, 403, 554, 304, 289, 270, 134, 270, 829, 344, 388, 364,
        ],
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          return chartAreaGradient(ctx, chartArea, [
            {
              stop: 0,
              color: `rgba(${hexToRGB(
                tailwindConfig().theme.colors.violet[500],
              )}, 0)`,
            },
            {
              stop: 1,
              color: `rgba(${hexToRGB(
                tailwindConfig().theme.colors.violet[500],
              )}, 0.2)`,
            },
          ]);
        },
        borderColor: tailwindConfig().theme.colors.violet[500],
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
      {
        data: [
          689, 562, 477, 477, 477, 477, 458, 314, 430, 378, 430, 498, 642, 350,
          145, 145, 354, 260, 188, 188, 300, 300, 282, 364, 660, 554,
        ],
        borderColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.gray[500],
        )}, 0.25)`,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.gray[500],
        )}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.gray[500],
        )}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
    ],
  };

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
      {/* Chart implementation below the table */}
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mt-2 ml-4">
          Connectivity Time and Failures
        </div>
        <LineChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard05;
