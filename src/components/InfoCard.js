import React from "react";

const InfoCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2 lg:gap-5 ">
        <div className="flex space-x-5 items-center bg-white dark:bg-bgDark1 dark:border-bgDark1 p-4 border border-gray-100 rounded-lg shadow-md">
          <div>
            <i className="fas fa-user text-red-900 bg-red-100 dark:text-white dark:bg-red-700 p-4 rounded-full"></i>
          </div>
          <div>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
              Total Users
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              124
            </p>
          </div>
        </div>

        <div className="flex space-x-5 items-center bg-white dark:bg-bgDark1 dark:border-bgDark1 p-4 border border-gray-100 rounded-lg shadow-md">
          <div>
            <i className="fas fa-hand-holding-usd text-green-900 bg-green-100 dark:text-white dark:bg-green-700 p-4 rounded-full"></i>
          </div>
          <div>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
              Total Revenue
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              $ 10000
            </p>
          </div>
        </div>

        <div className="flex space-x-5 items-center bg-white dark:bg-bgDark1 dark:border-bgDark1 p-4 border border-gray-100 rounded-lg shadow-md">
          <div>
            <i className="fas fa-cart-arrow-down text-blue-900 bg-blue-100 dark:text-white dark:bg-blue-700 p-4 rounded-full"></i>
          </div>
          <div>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
              New Sales
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              1200
            </p>
          </div>
        </div>

        <div className="flex space-x-5 items-center bg-white dark:bg-bgDark1 dark:border-bgDark1 p-4 border border-gray-100 rounded-lg shadow-md">
          <div>
            <i className="fas fa-comment-alt text-pink-900 bg-pink-100 dark:text-white dark:bg-pink-700 p-4 rounded-full"></i>
          </div>
          <div>
            <p className="mb-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
              Pending Issues
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              234
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
