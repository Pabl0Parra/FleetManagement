import React from 'react';
import { chartAreaGradient } from '../../charts/ChartjsConfig';
import LineChart from '../../charts/LineChart02';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard08() {
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
      // Indigo line
      {
        label: '80 m',
        data: [
          73, 64, 73, 69, 104, 104, 164, 164, 120, 120, 120, 148, 142, 104, 122,
          110, 104, 152, 166, 233, 268, 252, 284, 284, 333, 323,
        ],
        borderColor: tailwindConfig().theme.colors.violet[500],
        fill: false,
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
      // Blue line
      {
        label: '140 m',
        data: [
          1.8, 0.8, 0.4, 3.8, 0.4, 2.4, 0.3, 1.2, 0.0, 0.0, 0.4, 0.0, 0.8, 0.0,
          2.7, 0.0, 1.2, 0.4, 1.2, 0.9, 0.9, 2.1, 1.5, 0.9, 1.2, 0.6,
        ],
        borderColor: tailwindConfig().theme.colors.sky[500],
        fill: false,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.sky[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.sky[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
      // green line
      {
        label: 'Average',
        data: [
          1.2, 3.4, 2.8, 0.6, 1.8, 3.2, 2.9, 2.5, 0.7, 2.3, 0.0, 1.1, 3.8, 3.5,
          4.4, 3.6, 2.1, 3.3, 4.0, 3.1, 2.0, 2.2, 1.5, 2.6, 4.5, 5.0,
        ],
        borderColor: tailwindConfig().theme.colors.green[500],
        fill: false,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.green[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.green[500],
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
          LiDAR Data
        </h2>
      </header>
      <LineChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard08;
