import React from "react";
import { FaSearch } from "react-icons/fa";
import BodyInfoSection from "./BodyInfoSection";
import ActivitySection from "./ActivitySection";
import DateSection from "./DateSection";
import Appointment from "./Appointment";
import { RiProfileFill } from "react-icons/ri";

const Dashboard = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <div>
        <div className="p-6">
    
          <div className="relative w-full mb-6">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
        <BodyInfoSection />
        <ActivitySection />
      </div>
      <div className="min-h-screen w-fit  rounded-r-xl bg-blue-50 flex flex-col justify-between p-2">
        <div className="w-full flex items-center justify-end pr-10 pt-5 gap-5">
          <img src="/profile.jpg" className="h-[50px]" />
          <div className="text-xl font-bold">+</div>
        </div>
        <DateSection />
        <Appointment />
      </div>
    </div>
  );
};

export default Dashboard;
