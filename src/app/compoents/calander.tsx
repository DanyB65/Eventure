'use client'
import "react-day-picker/dist/style.css";
// Calendar.tsx
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar: React.FC = () => {
  return (
    <div>
      <DayPicker />
    </div>
  );
};

export default Calendar;
