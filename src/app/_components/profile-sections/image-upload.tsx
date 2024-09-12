'use client';

import React, { useState } from 'react';

const ImageUploadForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageError, setImageError] = useState('');
  const [preview, setPreview] = useState(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB limit
  const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png'];

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Validate file type
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        setImageError('Invalid file type. Only JPEG and PNG are allowed.');
        setSelectedImage(null);
        setPreview(null);
        return;
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        setImageError('File is too large. Maximum size is 5MB.');
        setSelectedImage(null);
        setPreview(null);
        return;
      }

      setImageError('');
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file)); // Create a preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedImage) {
      setImageError('Please select a valid image before submitting.');
      return;
    }

    // If everything is valid, handle the form submission logic
    const formData = new FormData();
    formData.append('image', selectedImage);

    // Send formData to server or handle it as needed
    console.log('Form submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image-upload">Upload Image:</label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
        />
        {imageError && <p style={{ color: 'red' }}>{imageError}</p>}
      </div>

      {preview && (
        <div>
          <p>Image Preview:</p>
          <img src={preview} alt="Preview" width="200px" />
        </div>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ImageUploadForm;

