import React, { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import { mockData } from '../utils/mockData';
import GlobalFilter from '../components/GlobalFilter';
import ModalBuoyDetails from '../components/ModalBuoyDetails';
import useIsMobile from '../hooks/useIsMobile';

const FleetMasterTable = () => {
  // State management for sorting, filtering, and pagination
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  // State for Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  // Custom hook to detect mobile devices
  const isMobile = useIsMobile();

  const data = useMemo(() => mockData, []);

  const columns = useMemo(
    () => [
      {
        header: 'Buoy Name',
        accessorKey: 'buoyName',
      },
      {
        header: 'Buoy ID',
        accessorKey: 'buoyID',
      },
      {
        header: 'Status',
        accessorKey: 'buoyStatus',
      },
      {
        header: 'Project Name',
        accessorKey: 'projectName',
      },
      {
        header: 'Project Manager',
        accessorKey: 'projectManager',
      },
      {
        header: 'Coordinates',
        accessorKey: 'projectCoordinates',
      },
      {
        header: 'Client Name',
        accessorKey: 'clientName',
      },
      {
        header: 'Client Logo',
        accessorKey: 'clientLogo',
        cell: ({ getValue }) => (
          <img
            src={getValue()}
            alt="Client Logo"
            className="w-12 h-12 rounded"
          />
        ),
      },
      {
        header: 'Datalogger Version',
        accessorKey: 'dataloggerVersion',
      },
      {
        header: 'Deployment Date',
        accessorKey: 'deploymentDate',
      },
      {
        header: 'End Date',
        accessorKey: 'endDate',
      },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      pagination,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: 'includesString', // You can customize the global filter function
  });

  // Handler for clicking (tapping) a row
  const handleRowClick = (row) => {
    if (isMobile) {
      setSelectedRowData(row.original);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex flex-col m-4 sm:m-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
        <span className="text-2xl font-bold text-gray-800 dark:text-white">
          Fleet Master Table
        </span>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <GlobalFilter
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
          <select
            value={pagination.pageSize}
            onChange={(e) =>
              setPagination((prev) => ({
                ...prev,
                pageSize: Number(e.target.value),
                pageIndex: 0, // Reset to first page when page size changes
              }))
            }
            className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table Container with Horizontal Scrolling */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 text-left text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted()] || ''}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  onClick={() => handleRowClick(row)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-2 text-sm text-gray-900 dark:text-gray-100"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center p-4 text-gray-700 dark:text-gray-300"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
        <div className="flex space-x-2 mb-2 sm:mb-0">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={`px-4 py-2 border rounded ${
              table.getCanPreviousPage()
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            } dark:bg-blue-700 dark:hover:bg-blue-800 dark:border-blue-700`}
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={`px-4 py-2 border rounded ${
              table.getCanNextPage()
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            } dark:bg-blue-700 dark:hover:bg-blue-800 dark:border-blue-700`}
          >
            Next
          </button>
        </div>
        <span className="text-gray-700 dark:text-gray-300">
          Page <strong>{pagination.pageIndex + 1}</strong> of{' '}
          <strong>{table.getPageCount()}</strong>
        </span>
      </div>

      {/* Modal for Mobile View */}
      <ModalBuoyDetails
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {selectedRowData && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Buoy Details
            </h2>
            <div className="space-y-2">
              <div>
                <strong className="text-gray-700 dark:text-gray-300">
                  Buoy Name:
                </strong>{' '}
                <span className="text-gray-900 dark:text-gray-100">
                  {selectedRowData.buoyName}
                </span>
              </div>
              <div>
                <strong className="text-gray-700 dark:text-gray-300">
                  Buoy ID:
                </strong>{' '}
                <span className="text-gray-900 dark:text-gray-100">
                  {selectedRowData.buoyID}
                </span>
              </div>
              <div>
                <strong className="text-gray-700 dark:text-gray-300">
                  Status:
                </strong>{' '}
                <span className="text-gray-900 dark:text-gray-100">
                  {selectedRowData.buoyStatus}
                </span>
              </div>
              <div>
                <strong className="text-gray-700 dark:text-gray-300">
                  Project Name:
                </strong>{' '}
                <span className="text-gray-900 dark:text-gray-100">
                  {selectedRowData.projectName}
                </span>
              </div>
              <div>
                <strong className="text-gray-700 dark:text-gray-300">
                  Project Manager:
                </strong>{' '}
                <span className="text-gray-900 dark:text-gray-100">
                  {selectedRowData.projectManager}
                </span>
              </div>
              <div>
                <strong className="text-gray-700 dark:text-gray-300">
                  Coordinates:
                </strong>{' '}
                <span className="text-gray-900 dark:text-gray-100">
                  {selectedRowData.projectCoordinates}
                </span>
              </div>
              <div>
                <strong className="text-gray-700 dark:text-gray-300">
                  Client Name:
                </strong>{' '}
                <span className="text-gray-900 dark:text-gray-100">
                  {selectedRowData.clientName}
                </span>
              </div>
              <div>
                <strong className="text-gray-700 dark:text-gray-300">
                  Datalogger Version:
                </strong>{' '}
                <span className="text-gray-900 dark:text-gray-100">
                  {selectedRowData.dataloggerVersion}
                </span>
              </div>
              <div>
                <strong className="text-gray-700 dark:text-gray-300">
                  Deployment Date:
                </strong>{' '}
                <span className="text-gray-900 dark:text-gray-100">
                  {selectedRowData.deploymentDate}
                </span>
              </div>
              <div>
                <strong className="text-gray-700 dark:text-gray-300">
                  End Date:
                </strong>{' '}
                <span className="text-gray-900 dark:text-gray-100">
                  {selectedRowData.endDate}
                </span>
              </div>
              <div>
                <strong className="text-gray-700 dark:text-gray-300">
                  Client Logo:
                </strong>{' '}
                <img
                  src={selectedRowData.clientLogo}
                  alt="Client Logo"
                  className="w-16 h-16 rounded mt-2"
                />
              </div>
            </div>
          </div>
        )}
      </ModalBuoyDetails>
    </div>
  );
};

export default FleetMasterTable;
