import React , {useState} from 'react';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment as faCommentRegular} from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpRegular } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HTMLReactParser from 'html-react-parser';
import geography from "@assets/img/subjects/3.png";


export default function ArticleCard({imageUrl,authorImageUrl,authorName,date,title,description,badges
}) {
    const [isLiked, setIsLiked] = useState(false);
    const [isMarked, setIsMarked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    const toggleMark = () => {
        setIsMarked(!isMarked);
    };

    function truncateText(text, wordLimit) {
      const words = text.split(' ');
      if (words.length > wordLimit) {
          return words.slice(0, wordLimit).join(' ') + '...';
      }
      return text;
  }
  const truncatedDescription = truncateText(description, 10);
  const parsedContent =HTMLReactParser(truncatedDescription);
  return (
    
    <div>
      {/* <Link to="/readArticles/2"> */}
        <div className="card  w-96 max-h-128 shadow-xl  hover:scale-105 transition-transform ">
          <figure>
            <img src={geography} className='w-96 max-h-60'alt="Article" />
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
            <p className='text-lg mt-2'>{parsedContent}</p>
            <div className="card-actions justify-end mt-2"></div>
            <div className="flex justify-start mt-1">
              {badges && badges.map((badge, index) => (
                <div key={index} className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-3 ">{badge}</div>
              ))}
            </div>
            <div >
            <FontAwesomeIcon icon={isLiked ? faThumbsUpSolid : faThumbsUpRegular} className='text-xl size-10 my-1 mx-2' style={{ color: "#74C0FC", cursor: 'pointer' }} onClick={toggleLike}onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} />

            <FontAwesomeIcon icon={faCommentRegular} className='text-xl size-10 my-2' style={{ color: "#74C0FC", cursor: 'pointer' }}  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}/><span className='text-blue text-lg'>45</span>

            <FontAwesomeIcon icon={isMarked ? faBookmarkSolid : faBookmarkRegular} className='text-xl size-10 my-2' style={{ color: "#74C0FC", cursor: 'pointer' }} onClick={toggleMark} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}/>

            </div>
          </div>
        </div>
        {/* </Link> */}
      
    </div>
  );
}
