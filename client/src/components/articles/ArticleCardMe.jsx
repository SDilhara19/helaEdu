import React, { useState } from 'react';
import { faComment as faCommentRegular } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpRegular } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HTMLReactParser from 'html-react-parser';
import Article from "@assets/img/articles/article.jpg";
import Profile from '@assets/img/articles/profile.jpg';

export default function ArticleCardMe({ imageUrl, authorName, date, title, description, badges, status }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isMarked, setIsMarked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleMark = () => {
    setIsMarked(!isMarked);
  };

  return (
    <div className='relative hover:scale-105 transition-transform'>
      <div className="relative card w-96 h-auto shadow-xl overflow-hidden">
        <div className="h-80">
          <figure className="h-full">
            <img src={Article} className="w-full h-full object-cover" alt="Article" />
          </figure>
        </div>
        {status && (
          <div className="absolute top-0 right-0">
            {/* <div className="relative w-16 h-16 bg-red-800"> */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-16 border-l-transparent border-b-16 border-b-white">
                <div className="absolute top-[-20px] right-[-20px] transform rotate-45 w-48 text-center">
                  <span className="text-white text-xs font-bold">{status}</span>
                </div>
              </div>
            {/* </div> */}
          </div>
        )}
        <div className="card-body p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <img className="w-8 h-8 rounded-full" src={Profile} alt="Author avatar" />
                <span className="text-sm ml-2">{authorName}</span>
              </div>
              <div className='flex items-center'>
                <span className="text-sm">{date}</span>
              </div>
            </div>
            <h2 className="card-title text-2xl truncate" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {title}
            </h2>
            <p className="text-base mt-1" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {HTMLReactParser(description)}
            </p>
            <div className="flex flex-wrap mt-2 truncate" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {badges && badges.length > 0 ? (
                badges.map((badge, index) => (
                  <div key={index} className="text-sm text-gray-700 mx-1">
                    {badge}
                  </div>
                ))
              ) : (
                <div className="text-sm text-transparent mx-1" style={{ visibility: 'hidden' }}>
                  Placeholder
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center mt-3 space-x-4">
            <div className="relative">
              <FontAwesomeIcon
                icon={isLiked ? faThumbsUpSolid : faThumbsUpRegular}
                className="text-2xl"
                style={{ color: "#0A6CF5", cursor: 'pointer', fontSize: '25px' }}
                onClick={toggleLike}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              />
              <span className="absolute bottom-10 right-0 translate-x-1/2 translate-y-1/2 text-xs bg-black text-white rounded-full w-5 h-5 flex items-center justify-center">12</span>
            </div>
            <div className="relative">
              <FontAwesomeIcon
                icon={faCommentRegular}
                className="text-2xl"
                style={{ color: "#0A6CF5", cursor: 'pointer', fontSize: '25px' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              />
              <span className="absolute bottom-10 right-0 translate-x-1/2 translate-y-1/2 text-xs bg-black text-white rounded-full w-5 h-5 flex items-center justify-center">12</span>
            </div>
            <div className="relative">
              <FontAwesomeIcon
                icon={isMarked ? faBookmarkSolid : faBookmarkRegular}
                className="text-2xl"
                style={{ color: "#0A6CF5", cursor: 'pointer', fontSize: '25px' }}
                onClick={toggleMark}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}