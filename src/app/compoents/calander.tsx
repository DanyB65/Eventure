// Calendar.tsx
import React, { useState } from "react";
import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
import "react-day-picker/dist/style.css";

interface CalendarProps {
  onSelect?: (day: Date | null) => void;
  disabledDays?: Date[]; // Already existing disabled days (if any)
  bookedDays?: Date[]; // New prop for booked days
  minBookingDate?: Date; // New prop for minimum booking date
  maxBookingDate?: Date; // New prop for maximum booking date
  onMonthChange?: (month: Date) => void; // New prop for handling month change
  selectedDay?: Date | null; // Add this line
}

const Calendar: React.FC<CalendarProps> = ({
  onSelect,
  disabledDays = [],
  bookedDays = [],
  minBookingDate,
  maxBookingDate,
  onMonthChange,
}) => {
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  // Combine disabledDays and bookedDays into a single array for the disabled prop
  const disabledDates = [...disabledDays, ...bookedDays];

  const handleSelect: SelectSingleEventHandler = (day: Date | undefined) => {
    setSelectedDay(day ?? null); // Convert `undefined` to `null` when passing to `setSelectedDay`
    onSelect?.(day ?? null); // Convert `undefined` to `null` for your `onSelect` prop callback
  };

  // Get today's date without time for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Ensure minBookingDate is today or later
  const fromDate =
    minBookingDate && minBookingDate > today ? minBookingDate : today;

  return (
    <div>
      <DayPicker
        mode="single"
        selected={selectedDay || undefined}
        onSelect={handleSelect}
        fromMonth={fromDate}
        toMonth={maxBookingDate}
        disabled={[
          { before: fromDate },
          ...(maxBookingDate ? [{ after: maxBookingDate }] : []),
          ...disabledDates.map((date) => ({ from: date, to: date })),
        ]}
        onMonthChange={onMonthChange}
        style={{ backgroundColor: "white", color: "black" }}
      />

      <p style={{ color: "black", marginTop: "10px" }}>
        Selected day: {selectedDay ? selectedDay.toLocaleDateString() : "None"}
      </p>
    </div>
  );
};

export default Calendar;
