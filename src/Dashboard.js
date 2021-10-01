import React, { useState } from "react";
import InfoCard from "./components/InfoCard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="relative md:flex h-screen ">
        {/* sidebar */}
        <Sidebar sidebar={sidebar} showSidebar={showSidebar} />

        <div className="flex flex-col md:flex-grow">
          {/* Navbar */}
          <Navbar showSidebar={showSidebar} />

          <main className="h-full overflow-y-auto bg-gray-100 dark:bg-black">
            <div className="px-4 sm:px-6 lg:px-8 py-4 w-full max-w-9xl mx-auto">
              <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-white">
                Dashboard
              </h2>
              {/* Card */}
              <InfoCard />

              {/* Table */}
              <Table />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
