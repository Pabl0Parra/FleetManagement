import MapComponent from '../MapComponent';

function DashboardCard04() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Map Location
        </h2>
      </header>
      <div className="relative h-96">
        {/* Map displaying buoy location */}
        <MapComponent />
      </div>
    </div>
  );
}

export default DashboardCard04;
