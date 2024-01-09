import React from 'react';
import { useStore } from '../store';

const AppointmentList: React.FC = () => {
  const store = useStore();
  const appointments = store.appointments;

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Appointment List</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index} className="border-b border-gray-300 py-2">
            {/* Display appointment details, you can customize this based on your design */}
            <p>Veterinary: {appointment.veterinary?.name}</p>
            <p>Service: {appointment.service}</p>
            {/* Display other appointment details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
