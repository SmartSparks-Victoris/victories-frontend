/* eslint-disable @next/next/no-img-element */
// app/components/FileUpload.tsx
'use client';

import { FC, useRef, useState } from 'react';

import { FileUploadProps } from '@/app/_types/shared-ui.types';

export default function FileUpload({ setValue }) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // Ensure the selected file is an image
      if (!file.type.startsWith('image/')) {
        setError('Please upload a valid image file');
        setSelectedFile(null);
        setPreview(null);
        return;
      }

      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setShowPopup(true);
      setError(null); // Clear any previous errors
      setValue('file', file);
    }
  };

  // Trigger the hidden file input click
  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  // Reset file input
  const handleReset = () => {
    setSelectedFile(null);
    setPreview(null);
    setValue('file', null);
    setError(null); // Clear error on reset
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Handle confirmation of the selection
  const handleConfirm = () => {
    setShowPopup(false);
  };

  // Handle cancelation of the selection
  const handleCancel = () => {
    setShowPopup(false);
    handleReset();
  };

  // Close popup when clicking outside
  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) {
      setShowPopup(false);
    }
  };

  return (
    <div className="">
      <div className="space-y-4">
        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*" // Only accept image files
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />

        {/* Custom File Input Trigger */}
        <button
          onClick={handleFileClick}
          className="border-[#999999] border-[1px] border-solid rounded-[16px] flex gap-2 px-[24px] py-[20px] w-[100%] flex-wrap items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.7098 17.565C19.5067 16.768 19.9544 15.6871 19.9544 14.56C19.9544 13.4329 19.5067 12.352 18.7098 11.555L12.1698 5.015C11.9821 4.82749 11.8767 4.57312 11.8766 4.30785C11.8765 4.04258 11.9818 3.78814 12.1693 3.6005C12.3568 3.41286 12.6111 3.30739 12.8764 3.3073C13.1417 3.3072 13.3961 3.41249 13.5838 3.6L20.1238 10.14C21.296 11.312 21.9547 12.9017 21.9549 14.5593C21.9551 16.2169 21.2968 17.8067 20.1248 18.979C18.9528 20.1513 17.3631 20.8099 15.7055 20.8101C14.0478 20.8103 12.458 20.152 11.2858 18.98L3.33176 11.025C2.48771 10.1808 2.01358 9.03591 2.01367 7.84215C2.01377 6.64838 2.48808 5.50355 3.33226 4.6595C4.17644 3.81545 5.32135 3.34132 6.51511 3.34141C7.70888 3.3415 8.85371 3.81582 9.69776 4.66L17.6508 12.613C18.1543 13.1317 18.4336 13.8276 18.4282 14.5505C18.4229 15.2734 18.1333 15.9652 17.622 16.4763C17.1108 16.9874 16.419 17.2768 15.6961 17.282C14.9732 17.2872 14.2773 17.0077 13.7588 16.504L6.51276 9.257C6.32512 9.06949 6.21965 8.81512 6.21956 8.54985C6.21946 8.28458 6.32475 8.03014 6.51226 7.8425C6.69977 7.65486 6.95414 7.54939 7.21941 7.5493C7.48468 7.5492 7.73912 7.65449 7.92676 7.842L15.1738 15.089C15.3146 15.23 15.5056 15.3092 15.7049 15.3093C15.9042 15.3094 16.0953 15.2303 16.2363 15.0895C16.3772 14.9487 16.4565 14.7576 16.4566 14.5584C16.4567 14.3591 16.3776 14.168 16.2368 14.027L8.28376 6.074C8.05158 5.84169 7.77592 5.65739 7.47252 5.53161C7.16911 5.40584 6.84391 5.34106 6.51547 5.34096C6.18703 5.34087 5.86178 5.40547 5.55831 5.53107C5.25483 5.65667 4.97907 5.84082 4.74676 6.073C4.27759 6.5419 4.01391 7.17798 4.01372 7.84129C4.01354 8.50461 4.27686 9.14083 4.74576 9.61L12.6998 17.564C13.4968 18.3609 14.5777 18.8086 15.7048 18.8086C16.8318 18.8086 17.9127 18.3609 18.7098 17.564V17.565Z"
              fill="#999999"
            />
          </svg>

          <p className="text-start">
            {selectedFile
              ? `Selected: ${selectedFile.name}`
              : 'Upload your file here'}
          </p>
        </button>

        {/* Error Message */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Reset Button */}
        {selectedFile && (
          <button onClick={handleReset} className="text-[14px] text-[#1A1A1A]">
            Reset File
          </button>
        )}

        {/* Popup Modal */}
        {showPopup && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleOutsideClick}>
            <div className="bg-white p-[32px] rounded-[16px] flex flex-col items-center">
              <img
                src={preview || ''}
                alt="Selected file"
                className="w-[200px] h-[200px] object-cover rounded-[16px]"
              />
              <p className="text-[14px] text-[#1A1A1A] mt-[16px]">
                {selectedFile?.name}
              </p>

              <div className="mt-[32px] space-x-[16px]">
                <button
                  onClick={handleConfirm}
                  className="bg-[#792D81] text-white px-[24px] py-[8px] rounded-[8px]">
                  Confirm
                </button>
                <button
                  onClick={handleCancel}
                  className="text-[#1A1A1A] border-[1px] border-[#1A1A1A] px-[24px] py-[8px] rounded-[8px]">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

