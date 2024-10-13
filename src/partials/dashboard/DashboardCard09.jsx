import RandomBatteryDisplay from '../../utils/RandomBatteryDisplay';
import Tooltip from '../../components/Tooltip';
import PowerIcon from '../../images/power-button-icon.svg';
import EfficiencyIcon from '../../images/efficiency-icon.svg';
import RuntimeIcon from '../../images/runtime-icon.png';
import FuelIcon from '../../images/fuel-icon.png';

function DashboardCard09() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
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
        <div clasdivme="my-4 w-full flex flex-col items-center">
          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-4">
            {/* Power Output Metric */}
            <div className="flex items-center space-x-6 bg-gray-200 dark:bg-gray-700 px-6 py-4 rounded">
              <img
                src={PowerIcon}
                alt="Power Output Icon"
                className="h-16 w-16 text-blue-500"
              />
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                2.8 kW
              </div>
            </div>
            {/* Efficiency Metric */}
            <div className="flex items-center space-x-6 bg-gray-200 dark:bg-gray-700 px-6 py-4 rounded">
              <img
                src={EfficiencyIcon}
                alt="Efficiency Icon"
                className="h-16 w-16 text-yellow-500"
              />
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                45%
              </div>
            </div>
            {/* Runtime Metric */}
            <div className="flex items-center space-x-6 bg-gray-200 dark:bg-gray-700 px-6 py-4 rounded">
              <img
                src={RuntimeIcon}
                alt="Runtime Icon"
                className="h-16 w-16 text-green-500"
              />
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                24 Hrs
              </div>
            </div>
            {/* Fuel Consumption Metric */}
            <div className="flex items-center space-x-6 bg-gray-200 dark:bg-gray-700 px-6 py-4 rounded">
              <img
                src={FuelIcon}
                alt="Fuel Consumption Icon"
                className="h-16 w-16 text-red-500"
              />
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                3.2 L/D
              </div>
            </div>
          </div>
          {/* Battery Container */}
          <RandomBatteryDisplay />
        </div>
      </div>
    </div>
  );
}

export default DashboardCard09;
