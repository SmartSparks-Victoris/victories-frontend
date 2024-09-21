'use client';

import { useEffect, useRef } from 'react';

const DeleteModal = ({ show, onClose, admin }) => {
  const modalRef = useRef();

  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[99] w-[100%] h-[100%] top-0 left-0 flex justify-center items-center">
      <div
        className="bg-textWhite p-6 rounded-lg max-w-lg mx-auto relative"
        ref={modalRef}>
        <h2 className="text-lg font-bold">Delete Admin</h2>
        <p className="mt-[16px] mb-[24px]">
          Are you sure you want to delete {admin?.name}?
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="text-[#452033]">
            Cancel
          </button>
          <button
            onClick={onClose}
            className="p-[12px] bg-[url('/images/service-background.png')] text-textWhite rounded-[8px]">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

