import React from "react";

const DashboardTableRow = ({
  userId,
  userRole,
  recentActivity,
  lastAccessedDate,
  lastAccessedTime,
}) => {
  return (
    <div>
      {/* <div className="flex justify-start">
        <div><p className="">Teachers</p></div>
        <div><p>Students</p></div>
        <div><p>Moderators</p></div>
      </div> */}
      <div className="w-full flex justify-center my-4">
      
        <div className="border border-blue rounded-2xl w-10/12 h-20 flex justify-between items-center px-4">
          <div className="flex-1 px-2">
            <p className="text-xl">{userId}</p>
          </div>
          <div className="flex-1 px-2">
            <p className="text-xl">{userRole}</p>
          </div>
          <div className="flex-1 px-2">
            <p className="text-xl">{recentActivity}</p>
          </div>
          <div className="flex-1 px-2">
            <p className="text-xl">{lastAccessedDate}</p>
          </div>
          <div className="flex-1 px-2">
            <p className="text-xl">{lastAccessedTime}</p>
          </div>
        </div>
    </div>
    </div>
   
  );
};

export default DashboardTableRow;
