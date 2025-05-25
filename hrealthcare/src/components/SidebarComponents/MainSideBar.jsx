import { useState } from "react";
import {
  FaHistory,
  FaCalendarAlt,
  FaClipboardList,
  FaChartBar,
  FaComments,
  FaPhone,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { RiLayoutGridFill } from "react-icons/ri";

const MainSideBar = ({ active, setActive }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "General",
      items: [
        { name: "Dashboard", icon: <RiLayoutGridFill /> },
        { name: "History", icon: <FaHistory /> },
        { name: "Calendar", icon: <FaCalendarAlt /> },
        { name: "Appointments", icon: <FaClipboardList /> },
        { name: "Statistics", icon: <FaChartBar /> },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Chat", icon: <FaComments /> },
        { name: "Support", icon: <FaPhone /> },
      ],
    },
  ];

  return (
    <>
      <div className="lg:hidden flex items-center p-4">
        <button
          className="text-2xl text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full z-40 transform bg-blue-50 shadow-lg transition-transform duration-300
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static lg:min-h-screen lg:w-fit m-4 rounded-l-xl flex flex-col justify-between`}
      >
        <div>
          <div className="px-6 py-6 text-2xl font-bold text-gray-800">
            <span className="text-cyan-500">Health</span>
            <span className="text-gray-900">care.</span>
          </div>

          {menuItems.map((section, idx) => (
            <div key={idx} className="px-4 mt-3">
              <p className="text-xs text-gray-400 uppercase mb-2">
                {section.title}
              </p>
              {section.items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActive(item.name);
                    setMobileMenuOpen(false); // close on selection (mobile)
                  }}
                  className={`flex items-center gap-3 px-4 py-4 cursor-pointer w-full text-sm font-semibold rounded-lg transition-all
                    ${active === item.name ? "text-black" : "text-gray-400"}`}
                >
                  <span className="text-base">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="px-4 mb-6">
          <p className="text-xs text-gray-400 uppercase mb-2">Setting</p>
          <button
            onClick={() => {
              setActive("Setting");
              setMobileMenuOpen(false);
            }}
            className={`flex items-center gap-3 px-4 py-2 w-full text-sm rounded-lg transition-all
              ${active === "Setting" ? "text-black" : "text-gray-400"}`}
          >
            <FaCog className="text-base" />
            Setting
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default MainSideBar;
