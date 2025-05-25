import React from "react";

import Dashboard from "./Dashboard";
import { RiAlertFill } from "react-icons/ri";

const MainDashboard = ({ active }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {active === "Dashboard" ? (
        <Dashboard />
      ) : (
        <div className="flex flex-col items-center justify-center text-center text-gray-500 mt-[300px]">
          <RiAlertFill className="w-12 h-12 text-red-500 mb-4" />
          <p className="text-lg font-semibold">Data not found</p>
          <p className="text-sm text-gray-400">
            Please check your selection or try again.
          </p>
        </div>
      )}
    </div>
  );
};

export default MainDashboard;
