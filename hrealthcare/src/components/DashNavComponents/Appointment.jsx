import React from "react";

const appointments = [
  {
    title: "Dentist",
    time: "09:00–11:00",
    doctor: "Dr. Cameron Williamson",
    icon: "🦷",
    bg: "bg-blue-700 text-white",
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00–12:00",
    doctor: "Dr. Kevin Djones",
    icon: "💪",
    bg: "bg-blue-100 text-black",
  },
];

const schedule = [
  {
    day: "On Thursday",
    events: [
      {
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "🩺",
      },
      {
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "👁️",
      },
    ],
  },
  {
    day: "On Saturday",
    events: [
      {
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "❤️",
      },
      {
        title: "Neurologist",
        time: "16:00 PM",
        icon: "🧠",
      },
    ],
  },
];

const Appointment = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {appointments.map((a, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl ${a.bg} flex flex-col gap-1`}
          >
            <div className="flex items-center justify-between font-semibold">
              <span>{a.title}</span>
              <span className="text-lg">{a.icon}</span>
            </div>
            <p className="text-sm">{a.time}</p>
            <p className="text-sm">{a.doctor}</p>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        The Upcoming Schedule
      </h2>

      {schedule.map((section, i) => (
        <div key={i} className="mb-4">
          <h3 className="text-sm text-gray-500 mb-2">{section.day}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {section.events.map((event, j) => (
              <div
                key={j}
                className="bg-blue-50 p-4 rounded-xl text-black flex flex-col"
              >
                <div className="flex justify-between items-center mb-1 font-medium">
                  <span>{event.title}</span>
                  <span>{event.icon}</span>
                </div>
                <span className="text-sm text-gray-600">{event.time}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Appointment;
