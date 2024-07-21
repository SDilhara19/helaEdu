import React, { useState } from 'react';
import { faComment as faCommentRegular } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpRegular } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HTMLReactParser from 'html-react-parser';
import geography from "@assets/img/subjects/3.png";

export default function ArticleCard({ imageUrl, authorImageUrl, authorName, date, title, description, badges }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isMarked, setIsMarked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleMark = () => {
    setIsMarked(!isMarked);
  };

  // function truncateText(text, wordLimit) {
  //   const words = text.split(' ');
  //   if (words.length > wordLimit) {
  //     return words.slice(0, wordLimit).join(' ') + '...';
  //   }
  //   return text;
  // }

  // const truncatedDescription = truncateText(description, 20);
  // const parsedContent = HTMLReactParser(truncatedDescription);

  return (
    <div className="card w-96 shadow-xl hover:scale-105 transition-transform overflow-hidden">
      <div className="h-56 overflow-hidden">
        <figure className="h-full">
          <img src={geography} className="w-full h-full object-cover" alt="Article" />
        </figure>
      </div>
      <div className="card-body p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <img className="w-8 h-8 rounded-full" src={authorImageUrl} alt="Author avatar" />
            <span className="text-sm ml-2">{authorName}</span>
          </div>
          <div>
            <span className="text-sm">{date}</span>
          </div>
        </div>
        <h2 className="card-title text-2xl truncate" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </h2>
        <p className="text-xl mt-1 truncate" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {HTMLReactParser(description)}
        </p>
        <div className="flex flex-wrap mt-2">
          {badges && badges.map((badge, index) => (
            <div key={index} className="badge badge-secondary mr-2 mb-2 bg-yellow-500 text-blue-700 border-none">
              {badge}
            </div>
          ))}
        </div>
        <div className="flex items-center mt-3 space-x-4">
          <div className="relative">
            <FontAwesomeIcon
              icon={isLiked ? faThumbsUpSolid : faThumbsUpRegular}
              className="text-2xl"
              style={{ color: "#74C0FC", cursor: 'pointer', fontSize: '30px' }}
              onClick={toggleLike}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            />
            <span className="absolute  bottom-5 right-0 translate-x-1/2 translate-y-1/2 text-xs bg-blue2 text-black rounded-full w-6 h-6 flex items-center justify-center">12</span>
          </div>
          <div className="relative">
            <FontAwesomeIcon
              icon={faCommentRegular}
              className="text-2xl"
              style={{ color: "#74C0FC", cursor: 'pointer', fontSize: '30px' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            />
            <span className="absolute  bottom-5 right-0 translate-x-1/2 translate-y-1/2 text-xs bg-blue2 text-black rounded-full w-6 h-6 flex items-center justify-center">12</span>
          </div>
          <div className="relative">
            <FontAwesomeIcon
              icon={isMarked ? faBookmarkSolid : faBookmarkRegular}
              className="text-2xl"
              style={{ color: "#74C0FC", cursor: 'pointer', fontSize: '30px' }}
              onClick={toggleMark}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
