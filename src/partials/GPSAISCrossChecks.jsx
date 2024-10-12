const GPSAISCrosschecks = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left text-gray-800 dark:text-gray-100">
              Parameter
            </th>
            <th className="py-2 px-4 border-b text-left text-gray-800 dark:text-gray-100">
              GPS Value
            </th>
            <th className="py-2 px-4 border-b text-left text-gray-800 dark:text-gray-100">
              Expected Range
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b text-gray-700 dark:text-gray-300">
              Latitude
            </td>
            <td className="py-2 px-4 border-b text-gray-700 dark:text-gray-300">
              45.1234
            </td>
            <td className="py-2 px-4 border-b text-gray-700 dark:text-gray-300">
              42.0000 - 48.0000
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b text-gray-700 dark:text-gray-300">
              Longitude
            </td>
            <td className="py-2 px-4 border-b text-gray-700 dark:text-gray-300">
              -93.1234
            </td>
            <td className="py-2 px-4 border-b text-gray-700 dark:text-gray-300">
              -95.0000 - -90.0000
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b text-gray-700 dark:text-gray-300">
              Altitude
            </td>
            <td className="py-2 px-4 border-b text-gray-700 dark:text-gray-300">
              10 m
            </td>
            <td className="py-2 px-4 border-b text-gray-700 dark:text-gray-300">
              0 - 20 m
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b text-gray-700 dark:text-gray-300">
              Speed (AIS)
            </td>
            <td className="py-2 px-4 border-b text-gray-700 dark:text-gray-300">
              5 knots
            </td>
            <td className="py-2 px-4 border-b text-gray-700 dark:text-gray-300">
              0 - 10 knots
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GPSAISCrosschecks;
