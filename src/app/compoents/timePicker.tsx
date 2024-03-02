// TimePicker.tsx
import React from 'react';

interface TimePickerProps {
  onSelectTime: (time: string) => void;
}


const TimePicker: React.FC<TimePickerProps> = ({ onSelectTime }) => {
  const times = []; // Placeholder for time options
  for (let hour = 0; hour < 24; hour++) {
    const hourAMPM = hour % 12 === 0 ? 12 : hour % 12;
    const suffix = hour < 12 ? 'AM' : 'PM';
    times.push(`${hourAMPM}:00 ${suffix}`);
    times.push(`${hourAMPM}:30 ${suffix}`);
  }

  return (
    <select 
      onChange={(e) => onSelectTime(e.target.value)} 
      defaultValue=""
      style={{ backgroundColor: 'white', color: 'black' }} // Ensuring text appears black on white background
    >
      <option value="" disabled>Select a time</option>
      {times.map(time => (
        <option key={time} value={time}>{time}</option>
      ))}
    </select>
  );
};

export default TimePicker;
