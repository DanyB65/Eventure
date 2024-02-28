"use client"
// Events.tsx
import React, { useState } from 'react';
import Header from '@/app/compoents/header';
import Calendar from '@/app/compoents/calander';
import TimePicker from '@/app/compoents/timePicker';

function Events() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const disabledDays = [new Date(2024, 1, 15)]; // Example of disabled days

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex', padding: '20px' }}>
        <div>
          <Calendar selectedDay={selectedDay} onSelect={handleDayClick} disabledDays={disabledDays} />
        </div>
        <div style={{ marginLeft: '20px' }}>
          <TimePicker onSelectTime={handleTimeSelect} />
          <p>Selected time: {selectedTime}</p>
        </div>
      </div>
    </>
  );
}

export default Events;
