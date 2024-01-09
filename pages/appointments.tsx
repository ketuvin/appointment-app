import React from 'react';
import AppointmentList from '../components/AppointmentList';
import SearchBar from '../components/SearchBar';

const AppointmentsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-6">Appointments</h1>
      <SearchBar />
      <AppointmentList />
    </div>
  );
};

export default AppointmentsPage;