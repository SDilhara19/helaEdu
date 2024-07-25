import React, { useState } from 'react';

export default function AddReply({ onCancel, onPostReply }) {
  const [replyText, setReplyText] = useState('');

  const handlePostReply = () => {
    onPostReply(replyText);
    setReplyText('');
  };
  return (
   
      <div className='m-12'>
        <div className='flex justify-start'>
            <div><h1>Reply to M.Perera</h1></div>
            <div> <button onClick={onCancel}  className='bg-yellow text-white rounded-xl p-4 text-3xl'>Cancel Reply</button></div>

        </div>
        <br></br>
        <input className='border border-blue w-11/12 h-80 rounded-xl mt-7 mb-7' value={replyText}
        onChange={(e) => setReplyText(e.target.value)}></input>
        <div className='flex justify-start'>
            <button className='bg-yellow text-white rounded-xl p-4 text-3xl' onClick={handlePostReply}> Post Reply</button>
        </div>
        </div>
   
  )
}
