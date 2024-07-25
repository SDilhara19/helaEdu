import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordSection = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = () => {
    // Implement the logic to change the password
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="p-8 bg-white rounded-lg shadow-lg"
      style={{ marginLeft: '700px', marginTop: '-750px', width: '500px' }} // Adjusted margins
    >
      <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Change Password</h2> {/* Doubled the font size */}
      <div className="space-y-6"> {/* Increased space between elements */}
        <div>
          <label htmlFor="current-password" className="block text-lg font-medium mb-2">Current Password:</label> {/* Increased font size */}
          <div className="relative">
            <input
              id="current-password"
              type={showPassword ? 'text' : 'password'} // Toggle input type
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full bg-white border-2 border-blue-500 rounded-lg p-3" // Set styles
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="new-password" className="block text-lg font-medium mb-2">New Password:</label> {/* Increased font size */}
          <div className="relative">
            <input
              id="new-password"
              type={showPassword ? 'text' : 'password'} // Toggle input type
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-white border-2 border-blue-500 rounded-lg p-3" // Set styles
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="confirm-password" className="block text-lg font-medium mb-2">Confirm Password:</label> {/* Increased font size */}
          <div className="relative">
            <input
              id="confirm-password"
              type={showPassword ? 'text' : 'password'} // Toggle input type
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-white border-2 border-blue-500 rounded-lg p-3" // Set styles
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>
        <button
          onClick={handlePasswordChange}
          className="bg-blue-500 text-white text-lg px-6 py-3 rounded-lg mt-4 w-full" // Increased font size and adjusted button size
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PasswordSection;
