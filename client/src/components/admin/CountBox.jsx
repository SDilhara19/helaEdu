import React from 'react';

const Dashboard = () => {
  const registeredStudents = 1500; 
  const registeredTeachers = 200;  
  const registeredModerators = 50;    

  return (
    <div className="flex justify-around p-8 space-x-4 ml-64"> {/* Add margin to left to accommodate sidebar */}
      <div className="bg-white shadow-lg p-6 rounded-lg text-center" style={{ width: 'calc(2.5in + 0.4in)', height: 'calc(2.5in + 0.4in)' }}>
        <h2 className="text-4xl font-black mb-4 text-black">Registered Students</h2>
        <div className="text-6xl font-extrabold mb-2 text-black">{registeredStudents}</div>
        <img src="https://png.pngtree.com/png-clipart/20190120/ourlarge/pngtree-school-student-illustration-student-reading-boy-student-hand-drawn-illustration-cartoon-png-image_493202.jpg" alt="Students" className="mx-auto w-64 h-64" />
      </div>
      <div className="bg-white shadow-lg p-6 rounded-lg text-center" style={{ width: 'calc(2.5in + 0.4in)', height: 'calc(2.5in + 0.4in)' }}>
        <h2 className="text-4xl font-black mb-4 text-black">Registered Teachers</h2>
        <div className="text-6xl font-extrabold mb-2 text-black">{registeredTeachers}</div>
        <img src="https://tse4.mm.bing.net/th?id=OIP.syfpsEg_wmYvNMNiSwPyXQHaH5&pid=Api&P=0&h=180" alt="Teachers" className="mx-auto w-64 h-64" />
      </div>
      <div className="bg-white shadow-lg p-6 rounded-lg text-center" style={{ width: 'calc(2.5in + 0.4in)', height: 'calc(2.5in + 0.4in)' }}>
        <h2 className="text-4xl font-black mb-4 text-black">Registered Moderators</h2>
        <div className="text-6xl font-extrabold mb-2 text-black">{registeredModerators}</div>
        <img src="https://static.vecteezy.com/system/resources/previews/009/952/525/non_2x/politician-cartoon-hand-drawn-illustration-with-election-and-democratic-governance-ideas-participate-in-political-debates-in-front-of-audience-vector.jpg" alt="Courses" className="mx-auto w-64 h-64" />
      </div>
    </div>
  );
};

export default Dashboard;
