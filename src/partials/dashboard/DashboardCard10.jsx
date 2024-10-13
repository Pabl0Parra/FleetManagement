import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

function DashboardCard10() {
  const customers = [
    {
      id: '0',
      image: Image01,
      name: 'EPA 1',
      dataCleaned: true,
      status: 'Processed',
      date: '1/5/2023',
      operationName: 'System Update',
    },
    {
      id: '1',
      image: Image02,
      name: 'EPA 3',
      dataCleaned: false,
      status: 'Pending',
      date: '3/12/2023',
      operationName: 'Routine Maintenance',
    },
    {
      id: '2',
      image: Image03,
      name: 'EPA 4',
      dataCleaned: true,
      status: 'Completed',
      date: '5/22/2024',
      operationName: 'Security Patch',
    },
    {
      id: '3',
      image: Image04,
      name: 'EPA 1',
      dataCleaned: false,
      status: 'In Progress',
      date: '7/8/2024',
      operationName: 'Database Optimization',
    },
    {
      id: '4',
      image: Image05,
      name: 'EPA 2',
      dataCleaned: true,
      status: 'Processed',
      date: '9/15/2020',
      operationName: 'Network Upgrade',
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          DPR´s
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Sent by</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Maintenance date
                  </div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Operation name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Data cleaned</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Status</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              {customers.map((customer) => (
                <tr key={customer.id}>
                  {/* Sent by */}
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <img
                          className="rounded-full"
                          src={customer.image}
                          width="40"
                          height="40"
                          alt={customer.name}
                        />
                      </div>
                      <div className="font-medium text-gray-800 dark:text-gray-100">
                        {customer.name}
                      </div>
                    </div>
                  </td>
                  {/* Maintenance date */}
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{customer.date}</div>
                  </td>
                  {/* Operation name */}
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-green-500">
                      {customer.operationName}
                    </div>
                  </td>
                  {/* Data cleaned */}
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">
                      {customer.dataCleaned ? (
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Yes
                        </span>
                      ) : (
                        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-red-100">
                          No
                        </span>
                      )}
                    </div>
                  </td>
                  {/* Status */}
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">
                      <span
                        className={`px-2 py-1 font-semibold leading-tight rounded-full ${
                          customer.status === 'Processed'
                            ? 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100'
                            : customer.status === 'Pending'
                            ? 'text-yellow-700 bg-yellow-100 dark:bg-yellow-700 dark:text-yellow-100'
                            : customer.status === 'Completed'
                            ? 'text-blue-700 bg-blue-100 dark:bg-blue-700 dark:text-blue-100'
                            : 'text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-100'
                        }`}
                      >
                        {customer.status}
                      </span>
                    </div>
                  </td>
                  {/* Action */}
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex justify-center space-x-2">
                      <button className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full hover:bg-blue-200 dark:bg-blue-700 dark:text-blue-100 dark:hover:bg-blue-600">
                        Edit
                      </button>
                      <button className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full hover:bg-red-200 dark:bg-red-700 dark:text-red-100 dark:hover:bg-red-600">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard10;
