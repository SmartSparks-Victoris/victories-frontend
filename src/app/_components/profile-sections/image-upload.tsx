/* eslint-disable @next/next/no-img-element */
'use client';

import { useRef, useState } from 'react';

interface ImageUploadProps {
  initialImageUrl?: string; // Pass the current image URL as a prop
  userId: string; // To identify the user for uploads and deletes
}

export default function ImageUpload({
  initialImageUrl,
  userId,
}: ImageUploadProps) {
  const [image, setImage] = useState<string | null>(initialImageUrl || null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // Control modal visibility
  const fileInputRef = useRef<HTMLInputElement>(null); // Reference to reset the file input
  const modalRef = useRef<HTMLDivElement>(null); // Reference for the modal content

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Preview the new image
      };
      reader.readAsDataURL(selectedFile);
      setShowModal(true); // Open the modal when a file is selected
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch(`/api/upload-image?userId=${userId}`, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setImage(data.imageUrl); // Assuming backend returns the new image URL
        setFile(null); // Clear the file input after upload
        setShowModal(false); // Close the modal
      } else {
        console.error('Failed to upload image');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/delete-image?userId=${userId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setImage(null); // Clear the image preview
      } else {
        console.error('Failed to delete image');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFile(null); // Clear the file selection
    setImage(initialImageUrl || null); // Revert image to the initial state
    setShowModal(false); // Close the modal without uploading
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset the file input
    }
  };

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    // Check if the click was outside the modal content
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCancel(); // Close the modal
    }
  };

  return (
    <div className="image-upload">
      <div className="flex items-center gap-[24px]">
        <div className="image-preview w-[80px] h-[80px] overflow-hidden rounded-full flex-shrink-0">
          {image ? (
            <img
              src={image}
              alt="Profile Preview"
              className="w-[80px] h-[80px] object-cover rounded-full"
            />
          ) : (
            <p>No image uploaded yet.</p>
          )}
        </div>

        <div className="flex gap-[8px] items-center flex-wrap">
          <label
            htmlFor="fileInput"
            className="cursor-pointer bg-[url('/images/service-background.png')] text-textWhite text-[12px] px-4 py-2 rounded-md inline-block w-fit h-fit">
            Upload Picture
          </label>
          <input
            id="fileInput"
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden" // Hide default file input
          />

          <button
            onClick={handleDelete}
            disabled={loading || !image}
            className="text-[#452033] text-[14px] p-[12px] rounded-md w-fit h-fit">
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div
          className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick} // Detect outside clicks
        >
          <div
            ref={modalRef}
            className="modal-content bg-white p-6 rounded-md shadow-md lg:w-[539px] w-[40%]">
            <h3 className="text-[#452033] text-[20px] font-bold">
              New Picture
            </h3>
            {image && (
              <img
                src={image}
                alt="Selected Preview"
                className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] object-cover rounded-full mt-[38px] mb-[50px] mx-auto"
              />
            )}

            <div className="modal-actions flex justify-center items-center flex-wrap">
              <button
                onClick={handleUpload}
                disabled={loading || !file}
                className="cursor-pointer bg-[url('/images/service-background.png')] text-textWhite text-[12px] px-4 py-2 rounded-md inline-block w-fit h-fit">
                {loading ? 'Uploading...' : 'Confirm'}
              </button>
              <button
                onClick={handleCancel}
                className="text-[#452033] text-[14px] p-[12px] rounded-md w-fit h-fit">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

