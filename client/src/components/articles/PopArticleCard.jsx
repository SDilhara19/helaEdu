import React from 'react';
import Article from '@assets/img/articles/article.jpg'
import Profile from '@assets/img/articles/profile.jpg'

export default function PopArticleCard() {
  return (
    <div className="card card-side rounded-3xl shadow-xl h-48 mb-3 transform transition-transform duration-300 hover:translate-x-2 hover:translate-y-2 hover:-translate-x-2 hover:-translate-y-2">
      <figure className="w-1/3">
        <img
          src={Article}
          alt="Movie"
          className="h-full object-cover rounded-l-3xl"
        />
      </figure>
      <div className="card-body w-2/3 p-4 ">
        <h2 className="card-title text-2xl  ">The standard Lorem Ipsum passage, used since the 1500s</h2>
        <div className="card-actions flex justify-between mt-4">
          <div className="flex items-center space-x-2">
            <img
              className="w-10 h-10 rounded-full"
              src={Profile}
              alt="Rounded avatar"
            />
            <span className="text-lg ">M. Perera</span>
          </div>
          <div>
            <span className="text-lg ">23 March 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}
