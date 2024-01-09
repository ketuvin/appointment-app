import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useAppointmentStore } from '../store';

const CalendarView: React.FC = () => {
  const store = useAppointmentStore();
  const appointments = store.appointments;

  const [selectedDate, setSelectedDate] = useState(new Date());

  const appointmentsOnSelectedDate = appointments.filter(
    (appointment) => new Date(appointment.dateTime).toDateString() === selectedDate.toDateString()
  );

  const handleDateChange = (date: Date | Date[]) => {
    if (Array.isArray(date)) {
      // Handle multi-date selection if needed
      return;
    }
    setSelectedDate(date);
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Calendar View</h2>

      <div className="flex">
        <div className="w-1/3">
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
        <div className="w-2/3 ml-4">
          <h3 className="text-md font-semibold mb-2">Appointments on {selectedDate.toDateString()}</h3>
          <ul>
            {appointmentsOnSelectedDate.map((appointment, index) => (
              <li key={index} className="border-b border-gray-300 py-2">
                <p>Veterinary: {appointment.veterinary?.name}</p>
                <p>Service: {appointment.service}</p>
                <p>Pet: {appointment.pet.name}</p>
                <p>Owner: {appointment.ownerName}</p>
                <p>Date and Time: {appointment.dateTime}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
