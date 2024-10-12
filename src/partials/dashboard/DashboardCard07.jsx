import Image05 from '../../images/adcp-icon.ico';
import Image06 from '../../images/lidar-icon.webp';
import Image07 from '../../images/ctd-icon.png';
import Image08 from '../../images/waveRaider-icon.png';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Sensors Status
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Sensor</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Status</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Observation</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Flag</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Availability</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src={Image08}
                      className="w-10 h-10"
                      alt="wave raider"
                    />
                    <div className="text-gray-800 dark:text-gray-100 ml-2">
                      Wave
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Frozen</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">
                    Missing data since 02/10/24
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">8802</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">44.7%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <svg
                      width="36px"
                      height="36px"
                      viewBox="0 0 1024 1024"
                      class="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M440.277481 390.185208V626.592988l-83.151447 60.801898L323.222878 776.847429l41.997715 137.757747 84.311922 59.814055 101.041317 10.869471 94.270275-53.394674s50.168999-82.211558 51.633181-88.224932c1.464182-6.013375-3.500609-108.544448-5.700078-114.164603s-25.11487-62.950217-25.11487-62.950217l-72.809466-51.150448 0.127876-218.987856"
                        fill="#5FCEFF"
                      />
                      <path
                        d="M432.876651 310.262633h160.100902V377.234554h-160.100902z"
                        fill="#FFB578"
                      />
                      <path
                        d="M440.277481 233.536961h143.860635V300.508882h-143.860635z"
                        fill="#FF4893"
                      />
                      <path
                        d="M512.911117 1007.651038c-116.942712 0-212.082545-95.139833-212.082545-212.082545 0-77.224389 42.592339-148.588855 109.653773-185.669732V117.793088c0-56.49567 45.949087-102.460741 102.428772-102.460741s102.428772 45.961874 102.428772 102.460741v492.102476c67.058237 37.071287 109.653773 108.43895 109.653773 185.672929 0 116.942712-95.139833 212.082545-212.082545 212.082545z m0-947.562049c-31.799594 0-57.67213 25.885324-57.67213 57.704099v505.813993a22.384715 22.384715 0 0 1-12.921882 20.284349c-58.762274 27.391065-96.731891 86.926989-96.731891 151.677063 0 92.262621 75.063282 167.325903 167.325903 167.325903s167.325903-75.060086 167.325903-167.325903c0-64.762861-37.96642-124.301982-96.725497-151.677063a22.36873 22.36873 0 0 1-12.928276-20.284349V117.793088c0-31.818776-25.872536-57.704099-57.67213-57.704099z"
                        fill="#4F46A3"
                      />
                      <path
                        d="M512.911117 933.77061c-74.193725 0-134.557647-60.37671-134.557647-134.589617 0-52.055172 30.517636-99.935188 77.748681-121.97144a22.378321 22.378321 0 1 1 18.925666 40.562306c-31.540645 14.715345-51.917705 46.671587-51.917705 81.412331 0 49.532815 40.284175 89.832974 89.801005 89.832975s89.801005-40.296962 89.801006-89.832975a22.378321 22.378321 0 1 1 44.756642 0c0 74.209709-60.363922 134.586419-134.557648 134.58642zM512.911117 179.173626H432.860666a22.378321 22.378321 0 1 1 0-44.756642h80.050451a22.378321 22.378321 0 1 1 0 44.756642zM592.833692 255.899298H432.860666a22.378321 22.378321 0 1 1 0-44.756642h159.973026a22.378321 22.378321 0 1 1 0 44.756642zM592.833692 332.62497H432.860666a22.378321 22.378321 0 1 1 0-44.756642h159.973026a22.378321 22.378321 0 1 1 0 44.756642zM592.833692 409.350642H432.860666a22.378321 22.378321 0 1 1 0-44.756642h159.973026a22.378321 22.378321 0 1 1 0 44.756642z"
                        fill="#4F46A3"
                      />
                    </svg>
                    <div className="text-gray-800 dark:text-gray-100 ml-3">
                      Stemp
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Fully Operational</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">99.3%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img src={Image05} width="40" height="40" alt="ADCP" />
                    <div className="text-gray-800 dark:text-gray-100 ml-2">
                      ADCP
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Fully Operational</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">96.2%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img src={Image06} width="40" height="50" alt="Lidar" />
                    <div className="text-gray-800 dark:text-gray-100 ml-2">
                      LiDAR
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Survival mode</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">
                    Power supply issue
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">9999</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">89.5%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src={Image07}
                      width="40"
                      height="80"
                      alt="Indiehackers"
                    />
                    <div className="text-gray-800 dark:text-gray-100 ml-2">
                      CTD
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Fully Operational</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center">-</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">84.1%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
