import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export default function TopTeachers() {
  const teachers = [
    { name: 'K. Kulasingha', subject: 'Mathematics' },
    { name: 'K. Kulasingha', subject: 'Mathematics' },
    { name: 'K. Kulasingha', subject: 'Mathematics' },
    { name: 'K. Kulasingha', subject: 'Mathematics' },
  ];

  return (
    <div className=" p-4   ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl ">Top Teachers</h2>
        <a href="#" className="text-blue text-xl">See All</a>
      </div>
      <hr className="border-t-2 border-yellow mb-4 w-56" />
      <br></br>
      {teachers.map((teacher, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-2 mb-2 border border-blue rounded-lg"
        >
          <div className="flex items-center">
            <div className="bg-yellow rounded-full w-14 h-14 flex items-center justify-center mr-4">
              <span className="text-white text-lg font-bold">{teacher.name.charAt(0)}</span>
            </div>
            <div className='mx-8'>
              <p className="font-semibold text-2xl">{teacher.name}</p>
              <p className="text-gray1 text-xl">{teacher.subject}</p>
            </div>
          </div >
          <div className='mx-10'><FontAwesomeIcon icon={faEllipsisV} /></div>
          
        </div>
      ))}
    </div>
  );
}
