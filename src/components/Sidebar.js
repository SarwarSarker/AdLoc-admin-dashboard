import React from "react";

const Sidebar = ({ sidebar, showSidebar }) => {
  return (
    <>
      <nav
        className={
          sidebar
            ? "absolute inset-0 transform md:transform-none duration-200 translate-x-0 ease-in md:relative opacity-100 md:opacity-0 z-10 w-72 h-screen bg-white text-gray-600 dark:bg-bgDark1 dark:text-white p-4"
            : "absolute inset-0 transform md:transform-none duration-200 -translate-x-full ease-out  opacity-0 md:opacity-100 md:relative z-10 w-64 h-screen bg-white text-gray-600 dark:bg-bgDark1 dark:text-white p-4"
        }
      >
        <div className="flex justify-between align-center">
          <span className="text-xl sm:text-2xl font-bold p-2">AdLoc</span>
          <button
            className="p-2 md:hidden focus:outline-none focus:bg-gray-300 hover:bg-gray-300 rounded-md"
            onClick={showSidebar}
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <ul className="mt-4 text-md text-gray-500 dark:text-gray-400 font-semibold w-full">
          <li className="px-6 py-4 hover:bg-indigo-600 hover:text-white rounded-lg">
            <a href="#home" className="active">
              <span className="fas fa-tachometer-alt mr-3"></span>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="px-6 py-4 hover:bg-indigo-600 hover:text-white rounded-lg">
            <a href="#customer">
              <span className="fas fa-user mr-3"></span>
              <span>Customer</span>
            </a>
          </li>
          <li className="px-6 py-4 hover:bg-indigo-600 hover:text-white rounded-lg">
            <a href="#order">
              <span className="fas fa-dolly mr-3"></span>
              <span>Orders</span>
            </a>
          </li>
          <li className="px-6 py-4 hover:bg-indigo-600 hover:text-white rounded-lg">
            <a href="#inventory">
              <span className="fas fa-box mr-3"></span>
              <span>Inventory</span>
            </a>
          </li>
          <li className="px-6 py-4 hover:bg-indigo-600 hover:text-white rounded-lg">
            <a href="#account">
              <span className="fas fa-stamp mr-3"></span>
              <span>Accounts</span>
            </a>
          </li>
          <li className="px-6 py-4 hover:bg-indigo-600 hover:text-white rounded-lg">
            <a href="#task">
              <span className="fas fa-border-all mr-3"></span>
              <span>Tasks</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
