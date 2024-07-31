import React from "react";

const DashboardTableHeader = ({ user,name,email,validationProof,subjects}) => {
  return (
    <div>
    
      <div className="w-full flex justify-center my-4">
      
        <div className="border border-blue bg-blue rounded-2xl w-full h-14 flex justify-between items-center px-4 text-white">
          <div className="">
              <span className="text-white text-lg font-bold">{user}</span>
            </div>
          <div className="flex-1 px-2">
            <p className="text-xl">{name}</p>
          </div>
          <div className="flex-1 px-2">
            <p className="text-xl">{email}</p>
          </div>
          <div className="flex-1 px-2">
            <p className="text-xl">{validationProof}</p>
          </div>
          {/* <div className="flex-1 px-2">
            <p className="text-xl">{subjects}</p>
          </div> */}
         
          <div className="flex-1 px-2">
            <p className="text-xl"></p>
          </div>
          
        </div>
    </div>
    </div>
   
  );
};

export default DashboardTableHeader;
