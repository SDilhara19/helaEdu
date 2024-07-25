import React, { useState } from 'react';

const ProfilePhoto = ({ initialPhoto }) => {
  const [photo, setPhoto] = useState(initialPhoto);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="absolute left-4 transform translate-y-20">
      <label htmlFor="photo-upload" className="cursor-pointer">
        <img
          src={photo}
          alt="Profile"
          className="w-48 h-48 rounded-full border-2 border-gray-300 hover:border-blue-500 shadow-lg transition duration-300 object-cover"
        />
      </label>
      <input
        type="file"
        id="photo-upload"
        className="hidden"
        accept="image/*"
        onChange={handlePhotoChange}
      />
    </div>
  );
};

export default ProfilePhoto;
