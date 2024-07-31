import React, { useState } from 'react';
import { faComment as faCommentRegular } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpRegular } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HTMLReactParser from 'html-react-parser';
import Article from "@assets/img/articles/defaultArticle.jpg";


export default function ArticleCardMe({ imageUrl,  title, description, badges, status , date}) {

  const [isLiked, setIsLiked] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  const formattedDate = new Date(date).toLocaleDateString();
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleMark = () => {
    setIsMarked(!isMarked);
  };

  return (
    <div className='relative hover:scale-105 transition-transform'>
      <div className="relative card w-96 h-auto shadow-xl overflow-hidden bg-white">
        <div className="h-80">
          <figure className="h-full">
          {imageUrl ? (
            <img src={imageUrl} className="w-full h-full object-cover" alt="Article" />
          ):(
            <img src={Article} className="w-full h-full object-cover" alt="Article" />
          )}
            
          </figure>
        </div>
        {status && (
          <div className="absolute top-0 right-0">
          
            <div class="absolute top-0 right-0">
              <div class="w-32 h-8 absolute top-4 -right-8">
                  {status==='PENDING' ?(
                    <div class="h-full w-full bg-blue text-white text-center leading-8 text-lg transform rotate-45">
                    Pending
                    </div>
                  ):status=== 'APPROVED' ?(
                    <div class="h-full w-full bg-green-600 text-white text-center leading-8 text-lg transform rotate-45">
                        Approved
                    </div>
                  ):status ==='REJECTED' ?(
                    <div class="h-full w-full bg-red-600 text-white text-center leading-8 text-lg transform rotate-45">
                        Rejected
                    </div>
                  ):null}
                 
              </div>
            </div>
       
          </div>
        )}
        <div className="card-body p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                {/* <img className="w-8 h-8 rounded-full" src={Profile} alt="Author avatar" />
                <span className="text-sm ml-2">{authorName}</span> */}
              </div>
              <div className='flex items-center'>
                <span className="text-sm">{formattedDate}</span>
              </div>
            </div>
            <h2 className="card-title text-2xl line-clamp-3" >
              {title}
            </h2>
            <p className="text-base mt-1" >
            </p>
            <div className="flex flex-wrap mt-2 truncate-badges" >
              {badges && badges.length > 0 ? (
                badges.map((badge, index) => (
                  <div key={index} className="text-sm text-gray-700 mx-1">
                    {badge}
                  </div>
                ))
              ) : (
                <div className="text-sm text-transparent mx-1 placeholder-hidden" >
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
