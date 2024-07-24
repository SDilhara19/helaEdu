import React from 'react';
import ProfilePhoto from '@/assets/img/articles/profile.jpg';

const AdminDetails = () => {
  const admin = {
    name: 'Pathumi Ahinsa', 
    email: 'pathuahinsa@example.com',
    role: 'Admin',
    lastLogin: '2024-07-20',
    phone: '+94 705760057',
    address: '123 Main Street, Colombo,Sri Lanka',
    profilePhoto: ProfilePhoto, 
  };

  return (
    <div className="flex justify-start items-start h-screen" style={{ marginLeft: '50px', marginTop: '50px' }}>
      <div 
        className="bg-white shadow-2xl rounded-lg p-12 w-[600px] h-[600px]" 
        style={{ boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)', outline: '2px solid blue' }}
      >
        {/* Profile Photo and Name */}
        <div className="flex flex-col items-center mb-8">
          <img 
            src={admin.profilePhoto} 
            alt="Profile Photo" 
            className="w-60 h-60 rounded-full object-cover border-4 border-blue-500"
          />
          <p className="text-3xl font-semibold mt-4">{admin.name}</p> {/* Display name below photo */}
        </div>
        
        {/* Admin Details */}
        <div className="text-left w-full">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Admin Details</h2>
          <div className="text-gray-600 space-y-4"> {/* Increased gap between text items */}
            <p className="text-2xl font-medium">Email: {admin.email}</p>
            <p className="text-2xl font-medium">Role: {admin.role}</p>
            <p className="text-2xl font-medium">Phone: {admin.phone}</p>
            <p className="text-2xl font-medium">Address: {admin.address}</p>
            
            <p className="text-2xl font-medium">Last Login: {admin.lastLogin}</p>
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={() => alert('Edit functionality to be implemented')}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg text-xl mt-6"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default AdminDetails;
