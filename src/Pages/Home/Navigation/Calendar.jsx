import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <button
        onClick={() => setCurrentMonth(addDays(currentMonth, -30))}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Prev
      </button>
      <h2 className="text-xl font-bold">{format(currentMonth, "MMMM yyyy")}</h2>
      <button
        onClick={() => setCurrentMonth(addDays(currentMonth, 30))}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Next
      </button>
    </div>
  );

  const renderDays = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="grid grid-cols-7 text-center font-semibold mb-2">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        days.push(
          <div
            key={cloneDay}
            className={`p-2 text-center border rounded cursor-pointer ${
              !isSameMonth(cloneDay, monthStart) ? "text-gray-400" : ""
            } ${
              isSameDay(cloneDay, selectedDate)
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-100"
            }`}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {format(cloneDay, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-1 mb-1" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <motion.div
      className="p-6 max-w-3xl mx-auto bg-white shadow-xl rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-2xl font-bold mb-4 text-center">📅 Calendar Page</h1>
      {renderHeader()}
      {renderDays()}
      {renderCells()}

      {selectedDate && (
        <motion.div
          className="mt-4 p-4 bg-gray-100 rounded shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>
            <strong>Selected Date:</strong> {format(selectedDate, "PPP")}
          </p>
          <p>📌 You clicked on this date!</p>
        </motion.div>
      )}

      <div className="mt-6 text-center">
        <a
          href="public/assets/pdf/calender.pdf"
          download
          className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
        >
          Download Calendar PDF
        </a>
      </div>
    </motion.div>
  );
};

export default Calendar;
