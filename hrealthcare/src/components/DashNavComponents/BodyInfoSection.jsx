import React from "react";
import { FaHeart, FaLungs, FaTooth, FaBone } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const BodyInfoSection = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-row items-center justify-between px-6">
        {" "}
        <div className="text-4xl font-bold text-gray-800">Dashboard</div>
        <div className="flex  items-center justify-center gap-2 font-semibold text-sm">
          {" "}
          This Week <RiArrowDropDownLine size={20} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 p-6">
     
        <div className="relative ">
          <img src="/body.png" alt="Body Anatomy" className="mx-auto" />

   
          <div className="absolute top-[100px] left-[220px] transform -translate-x-1/2">
            <div className="flex items-center gap-2 bg-blue-900 text-white text-[10px] font-bold px-2 py-3 rounded-full shadow w-[100px]">
              <FaHeart className="text-red-600" />
              Healthy Heart
            </div>
          </div>

          <div className="absolute bottom-[120px] left-[20px]">
            <div className="flex items-center gap-2 bg-cyan-500 text-blue-800 font-bold text-[12px] px-2 py-3 rounded-full shadow w-[120px]">
              🦵 Healthy Leg
            </div>
          </div>
        </div>

        <div className="space-y-6 md:w-fit w-full">
          <div className="space-y-4">
            <HealthCard
              icon={
                <img
                  src="/lung.jpg"
                  className=" h-[70px] w-fit text-red-500 text-4xl"
                />
              }
              title="Lungs"
              date="26 Oct 2021"
              percent={30}
              color="bg-red-400"
            />
            <HealthCard
              icon={
                <img
                  src="/tooth.jpg"
                  className=" h-[70px] w-fit text-cyan-500 text-4xl"
                />
              }
              title="Teeth"
              date="26 Oct 2021"
              percent={75}
              color="bg-cyan-400"
            />
            <HealthCard
              icon={
                <img
                  src="/bone.jpg"
                  className=" h-[70px] w-fit text-orange-500 text-4xl"
                />
              }
              title="Bone"
              date="26 Oct 2021"
              percent={45}
              color="bg-orange-400"
            />
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-blue-500 font-semibold">
              Details →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const HealthCard = ({ icon, title, date, percent, color }) => (
  <div className="bg-white p-2 rounded-xl shadow-md flex flex-col items-start  gap-2 w-full">
    <div className="flex flex-row items-center gap-2">
      <div className="p-3 rounded-full ">{icon}</div>
      <h4 className="font-bold text-gray-800">{title}</h4>
    </div>

    <div className="flex-1">
      <p className="text-sm text-gray-400">Date: {date}</p>
      <div className="md:w-[160px] w-[300px] bg-gray-200 rounded-full h-2 mt-2">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  </div>
);

export default BodyInfoSection;
