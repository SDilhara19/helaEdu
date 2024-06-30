import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function ArticleCard({
  imageUrl,
  authorImageUrl,
  authorName,
  date,
  title,
  description,
  badges
}) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 transition-transform">
        <figure>
          <img src={imageUrl} alt="Article" />
        </figure>
        <div className="card-body">
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <img className="w-10 h-10 rounded-full" src={authorImageUrl} alt="Author avatar" />
              <span className='text-lg ml-2'>{authorName}</span>
            </div>
            <div>
              <span className='text-lg'>{date}</span>
            </div>
          </div>
          <h2 className="card-title text-3xl mt-2">{title}</h2>
          <p className='text-lg mt-2'>{description}</p>
          <div className="card-actions justify-end mt-2"></div>
          <div className="flex justify-start mt-2">
            {badges.map((badge, index) => (
              <div key={index} className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-2">{badge}</div>
            ))}
          </div>
          <FontAwesomeIcon icon={faHeart} className="like-icon mt-2" />
        </div>
      </div>
    </div>
  );
}
