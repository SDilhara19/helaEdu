import React from 'react';

const Dashboard = () => {
  const registeredStudents = 1500; 
  const registeredTeachers = 200;  
  const registeredModerators = 50;
  const totalRevenue = 100;

  return (
    <div className="flex justify-around p-8 space-x-4" style={{ marginLeft: '200px', marginRight: '100px' }}>
      {/* Box 1 */}
      <div className="bg-white shadow-xl p-3 rounded-lg text-center flex flex-col justify-center" style={{ width: '278px', height: '150px' }}>
        <h2 className="text-3xl mb-2 text-blue-600">Students</h2>
        <div className="text-5xl text-black">{registeredStudents}</div>
      </div>

      {/* Box 2 */}
      <div className="bg-white shadow-xl p-3 rounded-lg text-center flex flex-col justify-center" style={{ width: '278px', height: '150px' }}>
        <h2 className="text-3xl mb-2 text-blue-600">Teachers</h2>
        <div className="text-5xl text-black">{registeredTeachers}</div>
      </div>

      {/* Box 3 */}
      <div className="bg-white shadow-xl p-3 rounded-lg text-center flex flex-col justify-center" style={{ width: '278px', height: '150px' }}>
        <h2 className="text-3xl mb-2 text-blue-600">Moderators</h2>
        <div className="text-5xl text-black">{registeredModerators}</div>
      </div>

      {/* Box 4 (New Box) */}
      <div className="bg-white shadow-xl p-3 rounded-lg text-center flex flex-col justify-center" style={{ width: '278px', height: '150px' }}>
        <h2 className="text-3xl mb-2 text-blue-600">Total Revenue</h2>
        <div className="text-5xl text-black">${totalRevenue}</div>
      </div>
    </div>
  );
};

export default Dashboard;
