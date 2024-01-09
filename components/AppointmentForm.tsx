import React, { useState } from 'react';
import { useAppointmentStore, Veterinary, Pet } from '../store';
import PetImageModal from './PetImageModal';
import Link from 'next/link';

const AppointmentForm: React.FC = () => {
  const addAppointment = useAppointmentStore((state) => state.addAppointment);

  const [veterinary, setVeterinary] = useState<Veterinary | null>(null);
  const [service, setService] = useState<string>('');
  const [pet, setPet] = useState<Pet>({
    name: '',
    breed: '',
    age: '',
    gender: '',
    image: '',
  });
  const [ownerName, setOwnerName] = useState<string>('');
  const [dateTime, setDateTime] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setPet((prevPet) => ({ ...prevPet, image: imageUrl }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (veterinary && service && pet.name && ownerName && dateTime) {
      const appointment = { veterinary, service, pet, ownerName, dateTime };
      addAppointment(appointment);
      console.log('UTC Conversion:', new Date(dateTime).toUTCString());

      // Clear the form after submission
      setVeterinary(null);
      setService('');
      setPet({
        name: '',
        breed: '',
        age: '',
        gender: '',
        image: '',
      });
      setOwnerName('');
      setDateTime('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Appointment Form</h2>

      {/* Select Veterinary */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Select Veterinary</label>
        <select
          value={veterinary?.name || ''}
          onChange={(e) => setVeterinary({ id: 1, name: e.target.value, image: 'dummy_image.jpg' })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="" disabled>
            Select Veterinary
          </option>
          <option value="Anika Perry">Anika Perry</option>
          <option value="Danica Jane">Danica Jane</option>
          <option value="John Fins">John Fins</option>
        </select>
      </div>

      {/* Service Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Service</label>
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter service"
        />
      </div>

      {/* Pet Information */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Pet Information</label>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={pet.name}
            onChange={(e) => setPet({ ...pet, name: e.target.value })}
            placeholder="Pet Name"
            className="mt-1 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            value={pet.breed}
            onChange={(e) => setPet({ ...pet, breed: e.target.value })}
            placeholder="Breed"
            className="mt-1 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            value={pet.age}
            onChange={(e) => setPet({ ...pet, age: e.target.value })}
            placeholder="Age"
            className="mt-1 p-2 border border-gray-300 rounded-md"
          />
          <div>
            <select
              value={pet.gender}
              onChange={(e) => setPet({ ...pet, gender: e.target.value })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <label className="col-span-2 block text-sm font-medium text-gray-700">Pet Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e)}
            className="mt-1 p-2 border border-gray-300 rounded-md col-span-2"
          />
          {/* Pet Image Preview Button */}
          {pet.image && (
            <div className="col-span-2 mt-2">
              <label className="block text-sm font-medium text-gray-700">Image Preview</label>
              <Link href="#" legacyBehavior>
                <a onClick={openModal} className="text-blue-500 hover:underline">
                  View Image
                </a>
              </Link>
            </div>
          )}

          {/* Pet Image Modal */}
          {isModalOpen && <PetImageModal imageUrl={pet.image} onClose={closeModal} />}
        </div>
      </div>

      {/* Owner Name Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Owner Name</label>
        <input
          type="text"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter owner name"
        />
      </div>

      {/* Date and Time Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Appointment Date and Time</label>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <button onClick={handleSubmit} className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-100 hover:text-orange-500">
        Submit
      </button>
    </div>
  );
};

export default AppointmentForm;
