import React from 'react';

const ModBtn = () => {
  return (
    <div className="flex justify-center space-x-12 ml-20">
      <button className="bg-blue text-black py-8 px-12 rounded-lg border border-gray-300 hover:bg-gray-100 text-2xl font-bold">
        Approved Moderators
      </button>
      <button className="bg-white text-black py-8 px-12 rounded-lg border border-gray-300 hover:bg-gray-100 text-2xl font-bold">
        Ongoing Approvals
      </button>
      <button className="bg-white text-black py-8 px-12 rounded-lg border border-gray-300 hover:bg-gray-100 text-2xl font-bold">
        Rejected Moderator Requests
      </button>
    </div>
  );
};

export default ModBtn;
