import React, { useState } from 'react';
import { useStore } from '../store';

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const store = useStore();

  const handleSearch = () => {
    // Implement search functionality based on your requirements
    const filteredAppointments = store.appointments.filter((appointment) =>
      // Adjust the condition based on your search criteria
      appointment.veterinary?.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Update the store or state with filtered appointments
    // store.setFilteredAppointments(filteredAppointments);
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Search Appointments</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by veterinary name"
        className="p-2 border rounded-md"
      />
      <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
