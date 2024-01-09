import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const PetImageModal: React.FC<{ imageUrl: string; onClose: () => void }> = ({ imageUrl, onClose }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const modal = (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-w-screen-md w-full p-4 bg-white rounded-md relative">
        <button className="absolute top-4 right-4 text-orange-500 hover:text-orange-100" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img src={imageUrl} alt="Full Resolution Pet Image" className="w-full h-full object-cover" />
      </div>
    </div>
  );

  return isClient ? createPortal(modal, document.body) : null;
};

export default PetImageModal;
