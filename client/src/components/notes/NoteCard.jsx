import React from 'react'
import NoteView from './NoteView'

const NoteCard = ({ topic, subject, date, content }) => {
  const closeModal = () => {
    document.getElementById('my_modal_4').close();
  };

  return (
    <div className='relative mx-auto'>
      <div className='note-card' onClick={() => document.getElementById('my_modal_4').showModal()}>
        <div className='note-card-left'>
          <h3 className='special-text text-blue'>{topic}</h3>
        </div>
        <div className='note-card-right'>
          <p className='s-text'>{content}</p>
        </div>
      </div>
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white shadow-xl border text-black text-center w-52 rounded-md'>
          <p className='n-text-bold'>{subject}</p>
          <p className='s-text text-gray1'>{date}</p>
        </div>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>

          <NoteView topic={topic} date={date} subject={subject} content={content}/>
        </div>
      </dialog>
    </div>


  )
}

export default NoteCard


