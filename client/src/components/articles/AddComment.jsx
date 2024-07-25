import React, { useState } from 'react';
import AddArticleBtn from './AddArticleBtn';

export default function AddComment({ onAddComment }) {
  const [commentText, setCommentText] = useState('');

  const handlePostComment = () => {
    onAddComment(commentText);
    setCommentText('');
  };
  return (
    <div className='m-12'>
      <h1>Leave a Comment</h1>
      <hr className="border-yellow border-t-4 w-96"></hr><br></br>
      <br></br>
     <input className='border border-blue w-11/12 h-80 rounded-xl mt-7 mb-7'></input>
      <div className='flex justify-start'>
        
        <button className='bg-yellow text-white rounded-xl p-4 text-3xl' onClick={handlePostComment}>Post Comment</button>
      </div>
    </div>
  )
}
