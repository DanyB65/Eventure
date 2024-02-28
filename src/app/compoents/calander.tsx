"use client"
// Calendar.tsx
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface CalendarProps {
  selectedDay: Date;
  onSelect: (day: Date) => void;
  disabledDays: Date[]; // Assuming this is meant to represent multiple days
}

const Calendar: React.FC<CalendarProps> = ({ selectedDay, onSelect, disabledDays }) => {
  return (
    <div>
      <DayPicker
        mode="single"
        selected={selectedDay}
        onSelect={onSelect}
        disabled={disabledDays}
        style={{ backgroundColor: 'white', color: 'black' }} // Styles for DayPicker
      />
      {/* Display selected day within Calendar component */}
      <p style={{ color: 'black', marginTop: '10px' }}>Selected day: {selectedDay ? selectedDay.toLocaleDateString() : 'None'}</p>
    </div>
  );
};

export default Calendar;
