import React from 'react';
import PropTypes from 'prop-types';
import { batteryLevels } from '../utils/batteryLevels';

const BatteryDisplay = ({ percentage }) => {
  const level =
    batteryLevels.find((lvl) => lvl.percentage === percentage) ||
    batteryLevels[0];

  // Define the alert icon
  const AlertIcon = (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <div className="w-48">
      <div className="shadow w-full rounded border-2 border-gray-400 flex my-1 relative">
        {/* Decorative Border */}
        <div className="border-r-8 h-6 rounded-r absolute flex border-gray-400 ml-24 mt-2 z-10"></div>

        {/* Battery Level */}
        <div
          className={`cursor-default ${level.bgColor} text-xs font-bold leading-none flex items-center justify-center m-1 py-4 text-center text-white`}
          style={{ width: level.width }}
        >
          {/* Label or Icon */}
          <div className={`absolute left-0 mx-8 ${level.labelColor}`}>
            {level.icon === 'alert' ? AlertIcon : level.label}
          </div>
        </div>
      </div>
    </div>
  );
};

BatteryDisplay.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default BatteryDisplay;
