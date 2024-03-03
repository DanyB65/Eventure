"use client"
// Events.tsx
import React, { useState } from 'react';
import Header from '@/app/compoents/header';
import Calendar from '@/app/compoents/calander';
import TimePicker from '@/app/compoents/timePicker';

function Events() {


  return (
    <>
      
      <div style={{ display: 'flex', padding: '20px' }}>
        <div>
          <Calendar/>
        </div>
        <TimePicker onSelectTime={function (time: string): void {
          throw new Error('Function not implemented.');
        } }/>
      </div>
    </>
  );
}

export default Events;