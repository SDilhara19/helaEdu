import React from "react";

const Dashboard = () => {
  const registeredStudents = 1500;
  const registeredTeachers = 200;
  const registeredModerators = 50;
  const totalRevenue = 100;

  return (
    <div className="flex justify-around p-8 space-x-4 ">
      {/* Box 1 */}
      <div
        className="bg-white shadow-xl p-3 rounded-lg text-center flex flex-col justify-center w-1/4 h-64"
        
      >
        <h2 className="text-3xl mb-2 text-blue">Students</h2>
        <div className="text-5xl text-black">{registeredStudents}</div>
      </div>

      {/* Box 2 */}
      <div
        className="bg-white shadow-xl p-3 rounded-lg text-center flex flex-col justify-center w-1/4"
        
      >
        <h2 className="text-3xl mb-2 text-blue">Teachers</h2>
        <div className="text-5xl text-black">{registeredTeachers}</div>
      </div>

      {/* Box 3 */}
      <div
        className="bg-white shadow-xl p-3 rounded-lg text-center flex flex-col justify-center w-1/4"
        
      >
        <h2 className="text-3xl mb-2 text-blue">Moderators</h2>
        <div className="text-5xl text-black">{registeredModerators}</div>
      </div>

      {/* Box 4 (New Box) */}
      <div
        className="bg-white shadow-xl p-3 rounded-lg text-center flex flex-col justify-center w-1/4"
        
      >
        <h2 className="text-3xl mb-2 text-blue">Total Revenue</h2>
        <div className="text-5xl text-black">${totalRevenue}</div>
      </div>
    </div>
  );
};

export default Dashboard;
