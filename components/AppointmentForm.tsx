// components/AppointmentForm.tsx
import React, { useState } from 'react';
import { useStore } from '../store';
import { Appointment } from '../store/index';

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState<Appointment>({
    veterinary: { 
      id: undefined,
      name: '',
      image: '',
    },
    service: '',
    pet: {
      name: '',
      breed: '',
      age: '',
      gender: '',
      image: '',
    },
    ownerName: '',
    dateTime: '',
  });
  const store = useStore();

  const handleSubmit = () => {
    store.addAppointment(formData);
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Veterinary:</label>
        {/* Replace the input with a dropdown or modal to select a veterinary */}
        <input
          type="text"
          value={formData.veterinary?.name || ''}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              veterinary: { ...prev.veterinary, name: e.target.value },
            }))
          }
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Service:</label>
        <input
          type="text"
          value={formData.service}
          onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Pet Name:</label>
        <input
          type="text"
          value={formData.pet.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, pet: { ...prev.pet, name: e.target.value } }))}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Breed:</label>
        <input
          type="text"
          value={formData.pet.breed}
          onChange={(e) => setFormData((prev) => ({ ...prev, pet: { ...prev.pet, breed: e.target.value } }))}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Age:</label>
        <input
          type="text"
          value={formData.pet.age}
          onChange={(e) => setFormData((prev) => ({ ...prev, pet: { ...prev.pet, age: e.target.value } }))}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Gender:</label>
        <input
          type="text"
          value={formData.pet.gender}
          onChange={(e) => setFormData((prev) => ({ ...prev, pet: { ...prev.pet, gender: e.target.value } }))}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Pet Image:</label>
        <input
          type="text"
          value={formData.pet.image}
          onChange={(e) => setFormData((prev) => ({ ...prev, pet: { ...prev.pet, image: e.target.value } }))}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Owner Name:</label>
        <input
          type="text"
          value={formData.ownerName}
          onChange={(e) => setFormData((prev) => ({ ...prev, ownerName: e.target.value }))}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Appointment Date and Time:</label>
        <input
          type="datetime-local"
          value={formData.dateTime}
          onChange={(e) => setFormData((prev) => ({ ...prev, dateTime: e.target.value }))}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Submit Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
