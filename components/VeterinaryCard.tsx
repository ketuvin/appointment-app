import React from 'react';

interface VeterinaryCardProps {
  veterinary: { id: number; name: string; image: string };
}

const VeterinaryCard: React.FC<VeterinaryCardProps> = ({ veterinary }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-md">
      <img src={veterinary.image} alt={veterinary.name} className="mb-2 rounded-md" />
      <p className="text-lg font-semibold">{veterinary.name}</p>
      {/* Add other veterinary details based on your design */}
    </div>
  );
};

export default VeterinaryCard;
