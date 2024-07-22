import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpRegular } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import HTMLReactParser from 'html-react-parser';
 import Image from '@assets/img/articles/original.jpg';
 import Profile from '@assets/img/articles/profile.jpg';
export default function ViewArticle({title,content,tags}) {
    const [isLiked, setIsLiked] = useState(false);
    const [isMarked, setIsMarked] = useState(false);
    const parsedContent =HTMLReactParser(content);
    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    const toggleMark = () => {
        setIsMarked(!isMarked);
    };

    return (
        <div>
            <div className=' rounded-2xl p-10 m-12'>
                <h1 className='text-5xl'>{title}</h1>
                <div className='card-actions flex justify-between mt-10'>
                    <div className='flex justify-start align-baseline'>
                        <img className="w-10 h-10 rounded-full" src={Profile} alt="Rounded avatar" />
                        <span className='text-2xl'>M.perera</span>
                    </div>
                    <div>
                        <span className='text-2xl'>23/09/2024</span>
                    </div>
                </div>
                {/* tags */}
                <div className="flex justify-start m-7">
                    { tags && tags.map((tag, index) => (
                        <div key={index} className="badge badge-secondary mr-2 bg-yellow border-none text-white text-lg px-7 py-5">
                        {tag}
                        </div>
                    ))}
                    </div>

                <div>
                    <img className="w-99/100 h-auto " src={Image} alt="Rounded avatar" />
                </div>
                
                <div className='text-xl mt-10'>
                    <p className='text-2xl'>
                        {parsedContent}
                    </p> <br />
                    {/* <p className='text-2xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p> <br />
                    <p className='text-2xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.

                        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p> */}
                </div>
                <div className='flex justify-between mx-9'>
                    <div className='rounded-xl m-2'>
                        <FontAwesomeIcon icon={faFile} className='text-4xl  hover:text-yellow  cursor-pointer hover:translate-x-1' style={{ color: '#6C6C6C'}} />
                        <span className='text-2xl  text-gray1 hover:text-yellow cursor-pointer'>myFile.pdf  </span>
                    </div>
                    <div className='flex justify-start'>
                        
                        <div className='relative'>
                            <span className="absolute bottom-10 right-9 translate-x-1/2 translate-y-1/2 text-xs bg-blue2 text-white rounded-full w-6 h-6 flex items-center justify-center">12</span>

                            <FontAwesomeIcon icon={isLiked ? faThumbsUpSolid : faThumbsUpRegular} className='text-xl size-14 mx-10 relative' style={{ color: "blue", cursor: 'pointer' }} onClick={toggleLike}onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} />
                        </div>
                        <div className='relative'>
                           
                            <FontAwesomeIcon icon={isMarked ? faBookmarkSolid : faBookmarkRegular} className='text-xl size-14' style={{ color: "blue", cursor: 'pointer' }} onClick={toggleMark} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
