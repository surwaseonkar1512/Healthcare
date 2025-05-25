import React from "react";

const days = [
  { name: "Mon", bars: [40, 80, 60] },
  { name: "Tues", bars: [70, 100, 90] },
  { name: "Wed", bars: [50, 60, 30] },
  { name: "Thurs", bars: [80, 90, 70] },
  { name: "Fri", bars: [100, 80, 60] },
  { name: "Sat", bars: [60, 40, 70] },
  { name: "Sun", bars: [70, 90, 40] },
];

const barColors = ["bg-gray-300", "bg-cyan-400", "bg-blue-700"];

const ActivitySection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl mx-auto my-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Activity</h2>
        <span className="text-sm text-gray-400">
          3 appointments on this week
        </span>
      </div>

      <div className="flex justify-between items-end gap-4 overflow-x-auto">
        {days.map((day, index) => (
          <div key={index} className="flex flex-col items-center space-y-1">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col justify-end items-center gap-1 h-28">
                {day.bars.map((height, i) => (
                  <div
                    key={i}
                    className={`bg-gray-300 w-1 rounded-full`}
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex flex-col justify-end items-center gap-1 h-28 mt-5">
                {day.bars.map((height, i) => (
                  <div
                    key={i}
                    className={`${barColors[i + 1]} w-1 top-4 rounded-full`}
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex flex-col justify-end items-center gap-1 h-28">
                {day.bars.map((height, i) => (
                  <div
                    key={i}
                    className={`${barColors[i]} w-1 rounded-full`}
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>
            <span className="text-xs text-gray-500">{day.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySection;
