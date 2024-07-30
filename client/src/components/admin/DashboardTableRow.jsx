import React from "react";

const DashboardTableRow = ({ name,email,validationProof,subjects}) => {
  return (
    <div>
    
      <div className="w-full flex justify-center my-4">
      
        <div className="border border-blue rounded-2xl w-full h-14 flex justify-between items-center px-4">
          <div className="bg-yellow rounded-full w-10 h-10 flex items-center justify-center mr-4">
              <span className="text-white text-lg font-bold">{name.charAt(0)}</span>
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
          <div className="flex-1 px-2">
            <p className="text-xl">{subjects}</p>
          </div>
          <div className="flex justify-between px-4">
            
              <div className="bg-blue rounded-2xl text-white text-lg px-2 py-1 mx-2">Approve

              </div>
              <div className="bg-red-500 rounded-2xl text-white text-lg px-2 py-1">Decline

              </div>
            
          </div>
          
        </div>
    </div>
    </div>
   
  );
};

export default DashboardTableRow;
