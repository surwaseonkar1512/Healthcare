import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const days = [
  {
    day: "Mon",
    date: 25,
    slots: ["10:00", "11:00", "12:00"],
  },
  {
    day: "Tues",
    date: 26,
    highlight: true,
    slots: ["08:00", "09:00", "10:00"],
    selected: "09:00",
  },
  {
    day: "Wed",
    date: 27,
    slots: ["12:00", null, "13:00"],
  },
  {
    day: "Thurs",
    date: 28,
    slots: ["10:00", "11:00", null],
    selected: "11:00",
  },
  {
    day: "Fri",
    date: 29,
    slots: [null, "14:00", "16:00"],
  },
  {
    day: "Sat",
    date: 30,
    slots: ["12:00", "14:00", "15:00"],
    selected: "12:00",
  },
  {
    day: "Sun",
    date: 31,
    disabled: true,
    slots: ["09:00", "10:00", "11:00"],
  },
];

const DateSection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-5xl  ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">October 2021</h2>
        <div className="flex items-center gap-2 text-blue-600">
          <FaChevronLeft className="cursor-pointer" />
          <FaChevronRight className="cursor-pointer" />
        </div>
      </div>

      <div className="grid md:grid-cols-7 grid-cols-4 gap-4 text-center overflow-x-auto">
        {days.map((day, idx) => (
          <div key={idx}>
            <div
              className={`text-sm font-medium mb-1 ${
                day.disabled ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {day.day}
            </div>
            <div
              className={`text-lg font-bold mb-4 ${
                day.disabled ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {day.date}
            </div>

            <div
              className={`flex flex-col items-center gap-4 ${
                day.highlight ? "bg-blue-50 p-2 rounded-xl" : ""
              }`}
            >
              {day.slots.map((slot, i) => (
                <div
                  key={i}
                  className={`
                    text-xs px-2 py-1 rounded-full w-full max-w-[64px]
                    ${
                      slot === null
                        ? "text-transparent"
                        : slot === day.selected
                        ? "bg-blue-700 text-white"
                        : day.highlight
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-600"
                    }
                  `}
                >
                  {slot || <div className="text-black">---</div>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateSection;
