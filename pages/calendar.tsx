import React from 'react';
import CalendarView from '../components/CalendarView';

const CalendarPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-6">Calendar</h1>
      <CalendarView />
    </div>
  );
};

export default CalendarPage;