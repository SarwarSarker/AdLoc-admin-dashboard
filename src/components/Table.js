import React from "react";

const Table = () => {
  return (
    <>
      <div className="mt-8 mb-8 w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="bg-gray-200 dark:bg-bgDark1 text-sm text-gray-800 dark:text-gray-300 text-left uppercase tracking-wide border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-5">User</th>
                <th className="px-4 py-5">Amount</th>
                <th className="px-4 py-5">Status</th>
                <th className="px-4 py-5">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-gray-800 dark:text-gray-300 text-sm">
              <tr className="bg-white dark:bg-bgDark1">
                <td className="px-4 py-5 text-sm font-semibold">
                  Maria Anders
                </td>
                <td className="px-4 py-5">$1000</td>
                <td className="px-4 py-5">
                  <span className="bg-indigo-200 text-indigo-900 dark:bg-indigo-900 dark:text-white px-2 py-1 text-xs font-semibold rounded-full">
                    InProgress
                  </span>
                </td>
                <td className="px-4 py-5">6/10/2021</td>
              </tr>
              <tr className="bg-white dark:bg-bgDark1">
                <td className="px-4 py-5 text-sm font-semibold">Javid Korim</td>
                <td className="px-4 py-5">$500</td>
                <td className="px-4 py-5">
                  <span className="bg-green-200 text-green-900 dark:bg-green-900 dark:text-white px-2 py-1 text-xs font-semibold rounded-full">
                    Approved
                  </span>
                </td>
                <td className="px-4 py-5">6/10/2021</td>
              </tr>
              <tr className="bg-white dark:bg-bgDark1">
                <td className="px-4 py-5 text-sm font-semibold">
                  Staven Sanders
                </td>
                <td className="px-4 py-5">$800</td>
                <td className="px-4 py-5">
                  <span className="bg-red-200 text-red-900 dark:bg-red-900 dark:text-white px-2 py-1 text-xs font-semibold rounded-full">
                    Pending
                  </span>
                </td>
                <td className="px-4 py-5">6/10/2021</td>
              </tr>
              <tr className="bg-white dark:bg-bgDark1">
                <td className="px-4 py-5 text-sm font-semibold">Mosh Dalani</td>
                <td className="px-4 py-5">$800</td>
                <td className="px-4 py-5">
                  <span className="bg-green-200 text-green-900 dark:bg-green-900 dark:text-white px-2 py-1 text-xs font-semibold rounded-full">
                    Approved
                  </span>
                </td>
                <td className="px-4 py-5">6/10/2021</td>
              </tr>
              <tr className="bg-white dark:bg-bgDark1">
                <td className="px-4 py-5 text-sm font-semibold">Jhon Deo</td>
                <td className="px-4 py-5">$800</td>
                <td className="px-4 py-5">
                  <span className="bg-red-200 text-red-900 dark:bg-red-900 dark:text-white px-2 py-1 text-xs font-semibold rounded-full">
                    Pending
                  </span>
                </td>
                <td className="px-4 py-5">6/10/2021</td>
              </tr>
              <tr className="bg-white dark:bg-bgDark1">
                <td className="px-4 py-5 text-sm font-semibold">Alina Rodes</td>
                <td className="px-4 py-5">$800</td>
                <td className="px-4 py-5">
                  <span className="bg-indigo-200 text-indigo-900 dark:bg-indigo-900 dark:text-white px-2 py-1 text-xs font-semibold rounded-full">
                    InProgress
                  </span>
                </td>
                <td className="px-4 py-5">6/10/2021</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-8 py-5 flex flex-col border-t border-white dark:border-gray-800 md:flex-row justify-between items-center bg-gray-200 dark:bg-bgDark1 text-xs text-gray-800 dark:text-gray-300 font-semibold">
          <span>SHOWING 21-50 OF 100</span>
          <span className="text-sm font-semibold mt-2 sm:mt-auto">
            <nav>
              <ul className="inline-flex items-center space-x-4">
                <li>
                  <button className="">
                    <i className="fas fa-angle-left"></i>
                  </button>
                </li>
                <li>
                  <button className="px-2 py-1 bg-indigo-700 text-white text-sm font-semibold rounded-lg">
                    1
                  </button>
                </li>
                <li>
                  <button className="">2</button>
                </li>
                <li>
                  <button className="">3</button>
                </li>
                <li>
                  <span>...</span>
                </li>
                <li>
                  <button className="">7</button>
                </li>
                <li>
                  <button className="">8</button>
                </li>
                <li>
                  <button className="">9</button>
                </li>
                <li>
                  <button className="">
                    <i className="fas fa-angle-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </>
  );
};

export default Table;
