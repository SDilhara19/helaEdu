import React , {useState} from 'react';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment as faCommentRegular} from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpRegular } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function ArticleCard({
  imageUrl,
  authorImageUrl,
  authorName,
  date,
  title,
  description,
  badges
}) {
    const [isLiked, setIsLiked] = useState(false);
    const [isMarked, setIsMarked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    const toggleMark = () => {
        setIsMarked(!isMarked);
    };

  
  return (
    <div>
      <Link to="/readArticles">
        <div className="card  w-96 shadow-xl  hover:scale-105 transition-transform ">
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
              {/* {badges.map((badge, index) => (
                <div key={index} className="badge badge-secondary mr-2 bg-yellow border-none text-blue p-2">{badge}</div>
              ))} */}
            </div>
            <div >
            <FontAwesomeIcon icon={isLiked ? faThumbsUpSolid : faThumbsUpRegular} className='text-xl size-10 m-2' style={{ color: "#74C0FC", cursor: 'pointer' }} onClick={toggleLike}onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} />

            <FontAwesomeIcon icon={faCommentRegular} className='text-xl size-10 my-2' style={{ color: "#74C0FC", cursor: 'pointer' }}  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}/><span className='text-blue text-lg'>45</span>

            <FontAwesomeIcon icon={isMarked ? faBookmarkSolid : faBookmarkRegular} className='text-xl size-10 my-2' style={{ color: "#74C0FC", cursor: 'pointer' }} onClick={toggleMark} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}/>

            </div>
          </div>
        </div>
        </Link>
      
    </div>
  );
}
