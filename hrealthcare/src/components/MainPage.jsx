import React, { useState } from "react";
import MainSideBar from "./SidebarComponents/MainSideBar";
import MainDashboard from "./DashNavComponents/MainDashboard";

const MainPage = () => {
  const [active, setActive] = useState("Dashboard");
  return (
    <div className="grid grid-cols-12 items-start justify-start m-6 rounded-3xl bg-white">
      <div className="col-span-2 ">
        <MainSideBar active={active} setActive={setActive} />
      </div>
      <div className="md:col-span-10 col-span-12 h-full overflow-y-auto">
        <MainDashboard active={active} />
      </div>
    </div>
  );
};

export default MainPage;
