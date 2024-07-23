import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Assignment from '@assets/img/articles/assignments.png';
import Articles from '@assets/img/articles/articles.png';
import Users from '@assets/img/articles/social-media.png';
import Notes from '@assets/img/articles/notes.png'
import Header from '@components/teacher_com/Header';
import ProfileHero from '@components/teacher_com/ProfileHero';
import { Footer } from '@components/common';
import { listTeacherDetails } from '@services/TeacherService';
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { Link } from 'react-router-dom';
const TProfile = () => {
  const [teacher, setTeacher] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authHeader = useAuthHeader();

  const headers = {
    Authorization: authHeader,
  };

  useEffect(() => {
    listTeacherDetails(headers)
      .then(response => {
        setTeacher(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [headers]);


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setIsModalOpen(false); // Close modal after submission
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <ProfileHero />
      {/* <h2>{authHeader}</h2> */}
      <div className='flex justify-between mr-32 ml-32 mt-32'>
        <div className='w-1/2 mr-12 mt-12 shadow-xl p-12'>
          <h2 className='text-3xl text-blue mb-3'>About me:</h2>
          <p className='text-2xl mb-6'> {teacher.about}</p>
          <div>
            <p className='text-2xl m-4'><span className='text-blue'>Email</span>: {teacher.email}</p>
            <p className='text-2xl m-4'><span className='text-blue'>Contact No</span>:  {teacher.contactNo}</p>
            <p className='text-2xl m-4'><span className='text-blue'>Working Institute / School</span>:  {teacher.school}</p>
            <p className='text-2xl m-4'><span className='text-blue'>Teaching Subject</span>: Science</p>
          </div>
          <div className='flex justify-end'>
            <div className='flex items-center justify-center rounded-full w-20 h-20 bg-yellow cursor-pointer' onClick={openModal}>
              <FontAwesomeIcon icon={faPencil} className='size-8' />
            </div>
          </div>
        </div>
        <div className='w-1/2 grid grid-cols-2 gap-8 mt-12'>
          <div className='shadow-xl rounded-lg w-full h-56 flex flex-col items-center justify-center text-xl font-semibold'>
            <img src={Assignment} className='w-20 h-20' alt='Assignments' />
            <br />
            <p className='text-2xl'>My Assignments</p>
          </div>
        <Link>
          <div className='shadow-xl rounded-lg w-full h-56 flex flex-col items-center justify-center text-xl font-semibold'>
              <img src={Articles} className='w-20 h-20' alt='Articles' />
              <p className='text-2xl'> My Articles</p>
            </div>
        </Link>
          
        <Link to="/">
          <div className='shadow-xl rounded-lg w-full h-56 flex flex-col items-center justify-center text-xl font-semibold'>
            <img src={Users} className='w-20 h-20' alt='Users' />
            {/* <p className='text-3xl'>20</p> */}
            <p className='text-2xl'>My Reputation Points</p>
          </div>
          </Link>
        <Link to="/">
          <div className='shadow-xl rounded-lg w-full h-56 flex flex-col items-center justify-center text-xl font-semibold'>
              <img src={Notes} className='w-20 h-20' alt='Users' />
              <p className='text-2xl'>My Notes</p>
            </div>
        </Link>
          
        </div>
      </div>
      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box max-w-5xl p-14">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-yellow" onClick={closeModal}>✕</button>
            <form onSubmit={handleSubmit}>
              <h3 className="font-bold text-4xl mb-4">Edit Profile</h3>
              <hr className='border-yellow border-t-4 w-1/4 hover:border-white transition duration-300 ease-in-out'></hr>
              <br></br>
              <div className='mb-4'>
                <label className='block text-2xl font-medium mb-2'>About You (Brief Introduction about yourself)</label>
                <textarea className='w-full rounded-xl p-2 h-24 border border-blue focus:border-yellow' defaultValue={teacher.aboutYou || ''} />
              </div>
              <div className='mb-4'>
                <label className='block text-2xl font-medium mb-2'>Email</label>
                <input type='email' className='w-full rounded-xl p-2 border border-blue focus:border-yellow' defaultValue={teacher.email || ''} />
              </div>
              <div className='mb-4'>
                <label className='block text-2xl font-medium mb-2'>Contact Number</label>
                <input type='text' className='w-full rounded-xl p-2 border border-blue focus:border-yellow' defaultValue={teacher.contactNo || ''} />
              </div>
              <div className='mb-4'>
                <label className='block text-2xl font-medium mb-2'>Working Institute / School</label>
                <input type='text' className='w-full rounded-xl p-2 border border-blue focus:border-yellow' defaultValue={teacher.workingInstitute || ''} />
              </div>
              <div className='mb-4'>
                <label className='block text-2xl font-medium mb-2'>Subject</label>
                <input type='text' className='w-full rounded-xl p-2 border border-blue focus:border-yellow' defaultValue={teacher.subject || ''} />
              </div>

              <button type="submit" className='mt-4 bg-blue text-2xl py-2 px-3 rounded hover:transition-shadow text-center justify-center'>Submit</button>
            </form>
          </div>
        </dialog>
      )}
      <Footer />
    </div>
  );
};

export default TProfile;
