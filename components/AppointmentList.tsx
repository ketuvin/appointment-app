import React from 'react';
import { Appointment, useAppointmentStore } from '../store';

const AppointmentList: React.FC = () => {
  const appointments = useAppointmentStore((state) => state.appointments);
  const cancelAppointment = useAppointmentStore((state) => state.cancelAppointment);
  const rescheduleAppointment = useAppointmentStore((state) => state.rescheduleAppointment);

  const handleCancel = (appointment: Appointment) => {
    // Implement cancel appointment logic
    cancelAppointment(appointment);
  };

  const handleReschedule = (appointment: Appointment, newDatetime: string) => {
    // Implement reschedule appointment logic
    rescheduleAppointment(appointment, newDatetime);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index} className="mb-4 p-4 border rounded-md">
            {/* Display appointment details */}
            <div>
              <strong>Veterinary:</strong> {appointment.veterinary?.name || 'Not selected'}
            </div>
            <div>
              <strong>Service:</strong> {appointment.service}
            </div>
            <div>
              <strong>Pet Name:</strong> {appointment.pet.name}
            </div>
            <div>
              <strong>Owner:</strong> {appointment.ownerName}
            </div>
            <div>
              <strong>Date and Time:</strong> {appointment.dateTime}
            </div>

            {/* Implement cancel and reschedule buttons */}
            <div className="flex space-x-2">
              <button
                onClick={() => handleCancel(appointment)}
                className="bg-red-500 text-white px-2 py-1 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => handleReschedule(appointment, 'new_datetime_here')}
                className="bg-yellow-500 text-white px-2 py-1 rounded-md"
              >
                Reschedule
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
