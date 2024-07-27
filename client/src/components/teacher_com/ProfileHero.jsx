import React, { useState } from 'react';
import profile from "@assets/img/articles/profile.jpg";
import cover from "@assets/img/articles/bannerP.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { addProfileImageToTeacher } from '@services/TeacherService';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import { useNavigate } from 'react-router-dom';
export default function ProfileHero({ email, name ,profileImg}) {

  const [profileImage, setProfileImage] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(profileImg);
  const navigator = useNavigate();
  const authHeader = useAuthHeader();
  const headers = {
    Authorization: authHeader,
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const src = URL.createObjectURL(file);
      setPreviewSrc(src);
      setProfileImage(file);
    }
  };

  const saveImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profilePicture", profileImage);
    formData.append("email", email);

    try {
      const response = await addProfileImageToTeacher(email, formData, headers);
      console.log('Image uploaded successfully:', response.data);
      setIsPopupOpen(false);
      navigator("/tProfile");

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleEditClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      {isPopupOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray1 z-50 bg-opacity-50'>
          <div className='bg-white p-6 rounded-md shadow-md'>
            <form onSubmit={saveImage}>
              <div className="flex items-center space-x-6">
                <div className="shrink-0">
                  <img
                    id="preview_img"
                    className="h-40 w-40 object-cover rounded-full"
                    src={previewSrc}
                    alt="Current profile photo"
                  />
                </div>
                <label className="block">
                  <span className="sr-only text-2xl">Choose profile photo</span>
                  <input
                    type="file"
                    onChange={handleProfileImageChange}
                    className="block w-full text-2xl text-gray1
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-2xl file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100"
                    name="profilePicture"
                  />
                </label>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-blue text-white px-2 py-1 rounded-md text-xl"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-2 py-1 rounded-md text-xl ml-2"
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="relative dark:bg-black">
        <div className='relative'>
          <img src={cover} className="w-full h-96 object-cover" alt="Cover" />
          <div className='absolute flex items-center justify-center rounded-full w-10 h-10 p-2 bottom-5 top-50 left-50 right-7 bg-yellow'>
            <FontAwesomeIcon icon={faPencil} className='size-6' />
          </div>
        </div>
        <div className="absolute top-3/4 left-32 rounded-full w-60 h-60">
          <div className='relative'>
            <div className='absolute flex items-center justify-center rounded-full w-10 h-10 p-2 bottom-0 top-6 left-50 right-0 bg-yellow'>
              <FontAwesomeIcon icon={faPencil} className='size-6' onClick={handleEditClick} />
            </div>
            <img src={previewSrc} className="rounded-full w-64 h-64 object-cover" alt="Profile" />
          </div>
        </div>
        <div className='absolute left-96 my-6 mx-10'>
          <h1 className='text-5xl'>{name}</h1>
          <p className='text-3xl'>Teacher</p>
          <div className='flex justify-start'>
            <div className='rounded-full w-16 h-16 bg-yellow'>
            </div>
            <div className='rounded-full w-16 h-16 bg-yellow mx-6'>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
