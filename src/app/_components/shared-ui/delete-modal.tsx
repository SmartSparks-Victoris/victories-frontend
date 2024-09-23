'use client';

import { revalidateAdmins } from '@/app/_actions/delete';
import { API_URL } from '@/app/_data/base';
import { useRouter } from 'nextjs-toploader/app';
import { useEffect, useRef, useTransition } from 'react';
import toast from 'react-hot-toast';

const DeleteModal = ({ show, onClose, admin, token }) => {
  const modalRef = useRef();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

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

  async function handleDeleteAdmin() {
    startTransition(async () => {
      try {
        const res = await fetch(`${API_URL}/api/admin/${admin.id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // Check if content-type is JSON
        onClose();
        // await revalidateAdmins();
        router.push('/admins');
        toast.success('Admin deleted successfully');
      } catch (error) {
        console.error('Error:', error);
        toast.error('Error deleting the admin');
      }
    });
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[99] w-[100%] h-[100%] top-0 left-0 flex justify-center items-center">
      <div
        className="bg-textNavBarPrimary p-6 rounded-lg max-w-lg mx-auto relative"
        ref={modalRef}>
        <h2 className="text-lg font-bold">Delete Admin</h2>
        <p className="mt-2 mb-3">
          Are you sure you want to delete {admin?.userName}?
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="text-tertiaryButton"
            disabled={isPending}>
            Cancel
          </button>
          <button
            onClick={handleDeleteAdmin}
            disabled={isPending}
            className="p-[12px] bg-[url('/images/service-background.png')] text-textNavBarPrimary rounded-sm">
            {isPending ? 'Deleting...' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

