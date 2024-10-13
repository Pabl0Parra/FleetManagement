// src/components/Modal.jsx

import React from 'react';

const ModalBuoyDetails = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 max-w-md p-6 relative overflow-y-auto max-h-full"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          onClick={onClose}
          aria-label="Close Modal"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalBuoyDetails;
