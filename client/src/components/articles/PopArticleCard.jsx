import React from 'react';

import Profile from '@assets/img/articles/profile.jpg'

export default function PopArticleCard({title,userName,userProfile,imageRef,date}) {
  return (
    <div className="card card-side rounded-3xl shadow-xl h-48 mb-3 transform transition-transform duration-300 hover:translate-x-2 hover:translate-y-2 hover:-translate-x-2 hover:-translate-y-2">
      <figure className="w-1/3">
        <img
          src={imageRef}
          alt="Movie"
          className="h-full object-cover rounded-l-3xl"
        />
      </figure>
      <div className="card-body w-2/3 p-4 ">
        <h2 className="card-title text-2xl  ">{title}</h2>
        <div className="card-actions flex justify-between mt-4">
          <div className="flex items-center space-x-2 flex-1">
            <img
              className="w-10 h-10 rounded-full"
              src={userProfile}
              alt="Rounded avatar"
            />
            <span className="text-lg ">{userName}</span>
          </div>
          <div className='flex-1'>
            <span className="text-lg ">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
