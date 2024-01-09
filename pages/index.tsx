import React from 'react';
import AppointmentForm from '../components/AppointmentForm';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-6">Appointment Creation</h1>
      <AppointmentForm />
    </div>
  );
};

export default HomePage;